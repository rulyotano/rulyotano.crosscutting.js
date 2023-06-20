export default class Numeric {
  static Epsilon = 0.00001;

  /**
   * Equal function between two numbers
   */
  public static numericEqual(
    d1: number,
    d2: number,
    error = Numeric.Epsilon
  ): boolean {
    if (Number.isNaN(d1) && Number.isNaN(d2)) return true;
    return Math.abs(d1 - d2) < error;
  }

  public static middle(value1: number, value2: number) {
    return (value1 + value2) / 2.0;
  }
}
