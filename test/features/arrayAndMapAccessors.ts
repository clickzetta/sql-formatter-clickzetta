import dedent from 'dedent-js';

import { FormatFn } from '../../src/sqlFormatter.js';

export default function supportsArrayAndMapAccessors(format: FormatFn) {
  it('supports square brackets for array indexing', () => {
    const result = format(`SELECT arr[1], order_lines[5].productId;`);
    expect(result).toBe(dedent`
      SELECT
        arr[1],
        order_lines[5].productId;
    `);
  });

  // The check for yota['foo.bar-baz'] is for Issue #230
  it('supports square brackets for map lookup', () => {
    const result = format(`SELECT alpha['a'], beta['gamma'].zeta, yota['foo.bar-baz'];`);
    expect(result).toBe(dedent`
      SELECT
        alpha['a'],
        beta['gamma'].zeta,
        yota['foo.bar-baz'];
    `);
  });

  it('supports square brackets for map lookup - uppercase', () => {
    const result = format(`SELECT Alpha['a'], Beta['gamma'].zeTa, yotA['foo.bar-baz'];`, {
      identifierCase: 'upper',
    });
    expect(result).toBe(dedent`
      SELECT
        ALPHA['a'],
        BETA['gamma'].ZETA,
        YOTA['foo.bar-baz'];
    `);
  });

  it('supports namespaced array identifiers', () => {
    const result = format(`SELECT foo.coalesce['blah'];`);
    expect(result).toBe(dedent`
      SELECT
        foo.coalesce['blah'];
    `);
  });

  it('formats array accessor with comment in-between', () => {
    const result = format(`SELECT arr /* comment */ [1];`);
    expect(result).toBe(dedent`
      SELECT
        arr/* comment */ [1];
    `);
  });

  it('formats namespaced array accessor with comment in-between', () => {
    const result = format(`SELECT foo./* comment */arr[1];`);
    expect(result).toBe(dedent`
      SELECT
        foo./* comment */ arr[1];
    `);
  });

  it('supports namespaced array identifiers in uppercase', () => {
    const result = format(`SELECT Foo.Coalesce['Blah'];`, { identifierCase: 'upper' });
    expect(result).toBe(dedent`
      SELECT
        FOO.COALESCE['Blah'];
    `);
  });

  it('supports namespaced array identifiers in lowercase', () => {
    const result = format(`SELECT Foo.Coalesce['Blah'];`, { identifierCase: 'lower' });
    expect(result).toBe(dedent`
      SELECT
        foo.coalesce['Blah'];
    `);
  });

  it('formats namespaced array accessor with comment in-between in uppercase', () => {
    const result = format(`SELECT foo./* comment */arr[1];`, { identifierCase: 'upper' });
    expect(result).toBe(dedent`
      SELECT
        FOO./* comment */ ARR[1];
    `);
  });

  it('formats namespaced array accessor with comment in-between in lowercase', () => {
    const result = format(`SELECT Foo./* comment */Arr[1];`, { identifierCase: 'lower' });
    expect(result).toBe(dedent`
      SELECT
        foo./* comment */ arr[1];
    `);
  });
}
