
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Bike
 * 
 */
export type Bike = $Result.DefaultSelection<Prisma.$BikePayload>
/**
 * Model Park
 * 
 */
export type Park = $Result.DefaultSelection<Prisma.$ParkPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Rental
 * 
 */
export type Rental = $Result.DefaultSelection<Prisma.$RentalPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bikes
 * const bikes = await prisma.bike.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Bikes
   * const bikes = await prisma.bike.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.bike`: Exposes CRUD operations for the **Bike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bikes
    * const bikes = await prisma.bike.findMany()
    * ```
    */
  get bike(): Prisma.BikeDelegate<ExtArgs>;

  /**
   * `prisma.park`: Exposes CRUD operations for the **Park** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parks
    * const parks = await prisma.park.findMany()
    * ```
    */
  get park(): Prisma.ParkDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.rental`: Exposes CRUD operations for the **Rental** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rentals
    * const rentals = await prisma.rental.findMany()
    * ```
    */
  get rental(): Prisma.RentalDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Bike: 'Bike',
    Park: 'Park',
    User: 'User',
    Rental: 'Rental'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'bike' | 'park' | 'user' | 'rental'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Bike: {
        payload: Prisma.$BikePayload<ExtArgs>
        fields: Prisma.BikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BikeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BikeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BikePayload>
          }
          findFirst: {
            args: Prisma.BikeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BikeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BikePayload>
          }
          findMany: {
            args: Prisma.BikeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BikePayload>[]
          }
          create: {
            args: Prisma.BikeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BikePayload>
          }
          createMany: {
            args: Prisma.BikeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BikeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BikePayload>
          }
          update: {
            args: Prisma.BikeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BikePayload>
          }
          deleteMany: {
            args: Prisma.BikeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BikeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BikeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BikePayload>
          }
          aggregate: {
            args: Prisma.BikeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBike>
          }
          groupBy: {
            args: Prisma.BikeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BikeCountArgs<ExtArgs>,
            result: $Utils.Optional<BikeCountAggregateOutputType> | number
          }
        }
      }
      Park: {
        payload: Prisma.$ParkPayload<ExtArgs>
        fields: Prisma.ParkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParkPayload>
          }
          findFirst: {
            args: Prisma.ParkFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParkPayload>
          }
          findMany: {
            args: Prisma.ParkFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParkPayload>[]
          }
          create: {
            args: Prisma.ParkCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParkPayload>
          }
          createMany: {
            args: Prisma.ParkCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ParkDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParkPayload>
          }
          update: {
            args: Prisma.ParkUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParkPayload>
          }
          deleteMany: {
            args: Prisma.ParkDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ParkUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ParkUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParkPayload>
          }
          aggregate: {
            args: Prisma.ParkAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePark>
          }
          groupBy: {
            args: Prisma.ParkGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ParkGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkCountArgs<ExtArgs>,
            result: $Utils.Optional<ParkCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Rental: {
        payload: Prisma.$RentalPayload<ExtArgs>
        fields: Prisma.RentalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentalFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentalFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          findFirst: {
            args: Prisma.RentalFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentalFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          findMany: {
            args: Prisma.RentalFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>[]
          }
          create: {
            args: Prisma.RentalCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          createMany: {
            args: Prisma.RentalCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RentalDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          update: {
            args: Prisma.RentalUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          deleteMany: {
            args: Prisma.RentalDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RentalUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RentalUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          aggregate: {
            args: Prisma.RentalAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRental>
          }
          groupBy: {
            args: Prisma.RentalGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RentalGroupByOutputType>[]
          }
          count: {
            args: Prisma.RentalCountArgs<ExtArgs>,
            result: $Utils.Optional<RentalCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BikeCountOutputType
   */

  export type BikeCountOutputType = {
    Rental: number
  }

  export type BikeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rental?: boolean | BikeCountOutputTypeCountRentalArgs
  }

  // Custom InputTypes

  /**
   * BikeCountOutputType without action
   */
  export type BikeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BikeCountOutputType
     */
    select?: BikeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BikeCountOutputType without action
   */
  export type BikeCountOutputTypeCountRentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalWhereInput
  }



  /**
   * Count Type ParkCountOutputType
   */

  export type ParkCountOutputType = {
    Bike: number
  }

  export type ParkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bike?: boolean | ParkCountOutputTypeCountBikeArgs
  }

  // Custom InputTypes

  /**
   * ParkCountOutputType without action
   */
  export type ParkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkCountOutputType
     */
    select?: ParkCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ParkCountOutputType without action
   */
  export type ParkCountOutputTypeCountBikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BikeWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Rental: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rental?: boolean | UserCountOutputTypeCountRentalArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Bike
   */

  export type AggregateBike = {
    _count: BikeCountAggregateOutputType | null
    _avg: BikeAvgAggregateOutputType | null
    _sum: BikeSumAggregateOutputType | null
    _min: BikeMinAggregateOutputType | null
    _max: BikeMaxAggregateOutputType | null
  }

  export type BikeAvgAggregateOutputType = {
    id: number | null
    park_id: number | null
  }

  export type BikeSumAggregateOutputType = {
    id: number | null
    park_id: number | null
  }

  export type BikeMinAggregateOutputType = {
    id: number | null
    model: string | null
    status: string | null
    lock: boolean | null
    location: string | null
    price_tier: string | null
    park_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BikeMaxAggregateOutputType = {
    id: number | null
    model: string | null
    status: string | null
    lock: boolean | null
    location: string | null
    price_tier: string | null
    park_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BikeCountAggregateOutputType = {
    id: number
    model: number
    status: number
    lock: number
    location: number
    price_tier: number
    park_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type BikeAvgAggregateInputType = {
    id?: true
    park_id?: true
  }

  export type BikeSumAggregateInputType = {
    id?: true
    park_id?: true
  }

  export type BikeMinAggregateInputType = {
    id?: true
    model?: true
    status?: true
    lock?: true
    location?: true
    price_tier?: true
    park_id?: true
    created_at?: true
    updated_at?: true
  }

  export type BikeMaxAggregateInputType = {
    id?: true
    model?: true
    status?: true
    lock?: true
    location?: true
    price_tier?: true
    park_id?: true
    created_at?: true
    updated_at?: true
  }

  export type BikeCountAggregateInputType = {
    id?: true
    model?: true
    status?: true
    lock?: true
    location?: true
    price_tier?: true
    park_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type BikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bike to aggregate.
     */
    where?: BikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bikes to fetch.
     */
    orderBy?: BikeOrderByWithRelationInput | BikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bikes
    **/
    _count?: true | BikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BikeMaxAggregateInputType
  }

  export type GetBikeAggregateType<T extends BikeAggregateArgs> = {
        [P in keyof T & keyof AggregateBike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBike[P]>
      : GetScalarType<T[P], AggregateBike[P]>
  }




  export type BikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BikeWhereInput
    orderBy?: BikeOrderByWithAggregationInput | BikeOrderByWithAggregationInput[]
    by: BikeScalarFieldEnum[] | BikeScalarFieldEnum
    having?: BikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BikeCountAggregateInputType | true
    _avg?: BikeAvgAggregateInputType
    _sum?: BikeSumAggregateInputType
    _min?: BikeMinAggregateInputType
    _max?: BikeMaxAggregateInputType
  }

  export type BikeGroupByOutputType = {
    id: number
    model: string
    status: string
    lock: boolean
    location: string
    price_tier: string
    park_id: number
    created_at: Date
    updated_at: Date
    _count: BikeCountAggregateOutputType | null
    _avg: BikeAvgAggregateOutputType | null
    _sum: BikeSumAggregateOutputType | null
    _min: BikeMinAggregateOutputType | null
    _max: BikeMaxAggregateOutputType | null
  }

  type GetBikeGroupByPayload<T extends BikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BikeGroupByOutputType[P]>
            : GetScalarType<T[P], BikeGroupByOutputType[P]>
        }
      >
    >


  export type BikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    status?: boolean
    lock?: boolean
    location?: boolean
    price_tier?: boolean
    park_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    Park?: boolean | ParkDefaultArgs<ExtArgs>
    Rental?: boolean | Bike$RentalArgs<ExtArgs>
    _count?: boolean | BikeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bike"]>

  export type BikeSelectScalar = {
    id?: boolean
    model?: boolean
    status?: boolean
    lock?: boolean
    location?: boolean
    price_tier?: boolean
    park_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type BikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Park?: boolean | ParkDefaultArgs<ExtArgs>
    Rental?: boolean | Bike$RentalArgs<ExtArgs>
    _count?: boolean | BikeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bike"
    objects: {
      Park: Prisma.$ParkPayload<ExtArgs>
      Rental: Prisma.$RentalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      model: string
      status: string
      lock: boolean
      location: string
      price_tier: string
      park_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["bike"]>
    composites: {}
  }


  type BikeGetPayload<S extends boolean | null | undefined | BikeDefaultArgs> = $Result.GetResult<Prisma.$BikePayload, S>

  type BikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BikeFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: BikeCountAggregateInputType | true
    }

  export interface BikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bike'], meta: { name: 'Bike' } }
    /**
     * Find zero or one Bike that matches the filter.
     * @param {BikeFindUniqueArgs} args - Arguments to find a Bike
     * @example
     * // Get one Bike
     * const bike = await prisma.bike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BikeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BikeFindUniqueArgs<ExtArgs>>
    ): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Bike that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BikeFindUniqueOrThrowArgs} args - Arguments to find a Bike
     * @example
     * // Get one Bike
     * const bike = await prisma.bike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BikeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BikeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Bike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BikeFindFirstArgs} args - Arguments to find a Bike
     * @example
     * // Get one Bike
     * const bike = await prisma.bike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BikeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BikeFindFirstArgs<ExtArgs>>
    ): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Bike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BikeFindFirstOrThrowArgs} args - Arguments to find a Bike
     * @example
     * // Get one Bike
     * const bike = await prisma.bike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BikeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BikeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Bikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BikeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bikes
     * const bikes = await prisma.bike.findMany()
     * 
     * // Get first 10 Bikes
     * const bikes = await prisma.bike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bikeWithIdOnly = await prisma.bike.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BikeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BikeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Bike.
     * @param {BikeCreateArgs} args - Arguments to create a Bike.
     * @example
     * // Create one Bike
     * const Bike = await prisma.bike.create({
     *   data: {
     *     // ... data to create a Bike
     *   }
     * })
     * 
    **/
    create<T extends BikeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BikeCreateArgs<ExtArgs>>
    ): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Bikes.
     *     @param {BikeCreateManyArgs} args - Arguments to create many Bikes.
     *     @example
     *     // Create many Bikes
     *     const bike = await prisma.bike.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BikeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BikeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bike.
     * @param {BikeDeleteArgs} args - Arguments to delete one Bike.
     * @example
     * // Delete one Bike
     * const Bike = await prisma.bike.delete({
     *   where: {
     *     // ... filter to delete one Bike
     *   }
     * })
     * 
    **/
    delete<T extends BikeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BikeDeleteArgs<ExtArgs>>
    ): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Bike.
     * @param {BikeUpdateArgs} args - Arguments to update one Bike.
     * @example
     * // Update one Bike
     * const bike = await prisma.bike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BikeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BikeUpdateArgs<ExtArgs>>
    ): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Bikes.
     * @param {BikeDeleteManyArgs} args - Arguments to filter Bikes to delete.
     * @example
     * // Delete a few Bikes
     * const { count } = await prisma.bike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BikeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BikeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bikes
     * const bike = await prisma.bike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BikeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BikeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bike.
     * @param {BikeUpsertArgs} args - Arguments to update or create a Bike.
     * @example
     * // Update or create a Bike
     * const bike = await prisma.bike.upsert({
     *   create: {
     *     // ... data to create a Bike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bike we want to update
     *   }
     * })
    **/
    upsert<T extends BikeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BikeUpsertArgs<ExtArgs>>
    ): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Bikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BikeCountArgs} args - Arguments to filter Bikes to count.
     * @example
     * // Count the number of Bikes
     * const count = await prisma.bike.count({
     *   where: {
     *     // ... the filter for the Bikes we want to count
     *   }
     * })
    **/
    count<T extends BikeCountArgs>(
      args?: Subset<T, BikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BikeAggregateArgs>(args: Subset<T, BikeAggregateArgs>): Prisma.PrismaPromise<GetBikeAggregateType<T>>

    /**
     * Group by Bike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BikeGroupByArgs['orderBy'] }
        : { orderBy?: BikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bike model
   */
  readonly fields: BikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Park<T extends ParkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkDefaultArgs<ExtArgs>>): Prisma__ParkClient<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Rental<T extends Bike$RentalArgs<ExtArgs> = {}>(args?: Subset<T, Bike$RentalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Bike model
   */ 
  interface BikeFieldRefs {
    readonly id: FieldRef<"Bike", 'Int'>
    readonly model: FieldRef<"Bike", 'String'>
    readonly status: FieldRef<"Bike", 'String'>
    readonly lock: FieldRef<"Bike", 'Boolean'>
    readonly location: FieldRef<"Bike", 'String'>
    readonly price_tier: FieldRef<"Bike", 'String'>
    readonly park_id: FieldRef<"Bike", 'Int'>
    readonly created_at: FieldRef<"Bike", 'DateTime'>
    readonly updated_at: FieldRef<"Bike", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Bike findUnique
   */
  export type BikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * Filter, which Bike to fetch.
     */
    where: BikeWhereUniqueInput
  }


  /**
   * Bike findUniqueOrThrow
   */
  export type BikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * Filter, which Bike to fetch.
     */
    where: BikeWhereUniqueInput
  }


  /**
   * Bike findFirst
   */
  export type BikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * Filter, which Bike to fetch.
     */
    where?: BikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bikes to fetch.
     */
    orderBy?: BikeOrderByWithRelationInput | BikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bikes.
     */
    cursor?: BikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bikes.
     */
    distinct?: BikeScalarFieldEnum | BikeScalarFieldEnum[]
  }


  /**
   * Bike findFirstOrThrow
   */
  export type BikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * Filter, which Bike to fetch.
     */
    where?: BikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bikes to fetch.
     */
    orderBy?: BikeOrderByWithRelationInput | BikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bikes.
     */
    cursor?: BikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bikes.
     */
    distinct?: BikeScalarFieldEnum | BikeScalarFieldEnum[]
  }


  /**
   * Bike findMany
   */
  export type BikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * Filter, which Bikes to fetch.
     */
    where?: BikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bikes to fetch.
     */
    orderBy?: BikeOrderByWithRelationInput | BikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bikes.
     */
    cursor?: BikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bikes.
     */
    skip?: number
    distinct?: BikeScalarFieldEnum | BikeScalarFieldEnum[]
  }


  /**
   * Bike create
   */
  export type BikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Bike.
     */
    data: XOR<BikeCreateInput, BikeUncheckedCreateInput>
  }


  /**
   * Bike createMany
   */
  export type BikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bikes.
     */
    data: BikeCreateManyInput | BikeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Bike update
   */
  export type BikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Bike.
     */
    data: XOR<BikeUpdateInput, BikeUncheckedUpdateInput>
    /**
     * Choose, which Bike to update.
     */
    where: BikeWhereUniqueInput
  }


  /**
   * Bike updateMany
   */
  export type BikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bikes.
     */
    data: XOR<BikeUpdateManyMutationInput, BikeUncheckedUpdateManyInput>
    /**
     * Filter which Bikes to update
     */
    where?: BikeWhereInput
  }


  /**
   * Bike upsert
   */
  export type BikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Bike to update in case it exists.
     */
    where: BikeWhereUniqueInput
    /**
     * In case the Bike found by the `where` argument doesn't exist, create a new Bike with this data.
     */
    create: XOR<BikeCreateInput, BikeUncheckedCreateInput>
    /**
     * In case the Bike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BikeUpdateInput, BikeUncheckedUpdateInput>
  }


  /**
   * Bike delete
   */
  export type BikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BikeInclude<ExtArgs> | null
    /**
     * Filter which Bike to delete.
     */
    where: BikeWhereUniqueInput
  }


  /**
   * Bike deleteMany
   */
  export type BikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bikes to delete
     */
    where?: BikeWhereInput
  }


  /**
   * Bike.Rental
   */
  export type Bike$RentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RentalInclude<ExtArgs> | null
    where?: RentalWhereInput
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    cursor?: RentalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }


  /**
   * Bike without action
   */
  export type BikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BikeInclude<ExtArgs> | null
  }



  /**
   * Model Park
   */

  export type AggregatePark = {
    _count: ParkCountAggregateOutputType | null
    _avg: ParkAvgAggregateOutputType | null
    _sum: ParkSumAggregateOutputType | null
    _min: ParkMinAggregateOutputType | null
    _max: ParkMaxAggregateOutputType | null
  }

  export type ParkAvgAggregateOutputType = {
    id: number | null
  }

  export type ParkSumAggregateOutputType = {
    id: number | null
  }

  export type ParkMinAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ParkMaxAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ParkCountAggregateOutputType = {
    id: number
    name: number
    location: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ParkAvgAggregateInputType = {
    id?: true
  }

  export type ParkSumAggregateInputType = {
    id?: true
  }

  export type ParkMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    created_at?: true
    updated_at?: true
  }

  export type ParkMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    created_at?: true
    updated_at?: true
  }

  export type ParkCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ParkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Park to aggregate.
     */
    where?: ParkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parks to fetch.
     */
    orderBy?: ParkOrderByWithRelationInput | ParkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parks
    **/
    _count?: true | ParkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkMaxAggregateInputType
  }

  export type GetParkAggregateType<T extends ParkAggregateArgs> = {
        [P in keyof T & keyof AggregatePark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePark[P]>
      : GetScalarType<T[P], AggregatePark[P]>
  }




  export type ParkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkWhereInput
    orderBy?: ParkOrderByWithAggregationInput | ParkOrderByWithAggregationInput[]
    by: ParkScalarFieldEnum[] | ParkScalarFieldEnum
    having?: ParkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkCountAggregateInputType | true
    _avg?: ParkAvgAggregateInputType
    _sum?: ParkSumAggregateInputType
    _min?: ParkMinAggregateInputType
    _max?: ParkMaxAggregateInputType
  }

  export type ParkGroupByOutputType = {
    id: number
    name: string
    location: string
    created_at: Date
    updated_at: Date
    _count: ParkCountAggregateOutputType | null
    _avg: ParkAvgAggregateOutputType | null
    _sum: ParkSumAggregateOutputType | null
    _min: ParkMinAggregateOutputType | null
    _max: ParkMaxAggregateOutputType | null
  }

  type GetParkGroupByPayload<T extends ParkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkGroupByOutputType[P]>
            : GetScalarType<T[P], ParkGroupByOutputType[P]>
        }
      >
    >


  export type ParkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    created_at?: boolean
    updated_at?: boolean
    Bike?: boolean | Park$BikeArgs<ExtArgs>
    _count?: boolean | ParkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["park"]>

  export type ParkSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ParkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bike?: boolean | Park$BikeArgs<ExtArgs>
    _count?: boolean | ParkCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ParkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Park"
    objects: {
      Bike: Prisma.$BikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      location: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["park"]>
    composites: {}
  }


  type ParkGetPayload<S extends boolean | null | undefined | ParkDefaultArgs> = $Result.GetResult<Prisma.$ParkPayload, S>

  type ParkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ParkFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ParkCountAggregateInputType | true
    }

  export interface ParkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Park'], meta: { name: 'Park' } }
    /**
     * Find zero or one Park that matches the filter.
     * @param {ParkFindUniqueArgs} args - Arguments to find a Park
     * @example
     * // Get one Park
     * const park = await prisma.park.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ParkFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ParkFindUniqueArgs<ExtArgs>>
    ): Prisma__ParkClient<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Park that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ParkFindUniqueOrThrowArgs} args - Arguments to find a Park
     * @example
     * // Get one Park
     * const park = await prisma.park.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ParkFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ParkFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ParkClient<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Park that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkFindFirstArgs} args - Arguments to find a Park
     * @example
     * // Get one Park
     * const park = await prisma.park.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ParkFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ParkFindFirstArgs<ExtArgs>>
    ): Prisma__ParkClient<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Park that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkFindFirstOrThrowArgs} args - Arguments to find a Park
     * @example
     * // Get one Park
     * const park = await prisma.park.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ParkFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ParkFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ParkClient<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Parks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parks
     * const parks = await prisma.park.findMany()
     * 
     * // Get first 10 Parks
     * const parks = await prisma.park.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkWithIdOnly = await prisma.park.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ParkFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParkFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Park.
     * @param {ParkCreateArgs} args - Arguments to create a Park.
     * @example
     * // Create one Park
     * const Park = await prisma.park.create({
     *   data: {
     *     // ... data to create a Park
     *   }
     * })
     * 
    **/
    create<T extends ParkCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ParkCreateArgs<ExtArgs>>
    ): Prisma__ParkClient<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Parks.
     *     @param {ParkCreateManyArgs} args - Arguments to create many Parks.
     *     @example
     *     // Create many Parks
     *     const park = await prisma.park.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ParkCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParkCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Park.
     * @param {ParkDeleteArgs} args - Arguments to delete one Park.
     * @example
     * // Delete one Park
     * const Park = await prisma.park.delete({
     *   where: {
     *     // ... filter to delete one Park
     *   }
     * })
     * 
    **/
    delete<T extends ParkDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ParkDeleteArgs<ExtArgs>>
    ): Prisma__ParkClient<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Park.
     * @param {ParkUpdateArgs} args - Arguments to update one Park.
     * @example
     * // Update one Park
     * const park = await prisma.park.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ParkUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ParkUpdateArgs<ExtArgs>>
    ): Prisma__ParkClient<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Parks.
     * @param {ParkDeleteManyArgs} args - Arguments to filter Parks to delete.
     * @example
     * // Delete a few Parks
     * const { count } = await prisma.park.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ParkDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParkDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parks
     * const park = await prisma.park.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ParkUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ParkUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Park.
     * @param {ParkUpsertArgs} args - Arguments to update or create a Park.
     * @example
     * // Update or create a Park
     * const park = await prisma.park.upsert({
     *   create: {
     *     // ... data to create a Park
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Park we want to update
     *   }
     * })
    **/
    upsert<T extends ParkUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ParkUpsertArgs<ExtArgs>>
    ): Prisma__ParkClient<$Result.GetResult<Prisma.$ParkPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Parks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkCountArgs} args - Arguments to filter Parks to count.
     * @example
     * // Count the number of Parks
     * const count = await prisma.park.count({
     *   where: {
     *     // ... the filter for the Parks we want to count
     *   }
     * })
    **/
    count<T extends ParkCountArgs>(
      args?: Subset<T, ParkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Park.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkAggregateArgs>(args: Subset<T, ParkAggregateArgs>): Prisma.PrismaPromise<GetParkAggregateType<T>>

    /**
     * Group by Park.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkGroupByArgs['orderBy'] }
        : { orderBy?: ParkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Park model
   */
  readonly fields: ParkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Park.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Bike<T extends Park$BikeArgs<ExtArgs> = {}>(args?: Subset<T, Park$BikeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Park model
   */ 
  interface ParkFieldRefs {
    readonly id: FieldRef<"Park", 'Int'>
    readonly name: FieldRef<"Park", 'String'>
    readonly location: FieldRef<"Park", 'String'>
    readonly created_at: FieldRef<"Park", 'DateTime'>
    readonly updated_at: FieldRef<"Park", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Park findUnique
   */
  export type ParkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Park
     */
    select?: ParkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParkInclude<ExtArgs> | null
    /**
     * Filter, which Park to fetch.
     */
    where: ParkWhereUniqueInput
  }


  /**
   * Park findUniqueOrThrow
   */
  export type ParkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Park
     */
    select?: ParkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParkInclude<ExtArgs> | null
    /**
     * Filter, which Park to fetch.
     */
    where: ParkWhereUniqueInput
  }


  /**
   * Park findFirst
   */
  export type ParkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Park
     */
    select?: ParkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParkInclude<ExtArgs> | null
    /**
     * Filter, which Park to fetch.
     */
    where?: ParkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parks to fetch.
     */
    orderBy?: ParkOrderByWithRelationInput | ParkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parks.
     */
    cursor?: ParkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parks.
     */
    distinct?: ParkScalarFieldEnum | ParkScalarFieldEnum[]
  }


  /**
   * Park findFirstOrThrow
   */
  export type ParkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Park
     */
    select?: ParkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParkInclude<ExtArgs> | null
    /**
     * Filter, which Park to fetch.
     */
    where?: ParkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parks to fetch.
     */
    orderBy?: ParkOrderByWithRelationInput | ParkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parks.
     */
    cursor?: ParkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parks.
     */
    distinct?: ParkScalarFieldEnum | ParkScalarFieldEnum[]
  }


  /**
   * Park findMany
   */
  export type ParkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Park
     */
    select?: ParkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParkInclude<ExtArgs> | null
    /**
     * Filter, which Parks to fetch.
     */
    where?: ParkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parks to fetch.
     */
    orderBy?: ParkOrderByWithRelationInput | ParkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parks.
     */
    cursor?: ParkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parks.
     */
    skip?: number
    distinct?: ParkScalarFieldEnum | ParkScalarFieldEnum[]
  }


  /**
   * Park create
   */
  export type ParkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Park
     */
    select?: ParkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParkInclude<ExtArgs> | null
    /**
     * The data needed to create a Park.
     */
    data: XOR<ParkCreateInput, ParkUncheckedCreateInput>
  }


  /**
   * Park createMany
   */
  export type ParkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parks.
     */
    data: ParkCreateManyInput | ParkCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Park update
   */
  export type ParkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Park
     */
    select?: ParkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParkInclude<ExtArgs> | null
    /**
     * The data needed to update a Park.
     */
    data: XOR<ParkUpdateInput, ParkUncheckedUpdateInput>
    /**
     * Choose, which Park to update.
     */
    where: ParkWhereUniqueInput
  }


  /**
   * Park updateMany
   */
  export type ParkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parks.
     */
    data: XOR<ParkUpdateManyMutationInput, ParkUncheckedUpdateManyInput>
    /**
     * Filter which Parks to update
     */
    where?: ParkWhereInput
  }


  /**
   * Park upsert
   */
  export type ParkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Park
     */
    select?: ParkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParkInclude<ExtArgs> | null
    /**
     * The filter to search for the Park to update in case it exists.
     */
    where: ParkWhereUniqueInput
    /**
     * In case the Park found by the `where` argument doesn't exist, create a new Park with this data.
     */
    create: XOR<ParkCreateInput, ParkUncheckedCreateInput>
    /**
     * In case the Park was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkUpdateInput, ParkUncheckedUpdateInput>
  }


  /**
   * Park delete
   */
  export type ParkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Park
     */
    select?: ParkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParkInclude<ExtArgs> | null
    /**
     * Filter which Park to delete.
     */
    where: ParkWhereUniqueInput
  }


  /**
   * Park deleteMany
   */
  export type ParkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parks to delete
     */
    where?: ParkWhereInput
  }


  /**
   * Park.Bike
   */
  export type Park$BikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bike
     */
    select?: BikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BikeInclude<ExtArgs> | null
    where?: BikeWhereInput
    orderBy?: BikeOrderByWithRelationInput | BikeOrderByWithRelationInput[]
    cursor?: BikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BikeScalarFieldEnum | BikeScalarFieldEnum[]
  }


  /**
   * Park without action
   */
  export type ParkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Park
     */
    select?: ParkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParkInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: string
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    Rental?: boolean | User$RentalArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rental?: boolean | User$RentalArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Rental: Prisma.$RentalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Rental<T extends User$RentalArgs<ExtArgs> = {}>(args?: Subset<T, User$RentalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.Rental
   */
  export type User$RentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RentalInclude<ExtArgs> | null
    where?: RentalWhereInput
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    cursor?: RentalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Rental
   */

  export type AggregateRental = {
    _count: RentalCountAggregateOutputType | null
    _avg: RentalAvgAggregateOutputType | null
    _sum: RentalSumAggregateOutputType | null
    _min: RentalMinAggregateOutputType | null
    _max: RentalMaxAggregateOutputType | null
  }

  export type RentalAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    bike_id: number | null
    price: number | null
  }

  export type RentalSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    bike_id: number | null
    price: number | null
  }

  export type RentalMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    bike_id: number | null
    start_time: Date | null
    end_time: Date | null
    status: string | null
    price: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RentalMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    bike_id: number | null
    start_time: Date | null
    end_time: Date | null
    status: string | null
    price: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RentalCountAggregateOutputType = {
    id: number
    user_id: number
    bike_id: number
    start_time: number
    end_time: number
    status: number
    price: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RentalAvgAggregateInputType = {
    id?: true
    user_id?: true
    bike_id?: true
    price?: true
  }

  export type RentalSumAggregateInputType = {
    id?: true
    user_id?: true
    bike_id?: true
    price?: true
  }

  export type RentalMinAggregateInputType = {
    id?: true
    user_id?: true
    bike_id?: true
    start_time?: true
    end_time?: true
    status?: true
    price?: true
    created_at?: true
    updated_at?: true
  }

  export type RentalMaxAggregateInputType = {
    id?: true
    user_id?: true
    bike_id?: true
    start_time?: true
    end_time?: true
    status?: true
    price?: true
    created_at?: true
    updated_at?: true
  }

  export type RentalCountAggregateInputType = {
    id?: true
    user_id?: true
    bike_id?: true
    start_time?: true
    end_time?: true
    status?: true
    price?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RentalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rental to aggregate.
     */
    where?: RentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rentals to fetch.
     */
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rentals
    **/
    _count?: true | RentalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentalMaxAggregateInputType
  }

  export type GetRentalAggregateType<T extends RentalAggregateArgs> = {
        [P in keyof T & keyof AggregateRental]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRental[P]>
      : GetScalarType<T[P], AggregateRental[P]>
  }




  export type RentalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalWhereInput
    orderBy?: RentalOrderByWithAggregationInput | RentalOrderByWithAggregationInput[]
    by: RentalScalarFieldEnum[] | RentalScalarFieldEnum
    having?: RentalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentalCountAggregateInputType | true
    _avg?: RentalAvgAggregateInputType
    _sum?: RentalSumAggregateInputType
    _min?: RentalMinAggregateInputType
    _max?: RentalMaxAggregateInputType
  }

  export type RentalGroupByOutputType = {
    id: number
    user_id: number
    bike_id: number
    start_time: Date
    end_time: Date
    status: string
    price: number
    created_at: Date
    updated_at: Date
    _count: RentalCountAggregateOutputType | null
    _avg: RentalAvgAggregateOutputType | null
    _sum: RentalSumAggregateOutputType | null
    _min: RentalMinAggregateOutputType | null
    _max: RentalMaxAggregateOutputType | null
  }

  type GetRentalGroupByPayload<T extends RentalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentalGroupByOutputType[P]>
            : GetScalarType<T[P], RentalGroupByOutputType[P]>
        }
      >
    >


  export type RentalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bike_id?: boolean
    start_time?: boolean
    end_time?: boolean
    status?: boolean
    price?: boolean
    created_at?: boolean
    updated_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Bike?: boolean | BikeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rental"]>

  export type RentalSelectScalar = {
    id?: boolean
    user_id?: boolean
    bike_id?: boolean
    start_time?: boolean
    end_time?: boolean
    status?: boolean
    price?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RentalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Bike?: boolean | BikeDefaultArgs<ExtArgs>
  }


  export type $RentalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rental"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      Bike: Prisma.$BikePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      bike_id: number
      start_time: Date
      end_time: Date
      status: string
      price: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["rental"]>
    composites: {}
  }


  type RentalGetPayload<S extends boolean | null | undefined | RentalDefaultArgs> = $Result.GetResult<Prisma.$RentalPayload, S>

  type RentalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RentalFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: RentalCountAggregateInputType | true
    }

  export interface RentalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rental'], meta: { name: 'Rental' } }
    /**
     * Find zero or one Rental that matches the filter.
     * @param {RentalFindUniqueArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RentalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RentalFindUniqueArgs<ExtArgs>>
    ): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Rental that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RentalFindUniqueOrThrowArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RentalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RentalFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Rental that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalFindFirstArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RentalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RentalFindFirstArgs<ExtArgs>>
    ): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Rental that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalFindFirstOrThrowArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RentalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RentalFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Rentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rentals
     * const rentals = await prisma.rental.findMany()
     * 
     * // Get first 10 Rentals
     * const rentals = await prisma.rental.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentalWithIdOnly = await prisma.rental.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RentalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RentalFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Rental.
     * @param {RentalCreateArgs} args - Arguments to create a Rental.
     * @example
     * // Create one Rental
     * const Rental = await prisma.rental.create({
     *   data: {
     *     // ... data to create a Rental
     *   }
     * })
     * 
    **/
    create<T extends RentalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RentalCreateArgs<ExtArgs>>
    ): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Rentals.
     *     @param {RentalCreateManyArgs} args - Arguments to create many Rentals.
     *     @example
     *     // Create many Rentals
     *     const rental = await prisma.rental.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RentalCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RentalCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rental.
     * @param {RentalDeleteArgs} args - Arguments to delete one Rental.
     * @example
     * // Delete one Rental
     * const Rental = await prisma.rental.delete({
     *   where: {
     *     // ... filter to delete one Rental
     *   }
     * })
     * 
    **/
    delete<T extends RentalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RentalDeleteArgs<ExtArgs>>
    ): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Rental.
     * @param {RentalUpdateArgs} args - Arguments to update one Rental.
     * @example
     * // Update one Rental
     * const rental = await prisma.rental.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RentalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RentalUpdateArgs<ExtArgs>>
    ): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Rentals.
     * @param {RentalDeleteManyArgs} args - Arguments to filter Rentals to delete.
     * @example
     * // Delete a few Rentals
     * const { count } = await prisma.rental.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RentalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RentalDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rentals
     * const rental = await prisma.rental.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RentalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RentalUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rental.
     * @param {RentalUpsertArgs} args - Arguments to update or create a Rental.
     * @example
     * // Update or create a Rental
     * const rental = await prisma.rental.upsert({
     *   create: {
     *     // ... data to create a Rental
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rental we want to update
     *   }
     * })
    **/
    upsert<T extends RentalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RentalUpsertArgs<ExtArgs>>
    ): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalCountArgs} args - Arguments to filter Rentals to count.
     * @example
     * // Count the number of Rentals
     * const count = await prisma.rental.count({
     *   where: {
     *     // ... the filter for the Rentals we want to count
     *   }
     * })
    **/
    count<T extends RentalCountArgs>(
      args?: Subset<T, RentalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RentalAggregateArgs>(args: Subset<T, RentalAggregateArgs>): Prisma.PrismaPromise<GetRentalAggregateType<T>>

    /**
     * Group by Rental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RentalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentalGroupByArgs['orderBy'] }
        : { orderBy?: RentalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RentalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rental model
   */
  readonly fields: RentalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rental.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Bike<T extends BikeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BikeDefaultArgs<ExtArgs>>): Prisma__BikeClient<$Result.GetResult<Prisma.$BikePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Rental model
   */ 
  interface RentalFieldRefs {
    readonly id: FieldRef<"Rental", 'Int'>
    readonly user_id: FieldRef<"Rental", 'Int'>
    readonly bike_id: FieldRef<"Rental", 'Int'>
    readonly start_time: FieldRef<"Rental", 'DateTime'>
    readonly end_time: FieldRef<"Rental", 'DateTime'>
    readonly status: FieldRef<"Rental", 'String'>
    readonly price: FieldRef<"Rental", 'Float'>
    readonly created_at: FieldRef<"Rental", 'DateTime'>
    readonly updated_at: FieldRef<"Rental", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Rental findUnique
   */
  export type RentalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rental to fetch.
     */
    where: RentalWhereUniqueInput
  }


  /**
   * Rental findUniqueOrThrow
   */
  export type RentalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rental to fetch.
     */
    where: RentalWhereUniqueInput
  }


  /**
   * Rental findFirst
   */
  export type RentalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rental to fetch.
     */
    where?: RentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rentals to fetch.
     */
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rentals.
     */
    cursor?: RentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rentals.
     */
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }


  /**
   * Rental findFirstOrThrow
   */
  export type RentalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rental to fetch.
     */
    where?: RentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rentals to fetch.
     */
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rentals.
     */
    cursor?: RentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rentals.
     */
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }


  /**
   * Rental findMany
   */
  export type RentalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rentals to fetch.
     */
    where?: RentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rentals to fetch.
     */
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rentals.
     */
    cursor?: RentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rentals.
     */
    skip?: number
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }


  /**
   * Rental create
   */
  export type RentalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * The data needed to create a Rental.
     */
    data: XOR<RentalCreateInput, RentalUncheckedCreateInput>
  }


  /**
   * Rental createMany
   */
  export type RentalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rentals.
     */
    data: RentalCreateManyInput | RentalCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Rental update
   */
  export type RentalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * The data needed to update a Rental.
     */
    data: XOR<RentalUpdateInput, RentalUncheckedUpdateInput>
    /**
     * Choose, which Rental to update.
     */
    where: RentalWhereUniqueInput
  }


  /**
   * Rental updateMany
   */
  export type RentalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rentals.
     */
    data: XOR<RentalUpdateManyMutationInput, RentalUncheckedUpdateManyInput>
    /**
     * Filter which Rentals to update
     */
    where?: RentalWhereInput
  }


  /**
   * Rental upsert
   */
  export type RentalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * The filter to search for the Rental to update in case it exists.
     */
    where: RentalWhereUniqueInput
    /**
     * In case the Rental found by the `where` argument doesn't exist, create a new Rental with this data.
     */
    create: XOR<RentalCreateInput, RentalUncheckedCreateInput>
    /**
     * In case the Rental was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentalUpdateInput, RentalUncheckedUpdateInput>
  }


  /**
   * Rental delete
   */
  export type RentalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter which Rental to delete.
     */
    where: RentalWhereUniqueInput
  }


  /**
   * Rental deleteMany
   */
  export type RentalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rentals to delete
     */
    where?: RentalWhereInput
  }


  /**
   * Rental without action
   */
  export type RentalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RentalInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BikeScalarFieldEnum: {
    id: 'id',
    model: 'model',
    status: 'status',
    lock: 'lock',
    location: 'location',
    price_tier: 'price_tier',
    park_id: 'park_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type BikeScalarFieldEnum = (typeof BikeScalarFieldEnum)[keyof typeof BikeScalarFieldEnum]


  export const ParkScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ParkScalarFieldEnum = (typeof ParkScalarFieldEnum)[keyof typeof ParkScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RentalScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    bike_id: 'bike_id',
    start_time: 'start_time',
    end_time: 'end_time',
    status: 'status',
    price: 'price',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RentalScalarFieldEnum = (typeof RentalScalarFieldEnum)[keyof typeof RentalScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BikeWhereInput = {
    AND?: BikeWhereInput | BikeWhereInput[]
    OR?: BikeWhereInput[]
    NOT?: BikeWhereInput | BikeWhereInput[]
    id?: IntFilter<"Bike"> | number
    model?: StringFilter<"Bike"> | string
    status?: StringFilter<"Bike"> | string
    lock?: BoolFilter<"Bike"> | boolean
    location?: StringFilter<"Bike"> | string
    price_tier?: StringFilter<"Bike"> | string
    park_id?: IntFilter<"Bike"> | number
    created_at?: DateTimeFilter<"Bike"> | Date | string
    updated_at?: DateTimeFilter<"Bike"> | Date | string
    Park?: XOR<ParkRelationFilter, ParkWhereInput>
    Rental?: RentalListRelationFilter
  }

  export type BikeOrderByWithRelationInput = {
    id?: SortOrder
    model?: SortOrder
    status?: SortOrder
    lock?: SortOrder
    location?: SortOrder
    price_tier?: SortOrder
    park_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    Park?: ParkOrderByWithRelationInput
    Rental?: RentalOrderByRelationAggregateInput
  }

  export type BikeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BikeWhereInput | BikeWhereInput[]
    OR?: BikeWhereInput[]
    NOT?: BikeWhereInput | BikeWhereInput[]
    model?: StringFilter<"Bike"> | string
    status?: StringFilter<"Bike"> | string
    lock?: BoolFilter<"Bike"> | boolean
    location?: StringFilter<"Bike"> | string
    price_tier?: StringFilter<"Bike"> | string
    park_id?: IntFilter<"Bike"> | number
    created_at?: DateTimeFilter<"Bike"> | Date | string
    updated_at?: DateTimeFilter<"Bike"> | Date | string
    Park?: XOR<ParkRelationFilter, ParkWhereInput>
    Rental?: RentalListRelationFilter
  }, "id">

  export type BikeOrderByWithAggregationInput = {
    id?: SortOrder
    model?: SortOrder
    status?: SortOrder
    lock?: SortOrder
    location?: SortOrder
    price_tier?: SortOrder
    park_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: BikeCountOrderByAggregateInput
    _avg?: BikeAvgOrderByAggregateInput
    _max?: BikeMaxOrderByAggregateInput
    _min?: BikeMinOrderByAggregateInput
    _sum?: BikeSumOrderByAggregateInput
  }

  export type BikeScalarWhereWithAggregatesInput = {
    AND?: BikeScalarWhereWithAggregatesInput | BikeScalarWhereWithAggregatesInput[]
    OR?: BikeScalarWhereWithAggregatesInput[]
    NOT?: BikeScalarWhereWithAggregatesInput | BikeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bike"> | number
    model?: StringWithAggregatesFilter<"Bike"> | string
    status?: StringWithAggregatesFilter<"Bike"> | string
    lock?: BoolWithAggregatesFilter<"Bike"> | boolean
    location?: StringWithAggregatesFilter<"Bike"> | string
    price_tier?: StringWithAggregatesFilter<"Bike"> | string
    park_id?: IntWithAggregatesFilter<"Bike"> | number
    created_at?: DateTimeWithAggregatesFilter<"Bike"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Bike"> | Date | string
  }

  export type ParkWhereInput = {
    AND?: ParkWhereInput | ParkWhereInput[]
    OR?: ParkWhereInput[]
    NOT?: ParkWhereInput | ParkWhereInput[]
    id?: IntFilter<"Park"> | number
    name?: StringFilter<"Park"> | string
    location?: StringFilter<"Park"> | string
    created_at?: DateTimeFilter<"Park"> | Date | string
    updated_at?: DateTimeFilter<"Park"> | Date | string
    Bike?: BikeListRelationFilter
  }

  export type ParkOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    Bike?: BikeOrderByRelationAggregateInput
  }

  export type ParkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParkWhereInput | ParkWhereInput[]
    OR?: ParkWhereInput[]
    NOT?: ParkWhereInput | ParkWhereInput[]
    name?: StringFilter<"Park"> | string
    location?: StringFilter<"Park"> | string
    created_at?: DateTimeFilter<"Park"> | Date | string
    updated_at?: DateTimeFilter<"Park"> | Date | string
    Bike?: BikeListRelationFilter
  }, "id">

  export type ParkOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ParkCountOrderByAggregateInput
    _avg?: ParkAvgOrderByAggregateInput
    _max?: ParkMaxOrderByAggregateInput
    _min?: ParkMinOrderByAggregateInput
    _sum?: ParkSumOrderByAggregateInput
  }

  export type ParkScalarWhereWithAggregatesInput = {
    AND?: ParkScalarWhereWithAggregatesInput | ParkScalarWhereWithAggregatesInput[]
    OR?: ParkScalarWhereWithAggregatesInput[]
    NOT?: ParkScalarWhereWithAggregatesInput | ParkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Park"> | number
    name?: StringWithAggregatesFilter<"Park"> | string
    location?: StringWithAggregatesFilter<"Park"> | string
    created_at?: DateTimeWithAggregatesFilter<"Park"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Park"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    Rental?: RentalListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    Rental?: RentalOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    Rental?: RentalListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RentalWhereInput = {
    AND?: RentalWhereInput | RentalWhereInput[]
    OR?: RentalWhereInput[]
    NOT?: RentalWhereInput | RentalWhereInput[]
    id?: IntFilter<"Rental"> | number
    user_id?: IntFilter<"Rental"> | number
    bike_id?: IntFilter<"Rental"> | number
    start_time?: DateTimeFilter<"Rental"> | Date | string
    end_time?: DateTimeFilter<"Rental"> | Date | string
    status?: StringFilter<"Rental"> | string
    price?: FloatFilter<"Rental"> | number
    created_at?: DateTimeFilter<"Rental"> | Date | string
    updated_at?: DateTimeFilter<"Rental"> | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput>
    Bike?: XOR<BikeRelationFilter, BikeWhereInput>
  }

  export type RentalOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    bike_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    status?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    User?: UserOrderByWithRelationInput
    Bike?: BikeOrderByWithRelationInput
  }

  export type RentalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RentalWhereInput | RentalWhereInput[]
    OR?: RentalWhereInput[]
    NOT?: RentalWhereInput | RentalWhereInput[]
    user_id?: IntFilter<"Rental"> | number
    bike_id?: IntFilter<"Rental"> | number
    start_time?: DateTimeFilter<"Rental"> | Date | string
    end_time?: DateTimeFilter<"Rental"> | Date | string
    status?: StringFilter<"Rental"> | string
    price?: FloatFilter<"Rental"> | number
    created_at?: DateTimeFilter<"Rental"> | Date | string
    updated_at?: DateTimeFilter<"Rental"> | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput>
    Bike?: XOR<BikeRelationFilter, BikeWhereInput>
  }, "id">

  export type RentalOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    bike_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    status?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RentalCountOrderByAggregateInput
    _avg?: RentalAvgOrderByAggregateInput
    _max?: RentalMaxOrderByAggregateInput
    _min?: RentalMinOrderByAggregateInput
    _sum?: RentalSumOrderByAggregateInput
  }

  export type RentalScalarWhereWithAggregatesInput = {
    AND?: RentalScalarWhereWithAggregatesInput | RentalScalarWhereWithAggregatesInput[]
    OR?: RentalScalarWhereWithAggregatesInput[]
    NOT?: RentalScalarWhereWithAggregatesInput | RentalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rental"> | number
    user_id?: IntWithAggregatesFilter<"Rental"> | number
    bike_id?: IntWithAggregatesFilter<"Rental"> | number
    start_time?: DateTimeWithAggregatesFilter<"Rental"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"Rental"> | Date | string
    status?: StringWithAggregatesFilter<"Rental"> | string
    price?: FloatWithAggregatesFilter<"Rental"> | number
    created_at?: DateTimeWithAggregatesFilter<"Rental"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Rental"> | Date | string
  }

  export type BikeCreateInput = {
    model: string
    status: string
    lock: boolean
    location: string
    price_tier: string
    created_at?: Date | string
    updated_at?: Date | string
    Park: ParkCreateNestedOneWithoutBikeInput
    Rental?: RentalCreateNestedManyWithoutBikeInput
  }

  export type BikeUncheckedCreateInput = {
    id?: number
    model: string
    status: string
    lock: boolean
    location: string
    price_tier: string
    park_id: number
    created_at?: Date | string
    updated_at?: Date | string
    Rental?: RentalUncheckedCreateNestedManyWithoutBikeInput
  }

  export type BikeUpdateInput = {
    model?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lock?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    price_tier?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Park?: ParkUpdateOneRequiredWithoutBikeNestedInput
    Rental?: RentalUpdateManyWithoutBikeNestedInput
  }

  export type BikeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lock?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    price_tier?: StringFieldUpdateOperationsInput | string
    park_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Rental?: RentalUncheckedUpdateManyWithoutBikeNestedInput
  }

  export type BikeCreateManyInput = {
    id?: number
    model: string
    status: string
    lock: boolean
    location: string
    price_tier: string
    park_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BikeUpdateManyMutationInput = {
    model?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lock?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    price_tier?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BikeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lock?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    price_tier?: StringFieldUpdateOperationsInput | string
    park_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkCreateInput = {
    name: string
    location: string
    created_at?: Date | string
    updated_at?: Date | string
    Bike?: BikeCreateNestedManyWithoutParkInput
  }

  export type ParkUncheckedCreateInput = {
    id?: number
    name: string
    location: string
    created_at?: Date | string
    updated_at?: Date | string
    Bike?: BikeUncheckedCreateNestedManyWithoutParkInput
  }

  export type ParkUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Bike?: BikeUpdateManyWithoutParkNestedInput
  }

  export type ParkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Bike?: BikeUncheckedUpdateManyWithoutParkNestedInput
  }

  export type ParkCreateManyInput = {
    id?: number
    name: string
    location: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ParkUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role?: string
    created_at?: Date | string
    updated_at?: Date | string
    Rental?: RentalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    created_at?: Date | string
    updated_at?: Date | string
    Rental?: RentalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Rental?: RentalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Rental?: RentalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalCreateInput = {
    start_time: Date | string
    end_time: Date | string
    status: string
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    User: UserCreateNestedOneWithoutRentalInput
    Bike: BikeCreateNestedOneWithoutRentalInput
  }

  export type RentalUncheckedCreateInput = {
    id?: number
    user_id: number
    bike_id: number
    start_time: Date | string
    end_time: Date | string
    status: string
    price: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RentalUpdateInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutRentalNestedInput
    Bike?: BikeUpdateOneRequiredWithoutRentalNestedInput
  }

  export type RentalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    bike_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalCreateManyInput = {
    id?: number
    user_id: number
    bike_id: number
    start_time: Date | string
    end_time: Date | string
    status: string
    price: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RentalUpdateManyMutationInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    bike_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ParkRelationFilter = {
    is?: ParkWhereInput
    isNot?: ParkWhereInput
  }

  export type RentalListRelationFilter = {
    every?: RentalWhereInput
    some?: RentalWhereInput
    none?: RentalWhereInput
  }

  export type RentalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BikeCountOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    status?: SortOrder
    lock?: SortOrder
    location?: SortOrder
    price_tier?: SortOrder
    park_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BikeAvgOrderByAggregateInput = {
    id?: SortOrder
    park_id?: SortOrder
  }

  export type BikeMaxOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    status?: SortOrder
    lock?: SortOrder
    location?: SortOrder
    price_tier?: SortOrder
    park_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BikeMinOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    status?: SortOrder
    lock?: SortOrder
    location?: SortOrder
    price_tier?: SortOrder
    park_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BikeSumOrderByAggregateInput = {
    id?: SortOrder
    park_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BikeListRelationFilter = {
    every?: BikeWhereInput
    some?: BikeWhereInput
    none?: BikeWhereInput
  }

  export type BikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParkCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ParkAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ParkMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ParkMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ParkSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BikeRelationFilter = {
    is?: BikeWhereInput
    isNot?: BikeWhereInput
  }

  export type RentalCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bike_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    status?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RentalAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bike_id?: SortOrder
    price?: SortOrder
  }

  export type RentalMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bike_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    status?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RentalMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bike_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    status?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RentalSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bike_id?: SortOrder
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ParkCreateNestedOneWithoutBikeInput = {
    create?: XOR<ParkCreateWithoutBikeInput, ParkUncheckedCreateWithoutBikeInput>
    connectOrCreate?: ParkCreateOrConnectWithoutBikeInput
    connect?: ParkWhereUniqueInput
  }

  export type RentalCreateNestedManyWithoutBikeInput = {
    create?: XOR<RentalCreateWithoutBikeInput, RentalUncheckedCreateWithoutBikeInput> | RentalCreateWithoutBikeInput[] | RentalUncheckedCreateWithoutBikeInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutBikeInput | RentalCreateOrConnectWithoutBikeInput[]
    createMany?: RentalCreateManyBikeInputEnvelope
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type RentalUncheckedCreateNestedManyWithoutBikeInput = {
    create?: XOR<RentalCreateWithoutBikeInput, RentalUncheckedCreateWithoutBikeInput> | RentalCreateWithoutBikeInput[] | RentalUncheckedCreateWithoutBikeInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutBikeInput | RentalCreateOrConnectWithoutBikeInput[]
    createMany?: RentalCreateManyBikeInputEnvelope
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ParkUpdateOneRequiredWithoutBikeNestedInput = {
    create?: XOR<ParkCreateWithoutBikeInput, ParkUncheckedCreateWithoutBikeInput>
    connectOrCreate?: ParkCreateOrConnectWithoutBikeInput
    upsert?: ParkUpsertWithoutBikeInput
    connect?: ParkWhereUniqueInput
    update?: XOR<XOR<ParkUpdateToOneWithWhereWithoutBikeInput, ParkUpdateWithoutBikeInput>, ParkUncheckedUpdateWithoutBikeInput>
  }

  export type RentalUpdateManyWithoutBikeNestedInput = {
    create?: XOR<RentalCreateWithoutBikeInput, RentalUncheckedCreateWithoutBikeInput> | RentalCreateWithoutBikeInput[] | RentalUncheckedCreateWithoutBikeInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutBikeInput | RentalCreateOrConnectWithoutBikeInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutBikeInput | RentalUpsertWithWhereUniqueWithoutBikeInput[]
    createMany?: RentalCreateManyBikeInputEnvelope
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutBikeInput | RentalUpdateWithWhereUniqueWithoutBikeInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutBikeInput | RentalUpdateManyWithWhereWithoutBikeInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RentalUncheckedUpdateManyWithoutBikeNestedInput = {
    create?: XOR<RentalCreateWithoutBikeInput, RentalUncheckedCreateWithoutBikeInput> | RentalCreateWithoutBikeInput[] | RentalUncheckedCreateWithoutBikeInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutBikeInput | RentalCreateOrConnectWithoutBikeInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutBikeInput | RentalUpsertWithWhereUniqueWithoutBikeInput[]
    createMany?: RentalCreateManyBikeInputEnvelope
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutBikeInput | RentalUpdateWithWhereUniqueWithoutBikeInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutBikeInput | RentalUpdateManyWithWhereWithoutBikeInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type BikeCreateNestedManyWithoutParkInput = {
    create?: XOR<BikeCreateWithoutParkInput, BikeUncheckedCreateWithoutParkInput> | BikeCreateWithoutParkInput[] | BikeUncheckedCreateWithoutParkInput[]
    connectOrCreate?: BikeCreateOrConnectWithoutParkInput | BikeCreateOrConnectWithoutParkInput[]
    createMany?: BikeCreateManyParkInputEnvelope
    connect?: BikeWhereUniqueInput | BikeWhereUniqueInput[]
  }

  export type BikeUncheckedCreateNestedManyWithoutParkInput = {
    create?: XOR<BikeCreateWithoutParkInput, BikeUncheckedCreateWithoutParkInput> | BikeCreateWithoutParkInput[] | BikeUncheckedCreateWithoutParkInput[]
    connectOrCreate?: BikeCreateOrConnectWithoutParkInput | BikeCreateOrConnectWithoutParkInput[]
    createMany?: BikeCreateManyParkInputEnvelope
    connect?: BikeWhereUniqueInput | BikeWhereUniqueInput[]
  }

  export type BikeUpdateManyWithoutParkNestedInput = {
    create?: XOR<BikeCreateWithoutParkInput, BikeUncheckedCreateWithoutParkInput> | BikeCreateWithoutParkInput[] | BikeUncheckedCreateWithoutParkInput[]
    connectOrCreate?: BikeCreateOrConnectWithoutParkInput | BikeCreateOrConnectWithoutParkInput[]
    upsert?: BikeUpsertWithWhereUniqueWithoutParkInput | BikeUpsertWithWhereUniqueWithoutParkInput[]
    createMany?: BikeCreateManyParkInputEnvelope
    set?: BikeWhereUniqueInput | BikeWhereUniqueInput[]
    disconnect?: BikeWhereUniqueInput | BikeWhereUniqueInput[]
    delete?: BikeWhereUniqueInput | BikeWhereUniqueInput[]
    connect?: BikeWhereUniqueInput | BikeWhereUniqueInput[]
    update?: BikeUpdateWithWhereUniqueWithoutParkInput | BikeUpdateWithWhereUniqueWithoutParkInput[]
    updateMany?: BikeUpdateManyWithWhereWithoutParkInput | BikeUpdateManyWithWhereWithoutParkInput[]
    deleteMany?: BikeScalarWhereInput | BikeScalarWhereInput[]
  }

  export type BikeUncheckedUpdateManyWithoutParkNestedInput = {
    create?: XOR<BikeCreateWithoutParkInput, BikeUncheckedCreateWithoutParkInput> | BikeCreateWithoutParkInput[] | BikeUncheckedCreateWithoutParkInput[]
    connectOrCreate?: BikeCreateOrConnectWithoutParkInput | BikeCreateOrConnectWithoutParkInput[]
    upsert?: BikeUpsertWithWhereUniqueWithoutParkInput | BikeUpsertWithWhereUniqueWithoutParkInput[]
    createMany?: BikeCreateManyParkInputEnvelope
    set?: BikeWhereUniqueInput | BikeWhereUniqueInput[]
    disconnect?: BikeWhereUniqueInput | BikeWhereUniqueInput[]
    delete?: BikeWhereUniqueInput | BikeWhereUniqueInput[]
    connect?: BikeWhereUniqueInput | BikeWhereUniqueInput[]
    update?: BikeUpdateWithWhereUniqueWithoutParkInput | BikeUpdateWithWhereUniqueWithoutParkInput[]
    updateMany?: BikeUpdateManyWithWhereWithoutParkInput | BikeUpdateManyWithWhereWithoutParkInput[]
    deleteMany?: BikeScalarWhereInput | BikeScalarWhereInput[]
  }

  export type RentalCreateNestedManyWithoutUserInput = {
    create?: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput> | RentalCreateWithoutUserInput[] | RentalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutUserInput | RentalCreateOrConnectWithoutUserInput[]
    createMany?: RentalCreateManyUserInputEnvelope
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type RentalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput> | RentalCreateWithoutUserInput[] | RentalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutUserInput | RentalCreateOrConnectWithoutUserInput[]
    createMany?: RentalCreateManyUserInputEnvelope
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type RentalUpdateManyWithoutUserNestedInput = {
    create?: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput> | RentalCreateWithoutUserInput[] | RentalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutUserInput | RentalCreateOrConnectWithoutUserInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutUserInput | RentalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RentalCreateManyUserInputEnvelope
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutUserInput | RentalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutUserInput | RentalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type RentalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput> | RentalCreateWithoutUserInput[] | RentalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutUserInput | RentalCreateOrConnectWithoutUserInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutUserInput | RentalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RentalCreateManyUserInputEnvelope
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutUserInput | RentalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutUserInput | RentalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRentalInput = {
    create?: XOR<UserCreateWithoutRentalInput, UserUncheckedCreateWithoutRentalInput>
    connectOrCreate?: UserCreateOrConnectWithoutRentalInput
    connect?: UserWhereUniqueInput
  }

  export type BikeCreateNestedOneWithoutRentalInput = {
    create?: XOR<BikeCreateWithoutRentalInput, BikeUncheckedCreateWithoutRentalInput>
    connectOrCreate?: BikeCreateOrConnectWithoutRentalInput
    connect?: BikeWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutRentalNestedInput = {
    create?: XOR<UserCreateWithoutRentalInput, UserUncheckedCreateWithoutRentalInput>
    connectOrCreate?: UserCreateOrConnectWithoutRentalInput
    upsert?: UserUpsertWithoutRentalInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRentalInput, UserUpdateWithoutRentalInput>, UserUncheckedUpdateWithoutRentalInput>
  }

  export type BikeUpdateOneRequiredWithoutRentalNestedInput = {
    create?: XOR<BikeCreateWithoutRentalInput, BikeUncheckedCreateWithoutRentalInput>
    connectOrCreate?: BikeCreateOrConnectWithoutRentalInput
    upsert?: BikeUpsertWithoutRentalInput
    connect?: BikeWhereUniqueInput
    update?: XOR<XOR<BikeUpdateToOneWithWhereWithoutRentalInput, BikeUpdateWithoutRentalInput>, BikeUncheckedUpdateWithoutRentalInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ParkCreateWithoutBikeInput = {
    name: string
    location: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ParkUncheckedCreateWithoutBikeInput = {
    id?: number
    name: string
    location: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ParkCreateOrConnectWithoutBikeInput = {
    where: ParkWhereUniqueInput
    create: XOR<ParkCreateWithoutBikeInput, ParkUncheckedCreateWithoutBikeInput>
  }

  export type RentalCreateWithoutBikeInput = {
    start_time: Date | string
    end_time: Date | string
    status: string
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    User: UserCreateNestedOneWithoutRentalInput
  }

  export type RentalUncheckedCreateWithoutBikeInput = {
    id?: number
    user_id: number
    start_time: Date | string
    end_time: Date | string
    status: string
    price: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RentalCreateOrConnectWithoutBikeInput = {
    where: RentalWhereUniqueInput
    create: XOR<RentalCreateWithoutBikeInput, RentalUncheckedCreateWithoutBikeInput>
  }

  export type RentalCreateManyBikeInputEnvelope = {
    data: RentalCreateManyBikeInput | RentalCreateManyBikeInput[]
    skipDuplicates?: boolean
  }

  export type ParkUpsertWithoutBikeInput = {
    update: XOR<ParkUpdateWithoutBikeInput, ParkUncheckedUpdateWithoutBikeInput>
    create: XOR<ParkCreateWithoutBikeInput, ParkUncheckedCreateWithoutBikeInput>
    where?: ParkWhereInput
  }

  export type ParkUpdateToOneWithWhereWithoutBikeInput = {
    where?: ParkWhereInput
    data: XOR<ParkUpdateWithoutBikeInput, ParkUncheckedUpdateWithoutBikeInput>
  }

  export type ParkUpdateWithoutBikeInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkUncheckedUpdateWithoutBikeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalUpsertWithWhereUniqueWithoutBikeInput = {
    where: RentalWhereUniqueInput
    update: XOR<RentalUpdateWithoutBikeInput, RentalUncheckedUpdateWithoutBikeInput>
    create: XOR<RentalCreateWithoutBikeInput, RentalUncheckedCreateWithoutBikeInput>
  }

  export type RentalUpdateWithWhereUniqueWithoutBikeInput = {
    where: RentalWhereUniqueInput
    data: XOR<RentalUpdateWithoutBikeInput, RentalUncheckedUpdateWithoutBikeInput>
  }

  export type RentalUpdateManyWithWhereWithoutBikeInput = {
    where: RentalScalarWhereInput
    data: XOR<RentalUpdateManyMutationInput, RentalUncheckedUpdateManyWithoutBikeInput>
  }

  export type RentalScalarWhereInput = {
    AND?: RentalScalarWhereInput | RentalScalarWhereInput[]
    OR?: RentalScalarWhereInput[]
    NOT?: RentalScalarWhereInput | RentalScalarWhereInput[]
    id?: IntFilter<"Rental"> | number
    user_id?: IntFilter<"Rental"> | number
    bike_id?: IntFilter<"Rental"> | number
    start_time?: DateTimeFilter<"Rental"> | Date | string
    end_time?: DateTimeFilter<"Rental"> | Date | string
    status?: StringFilter<"Rental"> | string
    price?: FloatFilter<"Rental"> | number
    created_at?: DateTimeFilter<"Rental"> | Date | string
    updated_at?: DateTimeFilter<"Rental"> | Date | string
  }

  export type BikeCreateWithoutParkInput = {
    model: string
    status: string
    lock: boolean
    location: string
    price_tier: string
    created_at?: Date | string
    updated_at?: Date | string
    Rental?: RentalCreateNestedManyWithoutBikeInput
  }

  export type BikeUncheckedCreateWithoutParkInput = {
    id?: number
    model: string
    status: string
    lock: boolean
    location: string
    price_tier: string
    created_at?: Date | string
    updated_at?: Date | string
    Rental?: RentalUncheckedCreateNestedManyWithoutBikeInput
  }

  export type BikeCreateOrConnectWithoutParkInput = {
    where: BikeWhereUniqueInput
    create: XOR<BikeCreateWithoutParkInput, BikeUncheckedCreateWithoutParkInput>
  }

  export type BikeCreateManyParkInputEnvelope = {
    data: BikeCreateManyParkInput | BikeCreateManyParkInput[]
    skipDuplicates?: boolean
  }

  export type BikeUpsertWithWhereUniqueWithoutParkInput = {
    where: BikeWhereUniqueInput
    update: XOR<BikeUpdateWithoutParkInput, BikeUncheckedUpdateWithoutParkInput>
    create: XOR<BikeCreateWithoutParkInput, BikeUncheckedCreateWithoutParkInput>
  }

  export type BikeUpdateWithWhereUniqueWithoutParkInput = {
    where: BikeWhereUniqueInput
    data: XOR<BikeUpdateWithoutParkInput, BikeUncheckedUpdateWithoutParkInput>
  }

  export type BikeUpdateManyWithWhereWithoutParkInput = {
    where: BikeScalarWhereInput
    data: XOR<BikeUpdateManyMutationInput, BikeUncheckedUpdateManyWithoutParkInput>
  }

  export type BikeScalarWhereInput = {
    AND?: BikeScalarWhereInput | BikeScalarWhereInput[]
    OR?: BikeScalarWhereInput[]
    NOT?: BikeScalarWhereInput | BikeScalarWhereInput[]
    id?: IntFilter<"Bike"> | number
    model?: StringFilter<"Bike"> | string
    status?: StringFilter<"Bike"> | string
    lock?: BoolFilter<"Bike"> | boolean
    location?: StringFilter<"Bike"> | string
    price_tier?: StringFilter<"Bike"> | string
    park_id?: IntFilter<"Bike"> | number
    created_at?: DateTimeFilter<"Bike"> | Date | string
    updated_at?: DateTimeFilter<"Bike"> | Date | string
  }

  export type RentalCreateWithoutUserInput = {
    start_time: Date | string
    end_time: Date | string
    status: string
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    Bike: BikeCreateNestedOneWithoutRentalInput
  }

  export type RentalUncheckedCreateWithoutUserInput = {
    id?: number
    bike_id: number
    start_time: Date | string
    end_time: Date | string
    status: string
    price: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RentalCreateOrConnectWithoutUserInput = {
    where: RentalWhereUniqueInput
    create: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput>
  }

  export type RentalCreateManyUserInputEnvelope = {
    data: RentalCreateManyUserInput | RentalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RentalUpsertWithWhereUniqueWithoutUserInput = {
    where: RentalWhereUniqueInput
    update: XOR<RentalUpdateWithoutUserInput, RentalUncheckedUpdateWithoutUserInput>
    create: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput>
  }

  export type RentalUpdateWithWhereUniqueWithoutUserInput = {
    where: RentalWhereUniqueInput
    data: XOR<RentalUpdateWithoutUserInput, RentalUncheckedUpdateWithoutUserInput>
  }

  export type RentalUpdateManyWithWhereWithoutUserInput = {
    where: RentalScalarWhereInput
    data: XOR<RentalUpdateManyMutationInput, RentalUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutRentalInput = {
    name: string
    email: string
    password: string
    role?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUncheckedCreateWithoutRentalInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCreateOrConnectWithoutRentalInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRentalInput, UserUncheckedCreateWithoutRentalInput>
  }

  export type BikeCreateWithoutRentalInput = {
    model: string
    status: string
    lock: boolean
    location: string
    price_tier: string
    created_at?: Date | string
    updated_at?: Date | string
    Park: ParkCreateNestedOneWithoutBikeInput
  }

  export type BikeUncheckedCreateWithoutRentalInput = {
    id?: number
    model: string
    status: string
    lock: boolean
    location: string
    price_tier: string
    park_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BikeCreateOrConnectWithoutRentalInput = {
    where: BikeWhereUniqueInput
    create: XOR<BikeCreateWithoutRentalInput, BikeUncheckedCreateWithoutRentalInput>
  }

  export type UserUpsertWithoutRentalInput = {
    update: XOR<UserUpdateWithoutRentalInput, UserUncheckedUpdateWithoutRentalInput>
    create: XOR<UserCreateWithoutRentalInput, UserUncheckedCreateWithoutRentalInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRentalInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRentalInput, UserUncheckedUpdateWithoutRentalInput>
  }

  export type UserUpdateWithoutRentalInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutRentalInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BikeUpsertWithoutRentalInput = {
    update: XOR<BikeUpdateWithoutRentalInput, BikeUncheckedUpdateWithoutRentalInput>
    create: XOR<BikeCreateWithoutRentalInput, BikeUncheckedCreateWithoutRentalInput>
    where?: BikeWhereInput
  }

  export type BikeUpdateToOneWithWhereWithoutRentalInput = {
    where?: BikeWhereInput
    data: XOR<BikeUpdateWithoutRentalInput, BikeUncheckedUpdateWithoutRentalInput>
  }

  export type BikeUpdateWithoutRentalInput = {
    model?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lock?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    price_tier?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Park?: ParkUpdateOneRequiredWithoutBikeNestedInput
  }

  export type BikeUncheckedUpdateWithoutRentalInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lock?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    price_tier?: StringFieldUpdateOperationsInput | string
    park_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalCreateManyBikeInput = {
    id?: number
    user_id: number
    start_time: Date | string
    end_time: Date | string
    status: string
    price: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RentalUpdateWithoutBikeInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutRentalNestedInput
  }

  export type RentalUncheckedUpdateWithoutBikeInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalUncheckedUpdateManyWithoutBikeInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BikeCreateManyParkInput = {
    id?: number
    model: string
    status: string
    lock: boolean
    location: string
    price_tier: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BikeUpdateWithoutParkInput = {
    model?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lock?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    price_tier?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Rental?: RentalUpdateManyWithoutBikeNestedInput
  }

  export type BikeUncheckedUpdateWithoutParkInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lock?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    price_tier?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Rental?: RentalUncheckedUpdateManyWithoutBikeNestedInput
  }

  export type BikeUncheckedUpdateManyWithoutParkInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lock?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    price_tier?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalCreateManyUserInput = {
    id?: number
    bike_id: number
    start_time: Date | string
    end_time: Date | string
    status: string
    price: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RentalUpdateWithoutUserInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Bike?: BikeUpdateOneRequiredWithoutRentalNestedInput
  }

  export type RentalUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bike_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bike_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use BikeCountOutputTypeDefaultArgs instead
     */
    export type BikeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BikeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParkCountOutputTypeDefaultArgs instead
     */
    export type ParkCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParkCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BikeDefaultArgs instead
     */
    export type BikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BikeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParkDefaultArgs instead
     */
    export type ParkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParkDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RentalDefaultArgs instead
     */
    export type RentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RentalDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}