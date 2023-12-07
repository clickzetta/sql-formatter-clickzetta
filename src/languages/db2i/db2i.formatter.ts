import { DialectOptions } from '../../dialect.js';
import { expandPhrases } from '../../expandPhrases.js';
import { functions } from './db2i.functions.js';
import { dataTypes, keywords } from './db2i.keywords.js';

const reservedSelect = expandPhrases(['SELECT [ALL | DISTINCT]']);

const reservedClauses = expandPhrases([
  // queries
  'WITH [RECURSIVE]',
  'INTO',
  'FROM',
  'WHERE',
  'GROUP BY',
  'HAVING',
  'PARTITION BY',
  'ORDER [SIBLINGS] BY [INPUT SEQUENCE]',
  'LIMIT',
  'OFFSET',
  'FETCH {FIRST | NEXT}',
  'FOR UPDATE [OF]',
  'FOR READ ONLY',
  'OPTIMIZE FOR',
  // Data modification
  // - insert:
  'INSERT INTO',
  'VALUES',
  // - update:
  'SET',
  // - merge:
  'MERGE INTO',
  'WHEN [NOT] MATCHED [THEN]',
  'UPDATE SET',
  'DELETE',
  'INSERT',
  // Data definition - table
  'FOR SYSTEM NAME',
]);

const onelineClauses = expandPhrases([
  // - create:
  'CREATE [OR REPLACE] TABLE',
  'CREATE [OR REPLACE] [RECURSIVE] VIEW',
  // - update:
  'UPDATE',
  'WHERE CURRENT OF',
  'WITH {NC | RR | RS | CS | UR}',
  // - delete:
  'DELETE FROM',
  // - drop table:
  'DROP TABLE',
  // alter table:
  'ALTER TABLE',
  'ADD [COLUMN]',
  'ALTER [COLUMN]',
  'DROP [COLUMN]',
  'SET DATA TYPE', // for alter column
  'SET {GENERATED ALWAYS | GENERATED BY DEFAULT}', // for alter column
  'SET NOT NULL', // for alter column
  'SET {NOT HIDDEN | IMPLICITLY HIDDEN}', // for alter column
  'SET FIELDPROC', // for alter column
  'DROP {DEFAULT | NOT NULL | GENERATED | IDENTITY | ROW CHANGE TIMESTAMP | FIELDPROC}', // for alter column
  // - truncate:
  'TRUNCATE [TABLE]',
  // other
  'SET [CURRENT] SCHEMA',
  'SET CURRENT_SCHEMA',
  // https://www.ibm.com/docs/en/i/7.5?topic=reference-statements
  'ALLOCATE CURSOR',
  'ALLOCATE [SQL] DESCRIPTOR [LOCAL | GLOBAL] SQL',
  'ALTER [SPECIFIC] {FUNCTION | PROCEDURE}',
  'ALTER {MASK | PERMISSION | SEQUENCE | TRIGGER}',
  'ASSOCIATE [RESULT SET] {LOCATOR | LOCATORS}',
  'BEGIN DECLARE SECTION',
  'CALL',
  'CLOSE',
  'COMMENT ON {ALIAS | COLUMN | CONSTRAINT | INDEX | MASK | PACKAGE | PARAMETER | PERMISSION | SEQUENCE | TABLE | TRIGGER | VARIABLE | XSROBJECT}',
  'COMMENT ON [SPECIFIC] {FUNCTION | PROCEDURE | ROUTINE}',
  'COMMENT ON PARAMETER SPECIFIC {FUNCTION | PROCEDURE | ROUTINE}',
  'COMMENT ON [TABLE FUNCTION] RETURN COLUMN',
  'COMMENT ON [TABLE FUNCTION] RETURN COLUMN SPECIFIC [PROCEDURE | ROUTINE]',
  'COMMIT [WORK] [HOLD]',
  'CONNECT [TO | RESET] USER',
  'CREATE [OR REPLACE] {ALIAS | FUNCTION | MASK | PERMISSION | PROCEDURE | SEQUENCE | TRIGGER | VARIABLE}',
  'CREATE [ENCODED VECTOR] INDEX',
  'CREATE UNIQUE [WHERE NOT NULL] INDEX',
  'CREATE SCHEMA',
  'CREATE TYPE',
  'DEALLOCATE [SQL] DESCRIPTOR [LOCAL | GLOBAL]',
  'DECLARE CURSOR',
  'DECLARE GLOBAL TEMPORARY TABLE',
  'DECLARE',
  'DESCRIBE CURSOR',
  'DESCRIBE INPUT',
  'DESCRIBE [OUTPUT]',
  'DESCRIBE {PROCEDURE | ROUTINE}',
  'DESCRIBE TABLE',
  'DISCONNECT ALL [SQL]',
  'DISCONNECT [CURRENT]',
  'DROP {ALIAS | INDEX | MASK | PACKAGE | PERMISSION | SCHEMA | SEQUENCE | TABLE | TYPE | VARIABLE | XSROBJECT} [IF EXISTS]',
  'DROP [SPECIFIC] {FUNCTION | PROCEDURE | ROUTINE} [IF EXISTS]',
  'END DECLARE SECTION',
  'EXECUTE [IMMEDIATE]',
  // 'FETCH {NEXT | PRIOR | FIRST | LAST | BEFORE | AFTER | CURRENT} [FROM]',
  'FREE LOCATOR',
  'GET [SQL] DESCRIPTOR [LOCAL | GLOBAL]',
  'GET [CURRENT | STACKED] DIAGNOSTICS',
  'GRANT {ALL [PRIVILEGES] | ALTER | EXECUTE} ON {FUNCTION | PROCEDURE | ROUTINE | PACKAGE | SCHEMA | SEQUENCE | TABLE | TYPE | VARIABLE | XSROBJECT}',
  'HOLD LOCATOR',
  'INCLUDE',
  'LABEL ON {ALIAS | COLUMN | CONSTRAINT | INDEX | MASK | PACKAGE | PERMISSION | SEQUENCE | TABLE | TRIGGER | VARIABLE | XSROBJECT}',
  'LABEL ON [SPECIFIC] {FUNCTION | PROCEDURE | ROUTINE}',
  'LOCK TABLE',
  'OPEN',
  'PREPARE',
  'REFRESH TABLE',
  'RELEASE',
  'RELEASE [TO] SAVEPOINT',
  'RENAME [TABLE | INDEX] TO',
  'REVOKE {ALL [PRIVILEGES] | ALTER | EXECUTE} ON {FUNCTION | PROCEDURE | ROUTINE | PACKAGE | SCHEMA | SEQUENCE | TABLE | TYPE | VARIABLE | XSROBJECT}',
  'ROLLBACK [WORK] [HOLD | TO SAVEPOINT]',
  'SAVEPOINT',
  'SET CONNECTION',
  'SET CURRENT {DEBUG MODE | DECFLOAT ROUNDING MODE | DEGREE | IMPLICIT XMLPARSE OPTION | TEMPORAL SYSTEM_TIME}',
  'SET [SQL] DESCRIPTOR [LOCAL | GLOBAL]',
  'SET ENCRYPTION PASSWORD',
  'SET OPTION',
  'SET {[CURRENT [FUNCTION]] PATH | CURRENT_PATH}',
  'SET RESULT SETS [WITH RETURN [TO CALLER | TO CLIENT]]',
  'SET SESSION AUTHORIZATION',
  'SET SESSION_USER',
  'SET TRANSACTION',
  'SIGNAL SQLSTATE [VALUE]',
  'TAG',
  'TRANSFER OWNERSHIP OF',
  'WHENEVER {NOT FOUND | SQLERROR | SQLWARNING}',
]);

const reservedSetOperations = expandPhrases(['UNION [ALL]', 'EXCEPT [ALL]', 'INTERSECT [ALL]']);

const reservedJoins = expandPhrases([
  'JOIN',
  '{LEFT | RIGHT | FULL} [OUTER] JOIN',
  '[LEFT | RIGHT] EXCEPTION JOIN',
  '{INNER | CROSS} JOIN',
]);

const reservedPhrases = expandPhrases([
  'ON DELETE',
  'ON UPDATE',
  'SET NULL',
  '{ROWS | RANGE} BETWEEN',
]);

// https://www.ibm.com/docs/en/i/7.5?topic=reference-sql
export const db2i: DialectOptions = {
  name: 'db2i',
  tokenizerOptions: {
    reservedSelect,
    reservedClauses: [...reservedClauses, ...onelineClauses],
    reservedSetOperations,
    reservedJoins,
    reservedPhrases,
    reservedKeywords: keywords,
    reservedDataTypes: dataTypes,
    reservedFunctionNames: functions,
    nestedBlockComments: true,
    extraParens: ['[]'],
    stringTypes: [
      { quote: "''-qq", prefixes: ['G', 'N'] },
      { quote: "''-raw", prefixes: ['X', 'BX', 'GX', 'UX'], requirePrefix: true },
    ],
    identTypes: [`""-qq`],
    identChars: { first: '@#$', rest: '@#$' },
    paramTypes: { positional: true, named: [':'] },
    paramChars: { first: '@#$', rest: '@#$' },
    operators: ['**', '¬=', '¬>', '¬<', '!>', '!<', '||', '=>'],
  },
  formatOptions: {
    onelineClauses,
  },
};
