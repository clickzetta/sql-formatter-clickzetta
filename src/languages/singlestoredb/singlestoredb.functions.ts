export const functions: string[] = [
  // https://docs.singlestore.com/managed-service/en/reference/sql-reference/vector-functions/vector-functions.html
  // https://docs.singlestore.com/managed-service/en/reference/sql-reference/window-functions/window-functions.html
  // https://docs.singlestore.com/managed-service/en/reference/sql-reference/string-functions/string-functions.html
  // https://docs.singlestore.com/managed-service/en/reference/sql-reference/conditional-functions/conditional-functions.html
  // https://docs.singlestore.com/managed-service/en/reference/sql-reference/numeric-functions/numeric-functions.html
  // https://docs.singlestore.com/managed-service/en/reference/sql-reference/geospatial-functions/geospatial-functions.html
  // https://docs.singlestore.com/managed-service/en/reference/sql-reference/json-functions/json-functions.html
  // https://docs.singlestore.com/managed-service/en/reference/sql-reference/information-functions/information-functions.html
  // https://docs.singlestore.com/managed-service/en/reference/sql-reference/aggregate-functions/aggregate-functions.html
  // https://docs.singlestore.com/managed-service/en/reference/sql-reference/time-series-functions/time-series-functions.html
  // https://docs.singlestore.com/managed-service/en/reference/sql-reference/identifier-generation-functions.html
  // https://docs.singlestore.com/managed-service/en/reference/sql-reference/date-and-time-functions/date-and-time-functions.html
  // https://docs.singlestore.com/managed-service/en/reference/sql-reference/distinct-count-estimation-functions.html
  // https://docs.singlestore.com/managed-service/en/reference/sql-reference/full-text-search-functions/full-text-search-functions.html
  // https://docs.singlestore.com/managed-service/en/reference/sql-reference/regular-expression-functions.html
  'ABS',
  'ACOS',
  'ADDDATE',
  'ADDTIME',
  'AES_DECRYPT',
  'AES_ENCRYPT',
  'ANY_VALUE',
  'APPROX_COUNT_DISTINCT',
  'APPROX_COUNT_DISTINCT_ACCUMULATE',
  'APPROX_COUNT_DISTINCT_COMBINE',
  'APPROX_COUNT_DISTINCT_ESTIMATE',
  'APPROX_GEOGRAPHY_INTERSECTS',
  'APPROX_PERCENTILE',
  'ASCII',
  'ASIN',
  'ATAN',
  'ATAN2',
  'AVG',
  'BIN',
  'BINARY',
  'BIT_AND',
  'BIT_COUNT',
  'BIT_OR',
  'BIT_XOR',
  'CAST',
  'CEIL',
  'CEILING',
  'CHAR',
  'CHARACTER_LENGTH',
  'CHAR_LENGTH',
  'CHARSET',
  'COALESCE',
  'COERCIBILITY',
  'COLLATION',
  'COLLECT',
  'CONCAT',
  'CONCAT_WS',
  'CONNECTION_ID',
  'CONV',
  'CONVERT',
  'CONVERT_TZ',
  'COS',
  'COT',
  'COUNT',
  'CUME_DIST',
  'CURDATE',
  'CURRENT_DATE',
  'CURRENT_ROLE',
  'CURRENT_TIME',
  'CURRENT_TIMESTAMP',
  'CURRENT_USER',
  'CURTIME',
  'DATABASE',
  'DATE',
  'DATE_ADD',
  'DATEDIFF',
  'DATE_FORMAT',
  'DATE_SUB',
  'DATE_TRUNC',
  'DAY',
  'DAYNAME',
  'DAYOFMONTH',
  'DAYOFWEEK',
  'DAYOFYEAR',
  'DECODE',
  'DEFAULT',
  'DEGREES',
  'DENSE_RANK',
  'DIV',
  'DOT_PRODUCT',
  'ELT',
  'EUCLIDEAN_DISTANCE',
  'EXP',
  'EXTRACT',
  'FIELD',
  'FIRST',
  'FIRST_VALUE',
  'FLOOR',
  'FORMAT',
  'FOUND_ROWS',
  'FROM_BASE64',
  'FROM_DAYS',
  'FROM_UNIXTIME',
  'GEOGRAPHY_AREA',
  'GEOGRAPHY_CONTAINS',
  'GEOGRAPHY_DISTANCE',
  'GEOGRAPHY_INTERSECTS',
  'GEOGRAPHY_LATITUDE',
  'GEOGRAPHY_LENGTH',
  'GEOGRAPHY_LONGITUDE',
  'GEOGRAPHY_POINT',
  'GEOGRAPHY_WITHIN_DISTANCE',
  'GEOMETRY_AREA',
  'GEOMETRY_CONTAINS',
  'GEOMETRY_DISTANCE',
  'GEOMETRY_FILTER',
  'GEOMETRY_INTERSECTS',
  'GEOMETRY_LENGTH',
  'GEOMETRY_POINT',
  'GEOMETRY_WITHIN_DISTANCE',
  'GEOMETRY_X',
  'GEOMETRY_Y',
  'GREATEST',
  'GROUPING',
  'GROUP_CONCAT',
  'HEX',
  'HIGHLIGHT',
  'HOUR',
  'ICU_VERSION',
  'IF',
  'IFNULL',
  'INET_ATON',
  'INET_NTOA',
  'INET6_ATON',
  'INET6_NTOA',
  'INITCAP',
  'INSERT',
  'INSTR',
  'INTERVAL',
  'IS',
  'IS NULL',
  'JSON_AGG',
  'JSON_ARRAY_CONTAINS_DOUBLE',
  'JSON_ARRAY_CONTAINS_JSON',
  'JSON_ARRAY_CONTAINS_STRING',
  'JSON_ARRAY_PUSH_DOUBLE',
  'JSON_ARRAY_PUSH_JSON',
  'JSON_ARRAY_PUSH_STRING',
  'JSON_DELETE_KEY',
  'JSON_EXTRACT_DOUBLE',
  'JSON_EXTRACT_JSON',
  'JSON_EXTRACT_STRING',
  'JSON_EXTRACT_BIGINT',
  'JSON_GET_TYPE',
  'JSON_LENGTH',
  'JSON_SET_DOUBLE',
  'JSON_SET_JSON',
  'JSON_SET_STRING',
  'JSON_SPLICE_DOUBLE',
  'JSON_SPLICE_JSON',
  'JSON_SPLICE_STRING',
  'LAG',
  'LAST_DAY',
  'LAST_VALUE',
  'LCASE',
  'LEAD',
  'LEAST',
  'LEFT',
  'LENGTH',
  'LIKE',
  'LN',
  'LOCALTIME',
  'LOCALTIMESTAMP',
  'LOCATE',
  'LOG',
  'LOG10',
  'LOG2',
  'LPAD',
  'LTRIM',
  'MATCH',
  'MAX',
  'MD5',
  'MEDIAN',
  'MICROSECOND',
  'MIN',
  'MINUTE',
  'MOD',
  'MONTH',
  'MONTHNAME',
  'MONTHS_BETWEEN',
  'NOT',
  'NOW',
  'NTH_VALUE',
  'NTILE',
  'NULLIF',
  'OCTET_LENGTH',
  'PERCENT_RANK',
  'PERCENTILE_CONT',
  'PERCENTILE_DISC',
  'PI',
  'PIVOT',
  'POSITION',
  'POW',
  'POWER',
  'QUARTER',
  'QUOTE',
  'RADIANS',
  'RAND',
  'RANK',
  'REGEXP',
  'REPEAT',
  'REPLACE',
  'REVERSE',
  'RIGHT',
  'RLIKE',
  'ROUND',
  'ROW_COUNT',
  'ROW_NUMBER',
  'RPAD',
  'RTRIM',
  'SCALAR',
  'SCHEMA',
  'SEC_TO_TIME',
  'SHA1',
  'SHA2',
  'SIGMOID',
  'SIGN',
  'SIN',
  'SLEEP',
  'SPLIT',
  'SOUNDEX',
  'SOUNDS LIKE',
  'SOURCE_POS_WAIT',
  'SPACE',
  'SQRT',
  'STDDEV',
  'STDDEV_POP',
  'STDDEV_SAMP',
  'STR_TO_DATE',
  'SUBDATE',
  'SUBSTR',
  'SUBSTRING',
  'SUBSTRING_INDEX',
  'SUM',
  'SYS_GUID',
  'TAN',
  'TIME',
  'TIMEDIFF',
  'TIME_BUCKET',
  'TIME_FORMAT',
  'TIMESTAMP',
  'TIMESTAMPADD',
  'TIMESTAMPDIFF',
  'TIME_TO_SEC',
  'TO_BASE64',
  'TO_CHAR',
  'TO_DAYS',
  'TO_JSON',
  'TO_NUMBER',
  'TO_SECONDS',
  'TO_TIMESTAMP',
  'TRIM',
  'TRUNC',
  'TRUNCATE',
  'UCASE',
  'UNHEX',
  'UNIX_TIMESTAMP',
  'UPDATEXML',
  'UPPER',
  // 'USER',
  'UTC_DATE',
  'UTC_TIME',
  'UTC_TIMESTAMP',
  'UUID',
  'VALUES',
  'VARIANCE',
  'VAR_POP',
  'VAR_SAMP',
  'VECTOR_SUB',
  'VERSION',
  'WEEK',
  'WEEKDAY',
  'WEEKOFYEAR',
  'YEAR',
  // Data types with parameters
  // https://docs.singlestore.com/managed-service/en/reference/sql-reference/data-types.html
  'BIT',
  'TINYINT',
  'SMALLINT',
  'MEDIUMINT',
  'INT',
  'INTEGER',
  'BIGINT',
  'DECIMAL',
  'DEC',
  'NUMERIC',
  'FIXED',
  'FLOAT',
  'DOUBLE',
  'DOUBLE PRECISION',
  'REAL',
  'DATETIME',
  'TIMESTAMP',
  'TIME',
  'YEAR',
  'CHAR',
  'NATIONAL CHAR',
  'VARCHAR',
  'NATIONAL VARCHAR',
  'BINARY',
  'VARBINARY',
  'BLOB',
  'TEXT',
  'ENUM',
];
