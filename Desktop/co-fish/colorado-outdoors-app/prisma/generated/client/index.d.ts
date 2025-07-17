
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TroutStocking
 * 
 */
export type TroutStocking = $Result.DefaultSelection<Prisma.$TroutStockingPayload>
/**
 * Model WaterCondition
 * 
 */
export type WaterCondition = $Result.DefaultSelection<Prisma.$WaterConditionPayload>
/**
 * Model OutdoorEvent
 * 
 */
export type OutdoorEvent = $Result.DefaultSelection<Prisma.$OutdoorEventPayload>
/**
 * Model HuntingInfo
 * 
 */
export type HuntingInfo = $Result.DefaultSelection<Prisma.$HuntingInfoPayload>
/**
 * Model ParkInfo
 * 
 */
export type ParkInfo = $Result.DefaultSelection<Prisma.$ParkInfoPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserFavorite
 * 
 */
export type UserFavorite = $Result.DefaultSelection<Prisma.$UserFavoritePayload>
/**
 * Model TripPlan
 * 
 */
export type TripPlan = $Result.DefaultSelection<Prisma.$TripPlanPayload>
/**
 * Model TripPlanItem
 * 
 */
export type TripPlanItem = $Result.DefaultSelection<Prisma.$TripPlanItemPayload>
/**
 * Model UserSubscription
 * 
 */
export type UserSubscription = $Result.DefaultSelection<Prisma.$UserSubscriptionPayload>
/**
 * Model DataSyncLog
 * 
 */
export type DataSyncLog = $Result.DefaultSelection<Prisma.$DataSyncLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TroutStockings
 * const troutStockings = await prisma.troutStocking.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more TroutStockings
   * const troutStockings = await prisma.troutStocking.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.troutStocking`: Exposes CRUD operations for the **TroutStocking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TroutStockings
    * const troutStockings = await prisma.troutStocking.findMany()
    * ```
    */
  get troutStocking(): Prisma.TroutStockingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.waterCondition`: Exposes CRUD operations for the **WaterCondition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WaterConditions
    * const waterConditions = await prisma.waterCondition.findMany()
    * ```
    */
  get waterCondition(): Prisma.WaterConditionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outdoorEvent`: Exposes CRUD operations for the **OutdoorEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutdoorEvents
    * const outdoorEvents = await prisma.outdoorEvent.findMany()
    * ```
    */
  get outdoorEvent(): Prisma.OutdoorEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.huntingInfo`: Exposes CRUD operations for the **HuntingInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HuntingInfos
    * const huntingInfos = await prisma.huntingInfo.findMany()
    * ```
    */
  get huntingInfo(): Prisma.HuntingInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parkInfo`: Exposes CRUD operations for the **ParkInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkInfos
    * const parkInfos = await prisma.parkInfo.findMany()
    * ```
    */
  get parkInfo(): Prisma.ParkInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userFavorite`: Exposes CRUD operations for the **UserFavorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFavorites
    * const userFavorites = await prisma.userFavorite.findMany()
    * ```
    */
  get userFavorite(): Prisma.UserFavoriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tripPlan`: Exposes CRUD operations for the **TripPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripPlans
    * const tripPlans = await prisma.tripPlan.findMany()
    * ```
    */
  get tripPlan(): Prisma.TripPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tripPlanItem`: Exposes CRUD operations for the **TripPlanItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripPlanItems
    * const tripPlanItems = await prisma.tripPlanItem.findMany()
    * ```
    */
  get tripPlanItem(): Prisma.TripPlanItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSubscription`: Exposes CRUD operations for the **UserSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSubscriptions
    * const userSubscriptions = await prisma.userSubscription.findMany()
    * ```
    */
  get userSubscription(): Prisma.UserSubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataSyncLog`: Exposes CRUD operations for the **DataSyncLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataSyncLogs
    * const dataSyncLogs = await prisma.dataSyncLog.findMany()
    * ```
    */
  get dataSyncLog(): Prisma.DataSyncLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    TroutStocking: 'TroutStocking',
    WaterCondition: 'WaterCondition',
    OutdoorEvent: 'OutdoorEvent',
    HuntingInfo: 'HuntingInfo',
    ParkInfo: 'ParkInfo',
    User: 'User',
    UserFavorite: 'UserFavorite',
    TripPlan: 'TripPlan',
    TripPlanItem: 'TripPlanItem',
    UserSubscription: 'UserSubscription',
    DataSyncLog: 'DataSyncLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "troutStocking" | "waterCondition" | "outdoorEvent" | "huntingInfo" | "parkInfo" | "user" | "userFavorite" | "tripPlan" | "tripPlanItem" | "userSubscription" | "dataSyncLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TroutStocking: {
        payload: Prisma.$TroutStockingPayload<ExtArgs>
        fields: Prisma.TroutStockingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TroutStockingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TroutStockingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TroutStockingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TroutStockingPayload>
          }
          findFirst: {
            args: Prisma.TroutStockingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TroutStockingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TroutStockingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TroutStockingPayload>
          }
          findMany: {
            args: Prisma.TroutStockingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TroutStockingPayload>[]
          }
          create: {
            args: Prisma.TroutStockingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TroutStockingPayload>
          }
          createMany: {
            args: Prisma.TroutStockingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TroutStockingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TroutStockingPayload>[]
          }
          delete: {
            args: Prisma.TroutStockingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TroutStockingPayload>
          }
          update: {
            args: Prisma.TroutStockingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TroutStockingPayload>
          }
          deleteMany: {
            args: Prisma.TroutStockingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TroutStockingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TroutStockingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TroutStockingPayload>[]
          }
          upsert: {
            args: Prisma.TroutStockingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TroutStockingPayload>
          }
          aggregate: {
            args: Prisma.TroutStockingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTroutStocking>
          }
          groupBy: {
            args: Prisma.TroutStockingGroupByArgs<ExtArgs>
            result: $Utils.Optional<TroutStockingGroupByOutputType>[]
          }
          count: {
            args: Prisma.TroutStockingCountArgs<ExtArgs>
            result: $Utils.Optional<TroutStockingCountAggregateOutputType> | number
          }
        }
      }
      WaterCondition: {
        payload: Prisma.$WaterConditionPayload<ExtArgs>
        fields: Prisma.WaterConditionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaterConditionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterConditionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaterConditionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterConditionPayload>
          }
          findFirst: {
            args: Prisma.WaterConditionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterConditionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaterConditionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterConditionPayload>
          }
          findMany: {
            args: Prisma.WaterConditionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterConditionPayload>[]
          }
          create: {
            args: Prisma.WaterConditionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterConditionPayload>
          }
          createMany: {
            args: Prisma.WaterConditionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WaterConditionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterConditionPayload>[]
          }
          delete: {
            args: Prisma.WaterConditionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterConditionPayload>
          }
          update: {
            args: Prisma.WaterConditionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterConditionPayload>
          }
          deleteMany: {
            args: Prisma.WaterConditionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaterConditionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WaterConditionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterConditionPayload>[]
          }
          upsert: {
            args: Prisma.WaterConditionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterConditionPayload>
          }
          aggregate: {
            args: Prisma.WaterConditionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaterCondition>
          }
          groupBy: {
            args: Prisma.WaterConditionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaterConditionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaterConditionCountArgs<ExtArgs>
            result: $Utils.Optional<WaterConditionCountAggregateOutputType> | number
          }
        }
      }
      OutdoorEvent: {
        payload: Prisma.$OutdoorEventPayload<ExtArgs>
        fields: Prisma.OutdoorEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutdoorEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutdoorEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutdoorEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutdoorEventPayload>
          }
          findFirst: {
            args: Prisma.OutdoorEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutdoorEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutdoorEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutdoorEventPayload>
          }
          findMany: {
            args: Prisma.OutdoorEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutdoorEventPayload>[]
          }
          create: {
            args: Prisma.OutdoorEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutdoorEventPayload>
          }
          createMany: {
            args: Prisma.OutdoorEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutdoorEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutdoorEventPayload>[]
          }
          delete: {
            args: Prisma.OutdoorEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutdoorEventPayload>
          }
          update: {
            args: Prisma.OutdoorEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutdoorEventPayload>
          }
          deleteMany: {
            args: Prisma.OutdoorEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutdoorEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutdoorEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutdoorEventPayload>[]
          }
          upsert: {
            args: Prisma.OutdoorEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutdoorEventPayload>
          }
          aggregate: {
            args: Prisma.OutdoorEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutdoorEvent>
          }
          groupBy: {
            args: Prisma.OutdoorEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutdoorEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutdoorEventCountArgs<ExtArgs>
            result: $Utils.Optional<OutdoorEventCountAggregateOutputType> | number
          }
        }
      }
      HuntingInfo: {
        payload: Prisma.$HuntingInfoPayload<ExtArgs>
        fields: Prisma.HuntingInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HuntingInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HuntingInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingInfoPayload>
          }
          findFirst: {
            args: Prisma.HuntingInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HuntingInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingInfoPayload>
          }
          findMany: {
            args: Prisma.HuntingInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingInfoPayload>[]
          }
          create: {
            args: Prisma.HuntingInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingInfoPayload>
          }
          createMany: {
            args: Prisma.HuntingInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HuntingInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingInfoPayload>[]
          }
          delete: {
            args: Prisma.HuntingInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingInfoPayload>
          }
          update: {
            args: Prisma.HuntingInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingInfoPayload>
          }
          deleteMany: {
            args: Prisma.HuntingInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HuntingInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HuntingInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingInfoPayload>[]
          }
          upsert: {
            args: Prisma.HuntingInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuntingInfoPayload>
          }
          aggregate: {
            args: Prisma.HuntingInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHuntingInfo>
          }
          groupBy: {
            args: Prisma.HuntingInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<HuntingInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.HuntingInfoCountArgs<ExtArgs>
            result: $Utils.Optional<HuntingInfoCountAggregateOutputType> | number
          }
        }
      }
      ParkInfo: {
        payload: Prisma.$ParkInfoPayload<ExtArgs>
        fields: Prisma.ParkInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkInfoPayload>
          }
          findFirst: {
            args: Prisma.ParkInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkInfoPayload>
          }
          findMany: {
            args: Prisma.ParkInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkInfoPayload>[]
          }
          create: {
            args: Prisma.ParkInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkInfoPayload>
          }
          createMany: {
            args: Prisma.ParkInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkInfoPayload>[]
          }
          delete: {
            args: Prisma.ParkInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkInfoPayload>
          }
          update: {
            args: Prisma.ParkInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkInfoPayload>
          }
          deleteMany: {
            args: Prisma.ParkInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkInfoPayload>[]
          }
          upsert: {
            args: Prisma.ParkInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkInfoPayload>
          }
          aggregate: {
            args: Prisma.ParkInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkInfo>
          }
          groupBy: {
            args: Prisma.ParkInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkInfoCountArgs<ExtArgs>
            result: $Utils.Optional<ParkInfoCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserFavorite: {
        payload: Prisma.$UserFavoritePayload<ExtArgs>
        fields: Prisma.UserFavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>
          }
          findFirst: {
            args: Prisma.UserFavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>
          }
          findMany: {
            args: Prisma.UserFavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>[]
          }
          create: {
            args: Prisma.UserFavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>
          }
          createMany: {
            args: Prisma.UserFavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserFavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>[]
          }
          delete: {
            args: Prisma.UserFavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>
          }
          update: {
            args: Prisma.UserFavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>
          }
          deleteMany: {
            args: Prisma.UserFavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserFavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserFavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>[]
          }
          upsert: {
            args: Prisma.UserFavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>
          }
          aggregate: {
            args: Prisma.UserFavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserFavorite>
          }
          groupBy: {
            args: Prisma.UserFavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserFavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserFavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<UserFavoriteCountAggregateOutputType> | number
          }
        }
      }
      TripPlan: {
        payload: Prisma.$TripPlanPayload<ExtArgs>
        fields: Prisma.TripPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>
          }
          findFirst: {
            args: Prisma.TripPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>
          }
          findMany: {
            args: Prisma.TripPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>[]
          }
          create: {
            args: Prisma.TripPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>
          }
          createMany: {
            args: Prisma.TripPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>[]
          }
          delete: {
            args: Prisma.TripPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>
          }
          update: {
            args: Prisma.TripPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>
          }
          deleteMany: {
            args: Prisma.TripPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>[]
          }
          upsert: {
            args: Prisma.TripPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>
          }
          aggregate: {
            args: Prisma.TripPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripPlan>
          }
          groupBy: {
            args: Prisma.TripPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripPlanCountArgs<ExtArgs>
            result: $Utils.Optional<TripPlanCountAggregateOutputType> | number
          }
        }
      }
      TripPlanItem: {
        payload: Prisma.$TripPlanItemPayload<ExtArgs>
        fields: Prisma.TripPlanItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripPlanItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripPlanItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanItemPayload>
          }
          findFirst: {
            args: Prisma.TripPlanItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripPlanItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanItemPayload>
          }
          findMany: {
            args: Prisma.TripPlanItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanItemPayload>[]
          }
          create: {
            args: Prisma.TripPlanItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanItemPayload>
          }
          createMany: {
            args: Prisma.TripPlanItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripPlanItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanItemPayload>[]
          }
          delete: {
            args: Prisma.TripPlanItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanItemPayload>
          }
          update: {
            args: Prisma.TripPlanItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanItemPayload>
          }
          deleteMany: {
            args: Prisma.TripPlanItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripPlanItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripPlanItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanItemPayload>[]
          }
          upsert: {
            args: Prisma.TripPlanItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanItemPayload>
          }
          aggregate: {
            args: Prisma.TripPlanItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripPlanItem>
          }
          groupBy: {
            args: Prisma.TripPlanItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripPlanItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripPlanItemCountArgs<ExtArgs>
            result: $Utils.Optional<TripPlanItemCountAggregateOutputType> | number
          }
        }
      }
      UserSubscription: {
        payload: Prisma.$UserSubscriptionPayload<ExtArgs>
        fields: Prisma.UserSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.UserSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          findMany: {
            args: Prisma.UserSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>[]
          }
          create: {
            args: Prisma.UserSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          createMany: {
            args: Prisma.UserSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.UserSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          update: {
            args: Prisma.UserSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.UserSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.UserSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.UserSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSubscription>
          }
          groupBy: {
            args: Prisma.UserSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<UserSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      DataSyncLog: {
        payload: Prisma.$DataSyncLogPayload<ExtArgs>
        fields: Prisma.DataSyncLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataSyncLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSyncLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataSyncLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSyncLogPayload>
          }
          findFirst: {
            args: Prisma.DataSyncLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSyncLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataSyncLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSyncLogPayload>
          }
          findMany: {
            args: Prisma.DataSyncLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSyncLogPayload>[]
          }
          create: {
            args: Prisma.DataSyncLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSyncLogPayload>
          }
          createMany: {
            args: Prisma.DataSyncLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DataSyncLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSyncLogPayload>[]
          }
          delete: {
            args: Prisma.DataSyncLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSyncLogPayload>
          }
          update: {
            args: Prisma.DataSyncLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSyncLogPayload>
          }
          deleteMany: {
            args: Prisma.DataSyncLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataSyncLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DataSyncLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSyncLogPayload>[]
          }
          upsert: {
            args: Prisma.DataSyncLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSyncLogPayload>
          }
          aggregate: {
            args: Prisma.DataSyncLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataSyncLog>
          }
          groupBy: {
            args: Prisma.DataSyncLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataSyncLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataSyncLogCountArgs<ExtArgs>
            result: $Utils.Optional<DataSyncLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    troutStocking?: TroutStockingOmit
    waterCondition?: WaterConditionOmit
    outdoorEvent?: OutdoorEventOmit
    huntingInfo?: HuntingInfoOmit
    parkInfo?: ParkInfoOmit
    user?: UserOmit
    userFavorite?: UserFavoriteOmit
    tripPlan?: TripPlanOmit
    tripPlanItem?: TripPlanItemOmit
    userSubscription?: UserSubscriptionOmit
    dataSyncLog?: DataSyncLogOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type TroutStockingCountOutputType
   */

  export type TroutStockingCountOutputType = {
    favorites: number
    tripPlanItems: number
  }

  export type TroutStockingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorites?: boolean | TroutStockingCountOutputTypeCountFavoritesArgs
    tripPlanItems?: boolean | TroutStockingCountOutputTypeCountTripPlanItemsArgs
  }

  // Custom InputTypes
  /**
   * TroutStockingCountOutputType without action
   */
  export type TroutStockingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TroutStockingCountOutputType
     */
    select?: TroutStockingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TroutStockingCountOutputType without action
   */
  export type TroutStockingCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavoriteWhereInput
  }

  /**
   * TroutStockingCountOutputType without action
   */
  export type TroutStockingCountOutputTypeCountTripPlanItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripPlanItemWhereInput
  }


  /**
   * Count Type OutdoorEventCountOutputType
   */

  export type OutdoorEventCountOutputType = {
    favorites: number
    tripPlanItems: number
  }

  export type OutdoorEventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorites?: boolean | OutdoorEventCountOutputTypeCountFavoritesArgs
    tripPlanItems?: boolean | OutdoorEventCountOutputTypeCountTripPlanItemsArgs
  }

  // Custom InputTypes
  /**
   * OutdoorEventCountOutputType without action
   */
  export type OutdoorEventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutdoorEventCountOutputType
     */
    select?: OutdoorEventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OutdoorEventCountOutputType without action
   */
  export type OutdoorEventCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavoriteWhereInput
  }

  /**
   * OutdoorEventCountOutputType without action
   */
  export type OutdoorEventCountOutputTypeCountTripPlanItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripPlanItemWhereInput
  }


  /**
   * Count Type ParkInfoCountOutputType
   */

  export type ParkInfoCountOutputType = {
    favorites: number
    tripPlanItems: number
  }

  export type ParkInfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorites?: boolean | ParkInfoCountOutputTypeCountFavoritesArgs
    tripPlanItems?: boolean | ParkInfoCountOutputTypeCountTripPlanItemsArgs
  }

  // Custom InputTypes
  /**
   * ParkInfoCountOutputType without action
   */
  export type ParkInfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkInfoCountOutputType
     */
    select?: ParkInfoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParkInfoCountOutputType without action
   */
  export type ParkInfoCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavoriteWhereInput
  }

  /**
   * ParkInfoCountOutputType without action
   */
  export type ParkInfoCountOutputTypeCountTripPlanItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripPlanItemWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    favoriteLocations: number
    tripPlans: number
    subscriptions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoriteLocations?: boolean | UserCountOutputTypeCountFavoriteLocationsArgs
    tripPlans?: boolean | UserCountOutputTypeCountTripPlansArgs
    subscriptions?: boolean | UserCountOutputTypeCountSubscriptionsArgs
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
  export type UserCountOutputTypeCountFavoriteLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavoriteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTripPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripPlanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubscriptionWhereInput
  }


  /**
   * Count Type TripPlanCountOutputType
   */

  export type TripPlanCountOutputType = {
    items: number
  }

  export type TripPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | TripPlanCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * TripPlanCountOutputType without action
   */
  export type TripPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanCountOutputType
     */
    select?: TripPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TripPlanCountOutputType without action
   */
  export type TripPlanCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripPlanItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TroutStocking
   */

  export type AggregateTroutStocking = {
    _count: TroutStockingCountAggregateOutputType | null
    _avg: TroutStockingAvgAggregateOutputType | null
    _sum: TroutStockingSumAggregateOutputType | null
    _min: TroutStockingMinAggregateOutputType | null
    _max: TroutStockingMaxAggregateOutputType | null
  }

  export type TroutStockingAvgAggregateOutputType = {
    quantity: number | null
    latitude: number | null
    longitude: number | null
  }

  export type TroutStockingSumAggregateOutputType = {
    quantity: number | null
    latitude: number | null
    longitude: number | null
  }

  export type TroutStockingMinAggregateOutputType = {
    id: string | null
    location: string | null
    waterBody: string | null
    county: string | null
    species: string | null
    size: string | null
    quantity: number | null
    stockingDate: Date | null
    nextStockingDate: Date | null
    latitude: number | null
    longitude: number | null
    waterBodyType: string | null
    accessInfo: string | null
    regulations: string | null
    source: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TroutStockingMaxAggregateOutputType = {
    id: string | null
    location: string | null
    waterBody: string | null
    county: string | null
    species: string | null
    size: string | null
    quantity: number | null
    stockingDate: Date | null
    nextStockingDate: Date | null
    latitude: number | null
    longitude: number | null
    waterBodyType: string | null
    accessInfo: string | null
    regulations: string | null
    source: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TroutStockingCountAggregateOutputType = {
    id: number
    location: number
    waterBody: number
    county: number
    species: number
    size: number
    quantity: number
    stockingDate: number
    nextStockingDate: number
    latitude: number
    longitude: number
    waterBodyType: number
    accessInfo: number
    regulations: number
    source: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TroutStockingAvgAggregateInputType = {
    quantity?: true
    latitude?: true
    longitude?: true
  }

  export type TroutStockingSumAggregateInputType = {
    quantity?: true
    latitude?: true
    longitude?: true
  }

  export type TroutStockingMinAggregateInputType = {
    id?: true
    location?: true
    waterBody?: true
    county?: true
    species?: true
    size?: true
    quantity?: true
    stockingDate?: true
    nextStockingDate?: true
    latitude?: true
    longitude?: true
    waterBodyType?: true
    accessInfo?: true
    regulations?: true
    source?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TroutStockingMaxAggregateInputType = {
    id?: true
    location?: true
    waterBody?: true
    county?: true
    species?: true
    size?: true
    quantity?: true
    stockingDate?: true
    nextStockingDate?: true
    latitude?: true
    longitude?: true
    waterBodyType?: true
    accessInfo?: true
    regulations?: true
    source?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TroutStockingCountAggregateInputType = {
    id?: true
    location?: true
    waterBody?: true
    county?: true
    species?: true
    size?: true
    quantity?: true
    stockingDate?: true
    nextStockingDate?: true
    latitude?: true
    longitude?: true
    waterBodyType?: true
    accessInfo?: true
    regulations?: true
    source?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TroutStockingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TroutStocking to aggregate.
     */
    where?: TroutStockingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TroutStockings to fetch.
     */
    orderBy?: TroutStockingOrderByWithRelationInput | TroutStockingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TroutStockingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TroutStockings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TroutStockings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TroutStockings
    **/
    _count?: true | TroutStockingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TroutStockingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TroutStockingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TroutStockingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TroutStockingMaxAggregateInputType
  }

  export type GetTroutStockingAggregateType<T extends TroutStockingAggregateArgs> = {
        [P in keyof T & keyof AggregateTroutStocking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTroutStocking[P]>
      : GetScalarType<T[P], AggregateTroutStocking[P]>
  }




  export type TroutStockingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TroutStockingWhereInput
    orderBy?: TroutStockingOrderByWithAggregationInput | TroutStockingOrderByWithAggregationInput[]
    by: TroutStockingScalarFieldEnum[] | TroutStockingScalarFieldEnum
    having?: TroutStockingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TroutStockingCountAggregateInputType | true
    _avg?: TroutStockingAvgAggregateInputType
    _sum?: TroutStockingSumAggregateInputType
    _min?: TroutStockingMinAggregateInputType
    _max?: TroutStockingMaxAggregateInputType
  }

  export type TroutStockingGroupByOutputType = {
    id: string
    location: string
    waterBody: string
    county: string | null
    species: string
    size: string | null
    quantity: number
    stockingDate: Date
    nextStockingDate: Date | null
    latitude: number | null
    longitude: number | null
    waterBodyType: string | null
    accessInfo: string | null
    regulations: string | null
    source: string
    createdAt: Date
    updatedAt: Date
    _count: TroutStockingCountAggregateOutputType | null
    _avg: TroutStockingAvgAggregateOutputType | null
    _sum: TroutStockingSumAggregateOutputType | null
    _min: TroutStockingMinAggregateOutputType | null
    _max: TroutStockingMaxAggregateOutputType | null
  }

  type GetTroutStockingGroupByPayload<T extends TroutStockingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TroutStockingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TroutStockingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TroutStockingGroupByOutputType[P]>
            : GetScalarType<T[P], TroutStockingGroupByOutputType[P]>
        }
      >
    >


  export type TroutStockingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    waterBody?: boolean
    county?: boolean
    species?: boolean
    size?: boolean
    quantity?: boolean
    stockingDate?: boolean
    nextStockingDate?: boolean
    latitude?: boolean
    longitude?: boolean
    waterBodyType?: boolean
    accessInfo?: boolean
    regulations?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    favorites?: boolean | TroutStocking$favoritesArgs<ExtArgs>
    tripPlanItems?: boolean | TroutStocking$tripPlanItemsArgs<ExtArgs>
    _count?: boolean | TroutStockingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["troutStocking"]>

  export type TroutStockingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    waterBody?: boolean
    county?: boolean
    species?: boolean
    size?: boolean
    quantity?: boolean
    stockingDate?: boolean
    nextStockingDate?: boolean
    latitude?: boolean
    longitude?: boolean
    waterBodyType?: boolean
    accessInfo?: boolean
    regulations?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["troutStocking"]>

  export type TroutStockingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    waterBody?: boolean
    county?: boolean
    species?: boolean
    size?: boolean
    quantity?: boolean
    stockingDate?: boolean
    nextStockingDate?: boolean
    latitude?: boolean
    longitude?: boolean
    waterBodyType?: boolean
    accessInfo?: boolean
    regulations?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["troutStocking"]>

  export type TroutStockingSelectScalar = {
    id?: boolean
    location?: boolean
    waterBody?: boolean
    county?: boolean
    species?: boolean
    size?: boolean
    quantity?: boolean
    stockingDate?: boolean
    nextStockingDate?: boolean
    latitude?: boolean
    longitude?: boolean
    waterBodyType?: boolean
    accessInfo?: boolean
    regulations?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TroutStockingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "location" | "waterBody" | "county" | "species" | "size" | "quantity" | "stockingDate" | "nextStockingDate" | "latitude" | "longitude" | "waterBodyType" | "accessInfo" | "regulations" | "source" | "createdAt" | "updatedAt", ExtArgs["result"]["troutStocking"]>
  export type TroutStockingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorites?: boolean | TroutStocking$favoritesArgs<ExtArgs>
    tripPlanItems?: boolean | TroutStocking$tripPlanItemsArgs<ExtArgs>
    _count?: boolean | TroutStockingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TroutStockingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TroutStockingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TroutStockingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TroutStocking"
    objects: {
      favorites: Prisma.$UserFavoritePayload<ExtArgs>[]
      tripPlanItems: Prisma.$TripPlanItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      location: string
      waterBody: string
      county: string | null
      species: string
      size: string | null
      quantity: number
      stockingDate: Date
      nextStockingDate: Date | null
      latitude: number | null
      longitude: number | null
      waterBodyType: string | null
      accessInfo: string | null
      regulations: string | null
      source: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["troutStocking"]>
    composites: {}
  }

  type TroutStockingGetPayload<S extends boolean | null | undefined | TroutStockingDefaultArgs> = $Result.GetResult<Prisma.$TroutStockingPayload, S>

  type TroutStockingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TroutStockingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TroutStockingCountAggregateInputType | true
    }

  export interface TroutStockingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TroutStocking'], meta: { name: 'TroutStocking' } }
    /**
     * Find zero or one TroutStocking that matches the filter.
     * @param {TroutStockingFindUniqueArgs} args - Arguments to find a TroutStocking
     * @example
     * // Get one TroutStocking
     * const troutStocking = await prisma.troutStocking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TroutStockingFindUniqueArgs>(args: SelectSubset<T, TroutStockingFindUniqueArgs<ExtArgs>>): Prisma__TroutStockingClient<$Result.GetResult<Prisma.$TroutStockingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TroutStocking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TroutStockingFindUniqueOrThrowArgs} args - Arguments to find a TroutStocking
     * @example
     * // Get one TroutStocking
     * const troutStocking = await prisma.troutStocking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TroutStockingFindUniqueOrThrowArgs>(args: SelectSubset<T, TroutStockingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TroutStockingClient<$Result.GetResult<Prisma.$TroutStockingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TroutStocking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TroutStockingFindFirstArgs} args - Arguments to find a TroutStocking
     * @example
     * // Get one TroutStocking
     * const troutStocking = await prisma.troutStocking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TroutStockingFindFirstArgs>(args?: SelectSubset<T, TroutStockingFindFirstArgs<ExtArgs>>): Prisma__TroutStockingClient<$Result.GetResult<Prisma.$TroutStockingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TroutStocking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TroutStockingFindFirstOrThrowArgs} args - Arguments to find a TroutStocking
     * @example
     * // Get one TroutStocking
     * const troutStocking = await prisma.troutStocking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TroutStockingFindFirstOrThrowArgs>(args?: SelectSubset<T, TroutStockingFindFirstOrThrowArgs<ExtArgs>>): Prisma__TroutStockingClient<$Result.GetResult<Prisma.$TroutStockingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TroutStockings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TroutStockingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TroutStockings
     * const troutStockings = await prisma.troutStocking.findMany()
     * 
     * // Get first 10 TroutStockings
     * const troutStockings = await prisma.troutStocking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const troutStockingWithIdOnly = await prisma.troutStocking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TroutStockingFindManyArgs>(args?: SelectSubset<T, TroutStockingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TroutStockingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TroutStocking.
     * @param {TroutStockingCreateArgs} args - Arguments to create a TroutStocking.
     * @example
     * // Create one TroutStocking
     * const TroutStocking = await prisma.troutStocking.create({
     *   data: {
     *     // ... data to create a TroutStocking
     *   }
     * })
     * 
     */
    create<T extends TroutStockingCreateArgs>(args: SelectSubset<T, TroutStockingCreateArgs<ExtArgs>>): Prisma__TroutStockingClient<$Result.GetResult<Prisma.$TroutStockingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TroutStockings.
     * @param {TroutStockingCreateManyArgs} args - Arguments to create many TroutStockings.
     * @example
     * // Create many TroutStockings
     * const troutStocking = await prisma.troutStocking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TroutStockingCreateManyArgs>(args?: SelectSubset<T, TroutStockingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TroutStockings and returns the data saved in the database.
     * @param {TroutStockingCreateManyAndReturnArgs} args - Arguments to create many TroutStockings.
     * @example
     * // Create many TroutStockings
     * const troutStocking = await prisma.troutStocking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TroutStockings and only return the `id`
     * const troutStockingWithIdOnly = await prisma.troutStocking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TroutStockingCreateManyAndReturnArgs>(args?: SelectSubset<T, TroutStockingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TroutStockingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TroutStocking.
     * @param {TroutStockingDeleteArgs} args - Arguments to delete one TroutStocking.
     * @example
     * // Delete one TroutStocking
     * const TroutStocking = await prisma.troutStocking.delete({
     *   where: {
     *     // ... filter to delete one TroutStocking
     *   }
     * })
     * 
     */
    delete<T extends TroutStockingDeleteArgs>(args: SelectSubset<T, TroutStockingDeleteArgs<ExtArgs>>): Prisma__TroutStockingClient<$Result.GetResult<Prisma.$TroutStockingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TroutStocking.
     * @param {TroutStockingUpdateArgs} args - Arguments to update one TroutStocking.
     * @example
     * // Update one TroutStocking
     * const troutStocking = await prisma.troutStocking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TroutStockingUpdateArgs>(args: SelectSubset<T, TroutStockingUpdateArgs<ExtArgs>>): Prisma__TroutStockingClient<$Result.GetResult<Prisma.$TroutStockingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TroutStockings.
     * @param {TroutStockingDeleteManyArgs} args - Arguments to filter TroutStockings to delete.
     * @example
     * // Delete a few TroutStockings
     * const { count } = await prisma.troutStocking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TroutStockingDeleteManyArgs>(args?: SelectSubset<T, TroutStockingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TroutStockings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TroutStockingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TroutStockings
     * const troutStocking = await prisma.troutStocking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TroutStockingUpdateManyArgs>(args: SelectSubset<T, TroutStockingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TroutStockings and returns the data updated in the database.
     * @param {TroutStockingUpdateManyAndReturnArgs} args - Arguments to update many TroutStockings.
     * @example
     * // Update many TroutStockings
     * const troutStocking = await prisma.troutStocking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TroutStockings and only return the `id`
     * const troutStockingWithIdOnly = await prisma.troutStocking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TroutStockingUpdateManyAndReturnArgs>(args: SelectSubset<T, TroutStockingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TroutStockingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TroutStocking.
     * @param {TroutStockingUpsertArgs} args - Arguments to update or create a TroutStocking.
     * @example
     * // Update or create a TroutStocking
     * const troutStocking = await prisma.troutStocking.upsert({
     *   create: {
     *     // ... data to create a TroutStocking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TroutStocking we want to update
     *   }
     * })
     */
    upsert<T extends TroutStockingUpsertArgs>(args: SelectSubset<T, TroutStockingUpsertArgs<ExtArgs>>): Prisma__TroutStockingClient<$Result.GetResult<Prisma.$TroutStockingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TroutStockings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TroutStockingCountArgs} args - Arguments to filter TroutStockings to count.
     * @example
     * // Count the number of TroutStockings
     * const count = await prisma.troutStocking.count({
     *   where: {
     *     // ... the filter for the TroutStockings we want to count
     *   }
     * })
    **/
    count<T extends TroutStockingCountArgs>(
      args?: Subset<T, TroutStockingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TroutStockingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TroutStocking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TroutStockingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TroutStockingAggregateArgs>(args: Subset<T, TroutStockingAggregateArgs>): Prisma.PrismaPromise<GetTroutStockingAggregateType<T>>

    /**
     * Group by TroutStocking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TroutStockingGroupByArgs} args - Group by arguments.
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
      T extends TroutStockingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TroutStockingGroupByArgs['orderBy'] }
        : { orderBy?: TroutStockingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TroutStockingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTroutStockingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TroutStocking model
   */
  readonly fields: TroutStockingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TroutStocking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TroutStockingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    favorites<T extends TroutStocking$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, TroutStocking$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tripPlanItems<T extends TroutStocking$tripPlanItemsArgs<ExtArgs> = {}>(args?: Subset<T, TroutStocking$tripPlanItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TroutStocking model
   */
  interface TroutStockingFieldRefs {
    readonly id: FieldRef<"TroutStocking", 'String'>
    readonly location: FieldRef<"TroutStocking", 'String'>
    readonly waterBody: FieldRef<"TroutStocking", 'String'>
    readonly county: FieldRef<"TroutStocking", 'String'>
    readonly species: FieldRef<"TroutStocking", 'String'>
    readonly size: FieldRef<"TroutStocking", 'String'>
    readonly quantity: FieldRef<"TroutStocking", 'Int'>
    readonly stockingDate: FieldRef<"TroutStocking", 'DateTime'>
    readonly nextStockingDate: FieldRef<"TroutStocking", 'DateTime'>
    readonly latitude: FieldRef<"TroutStocking", 'Float'>
    readonly longitude: FieldRef<"TroutStocking", 'Float'>
    readonly waterBodyType: FieldRef<"TroutStocking", 'String'>
    readonly accessInfo: FieldRef<"TroutStocking", 'String'>
    readonly regulations: FieldRef<"TroutStocking", 'String'>
    readonly source: FieldRef<"TroutStocking", 'String'>
    readonly createdAt: FieldRef<"TroutStocking", 'DateTime'>
    readonly updatedAt: FieldRef<"TroutStocking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TroutStocking findUnique
   */
  export type TroutStockingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TroutStocking
     */
    select?: TroutStockingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TroutStocking
     */
    omit?: TroutStockingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TroutStockingInclude<ExtArgs> | null
    /**
     * Filter, which TroutStocking to fetch.
     */
    where: TroutStockingWhereUniqueInput
  }

  /**
   * TroutStocking findUniqueOrThrow
   */
  export type TroutStockingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TroutStocking
     */
    select?: TroutStockingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TroutStocking
     */
    omit?: TroutStockingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TroutStockingInclude<ExtArgs> | null
    /**
     * Filter, which TroutStocking to fetch.
     */
    where: TroutStockingWhereUniqueInput
  }

  /**
   * TroutStocking findFirst
   */
  export type TroutStockingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TroutStocking
     */
    select?: TroutStockingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TroutStocking
     */
    omit?: TroutStockingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TroutStockingInclude<ExtArgs> | null
    /**
     * Filter, which TroutStocking to fetch.
     */
    where?: TroutStockingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TroutStockings to fetch.
     */
    orderBy?: TroutStockingOrderByWithRelationInput | TroutStockingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TroutStockings.
     */
    cursor?: TroutStockingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TroutStockings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TroutStockings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TroutStockings.
     */
    distinct?: TroutStockingScalarFieldEnum | TroutStockingScalarFieldEnum[]
  }

  /**
   * TroutStocking findFirstOrThrow
   */
  export type TroutStockingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TroutStocking
     */
    select?: TroutStockingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TroutStocking
     */
    omit?: TroutStockingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TroutStockingInclude<ExtArgs> | null
    /**
     * Filter, which TroutStocking to fetch.
     */
    where?: TroutStockingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TroutStockings to fetch.
     */
    orderBy?: TroutStockingOrderByWithRelationInput | TroutStockingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TroutStockings.
     */
    cursor?: TroutStockingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TroutStockings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TroutStockings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TroutStockings.
     */
    distinct?: TroutStockingScalarFieldEnum | TroutStockingScalarFieldEnum[]
  }

  /**
   * TroutStocking findMany
   */
  export type TroutStockingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TroutStocking
     */
    select?: TroutStockingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TroutStocking
     */
    omit?: TroutStockingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TroutStockingInclude<ExtArgs> | null
    /**
     * Filter, which TroutStockings to fetch.
     */
    where?: TroutStockingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TroutStockings to fetch.
     */
    orderBy?: TroutStockingOrderByWithRelationInput | TroutStockingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TroutStockings.
     */
    cursor?: TroutStockingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TroutStockings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TroutStockings.
     */
    skip?: number
    distinct?: TroutStockingScalarFieldEnum | TroutStockingScalarFieldEnum[]
  }

  /**
   * TroutStocking create
   */
  export type TroutStockingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TroutStocking
     */
    select?: TroutStockingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TroutStocking
     */
    omit?: TroutStockingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TroutStockingInclude<ExtArgs> | null
    /**
     * The data needed to create a TroutStocking.
     */
    data: XOR<TroutStockingCreateInput, TroutStockingUncheckedCreateInput>
  }

  /**
   * TroutStocking createMany
   */
  export type TroutStockingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TroutStockings.
     */
    data: TroutStockingCreateManyInput | TroutStockingCreateManyInput[]
  }

  /**
   * TroutStocking createManyAndReturn
   */
  export type TroutStockingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TroutStocking
     */
    select?: TroutStockingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TroutStocking
     */
    omit?: TroutStockingOmit<ExtArgs> | null
    /**
     * The data used to create many TroutStockings.
     */
    data: TroutStockingCreateManyInput | TroutStockingCreateManyInput[]
  }

  /**
   * TroutStocking update
   */
  export type TroutStockingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TroutStocking
     */
    select?: TroutStockingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TroutStocking
     */
    omit?: TroutStockingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TroutStockingInclude<ExtArgs> | null
    /**
     * The data needed to update a TroutStocking.
     */
    data: XOR<TroutStockingUpdateInput, TroutStockingUncheckedUpdateInput>
    /**
     * Choose, which TroutStocking to update.
     */
    where: TroutStockingWhereUniqueInput
  }

  /**
   * TroutStocking updateMany
   */
  export type TroutStockingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TroutStockings.
     */
    data: XOR<TroutStockingUpdateManyMutationInput, TroutStockingUncheckedUpdateManyInput>
    /**
     * Filter which TroutStockings to update
     */
    where?: TroutStockingWhereInput
    /**
     * Limit how many TroutStockings to update.
     */
    limit?: number
  }

  /**
   * TroutStocking updateManyAndReturn
   */
  export type TroutStockingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TroutStocking
     */
    select?: TroutStockingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TroutStocking
     */
    omit?: TroutStockingOmit<ExtArgs> | null
    /**
     * The data used to update TroutStockings.
     */
    data: XOR<TroutStockingUpdateManyMutationInput, TroutStockingUncheckedUpdateManyInput>
    /**
     * Filter which TroutStockings to update
     */
    where?: TroutStockingWhereInput
    /**
     * Limit how many TroutStockings to update.
     */
    limit?: number
  }

  /**
   * TroutStocking upsert
   */
  export type TroutStockingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TroutStocking
     */
    select?: TroutStockingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TroutStocking
     */
    omit?: TroutStockingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TroutStockingInclude<ExtArgs> | null
    /**
     * The filter to search for the TroutStocking to update in case it exists.
     */
    where: TroutStockingWhereUniqueInput
    /**
     * In case the TroutStocking found by the `where` argument doesn't exist, create a new TroutStocking with this data.
     */
    create: XOR<TroutStockingCreateInput, TroutStockingUncheckedCreateInput>
    /**
     * In case the TroutStocking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TroutStockingUpdateInput, TroutStockingUncheckedUpdateInput>
  }

  /**
   * TroutStocking delete
   */
  export type TroutStockingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TroutStocking
     */
    select?: TroutStockingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TroutStocking
     */
    omit?: TroutStockingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TroutStockingInclude<ExtArgs> | null
    /**
     * Filter which TroutStocking to delete.
     */
    where: TroutStockingWhereUniqueInput
  }

  /**
   * TroutStocking deleteMany
   */
  export type TroutStockingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TroutStockings to delete
     */
    where?: TroutStockingWhereInput
    /**
     * Limit how many TroutStockings to delete.
     */
    limit?: number
  }

  /**
   * TroutStocking.favorites
   */
  export type TroutStocking$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    where?: UserFavoriteWhereInput
    orderBy?: UserFavoriteOrderByWithRelationInput | UserFavoriteOrderByWithRelationInput[]
    cursor?: UserFavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFavoriteScalarFieldEnum | UserFavoriteScalarFieldEnum[]
  }

  /**
   * TroutStocking.tripPlanItems
   */
  export type TroutStocking$tripPlanItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanItem
     */
    select?: TripPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanItem
     */
    omit?: TripPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanItemInclude<ExtArgs> | null
    where?: TripPlanItemWhereInput
    orderBy?: TripPlanItemOrderByWithRelationInput | TripPlanItemOrderByWithRelationInput[]
    cursor?: TripPlanItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripPlanItemScalarFieldEnum | TripPlanItemScalarFieldEnum[]
  }

  /**
   * TroutStocking without action
   */
  export type TroutStockingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TroutStocking
     */
    select?: TroutStockingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TroutStocking
     */
    omit?: TroutStockingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TroutStockingInclude<ExtArgs> | null
  }


  /**
   * Model WaterCondition
   */

  export type AggregateWaterCondition = {
    _count: WaterConditionCountAggregateOutputType | null
    _avg: WaterConditionAvgAggregateOutputType | null
    _sum: WaterConditionSumAggregateOutputType | null
    _min: WaterConditionMinAggregateOutputType | null
    _max: WaterConditionMaxAggregateOutputType | null
  }

  export type WaterConditionAvgAggregateOutputType = {
    waterTemperature: number | null
  }

  export type WaterConditionSumAggregateOutputType = {
    waterTemperature: number | null
  }

  export type WaterConditionMinAggregateOutputType = {
    id: string | null
    waterBody: string | null
    location: string | null
    lastUpdated: Date | null
    waterLevel: string | null
    waterTemperature: number | null
    clarity: string | null
    flow: string | null
    fishingConditions: string | null
    notes: string | null
    weatherImpact: string | null
    source: string | null
    createdAt: Date | null
  }

  export type WaterConditionMaxAggregateOutputType = {
    id: string | null
    waterBody: string | null
    location: string | null
    lastUpdated: Date | null
    waterLevel: string | null
    waterTemperature: number | null
    clarity: string | null
    flow: string | null
    fishingConditions: string | null
    notes: string | null
    weatherImpact: string | null
    source: string | null
    createdAt: Date | null
  }

  export type WaterConditionCountAggregateOutputType = {
    id: number
    waterBody: number
    location: number
    lastUpdated: number
    waterLevel: number
    waterTemperature: number
    clarity: number
    flow: number
    fishingConditions: number
    notes: number
    weatherImpact: number
    source: number
    createdAt: number
    _all: number
  }


  export type WaterConditionAvgAggregateInputType = {
    waterTemperature?: true
  }

  export type WaterConditionSumAggregateInputType = {
    waterTemperature?: true
  }

  export type WaterConditionMinAggregateInputType = {
    id?: true
    waterBody?: true
    location?: true
    lastUpdated?: true
    waterLevel?: true
    waterTemperature?: true
    clarity?: true
    flow?: true
    fishingConditions?: true
    notes?: true
    weatherImpact?: true
    source?: true
    createdAt?: true
  }

  export type WaterConditionMaxAggregateInputType = {
    id?: true
    waterBody?: true
    location?: true
    lastUpdated?: true
    waterLevel?: true
    waterTemperature?: true
    clarity?: true
    flow?: true
    fishingConditions?: true
    notes?: true
    weatherImpact?: true
    source?: true
    createdAt?: true
  }

  export type WaterConditionCountAggregateInputType = {
    id?: true
    waterBody?: true
    location?: true
    lastUpdated?: true
    waterLevel?: true
    waterTemperature?: true
    clarity?: true
    flow?: true
    fishingConditions?: true
    notes?: true
    weatherImpact?: true
    source?: true
    createdAt?: true
    _all?: true
  }

  export type WaterConditionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaterCondition to aggregate.
     */
    where?: WaterConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterConditions to fetch.
     */
    orderBy?: WaterConditionOrderByWithRelationInput | WaterConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaterConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WaterConditions
    **/
    _count?: true | WaterConditionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaterConditionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaterConditionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaterConditionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaterConditionMaxAggregateInputType
  }

  export type GetWaterConditionAggregateType<T extends WaterConditionAggregateArgs> = {
        [P in keyof T & keyof AggregateWaterCondition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaterCondition[P]>
      : GetScalarType<T[P], AggregateWaterCondition[P]>
  }




  export type WaterConditionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaterConditionWhereInput
    orderBy?: WaterConditionOrderByWithAggregationInput | WaterConditionOrderByWithAggregationInput[]
    by: WaterConditionScalarFieldEnum[] | WaterConditionScalarFieldEnum
    having?: WaterConditionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaterConditionCountAggregateInputType | true
    _avg?: WaterConditionAvgAggregateInputType
    _sum?: WaterConditionSumAggregateInputType
    _min?: WaterConditionMinAggregateInputType
    _max?: WaterConditionMaxAggregateInputType
  }

  export type WaterConditionGroupByOutputType = {
    id: string
    waterBody: string
    location: string
    lastUpdated: Date
    waterLevel: string
    waterTemperature: number | null
    clarity: string
    flow: string
    fishingConditions: string
    notes: string | null
    weatherImpact: string | null
    source: string
    createdAt: Date
    _count: WaterConditionCountAggregateOutputType | null
    _avg: WaterConditionAvgAggregateOutputType | null
    _sum: WaterConditionSumAggregateOutputType | null
    _min: WaterConditionMinAggregateOutputType | null
    _max: WaterConditionMaxAggregateOutputType | null
  }

  type GetWaterConditionGroupByPayload<T extends WaterConditionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaterConditionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaterConditionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaterConditionGroupByOutputType[P]>
            : GetScalarType<T[P], WaterConditionGroupByOutputType[P]>
        }
      >
    >


  export type WaterConditionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    waterBody?: boolean
    location?: boolean
    lastUpdated?: boolean
    waterLevel?: boolean
    waterTemperature?: boolean
    clarity?: boolean
    flow?: boolean
    fishingConditions?: boolean
    notes?: boolean
    weatherImpact?: boolean
    source?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["waterCondition"]>

  export type WaterConditionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    waterBody?: boolean
    location?: boolean
    lastUpdated?: boolean
    waterLevel?: boolean
    waterTemperature?: boolean
    clarity?: boolean
    flow?: boolean
    fishingConditions?: boolean
    notes?: boolean
    weatherImpact?: boolean
    source?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["waterCondition"]>

  export type WaterConditionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    waterBody?: boolean
    location?: boolean
    lastUpdated?: boolean
    waterLevel?: boolean
    waterTemperature?: boolean
    clarity?: boolean
    flow?: boolean
    fishingConditions?: boolean
    notes?: boolean
    weatherImpact?: boolean
    source?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["waterCondition"]>

  export type WaterConditionSelectScalar = {
    id?: boolean
    waterBody?: boolean
    location?: boolean
    lastUpdated?: boolean
    waterLevel?: boolean
    waterTemperature?: boolean
    clarity?: boolean
    flow?: boolean
    fishingConditions?: boolean
    notes?: boolean
    weatherImpact?: boolean
    source?: boolean
    createdAt?: boolean
  }

  export type WaterConditionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "waterBody" | "location" | "lastUpdated" | "waterLevel" | "waterTemperature" | "clarity" | "flow" | "fishingConditions" | "notes" | "weatherImpact" | "source" | "createdAt", ExtArgs["result"]["waterCondition"]>

  export type $WaterConditionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WaterCondition"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      waterBody: string
      location: string
      lastUpdated: Date
      waterLevel: string
      waterTemperature: number | null
      clarity: string
      flow: string
      fishingConditions: string
      notes: string | null
      weatherImpact: string | null
      source: string
      createdAt: Date
    }, ExtArgs["result"]["waterCondition"]>
    composites: {}
  }

  type WaterConditionGetPayload<S extends boolean | null | undefined | WaterConditionDefaultArgs> = $Result.GetResult<Prisma.$WaterConditionPayload, S>

  type WaterConditionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WaterConditionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaterConditionCountAggregateInputType | true
    }

  export interface WaterConditionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WaterCondition'], meta: { name: 'WaterCondition' } }
    /**
     * Find zero or one WaterCondition that matches the filter.
     * @param {WaterConditionFindUniqueArgs} args - Arguments to find a WaterCondition
     * @example
     * // Get one WaterCondition
     * const waterCondition = await prisma.waterCondition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaterConditionFindUniqueArgs>(args: SelectSubset<T, WaterConditionFindUniqueArgs<ExtArgs>>): Prisma__WaterConditionClient<$Result.GetResult<Prisma.$WaterConditionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WaterCondition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WaterConditionFindUniqueOrThrowArgs} args - Arguments to find a WaterCondition
     * @example
     * // Get one WaterCondition
     * const waterCondition = await prisma.waterCondition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaterConditionFindUniqueOrThrowArgs>(args: SelectSubset<T, WaterConditionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaterConditionClient<$Result.GetResult<Prisma.$WaterConditionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaterCondition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterConditionFindFirstArgs} args - Arguments to find a WaterCondition
     * @example
     * // Get one WaterCondition
     * const waterCondition = await prisma.waterCondition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaterConditionFindFirstArgs>(args?: SelectSubset<T, WaterConditionFindFirstArgs<ExtArgs>>): Prisma__WaterConditionClient<$Result.GetResult<Prisma.$WaterConditionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaterCondition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterConditionFindFirstOrThrowArgs} args - Arguments to find a WaterCondition
     * @example
     * // Get one WaterCondition
     * const waterCondition = await prisma.waterCondition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaterConditionFindFirstOrThrowArgs>(args?: SelectSubset<T, WaterConditionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaterConditionClient<$Result.GetResult<Prisma.$WaterConditionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WaterConditions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterConditionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WaterConditions
     * const waterConditions = await prisma.waterCondition.findMany()
     * 
     * // Get first 10 WaterConditions
     * const waterConditions = await prisma.waterCondition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waterConditionWithIdOnly = await prisma.waterCondition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WaterConditionFindManyArgs>(args?: SelectSubset<T, WaterConditionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterConditionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WaterCondition.
     * @param {WaterConditionCreateArgs} args - Arguments to create a WaterCondition.
     * @example
     * // Create one WaterCondition
     * const WaterCondition = await prisma.waterCondition.create({
     *   data: {
     *     // ... data to create a WaterCondition
     *   }
     * })
     * 
     */
    create<T extends WaterConditionCreateArgs>(args: SelectSubset<T, WaterConditionCreateArgs<ExtArgs>>): Prisma__WaterConditionClient<$Result.GetResult<Prisma.$WaterConditionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WaterConditions.
     * @param {WaterConditionCreateManyArgs} args - Arguments to create many WaterConditions.
     * @example
     * // Create many WaterConditions
     * const waterCondition = await prisma.waterCondition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaterConditionCreateManyArgs>(args?: SelectSubset<T, WaterConditionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WaterConditions and returns the data saved in the database.
     * @param {WaterConditionCreateManyAndReturnArgs} args - Arguments to create many WaterConditions.
     * @example
     * // Create many WaterConditions
     * const waterCondition = await prisma.waterCondition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WaterConditions and only return the `id`
     * const waterConditionWithIdOnly = await prisma.waterCondition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WaterConditionCreateManyAndReturnArgs>(args?: SelectSubset<T, WaterConditionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterConditionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WaterCondition.
     * @param {WaterConditionDeleteArgs} args - Arguments to delete one WaterCondition.
     * @example
     * // Delete one WaterCondition
     * const WaterCondition = await prisma.waterCondition.delete({
     *   where: {
     *     // ... filter to delete one WaterCondition
     *   }
     * })
     * 
     */
    delete<T extends WaterConditionDeleteArgs>(args: SelectSubset<T, WaterConditionDeleteArgs<ExtArgs>>): Prisma__WaterConditionClient<$Result.GetResult<Prisma.$WaterConditionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WaterCondition.
     * @param {WaterConditionUpdateArgs} args - Arguments to update one WaterCondition.
     * @example
     * // Update one WaterCondition
     * const waterCondition = await prisma.waterCondition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaterConditionUpdateArgs>(args: SelectSubset<T, WaterConditionUpdateArgs<ExtArgs>>): Prisma__WaterConditionClient<$Result.GetResult<Prisma.$WaterConditionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WaterConditions.
     * @param {WaterConditionDeleteManyArgs} args - Arguments to filter WaterConditions to delete.
     * @example
     * // Delete a few WaterConditions
     * const { count } = await prisma.waterCondition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaterConditionDeleteManyArgs>(args?: SelectSubset<T, WaterConditionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaterConditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterConditionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WaterConditions
     * const waterCondition = await prisma.waterCondition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaterConditionUpdateManyArgs>(args: SelectSubset<T, WaterConditionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaterConditions and returns the data updated in the database.
     * @param {WaterConditionUpdateManyAndReturnArgs} args - Arguments to update many WaterConditions.
     * @example
     * // Update many WaterConditions
     * const waterCondition = await prisma.waterCondition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WaterConditions and only return the `id`
     * const waterConditionWithIdOnly = await prisma.waterCondition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WaterConditionUpdateManyAndReturnArgs>(args: SelectSubset<T, WaterConditionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterConditionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WaterCondition.
     * @param {WaterConditionUpsertArgs} args - Arguments to update or create a WaterCondition.
     * @example
     * // Update or create a WaterCondition
     * const waterCondition = await prisma.waterCondition.upsert({
     *   create: {
     *     // ... data to create a WaterCondition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WaterCondition we want to update
     *   }
     * })
     */
    upsert<T extends WaterConditionUpsertArgs>(args: SelectSubset<T, WaterConditionUpsertArgs<ExtArgs>>): Prisma__WaterConditionClient<$Result.GetResult<Prisma.$WaterConditionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WaterConditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterConditionCountArgs} args - Arguments to filter WaterConditions to count.
     * @example
     * // Count the number of WaterConditions
     * const count = await prisma.waterCondition.count({
     *   where: {
     *     // ... the filter for the WaterConditions we want to count
     *   }
     * })
    **/
    count<T extends WaterConditionCountArgs>(
      args?: Subset<T, WaterConditionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaterConditionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WaterCondition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterConditionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WaterConditionAggregateArgs>(args: Subset<T, WaterConditionAggregateArgs>): Prisma.PrismaPromise<GetWaterConditionAggregateType<T>>

    /**
     * Group by WaterCondition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterConditionGroupByArgs} args - Group by arguments.
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
      T extends WaterConditionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaterConditionGroupByArgs['orderBy'] }
        : { orderBy?: WaterConditionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WaterConditionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaterConditionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WaterCondition model
   */
  readonly fields: WaterConditionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WaterCondition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaterConditionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WaterCondition model
   */
  interface WaterConditionFieldRefs {
    readonly id: FieldRef<"WaterCondition", 'String'>
    readonly waterBody: FieldRef<"WaterCondition", 'String'>
    readonly location: FieldRef<"WaterCondition", 'String'>
    readonly lastUpdated: FieldRef<"WaterCondition", 'DateTime'>
    readonly waterLevel: FieldRef<"WaterCondition", 'String'>
    readonly waterTemperature: FieldRef<"WaterCondition", 'Float'>
    readonly clarity: FieldRef<"WaterCondition", 'String'>
    readonly flow: FieldRef<"WaterCondition", 'String'>
    readonly fishingConditions: FieldRef<"WaterCondition", 'String'>
    readonly notes: FieldRef<"WaterCondition", 'String'>
    readonly weatherImpact: FieldRef<"WaterCondition", 'String'>
    readonly source: FieldRef<"WaterCondition", 'String'>
    readonly createdAt: FieldRef<"WaterCondition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WaterCondition findUnique
   */
  export type WaterConditionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterCondition
     */
    select?: WaterConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterCondition
     */
    omit?: WaterConditionOmit<ExtArgs> | null
    /**
     * Filter, which WaterCondition to fetch.
     */
    where: WaterConditionWhereUniqueInput
  }

  /**
   * WaterCondition findUniqueOrThrow
   */
  export type WaterConditionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterCondition
     */
    select?: WaterConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterCondition
     */
    omit?: WaterConditionOmit<ExtArgs> | null
    /**
     * Filter, which WaterCondition to fetch.
     */
    where: WaterConditionWhereUniqueInput
  }

  /**
   * WaterCondition findFirst
   */
  export type WaterConditionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterCondition
     */
    select?: WaterConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterCondition
     */
    omit?: WaterConditionOmit<ExtArgs> | null
    /**
     * Filter, which WaterCondition to fetch.
     */
    where?: WaterConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterConditions to fetch.
     */
    orderBy?: WaterConditionOrderByWithRelationInput | WaterConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaterConditions.
     */
    cursor?: WaterConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaterConditions.
     */
    distinct?: WaterConditionScalarFieldEnum | WaterConditionScalarFieldEnum[]
  }

  /**
   * WaterCondition findFirstOrThrow
   */
  export type WaterConditionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterCondition
     */
    select?: WaterConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterCondition
     */
    omit?: WaterConditionOmit<ExtArgs> | null
    /**
     * Filter, which WaterCondition to fetch.
     */
    where?: WaterConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterConditions to fetch.
     */
    orderBy?: WaterConditionOrderByWithRelationInput | WaterConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaterConditions.
     */
    cursor?: WaterConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaterConditions.
     */
    distinct?: WaterConditionScalarFieldEnum | WaterConditionScalarFieldEnum[]
  }

  /**
   * WaterCondition findMany
   */
  export type WaterConditionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterCondition
     */
    select?: WaterConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterCondition
     */
    omit?: WaterConditionOmit<ExtArgs> | null
    /**
     * Filter, which WaterConditions to fetch.
     */
    where?: WaterConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterConditions to fetch.
     */
    orderBy?: WaterConditionOrderByWithRelationInput | WaterConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WaterConditions.
     */
    cursor?: WaterConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterConditions.
     */
    skip?: number
    distinct?: WaterConditionScalarFieldEnum | WaterConditionScalarFieldEnum[]
  }

  /**
   * WaterCondition create
   */
  export type WaterConditionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterCondition
     */
    select?: WaterConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterCondition
     */
    omit?: WaterConditionOmit<ExtArgs> | null
    /**
     * The data needed to create a WaterCondition.
     */
    data: XOR<WaterConditionCreateInput, WaterConditionUncheckedCreateInput>
  }

  /**
   * WaterCondition createMany
   */
  export type WaterConditionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WaterConditions.
     */
    data: WaterConditionCreateManyInput | WaterConditionCreateManyInput[]
  }

  /**
   * WaterCondition createManyAndReturn
   */
  export type WaterConditionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterCondition
     */
    select?: WaterConditionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaterCondition
     */
    omit?: WaterConditionOmit<ExtArgs> | null
    /**
     * The data used to create many WaterConditions.
     */
    data: WaterConditionCreateManyInput | WaterConditionCreateManyInput[]
  }

  /**
   * WaterCondition update
   */
  export type WaterConditionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterCondition
     */
    select?: WaterConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterCondition
     */
    omit?: WaterConditionOmit<ExtArgs> | null
    /**
     * The data needed to update a WaterCondition.
     */
    data: XOR<WaterConditionUpdateInput, WaterConditionUncheckedUpdateInput>
    /**
     * Choose, which WaterCondition to update.
     */
    where: WaterConditionWhereUniqueInput
  }

  /**
   * WaterCondition updateMany
   */
  export type WaterConditionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WaterConditions.
     */
    data: XOR<WaterConditionUpdateManyMutationInput, WaterConditionUncheckedUpdateManyInput>
    /**
     * Filter which WaterConditions to update
     */
    where?: WaterConditionWhereInput
    /**
     * Limit how many WaterConditions to update.
     */
    limit?: number
  }

  /**
   * WaterCondition updateManyAndReturn
   */
  export type WaterConditionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterCondition
     */
    select?: WaterConditionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaterCondition
     */
    omit?: WaterConditionOmit<ExtArgs> | null
    /**
     * The data used to update WaterConditions.
     */
    data: XOR<WaterConditionUpdateManyMutationInput, WaterConditionUncheckedUpdateManyInput>
    /**
     * Filter which WaterConditions to update
     */
    where?: WaterConditionWhereInput
    /**
     * Limit how many WaterConditions to update.
     */
    limit?: number
  }

  /**
   * WaterCondition upsert
   */
  export type WaterConditionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterCondition
     */
    select?: WaterConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterCondition
     */
    omit?: WaterConditionOmit<ExtArgs> | null
    /**
     * The filter to search for the WaterCondition to update in case it exists.
     */
    where: WaterConditionWhereUniqueInput
    /**
     * In case the WaterCondition found by the `where` argument doesn't exist, create a new WaterCondition with this data.
     */
    create: XOR<WaterConditionCreateInput, WaterConditionUncheckedCreateInput>
    /**
     * In case the WaterCondition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaterConditionUpdateInput, WaterConditionUncheckedUpdateInput>
  }

  /**
   * WaterCondition delete
   */
  export type WaterConditionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterCondition
     */
    select?: WaterConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterCondition
     */
    omit?: WaterConditionOmit<ExtArgs> | null
    /**
     * Filter which WaterCondition to delete.
     */
    where: WaterConditionWhereUniqueInput
  }

  /**
   * WaterCondition deleteMany
   */
  export type WaterConditionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaterConditions to delete
     */
    where?: WaterConditionWhereInput
    /**
     * Limit how many WaterConditions to delete.
     */
    limit?: number
  }

  /**
   * WaterCondition without action
   */
  export type WaterConditionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterCondition
     */
    select?: WaterConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterCondition
     */
    omit?: WaterConditionOmit<ExtArgs> | null
  }


  /**
   * Model OutdoorEvent
   */

  export type AggregateOutdoorEvent = {
    _count: OutdoorEventCountAggregateOutputType | null
    _avg: OutdoorEventAvgAggregateOutputType | null
    _sum: OutdoorEventSumAggregateOutputType | null
    _min: OutdoorEventMinAggregateOutputType | null
    _max: OutdoorEventMaxAggregateOutputType | null
  }

  export type OutdoorEventAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    cost: number | null
    capacity: number | null
  }

  export type OutdoorEventSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    cost: number | null
    capacity: number | null
  }

  export type OutdoorEventMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    eventType: string | null
    location: string | null
    latitude: number | null
    longitude: number | null
    startDate: Date | null
    endDate: Date | null
    cost: number | null
    registrationRequired: boolean | null
    registrationUrl: string | null
    contactInfo: string | null
    ageRestrictions: string | null
    capacity: number | null
    difficulty: string | null
    source: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OutdoorEventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    eventType: string | null
    location: string | null
    latitude: number | null
    longitude: number | null
    startDate: Date | null
    endDate: Date | null
    cost: number | null
    registrationRequired: boolean | null
    registrationUrl: string | null
    contactInfo: string | null
    ageRestrictions: string | null
    capacity: number | null
    difficulty: string | null
    source: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OutdoorEventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    eventType: number
    location: number
    latitude: number
    longitude: number
    startDate: number
    endDate: number
    cost: number
    registrationRequired: number
    registrationUrl: number
    contactInfo: number
    ageRestrictions: number
    capacity: number
    difficulty: number
    source: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OutdoorEventAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    cost?: true
    capacity?: true
  }

  export type OutdoorEventSumAggregateInputType = {
    latitude?: true
    longitude?: true
    cost?: true
    capacity?: true
  }

  export type OutdoorEventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    eventType?: true
    location?: true
    latitude?: true
    longitude?: true
    startDate?: true
    endDate?: true
    cost?: true
    registrationRequired?: true
    registrationUrl?: true
    contactInfo?: true
    ageRestrictions?: true
    capacity?: true
    difficulty?: true
    source?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OutdoorEventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    eventType?: true
    location?: true
    latitude?: true
    longitude?: true
    startDate?: true
    endDate?: true
    cost?: true
    registrationRequired?: true
    registrationUrl?: true
    contactInfo?: true
    ageRestrictions?: true
    capacity?: true
    difficulty?: true
    source?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OutdoorEventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    eventType?: true
    location?: true
    latitude?: true
    longitude?: true
    startDate?: true
    endDate?: true
    cost?: true
    registrationRequired?: true
    registrationUrl?: true
    contactInfo?: true
    ageRestrictions?: true
    capacity?: true
    difficulty?: true
    source?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OutdoorEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutdoorEvent to aggregate.
     */
    where?: OutdoorEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutdoorEvents to fetch.
     */
    orderBy?: OutdoorEventOrderByWithRelationInput | OutdoorEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutdoorEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutdoorEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutdoorEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutdoorEvents
    **/
    _count?: true | OutdoorEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutdoorEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutdoorEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutdoorEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutdoorEventMaxAggregateInputType
  }

  export type GetOutdoorEventAggregateType<T extends OutdoorEventAggregateArgs> = {
        [P in keyof T & keyof AggregateOutdoorEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutdoorEvent[P]>
      : GetScalarType<T[P], AggregateOutdoorEvent[P]>
  }




  export type OutdoorEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutdoorEventWhereInput
    orderBy?: OutdoorEventOrderByWithAggregationInput | OutdoorEventOrderByWithAggregationInput[]
    by: OutdoorEventScalarFieldEnum[] | OutdoorEventScalarFieldEnum
    having?: OutdoorEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutdoorEventCountAggregateInputType | true
    _avg?: OutdoorEventAvgAggregateInputType
    _sum?: OutdoorEventSumAggregateInputType
    _min?: OutdoorEventMinAggregateInputType
    _max?: OutdoorEventMaxAggregateInputType
  }

  export type OutdoorEventGroupByOutputType = {
    id: string
    title: string
    description: string | null
    eventType: string
    location: string
    latitude: number | null
    longitude: number | null
    startDate: Date
    endDate: Date | null
    cost: number | null
    registrationRequired: boolean
    registrationUrl: string | null
    contactInfo: string | null
    ageRestrictions: string | null
    capacity: number | null
    difficulty: string | null
    source: string
    createdAt: Date
    updatedAt: Date
    _count: OutdoorEventCountAggregateOutputType | null
    _avg: OutdoorEventAvgAggregateOutputType | null
    _sum: OutdoorEventSumAggregateOutputType | null
    _min: OutdoorEventMinAggregateOutputType | null
    _max: OutdoorEventMaxAggregateOutputType | null
  }

  type GetOutdoorEventGroupByPayload<T extends OutdoorEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutdoorEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutdoorEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutdoorEventGroupByOutputType[P]>
            : GetScalarType<T[P], OutdoorEventGroupByOutputType[P]>
        }
      >
    >


  export type OutdoorEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    eventType?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    startDate?: boolean
    endDate?: boolean
    cost?: boolean
    registrationRequired?: boolean
    registrationUrl?: boolean
    contactInfo?: boolean
    ageRestrictions?: boolean
    capacity?: boolean
    difficulty?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    favorites?: boolean | OutdoorEvent$favoritesArgs<ExtArgs>
    tripPlanItems?: boolean | OutdoorEvent$tripPlanItemsArgs<ExtArgs>
    _count?: boolean | OutdoorEventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outdoorEvent"]>

  export type OutdoorEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    eventType?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    startDate?: boolean
    endDate?: boolean
    cost?: boolean
    registrationRequired?: boolean
    registrationUrl?: boolean
    contactInfo?: boolean
    ageRestrictions?: boolean
    capacity?: boolean
    difficulty?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["outdoorEvent"]>

  export type OutdoorEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    eventType?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    startDate?: boolean
    endDate?: boolean
    cost?: boolean
    registrationRequired?: boolean
    registrationUrl?: boolean
    contactInfo?: boolean
    ageRestrictions?: boolean
    capacity?: boolean
    difficulty?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["outdoorEvent"]>

  export type OutdoorEventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    eventType?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    startDate?: boolean
    endDate?: boolean
    cost?: boolean
    registrationRequired?: boolean
    registrationUrl?: boolean
    contactInfo?: boolean
    ageRestrictions?: boolean
    capacity?: boolean
    difficulty?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OutdoorEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "eventType" | "location" | "latitude" | "longitude" | "startDate" | "endDate" | "cost" | "registrationRequired" | "registrationUrl" | "contactInfo" | "ageRestrictions" | "capacity" | "difficulty" | "source" | "createdAt" | "updatedAt", ExtArgs["result"]["outdoorEvent"]>
  export type OutdoorEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorites?: boolean | OutdoorEvent$favoritesArgs<ExtArgs>
    tripPlanItems?: boolean | OutdoorEvent$tripPlanItemsArgs<ExtArgs>
    _count?: boolean | OutdoorEventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OutdoorEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OutdoorEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OutdoorEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutdoorEvent"
    objects: {
      favorites: Prisma.$UserFavoritePayload<ExtArgs>[]
      tripPlanItems: Prisma.$TripPlanItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      eventType: string
      location: string
      latitude: number | null
      longitude: number | null
      startDate: Date
      endDate: Date | null
      cost: number | null
      registrationRequired: boolean
      registrationUrl: string | null
      contactInfo: string | null
      ageRestrictions: string | null
      capacity: number | null
      difficulty: string | null
      source: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["outdoorEvent"]>
    composites: {}
  }

  type OutdoorEventGetPayload<S extends boolean | null | undefined | OutdoorEventDefaultArgs> = $Result.GetResult<Prisma.$OutdoorEventPayload, S>

  type OutdoorEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutdoorEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutdoorEventCountAggregateInputType | true
    }

  export interface OutdoorEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutdoorEvent'], meta: { name: 'OutdoorEvent' } }
    /**
     * Find zero or one OutdoorEvent that matches the filter.
     * @param {OutdoorEventFindUniqueArgs} args - Arguments to find a OutdoorEvent
     * @example
     * // Get one OutdoorEvent
     * const outdoorEvent = await prisma.outdoorEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutdoorEventFindUniqueArgs>(args: SelectSubset<T, OutdoorEventFindUniqueArgs<ExtArgs>>): Prisma__OutdoorEventClient<$Result.GetResult<Prisma.$OutdoorEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OutdoorEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutdoorEventFindUniqueOrThrowArgs} args - Arguments to find a OutdoorEvent
     * @example
     * // Get one OutdoorEvent
     * const outdoorEvent = await prisma.outdoorEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutdoorEventFindUniqueOrThrowArgs>(args: SelectSubset<T, OutdoorEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutdoorEventClient<$Result.GetResult<Prisma.$OutdoorEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutdoorEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutdoorEventFindFirstArgs} args - Arguments to find a OutdoorEvent
     * @example
     * // Get one OutdoorEvent
     * const outdoorEvent = await prisma.outdoorEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutdoorEventFindFirstArgs>(args?: SelectSubset<T, OutdoorEventFindFirstArgs<ExtArgs>>): Prisma__OutdoorEventClient<$Result.GetResult<Prisma.$OutdoorEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutdoorEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutdoorEventFindFirstOrThrowArgs} args - Arguments to find a OutdoorEvent
     * @example
     * // Get one OutdoorEvent
     * const outdoorEvent = await prisma.outdoorEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutdoorEventFindFirstOrThrowArgs>(args?: SelectSubset<T, OutdoorEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutdoorEventClient<$Result.GetResult<Prisma.$OutdoorEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OutdoorEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutdoorEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutdoorEvents
     * const outdoorEvents = await prisma.outdoorEvent.findMany()
     * 
     * // Get first 10 OutdoorEvents
     * const outdoorEvents = await prisma.outdoorEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outdoorEventWithIdOnly = await prisma.outdoorEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutdoorEventFindManyArgs>(args?: SelectSubset<T, OutdoorEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutdoorEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OutdoorEvent.
     * @param {OutdoorEventCreateArgs} args - Arguments to create a OutdoorEvent.
     * @example
     * // Create one OutdoorEvent
     * const OutdoorEvent = await prisma.outdoorEvent.create({
     *   data: {
     *     // ... data to create a OutdoorEvent
     *   }
     * })
     * 
     */
    create<T extends OutdoorEventCreateArgs>(args: SelectSubset<T, OutdoorEventCreateArgs<ExtArgs>>): Prisma__OutdoorEventClient<$Result.GetResult<Prisma.$OutdoorEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OutdoorEvents.
     * @param {OutdoorEventCreateManyArgs} args - Arguments to create many OutdoorEvents.
     * @example
     * // Create many OutdoorEvents
     * const outdoorEvent = await prisma.outdoorEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutdoorEventCreateManyArgs>(args?: SelectSubset<T, OutdoorEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OutdoorEvents and returns the data saved in the database.
     * @param {OutdoorEventCreateManyAndReturnArgs} args - Arguments to create many OutdoorEvents.
     * @example
     * // Create many OutdoorEvents
     * const outdoorEvent = await prisma.outdoorEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OutdoorEvents and only return the `id`
     * const outdoorEventWithIdOnly = await prisma.outdoorEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutdoorEventCreateManyAndReturnArgs>(args?: SelectSubset<T, OutdoorEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutdoorEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OutdoorEvent.
     * @param {OutdoorEventDeleteArgs} args - Arguments to delete one OutdoorEvent.
     * @example
     * // Delete one OutdoorEvent
     * const OutdoorEvent = await prisma.outdoorEvent.delete({
     *   where: {
     *     // ... filter to delete one OutdoorEvent
     *   }
     * })
     * 
     */
    delete<T extends OutdoorEventDeleteArgs>(args: SelectSubset<T, OutdoorEventDeleteArgs<ExtArgs>>): Prisma__OutdoorEventClient<$Result.GetResult<Prisma.$OutdoorEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OutdoorEvent.
     * @param {OutdoorEventUpdateArgs} args - Arguments to update one OutdoorEvent.
     * @example
     * // Update one OutdoorEvent
     * const outdoorEvent = await prisma.outdoorEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutdoorEventUpdateArgs>(args: SelectSubset<T, OutdoorEventUpdateArgs<ExtArgs>>): Prisma__OutdoorEventClient<$Result.GetResult<Prisma.$OutdoorEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OutdoorEvents.
     * @param {OutdoorEventDeleteManyArgs} args - Arguments to filter OutdoorEvents to delete.
     * @example
     * // Delete a few OutdoorEvents
     * const { count } = await prisma.outdoorEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutdoorEventDeleteManyArgs>(args?: SelectSubset<T, OutdoorEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutdoorEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutdoorEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutdoorEvents
     * const outdoorEvent = await prisma.outdoorEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutdoorEventUpdateManyArgs>(args: SelectSubset<T, OutdoorEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutdoorEvents and returns the data updated in the database.
     * @param {OutdoorEventUpdateManyAndReturnArgs} args - Arguments to update many OutdoorEvents.
     * @example
     * // Update many OutdoorEvents
     * const outdoorEvent = await prisma.outdoorEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OutdoorEvents and only return the `id`
     * const outdoorEventWithIdOnly = await prisma.outdoorEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OutdoorEventUpdateManyAndReturnArgs>(args: SelectSubset<T, OutdoorEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutdoorEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OutdoorEvent.
     * @param {OutdoorEventUpsertArgs} args - Arguments to update or create a OutdoorEvent.
     * @example
     * // Update or create a OutdoorEvent
     * const outdoorEvent = await prisma.outdoorEvent.upsert({
     *   create: {
     *     // ... data to create a OutdoorEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutdoorEvent we want to update
     *   }
     * })
     */
    upsert<T extends OutdoorEventUpsertArgs>(args: SelectSubset<T, OutdoorEventUpsertArgs<ExtArgs>>): Prisma__OutdoorEventClient<$Result.GetResult<Prisma.$OutdoorEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OutdoorEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutdoorEventCountArgs} args - Arguments to filter OutdoorEvents to count.
     * @example
     * // Count the number of OutdoorEvents
     * const count = await prisma.outdoorEvent.count({
     *   where: {
     *     // ... the filter for the OutdoorEvents we want to count
     *   }
     * })
    **/
    count<T extends OutdoorEventCountArgs>(
      args?: Subset<T, OutdoorEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutdoorEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutdoorEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutdoorEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutdoorEventAggregateArgs>(args: Subset<T, OutdoorEventAggregateArgs>): Prisma.PrismaPromise<GetOutdoorEventAggregateType<T>>

    /**
     * Group by OutdoorEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutdoorEventGroupByArgs} args - Group by arguments.
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
      T extends OutdoorEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutdoorEventGroupByArgs['orderBy'] }
        : { orderBy?: OutdoorEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OutdoorEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutdoorEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutdoorEvent model
   */
  readonly fields: OutdoorEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutdoorEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutdoorEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    favorites<T extends OutdoorEvent$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, OutdoorEvent$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tripPlanItems<T extends OutdoorEvent$tripPlanItemsArgs<ExtArgs> = {}>(args?: Subset<T, OutdoorEvent$tripPlanItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OutdoorEvent model
   */
  interface OutdoorEventFieldRefs {
    readonly id: FieldRef<"OutdoorEvent", 'String'>
    readonly title: FieldRef<"OutdoorEvent", 'String'>
    readonly description: FieldRef<"OutdoorEvent", 'String'>
    readonly eventType: FieldRef<"OutdoorEvent", 'String'>
    readonly location: FieldRef<"OutdoorEvent", 'String'>
    readonly latitude: FieldRef<"OutdoorEvent", 'Float'>
    readonly longitude: FieldRef<"OutdoorEvent", 'Float'>
    readonly startDate: FieldRef<"OutdoorEvent", 'DateTime'>
    readonly endDate: FieldRef<"OutdoorEvent", 'DateTime'>
    readonly cost: FieldRef<"OutdoorEvent", 'Float'>
    readonly registrationRequired: FieldRef<"OutdoorEvent", 'Boolean'>
    readonly registrationUrl: FieldRef<"OutdoorEvent", 'String'>
    readonly contactInfo: FieldRef<"OutdoorEvent", 'String'>
    readonly ageRestrictions: FieldRef<"OutdoorEvent", 'String'>
    readonly capacity: FieldRef<"OutdoorEvent", 'Int'>
    readonly difficulty: FieldRef<"OutdoorEvent", 'String'>
    readonly source: FieldRef<"OutdoorEvent", 'String'>
    readonly createdAt: FieldRef<"OutdoorEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"OutdoorEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OutdoorEvent findUnique
   */
  export type OutdoorEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutdoorEvent
     */
    select?: OutdoorEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutdoorEvent
     */
    omit?: OutdoorEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutdoorEventInclude<ExtArgs> | null
    /**
     * Filter, which OutdoorEvent to fetch.
     */
    where: OutdoorEventWhereUniqueInput
  }

  /**
   * OutdoorEvent findUniqueOrThrow
   */
  export type OutdoorEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutdoorEvent
     */
    select?: OutdoorEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutdoorEvent
     */
    omit?: OutdoorEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutdoorEventInclude<ExtArgs> | null
    /**
     * Filter, which OutdoorEvent to fetch.
     */
    where: OutdoorEventWhereUniqueInput
  }

  /**
   * OutdoorEvent findFirst
   */
  export type OutdoorEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutdoorEvent
     */
    select?: OutdoorEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutdoorEvent
     */
    omit?: OutdoorEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutdoorEventInclude<ExtArgs> | null
    /**
     * Filter, which OutdoorEvent to fetch.
     */
    where?: OutdoorEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutdoorEvents to fetch.
     */
    orderBy?: OutdoorEventOrderByWithRelationInput | OutdoorEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutdoorEvents.
     */
    cursor?: OutdoorEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutdoorEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutdoorEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutdoorEvents.
     */
    distinct?: OutdoorEventScalarFieldEnum | OutdoorEventScalarFieldEnum[]
  }

  /**
   * OutdoorEvent findFirstOrThrow
   */
  export type OutdoorEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutdoorEvent
     */
    select?: OutdoorEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutdoorEvent
     */
    omit?: OutdoorEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutdoorEventInclude<ExtArgs> | null
    /**
     * Filter, which OutdoorEvent to fetch.
     */
    where?: OutdoorEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutdoorEvents to fetch.
     */
    orderBy?: OutdoorEventOrderByWithRelationInput | OutdoorEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutdoorEvents.
     */
    cursor?: OutdoorEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutdoorEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutdoorEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutdoorEvents.
     */
    distinct?: OutdoorEventScalarFieldEnum | OutdoorEventScalarFieldEnum[]
  }

  /**
   * OutdoorEvent findMany
   */
  export type OutdoorEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutdoorEvent
     */
    select?: OutdoorEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutdoorEvent
     */
    omit?: OutdoorEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutdoorEventInclude<ExtArgs> | null
    /**
     * Filter, which OutdoorEvents to fetch.
     */
    where?: OutdoorEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutdoorEvents to fetch.
     */
    orderBy?: OutdoorEventOrderByWithRelationInput | OutdoorEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutdoorEvents.
     */
    cursor?: OutdoorEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutdoorEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutdoorEvents.
     */
    skip?: number
    distinct?: OutdoorEventScalarFieldEnum | OutdoorEventScalarFieldEnum[]
  }

  /**
   * OutdoorEvent create
   */
  export type OutdoorEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutdoorEvent
     */
    select?: OutdoorEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutdoorEvent
     */
    omit?: OutdoorEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutdoorEventInclude<ExtArgs> | null
    /**
     * The data needed to create a OutdoorEvent.
     */
    data: XOR<OutdoorEventCreateInput, OutdoorEventUncheckedCreateInput>
  }

  /**
   * OutdoorEvent createMany
   */
  export type OutdoorEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutdoorEvents.
     */
    data: OutdoorEventCreateManyInput | OutdoorEventCreateManyInput[]
  }

  /**
   * OutdoorEvent createManyAndReturn
   */
  export type OutdoorEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutdoorEvent
     */
    select?: OutdoorEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutdoorEvent
     */
    omit?: OutdoorEventOmit<ExtArgs> | null
    /**
     * The data used to create many OutdoorEvents.
     */
    data: OutdoorEventCreateManyInput | OutdoorEventCreateManyInput[]
  }

  /**
   * OutdoorEvent update
   */
  export type OutdoorEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutdoorEvent
     */
    select?: OutdoorEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutdoorEvent
     */
    omit?: OutdoorEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutdoorEventInclude<ExtArgs> | null
    /**
     * The data needed to update a OutdoorEvent.
     */
    data: XOR<OutdoorEventUpdateInput, OutdoorEventUncheckedUpdateInput>
    /**
     * Choose, which OutdoorEvent to update.
     */
    where: OutdoorEventWhereUniqueInput
  }

  /**
   * OutdoorEvent updateMany
   */
  export type OutdoorEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutdoorEvents.
     */
    data: XOR<OutdoorEventUpdateManyMutationInput, OutdoorEventUncheckedUpdateManyInput>
    /**
     * Filter which OutdoorEvents to update
     */
    where?: OutdoorEventWhereInput
    /**
     * Limit how many OutdoorEvents to update.
     */
    limit?: number
  }

  /**
   * OutdoorEvent updateManyAndReturn
   */
  export type OutdoorEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutdoorEvent
     */
    select?: OutdoorEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutdoorEvent
     */
    omit?: OutdoorEventOmit<ExtArgs> | null
    /**
     * The data used to update OutdoorEvents.
     */
    data: XOR<OutdoorEventUpdateManyMutationInput, OutdoorEventUncheckedUpdateManyInput>
    /**
     * Filter which OutdoorEvents to update
     */
    where?: OutdoorEventWhereInput
    /**
     * Limit how many OutdoorEvents to update.
     */
    limit?: number
  }

  /**
   * OutdoorEvent upsert
   */
  export type OutdoorEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutdoorEvent
     */
    select?: OutdoorEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutdoorEvent
     */
    omit?: OutdoorEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutdoorEventInclude<ExtArgs> | null
    /**
     * The filter to search for the OutdoorEvent to update in case it exists.
     */
    where: OutdoorEventWhereUniqueInput
    /**
     * In case the OutdoorEvent found by the `where` argument doesn't exist, create a new OutdoorEvent with this data.
     */
    create: XOR<OutdoorEventCreateInput, OutdoorEventUncheckedCreateInput>
    /**
     * In case the OutdoorEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutdoorEventUpdateInput, OutdoorEventUncheckedUpdateInput>
  }

  /**
   * OutdoorEvent delete
   */
  export type OutdoorEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutdoorEvent
     */
    select?: OutdoorEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutdoorEvent
     */
    omit?: OutdoorEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutdoorEventInclude<ExtArgs> | null
    /**
     * Filter which OutdoorEvent to delete.
     */
    where: OutdoorEventWhereUniqueInput
  }

  /**
   * OutdoorEvent deleteMany
   */
  export type OutdoorEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutdoorEvents to delete
     */
    where?: OutdoorEventWhereInput
    /**
     * Limit how many OutdoorEvents to delete.
     */
    limit?: number
  }

  /**
   * OutdoorEvent.favorites
   */
  export type OutdoorEvent$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    where?: UserFavoriteWhereInput
    orderBy?: UserFavoriteOrderByWithRelationInput | UserFavoriteOrderByWithRelationInput[]
    cursor?: UserFavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFavoriteScalarFieldEnum | UserFavoriteScalarFieldEnum[]
  }

  /**
   * OutdoorEvent.tripPlanItems
   */
  export type OutdoorEvent$tripPlanItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanItem
     */
    select?: TripPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanItem
     */
    omit?: TripPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanItemInclude<ExtArgs> | null
    where?: TripPlanItemWhereInput
    orderBy?: TripPlanItemOrderByWithRelationInput | TripPlanItemOrderByWithRelationInput[]
    cursor?: TripPlanItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripPlanItemScalarFieldEnum | TripPlanItemScalarFieldEnum[]
  }

  /**
   * OutdoorEvent without action
   */
  export type OutdoorEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutdoorEvent
     */
    select?: OutdoorEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutdoorEvent
     */
    omit?: OutdoorEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutdoorEventInclude<ExtArgs> | null
  }


  /**
   * Model HuntingInfo
   */

  export type AggregateHuntingInfo = {
    _count: HuntingInfoCountAggregateOutputType | null
    _avg: HuntingInfoAvgAggregateOutputType | null
    _sum: HuntingInfoSumAggregateOutputType | null
    _min: HuntingInfoMinAggregateOutputType | null
    _max: HuntingInfoMaxAggregateOutputType | null
  }

  export type HuntingInfoAvgAggregateOutputType = {
    dailyBagLimit: number | null
    possessionLimit: number | null
    seasonLimit: number | null
  }

  export type HuntingInfoSumAggregateOutputType = {
    dailyBagLimit: number | null
    possessionLimit: number | null
    seasonLimit: number | null
  }

  export type HuntingInfoMinAggregateOutputType = {
    id: string | null
    species: string | null
    seasonStartDate: Date | null
    seasonEndDate: Date | null
    seasonDescription: string | null
    units: string | null
    licenseRequired: string | null
    dailyBagLimit: number | null
    possessionLimit: number | null
    seasonLimit: number | null
    weaponRestrictions: string | null
    specialRules: string | null
    applicationDeadline: Date | null
    drawResults: Date | null
    tags: string | null
    source: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HuntingInfoMaxAggregateOutputType = {
    id: string | null
    species: string | null
    seasonStartDate: Date | null
    seasonEndDate: Date | null
    seasonDescription: string | null
    units: string | null
    licenseRequired: string | null
    dailyBagLimit: number | null
    possessionLimit: number | null
    seasonLimit: number | null
    weaponRestrictions: string | null
    specialRules: string | null
    applicationDeadline: Date | null
    drawResults: Date | null
    tags: string | null
    source: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HuntingInfoCountAggregateOutputType = {
    id: number
    species: number
    seasonStartDate: number
    seasonEndDate: number
    seasonDescription: number
    units: number
    licenseRequired: number
    dailyBagLimit: number
    possessionLimit: number
    seasonLimit: number
    weaponRestrictions: number
    specialRules: number
    applicationDeadline: number
    drawResults: number
    tags: number
    source: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HuntingInfoAvgAggregateInputType = {
    dailyBagLimit?: true
    possessionLimit?: true
    seasonLimit?: true
  }

  export type HuntingInfoSumAggregateInputType = {
    dailyBagLimit?: true
    possessionLimit?: true
    seasonLimit?: true
  }

  export type HuntingInfoMinAggregateInputType = {
    id?: true
    species?: true
    seasonStartDate?: true
    seasonEndDate?: true
    seasonDescription?: true
    units?: true
    licenseRequired?: true
    dailyBagLimit?: true
    possessionLimit?: true
    seasonLimit?: true
    weaponRestrictions?: true
    specialRules?: true
    applicationDeadline?: true
    drawResults?: true
    tags?: true
    source?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HuntingInfoMaxAggregateInputType = {
    id?: true
    species?: true
    seasonStartDate?: true
    seasonEndDate?: true
    seasonDescription?: true
    units?: true
    licenseRequired?: true
    dailyBagLimit?: true
    possessionLimit?: true
    seasonLimit?: true
    weaponRestrictions?: true
    specialRules?: true
    applicationDeadline?: true
    drawResults?: true
    tags?: true
    source?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HuntingInfoCountAggregateInputType = {
    id?: true
    species?: true
    seasonStartDate?: true
    seasonEndDate?: true
    seasonDescription?: true
    units?: true
    licenseRequired?: true
    dailyBagLimit?: true
    possessionLimit?: true
    seasonLimit?: true
    weaponRestrictions?: true
    specialRules?: true
    applicationDeadline?: true
    drawResults?: true
    tags?: true
    source?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HuntingInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HuntingInfo to aggregate.
     */
    where?: HuntingInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HuntingInfos to fetch.
     */
    orderBy?: HuntingInfoOrderByWithRelationInput | HuntingInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HuntingInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HuntingInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HuntingInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HuntingInfos
    **/
    _count?: true | HuntingInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HuntingInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HuntingInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HuntingInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HuntingInfoMaxAggregateInputType
  }

  export type GetHuntingInfoAggregateType<T extends HuntingInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateHuntingInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHuntingInfo[P]>
      : GetScalarType<T[P], AggregateHuntingInfo[P]>
  }




  export type HuntingInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HuntingInfoWhereInput
    orderBy?: HuntingInfoOrderByWithAggregationInput | HuntingInfoOrderByWithAggregationInput[]
    by: HuntingInfoScalarFieldEnum[] | HuntingInfoScalarFieldEnum
    having?: HuntingInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HuntingInfoCountAggregateInputType | true
    _avg?: HuntingInfoAvgAggregateInputType
    _sum?: HuntingInfoSumAggregateInputType
    _min?: HuntingInfoMinAggregateInputType
    _max?: HuntingInfoMaxAggregateInputType
  }

  export type HuntingInfoGroupByOutputType = {
    id: string
    species: string
    seasonStartDate: Date
    seasonEndDate: Date
    seasonDescription: string | null
    units: string
    licenseRequired: string
    dailyBagLimit: number | null
    possessionLimit: number | null
    seasonLimit: number | null
    weaponRestrictions: string
    specialRules: string
    applicationDeadline: Date | null
    drawResults: Date | null
    tags: string
    source: string
    createdAt: Date
    updatedAt: Date
    _count: HuntingInfoCountAggregateOutputType | null
    _avg: HuntingInfoAvgAggregateOutputType | null
    _sum: HuntingInfoSumAggregateOutputType | null
    _min: HuntingInfoMinAggregateOutputType | null
    _max: HuntingInfoMaxAggregateOutputType | null
  }

  type GetHuntingInfoGroupByPayload<T extends HuntingInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HuntingInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HuntingInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HuntingInfoGroupByOutputType[P]>
            : GetScalarType<T[P], HuntingInfoGroupByOutputType[P]>
        }
      >
    >


  export type HuntingInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    species?: boolean
    seasonStartDate?: boolean
    seasonEndDate?: boolean
    seasonDescription?: boolean
    units?: boolean
    licenseRequired?: boolean
    dailyBagLimit?: boolean
    possessionLimit?: boolean
    seasonLimit?: boolean
    weaponRestrictions?: boolean
    specialRules?: boolean
    applicationDeadline?: boolean
    drawResults?: boolean
    tags?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["huntingInfo"]>

  export type HuntingInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    species?: boolean
    seasonStartDate?: boolean
    seasonEndDate?: boolean
    seasonDescription?: boolean
    units?: boolean
    licenseRequired?: boolean
    dailyBagLimit?: boolean
    possessionLimit?: boolean
    seasonLimit?: boolean
    weaponRestrictions?: boolean
    specialRules?: boolean
    applicationDeadline?: boolean
    drawResults?: boolean
    tags?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["huntingInfo"]>

  export type HuntingInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    species?: boolean
    seasonStartDate?: boolean
    seasonEndDate?: boolean
    seasonDescription?: boolean
    units?: boolean
    licenseRequired?: boolean
    dailyBagLimit?: boolean
    possessionLimit?: boolean
    seasonLimit?: boolean
    weaponRestrictions?: boolean
    specialRules?: boolean
    applicationDeadline?: boolean
    drawResults?: boolean
    tags?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["huntingInfo"]>

  export type HuntingInfoSelectScalar = {
    id?: boolean
    species?: boolean
    seasonStartDate?: boolean
    seasonEndDate?: boolean
    seasonDescription?: boolean
    units?: boolean
    licenseRequired?: boolean
    dailyBagLimit?: boolean
    possessionLimit?: boolean
    seasonLimit?: boolean
    weaponRestrictions?: boolean
    specialRules?: boolean
    applicationDeadline?: boolean
    drawResults?: boolean
    tags?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HuntingInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "species" | "seasonStartDate" | "seasonEndDate" | "seasonDescription" | "units" | "licenseRequired" | "dailyBagLimit" | "possessionLimit" | "seasonLimit" | "weaponRestrictions" | "specialRules" | "applicationDeadline" | "drawResults" | "tags" | "source" | "createdAt" | "updatedAt", ExtArgs["result"]["huntingInfo"]>

  export type $HuntingInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HuntingInfo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      species: string
      seasonStartDate: Date
      seasonEndDate: Date
      seasonDescription: string | null
      units: string
      licenseRequired: string
      dailyBagLimit: number | null
      possessionLimit: number | null
      seasonLimit: number | null
      weaponRestrictions: string
      specialRules: string
      applicationDeadline: Date | null
      drawResults: Date | null
      tags: string
      source: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["huntingInfo"]>
    composites: {}
  }

  type HuntingInfoGetPayload<S extends boolean | null | undefined | HuntingInfoDefaultArgs> = $Result.GetResult<Prisma.$HuntingInfoPayload, S>

  type HuntingInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HuntingInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HuntingInfoCountAggregateInputType | true
    }

  export interface HuntingInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HuntingInfo'], meta: { name: 'HuntingInfo' } }
    /**
     * Find zero or one HuntingInfo that matches the filter.
     * @param {HuntingInfoFindUniqueArgs} args - Arguments to find a HuntingInfo
     * @example
     * // Get one HuntingInfo
     * const huntingInfo = await prisma.huntingInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HuntingInfoFindUniqueArgs>(args: SelectSubset<T, HuntingInfoFindUniqueArgs<ExtArgs>>): Prisma__HuntingInfoClient<$Result.GetResult<Prisma.$HuntingInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HuntingInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HuntingInfoFindUniqueOrThrowArgs} args - Arguments to find a HuntingInfo
     * @example
     * // Get one HuntingInfo
     * const huntingInfo = await prisma.huntingInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HuntingInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, HuntingInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HuntingInfoClient<$Result.GetResult<Prisma.$HuntingInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HuntingInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuntingInfoFindFirstArgs} args - Arguments to find a HuntingInfo
     * @example
     * // Get one HuntingInfo
     * const huntingInfo = await prisma.huntingInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HuntingInfoFindFirstArgs>(args?: SelectSubset<T, HuntingInfoFindFirstArgs<ExtArgs>>): Prisma__HuntingInfoClient<$Result.GetResult<Prisma.$HuntingInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HuntingInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuntingInfoFindFirstOrThrowArgs} args - Arguments to find a HuntingInfo
     * @example
     * // Get one HuntingInfo
     * const huntingInfo = await prisma.huntingInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HuntingInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, HuntingInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__HuntingInfoClient<$Result.GetResult<Prisma.$HuntingInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HuntingInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuntingInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HuntingInfos
     * const huntingInfos = await prisma.huntingInfo.findMany()
     * 
     * // Get first 10 HuntingInfos
     * const huntingInfos = await prisma.huntingInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const huntingInfoWithIdOnly = await prisma.huntingInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HuntingInfoFindManyArgs>(args?: SelectSubset<T, HuntingInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HuntingInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HuntingInfo.
     * @param {HuntingInfoCreateArgs} args - Arguments to create a HuntingInfo.
     * @example
     * // Create one HuntingInfo
     * const HuntingInfo = await prisma.huntingInfo.create({
     *   data: {
     *     // ... data to create a HuntingInfo
     *   }
     * })
     * 
     */
    create<T extends HuntingInfoCreateArgs>(args: SelectSubset<T, HuntingInfoCreateArgs<ExtArgs>>): Prisma__HuntingInfoClient<$Result.GetResult<Prisma.$HuntingInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HuntingInfos.
     * @param {HuntingInfoCreateManyArgs} args - Arguments to create many HuntingInfos.
     * @example
     * // Create many HuntingInfos
     * const huntingInfo = await prisma.huntingInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HuntingInfoCreateManyArgs>(args?: SelectSubset<T, HuntingInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HuntingInfos and returns the data saved in the database.
     * @param {HuntingInfoCreateManyAndReturnArgs} args - Arguments to create many HuntingInfos.
     * @example
     * // Create many HuntingInfos
     * const huntingInfo = await prisma.huntingInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HuntingInfos and only return the `id`
     * const huntingInfoWithIdOnly = await prisma.huntingInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HuntingInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, HuntingInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HuntingInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HuntingInfo.
     * @param {HuntingInfoDeleteArgs} args - Arguments to delete one HuntingInfo.
     * @example
     * // Delete one HuntingInfo
     * const HuntingInfo = await prisma.huntingInfo.delete({
     *   where: {
     *     // ... filter to delete one HuntingInfo
     *   }
     * })
     * 
     */
    delete<T extends HuntingInfoDeleteArgs>(args: SelectSubset<T, HuntingInfoDeleteArgs<ExtArgs>>): Prisma__HuntingInfoClient<$Result.GetResult<Prisma.$HuntingInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HuntingInfo.
     * @param {HuntingInfoUpdateArgs} args - Arguments to update one HuntingInfo.
     * @example
     * // Update one HuntingInfo
     * const huntingInfo = await prisma.huntingInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HuntingInfoUpdateArgs>(args: SelectSubset<T, HuntingInfoUpdateArgs<ExtArgs>>): Prisma__HuntingInfoClient<$Result.GetResult<Prisma.$HuntingInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HuntingInfos.
     * @param {HuntingInfoDeleteManyArgs} args - Arguments to filter HuntingInfos to delete.
     * @example
     * // Delete a few HuntingInfos
     * const { count } = await prisma.huntingInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HuntingInfoDeleteManyArgs>(args?: SelectSubset<T, HuntingInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HuntingInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuntingInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HuntingInfos
     * const huntingInfo = await prisma.huntingInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HuntingInfoUpdateManyArgs>(args: SelectSubset<T, HuntingInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HuntingInfos and returns the data updated in the database.
     * @param {HuntingInfoUpdateManyAndReturnArgs} args - Arguments to update many HuntingInfos.
     * @example
     * // Update many HuntingInfos
     * const huntingInfo = await prisma.huntingInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HuntingInfos and only return the `id`
     * const huntingInfoWithIdOnly = await prisma.huntingInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HuntingInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, HuntingInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HuntingInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HuntingInfo.
     * @param {HuntingInfoUpsertArgs} args - Arguments to update or create a HuntingInfo.
     * @example
     * // Update or create a HuntingInfo
     * const huntingInfo = await prisma.huntingInfo.upsert({
     *   create: {
     *     // ... data to create a HuntingInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HuntingInfo we want to update
     *   }
     * })
     */
    upsert<T extends HuntingInfoUpsertArgs>(args: SelectSubset<T, HuntingInfoUpsertArgs<ExtArgs>>): Prisma__HuntingInfoClient<$Result.GetResult<Prisma.$HuntingInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HuntingInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuntingInfoCountArgs} args - Arguments to filter HuntingInfos to count.
     * @example
     * // Count the number of HuntingInfos
     * const count = await prisma.huntingInfo.count({
     *   where: {
     *     // ... the filter for the HuntingInfos we want to count
     *   }
     * })
    **/
    count<T extends HuntingInfoCountArgs>(
      args?: Subset<T, HuntingInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HuntingInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HuntingInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuntingInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HuntingInfoAggregateArgs>(args: Subset<T, HuntingInfoAggregateArgs>): Prisma.PrismaPromise<GetHuntingInfoAggregateType<T>>

    /**
     * Group by HuntingInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuntingInfoGroupByArgs} args - Group by arguments.
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
      T extends HuntingInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HuntingInfoGroupByArgs['orderBy'] }
        : { orderBy?: HuntingInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HuntingInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHuntingInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HuntingInfo model
   */
  readonly fields: HuntingInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HuntingInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HuntingInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HuntingInfo model
   */
  interface HuntingInfoFieldRefs {
    readonly id: FieldRef<"HuntingInfo", 'String'>
    readonly species: FieldRef<"HuntingInfo", 'String'>
    readonly seasonStartDate: FieldRef<"HuntingInfo", 'DateTime'>
    readonly seasonEndDate: FieldRef<"HuntingInfo", 'DateTime'>
    readonly seasonDescription: FieldRef<"HuntingInfo", 'String'>
    readonly units: FieldRef<"HuntingInfo", 'String'>
    readonly licenseRequired: FieldRef<"HuntingInfo", 'String'>
    readonly dailyBagLimit: FieldRef<"HuntingInfo", 'Int'>
    readonly possessionLimit: FieldRef<"HuntingInfo", 'Int'>
    readonly seasonLimit: FieldRef<"HuntingInfo", 'Int'>
    readonly weaponRestrictions: FieldRef<"HuntingInfo", 'String'>
    readonly specialRules: FieldRef<"HuntingInfo", 'String'>
    readonly applicationDeadline: FieldRef<"HuntingInfo", 'DateTime'>
    readonly drawResults: FieldRef<"HuntingInfo", 'DateTime'>
    readonly tags: FieldRef<"HuntingInfo", 'String'>
    readonly source: FieldRef<"HuntingInfo", 'String'>
    readonly createdAt: FieldRef<"HuntingInfo", 'DateTime'>
    readonly updatedAt: FieldRef<"HuntingInfo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HuntingInfo findUnique
   */
  export type HuntingInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingInfo
     */
    select?: HuntingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HuntingInfo
     */
    omit?: HuntingInfoOmit<ExtArgs> | null
    /**
     * Filter, which HuntingInfo to fetch.
     */
    where: HuntingInfoWhereUniqueInput
  }

  /**
   * HuntingInfo findUniqueOrThrow
   */
  export type HuntingInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingInfo
     */
    select?: HuntingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HuntingInfo
     */
    omit?: HuntingInfoOmit<ExtArgs> | null
    /**
     * Filter, which HuntingInfo to fetch.
     */
    where: HuntingInfoWhereUniqueInput
  }

  /**
   * HuntingInfo findFirst
   */
  export type HuntingInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingInfo
     */
    select?: HuntingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HuntingInfo
     */
    omit?: HuntingInfoOmit<ExtArgs> | null
    /**
     * Filter, which HuntingInfo to fetch.
     */
    where?: HuntingInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HuntingInfos to fetch.
     */
    orderBy?: HuntingInfoOrderByWithRelationInput | HuntingInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HuntingInfos.
     */
    cursor?: HuntingInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HuntingInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HuntingInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HuntingInfos.
     */
    distinct?: HuntingInfoScalarFieldEnum | HuntingInfoScalarFieldEnum[]
  }

  /**
   * HuntingInfo findFirstOrThrow
   */
  export type HuntingInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingInfo
     */
    select?: HuntingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HuntingInfo
     */
    omit?: HuntingInfoOmit<ExtArgs> | null
    /**
     * Filter, which HuntingInfo to fetch.
     */
    where?: HuntingInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HuntingInfos to fetch.
     */
    orderBy?: HuntingInfoOrderByWithRelationInput | HuntingInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HuntingInfos.
     */
    cursor?: HuntingInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HuntingInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HuntingInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HuntingInfos.
     */
    distinct?: HuntingInfoScalarFieldEnum | HuntingInfoScalarFieldEnum[]
  }

  /**
   * HuntingInfo findMany
   */
  export type HuntingInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingInfo
     */
    select?: HuntingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HuntingInfo
     */
    omit?: HuntingInfoOmit<ExtArgs> | null
    /**
     * Filter, which HuntingInfos to fetch.
     */
    where?: HuntingInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HuntingInfos to fetch.
     */
    orderBy?: HuntingInfoOrderByWithRelationInput | HuntingInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HuntingInfos.
     */
    cursor?: HuntingInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HuntingInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HuntingInfos.
     */
    skip?: number
    distinct?: HuntingInfoScalarFieldEnum | HuntingInfoScalarFieldEnum[]
  }

  /**
   * HuntingInfo create
   */
  export type HuntingInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingInfo
     */
    select?: HuntingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HuntingInfo
     */
    omit?: HuntingInfoOmit<ExtArgs> | null
    /**
     * The data needed to create a HuntingInfo.
     */
    data: XOR<HuntingInfoCreateInput, HuntingInfoUncheckedCreateInput>
  }

  /**
   * HuntingInfo createMany
   */
  export type HuntingInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HuntingInfos.
     */
    data: HuntingInfoCreateManyInput | HuntingInfoCreateManyInput[]
  }

  /**
   * HuntingInfo createManyAndReturn
   */
  export type HuntingInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingInfo
     */
    select?: HuntingInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HuntingInfo
     */
    omit?: HuntingInfoOmit<ExtArgs> | null
    /**
     * The data used to create many HuntingInfos.
     */
    data: HuntingInfoCreateManyInput | HuntingInfoCreateManyInput[]
  }

  /**
   * HuntingInfo update
   */
  export type HuntingInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingInfo
     */
    select?: HuntingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HuntingInfo
     */
    omit?: HuntingInfoOmit<ExtArgs> | null
    /**
     * The data needed to update a HuntingInfo.
     */
    data: XOR<HuntingInfoUpdateInput, HuntingInfoUncheckedUpdateInput>
    /**
     * Choose, which HuntingInfo to update.
     */
    where: HuntingInfoWhereUniqueInput
  }

  /**
   * HuntingInfo updateMany
   */
  export type HuntingInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HuntingInfos.
     */
    data: XOR<HuntingInfoUpdateManyMutationInput, HuntingInfoUncheckedUpdateManyInput>
    /**
     * Filter which HuntingInfos to update
     */
    where?: HuntingInfoWhereInput
    /**
     * Limit how many HuntingInfos to update.
     */
    limit?: number
  }

  /**
   * HuntingInfo updateManyAndReturn
   */
  export type HuntingInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingInfo
     */
    select?: HuntingInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HuntingInfo
     */
    omit?: HuntingInfoOmit<ExtArgs> | null
    /**
     * The data used to update HuntingInfos.
     */
    data: XOR<HuntingInfoUpdateManyMutationInput, HuntingInfoUncheckedUpdateManyInput>
    /**
     * Filter which HuntingInfos to update
     */
    where?: HuntingInfoWhereInput
    /**
     * Limit how many HuntingInfos to update.
     */
    limit?: number
  }

  /**
   * HuntingInfo upsert
   */
  export type HuntingInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingInfo
     */
    select?: HuntingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HuntingInfo
     */
    omit?: HuntingInfoOmit<ExtArgs> | null
    /**
     * The filter to search for the HuntingInfo to update in case it exists.
     */
    where: HuntingInfoWhereUniqueInput
    /**
     * In case the HuntingInfo found by the `where` argument doesn't exist, create a new HuntingInfo with this data.
     */
    create: XOR<HuntingInfoCreateInput, HuntingInfoUncheckedCreateInput>
    /**
     * In case the HuntingInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HuntingInfoUpdateInput, HuntingInfoUncheckedUpdateInput>
  }

  /**
   * HuntingInfo delete
   */
  export type HuntingInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingInfo
     */
    select?: HuntingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HuntingInfo
     */
    omit?: HuntingInfoOmit<ExtArgs> | null
    /**
     * Filter which HuntingInfo to delete.
     */
    where: HuntingInfoWhereUniqueInput
  }

  /**
   * HuntingInfo deleteMany
   */
  export type HuntingInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HuntingInfos to delete
     */
    where?: HuntingInfoWhereInput
    /**
     * Limit how many HuntingInfos to delete.
     */
    limit?: number
  }

  /**
   * HuntingInfo without action
   */
  export type HuntingInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuntingInfo
     */
    select?: HuntingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HuntingInfo
     */
    omit?: HuntingInfoOmit<ExtArgs> | null
  }


  /**
   * Model ParkInfo
   */

  export type AggregateParkInfo = {
    _count: ParkInfoCountAggregateOutputType | null
    _avg: ParkInfoAvgAggregateOutputType | null
    _sum: ParkInfoSumAggregateOutputType | null
    _min: ParkInfoMinAggregateOutputType | null
    _max: ParkInfoMaxAggregateOutputType | null
  }

  export type ParkInfoAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    dailyPassFee: number | null
    annualPassFee: number | null
    campingFee: number | null
  }

  export type ParkInfoSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    dailyPassFee: number | null
    annualPassFee: number | null
    campingFee: number | null
  }

  export type ParkInfoMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    location: string | null
    latitude: number | null
    longitude: number | null
    amenities: string | null
    activities: string | null
    dailyPassFee: number | null
    annualPassFee: number | null
    campingFee: number | null
    summerHours: string | null
    winterHours: string | null
    currentHours: string | null
    campingAvailable: boolean | null
    reservationRequired: boolean | null
    petPolicy: string | null
    accessibility: string | null
    currentConditions: string | null
    alerts: string | null
    source: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkInfoMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    location: string | null
    latitude: number | null
    longitude: number | null
    amenities: string | null
    activities: string | null
    dailyPassFee: number | null
    annualPassFee: number | null
    campingFee: number | null
    summerHours: string | null
    winterHours: string | null
    currentHours: string | null
    campingAvailable: boolean | null
    reservationRequired: boolean | null
    petPolicy: string | null
    accessibility: string | null
    currentConditions: string | null
    alerts: string | null
    source: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkInfoCountAggregateOutputType = {
    id: number
    name: number
    type: number
    location: number
    latitude: number
    longitude: number
    amenities: number
    activities: number
    dailyPassFee: number
    annualPassFee: number
    campingFee: number
    summerHours: number
    winterHours: number
    currentHours: number
    campingAvailable: number
    reservationRequired: number
    petPolicy: number
    accessibility: number
    currentConditions: number
    alerts: number
    source: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParkInfoAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    dailyPassFee?: true
    annualPassFee?: true
    campingFee?: true
  }

  export type ParkInfoSumAggregateInputType = {
    latitude?: true
    longitude?: true
    dailyPassFee?: true
    annualPassFee?: true
    campingFee?: true
  }

  export type ParkInfoMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    location?: true
    latitude?: true
    longitude?: true
    amenities?: true
    activities?: true
    dailyPassFee?: true
    annualPassFee?: true
    campingFee?: true
    summerHours?: true
    winterHours?: true
    currentHours?: true
    campingAvailable?: true
    reservationRequired?: true
    petPolicy?: true
    accessibility?: true
    currentConditions?: true
    alerts?: true
    source?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkInfoMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    location?: true
    latitude?: true
    longitude?: true
    amenities?: true
    activities?: true
    dailyPassFee?: true
    annualPassFee?: true
    campingFee?: true
    summerHours?: true
    winterHours?: true
    currentHours?: true
    campingAvailable?: true
    reservationRequired?: true
    petPolicy?: true
    accessibility?: true
    currentConditions?: true
    alerts?: true
    source?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkInfoCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    location?: true
    latitude?: true
    longitude?: true
    amenities?: true
    activities?: true
    dailyPassFee?: true
    annualPassFee?: true
    campingFee?: true
    summerHours?: true
    winterHours?: true
    currentHours?: true
    campingAvailable?: true
    reservationRequired?: true
    petPolicy?: true
    accessibility?: true
    currentConditions?: true
    alerts?: true
    source?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParkInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkInfo to aggregate.
     */
    where?: ParkInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkInfos to fetch.
     */
    orderBy?: ParkInfoOrderByWithRelationInput | ParkInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkInfos
    **/
    _count?: true | ParkInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkInfoMaxAggregateInputType
  }

  export type GetParkInfoAggregateType<T extends ParkInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateParkInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkInfo[P]>
      : GetScalarType<T[P], AggregateParkInfo[P]>
  }




  export type ParkInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkInfoWhereInput
    orderBy?: ParkInfoOrderByWithAggregationInput | ParkInfoOrderByWithAggregationInput[]
    by: ParkInfoScalarFieldEnum[] | ParkInfoScalarFieldEnum
    having?: ParkInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkInfoCountAggregateInputType | true
    _avg?: ParkInfoAvgAggregateInputType
    _sum?: ParkInfoSumAggregateInputType
    _min?: ParkInfoMinAggregateInputType
    _max?: ParkInfoMaxAggregateInputType
  }

  export type ParkInfoGroupByOutputType = {
    id: string
    name: string
    type: string
    location: string
    latitude: number
    longitude: number
    amenities: string
    activities: string
    dailyPassFee: number | null
    annualPassFee: number | null
    campingFee: number | null
    summerHours: string | null
    winterHours: string | null
    currentHours: string
    campingAvailable: boolean
    reservationRequired: boolean | null
    petPolicy: string | null
    accessibility: string
    currentConditions: string | null
    alerts: string
    source: string
    createdAt: Date
    updatedAt: Date
    _count: ParkInfoCountAggregateOutputType | null
    _avg: ParkInfoAvgAggregateOutputType | null
    _sum: ParkInfoSumAggregateOutputType | null
    _min: ParkInfoMinAggregateOutputType | null
    _max: ParkInfoMaxAggregateOutputType | null
  }

  type GetParkInfoGroupByPayload<T extends ParkInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkInfoGroupByOutputType[P]>
            : GetScalarType<T[P], ParkInfoGroupByOutputType[P]>
        }
      >
    >


  export type ParkInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    amenities?: boolean
    activities?: boolean
    dailyPassFee?: boolean
    annualPassFee?: boolean
    campingFee?: boolean
    summerHours?: boolean
    winterHours?: boolean
    currentHours?: boolean
    campingAvailable?: boolean
    reservationRequired?: boolean
    petPolicy?: boolean
    accessibility?: boolean
    currentConditions?: boolean
    alerts?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    favorites?: boolean | ParkInfo$favoritesArgs<ExtArgs>
    tripPlanItems?: boolean | ParkInfo$tripPlanItemsArgs<ExtArgs>
    _count?: boolean | ParkInfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkInfo"]>

  export type ParkInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    amenities?: boolean
    activities?: boolean
    dailyPassFee?: boolean
    annualPassFee?: boolean
    campingFee?: boolean
    summerHours?: boolean
    winterHours?: boolean
    currentHours?: boolean
    campingAvailable?: boolean
    reservationRequired?: boolean
    petPolicy?: boolean
    accessibility?: boolean
    currentConditions?: boolean
    alerts?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["parkInfo"]>

  export type ParkInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    amenities?: boolean
    activities?: boolean
    dailyPassFee?: boolean
    annualPassFee?: boolean
    campingFee?: boolean
    summerHours?: boolean
    winterHours?: boolean
    currentHours?: boolean
    campingAvailable?: boolean
    reservationRequired?: boolean
    petPolicy?: boolean
    accessibility?: boolean
    currentConditions?: boolean
    alerts?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["parkInfo"]>

  export type ParkInfoSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    amenities?: boolean
    activities?: boolean
    dailyPassFee?: boolean
    annualPassFee?: boolean
    campingFee?: boolean
    summerHours?: boolean
    winterHours?: boolean
    currentHours?: boolean
    campingAvailable?: boolean
    reservationRequired?: boolean
    petPolicy?: boolean
    accessibility?: boolean
    currentConditions?: boolean
    alerts?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParkInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "location" | "latitude" | "longitude" | "amenities" | "activities" | "dailyPassFee" | "annualPassFee" | "campingFee" | "summerHours" | "winterHours" | "currentHours" | "campingAvailable" | "reservationRequired" | "petPolicy" | "accessibility" | "currentConditions" | "alerts" | "source" | "createdAt" | "updatedAt", ExtArgs["result"]["parkInfo"]>
  export type ParkInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorites?: boolean | ParkInfo$favoritesArgs<ExtArgs>
    tripPlanItems?: boolean | ParkInfo$tripPlanItemsArgs<ExtArgs>
    _count?: boolean | ParkInfoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParkInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ParkInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ParkInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkInfo"
    objects: {
      favorites: Prisma.$UserFavoritePayload<ExtArgs>[]
      tripPlanItems: Prisma.$TripPlanItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      location: string
      latitude: number
      longitude: number
      amenities: string
      activities: string
      dailyPassFee: number | null
      annualPassFee: number | null
      campingFee: number | null
      summerHours: string | null
      winterHours: string | null
      currentHours: string
      campingAvailable: boolean
      reservationRequired: boolean | null
      petPolicy: string | null
      accessibility: string
      currentConditions: string | null
      alerts: string
      source: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["parkInfo"]>
    composites: {}
  }

  type ParkInfoGetPayload<S extends boolean | null | undefined | ParkInfoDefaultArgs> = $Result.GetResult<Prisma.$ParkInfoPayload, S>

  type ParkInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkInfoCountAggregateInputType | true
    }

  export interface ParkInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkInfo'], meta: { name: 'ParkInfo' } }
    /**
     * Find zero or one ParkInfo that matches the filter.
     * @param {ParkInfoFindUniqueArgs} args - Arguments to find a ParkInfo
     * @example
     * // Get one ParkInfo
     * const parkInfo = await prisma.parkInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkInfoFindUniqueArgs>(args: SelectSubset<T, ParkInfoFindUniqueArgs<ExtArgs>>): Prisma__ParkInfoClient<$Result.GetResult<Prisma.$ParkInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParkInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkInfoFindUniqueOrThrowArgs} args - Arguments to find a ParkInfo
     * @example
     * // Get one ParkInfo
     * const parkInfo = await prisma.parkInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkInfoClient<$Result.GetResult<Prisma.$ParkInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkInfoFindFirstArgs} args - Arguments to find a ParkInfo
     * @example
     * // Get one ParkInfo
     * const parkInfo = await prisma.parkInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkInfoFindFirstArgs>(args?: SelectSubset<T, ParkInfoFindFirstArgs<ExtArgs>>): Prisma__ParkInfoClient<$Result.GetResult<Prisma.$ParkInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkInfoFindFirstOrThrowArgs} args - Arguments to find a ParkInfo
     * @example
     * // Get one ParkInfo
     * const parkInfo = await prisma.parkInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkInfoClient<$Result.GetResult<Prisma.$ParkInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParkInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkInfos
     * const parkInfos = await prisma.parkInfo.findMany()
     * 
     * // Get first 10 ParkInfos
     * const parkInfos = await prisma.parkInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkInfoWithIdOnly = await prisma.parkInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkInfoFindManyArgs>(args?: SelectSubset<T, ParkInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParkInfo.
     * @param {ParkInfoCreateArgs} args - Arguments to create a ParkInfo.
     * @example
     * // Create one ParkInfo
     * const ParkInfo = await prisma.parkInfo.create({
     *   data: {
     *     // ... data to create a ParkInfo
     *   }
     * })
     * 
     */
    create<T extends ParkInfoCreateArgs>(args: SelectSubset<T, ParkInfoCreateArgs<ExtArgs>>): Prisma__ParkInfoClient<$Result.GetResult<Prisma.$ParkInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParkInfos.
     * @param {ParkInfoCreateManyArgs} args - Arguments to create many ParkInfos.
     * @example
     * // Create many ParkInfos
     * const parkInfo = await prisma.parkInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkInfoCreateManyArgs>(args?: SelectSubset<T, ParkInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkInfos and returns the data saved in the database.
     * @param {ParkInfoCreateManyAndReturnArgs} args - Arguments to create many ParkInfos.
     * @example
     * // Create many ParkInfos
     * const parkInfo = await prisma.parkInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkInfos and only return the `id`
     * const parkInfoWithIdOnly = await prisma.parkInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParkInfo.
     * @param {ParkInfoDeleteArgs} args - Arguments to delete one ParkInfo.
     * @example
     * // Delete one ParkInfo
     * const ParkInfo = await prisma.parkInfo.delete({
     *   where: {
     *     // ... filter to delete one ParkInfo
     *   }
     * })
     * 
     */
    delete<T extends ParkInfoDeleteArgs>(args: SelectSubset<T, ParkInfoDeleteArgs<ExtArgs>>): Prisma__ParkInfoClient<$Result.GetResult<Prisma.$ParkInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParkInfo.
     * @param {ParkInfoUpdateArgs} args - Arguments to update one ParkInfo.
     * @example
     * // Update one ParkInfo
     * const parkInfo = await prisma.parkInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkInfoUpdateArgs>(args: SelectSubset<T, ParkInfoUpdateArgs<ExtArgs>>): Prisma__ParkInfoClient<$Result.GetResult<Prisma.$ParkInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParkInfos.
     * @param {ParkInfoDeleteManyArgs} args - Arguments to filter ParkInfos to delete.
     * @example
     * // Delete a few ParkInfos
     * const { count } = await prisma.parkInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkInfoDeleteManyArgs>(args?: SelectSubset<T, ParkInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkInfos
     * const parkInfo = await prisma.parkInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkInfoUpdateManyArgs>(args: SelectSubset<T, ParkInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkInfos and returns the data updated in the database.
     * @param {ParkInfoUpdateManyAndReturnArgs} args - Arguments to update many ParkInfos.
     * @example
     * // Update many ParkInfos
     * const parkInfo = await prisma.parkInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParkInfos and only return the `id`
     * const parkInfoWithIdOnly = await prisma.parkInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParkInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParkInfo.
     * @param {ParkInfoUpsertArgs} args - Arguments to update or create a ParkInfo.
     * @example
     * // Update or create a ParkInfo
     * const parkInfo = await prisma.parkInfo.upsert({
     *   create: {
     *     // ... data to create a ParkInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkInfo we want to update
     *   }
     * })
     */
    upsert<T extends ParkInfoUpsertArgs>(args: SelectSubset<T, ParkInfoUpsertArgs<ExtArgs>>): Prisma__ParkInfoClient<$Result.GetResult<Prisma.$ParkInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParkInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkInfoCountArgs} args - Arguments to filter ParkInfos to count.
     * @example
     * // Count the number of ParkInfos
     * const count = await prisma.parkInfo.count({
     *   where: {
     *     // ... the filter for the ParkInfos we want to count
     *   }
     * })
    **/
    count<T extends ParkInfoCountArgs>(
      args?: Subset<T, ParkInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParkInfoAggregateArgs>(args: Subset<T, ParkInfoAggregateArgs>): Prisma.PrismaPromise<GetParkInfoAggregateType<T>>

    /**
     * Group by ParkInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkInfoGroupByArgs} args - Group by arguments.
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
      T extends ParkInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkInfoGroupByArgs['orderBy'] }
        : { orderBy?: ParkInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParkInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkInfo model
   */
  readonly fields: ParkInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    favorites<T extends ParkInfo$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, ParkInfo$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tripPlanItems<T extends ParkInfo$tripPlanItemsArgs<ExtArgs> = {}>(args?: Subset<T, ParkInfo$tripPlanItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParkInfo model
   */
  interface ParkInfoFieldRefs {
    readonly id: FieldRef<"ParkInfo", 'String'>
    readonly name: FieldRef<"ParkInfo", 'String'>
    readonly type: FieldRef<"ParkInfo", 'String'>
    readonly location: FieldRef<"ParkInfo", 'String'>
    readonly latitude: FieldRef<"ParkInfo", 'Float'>
    readonly longitude: FieldRef<"ParkInfo", 'Float'>
    readonly amenities: FieldRef<"ParkInfo", 'String'>
    readonly activities: FieldRef<"ParkInfo", 'String'>
    readonly dailyPassFee: FieldRef<"ParkInfo", 'Float'>
    readonly annualPassFee: FieldRef<"ParkInfo", 'Float'>
    readonly campingFee: FieldRef<"ParkInfo", 'Float'>
    readonly summerHours: FieldRef<"ParkInfo", 'String'>
    readonly winterHours: FieldRef<"ParkInfo", 'String'>
    readonly currentHours: FieldRef<"ParkInfo", 'String'>
    readonly campingAvailable: FieldRef<"ParkInfo", 'Boolean'>
    readonly reservationRequired: FieldRef<"ParkInfo", 'Boolean'>
    readonly petPolicy: FieldRef<"ParkInfo", 'String'>
    readonly accessibility: FieldRef<"ParkInfo", 'String'>
    readonly currentConditions: FieldRef<"ParkInfo", 'String'>
    readonly alerts: FieldRef<"ParkInfo", 'String'>
    readonly source: FieldRef<"ParkInfo", 'String'>
    readonly createdAt: FieldRef<"ParkInfo", 'DateTime'>
    readonly updatedAt: FieldRef<"ParkInfo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParkInfo findUnique
   */
  export type ParkInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkInfo
     */
    select?: ParkInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkInfo
     */
    omit?: ParkInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkInfoInclude<ExtArgs> | null
    /**
     * Filter, which ParkInfo to fetch.
     */
    where: ParkInfoWhereUniqueInput
  }

  /**
   * ParkInfo findUniqueOrThrow
   */
  export type ParkInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkInfo
     */
    select?: ParkInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkInfo
     */
    omit?: ParkInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkInfoInclude<ExtArgs> | null
    /**
     * Filter, which ParkInfo to fetch.
     */
    where: ParkInfoWhereUniqueInput
  }

  /**
   * ParkInfo findFirst
   */
  export type ParkInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkInfo
     */
    select?: ParkInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkInfo
     */
    omit?: ParkInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkInfoInclude<ExtArgs> | null
    /**
     * Filter, which ParkInfo to fetch.
     */
    where?: ParkInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkInfos to fetch.
     */
    orderBy?: ParkInfoOrderByWithRelationInput | ParkInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkInfos.
     */
    cursor?: ParkInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkInfos.
     */
    distinct?: ParkInfoScalarFieldEnum | ParkInfoScalarFieldEnum[]
  }

  /**
   * ParkInfo findFirstOrThrow
   */
  export type ParkInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkInfo
     */
    select?: ParkInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkInfo
     */
    omit?: ParkInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkInfoInclude<ExtArgs> | null
    /**
     * Filter, which ParkInfo to fetch.
     */
    where?: ParkInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkInfos to fetch.
     */
    orderBy?: ParkInfoOrderByWithRelationInput | ParkInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkInfos.
     */
    cursor?: ParkInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkInfos.
     */
    distinct?: ParkInfoScalarFieldEnum | ParkInfoScalarFieldEnum[]
  }

  /**
   * ParkInfo findMany
   */
  export type ParkInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkInfo
     */
    select?: ParkInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkInfo
     */
    omit?: ParkInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkInfoInclude<ExtArgs> | null
    /**
     * Filter, which ParkInfos to fetch.
     */
    where?: ParkInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkInfos to fetch.
     */
    orderBy?: ParkInfoOrderByWithRelationInput | ParkInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkInfos.
     */
    cursor?: ParkInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkInfos.
     */
    skip?: number
    distinct?: ParkInfoScalarFieldEnum | ParkInfoScalarFieldEnum[]
  }

  /**
   * ParkInfo create
   */
  export type ParkInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkInfo
     */
    select?: ParkInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkInfo
     */
    omit?: ParkInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkInfo.
     */
    data: XOR<ParkInfoCreateInput, ParkInfoUncheckedCreateInput>
  }

  /**
   * ParkInfo createMany
   */
  export type ParkInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkInfos.
     */
    data: ParkInfoCreateManyInput | ParkInfoCreateManyInput[]
  }

  /**
   * ParkInfo createManyAndReturn
   */
  export type ParkInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkInfo
     */
    select?: ParkInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkInfo
     */
    omit?: ParkInfoOmit<ExtArgs> | null
    /**
     * The data used to create many ParkInfos.
     */
    data: ParkInfoCreateManyInput | ParkInfoCreateManyInput[]
  }

  /**
   * ParkInfo update
   */
  export type ParkInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkInfo
     */
    select?: ParkInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkInfo
     */
    omit?: ParkInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkInfo.
     */
    data: XOR<ParkInfoUpdateInput, ParkInfoUncheckedUpdateInput>
    /**
     * Choose, which ParkInfo to update.
     */
    where: ParkInfoWhereUniqueInput
  }

  /**
   * ParkInfo updateMany
   */
  export type ParkInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkInfos.
     */
    data: XOR<ParkInfoUpdateManyMutationInput, ParkInfoUncheckedUpdateManyInput>
    /**
     * Filter which ParkInfos to update
     */
    where?: ParkInfoWhereInput
    /**
     * Limit how many ParkInfos to update.
     */
    limit?: number
  }

  /**
   * ParkInfo updateManyAndReturn
   */
  export type ParkInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkInfo
     */
    select?: ParkInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkInfo
     */
    omit?: ParkInfoOmit<ExtArgs> | null
    /**
     * The data used to update ParkInfos.
     */
    data: XOR<ParkInfoUpdateManyMutationInput, ParkInfoUncheckedUpdateManyInput>
    /**
     * Filter which ParkInfos to update
     */
    where?: ParkInfoWhereInput
    /**
     * Limit how many ParkInfos to update.
     */
    limit?: number
  }

  /**
   * ParkInfo upsert
   */
  export type ParkInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkInfo
     */
    select?: ParkInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkInfo
     */
    omit?: ParkInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkInfo to update in case it exists.
     */
    where: ParkInfoWhereUniqueInput
    /**
     * In case the ParkInfo found by the `where` argument doesn't exist, create a new ParkInfo with this data.
     */
    create: XOR<ParkInfoCreateInput, ParkInfoUncheckedCreateInput>
    /**
     * In case the ParkInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkInfoUpdateInput, ParkInfoUncheckedUpdateInput>
  }

  /**
   * ParkInfo delete
   */
  export type ParkInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkInfo
     */
    select?: ParkInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkInfo
     */
    omit?: ParkInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkInfoInclude<ExtArgs> | null
    /**
     * Filter which ParkInfo to delete.
     */
    where: ParkInfoWhereUniqueInput
  }

  /**
   * ParkInfo deleteMany
   */
  export type ParkInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkInfos to delete
     */
    where?: ParkInfoWhereInput
    /**
     * Limit how many ParkInfos to delete.
     */
    limit?: number
  }

  /**
   * ParkInfo.favorites
   */
  export type ParkInfo$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    where?: UserFavoriteWhereInput
    orderBy?: UserFavoriteOrderByWithRelationInput | UserFavoriteOrderByWithRelationInput[]
    cursor?: UserFavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFavoriteScalarFieldEnum | UserFavoriteScalarFieldEnum[]
  }

  /**
   * ParkInfo.tripPlanItems
   */
  export type ParkInfo$tripPlanItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanItem
     */
    select?: TripPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanItem
     */
    omit?: TripPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanItemInclude<ExtArgs> | null
    where?: TripPlanItemWhereInput
    orderBy?: TripPlanItemOrderByWithRelationInput | TripPlanItemOrderByWithRelationInput[]
    cursor?: TripPlanItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripPlanItemScalarFieldEnum | TripPlanItemScalarFieldEnum[]
  }

  /**
   * ParkInfo without action
   */
  export type ParkInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkInfo
     */
    select?: ParkInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkInfo
     */
    omit?: ParkInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkInfoInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    avatar: string | null
    emailVerified: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    avatar: string | null
    emailVerified: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    avatar: number
    emailVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    avatar: string | null
    emailVerified: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    name?: boolean
    avatar?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    favoriteLocations?: boolean | User$favoriteLocationsArgs<ExtArgs>
    tripPlans?: boolean | User$tripPlansArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "avatar" | "emailVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoriteLocations?: boolean | User$favoriteLocationsArgs<ExtArgs>
    tripPlans?: boolean | User$tripPlansArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      favoriteLocations: Prisma.$UserFavoritePayload<ExtArgs>[]
      tripPlans: Prisma.$TripPlanPayload<ExtArgs>[]
      subscriptions: Prisma.$UserSubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      avatar: string | null
      emailVerified: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    favoriteLocations<T extends User$favoriteLocationsArgs<ExtArgs> = {}>(args?: Subset<T, User$favoriteLocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tripPlans<T extends User$tripPlansArgs<ExtArgs> = {}>(args?: Subset<T, User$tripPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends User$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.favoriteLocations
   */
  export type User$favoriteLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    where?: UserFavoriteWhereInput
    orderBy?: UserFavoriteOrderByWithRelationInput | UserFavoriteOrderByWithRelationInput[]
    cursor?: UserFavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFavoriteScalarFieldEnum | UserFavoriteScalarFieldEnum[]
  }

  /**
   * User.tripPlans
   */
  export type User$tripPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    where?: TripPlanWhereInput
    orderBy?: TripPlanOrderByWithRelationInput | TripPlanOrderByWithRelationInput[]
    cursor?: TripPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripPlanScalarFieldEnum | TripPlanScalarFieldEnum[]
  }

  /**
   * User.subscriptions
   */
  export type User$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    where?: UserSubscriptionWhereInput
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    cursor?: UserSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserFavorite
   */

  export type AggregateUserFavorite = {
    _count: UserFavoriteCountAggregateOutputType | null
    _avg: UserFavoriteAvgAggregateOutputType | null
    _sum: UserFavoriteSumAggregateOutputType | null
    _min: UserFavoriteMinAggregateOutputType | null
    _max: UserFavoriteMaxAggregateOutputType | null
  }

  export type UserFavoriteAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type UserFavoriteSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type UserFavoriteMinAggregateOutputType = {
    id: string | null
    userId: string | null
    troutStockingId: string | null
    parkInfoId: string | null
    eventId: string | null
    customLocation: string | null
    latitude: number | null
    longitude: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type UserFavoriteMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    troutStockingId: string | null
    parkInfoId: string | null
    eventId: string | null
    customLocation: string | null
    latitude: number | null
    longitude: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type UserFavoriteCountAggregateOutputType = {
    id: number
    userId: number
    troutStockingId: number
    parkInfoId: number
    eventId: number
    customLocation: number
    latitude: number
    longitude: number
    notes: number
    createdAt: number
    _all: number
  }


  export type UserFavoriteAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type UserFavoriteSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type UserFavoriteMinAggregateInputType = {
    id?: true
    userId?: true
    troutStockingId?: true
    parkInfoId?: true
    eventId?: true
    customLocation?: true
    latitude?: true
    longitude?: true
    notes?: true
    createdAt?: true
  }

  export type UserFavoriteMaxAggregateInputType = {
    id?: true
    userId?: true
    troutStockingId?: true
    parkInfoId?: true
    eventId?: true
    customLocation?: true
    latitude?: true
    longitude?: true
    notes?: true
    createdAt?: true
  }

  export type UserFavoriteCountAggregateInputType = {
    id?: true
    userId?: true
    troutStockingId?: true
    parkInfoId?: true
    eventId?: true
    customLocation?: true
    latitude?: true
    longitude?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type UserFavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFavorite to aggregate.
     */
    where?: UserFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavorites to fetch.
     */
    orderBy?: UserFavoriteOrderByWithRelationInput | UserFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFavorites
    **/
    _count?: true | UserFavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserFavoriteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserFavoriteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFavoriteMaxAggregateInputType
  }

  export type GetUserFavoriteAggregateType<T extends UserFavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFavorite[P]>
      : GetScalarType<T[P], AggregateUserFavorite[P]>
  }




  export type UserFavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavoriteWhereInput
    orderBy?: UserFavoriteOrderByWithAggregationInput | UserFavoriteOrderByWithAggregationInput[]
    by: UserFavoriteScalarFieldEnum[] | UserFavoriteScalarFieldEnum
    having?: UserFavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFavoriteCountAggregateInputType | true
    _avg?: UserFavoriteAvgAggregateInputType
    _sum?: UserFavoriteSumAggregateInputType
    _min?: UserFavoriteMinAggregateInputType
    _max?: UserFavoriteMaxAggregateInputType
  }

  export type UserFavoriteGroupByOutputType = {
    id: string
    userId: string
    troutStockingId: string | null
    parkInfoId: string | null
    eventId: string | null
    customLocation: string | null
    latitude: number | null
    longitude: number | null
    notes: string | null
    createdAt: Date
    _count: UserFavoriteCountAggregateOutputType | null
    _avg: UserFavoriteAvgAggregateOutputType | null
    _sum: UserFavoriteSumAggregateOutputType | null
    _min: UserFavoriteMinAggregateOutputType | null
    _max: UserFavoriteMaxAggregateOutputType | null
  }

  type GetUserFavoriteGroupByPayload<T extends UserFavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], UserFavoriteGroupByOutputType[P]>
        }
      >
    >


  export type UserFavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    troutStockingId?: boolean
    parkInfoId?: boolean
    eventId?: boolean
    customLocation?: boolean
    latitude?: boolean
    longitude?: boolean
    notes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    troutStocking?: boolean | UserFavorite$troutStockingArgs<ExtArgs>
    parkInfo?: boolean | UserFavorite$parkInfoArgs<ExtArgs>
    event?: boolean | UserFavorite$eventArgs<ExtArgs>
  }, ExtArgs["result"]["userFavorite"]>

  export type UserFavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    troutStockingId?: boolean
    parkInfoId?: boolean
    eventId?: boolean
    customLocation?: boolean
    latitude?: boolean
    longitude?: boolean
    notes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    troutStocking?: boolean | UserFavorite$troutStockingArgs<ExtArgs>
    parkInfo?: boolean | UserFavorite$parkInfoArgs<ExtArgs>
    event?: boolean | UserFavorite$eventArgs<ExtArgs>
  }, ExtArgs["result"]["userFavorite"]>

  export type UserFavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    troutStockingId?: boolean
    parkInfoId?: boolean
    eventId?: boolean
    customLocation?: boolean
    latitude?: boolean
    longitude?: boolean
    notes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    troutStocking?: boolean | UserFavorite$troutStockingArgs<ExtArgs>
    parkInfo?: boolean | UserFavorite$parkInfoArgs<ExtArgs>
    event?: boolean | UserFavorite$eventArgs<ExtArgs>
  }, ExtArgs["result"]["userFavorite"]>

  export type UserFavoriteSelectScalar = {
    id?: boolean
    userId?: boolean
    troutStockingId?: boolean
    parkInfoId?: boolean
    eventId?: boolean
    customLocation?: boolean
    latitude?: boolean
    longitude?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type UserFavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "troutStockingId" | "parkInfoId" | "eventId" | "customLocation" | "latitude" | "longitude" | "notes" | "createdAt", ExtArgs["result"]["userFavorite"]>
  export type UserFavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    troutStocking?: boolean | UserFavorite$troutStockingArgs<ExtArgs>
    parkInfo?: boolean | UserFavorite$parkInfoArgs<ExtArgs>
    event?: boolean | UserFavorite$eventArgs<ExtArgs>
  }
  export type UserFavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    troutStocking?: boolean | UserFavorite$troutStockingArgs<ExtArgs>
    parkInfo?: boolean | UserFavorite$parkInfoArgs<ExtArgs>
    event?: boolean | UserFavorite$eventArgs<ExtArgs>
  }
  export type UserFavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    troutStocking?: boolean | UserFavorite$troutStockingArgs<ExtArgs>
    parkInfo?: boolean | UserFavorite$parkInfoArgs<ExtArgs>
    event?: boolean | UserFavorite$eventArgs<ExtArgs>
  }

  export type $UserFavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFavorite"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      troutStocking: Prisma.$TroutStockingPayload<ExtArgs> | null
      parkInfo: Prisma.$ParkInfoPayload<ExtArgs> | null
      event: Prisma.$OutdoorEventPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      troutStockingId: string | null
      parkInfoId: string | null
      eventId: string | null
      customLocation: string | null
      latitude: number | null
      longitude: number | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["userFavorite"]>
    composites: {}
  }

  type UserFavoriteGetPayload<S extends boolean | null | undefined | UserFavoriteDefaultArgs> = $Result.GetResult<Prisma.$UserFavoritePayload, S>

  type UserFavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserFavoriteCountAggregateInputType | true
    }

  export interface UserFavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFavorite'], meta: { name: 'UserFavorite' } }
    /**
     * Find zero or one UserFavorite that matches the filter.
     * @param {UserFavoriteFindUniqueArgs} args - Arguments to find a UserFavorite
     * @example
     * // Get one UserFavorite
     * const userFavorite = await prisma.userFavorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFavoriteFindUniqueArgs>(args: SelectSubset<T, UserFavoriteFindUniqueArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserFavorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFavoriteFindUniqueOrThrowArgs} args - Arguments to find a UserFavorite
     * @example
     * // Get one UserFavorite
     * const userFavorite = await prisma.userFavorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFavorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteFindFirstArgs} args - Arguments to find a UserFavorite
     * @example
     * // Get one UserFavorite
     * const userFavorite = await prisma.userFavorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFavoriteFindFirstArgs>(args?: SelectSubset<T, UserFavoriteFindFirstArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFavorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteFindFirstOrThrowArgs} args - Arguments to find a UserFavorite
     * @example
     * // Get one UserFavorite
     * const userFavorite = await prisma.userFavorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserFavorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFavorites
     * const userFavorites = await prisma.userFavorite.findMany()
     * 
     * // Get first 10 UserFavorites
     * const userFavorites = await prisma.userFavorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userFavoriteWithIdOnly = await prisma.userFavorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFavoriteFindManyArgs>(args?: SelectSubset<T, UserFavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserFavorite.
     * @param {UserFavoriteCreateArgs} args - Arguments to create a UserFavorite.
     * @example
     * // Create one UserFavorite
     * const UserFavorite = await prisma.userFavorite.create({
     *   data: {
     *     // ... data to create a UserFavorite
     *   }
     * })
     * 
     */
    create<T extends UserFavoriteCreateArgs>(args: SelectSubset<T, UserFavoriteCreateArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserFavorites.
     * @param {UserFavoriteCreateManyArgs} args - Arguments to create many UserFavorites.
     * @example
     * // Create many UserFavorites
     * const userFavorite = await prisma.userFavorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserFavoriteCreateManyArgs>(args?: SelectSubset<T, UserFavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserFavorites and returns the data saved in the database.
     * @param {UserFavoriteCreateManyAndReturnArgs} args - Arguments to create many UserFavorites.
     * @example
     * // Create many UserFavorites
     * const userFavorite = await prisma.userFavorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserFavorites and only return the `id`
     * const userFavoriteWithIdOnly = await prisma.userFavorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserFavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, UserFavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserFavorite.
     * @param {UserFavoriteDeleteArgs} args - Arguments to delete one UserFavorite.
     * @example
     * // Delete one UserFavorite
     * const UserFavorite = await prisma.userFavorite.delete({
     *   where: {
     *     // ... filter to delete one UserFavorite
     *   }
     * })
     * 
     */
    delete<T extends UserFavoriteDeleteArgs>(args: SelectSubset<T, UserFavoriteDeleteArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserFavorite.
     * @param {UserFavoriteUpdateArgs} args - Arguments to update one UserFavorite.
     * @example
     * // Update one UserFavorite
     * const userFavorite = await prisma.userFavorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserFavoriteUpdateArgs>(args: SelectSubset<T, UserFavoriteUpdateArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserFavorites.
     * @param {UserFavoriteDeleteManyArgs} args - Arguments to filter UserFavorites to delete.
     * @example
     * // Delete a few UserFavorites
     * const { count } = await prisma.userFavorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserFavoriteDeleteManyArgs>(args?: SelectSubset<T, UserFavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFavorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFavorites
     * const userFavorite = await prisma.userFavorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserFavoriteUpdateManyArgs>(args: SelectSubset<T, UserFavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFavorites and returns the data updated in the database.
     * @param {UserFavoriteUpdateManyAndReturnArgs} args - Arguments to update many UserFavorites.
     * @example
     * // Update many UserFavorites
     * const userFavorite = await prisma.userFavorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserFavorites and only return the `id`
     * const userFavoriteWithIdOnly = await prisma.userFavorite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserFavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, UserFavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserFavorite.
     * @param {UserFavoriteUpsertArgs} args - Arguments to update or create a UserFavorite.
     * @example
     * // Update or create a UserFavorite
     * const userFavorite = await prisma.userFavorite.upsert({
     *   create: {
     *     // ... data to create a UserFavorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFavorite we want to update
     *   }
     * })
     */
    upsert<T extends UserFavoriteUpsertArgs>(args: SelectSubset<T, UserFavoriteUpsertArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserFavorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteCountArgs} args - Arguments to filter UserFavorites to count.
     * @example
     * // Count the number of UserFavorites
     * const count = await prisma.userFavorite.count({
     *   where: {
     *     // ... the filter for the UserFavorites we want to count
     *   }
     * })
    **/
    count<T extends UserFavoriteCountArgs>(
      args?: Subset<T, UserFavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFavorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserFavoriteAggregateArgs>(args: Subset<T, UserFavoriteAggregateArgs>): Prisma.PrismaPromise<GetUserFavoriteAggregateType<T>>

    /**
     * Group by UserFavorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteGroupByArgs} args - Group by arguments.
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
      T extends UserFavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFavoriteGroupByArgs['orderBy'] }
        : { orderBy?: UserFavoriteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserFavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFavorite model
   */
  readonly fields: UserFavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFavorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    troutStocking<T extends UserFavorite$troutStockingArgs<ExtArgs> = {}>(args?: Subset<T, UserFavorite$troutStockingArgs<ExtArgs>>): Prisma__TroutStockingClient<$Result.GetResult<Prisma.$TroutStockingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parkInfo<T extends UserFavorite$parkInfoArgs<ExtArgs> = {}>(args?: Subset<T, UserFavorite$parkInfoArgs<ExtArgs>>): Prisma__ParkInfoClient<$Result.GetResult<Prisma.$ParkInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    event<T extends UserFavorite$eventArgs<ExtArgs> = {}>(args?: Subset<T, UserFavorite$eventArgs<ExtArgs>>): Prisma__OutdoorEventClient<$Result.GetResult<Prisma.$OutdoorEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserFavorite model
   */
  interface UserFavoriteFieldRefs {
    readonly id: FieldRef<"UserFavorite", 'String'>
    readonly userId: FieldRef<"UserFavorite", 'String'>
    readonly troutStockingId: FieldRef<"UserFavorite", 'String'>
    readonly parkInfoId: FieldRef<"UserFavorite", 'String'>
    readonly eventId: FieldRef<"UserFavorite", 'String'>
    readonly customLocation: FieldRef<"UserFavorite", 'String'>
    readonly latitude: FieldRef<"UserFavorite", 'Float'>
    readonly longitude: FieldRef<"UserFavorite", 'Float'>
    readonly notes: FieldRef<"UserFavorite", 'String'>
    readonly createdAt: FieldRef<"UserFavorite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserFavorite findUnique
   */
  export type UserFavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorite to fetch.
     */
    where: UserFavoriteWhereUniqueInput
  }

  /**
   * UserFavorite findUniqueOrThrow
   */
  export type UserFavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorite to fetch.
     */
    where: UserFavoriteWhereUniqueInput
  }

  /**
   * UserFavorite findFirst
   */
  export type UserFavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorite to fetch.
     */
    where?: UserFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavorites to fetch.
     */
    orderBy?: UserFavoriteOrderByWithRelationInput | UserFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFavorites.
     */
    cursor?: UserFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFavorites.
     */
    distinct?: UserFavoriteScalarFieldEnum | UserFavoriteScalarFieldEnum[]
  }

  /**
   * UserFavorite findFirstOrThrow
   */
  export type UserFavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorite to fetch.
     */
    where?: UserFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavorites to fetch.
     */
    orderBy?: UserFavoriteOrderByWithRelationInput | UserFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFavorites.
     */
    cursor?: UserFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFavorites.
     */
    distinct?: UserFavoriteScalarFieldEnum | UserFavoriteScalarFieldEnum[]
  }

  /**
   * UserFavorite findMany
   */
  export type UserFavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorites to fetch.
     */
    where?: UserFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavorites to fetch.
     */
    orderBy?: UserFavoriteOrderByWithRelationInput | UserFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFavorites.
     */
    cursor?: UserFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavorites.
     */
    skip?: number
    distinct?: UserFavoriteScalarFieldEnum | UserFavoriteScalarFieldEnum[]
  }

  /**
   * UserFavorite create
   */
  export type UserFavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a UserFavorite.
     */
    data: XOR<UserFavoriteCreateInput, UserFavoriteUncheckedCreateInput>
  }

  /**
   * UserFavorite createMany
   */
  export type UserFavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFavorites.
     */
    data: UserFavoriteCreateManyInput | UserFavoriteCreateManyInput[]
  }

  /**
   * UserFavorite createManyAndReturn
   */
  export type UserFavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many UserFavorites.
     */
    data: UserFavoriteCreateManyInput | UserFavoriteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFavorite update
   */
  export type UserFavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a UserFavorite.
     */
    data: XOR<UserFavoriteUpdateInput, UserFavoriteUncheckedUpdateInput>
    /**
     * Choose, which UserFavorite to update.
     */
    where: UserFavoriteWhereUniqueInput
  }

  /**
   * UserFavorite updateMany
   */
  export type UserFavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFavorites.
     */
    data: XOR<UserFavoriteUpdateManyMutationInput, UserFavoriteUncheckedUpdateManyInput>
    /**
     * Filter which UserFavorites to update
     */
    where?: UserFavoriteWhereInput
    /**
     * Limit how many UserFavorites to update.
     */
    limit?: number
  }

  /**
   * UserFavorite updateManyAndReturn
   */
  export type UserFavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * The data used to update UserFavorites.
     */
    data: XOR<UserFavoriteUpdateManyMutationInput, UserFavoriteUncheckedUpdateManyInput>
    /**
     * Filter which UserFavorites to update
     */
    where?: UserFavoriteWhereInput
    /**
     * Limit how many UserFavorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFavorite upsert
   */
  export type UserFavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the UserFavorite to update in case it exists.
     */
    where: UserFavoriteWhereUniqueInput
    /**
     * In case the UserFavorite found by the `where` argument doesn't exist, create a new UserFavorite with this data.
     */
    create: XOR<UserFavoriteCreateInput, UserFavoriteUncheckedCreateInput>
    /**
     * In case the UserFavorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFavoriteUpdateInput, UserFavoriteUncheckedUpdateInput>
  }

  /**
   * UserFavorite delete
   */
  export type UserFavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * Filter which UserFavorite to delete.
     */
    where: UserFavoriteWhereUniqueInput
  }

  /**
   * UserFavorite deleteMany
   */
  export type UserFavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFavorites to delete
     */
    where?: UserFavoriteWhereInput
    /**
     * Limit how many UserFavorites to delete.
     */
    limit?: number
  }

  /**
   * UserFavorite.troutStocking
   */
  export type UserFavorite$troutStockingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TroutStocking
     */
    select?: TroutStockingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TroutStocking
     */
    omit?: TroutStockingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TroutStockingInclude<ExtArgs> | null
    where?: TroutStockingWhereInput
  }

  /**
   * UserFavorite.parkInfo
   */
  export type UserFavorite$parkInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkInfo
     */
    select?: ParkInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkInfo
     */
    omit?: ParkInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkInfoInclude<ExtArgs> | null
    where?: ParkInfoWhereInput
  }

  /**
   * UserFavorite.event
   */
  export type UserFavorite$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutdoorEvent
     */
    select?: OutdoorEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutdoorEvent
     */
    omit?: OutdoorEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutdoorEventInclude<ExtArgs> | null
    where?: OutdoorEventWhereInput
  }

  /**
   * UserFavorite without action
   */
  export type UserFavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
  }


  /**
   * Model TripPlan
   */

  export type AggregateTripPlan = {
    _count: TripPlanCountAggregateOutputType | null
    _avg: TripPlanAvgAggregateOutputType | null
    _sum: TripPlanSumAggregateOutputType | null
    _min: TripPlanMinAggregateOutputType | null
    _max: TripPlanMaxAggregateOutputType | null
  }

  export type TripPlanAvgAggregateOutputType = {
    participants: number | null
  }

  export type TripPlanSumAggregateOutputType = {
    participants: number | null
  }

  export type TripPlanMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    participants: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripPlanMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    participants: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripPlanCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    startDate: number
    endDate: number
    participants: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TripPlanAvgAggregateInputType = {
    participants?: true
  }

  export type TripPlanSumAggregateInputType = {
    participants?: true
  }

  export type TripPlanMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    participants?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripPlanMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    participants?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripPlanCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    participants?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TripPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripPlan to aggregate.
     */
    where?: TripPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlans to fetch.
     */
    orderBy?: TripPlanOrderByWithRelationInput | TripPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripPlans
    **/
    _count?: true | TripPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripPlanMaxAggregateInputType
  }

  export type GetTripPlanAggregateType<T extends TripPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateTripPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripPlan[P]>
      : GetScalarType<T[P], AggregateTripPlan[P]>
  }




  export type TripPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripPlanWhereInput
    orderBy?: TripPlanOrderByWithAggregationInput | TripPlanOrderByWithAggregationInput[]
    by: TripPlanScalarFieldEnum[] | TripPlanScalarFieldEnum
    having?: TripPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripPlanCountAggregateInputType | true
    _avg?: TripPlanAvgAggregateInputType
    _sum?: TripPlanSumAggregateInputType
    _min?: TripPlanMinAggregateInputType
    _max?: TripPlanMaxAggregateInputType
  }

  export type TripPlanGroupByOutputType = {
    id: string
    userId: string
    title: string
    description: string | null
    startDate: Date
    endDate: Date | null
    participants: number
    createdAt: Date
    updatedAt: Date
    _count: TripPlanCountAggregateOutputType | null
    _avg: TripPlanAvgAggregateOutputType | null
    _sum: TripPlanSumAggregateOutputType | null
    _min: TripPlanMinAggregateOutputType | null
    _max: TripPlanMaxAggregateOutputType | null
  }

  type GetTripPlanGroupByPayload<T extends TripPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripPlanGroupByOutputType[P]>
            : GetScalarType<T[P], TripPlanGroupByOutputType[P]>
        }
      >
    >


  export type TripPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    participants?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | TripPlan$itemsArgs<ExtArgs>
    _count?: boolean | TripPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripPlan"]>

  export type TripPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    participants?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripPlan"]>

  export type TripPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    participants?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripPlan"]>

  export type TripPlanSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    participants?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TripPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "description" | "startDate" | "endDate" | "participants" | "createdAt" | "updatedAt", ExtArgs["result"]["tripPlan"]>
  export type TripPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | TripPlan$itemsArgs<ExtArgs>
    _count?: boolean | TripPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TripPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TripPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TripPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripPlan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$TripPlanItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      description: string | null
      startDate: Date
      endDate: Date | null
      participants: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tripPlan"]>
    composites: {}
  }

  type TripPlanGetPayload<S extends boolean | null | undefined | TripPlanDefaultArgs> = $Result.GetResult<Prisma.$TripPlanPayload, S>

  type TripPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripPlanCountAggregateInputType | true
    }

  export interface TripPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripPlan'], meta: { name: 'TripPlan' } }
    /**
     * Find zero or one TripPlan that matches the filter.
     * @param {TripPlanFindUniqueArgs} args - Arguments to find a TripPlan
     * @example
     * // Get one TripPlan
     * const tripPlan = await prisma.tripPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripPlanFindUniqueArgs>(args: SelectSubset<T, TripPlanFindUniqueArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TripPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripPlanFindUniqueOrThrowArgs} args - Arguments to find a TripPlan
     * @example
     * // Get one TripPlan
     * const tripPlan = await prisma.tripPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, TripPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanFindFirstArgs} args - Arguments to find a TripPlan
     * @example
     * // Get one TripPlan
     * const tripPlan = await prisma.tripPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripPlanFindFirstArgs>(args?: SelectSubset<T, TripPlanFindFirstArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanFindFirstOrThrowArgs} args - Arguments to find a TripPlan
     * @example
     * // Get one TripPlan
     * const tripPlan = await prisma.tripPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, TripPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TripPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripPlans
     * const tripPlans = await prisma.tripPlan.findMany()
     * 
     * // Get first 10 TripPlans
     * const tripPlans = await prisma.tripPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripPlanWithIdOnly = await prisma.tripPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripPlanFindManyArgs>(args?: SelectSubset<T, TripPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TripPlan.
     * @param {TripPlanCreateArgs} args - Arguments to create a TripPlan.
     * @example
     * // Create one TripPlan
     * const TripPlan = await prisma.tripPlan.create({
     *   data: {
     *     // ... data to create a TripPlan
     *   }
     * })
     * 
     */
    create<T extends TripPlanCreateArgs>(args: SelectSubset<T, TripPlanCreateArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TripPlans.
     * @param {TripPlanCreateManyArgs} args - Arguments to create many TripPlans.
     * @example
     * // Create many TripPlans
     * const tripPlan = await prisma.tripPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripPlanCreateManyArgs>(args?: SelectSubset<T, TripPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripPlans and returns the data saved in the database.
     * @param {TripPlanCreateManyAndReturnArgs} args - Arguments to create many TripPlans.
     * @example
     * // Create many TripPlans
     * const tripPlan = await prisma.tripPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripPlans and only return the `id`
     * const tripPlanWithIdOnly = await prisma.tripPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, TripPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TripPlan.
     * @param {TripPlanDeleteArgs} args - Arguments to delete one TripPlan.
     * @example
     * // Delete one TripPlan
     * const TripPlan = await prisma.tripPlan.delete({
     *   where: {
     *     // ... filter to delete one TripPlan
     *   }
     * })
     * 
     */
    delete<T extends TripPlanDeleteArgs>(args: SelectSubset<T, TripPlanDeleteArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TripPlan.
     * @param {TripPlanUpdateArgs} args - Arguments to update one TripPlan.
     * @example
     * // Update one TripPlan
     * const tripPlan = await prisma.tripPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripPlanUpdateArgs>(args: SelectSubset<T, TripPlanUpdateArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TripPlans.
     * @param {TripPlanDeleteManyArgs} args - Arguments to filter TripPlans to delete.
     * @example
     * // Delete a few TripPlans
     * const { count } = await prisma.tripPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripPlanDeleteManyArgs>(args?: SelectSubset<T, TripPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripPlans
     * const tripPlan = await prisma.tripPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripPlanUpdateManyArgs>(args: SelectSubset<T, TripPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripPlans and returns the data updated in the database.
     * @param {TripPlanUpdateManyAndReturnArgs} args - Arguments to update many TripPlans.
     * @example
     * // Update many TripPlans
     * const tripPlan = await prisma.tripPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TripPlans and only return the `id`
     * const tripPlanWithIdOnly = await prisma.tripPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TripPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, TripPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TripPlan.
     * @param {TripPlanUpsertArgs} args - Arguments to update or create a TripPlan.
     * @example
     * // Update or create a TripPlan
     * const tripPlan = await prisma.tripPlan.upsert({
     *   create: {
     *     // ... data to create a TripPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripPlan we want to update
     *   }
     * })
     */
    upsert<T extends TripPlanUpsertArgs>(args: SelectSubset<T, TripPlanUpsertArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TripPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanCountArgs} args - Arguments to filter TripPlans to count.
     * @example
     * // Count the number of TripPlans
     * const count = await prisma.tripPlan.count({
     *   where: {
     *     // ... the filter for the TripPlans we want to count
     *   }
     * })
    **/
    count<T extends TripPlanCountArgs>(
      args?: Subset<T, TripPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripPlanAggregateArgs>(args: Subset<T, TripPlanAggregateArgs>): Prisma.PrismaPromise<GetTripPlanAggregateType<T>>

    /**
     * Group by TripPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanGroupByArgs} args - Group by arguments.
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
      T extends TripPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripPlanGroupByArgs['orderBy'] }
        : { orderBy?: TripPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TripPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripPlan model
   */
  readonly fields: TripPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends TripPlan$itemsArgs<ExtArgs> = {}>(args?: Subset<T, TripPlan$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TripPlan model
   */
  interface TripPlanFieldRefs {
    readonly id: FieldRef<"TripPlan", 'String'>
    readonly userId: FieldRef<"TripPlan", 'String'>
    readonly title: FieldRef<"TripPlan", 'String'>
    readonly description: FieldRef<"TripPlan", 'String'>
    readonly startDate: FieldRef<"TripPlan", 'DateTime'>
    readonly endDate: FieldRef<"TripPlan", 'DateTime'>
    readonly participants: FieldRef<"TripPlan", 'Int'>
    readonly createdAt: FieldRef<"TripPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"TripPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TripPlan findUnique
   */
  export type TripPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * Filter, which TripPlan to fetch.
     */
    where: TripPlanWhereUniqueInput
  }

  /**
   * TripPlan findUniqueOrThrow
   */
  export type TripPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * Filter, which TripPlan to fetch.
     */
    where: TripPlanWhereUniqueInput
  }

  /**
   * TripPlan findFirst
   */
  export type TripPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * Filter, which TripPlan to fetch.
     */
    where?: TripPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlans to fetch.
     */
    orderBy?: TripPlanOrderByWithRelationInput | TripPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripPlans.
     */
    cursor?: TripPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripPlans.
     */
    distinct?: TripPlanScalarFieldEnum | TripPlanScalarFieldEnum[]
  }

  /**
   * TripPlan findFirstOrThrow
   */
  export type TripPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * Filter, which TripPlan to fetch.
     */
    where?: TripPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlans to fetch.
     */
    orderBy?: TripPlanOrderByWithRelationInput | TripPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripPlans.
     */
    cursor?: TripPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripPlans.
     */
    distinct?: TripPlanScalarFieldEnum | TripPlanScalarFieldEnum[]
  }

  /**
   * TripPlan findMany
   */
  export type TripPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * Filter, which TripPlans to fetch.
     */
    where?: TripPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlans to fetch.
     */
    orderBy?: TripPlanOrderByWithRelationInput | TripPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripPlans.
     */
    cursor?: TripPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlans.
     */
    skip?: number
    distinct?: TripPlanScalarFieldEnum | TripPlanScalarFieldEnum[]
  }

  /**
   * TripPlan create
   */
  export type TripPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a TripPlan.
     */
    data: XOR<TripPlanCreateInput, TripPlanUncheckedCreateInput>
  }

  /**
   * TripPlan createMany
   */
  export type TripPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripPlans.
     */
    data: TripPlanCreateManyInput | TripPlanCreateManyInput[]
  }

  /**
   * TripPlan createManyAndReturn
   */
  export type TripPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * The data used to create many TripPlans.
     */
    data: TripPlanCreateManyInput | TripPlanCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripPlan update
   */
  export type TripPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a TripPlan.
     */
    data: XOR<TripPlanUpdateInput, TripPlanUncheckedUpdateInput>
    /**
     * Choose, which TripPlan to update.
     */
    where: TripPlanWhereUniqueInput
  }

  /**
   * TripPlan updateMany
   */
  export type TripPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripPlans.
     */
    data: XOR<TripPlanUpdateManyMutationInput, TripPlanUncheckedUpdateManyInput>
    /**
     * Filter which TripPlans to update
     */
    where?: TripPlanWhereInput
    /**
     * Limit how many TripPlans to update.
     */
    limit?: number
  }

  /**
   * TripPlan updateManyAndReturn
   */
  export type TripPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * The data used to update TripPlans.
     */
    data: XOR<TripPlanUpdateManyMutationInput, TripPlanUncheckedUpdateManyInput>
    /**
     * Filter which TripPlans to update
     */
    where?: TripPlanWhereInput
    /**
     * Limit how many TripPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripPlan upsert
   */
  export type TripPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the TripPlan to update in case it exists.
     */
    where: TripPlanWhereUniqueInput
    /**
     * In case the TripPlan found by the `where` argument doesn't exist, create a new TripPlan with this data.
     */
    create: XOR<TripPlanCreateInput, TripPlanUncheckedCreateInput>
    /**
     * In case the TripPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripPlanUpdateInput, TripPlanUncheckedUpdateInput>
  }

  /**
   * TripPlan delete
   */
  export type TripPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * Filter which TripPlan to delete.
     */
    where: TripPlanWhereUniqueInput
  }

  /**
   * TripPlan deleteMany
   */
  export type TripPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripPlans to delete
     */
    where?: TripPlanWhereInput
    /**
     * Limit how many TripPlans to delete.
     */
    limit?: number
  }

  /**
   * TripPlan.items
   */
  export type TripPlan$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanItem
     */
    select?: TripPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanItem
     */
    omit?: TripPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanItemInclude<ExtArgs> | null
    where?: TripPlanItemWhereInput
    orderBy?: TripPlanItemOrderByWithRelationInput | TripPlanItemOrderByWithRelationInput[]
    cursor?: TripPlanItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripPlanItemScalarFieldEnum | TripPlanItemScalarFieldEnum[]
  }

  /**
   * TripPlan without action
   */
  export type TripPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
  }


  /**
   * Model TripPlanItem
   */

  export type AggregateTripPlanItem = {
    _count: TripPlanItemCountAggregateOutputType | null
    _avg: TripPlanItemAvgAggregateOutputType | null
    _sum: TripPlanItemSumAggregateOutputType | null
    _min: TripPlanItemMinAggregateOutputType | null
    _max: TripPlanItemMaxAggregateOutputType | null
  }

  export type TripPlanItemAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    estimatedDuration: number | null
  }

  export type TripPlanItemSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    estimatedDuration: number | null
  }

  export type TripPlanItemMinAggregateOutputType = {
    id: string | null
    tripPlanId: string | null
    type: string | null
    troutStockingId: string | null
    parkInfoId: string | null
    eventId: string | null
    customTitle: string | null
    customLocation: string | null
    latitude: number | null
    longitude: number | null
    scheduledTime: Date | null
    estimatedDuration: number | null
    notes: string | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripPlanItemMaxAggregateOutputType = {
    id: string | null
    tripPlanId: string | null
    type: string | null
    troutStockingId: string | null
    parkInfoId: string | null
    eventId: string | null
    customTitle: string | null
    customLocation: string | null
    latitude: number | null
    longitude: number | null
    scheduledTime: Date | null
    estimatedDuration: number | null
    notes: string | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripPlanItemCountAggregateOutputType = {
    id: number
    tripPlanId: number
    type: number
    troutStockingId: number
    parkInfoId: number
    eventId: number
    customTitle: number
    customLocation: number
    latitude: number
    longitude: number
    scheduledTime: number
    estimatedDuration: number
    notes: number
    completed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TripPlanItemAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    estimatedDuration?: true
  }

  export type TripPlanItemSumAggregateInputType = {
    latitude?: true
    longitude?: true
    estimatedDuration?: true
  }

  export type TripPlanItemMinAggregateInputType = {
    id?: true
    tripPlanId?: true
    type?: true
    troutStockingId?: true
    parkInfoId?: true
    eventId?: true
    customTitle?: true
    customLocation?: true
    latitude?: true
    longitude?: true
    scheduledTime?: true
    estimatedDuration?: true
    notes?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripPlanItemMaxAggregateInputType = {
    id?: true
    tripPlanId?: true
    type?: true
    troutStockingId?: true
    parkInfoId?: true
    eventId?: true
    customTitle?: true
    customLocation?: true
    latitude?: true
    longitude?: true
    scheduledTime?: true
    estimatedDuration?: true
    notes?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripPlanItemCountAggregateInputType = {
    id?: true
    tripPlanId?: true
    type?: true
    troutStockingId?: true
    parkInfoId?: true
    eventId?: true
    customTitle?: true
    customLocation?: true
    latitude?: true
    longitude?: true
    scheduledTime?: true
    estimatedDuration?: true
    notes?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TripPlanItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripPlanItem to aggregate.
     */
    where?: TripPlanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlanItems to fetch.
     */
    orderBy?: TripPlanItemOrderByWithRelationInput | TripPlanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripPlanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlanItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripPlanItems
    **/
    _count?: true | TripPlanItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripPlanItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripPlanItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripPlanItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripPlanItemMaxAggregateInputType
  }

  export type GetTripPlanItemAggregateType<T extends TripPlanItemAggregateArgs> = {
        [P in keyof T & keyof AggregateTripPlanItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripPlanItem[P]>
      : GetScalarType<T[P], AggregateTripPlanItem[P]>
  }




  export type TripPlanItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripPlanItemWhereInput
    orderBy?: TripPlanItemOrderByWithAggregationInput | TripPlanItemOrderByWithAggregationInput[]
    by: TripPlanItemScalarFieldEnum[] | TripPlanItemScalarFieldEnum
    having?: TripPlanItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripPlanItemCountAggregateInputType | true
    _avg?: TripPlanItemAvgAggregateInputType
    _sum?: TripPlanItemSumAggregateInputType
    _min?: TripPlanItemMinAggregateInputType
    _max?: TripPlanItemMaxAggregateInputType
  }

  export type TripPlanItemGroupByOutputType = {
    id: string
    tripPlanId: string
    type: string
    troutStockingId: string | null
    parkInfoId: string | null
    eventId: string | null
    customTitle: string | null
    customLocation: string | null
    latitude: number | null
    longitude: number | null
    scheduledTime: Date | null
    estimatedDuration: number | null
    notes: string | null
    completed: boolean
    createdAt: Date
    updatedAt: Date
    _count: TripPlanItemCountAggregateOutputType | null
    _avg: TripPlanItemAvgAggregateOutputType | null
    _sum: TripPlanItemSumAggregateOutputType | null
    _min: TripPlanItemMinAggregateOutputType | null
    _max: TripPlanItemMaxAggregateOutputType | null
  }

  type GetTripPlanItemGroupByPayload<T extends TripPlanItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripPlanItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripPlanItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripPlanItemGroupByOutputType[P]>
            : GetScalarType<T[P], TripPlanItemGroupByOutputType[P]>
        }
      >
    >


  export type TripPlanItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripPlanId?: boolean
    type?: boolean
    troutStockingId?: boolean
    parkInfoId?: boolean
    eventId?: boolean
    customTitle?: boolean
    customLocation?: boolean
    latitude?: boolean
    longitude?: boolean
    scheduledTime?: boolean
    estimatedDuration?: boolean
    notes?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tripPlan?: boolean | TripPlanDefaultArgs<ExtArgs>
    troutStocking?: boolean | TripPlanItem$troutStockingArgs<ExtArgs>
    parkInfo?: boolean | TripPlanItem$parkInfoArgs<ExtArgs>
    event?: boolean | TripPlanItem$eventArgs<ExtArgs>
  }, ExtArgs["result"]["tripPlanItem"]>

  export type TripPlanItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripPlanId?: boolean
    type?: boolean
    troutStockingId?: boolean
    parkInfoId?: boolean
    eventId?: boolean
    customTitle?: boolean
    customLocation?: boolean
    latitude?: boolean
    longitude?: boolean
    scheduledTime?: boolean
    estimatedDuration?: boolean
    notes?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tripPlan?: boolean | TripPlanDefaultArgs<ExtArgs>
    troutStocking?: boolean | TripPlanItem$troutStockingArgs<ExtArgs>
    parkInfo?: boolean | TripPlanItem$parkInfoArgs<ExtArgs>
    event?: boolean | TripPlanItem$eventArgs<ExtArgs>
  }, ExtArgs["result"]["tripPlanItem"]>

  export type TripPlanItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripPlanId?: boolean
    type?: boolean
    troutStockingId?: boolean
    parkInfoId?: boolean
    eventId?: boolean
    customTitle?: boolean
    customLocation?: boolean
    latitude?: boolean
    longitude?: boolean
    scheduledTime?: boolean
    estimatedDuration?: boolean
    notes?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tripPlan?: boolean | TripPlanDefaultArgs<ExtArgs>
    troutStocking?: boolean | TripPlanItem$troutStockingArgs<ExtArgs>
    parkInfo?: boolean | TripPlanItem$parkInfoArgs<ExtArgs>
    event?: boolean | TripPlanItem$eventArgs<ExtArgs>
  }, ExtArgs["result"]["tripPlanItem"]>

  export type TripPlanItemSelectScalar = {
    id?: boolean
    tripPlanId?: boolean
    type?: boolean
    troutStockingId?: boolean
    parkInfoId?: boolean
    eventId?: boolean
    customTitle?: boolean
    customLocation?: boolean
    latitude?: boolean
    longitude?: boolean
    scheduledTime?: boolean
    estimatedDuration?: boolean
    notes?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TripPlanItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripPlanId" | "type" | "troutStockingId" | "parkInfoId" | "eventId" | "customTitle" | "customLocation" | "latitude" | "longitude" | "scheduledTime" | "estimatedDuration" | "notes" | "completed" | "createdAt" | "updatedAt", ExtArgs["result"]["tripPlanItem"]>
  export type TripPlanItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tripPlan?: boolean | TripPlanDefaultArgs<ExtArgs>
    troutStocking?: boolean | TripPlanItem$troutStockingArgs<ExtArgs>
    parkInfo?: boolean | TripPlanItem$parkInfoArgs<ExtArgs>
    event?: boolean | TripPlanItem$eventArgs<ExtArgs>
  }
  export type TripPlanItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tripPlan?: boolean | TripPlanDefaultArgs<ExtArgs>
    troutStocking?: boolean | TripPlanItem$troutStockingArgs<ExtArgs>
    parkInfo?: boolean | TripPlanItem$parkInfoArgs<ExtArgs>
    event?: boolean | TripPlanItem$eventArgs<ExtArgs>
  }
  export type TripPlanItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tripPlan?: boolean | TripPlanDefaultArgs<ExtArgs>
    troutStocking?: boolean | TripPlanItem$troutStockingArgs<ExtArgs>
    parkInfo?: boolean | TripPlanItem$parkInfoArgs<ExtArgs>
    event?: boolean | TripPlanItem$eventArgs<ExtArgs>
  }

  export type $TripPlanItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripPlanItem"
    objects: {
      tripPlan: Prisma.$TripPlanPayload<ExtArgs>
      troutStocking: Prisma.$TroutStockingPayload<ExtArgs> | null
      parkInfo: Prisma.$ParkInfoPayload<ExtArgs> | null
      event: Prisma.$OutdoorEventPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripPlanId: string
      type: string
      troutStockingId: string | null
      parkInfoId: string | null
      eventId: string | null
      customTitle: string | null
      customLocation: string | null
      latitude: number | null
      longitude: number | null
      scheduledTime: Date | null
      estimatedDuration: number | null
      notes: string | null
      completed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tripPlanItem"]>
    composites: {}
  }

  type TripPlanItemGetPayload<S extends boolean | null | undefined | TripPlanItemDefaultArgs> = $Result.GetResult<Prisma.$TripPlanItemPayload, S>

  type TripPlanItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripPlanItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripPlanItemCountAggregateInputType | true
    }

  export interface TripPlanItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripPlanItem'], meta: { name: 'TripPlanItem' } }
    /**
     * Find zero or one TripPlanItem that matches the filter.
     * @param {TripPlanItemFindUniqueArgs} args - Arguments to find a TripPlanItem
     * @example
     * // Get one TripPlanItem
     * const tripPlanItem = await prisma.tripPlanItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripPlanItemFindUniqueArgs>(args: SelectSubset<T, TripPlanItemFindUniqueArgs<ExtArgs>>): Prisma__TripPlanItemClient<$Result.GetResult<Prisma.$TripPlanItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TripPlanItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripPlanItemFindUniqueOrThrowArgs} args - Arguments to find a TripPlanItem
     * @example
     * // Get one TripPlanItem
     * const tripPlanItem = await prisma.tripPlanItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripPlanItemFindUniqueOrThrowArgs>(args: SelectSubset<T, TripPlanItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripPlanItemClient<$Result.GetResult<Prisma.$TripPlanItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripPlanItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanItemFindFirstArgs} args - Arguments to find a TripPlanItem
     * @example
     * // Get one TripPlanItem
     * const tripPlanItem = await prisma.tripPlanItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripPlanItemFindFirstArgs>(args?: SelectSubset<T, TripPlanItemFindFirstArgs<ExtArgs>>): Prisma__TripPlanItemClient<$Result.GetResult<Prisma.$TripPlanItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripPlanItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanItemFindFirstOrThrowArgs} args - Arguments to find a TripPlanItem
     * @example
     * // Get one TripPlanItem
     * const tripPlanItem = await prisma.tripPlanItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripPlanItemFindFirstOrThrowArgs>(args?: SelectSubset<T, TripPlanItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripPlanItemClient<$Result.GetResult<Prisma.$TripPlanItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TripPlanItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripPlanItems
     * const tripPlanItems = await prisma.tripPlanItem.findMany()
     * 
     * // Get first 10 TripPlanItems
     * const tripPlanItems = await prisma.tripPlanItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripPlanItemWithIdOnly = await prisma.tripPlanItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripPlanItemFindManyArgs>(args?: SelectSubset<T, TripPlanItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TripPlanItem.
     * @param {TripPlanItemCreateArgs} args - Arguments to create a TripPlanItem.
     * @example
     * // Create one TripPlanItem
     * const TripPlanItem = await prisma.tripPlanItem.create({
     *   data: {
     *     // ... data to create a TripPlanItem
     *   }
     * })
     * 
     */
    create<T extends TripPlanItemCreateArgs>(args: SelectSubset<T, TripPlanItemCreateArgs<ExtArgs>>): Prisma__TripPlanItemClient<$Result.GetResult<Prisma.$TripPlanItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TripPlanItems.
     * @param {TripPlanItemCreateManyArgs} args - Arguments to create many TripPlanItems.
     * @example
     * // Create many TripPlanItems
     * const tripPlanItem = await prisma.tripPlanItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripPlanItemCreateManyArgs>(args?: SelectSubset<T, TripPlanItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripPlanItems and returns the data saved in the database.
     * @param {TripPlanItemCreateManyAndReturnArgs} args - Arguments to create many TripPlanItems.
     * @example
     * // Create many TripPlanItems
     * const tripPlanItem = await prisma.tripPlanItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripPlanItems and only return the `id`
     * const tripPlanItemWithIdOnly = await prisma.tripPlanItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripPlanItemCreateManyAndReturnArgs>(args?: SelectSubset<T, TripPlanItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TripPlanItem.
     * @param {TripPlanItemDeleteArgs} args - Arguments to delete one TripPlanItem.
     * @example
     * // Delete one TripPlanItem
     * const TripPlanItem = await prisma.tripPlanItem.delete({
     *   where: {
     *     // ... filter to delete one TripPlanItem
     *   }
     * })
     * 
     */
    delete<T extends TripPlanItemDeleteArgs>(args: SelectSubset<T, TripPlanItemDeleteArgs<ExtArgs>>): Prisma__TripPlanItemClient<$Result.GetResult<Prisma.$TripPlanItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TripPlanItem.
     * @param {TripPlanItemUpdateArgs} args - Arguments to update one TripPlanItem.
     * @example
     * // Update one TripPlanItem
     * const tripPlanItem = await prisma.tripPlanItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripPlanItemUpdateArgs>(args: SelectSubset<T, TripPlanItemUpdateArgs<ExtArgs>>): Prisma__TripPlanItemClient<$Result.GetResult<Prisma.$TripPlanItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TripPlanItems.
     * @param {TripPlanItemDeleteManyArgs} args - Arguments to filter TripPlanItems to delete.
     * @example
     * // Delete a few TripPlanItems
     * const { count } = await prisma.tripPlanItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripPlanItemDeleteManyArgs>(args?: SelectSubset<T, TripPlanItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripPlanItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripPlanItems
     * const tripPlanItem = await prisma.tripPlanItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripPlanItemUpdateManyArgs>(args: SelectSubset<T, TripPlanItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripPlanItems and returns the data updated in the database.
     * @param {TripPlanItemUpdateManyAndReturnArgs} args - Arguments to update many TripPlanItems.
     * @example
     * // Update many TripPlanItems
     * const tripPlanItem = await prisma.tripPlanItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TripPlanItems and only return the `id`
     * const tripPlanItemWithIdOnly = await prisma.tripPlanItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TripPlanItemUpdateManyAndReturnArgs>(args: SelectSubset<T, TripPlanItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TripPlanItem.
     * @param {TripPlanItemUpsertArgs} args - Arguments to update or create a TripPlanItem.
     * @example
     * // Update or create a TripPlanItem
     * const tripPlanItem = await prisma.tripPlanItem.upsert({
     *   create: {
     *     // ... data to create a TripPlanItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripPlanItem we want to update
     *   }
     * })
     */
    upsert<T extends TripPlanItemUpsertArgs>(args: SelectSubset<T, TripPlanItemUpsertArgs<ExtArgs>>): Prisma__TripPlanItemClient<$Result.GetResult<Prisma.$TripPlanItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TripPlanItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanItemCountArgs} args - Arguments to filter TripPlanItems to count.
     * @example
     * // Count the number of TripPlanItems
     * const count = await prisma.tripPlanItem.count({
     *   where: {
     *     // ... the filter for the TripPlanItems we want to count
     *   }
     * })
    **/
    count<T extends TripPlanItemCountArgs>(
      args?: Subset<T, TripPlanItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripPlanItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripPlanItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripPlanItemAggregateArgs>(args: Subset<T, TripPlanItemAggregateArgs>): Prisma.PrismaPromise<GetTripPlanItemAggregateType<T>>

    /**
     * Group by TripPlanItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanItemGroupByArgs} args - Group by arguments.
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
      T extends TripPlanItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripPlanItemGroupByArgs['orderBy'] }
        : { orderBy?: TripPlanItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TripPlanItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripPlanItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripPlanItem model
   */
  readonly fields: TripPlanItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripPlanItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripPlanItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tripPlan<T extends TripPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripPlanDefaultArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    troutStocking<T extends TripPlanItem$troutStockingArgs<ExtArgs> = {}>(args?: Subset<T, TripPlanItem$troutStockingArgs<ExtArgs>>): Prisma__TroutStockingClient<$Result.GetResult<Prisma.$TroutStockingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parkInfo<T extends TripPlanItem$parkInfoArgs<ExtArgs> = {}>(args?: Subset<T, TripPlanItem$parkInfoArgs<ExtArgs>>): Prisma__ParkInfoClient<$Result.GetResult<Prisma.$ParkInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    event<T extends TripPlanItem$eventArgs<ExtArgs> = {}>(args?: Subset<T, TripPlanItem$eventArgs<ExtArgs>>): Prisma__OutdoorEventClient<$Result.GetResult<Prisma.$OutdoorEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TripPlanItem model
   */
  interface TripPlanItemFieldRefs {
    readonly id: FieldRef<"TripPlanItem", 'String'>
    readonly tripPlanId: FieldRef<"TripPlanItem", 'String'>
    readonly type: FieldRef<"TripPlanItem", 'String'>
    readonly troutStockingId: FieldRef<"TripPlanItem", 'String'>
    readonly parkInfoId: FieldRef<"TripPlanItem", 'String'>
    readonly eventId: FieldRef<"TripPlanItem", 'String'>
    readonly customTitle: FieldRef<"TripPlanItem", 'String'>
    readonly customLocation: FieldRef<"TripPlanItem", 'String'>
    readonly latitude: FieldRef<"TripPlanItem", 'Float'>
    readonly longitude: FieldRef<"TripPlanItem", 'Float'>
    readonly scheduledTime: FieldRef<"TripPlanItem", 'DateTime'>
    readonly estimatedDuration: FieldRef<"TripPlanItem", 'Int'>
    readonly notes: FieldRef<"TripPlanItem", 'String'>
    readonly completed: FieldRef<"TripPlanItem", 'Boolean'>
    readonly createdAt: FieldRef<"TripPlanItem", 'DateTime'>
    readonly updatedAt: FieldRef<"TripPlanItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TripPlanItem findUnique
   */
  export type TripPlanItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanItem
     */
    select?: TripPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanItem
     */
    omit?: TripPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanItemInclude<ExtArgs> | null
    /**
     * Filter, which TripPlanItem to fetch.
     */
    where: TripPlanItemWhereUniqueInput
  }

  /**
   * TripPlanItem findUniqueOrThrow
   */
  export type TripPlanItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanItem
     */
    select?: TripPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanItem
     */
    omit?: TripPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanItemInclude<ExtArgs> | null
    /**
     * Filter, which TripPlanItem to fetch.
     */
    where: TripPlanItemWhereUniqueInput
  }

  /**
   * TripPlanItem findFirst
   */
  export type TripPlanItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanItem
     */
    select?: TripPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanItem
     */
    omit?: TripPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanItemInclude<ExtArgs> | null
    /**
     * Filter, which TripPlanItem to fetch.
     */
    where?: TripPlanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlanItems to fetch.
     */
    orderBy?: TripPlanItemOrderByWithRelationInput | TripPlanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripPlanItems.
     */
    cursor?: TripPlanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlanItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripPlanItems.
     */
    distinct?: TripPlanItemScalarFieldEnum | TripPlanItemScalarFieldEnum[]
  }

  /**
   * TripPlanItem findFirstOrThrow
   */
  export type TripPlanItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanItem
     */
    select?: TripPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanItem
     */
    omit?: TripPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanItemInclude<ExtArgs> | null
    /**
     * Filter, which TripPlanItem to fetch.
     */
    where?: TripPlanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlanItems to fetch.
     */
    orderBy?: TripPlanItemOrderByWithRelationInput | TripPlanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripPlanItems.
     */
    cursor?: TripPlanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlanItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripPlanItems.
     */
    distinct?: TripPlanItemScalarFieldEnum | TripPlanItemScalarFieldEnum[]
  }

  /**
   * TripPlanItem findMany
   */
  export type TripPlanItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanItem
     */
    select?: TripPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanItem
     */
    omit?: TripPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanItemInclude<ExtArgs> | null
    /**
     * Filter, which TripPlanItems to fetch.
     */
    where?: TripPlanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlanItems to fetch.
     */
    orderBy?: TripPlanItemOrderByWithRelationInput | TripPlanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripPlanItems.
     */
    cursor?: TripPlanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlanItems.
     */
    skip?: number
    distinct?: TripPlanItemScalarFieldEnum | TripPlanItemScalarFieldEnum[]
  }

  /**
   * TripPlanItem create
   */
  export type TripPlanItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanItem
     */
    select?: TripPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanItem
     */
    omit?: TripPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanItemInclude<ExtArgs> | null
    /**
     * The data needed to create a TripPlanItem.
     */
    data: XOR<TripPlanItemCreateInput, TripPlanItemUncheckedCreateInput>
  }

  /**
   * TripPlanItem createMany
   */
  export type TripPlanItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripPlanItems.
     */
    data: TripPlanItemCreateManyInput | TripPlanItemCreateManyInput[]
  }

  /**
   * TripPlanItem createManyAndReturn
   */
  export type TripPlanItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanItem
     */
    select?: TripPlanItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanItem
     */
    omit?: TripPlanItemOmit<ExtArgs> | null
    /**
     * The data used to create many TripPlanItems.
     */
    data: TripPlanItemCreateManyInput | TripPlanItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripPlanItem update
   */
  export type TripPlanItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanItem
     */
    select?: TripPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanItem
     */
    omit?: TripPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanItemInclude<ExtArgs> | null
    /**
     * The data needed to update a TripPlanItem.
     */
    data: XOR<TripPlanItemUpdateInput, TripPlanItemUncheckedUpdateInput>
    /**
     * Choose, which TripPlanItem to update.
     */
    where: TripPlanItemWhereUniqueInput
  }

  /**
   * TripPlanItem updateMany
   */
  export type TripPlanItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripPlanItems.
     */
    data: XOR<TripPlanItemUpdateManyMutationInput, TripPlanItemUncheckedUpdateManyInput>
    /**
     * Filter which TripPlanItems to update
     */
    where?: TripPlanItemWhereInput
    /**
     * Limit how many TripPlanItems to update.
     */
    limit?: number
  }

  /**
   * TripPlanItem updateManyAndReturn
   */
  export type TripPlanItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanItem
     */
    select?: TripPlanItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanItem
     */
    omit?: TripPlanItemOmit<ExtArgs> | null
    /**
     * The data used to update TripPlanItems.
     */
    data: XOR<TripPlanItemUpdateManyMutationInput, TripPlanItemUncheckedUpdateManyInput>
    /**
     * Filter which TripPlanItems to update
     */
    where?: TripPlanItemWhereInput
    /**
     * Limit how many TripPlanItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripPlanItem upsert
   */
  export type TripPlanItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanItem
     */
    select?: TripPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanItem
     */
    omit?: TripPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanItemInclude<ExtArgs> | null
    /**
     * The filter to search for the TripPlanItem to update in case it exists.
     */
    where: TripPlanItemWhereUniqueInput
    /**
     * In case the TripPlanItem found by the `where` argument doesn't exist, create a new TripPlanItem with this data.
     */
    create: XOR<TripPlanItemCreateInput, TripPlanItemUncheckedCreateInput>
    /**
     * In case the TripPlanItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripPlanItemUpdateInput, TripPlanItemUncheckedUpdateInput>
  }

  /**
   * TripPlanItem delete
   */
  export type TripPlanItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanItem
     */
    select?: TripPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanItem
     */
    omit?: TripPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanItemInclude<ExtArgs> | null
    /**
     * Filter which TripPlanItem to delete.
     */
    where: TripPlanItemWhereUniqueInput
  }

  /**
   * TripPlanItem deleteMany
   */
  export type TripPlanItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripPlanItems to delete
     */
    where?: TripPlanItemWhereInput
    /**
     * Limit how many TripPlanItems to delete.
     */
    limit?: number
  }

  /**
   * TripPlanItem.troutStocking
   */
  export type TripPlanItem$troutStockingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TroutStocking
     */
    select?: TroutStockingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TroutStocking
     */
    omit?: TroutStockingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TroutStockingInclude<ExtArgs> | null
    where?: TroutStockingWhereInput
  }

  /**
   * TripPlanItem.parkInfo
   */
  export type TripPlanItem$parkInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkInfo
     */
    select?: ParkInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkInfo
     */
    omit?: ParkInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkInfoInclude<ExtArgs> | null
    where?: ParkInfoWhereInput
  }

  /**
   * TripPlanItem.event
   */
  export type TripPlanItem$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutdoorEvent
     */
    select?: OutdoorEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutdoorEvent
     */
    omit?: OutdoorEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutdoorEventInclude<ExtArgs> | null
    where?: OutdoorEventWhereInput
  }

  /**
   * TripPlanItem without action
   */
  export type TripPlanItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlanItem
     */
    select?: TripPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlanItem
     */
    omit?: TripPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanItemInclude<ExtArgs> | null
  }


  /**
   * Model UserSubscription
   */

  export type AggregateUserSubscription = {
    _count: UserSubscriptionCountAggregateOutputType | null
    _min: UserSubscriptionMinAggregateOutputType | null
    _max: UserSubscriptionMaxAggregateOutputType | null
  }

  export type UserSubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    value: string | null
    notifyEmail: boolean | null
    notifyPush: boolean | null
    createdAt: Date | null
  }

  export type UserSubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    value: string | null
    notifyEmail: boolean | null
    notifyPush: boolean | null
    createdAt: Date | null
  }

  export type UserSubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    value: number
    notifyEmail: number
    notifyPush: number
    createdAt: number
    _all: number
  }


  export type UserSubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    value?: true
    notifyEmail?: true
    notifyPush?: true
    createdAt?: true
  }

  export type UserSubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    value?: true
    notifyEmail?: true
    notifyPush?: true
    createdAt?: true
  }

  export type UserSubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    value?: true
    notifyEmail?: true
    notifyPush?: true
    createdAt?: true
    _all?: true
  }

  export type UserSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSubscription to aggregate.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSubscriptions
    **/
    _count?: true | UserSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSubscriptionMaxAggregateInputType
  }

  export type GetUserSubscriptionAggregateType<T extends UserSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSubscription[P]>
      : GetScalarType<T[P], AggregateUserSubscription[P]>
  }




  export type UserSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubscriptionWhereInput
    orderBy?: UserSubscriptionOrderByWithAggregationInput | UserSubscriptionOrderByWithAggregationInput[]
    by: UserSubscriptionScalarFieldEnum[] | UserSubscriptionScalarFieldEnum
    having?: UserSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSubscriptionCountAggregateInputType | true
    _min?: UserSubscriptionMinAggregateInputType
    _max?: UserSubscriptionMaxAggregateInputType
  }

  export type UserSubscriptionGroupByOutputType = {
    id: string
    userId: string
    type: string
    value: string
    notifyEmail: boolean
    notifyPush: boolean
    createdAt: Date
    _count: UserSubscriptionCountAggregateOutputType | null
    _min: UserSubscriptionMinAggregateOutputType | null
    _max: UserSubscriptionMaxAggregateOutputType | null
  }

  type GetUserSubscriptionGroupByPayload<T extends UserSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], UserSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type UserSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    value?: boolean
    notifyEmail?: boolean
    notifyPush?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscription"]>

  export type UserSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    value?: boolean
    notifyEmail?: boolean
    notifyPush?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscription"]>

  export type UserSubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    value?: boolean
    notifyEmail?: boolean
    notifyPush?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscription"]>

  export type UserSubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    value?: boolean
    notifyEmail?: boolean
    notifyPush?: boolean
    createdAt?: boolean
  }

  export type UserSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "value" | "notifyEmail" | "notifyPush" | "createdAt", ExtArgs["result"]["userSubscription"]>
  export type UserSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSubscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      value: string
      notifyEmail: boolean
      notifyPush: boolean
      createdAt: Date
    }, ExtArgs["result"]["userSubscription"]>
    composites: {}
  }

  type UserSubscriptionGetPayload<S extends boolean | null | undefined | UserSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$UserSubscriptionPayload, S>

  type UserSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSubscriptionCountAggregateInputType | true
    }

  export interface UserSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSubscription'], meta: { name: 'UserSubscription' } }
    /**
     * Find zero or one UserSubscription that matches the filter.
     * @param {UserSubscriptionFindUniqueArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSubscriptionFindUniqueArgs>(args: SelectSubset<T, UserSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindFirstArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSubscriptionFindFirstArgs>(args?: SelectSubset<T, UserSubscriptionFindFirstArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindFirstOrThrowArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSubscriptions
     * const userSubscriptions = await prisma.userSubscription.findMany()
     * 
     * // Get first 10 UserSubscriptions
     * const userSubscriptions = await prisma.userSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSubscriptionWithIdOnly = await prisma.userSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSubscriptionFindManyArgs>(args?: SelectSubset<T, UserSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSubscription.
     * @param {UserSubscriptionCreateArgs} args - Arguments to create a UserSubscription.
     * @example
     * // Create one UserSubscription
     * const UserSubscription = await prisma.userSubscription.create({
     *   data: {
     *     // ... data to create a UserSubscription
     *   }
     * })
     * 
     */
    create<T extends UserSubscriptionCreateArgs>(args: SelectSubset<T, UserSubscriptionCreateArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSubscriptions.
     * @param {UserSubscriptionCreateManyArgs} args - Arguments to create many UserSubscriptions.
     * @example
     * // Create many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSubscriptionCreateManyArgs>(args?: SelectSubset<T, UserSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSubscriptions and returns the data saved in the database.
     * @param {UserSubscriptionCreateManyAndReturnArgs} args - Arguments to create many UserSubscriptions.
     * @example
     * // Create many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSubscriptions and only return the `id`
     * const userSubscriptionWithIdOnly = await prisma.userSubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSubscription.
     * @param {UserSubscriptionDeleteArgs} args - Arguments to delete one UserSubscription.
     * @example
     * // Delete one UserSubscription
     * const UserSubscription = await prisma.userSubscription.delete({
     *   where: {
     *     // ... filter to delete one UserSubscription
     *   }
     * })
     * 
     */
    delete<T extends UserSubscriptionDeleteArgs>(args: SelectSubset<T, UserSubscriptionDeleteArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSubscription.
     * @param {UserSubscriptionUpdateArgs} args - Arguments to update one UserSubscription.
     * @example
     * // Update one UserSubscription
     * const userSubscription = await prisma.userSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSubscriptionUpdateArgs>(args: SelectSubset<T, UserSubscriptionUpdateArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSubscriptions.
     * @param {UserSubscriptionDeleteManyArgs} args - Arguments to filter UserSubscriptions to delete.
     * @example
     * // Delete a few UserSubscriptions
     * const { count } = await prisma.userSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSubscriptionDeleteManyArgs>(args?: SelectSubset<T, UserSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSubscriptionUpdateManyArgs>(args: SelectSubset<T, UserSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSubscriptions and returns the data updated in the database.
     * @param {UserSubscriptionUpdateManyAndReturnArgs} args - Arguments to update many UserSubscriptions.
     * @example
     * // Update many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSubscriptions and only return the `id`
     * const userSubscriptionWithIdOnly = await prisma.userSubscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSubscription.
     * @param {UserSubscriptionUpsertArgs} args - Arguments to update or create a UserSubscription.
     * @example
     * // Update or create a UserSubscription
     * const userSubscription = await prisma.userSubscription.upsert({
     *   create: {
     *     // ... data to create a UserSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSubscription we want to update
     *   }
     * })
     */
    upsert<T extends UserSubscriptionUpsertArgs>(args: SelectSubset<T, UserSubscriptionUpsertArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionCountArgs} args - Arguments to filter UserSubscriptions to count.
     * @example
     * // Count the number of UserSubscriptions
     * const count = await prisma.userSubscription.count({
     *   where: {
     *     // ... the filter for the UserSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends UserSubscriptionCountArgs>(
      args?: Subset<T, UserSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSubscriptionAggregateArgs>(args: Subset<T, UserSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetUserSubscriptionAggregateType<T>>

    /**
     * Group by UserSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionGroupByArgs} args - Group by arguments.
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
      T extends UserSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: UserSubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSubscription model
   */
  readonly fields: UserSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSubscription model
   */
  interface UserSubscriptionFieldRefs {
    readonly id: FieldRef<"UserSubscription", 'String'>
    readonly userId: FieldRef<"UserSubscription", 'String'>
    readonly type: FieldRef<"UserSubscription", 'String'>
    readonly value: FieldRef<"UserSubscription", 'String'>
    readonly notifyEmail: FieldRef<"UserSubscription", 'Boolean'>
    readonly notifyPush: FieldRef<"UserSubscription", 'Boolean'>
    readonly createdAt: FieldRef<"UserSubscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSubscription findUnique
   */
  export type UserSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription findUniqueOrThrow
   */
  export type UserSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription findFirst
   */
  export type UserSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSubscriptions.
     */
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription findFirstOrThrow
   */
  export type UserSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSubscriptions.
     */
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription findMany
   */
  export type UserSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscriptions to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription create
   */
  export type UserSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSubscription.
     */
    data: XOR<UserSubscriptionCreateInput, UserSubscriptionUncheckedCreateInput>
  }

  /**
   * UserSubscription createMany
   */
  export type UserSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSubscriptions.
     */
    data: UserSubscriptionCreateManyInput | UserSubscriptionCreateManyInput[]
  }

  /**
   * UserSubscription createManyAndReturn
   */
  export type UserSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many UserSubscriptions.
     */
    data: UserSubscriptionCreateManyInput | UserSubscriptionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSubscription update
   */
  export type UserSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSubscription.
     */
    data: XOR<UserSubscriptionUpdateInput, UserSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which UserSubscription to update.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription updateMany
   */
  export type UserSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSubscriptions.
     */
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which UserSubscriptions to update
     */
    where?: UserSubscriptionWhereInput
    /**
     * Limit how many UserSubscriptions to update.
     */
    limit?: number
  }

  /**
   * UserSubscription updateManyAndReturn
   */
  export type UserSubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update UserSubscriptions.
     */
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which UserSubscriptions to update
     */
    where?: UserSubscriptionWhereInput
    /**
     * Limit how many UserSubscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSubscription upsert
   */
  export type UserSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSubscription to update in case it exists.
     */
    where: UserSubscriptionWhereUniqueInput
    /**
     * In case the UserSubscription found by the `where` argument doesn't exist, create a new UserSubscription with this data.
     */
    create: XOR<UserSubscriptionCreateInput, UserSubscriptionUncheckedCreateInput>
    /**
     * In case the UserSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSubscriptionUpdateInput, UserSubscriptionUncheckedUpdateInput>
  }

  /**
   * UserSubscription delete
   */
  export type UserSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which UserSubscription to delete.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription deleteMany
   */
  export type UserSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSubscriptions to delete
     */
    where?: UserSubscriptionWhereInput
    /**
     * Limit how many UserSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * UserSubscription without action
   */
  export type UserSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model DataSyncLog
   */

  export type AggregateDataSyncLog = {
    _count: DataSyncLogCountAggregateOutputType | null
    _avg: DataSyncLogAvgAggregateOutputType | null
    _sum: DataSyncLogSumAggregateOutputType | null
    _min: DataSyncLogMinAggregateOutputType | null
    _max: DataSyncLogMaxAggregateOutputType | null
  }

  export type DataSyncLogAvgAggregateOutputType = {
    recordsProcessed: number | null
    recordsAdded: number | null
    recordsUpdated: number | null
    executionTime: number | null
  }

  export type DataSyncLogSumAggregateOutputType = {
    recordsProcessed: number | null
    recordsAdded: number | null
    recordsUpdated: number | null
    executionTime: number | null
  }

  export type DataSyncLogMinAggregateOutputType = {
    id: string | null
    type: string | null
    status: string | null
    recordsProcessed: number | null
    recordsAdded: number | null
    recordsUpdated: number | null
    errorMessage: string | null
    executionTime: number | null
    createdAt: Date | null
  }

  export type DataSyncLogMaxAggregateOutputType = {
    id: string | null
    type: string | null
    status: string | null
    recordsProcessed: number | null
    recordsAdded: number | null
    recordsUpdated: number | null
    errorMessage: string | null
    executionTime: number | null
    createdAt: Date | null
  }

  export type DataSyncLogCountAggregateOutputType = {
    id: number
    type: number
    status: number
    recordsProcessed: number
    recordsAdded: number
    recordsUpdated: number
    errorMessage: number
    executionTime: number
    createdAt: number
    _all: number
  }


  export type DataSyncLogAvgAggregateInputType = {
    recordsProcessed?: true
    recordsAdded?: true
    recordsUpdated?: true
    executionTime?: true
  }

  export type DataSyncLogSumAggregateInputType = {
    recordsProcessed?: true
    recordsAdded?: true
    recordsUpdated?: true
    executionTime?: true
  }

  export type DataSyncLogMinAggregateInputType = {
    id?: true
    type?: true
    status?: true
    recordsProcessed?: true
    recordsAdded?: true
    recordsUpdated?: true
    errorMessage?: true
    executionTime?: true
    createdAt?: true
  }

  export type DataSyncLogMaxAggregateInputType = {
    id?: true
    type?: true
    status?: true
    recordsProcessed?: true
    recordsAdded?: true
    recordsUpdated?: true
    errorMessage?: true
    executionTime?: true
    createdAt?: true
  }

  export type DataSyncLogCountAggregateInputType = {
    id?: true
    type?: true
    status?: true
    recordsProcessed?: true
    recordsAdded?: true
    recordsUpdated?: true
    errorMessage?: true
    executionTime?: true
    createdAt?: true
    _all?: true
  }

  export type DataSyncLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataSyncLog to aggregate.
     */
    where?: DataSyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataSyncLogs to fetch.
     */
    orderBy?: DataSyncLogOrderByWithRelationInput | DataSyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataSyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataSyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataSyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataSyncLogs
    **/
    _count?: true | DataSyncLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataSyncLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataSyncLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataSyncLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataSyncLogMaxAggregateInputType
  }

  export type GetDataSyncLogAggregateType<T extends DataSyncLogAggregateArgs> = {
        [P in keyof T & keyof AggregateDataSyncLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataSyncLog[P]>
      : GetScalarType<T[P], AggregateDataSyncLog[P]>
  }




  export type DataSyncLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataSyncLogWhereInput
    orderBy?: DataSyncLogOrderByWithAggregationInput | DataSyncLogOrderByWithAggregationInput[]
    by: DataSyncLogScalarFieldEnum[] | DataSyncLogScalarFieldEnum
    having?: DataSyncLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataSyncLogCountAggregateInputType | true
    _avg?: DataSyncLogAvgAggregateInputType
    _sum?: DataSyncLogSumAggregateInputType
    _min?: DataSyncLogMinAggregateInputType
    _max?: DataSyncLogMaxAggregateInputType
  }

  export type DataSyncLogGroupByOutputType = {
    id: string
    type: string
    status: string
    recordsProcessed: number
    recordsAdded: number
    recordsUpdated: number
    errorMessage: string | null
    executionTime: number | null
    createdAt: Date
    _count: DataSyncLogCountAggregateOutputType | null
    _avg: DataSyncLogAvgAggregateOutputType | null
    _sum: DataSyncLogSumAggregateOutputType | null
    _min: DataSyncLogMinAggregateOutputType | null
    _max: DataSyncLogMaxAggregateOutputType | null
  }

  type GetDataSyncLogGroupByPayload<T extends DataSyncLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataSyncLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataSyncLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataSyncLogGroupByOutputType[P]>
            : GetScalarType<T[P], DataSyncLogGroupByOutputType[P]>
        }
      >
    >


  export type DataSyncLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    recordsProcessed?: boolean
    recordsAdded?: boolean
    recordsUpdated?: boolean
    errorMessage?: boolean
    executionTime?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dataSyncLog"]>

  export type DataSyncLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    recordsProcessed?: boolean
    recordsAdded?: boolean
    recordsUpdated?: boolean
    errorMessage?: boolean
    executionTime?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dataSyncLog"]>

  export type DataSyncLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    recordsProcessed?: boolean
    recordsAdded?: boolean
    recordsUpdated?: boolean
    errorMessage?: boolean
    executionTime?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dataSyncLog"]>

  export type DataSyncLogSelectScalar = {
    id?: boolean
    type?: boolean
    status?: boolean
    recordsProcessed?: boolean
    recordsAdded?: boolean
    recordsUpdated?: boolean
    errorMessage?: boolean
    executionTime?: boolean
    createdAt?: boolean
  }

  export type DataSyncLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "status" | "recordsProcessed" | "recordsAdded" | "recordsUpdated" | "errorMessage" | "executionTime" | "createdAt", ExtArgs["result"]["dataSyncLog"]>

  export type $DataSyncLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataSyncLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      status: string
      recordsProcessed: number
      recordsAdded: number
      recordsUpdated: number
      errorMessage: string | null
      executionTime: number | null
      createdAt: Date
    }, ExtArgs["result"]["dataSyncLog"]>
    composites: {}
  }

  type DataSyncLogGetPayload<S extends boolean | null | undefined | DataSyncLogDefaultArgs> = $Result.GetResult<Prisma.$DataSyncLogPayload, S>

  type DataSyncLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataSyncLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataSyncLogCountAggregateInputType | true
    }

  export interface DataSyncLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataSyncLog'], meta: { name: 'DataSyncLog' } }
    /**
     * Find zero or one DataSyncLog that matches the filter.
     * @param {DataSyncLogFindUniqueArgs} args - Arguments to find a DataSyncLog
     * @example
     * // Get one DataSyncLog
     * const dataSyncLog = await prisma.dataSyncLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataSyncLogFindUniqueArgs>(args: SelectSubset<T, DataSyncLogFindUniqueArgs<ExtArgs>>): Prisma__DataSyncLogClient<$Result.GetResult<Prisma.$DataSyncLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataSyncLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataSyncLogFindUniqueOrThrowArgs} args - Arguments to find a DataSyncLog
     * @example
     * // Get one DataSyncLog
     * const dataSyncLog = await prisma.dataSyncLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataSyncLogFindUniqueOrThrowArgs>(args: SelectSubset<T, DataSyncLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataSyncLogClient<$Result.GetResult<Prisma.$DataSyncLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataSyncLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSyncLogFindFirstArgs} args - Arguments to find a DataSyncLog
     * @example
     * // Get one DataSyncLog
     * const dataSyncLog = await prisma.dataSyncLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataSyncLogFindFirstArgs>(args?: SelectSubset<T, DataSyncLogFindFirstArgs<ExtArgs>>): Prisma__DataSyncLogClient<$Result.GetResult<Prisma.$DataSyncLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataSyncLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSyncLogFindFirstOrThrowArgs} args - Arguments to find a DataSyncLog
     * @example
     * // Get one DataSyncLog
     * const dataSyncLog = await prisma.dataSyncLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataSyncLogFindFirstOrThrowArgs>(args?: SelectSubset<T, DataSyncLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataSyncLogClient<$Result.GetResult<Prisma.$DataSyncLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataSyncLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSyncLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataSyncLogs
     * const dataSyncLogs = await prisma.dataSyncLog.findMany()
     * 
     * // Get first 10 DataSyncLogs
     * const dataSyncLogs = await prisma.dataSyncLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataSyncLogWithIdOnly = await prisma.dataSyncLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DataSyncLogFindManyArgs>(args?: SelectSubset<T, DataSyncLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataSyncLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataSyncLog.
     * @param {DataSyncLogCreateArgs} args - Arguments to create a DataSyncLog.
     * @example
     * // Create one DataSyncLog
     * const DataSyncLog = await prisma.dataSyncLog.create({
     *   data: {
     *     // ... data to create a DataSyncLog
     *   }
     * })
     * 
     */
    create<T extends DataSyncLogCreateArgs>(args: SelectSubset<T, DataSyncLogCreateArgs<ExtArgs>>): Prisma__DataSyncLogClient<$Result.GetResult<Prisma.$DataSyncLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataSyncLogs.
     * @param {DataSyncLogCreateManyArgs} args - Arguments to create many DataSyncLogs.
     * @example
     * // Create many DataSyncLogs
     * const dataSyncLog = await prisma.dataSyncLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataSyncLogCreateManyArgs>(args?: SelectSubset<T, DataSyncLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DataSyncLogs and returns the data saved in the database.
     * @param {DataSyncLogCreateManyAndReturnArgs} args - Arguments to create many DataSyncLogs.
     * @example
     * // Create many DataSyncLogs
     * const dataSyncLog = await prisma.dataSyncLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DataSyncLogs and only return the `id`
     * const dataSyncLogWithIdOnly = await prisma.dataSyncLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DataSyncLogCreateManyAndReturnArgs>(args?: SelectSubset<T, DataSyncLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataSyncLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DataSyncLog.
     * @param {DataSyncLogDeleteArgs} args - Arguments to delete one DataSyncLog.
     * @example
     * // Delete one DataSyncLog
     * const DataSyncLog = await prisma.dataSyncLog.delete({
     *   where: {
     *     // ... filter to delete one DataSyncLog
     *   }
     * })
     * 
     */
    delete<T extends DataSyncLogDeleteArgs>(args: SelectSubset<T, DataSyncLogDeleteArgs<ExtArgs>>): Prisma__DataSyncLogClient<$Result.GetResult<Prisma.$DataSyncLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataSyncLog.
     * @param {DataSyncLogUpdateArgs} args - Arguments to update one DataSyncLog.
     * @example
     * // Update one DataSyncLog
     * const dataSyncLog = await prisma.dataSyncLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataSyncLogUpdateArgs>(args: SelectSubset<T, DataSyncLogUpdateArgs<ExtArgs>>): Prisma__DataSyncLogClient<$Result.GetResult<Prisma.$DataSyncLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataSyncLogs.
     * @param {DataSyncLogDeleteManyArgs} args - Arguments to filter DataSyncLogs to delete.
     * @example
     * // Delete a few DataSyncLogs
     * const { count } = await prisma.dataSyncLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataSyncLogDeleteManyArgs>(args?: SelectSubset<T, DataSyncLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataSyncLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSyncLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataSyncLogs
     * const dataSyncLog = await prisma.dataSyncLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataSyncLogUpdateManyArgs>(args: SelectSubset<T, DataSyncLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataSyncLogs and returns the data updated in the database.
     * @param {DataSyncLogUpdateManyAndReturnArgs} args - Arguments to update many DataSyncLogs.
     * @example
     * // Update many DataSyncLogs
     * const dataSyncLog = await prisma.dataSyncLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DataSyncLogs and only return the `id`
     * const dataSyncLogWithIdOnly = await prisma.dataSyncLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DataSyncLogUpdateManyAndReturnArgs>(args: SelectSubset<T, DataSyncLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataSyncLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DataSyncLog.
     * @param {DataSyncLogUpsertArgs} args - Arguments to update or create a DataSyncLog.
     * @example
     * // Update or create a DataSyncLog
     * const dataSyncLog = await prisma.dataSyncLog.upsert({
     *   create: {
     *     // ... data to create a DataSyncLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataSyncLog we want to update
     *   }
     * })
     */
    upsert<T extends DataSyncLogUpsertArgs>(args: SelectSubset<T, DataSyncLogUpsertArgs<ExtArgs>>): Prisma__DataSyncLogClient<$Result.GetResult<Prisma.$DataSyncLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataSyncLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSyncLogCountArgs} args - Arguments to filter DataSyncLogs to count.
     * @example
     * // Count the number of DataSyncLogs
     * const count = await prisma.dataSyncLog.count({
     *   where: {
     *     // ... the filter for the DataSyncLogs we want to count
     *   }
     * })
    **/
    count<T extends DataSyncLogCountArgs>(
      args?: Subset<T, DataSyncLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataSyncLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataSyncLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSyncLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DataSyncLogAggregateArgs>(args: Subset<T, DataSyncLogAggregateArgs>): Prisma.PrismaPromise<GetDataSyncLogAggregateType<T>>

    /**
     * Group by DataSyncLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSyncLogGroupByArgs} args - Group by arguments.
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
      T extends DataSyncLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataSyncLogGroupByArgs['orderBy'] }
        : { orderBy?: DataSyncLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DataSyncLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataSyncLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataSyncLog model
   */
  readonly fields: DataSyncLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataSyncLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataSyncLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DataSyncLog model
   */
  interface DataSyncLogFieldRefs {
    readonly id: FieldRef<"DataSyncLog", 'String'>
    readonly type: FieldRef<"DataSyncLog", 'String'>
    readonly status: FieldRef<"DataSyncLog", 'String'>
    readonly recordsProcessed: FieldRef<"DataSyncLog", 'Int'>
    readonly recordsAdded: FieldRef<"DataSyncLog", 'Int'>
    readonly recordsUpdated: FieldRef<"DataSyncLog", 'Int'>
    readonly errorMessage: FieldRef<"DataSyncLog", 'String'>
    readonly executionTime: FieldRef<"DataSyncLog", 'Int'>
    readonly createdAt: FieldRef<"DataSyncLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DataSyncLog findUnique
   */
  export type DataSyncLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSyncLog
     */
    select?: DataSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSyncLog
     */
    omit?: DataSyncLogOmit<ExtArgs> | null
    /**
     * Filter, which DataSyncLog to fetch.
     */
    where: DataSyncLogWhereUniqueInput
  }

  /**
   * DataSyncLog findUniqueOrThrow
   */
  export type DataSyncLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSyncLog
     */
    select?: DataSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSyncLog
     */
    omit?: DataSyncLogOmit<ExtArgs> | null
    /**
     * Filter, which DataSyncLog to fetch.
     */
    where: DataSyncLogWhereUniqueInput
  }

  /**
   * DataSyncLog findFirst
   */
  export type DataSyncLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSyncLog
     */
    select?: DataSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSyncLog
     */
    omit?: DataSyncLogOmit<ExtArgs> | null
    /**
     * Filter, which DataSyncLog to fetch.
     */
    where?: DataSyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataSyncLogs to fetch.
     */
    orderBy?: DataSyncLogOrderByWithRelationInput | DataSyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataSyncLogs.
     */
    cursor?: DataSyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataSyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataSyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataSyncLogs.
     */
    distinct?: DataSyncLogScalarFieldEnum | DataSyncLogScalarFieldEnum[]
  }

  /**
   * DataSyncLog findFirstOrThrow
   */
  export type DataSyncLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSyncLog
     */
    select?: DataSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSyncLog
     */
    omit?: DataSyncLogOmit<ExtArgs> | null
    /**
     * Filter, which DataSyncLog to fetch.
     */
    where?: DataSyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataSyncLogs to fetch.
     */
    orderBy?: DataSyncLogOrderByWithRelationInput | DataSyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataSyncLogs.
     */
    cursor?: DataSyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataSyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataSyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataSyncLogs.
     */
    distinct?: DataSyncLogScalarFieldEnum | DataSyncLogScalarFieldEnum[]
  }

  /**
   * DataSyncLog findMany
   */
  export type DataSyncLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSyncLog
     */
    select?: DataSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSyncLog
     */
    omit?: DataSyncLogOmit<ExtArgs> | null
    /**
     * Filter, which DataSyncLogs to fetch.
     */
    where?: DataSyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataSyncLogs to fetch.
     */
    orderBy?: DataSyncLogOrderByWithRelationInput | DataSyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataSyncLogs.
     */
    cursor?: DataSyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataSyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataSyncLogs.
     */
    skip?: number
    distinct?: DataSyncLogScalarFieldEnum | DataSyncLogScalarFieldEnum[]
  }

  /**
   * DataSyncLog create
   */
  export type DataSyncLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSyncLog
     */
    select?: DataSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSyncLog
     */
    omit?: DataSyncLogOmit<ExtArgs> | null
    /**
     * The data needed to create a DataSyncLog.
     */
    data: XOR<DataSyncLogCreateInput, DataSyncLogUncheckedCreateInput>
  }

  /**
   * DataSyncLog createMany
   */
  export type DataSyncLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataSyncLogs.
     */
    data: DataSyncLogCreateManyInput | DataSyncLogCreateManyInput[]
  }

  /**
   * DataSyncLog createManyAndReturn
   */
  export type DataSyncLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSyncLog
     */
    select?: DataSyncLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataSyncLog
     */
    omit?: DataSyncLogOmit<ExtArgs> | null
    /**
     * The data used to create many DataSyncLogs.
     */
    data: DataSyncLogCreateManyInput | DataSyncLogCreateManyInput[]
  }

  /**
   * DataSyncLog update
   */
  export type DataSyncLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSyncLog
     */
    select?: DataSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSyncLog
     */
    omit?: DataSyncLogOmit<ExtArgs> | null
    /**
     * The data needed to update a DataSyncLog.
     */
    data: XOR<DataSyncLogUpdateInput, DataSyncLogUncheckedUpdateInput>
    /**
     * Choose, which DataSyncLog to update.
     */
    where: DataSyncLogWhereUniqueInput
  }

  /**
   * DataSyncLog updateMany
   */
  export type DataSyncLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataSyncLogs.
     */
    data: XOR<DataSyncLogUpdateManyMutationInput, DataSyncLogUncheckedUpdateManyInput>
    /**
     * Filter which DataSyncLogs to update
     */
    where?: DataSyncLogWhereInput
    /**
     * Limit how many DataSyncLogs to update.
     */
    limit?: number
  }

  /**
   * DataSyncLog updateManyAndReturn
   */
  export type DataSyncLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSyncLog
     */
    select?: DataSyncLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataSyncLog
     */
    omit?: DataSyncLogOmit<ExtArgs> | null
    /**
     * The data used to update DataSyncLogs.
     */
    data: XOR<DataSyncLogUpdateManyMutationInput, DataSyncLogUncheckedUpdateManyInput>
    /**
     * Filter which DataSyncLogs to update
     */
    where?: DataSyncLogWhereInput
    /**
     * Limit how many DataSyncLogs to update.
     */
    limit?: number
  }

  /**
   * DataSyncLog upsert
   */
  export type DataSyncLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSyncLog
     */
    select?: DataSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSyncLog
     */
    omit?: DataSyncLogOmit<ExtArgs> | null
    /**
     * The filter to search for the DataSyncLog to update in case it exists.
     */
    where: DataSyncLogWhereUniqueInput
    /**
     * In case the DataSyncLog found by the `where` argument doesn't exist, create a new DataSyncLog with this data.
     */
    create: XOR<DataSyncLogCreateInput, DataSyncLogUncheckedCreateInput>
    /**
     * In case the DataSyncLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataSyncLogUpdateInput, DataSyncLogUncheckedUpdateInput>
  }

  /**
   * DataSyncLog delete
   */
  export type DataSyncLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSyncLog
     */
    select?: DataSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSyncLog
     */
    omit?: DataSyncLogOmit<ExtArgs> | null
    /**
     * Filter which DataSyncLog to delete.
     */
    where: DataSyncLogWhereUniqueInput
  }

  /**
   * DataSyncLog deleteMany
   */
  export type DataSyncLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataSyncLogs to delete
     */
    where?: DataSyncLogWhereInput
    /**
     * Limit how many DataSyncLogs to delete.
     */
    limit?: number
  }

  /**
   * DataSyncLog without action
   */
  export type DataSyncLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSyncLog
     */
    select?: DataSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSyncLog
     */
    omit?: DataSyncLogOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TroutStockingScalarFieldEnum: {
    id: 'id',
    location: 'location',
    waterBody: 'waterBody',
    county: 'county',
    species: 'species',
    size: 'size',
    quantity: 'quantity',
    stockingDate: 'stockingDate',
    nextStockingDate: 'nextStockingDate',
    latitude: 'latitude',
    longitude: 'longitude',
    waterBodyType: 'waterBodyType',
    accessInfo: 'accessInfo',
    regulations: 'regulations',
    source: 'source',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TroutStockingScalarFieldEnum = (typeof TroutStockingScalarFieldEnum)[keyof typeof TroutStockingScalarFieldEnum]


  export const WaterConditionScalarFieldEnum: {
    id: 'id',
    waterBody: 'waterBody',
    location: 'location',
    lastUpdated: 'lastUpdated',
    waterLevel: 'waterLevel',
    waterTemperature: 'waterTemperature',
    clarity: 'clarity',
    flow: 'flow',
    fishingConditions: 'fishingConditions',
    notes: 'notes',
    weatherImpact: 'weatherImpact',
    source: 'source',
    createdAt: 'createdAt'
  };

  export type WaterConditionScalarFieldEnum = (typeof WaterConditionScalarFieldEnum)[keyof typeof WaterConditionScalarFieldEnum]


  export const OutdoorEventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    eventType: 'eventType',
    location: 'location',
    latitude: 'latitude',
    longitude: 'longitude',
    startDate: 'startDate',
    endDate: 'endDate',
    cost: 'cost',
    registrationRequired: 'registrationRequired',
    registrationUrl: 'registrationUrl',
    contactInfo: 'contactInfo',
    ageRestrictions: 'ageRestrictions',
    capacity: 'capacity',
    difficulty: 'difficulty',
    source: 'source',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OutdoorEventScalarFieldEnum = (typeof OutdoorEventScalarFieldEnum)[keyof typeof OutdoorEventScalarFieldEnum]


  export const HuntingInfoScalarFieldEnum: {
    id: 'id',
    species: 'species',
    seasonStartDate: 'seasonStartDate',
    seasonEndDate: 'seasonEndDate',
    seasonDescription: 'seasonDescription',
    units: 'units',
    licenseRequired: 'licenseRequired',
    dailyBagLimit: 'dailyBagLimit',
    possessionLimit: 'possessionLimit',
    seasonLimit: 'seasonLimit',
    weaponRestrictions: 'weaponRestrictions',
    specialRules: 'specialRules',
    applicationDeadline: 'applicationDeadline',
    drawResults: 'drawResults',
    tags: 'tags',
    source: 'source',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HuntingInfoScalarFieldEnum = (typeof HuntingInfoScalarFieldEnum)[keyof typeof HuntingInfoScalarFieldEnum]


  export const ParkInfoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    location: 'location',
    latitude: 'latitude',
    longitude: 'longitude',
    amenities: 'amenities',
    activities: 'activities',
    dailyPassFee: 'dailyPassFee',
    annualPassFee: 'annualPassFee',
    campingFee: 'campingFee',
    summerHours: 'summerHours',
    winterHours: 'winterHours',
    currentHours: 'currentHours',
    campingAvailable: 'campingAvailable',
    reservationRequired: 'reservationRequired',
    petPolicy: 'petPolicy',
    accessibility: 'accessibility',
    currentConditions: 'currentConditions',
    alerts: 'alerts',
    source: 'source',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParkInfoScalarFieldEnum = (typeof ParkInfoScalarFieldEnum)[keyof typeof ParkInfoScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    avatar: 'avatar',
    emailVerified: 'emailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserFavoriteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    troutStockingId: 'troutStockingId',
    parkInfoId: 'parkInfoId',
    eventId: 'eventId',
    customLocation: 'customLocation',
    latitude: 'latitude',
    longitude: 'longitude',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type UserFavoriteScalarFieldEnum = (typeof UserFavoriteScalarFieldEnum)[keyof typeof UserFavoriteScalarFieldEnum]


  export const TripPlanScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    participants: 'participants',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TripPlanScalarFieldEnum = (typeof TripPlanScalarFieldEnum)[keyof typeof TripPlanScalarFieldEnum]


  export const TripPlanItemScalarFieldEnum: {
    id: 'id',
    tripPlanId: 'tripPlanId',
    type: 'type',
    troutStockingId: 'troutStockingId',
    parkInfoId: 'parkInfoId',
    eventId: 'eventId',
    customTitle: 'customTitle',
    customLocation: 'customLocation',
    latitude: 'latitude',
    longitude: 'longitude',
    scheduledTime: 'scheduledTime',
    estimatedDuration: 'estimatedDuration',
    notes: 'notes',
    completed: 'completed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TripPlanItemScalarFieldEnum = (typeof TripPlanItemScalarFieldEnum)[keyof typeof TripPlanItemScalarFieldEnum]


  export const UserSubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    value: 'value',
    notifyEmail: 'notifyEmail',
    notifyPush: 'notifyPush',
    createdAt: 'createdAt'
  };

  export type UserSubscriptionScalarFieldEnum = (typeof UserSubscriptionScalarFieldEnum)[keyof typeof UserSubscriptionScalarFieldEnum]


  export const DataSyncLogScalarFieldEnum: {
    id: 'id',
    type: 'type',
    status: 'status',
    recordsProcessed: 'recordsProcessed',
    recordsAdded: 'recordsAdded',
    recordsUpdated: 'recordsUpdated',
    errorMessage: 'errorMessage',
    executionTime: 'executionTime',
    createdAt: 'createdAt'
  };

  export type DataSyncLogScalarFieldEnum = (typeof DataSyncLogScalarFieldEnum)[keyof typeof DataSyncLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type TroutStockingWhereInput = {
    AND?: TroutStockingWhereInput | TroutStockingWhereInput[]
    OR?: TroutStockingWhereInput[]
    NOT?: TroutStockingWhereInput | TroutStockingWhereInput[]
    id?: StringFilter<"TroutStocking"> | string
    location?: StringFilter<"TroutStocking"> | string
    waterBody?: StringFilter<"TroutStocking"> | string
    county?: StringNullableFilter<"TroutStocking"> | string | null
    species?: StringFilter<"TroutStocking"> | string
    size?: StringNullableFilter<"TroutStocking"> | string | null
    quantity?: IntFilter<"TroutStocking"> | number
    stockingDate?: DateTimeFilter<"TroutStocking"> | Date | string
    nextStockingDate?: DateTimeNullableFilter<"TroutStocking"> | Date | string | null
    latitude?: FloatNullableFilter<"TroutStocking"> | number | null
    longitude?: FloatNullableFilter<"TroutStocking"> | number | null
    waterBodyType?: StringNullableFilter<"TroutStocking"> | string | null
    accessInfo?: StringNullableFilter<"TroutStocking"> | string | null
    regulations?: StringNullableFilter<"TroutStocking"> | string | null
    source?: StringFilter<"TroutStocking"> | string
    createdAt?: DateTimeFilter<"TroutStocking"> | Date | string
    updatedAt?: DateTimeFilter<"TroutStocking"> | Date | string
    favorites?: UserFavoriteListRelationFilter
    tripPlanItems?: TripPlanItemListRelationFilter
  }

  export type TroutStockingOrderByWithRelationInput = {
    id?: SortOrder
    location?: SortOrder
    waterBody?: SortOrder
    county?: SortOrderInput | SortOrder
    species?: SortOrder
    size?: SortOrderInput | SortOrder
    quantity?: SortOrder
    stockingDate?: SortOrder
    nextStockingDate?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    waterBodyType?: SortOrderInput | SortOrder
    accessInfo?: SortOrderInput | SortOrder
    regulations?: SortOrderInput | SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    favorites?: UserFavoriteOrderByRelationAggregateInput
    tripPlanItems?: TripPlanItemOrderByRelationAggregateInput
  }

  export type TroutStockingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    location_stockingDate?: TroutStockingLocation_stockingDateCompoundUniqueInput
    AND?: TroutStockingWhereInput | TroutStockingWhereInput[]
    OR?: TroutStockingWhereInput[]
    NOT?: TroutStockingWhereInput | TroutStockingWhereInput[]
    location?: StringFilter<"TroutStocking"> | string
    waterBody?: StringFilter<"TroutStocking"> | string
    county?: StringNullableFilter<"TroutStocking"> | string | null
    species?: StringFilter<"TroutStocking"> | string
    size?: StringNullableFilter<"TroutStocking"> | string | null
    quantity?: IntFilter<"TroutStocking"> | number
    stockingDate?: DateTimeFilter<"TroutStocking"> | Date | string
    nextStockingDate?: DateTimeNullableFilter<"TroutStocking"> | Date | string | null
    latitude?: FloatNullableFilter<"TroutStocking"> | number | null
    longitude?: FloatNullableFilter<"TroutStocking"> | number | null
    waterBodyType?: StringNullableFilter<"TroutStocking"> | string | null
    accessInfo?: StringNullableFilter<"TroutStocking"> | string | null
    regulations?: StringNullableFilter<"TroutStocking"> | string | null
    source?: StringFilter<"TroutStocking"> | string
    createdAt?: DateTimeFilter<"TroutStocking"> | Date | string
    updatedAt?: DateTimeFilter<"TroutStocking"> | Date | string
    favorites?: UserFavoriteListRelationFilter
    tripPlanItems?: TripPlanItemListRelationFilter
  }, "id" | "location_stockingDate">

  export type TroutStockingOrderByWithAggregationInput = {
    id?: SortOrder
    location?: SortOrder
    waterBody?: SortOrder
    county?: SortOrderInput | SortOrder
    species?: SortOrder
    size?: SortOrderInput | SortOrder
    quantity?: SortOrder
    stockingDate?: SortOrder
    nextStockingDate?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    waterBodyType?: SortOrderInput | SortOrder
    accessInfo?: SortOrderInput | SortOrder
    regulations?: SortOrderInput | SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TroutStockingCountOrderByAggregateInput
    _avg?: TroutStockingAvgOrderByAggregateInput
    _max?: TroutStockingMaxOrderByAggregateInput
    _min?: TroutStockingMinOrderByAggregateInput
    _sum?: TroutStockingSumOrderByAggregateInput
  }

  export type TroutStockingScalarWhereWithAggregatesInput = {
    AND?: TroutStockingScalarWhereWithAggregatesInput | TroutStockingScalarWhereWithAggregatesInput[]
    OR?: TroutStockingScalarWhereWithAggregatesInput[]
    NOT?: TroutStockingScalarWhereWithAggregatesInput | TroutStockingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TroutStocking"> | string
    location?: StringWithAggregatesFilter<"TroutStocking"> | string
    waterBody?: StringWithAggregatesFilter<"TroutStocking"> | string
    county?: StringNullableWithAggregatesFilter<"TroutStocking"> | string | null
    species?: StringWithAggregatesFilter<"TroutStocking"> | string
    size?: StringNullableWithAggregatesFilter<"TroutStocking"> | string | null
    quantity?: IntWithAggregatesFilter<"TroutStocking"> | number
    stockingDate?: DateTimeWithAggregatesFilter<"TroutStocking"> | Date | string
    nextStockingDate?: DateTimeNullableWithAggregatesFilter<"TroutStocking"> | Date | string | null
    latitude?: FloatNullableWithAggregatesFilter<"TroutStocking"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"TroutStocking"> | number | null
    waterBodyType?: StringNullableWithAggregatesFilter<"TroutStocking"> | string | null
    accessInfo?: StringNullableWithAggregatesFilter<"TroutStocking"> | string | null
    regulations?: StringNullableWithAggregatesFilter<"TroutStocking"> | string | null
    source?: StringWithAggregatesFilter<"TroutStocking"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TroutStocking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TroutStocking"> | Date | string
  }

  export type WaterConditionWhereInput = {
    AND?: WaterConditionWhereInput | WaterConditionWhereInput[]
    OR?: WaterConditionWhereInput[]
    NOT?: WaterConditionWhereInput | WaterConditionWhereInput[]
    id?: StringFilter<"WaterCondition"> | string
    waterBody?: StringFilter<"WaterCondition"> | string
    location?: StringFilter<"WaterCondition"> | string
    lastUpdated?: DateTimeFilter<"WaterCondition"> | Date | string
    waterLevel?: StringFilter<"WaterCondition"> | string
    waterTemperature?: FloatNullableFilter<"WaterCondition"> | number | null
    clarity?: StringFilter<"WaterCondition"> | string
    flow?: StringFilter<"WaterCondition"> | string
    fishingConditions?: StringFilter<"WaterCondition"> | string
    notes?: StringNullableFilter<"WaterCondition"> | string | null
    weatherImpact?: StringNullableFilter<"WaterCondition"> | string | null
    source?: StringFilter<"WaterCondition"> | string
    createdAt?: DateTimeFilter<"WaterCondition"> | Date | string
  }

  export type WaterConditionOrderByWithRelationInput = {
    id?: SortOrder
    waterBody?: SortOrder
    location?: SortOrder
    lastUpdated?: SortOrder
    waterLevel?: SortOrder
    waterTemperature?: SortOrderInput | SortOrder
    clarity?: SortOrder
    flow?: SortOrder
    fishingConditions?: SortOrder
    notes?: SortOrderInput | SortOrder
    weatherImpact?: SortOrderInput | SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type WaterConditionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WaterConditionWhereInput | WaterConditionWhereInput[]
    OR?: WaterConditionWhereInput[]
    NOT?: WaterConditionWhereInput | WaterConditionWhereInput[]
    waterBody?: StringFilter<"WaterCondition"> | string
    location?: StringFilter<"WaterCondition"> | string
    lastUpdated?: DateTimeFilter<"WaterCondition"> | Date | string
    waterLevel?: StringFilter<"WaterCondition"> | string
    waterTemperature?: FloatNullableFilter<"WaterCondition"> | number | null
    clarity?: StringFilter<"WaterCondition"> | string
    flow?: StringFilter<"WaterCondition"> | string
    fishingConditions?: StringFilter<"WaterCondition"> | string
    notes?: StringNullableFilter<"WaterCondition"> | string | null
    weatherImpact?: StringNullableFilter<"WaterCondition"> | string | null
    source?: StringFilter<"WaterCondition"> | string
    createdAt?: DateTimeFilter<"WaterCondition"> | Date | string
  }, "id">

  export type WaterConditionOrderByWithAggregationInput = {
    id?: SortOrder
    waterBody?: SortOrder
    location?: SortOrder
    lastUpdated?: SortOrder
    waterLevel?: SortOrder
    waterTemperature?: SortOrderInput | SortOrder
    clarity?: SortOrder
    flow?: SortOrder
    fishingConditions?: SortOrder
    notes?: SortOrderInput | SortOrder
    weatherImpact?: SortOrderInput | SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    _count?: WaterConditionCountOrderByAggregateInput
    _avg?: WaterConditionAvgOrderByAggregateInput
    _max?: WaterConditionMaxOrderByAggregateInput
    _min?: WaterConditionMinOrderByAggregateInput
    _sum?: WaterConditionSumOrderByAggregateInput
  }

  export type WaterConditionScalarWhereWithAggregatesInput = {
    AND?: WaterConditionScalarWhereWithAggregatesInput | WaterConditionScalarWhereWithAggregatesInput[]
    OR?: WaterConditionScalarWhereWithAggregatesInput[]
    NOT?: WaterConditionScalarWhereWithAggregatesInput | WaterConditionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WaterCondition"> | string
    waterBody?: StringWithAggregatesFilter<"WaterCondition"> | string
    location?: StringWithAggregatesFilter<"WaterCondition"> | string
    lastUpdated?: DateTimeWithAggregatesFilter<"WaterCondition"> | Date | string
    waterLevel?: StringWithAggregatesFilter<"WaterCondition"> | string
    waterTemperature?: FloatNullableWithAggregatesFilter<"WaterCondition"> | number | null
    clarity?: StringWithAggregatesFilter<"WaterCondition"> | string
    flow?: StringWithAggregatesFilter<"WaterCondition"> | string
    fishingConditions?: StringWithAggregatesFilter<"WaterCondition"> | string
    notes?: StringNullableWithAggregatesFilter<"WaterCondition"> | string | null
    weatherImpact?: StringNullableWithAggregatesFilter<"WaterCondition"> | string | null
    source?: StringWithAggregatesFilter<"WaterCondition"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WaterCondition"> | Date | string
  }

  export type OutdoorEventWhereInput = {
    AND?: OutdoorEventWhereInput | OutdoorEventWhereInput[]
    OR?: OutdoorEventWhereInput[]
    NOT?: OutdoorEventWhereInput | OutdoorEventWhereInput[]
    id?: StringFilter<"OutdoorEvent"> | string
    title?: StringFilter<"OutdoorEvent"> | string
    description?: StringNullableFilter<"OutdoorEvent"> | string | null
    eventType?: StringFilter<"OutdoorEvent"> | string
    location?: StringFilter<"OutdoorEvent"> | string
    latitude?: FloatNullableFilter<"OutdoorEvent"> | number | null
    longitude?: FloatNullableFilter<"OutdoorEvent"> | number | null
    startDate?: DateTimeFilter<"OutdoorEvent"> | Date | string
    endDate?: DateTimeNullableFilter<"OutdoorEvent"> | Date | string | null
    cost?: FloatNullableFilter<"OutdoorEvent"> | number | null
    registrationRequired?: BoolFilter<"OutdoorEvent"> | boolean
    registrationUrl?: StringNullableFilter<"OutdoorEvent"> | string | null
    contactInfo?: StringNullableFilter<"OutdoorEvent"> | string | null
    ageRestrictions?: StringNullableFilter<"OutdoorEvent"> | string | null
    capacity?: IntNullableFilter<"OutdoorEvent"> | number | null
    difficulty?: StringNullableFilter<"OutdoorEvent"> | string | null
    source?: StringFilter<"OutdoorEvent"> | string
    createdAt?: DateTimeFilter<"OutdoorEvent"> | Date | string
    updatedAt?: DateTimeFilter<"OutdoorEvent"> | Date | string
    favorites?: UserFavoriteListRelationFilter
    tripPlanItems?: TripPlanItemListRelationFilter
  }

  export type OutdoorEventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    eventType?: SortOrder
    location?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    cost?: SortOrderInput | SortOrder
    registrationRequired?: SortOrder
    registrationUrl?: SortOrderInput | SortOrder
    contactInfo?: SortOrderInput | SortOrder
    ageRestrictions?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    favorites?: UserFavoriteOrderByRelationAggregateInput
    tripPlanItems?: TripPlanItemOrderByRelationAggregateInput
  }

  export type OutdoorEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OutdoorEventWhereInput | OutdoorEventWhereInput[]
    OR?: OutdoorEventWhereInput[]
    NOT?: OutdoorEventWhereInput | OutdoorEventWhereInput[]
    title?: StringFilter<"OutdoorEvent"> | string
    description?: StringNullableFilter<"OutdoorEvent"> | string | null
    eventType?: StringFilter<"OutdoorEvent"> | string
    location?: StringFilter<"OutdoorEvent"> | string
    latitude?: FloatNullableFilter<"OutdoorEvent"> | number | null
    longitude?: FloatNullableFilter<"OutdoorEvent"> | number | null
    startDate?: DateTimeFilter<"OutdoorEvent"> | Date | string
    endDate?: DateTimeNullableFilter<"OutdoorEvent"> | Date | string | null
    cost?: FloatNullableFilter<"OutdoorEvent"> | number | null
    registrationRequired?: BoolFilter<"OutdoorEvent"> | boolean
    registrationUrl?: StringNullableFilter<"OutdoorEvent"> | string | null
    contactInfo?: StringNullableFilter<"OutdoorEvent"> | string | null
    ageRestrictions?: StringNullableFilter<"OutdoorEvent"> | string | null
    capacity?: IntNullableFilter<"OutdoorEvent"> | number | null
    difficulty?: StringNullableFilter<"OutdoorEvent"> | string | null
    source?: StringFilter<"OutdoorEvent"> | string
    createdAt?: DateTimeFilter<"OutdoorEvent"> | Date | string
    updatedAt?: DateTimeFilter<"OutdoorEvent"> | Date | string
    favorites?: UserFavoriteListRelationFilter
    tripPlanItems?: TripPlanItemListRelationFilter
  }, "id">

  export type OutdoorEventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    eventType?: SortOrder
    location?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    cost?: SortOrderInput | SortOrder
    registrationRequired?: SortOrder
    registrationUrl?: SortOrderInput | SortOrder
    contactInfo?: SortOrderInput | SortOrder
    ageRestrictions?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OutdoorEventCountOrderByAggregateInput
    _avg?: OutdoorEventAvgOrderByAggregateInput
    _max?: OutdoorEventMaxOrderByAggregateInput
    _min?: OutdoorEventMinOrderByAggregateInput
    _sum?: OutdoorEventSumOrderByAggregateInput
  }

  export type OutdoorEventScalarWhereWithAggregatesInput = {
    AND?: OutdoorEventScalarWhereWithAggregatesInput | OutdoorEventScalarWhereWithAggregatesInput[]
    OR?: OutdoorEventScalarWhereWithAggregatesInput[]
    NOT?: OutdoorEventScalarWhereWithAggregatesInput | OutdoorEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OutdoorEvent"> | string
    title?: StringWithAggregatesFilter<"OutdoorEvent"> | string
    description?: StringNullableWithAggregatesFilter<"OutdoorEvent"> | string | null
    eventType?: StringWithAggregatesFilter<"OutdoorEvent"> | string
    location?: StringWithAggregatesFilter<"OutdoorEvent"> | string
    latitude?: FloatNullableWithAggregatesFilter<"OutdoorEvent"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"OutdoorEvent"> | number | null
    startDate?: DateTimeWithAggregatesFilter<"OutdoorEvent"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"OutdoorEvent"> | Date | string | null
    cost?: FloatNullableWithAggregatesFilter<"OutdoorEvent"> | number | null
    registrationRequired?: BoolWithAggregatesFilter<"OutdoorEvent"> | boolean
    registrationUrl?: StringNullableWithAggregatesFilter<"OutdoorEvent"> | string | null
    contactInfo?: StringNullableWithAggregatesFilter<"OutdoorEvent"> | string | null
    ageRestrictions?: StringNullableWithAggregatesFilter<"OutdoorEvent"> | string | null
    capacity?: IntNullableWithAggregatesFilter<"OutdoorEvent"> | number | null
    difficulty?: StringNullableWithAggregatesFilter<"OutdoorEvent"> | string | null
    source?: StringWithAggregatesFilter<"OutdoorEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OutdoorEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OutdoorEvent"> | Date | string
  }

  export type HuntingInfoWhereInput = {
    AND?: HuntingInfoWhereInput | HuntingInfoWhereInput[]
    OR?: HuntingInfoWhereInput[]
    NOT?: HuntingInfoWhereInput | HuntingInfoWhereInput[]
    id?: StringFilter<"HuntingInfo"> | string
    species?: StringFilter<"HuntingInfo"> | string
    seasonStartDate?: DateTimeFilter<"HuntingInfo"> | Date | string
    seasonEndDate?: DateTimeFilter<"HuntingInfo"> | Date | string
    seasonDescription?: StringNullableFilter<"HuntingInfo"> | string | null
    units?: StringFilter<"HuntingInfo"> | string
    licenseRequired?: StringFilter<"HuntingInfo"> | string
    dailyBagLimit?: IntNullableFilter<"HuntingInfo"> | number | null
    possessionLimit?: IntNullableFilter<"HuntingInfo"> | number | null
    seasonLimit?: IntNullableFilter<"HuntingInfo"> | number | null
    weaponRestrictions?: StringFilter<"HuntingInfo"> | string
    specialRules?: StringFilter<"HuntingInfo"> | string
    applicationDeadline?: DateTimeNullableFilter<"HuntingInfo"> | Date | string | null
    drawResults?: DateTimeNullableFilter<"HuntingInfo"> | Date | string | null
    tags?: StringFilter<"HuntingInfo"> | string
    source?: StringFilter<"HuntingInfo"> | string
    createdAt?: DateTimeFilter<"HuntingInfo"> | Date | string
    updatedAt?: DateTimeFilter<"HuntingInfo"> | Date | string
  }

  export type HuntingInfoOrderByWithRelationInput = {
    id?: SortOrder
    species?: SortOrder
    seasonStartDate?: SortOrder
    seasonEndDate?: SortOrder
    seasonDescription?: SortOrderInput | SortOrder
    units?: SortOrder
    licenseRequired?: SortOrder
    dailyBagLimit?: SortOrderInput | SortOrder
    possessionLimit?: SortOrderInput | SortOrder
    seasonLimit?: SortOrderInput | SortOrder
    weaponRestrictions?: SortOrder
    specialRules?: SortOrder
    applicationDeadline?: SortOrderInput | SortOrder
    drawResults?: SortOrderInput | SortOrder
    tags?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HuntingInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HuntingInfoWhereInput | HuntingInfoWhereInput[]
    OR?: HuntingInfoWhereInput[]
    NOT?: HuntingInfoWhereInput | HuntingInfoWhereInput[]
    species?: StringFilter<"HuntingInfo"> | string
    seasonStartDate?: DateTimeFilter<"HuntingInfo"> | Date | string
    seasonEndDate?: DateTimeFilter<"HuntingInfo"> | Date | string
    seasonDescription?: StringNullableFilter<"HuntingInfo"> | string | null
    units?: StringFilter<"HuntingInfo"> | string
    licenseRequired?: StringFilter<"HuntingInfo"> | string
    dailyBagLimit?: IntNullableFilter<"HuntingInfo"> | number | null
    possessionLimit?: IntNullableFilter<"HuntingInfo"> | number | null
    seasonLimit?: IntNullableFilter<"HuntingInfo"> | number | null
    weaponRestrictions?: StringFilter<"HuntingInfo"> | string
    specialRules?: StringFilter<"HuntingInfo"> | string
    applicationDeadline?: DateTimeNullableFilter<"HuntingInfo"> | Date | string | null
    drawResults?: DateTimeNullableFilter<"HuntingInfo"> | Date | string | null
    tags?: StringFilter<"HuntingInfo"> | string
    source?: StringFilter<"HuntingInfo"> | string
    createdAt?: DateTimeFilter<"HuntingInfo"> | Date | string
    updatedAt?: DateTimeFilter<"HuntingInfo"> | Date | string
  }, "id">

  export type HuntingInfoOrderByWithAggregationInput = {
    id?: SortOrder
    species?: SortOrder
    seasonStartDate?: SortOrder
    seasonEndDate?: SortOrder
    seasonDescription?: SortOrderInput | SortOrder
    units?: SortOrder
    licenseRequired?: SortOrder
    dailyBagLimit?: SortOrderInput | SortOrder
    possessionLimit?: SortOrderInput | SortOrder
    seasonLimit?: SortOrderInput | SortOrder
    weaponRestrictions?: SortOrder
    specialRules?: SortOrder
    applicationDeadline?: SortOrderInput | SortOrder
    drawResults?: SortOrderInput | SortOrder
    tags?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HuntingInfoCountOrderByAggregateInput
    _avg?: HuntingInfoAvgOrderByAggregateInput
    _max?: HuntingInfoMaxOrderByAggregateInput
    _min?: HuntingInfoMinOrderByAggregateInput
    _sum?: HuntingInfoSumOrderByAggregateInput
  }

  export type HuntingInfoScalarWhereWithAggregatesInput = {
    AND?: HuntingInfoScalarWhereWithAggregatesInput | HuntingInfoScalarWhereWithAggregatesInput[]
    OR?: HuntingInfoScalarWhereWithAggregatesInput[]
    NOT?: HuntingInfoScalarWhereWithAggregatesInput | HuntingInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HuntingInfo"> | string
    species?: StringWithAggregatesFilter<"HuntingInfo"> | string
    seasonStartDate?: DateTimeWithAggregatesFilter<"HuntingInfo"> | Date | string
    seasonEndDate?: DateTimeWithAggregatesFilter<"HuntingInfo"> | Date | string
    seasonDescription?: StringNullableWithAggregatesFilter<"HuntingInfo"> | string | null
    units?: StringWithAggregatesFilter<"HuntingInfo"> | string
    licenseRequired?: StringWithAggregatesFilter<"HuntingInfo"> | string
    dailyBagLimit?: IntNullableWithAggregatesFilter<"HuntingInfo"> | number | null
    possessionLimit?: IntNullableWithAggregatesFilter<"HuntingInfo"> | number | null
    seasonLimit?: IntNullableWithAggregatesFilter<"HuntingInfo"> | number | null
    weaponRestrictions?: StringWithAggregatesFilter<"HuntingInfo"> | string
    specialRules?: StringWithAggregatesFilter<"HuntingInfo"> | string
    applicationDeadline?: DateTimeNullableWithAggregatesFilter<"HuntingInfo"> | Date | string | null
    drawResults?: DateTimeNullableWithAggregatesFilter<"HuntingInfo"> | Date | string | null
    tags?: StringWithAggregatesFilter<"HuntingInfo"> | string
    source?: StringWithAggregatesFilter<"HuntingInfo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HuntingInfo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HuntingInfo"> | Date | string
  }

  export type ParkInfoWhereInput = {
    AND?: ParkInfoWhereInput | ParkInfoWhereInput[]
    OR?: ParkInfoWhereInput[]
    NOT?: ParkInfoWhereInput | ParkInfoWhereInput[]
    id?: StringFilter<"ParkInfo"> | string
    name?: StringFilter<"ParkInfo"> | string
    type?: StringFilter<"ParkInfo"> | string
    location?: StringFilter<"ParkInfo"> | string
    latitude?: FloatFilter<"ParkInfo"> | number
    longitude?: FloatFilter<"ParkInfo"> | number
    amenities?: StringFilter<"ParkInfo"> | string
    activities?: StringFilter<"ParkInfo"> | string
    dailyPassFee?: FloatNullableFilter<"ParkInfo"> | number | null
    annualPassFee?: FloatNullableFilter<"ParkInfo"> | number | null
    campingFee?: FloatNullableFilter<"ParkInfo"> | number | null
    summerHours?: StringNullableFilter<"ParkInfo"> | string | null
    winterHours?: StringNullableFilter<"ParkInfo"> | string | null
    currentHours?: StringFilter<"ParkInfo"> | string
    campingAvailable?: BoolFilter<"ParkInfo"> | boolean
    reservationRequired?: BoolNullableFilter<"ParkInfo"> | boolean | null
    petPolicy?: StringNullableFilter<"ParkInfo"> | string | null
    accessibility?: StringFilter<"ParkInfo"> | string
    currentConditions?: StringNullableFilter<"ParkInfo"> | string | null
    alerts?: StringFilter<"ParkInfo"> | string
    source?: StringFilter<"ParkInfo"> | string
    createdAt?: DateTimeFilter<"ParkInfo"> | Date | string
    updatedAt?: DateTimeFilter<"ParkInfo"> | Date | string
    favorites?: UserFavoriteListRelationFilter
    tripPlanItems?: TripPlanItemListRelationFilter
  }

  export type ParkInfoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    amenities?: SortOrder
    activities?: SortOrder
    dailyPassFee?: SortOrderInput | SortOrder
    annualPassFee?: SortOrderInput | SortOrder
    campingFee?: SortOrderInput | SortOrder
    summerHours?: SortOrderInput | SortOrder
    winterHours?: SortOrderInput | SortOrder
    currentHours?: SortOrder
    campingAvailable?: SortOrder
    reservationRequired?: SortOrderInput | SortOrder
    petPolicy?: SortOrderInput | SortOrder
    accessibility?: SortOrder
    currentConditions?: SortOrderInput | SortOrder
    alerts?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    favorites?: UserFavoriteOrderByRelationAggregateInput
    tripPlanItems?: TripPlanItemOrderByRelationAggregateInput
  }

  export type ParkInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParkInfoWhereInput | ParkInfoWhereInput[]
    OR?: ParkInfoWhereInput[]
    NOT?: ParkInfoWhereInput | ParkInfoWhereInput[]
    name?: StringFilter<"ParkInfo"> | string
    type?: StringFilter<"ParkInfo"> | string
    location?: StringFilter<"ParkInfo"> | string
    latitude?: FloatFilter<"ParkInfo"> | number
    longitude?: FloatFilter<"ParkInfo"> | number
    amenities?: StringFilter<"ParkInfo"> | string
    activities?: StringFilter<"ParkInfo"> | string
    dailyPassFee?: FloatNullableFilter<"ParkInfo"> | number | null
    annualPassFee?: FloatNullableFilter<"ParkInfo"> | number | null
    campingFee?: FloatNullableFilter<"ParkInfo"> | number | null
    summerHours?: StringNullableFilter<"ParkInfo"> | string | null
    winterHours?: StringNullableFilter<"ParkInfo"> | string | null
    currentHours?: StringFilter<"ParkInfo"> | string
    campingAvailable?: BoolFilter<"ParkInfo"> | boolean
    reservationRequired?: BoolNullableFilter<"ParkInfo"> | boolean | null
    petPolicy?: StringNullableFilter<"ParkInfo"> | string | null
    accessibility?: StringFilter<"ParkInfo"> | string
    currentConditions?: StringNullableFilter<"ParkInfo"> | string | null
    alerts?: StringFilter<"ParkInfo"> | string
    source?: StringFilter<"ParkInfo"> | string
    createdAt?: DateTimeFilter<"ParkInfo"> | Date | string
    updatedAt?: DateTimeFilter<"ParkInfo"> | Date | string
    favorites?: UserFavoriteListRelationFilter
    tripPlanItems?: TripPlanItemListRelationFilter
  }, "id">

  export type ParkInfoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    amenities?: SortOrder
    activities?: SortOrder
    dailyPassFee?: SortOrderInput | SortOrder
    annualPassFee?: SortOrderInput | SortOrder
    campingFee?: SortOrderInput | SortOrder
    summerHours?: SortOrderInput | SortOrder
    winterHours?: SortOrderInput | SortOrder
    currentHours?: SortOrder
    campingAvailable?: SortOrder
    reservationRequired?: SortOrderInput | SortOrder
    petPolicy?: SortOrderInput | SortOrder
    accessibility?: SortOrder
    currentConditions?: SortOrderInput | SortOrder
    alerts?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParkInfoCountOrderByAggregateInput
    _avg?: ParkInfoAvgOrderByAggregateInput
    _max?: ParkInfoMaxOrderByAggregateInput
    _min?: ParkInfoMinOrderByAggregateInput
    _sum?: ParkInfoSumOrderByAggregateInput
  }

  export type ParkInfoScalarWhereWithAggregatesInput = {
    AND?: ParkInfoScalarWhereWithAggregatesInput | ParkInfoScalarWhereWithAggregatesInput[]
    OR?: ParkInfoScalarWhereWithAggregatesInput[]
    NOT?: ParkInfoScalarWhereWithAggregatesInput | ParkInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ParkInfo"> | string
    name?: StringWithAggregatesFilter<"ParkInfo"> | string
    type?: StringWithAggregatesFilter<"ParkInfo"> | string
    location?: StringWithAggregatesFilter<"ParkInfo"> | string
    latitude?: FloatWithAggregatesFilter<"ParkInfo"> | number
    longitude?: FloatWithAggregatesFilter<"ParkInfo"> | number
    amenities?: StringWithAggregatesFilter<"ParkInfo"> | string
    activities?: StringWithAggregatesFilter<"ParkInfo"> | string
    dailyPassFee?: FloatNullableWithAggregatesFilter<"ParkInfo"> | number | null
    annualPassFee?: FloatNullableWithAggregatesFilter<"ParkInfo"> | number | null
    campingFee?: FloatNullableWithAggregatesFilter<"ParkInfo"> | number | null
    summerHours?: StringNullableWithAggregatesFilter<"ParkInfo"> | string | null
    winterHours?: StringNullableWithAggregatesFilter<"ParkInfo"> | string | null
    currentHours?: StringWithAggregatesFilter<"ParkInfo"> | string
    campingAvailable?: BoolWithAggregatesFilter<"ParkInfo"> | boolean
    reservationRequired?: BoolNullableWithAggregatesFilter<"ParkInfo"> | boolean | null
    petPolicy?: StringNullableWithAggregatesFilter<"ParkInfo"> | string | null
    accessibility?: StringWithAggregatesFilter<"ParkInfo"> | string
    currentConditions?: StringNullableWithAggregatesFilter<"ParkInfo"> | string | null
    alerts?: StringWithAggregatesFilter<"ParkInfo"> | string
    source?: StringWithAggregatesFilter<"ParkInfo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ParkInfo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ParkInfo"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    favoriteLocations?: UserFavoriteListRelationFilter
    tripPlans?: TripPlanListRelationFilter
    subscriptions?: UserSubscriptionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    favoriteLocations?: UserFavoriteOrderByRelationAggregateInput
    tripPlans?: TripPlanOrderByRelationAggregateInput
    subscriptions?: UserSubscriptionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    favoriteLocations?: UserFavoriteListRelationFilter
    tripPlans?: TripPlanListRelationFilter
    subscriptions?: UserSubscriptionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserFavoriteWhereInput = {
    AND?: UserFavoriteWhereInput | UserFavoriteWhereInput[]
    OR?: UserFavoriteWhereInput[]
    NOT?: UserFavoriteWhereInput | UserFavoriteWhereInput[]
    id?: StringFilter<"UserFavorite"> | string
    userId?: StringFilter<"UserFavorite"> | string
    troutStockingId?: StringNullableFilter<"UserFavorite"> | string | null
    parkInfoId?: StringNullableFilter<"UserFavorite"> | string | null
    eventId?: StringNullableFilter<"UserFavorite"> | string | null
    customLocation?: StringNullableFilter<"UserFavorite"> | string | null
    latitude?: FloatNullableFilter<"UserFavorite"> | number | null
    longitude?: FloatNullableFilter<"UserFavorite"> | number | null
    notes?: StringNullableFilter<"UserFavorite"> | string | null
    createdAt?: DateTimeFilter<"UserFavorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    troutStocking?: XOR<TroutStockingNullableScalarRelationFilter, TroutStockingWhereInput> | null
    parkInfo?: XOR<ParkInfoNullableScalarRelationFilter, ParkInfoWhereInput> | null
    event?: XOR<OutdoorEventNullableScalarRelationFilter, OutdoorEventWhereInput> | null
  }

  export type UserFavoriteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    troutStockingId?: SortOrderInput | SortOrder
    parkInfoId?: SortOrderInput | SortOrder
    eventId?: SortOrderInput | SortOrder
    customLocation?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    troutStocking?: TroutStockingOrderByWithRelationInput
    parkInfo?: ParkInfoOrderByWithRelationInput
    event?: OutdoorEventOrderByWithRelationInput
  }

  export type UserFavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_troutStockingId?: UserFavoriteUserIdTroutStockingIdCompoundUniqueInput
    userId_parkInfoId?: UserFavoriteUserIdParkInfoIdCompoundUniqueInput
    userId_eventId?: UserFavoriteUserIdEventIdCompoundUniqueInput
    AND?: UserFavoriteWhereInput | UserFavoriteWhereInput[]
    OR?: UserFavoriteWhereInput[]
    NOT?: UserFavoriteWhereInput | UserFavoriteWhereInput[]
    userId?: StringFilter<"UserFavorite"> | string
    troutStockingId?: StringNullableFilter<"UserFavorite"> | string | null
    parkInfoId?: StringNullableFilter<"UserFavorite"> | string | null
    eventId?: StringNullableFilter<"UserFavorite"> | string | null
    customLocation?: StringNullableFilter<"UserFavorite"> | string | null
    latitude?: FloatNullableFilter<"UserFavorite"> | number | null
    longitude?: FloatNullableFilter<"UserFavorite"> | number | null
    notes?: StringNullableFilter<"UserFavorite"> | string | null
    createdAt?: DateTimeFilter<"UserFavorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    troutStocking?: XOR<TroutStockingNullableScalarRelationFilter, TroutStockingWhereInput> | null
    parkInfo?: XOR<ParkInfoNullableScalarRelationFilter, ParkInfoWhereInput> | null
    event?: XOR<OutdoorEventNullableScalarRelationFilter, OutdoorEventWhereInput> | null
  }, "id" | "userId_troutStockingId" | "userId_parkInfoId" | "userId_eventId">

  export type UserFavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    troutStockingId?: SortOrderInput | SortOrder
    parkInfoId?: SortOrderInput | SortOrder
    eventId?: SortOrderInput | SortOrder
    customLocation?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserFavoriteCountOrderByAggregateInput
    _avg?: UserFavoriteAvgOrderByAggregateInput
    _max?: UserFavoriteMaxOrderByAggregateInput
    _min?: UserFavoriteMinOrderByAggregateInput
    _sum?: UserFavoriteSumOrderByAggregateInput
  }

  export type UserFavoriteScalarWhereWithAggregatesInput = {
    AND?: UserFavoriteScalarWhereWithAggregatesInput | UserFavoriteScalarWhereWithAggregatesInput[]
    OR?: UserFavoriteScalarWhereWithAggregatesInput[]
    NOT?: UserFavoriteScalarWhereWithAggregatesInput | UserFavoriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserFavorite"> | string
    userId?: StringWithAggregatesFilter<"UserFavorite"> | string
    troutStockingId?: StringNullableWithAggregatesFilter<"UserFavorite"> | string | null
    parkInfoId?: StringNullableWithAggregatesFilter<"UserFavorite"> | string | null
    eventId?: StringNullableWithAggregatesFilter<"UserFavorite"> | string | null
    customLocation?: StringNullableWithAggregatesFilter<"UserFavorite"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"UserFavorite"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"UserFavorite"> | number | null
    notes?: StringNullableWithAggregatesFilter<"UserFavorite"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserFavorite"> | Date | string
  }

  export type TripPlanWhereInput = {
    AND?: TripPlanWhereInput | TripPlanWhereInput[]
    OR?: TripPlanWhereInput[]
    NOT?: TripPlanWhereInput | TripPlanWhereInput[]
    id?: StringFilter<"TripPlan"> | string
    userId?: StringFilter<"TripPlan"> | string
    title?: StringFilter<"TripPlan"> | string
    description?: StringNullableFilter<"TripPlan"> | string | null
    startDate?: DateTimeFilter<"TripPlan"> | Date | string
    endDate?: DateTimeNullableFilter<"TripPlan"> | Date | string | null
    participants?: IntFilter<"TripPlan"> | number
    createdAt?: DateTimeFilter<"TripPlan"> | Date | string
    updatedAt?: DateTimeFilter<"TripPlan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: TripPlanItemListRelationFilter
  }

  export type TripPlanOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    participants?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: TripPlanItemOrderByRelationAggregateInput
  }

  export type TripPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TripPlanWhereInput | TripPlanWhereInput[]
    OR?: TripPlanWhereInput[]
    NOT?: TripPlanWhereInput | TripPlanWhereInput[]
    userId?: StringFilter<"TripPlan"> | string
    title?: StringFilter<"TripPlan"> | string
    description?: StringNullableFilter<"TripPlan"> | string | null
    startDate?: DateTimeFilter<"TripPlan"> | Date | string
    endDate?: DateTimeNullableFilter<"TripPlan"> | Date | string | null
    participants?: IntFilter<"TripPlan"> | number
    createdAt?: DateTimeFilter<"TripPlan"> | Date | string
    updatedAt?: DateTimeFilter<"TripPlan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: TripPlanItemListRelationFilter
  }, "id">

  export type TripPlanOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    participants?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TripPlanCountOrderByAggregateInput
    _avg?: TripPlanAvgOrderByAggregateInput
    _max?: TripPlanMaxOrderByAggregateInput
    _min?: TripPlanMinOrderByAggregateInput
    _sum?: TripPlanSumOrderByAggregateInput
  }

  export type TripPlanScalarWhereWithAggregatesInput = {
    AND?: TripPlanScalarWhereWithAggregatesInput | TripPlanScalarWhereWithAggregatesInput[]
    OR?: TripPlanScalarWhereWithAggregatesInput[]
    NOT?: TripPlanScalarWhereWithAggregatesInput | TripPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TripPlan"> | string
    userId?: StringWithAggregatesFilter<"TripPlan"> | string
    title?: StringWithAggregatesFilter<"TripPlan"> | string
    description?: StringNullableWithAggregatesFilter<"TripPlan"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"TripPlan"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"TripPlan"> | Date | string | null
    participants?: IntWithAggregatesFilter<"TripPlan"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TripPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TripPlan"> | Date | string
  }

  export type TripPlanItemWhereInput = {
    AND?: TripPlanItemWhereInput | TripPlanItemWhereInput[]
    OR?: TripPlanItemWhereInput[]
    NOT?: TripPlanItemWhereInput | TripPlanItemWhereInput[]
    id?: StringFilter<"TripPlanItem"> | string
    tripPlanId?: StringFilter<"TripPlanItem"> | string
    type?: StringFilter<"TripPlanItem"> | string
    troutStockingId?: StringNullableFilter<"TripPlanItem"> | string | null
    parkInfoId?: StringNullableFilter<"TripPlanItem"> | string | null
    eventId?: StringNullableFilter<"TripPlanItem"> | string | null
    customTitle?: StringNullableFilter<"TripPlanItem"> | string | null
    customLocation?: StringNullableFilter<"TripPlanItem"> | string | null
    latitude?: FloatNullableFilter<"TripPlanItem"> | number | null
    longitude?: FloatNullableFilter<"TripPlanItem"> | number | null
    scheduledTime?: DateTimeNullableFilter<"TripPlanItem"> | Date | string | null
    estimatedDuration?: IntNullableFilter<"TripPlanItem"> | number | null
    notes?: StringNullableFilter<"TripPlanItem"> | string | null
    completed?: BoolFilter<"TripPlanItem"> | boolean
    createdAt?: DateTimeFilter<"TripPlanItem"> | Date | string
    updatedAt?: DateTimeFilter<"TripPlanItem"> | Date | string
    tripPlan?: XOR<TripPlanScalarRelationFilter, TripPlanWhereInput>
    troutStocking?: XOR<TroutStockingNullableScalarRelationFilter, TroutStockingWhereInput> | null
    parkInfo?: XOR<ParkInfoNullableScalarRelationFilter, ParkInfoWhereInput> | null
    event?: XOR<OutdoorEventNullableScalarRelationFilter, OutdoorEventWhereInput> | null
  }

  export type TripPlanItemOrderByWithRelationInput = {
    id?: SortOrder
    tripPlanId?: SortOrder
    type?: SortOrder
    troutStockingId?: SortOrderInput | SortOrder
    parkInfoId?: SortOrderInput | SortOrder
    eventId?: SortOrderInput | SortOrder
    customTitle?: SortOrderInput | SortOrder
    customLocation?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    scheduledTime?: SortOrderInput | SortOrder
    estimatedDuration?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tripPlan?: TripPlanOrderByWithRelationInput
    troutStocking?: TroutStockingOrderByWithRelationInput
    parkInfo?: ParkInfoOrderByWithRelationInput
    event?: OutdoorEventOrderByWithRelationInput
  }

  export type TripPlanItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TripPlanItemWhereInput | TripPlanItemWhereInput[]
    OR?: TripPlanItemWhereInput[]
    NOT?: TripPlanItemWhereInput | TripPlanItemWhereInput[]
    tripPlanId?: StringFilter<"TripPlanItem"> | string
    type?: StringFilter<"TripPlanItem"> | string
    troutStockingId?: StringNullableFilter<"TripPlanItem"> | string | null
    parkInfoId?: StringNullableFilter<"TripPlanItem"> | string | null
    eventId?: StringNullableFilter<"TripPlanItem"> | string | null
    customTitle?: StringNullableFilter<"TripPlanItem"> | string | null
    customLocation?: StringNullableFilter<"TripPlanItem"> | string | null
    latitude?: FloatNullableFilter<"TripPlanItem"> | number | null
    longitude?: FloatNullableFilter<"TripPlanItem"> | number | null
    scheduledTime?: DateTimeNullableFilter<"TripPlanItem"> | Date | string | null
    estimatedDuration?: IntNullableFilter<"TripPlanItem"> | number | null
    notes?: StringNullableFilter<"TripPlanItem"> | string | null
    completed?: BoolFilter<"TripPlanItem"> | boolean
    createdAt?: DateTimeFilter<"TripPlanItem"> | Date | string
    updatedAt?: DateTimeFilter<"TripPlanItem"> | Date | string
    tripPlan?: XOR<TripPlanScalarRelationFilter, TripPlanWhereInput>
    troutStocking?: XOR<TroutStockingNullableScalarRelationFilter, TroutStockingWhereInput> | null
    parkInfo?: XOR<ParkInfoNullableScalarRelationFilter, ParkInfoWhereInput> | null
    event?: XOR<OutdoorEventNullableScalarRelationFilter, OutdoorEventWhereInput> | null
  }, "id">

  export type TripPlanItemOrderByWithAggregationInput = {
    id?: SortOrder
    tripPlanId?: SortOrder
    type?: SortOrder
    troutStockingId?: SortOrderInput | SortOrder
    parkInfoId?: SortOrderInput | SortOrder
    eventId?: SortOrderInput | SortOrder
    customTitle?: SortOrderInput | SortOrder
    customLocation?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    scheduledTime?: SortOrderInput | SortOrder
    estimatedDuration?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TripPlanItemCountOrderByAggregateInput
    _avg?: TripPlanItemAvgOrderByAggregateInput
    _max?: TripPlanItemMaxOrderByAggregateInput
    _min?: TripPlanItemMinOrderByAggregateInput
    _sum?: TripPlanItemSumOrderByAggregateInput
  }

  export type TripPlanItemScalarWhereWithAggregatesInput = {
    AND?: TripPlanItemScalarWhereWithAggregatesInput | TripPlanItemScalarWhereWithAggregatesInput[]
    OR?: TripPlanItemScalarWhereWithAggregatesInput[]
    NOT?: TripPlanItemScalarWhereWithAggregatesInput | TripPlanItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TripPlanItem"> | string
    tripPlanId?: StringWithAggregatesFilter<"TripPlanItem"> | string
    type?: StringWithAggregatesFilter<"TripPlanItem"> | string
    troutStockingId?: StringNullableWithAggregatesFilter<"TripPlanItem"> | string | null
    parkInfoId?: StringNullableWithAggregatesFilter<"TripPlanItem"> | string | null
    eventId?: StringNullableWithAggregatesFilter<"TripPlanItem"> | string | null
    customTitle?: StringNullableWithAggregatesFilter<"TripPlanItem"> | string | null
    customLocation?: StringNullableWithAggregatesFilter<"TripPlanItem"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"TripPlanItem"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"TripPlanItem"> | number | null
    scheduledTime?: DateTimeNullableWithAggregatesFilter<"TripPlanItem"> | Date | string | null
    estimatedDuration?: IntNullableWithAggregatesFilter<"TripPlanItem"> | number | null
    notes?: StringNullableWithAggregatesFilter<"TripPlanItem"> | string | null
    completed?: BoolWithAggregatesFilter<"TripPlanItem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TripPlanItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TripPlanItem"> | Date | string
  }

  export type UserSubscriptionWhereInput = {
    AND?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    OR?: UserSubscriptionWhereInput[]
    NOT?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    id?: StringFilter<"UserSubscription"> | string
    userId?: StringFilter<"UserSubscription"> | string
    type?: StringFilter<"UserSubscription"> | string
    value?: StringFilter<"UserSubscription"> | string
    notifyEmail?: BoolFilter<"UserSubscription"> | boolean
    notifyPush?: BoolFilter<"UserSubscription"> | boolean
    createdAt?: DateTimeFilter<"UserSubscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    notifyEmail?: SortOrder
    notifyPush?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_type_value?: UserSubscriptionUserIdTypeValueCompoundUniqueInput
    AND?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    OR?: UserSubscriptionWhereInput[]
    NOT?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    userId?: StringFilter<"UserSubscription"> | string
    type?: StringFilter<"UserSubscription"> | string
    value?: StringFilter<"UserSubscription"> | string
    notifyEmail?: BoolFilter<"UserSubscription"> | boolean
    notifyPush?: BoolFilter<"UserSubscription"> | boolean
    createdAt?: DateTimeFilter<"UserSubscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_type_value">

  export type UserSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    notifyEmail?: SortOrder
    notifyPush?: SortOrder
    createdAt?: SortOrder
    _count?: UserSubscriptionCountOrderByAggregateInput
    _max?: UserSubscriptionMaxOrderByAggregateInput
    _min?: UserSubscriptionMinOrderByAggregateInput
  }

  export type UserSubscriptionScalarWhereWithAggregatesInput = {
    AND?: UserSubscriptionScalarWhereWithAggregatesInput | UserSubscriptionScalarWhereWithAggregatesInput[]
    OR?: UserSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: UserSubscriptionScalarWhereWithAggregatesInput | UserSubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSubscription"> | string
    userId?: StringWithAggregatesFilter<"UserSubscription"> | string
    type?: StringWithAggregatesFilter<"UserSubscription"> | string
    value?: StringWithAggregatesFilter<"UserSubscription"> | string
    notifyEmail?: BoolWithAggregatesFilter<"UserSubscription"> | boolean
    notifyPush?: BoolWithAggregatesFilter<"UserSubscription"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserSubscription"> | Date | string
  }

  export type DataSyncLogWhereInput = {
    AND?: DataSyncLogWhereInput | DataSyncLogWhereInput[]
    OR?: DataSyncLogWhereInput[]
    NOT?: DataSyncLogWhereInput | DataSyncLogWhereInput[]
    id?: StringFilter<"DataSyncLog"> | string
    type?: StringFilter<"DataSyncLog"> | string
    status?: StringFilter<"DataSyncLog"> | string
    recordsProcessed?: IntFilter<"DataSyncLog"> | number
    recordsAdded?: IntFilter<"DataSyncLog"> | number
    recordsUpdated?: IntFilter<"DataSyncLog"> | number
    errorMessage?: StringNullableFilter<"DataSyncLog"> | string | null
    executionTime?: IntNullableFilter<"DataSyncLog"> | number | null
    createdAt?: DateTimeFilter<"DataSyncLog"> | Date | string
  }

  export type DataSyncLogOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    recordsProcessed?: SortOrder
    recordsAdded?: SortOrder
    recordsUpdated?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    executionTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type DataSyncLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DataSyncLogWhereInput | DataSyncLogWhereInput[]
    OR?: DataSyncLogWhereInput[]
    NOT?: DataSyncLogWhereInput | DataSyncLogWhereInput[]
    type?: StringFilter<"DataSyncLog"> | string
    status?: StringFilter<"DataSyncLog"> | string
    recordsProcessed?: IntFilter<"DataSyncLog"> | number
    recordsAdded?: IntFilter<"DataSyncLog"> | number
    recordsUpdated?: IntFilter<"DataSyncLog"> | number
    errorMessage?: StringNullableFilter<"DataSyncLog"> | string | null
    executionTime?: IntNullableFilter<"DataSyncLog"> | number | null
    createdAt?: DateTimeFilter<"DataSyncLog"> | Date | string
  }, "id">

  export type DataSyncLogOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    recordsProcessed?: SortOrder
    recordsAdded?: SortOrder
    recordsUpdated?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    executionTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DataSyncLogCountOrderByAggregateInput
    _avg?: DataSyncLogAvgOrderByAggregateInput
    _max?: DataSyncLogMaxOrderByAggregateInput
    _min?: DataSyncLogMinOrderByAggregateInput
    _sum?: DataSyncLogSumOrderByAggregateInput
  }

  export type DataSyncLogScalarWhereWithAggregatesInput = {
    AND?: DataSyncLogScalarWhereWithAggregatesInput | DataSyncLogScalarWhereWithAggregatesInput[]
    OR?: DataSyncLogScalarWhereWithAggregatesInput[]
    NOT?: DataSyncLogScalarWhereWithAggregatesInput | DataSyncLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DataSyncLog"> | string
    type?: StringWithAggregatesFilter<"DataSyncLog"> | string
    status?: StringWithAggregatesFilter<"DataSyncLog"> | string
    recordsProcessed?: IntWithAggregatesFilter<"DataSyncLog"> | number
    recordsAdded?: IntWithAggregatesFilter<"DataSyncLog"> | number
    recordsUpdated?: IntWithAggregatesFilter<"DataSyncLog"> | number
    errorMessage?: StringNullableWithAggregatesFilter<"DataSyncLog"> | string | null
    executionTime?: IntNullableWithAggregatesFilter<"DataSyncLog"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"DataSyncLog"> | Date | string
  }

  export type TroutStockingCreateInput = {
    id?: string
    location: string
    waterBody: string
    county?: string | null
    species: string
    size?: string | null
    quantity: number
    stockingDate: Date | string
    nextStockingDate?: Date | string | null
    latitude?: number | null
    longitude?: number | null
    waterBodyType?: string | null
    accessInfo?: string | null
    regulations?: string | null
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: UserFavoriteCreateNestedManyWithoutTroutStockingInput
    tripPlanItems?: TripPlanItemCreateNestedManyWithoutTroutStockingInput
  }

  export type TroutStockingUncheckedCreateInput = {
    id?: string
    location: string
    waterBody: string
    county?: string | null
    species: string
    size?: string | null
    quantity: number
    stockingDate: Date | string
    nextStockingDate?: Date | string | null
    latitude?: number | null
    longitude?: number | null
    waterBodyType?: string | null
    accessInfo?: string | null
    regulations?: string | null
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: UserFavoriteUncheckedCreateNestedManyWithoutTroutStockingInput
    tripPlanItems?: TripPlanItemUncheckedCreateNestedManyWithoutTroutStockingInput
  }

  export type TroutStockingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    waterBody?: StringFieldUpdateOperationsInput | string
    county?: NullableStringFieldUpdateOperationsInput | string | null
    species?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    stockingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextStockingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    waterBodyType?: NullableStringFieldUpdateOperationsInput | string | null
    accessInfo?: NullableStringFieldUpdateOperationsInput | string | null
    regulations?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: UserFavoriteUpdateManyWithoutTroutStockingNestedInput
    tripPlanItems?: TripPlanItemUpdateManyWithoutTroutStockingNestedInput
  }

  export type TroutStockingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    waterBody?: StringFieldUpdateOperationsInput | string
    county?: NullableStringFieldUpdateOperationsInput | string | null
    species?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    stockingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextStockingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    waterBodyType?: NullableStringFieldUpdateOperationsInput | string | null
    accessInfo?: NullableStringFieldUpdateOperationsInput | string | null
    regulations?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: UserFavoriteUncheckedUpdateManyWithoutTroutStockingNestedInput
    tripPlanItems?: TripPlanItemUncheckedUpdateManyWithoutTroutStockingNestedInput
  }

  export type TroutStockingCreateManyInput = {
    id?: string
    location: string
    waterBody: string
    county?: string | null
    species: string
    size?: string | null
    quantity: number
    stockingDate: Date | string
    nextStockingDate?: Date | string | null
    latitude?: number | null
    longitude?: number | null
    waterBodyType?: string | null
    accessInfo?: string | null
    regulations?: string | null
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TroutStockingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    waterBody?: StringFieldUpdateOperationsInput | string
    county?: NullableStringFieldUpdateOperationsInput | string | null
    species?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    stockingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextStockingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    waterBodyType?: NullableStringFieldUpdateOperationsInput | string | null
    accessInfo?: NullableStringFieldUpdateOperationsInput | string | null
    regulations?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TroutStockingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    waterBody?: StringFieldUpdateOperationsInput | string
    county?: NullableStringFieldUpdateOperationsInput | string | null
    species?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    stockingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextStockingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    waterBodyType?: NullableStringFieldUpdateOperationsInput | string | null
    accessInfo?: NullableStringFieldUpdateOperationsInput | string | null
    regulations?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterConditionCreateInput = {
    id?: string
    waterBody: string
    location: string
    lastUpdated: Date | string
    waterLevel: string
    waterTemperature?: number | null
    clarity: string
    flow: string
    fishingConditions: string
    notes?: string | null
    weatherImpact?: string | null
    source?: string
    createdAt?: Date | string
  }

  export type WaterConditionUncheckedCreateInput = {
    id?: string
    waterBody: string
    location: string
    lastUpdated: Date | string
    waterLevel: string
    waterTemperature?: number | null
    clarity: string
    flow: string
    fishingConditions: string
    notes?: string | null
    weatherImpact?: string | null
    source?: string
    createdAt?: Date | string
  }

  export type WaterConditionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    waterBody?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    waterLevel?: StringFieldUpdateOperationsInput | string
    waterTemperature?: NullableFloatFieldUpdateOperationsInput | number | null
    clarity?: StringFieldUpdateOperationsInput | string
    flow?: StringFieldUpdateOperationsInput | string
    fishingConditions?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    weatherImpact?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterConditionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    waterBody?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    waterLevel?: StringFieldUpdateOperationsInput | string
    waterTemperature?: NullableFloatFieldUpdateOperationsInput | number | null
    clarity?: StringFieldUpdateOperationsInput | string
    flow?: StringFieldUpdateOperationsInput | string
    fishingConditions?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    weatherImpact?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterConditionCreateManyInput = {
    id?: string
    waterBody: string
    location: string
    lastUpdated: Date | string
    waterLevel: string
    waterTemperature?: number | null
    clarity: string
    flow: string
    fishingConditions: string
    notes?: string | null
    weatherImpact?: string | null
    source?: string
    createdAt?: Date | string
  }

  export type WaterConditionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    waterBody?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    waterLevel?: StringFieldUpdateOperationsInput | string
    waterTemperature?: NullableFloatFieldUpdateOperationsInput | number | null
    clarity?: StringFieldUpdateOperationsInput | string
    flow?: StringFieldUpdateOperationsInput | string
    fishingConditions?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    weatherImpact?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterConditionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    waterBody?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    waterLevel?: StringFieldUpdateOperationsInput | string
    waterTemperature?: NullableFloatFieldUpdateOperationsInput | number | null
    clarity?: StringFieldUpdateOperationsInput | string
    flow?: StringFieldUpdateOperationsInput | string
    fishingConditions?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    weatherImpact?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutdoorEventCreateInput = {
    id?: string
    title: string
    description?: string | null
    eventType: string
    location: string
    latitude?: number | null
    longitude?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    cost?: number | null
    registrationRequired?: boolean
    registrationUrl?: string | null
    contactInfo?: string | null
    ageRestrictions?: string | null
    capacity?: number | null
    difficulty?: string | null
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: UserFavoriteCreateNestedManyWithoutEventInput
    tripPlanItems?: TripPlanItemCreateNestedManyWithoutEventInput
  }

  export type OutdoorEventUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    eventType: string
    location: string
    latitude?: number | null
    longitude?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    cost?: number | null
    registrationRequired?: boolean
    registrationUrl?: string | null
    contactInfo?: string | null
    ageRestrictions?: string | null
    capacity?: number | null
    difficulty?: string | null
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: UserFavoriteUncheckedCreateNestedManyWithoutEventInput
    tripPlanItems?: TripPlanItemUncheckedCreateNestedManyWithoutEventInput
  }

  export type OutdoorEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    registrationRequired?: BoolFieldUpdateOperationsInput | boolean
    registrationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ageRestrictions?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: UserFavoriteUpdateManyWithoutEventNestedInput
    tripPlanItems?: TripPlanItemUpdateManyWithoutEventNestedInput
  }

  export type OutdoorEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    registrationRequired?: BoolFieldUpdateOperationsInput | boolean
    registrationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ageRestrictions?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: UserFavoriteUncheckedUpdateManyWithoutEventNestedInput
    tripPlanItems?: TripPlanItemUncheckedUpdateManyWithoutEventNestedInput
  }

  export type OutdoorEventCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    eventType: string
    location: string
    latitude?: number | null
    longitude?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    cost?: number | null
    registrationRequired?: boolean
    registrationUrl?: string | null
    contactInfo?: string | null
    ageRestrictions?: string | null
    capacity?: number | null
    difficulty?: string | null
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutdoorEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    registrationRequired?: BoolFieldUpdateOperationsInput | boolean
    registrationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ageRestrictions?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutdoorEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    registrationRequired?: BoolFieldUpdateOperationsInput | boolean
    registrationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ageRestrictions?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HuntingInfoCreateInput = {
    id?: string
    species: string
    seasonStartDate: Date | string
    seasonEndDate: Date | string
    seasonDescription?: string | null
    units: string
    licenseRequired: string
    dailyBagLimit?: number | null
    possessionLimit?: number | null
    seasonLimit?: number | null
    weaponRestrictions: string
    specialRules: string
    applicationDeadline?: Date | string | null
    drawResults?: Date | string | null
    tags: string
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HuntingInfoUncheckedCreateInput = {
    id?: string
    species: string
    seasonStartDate: Date | string
    seasonEndDate: Date | string
    seasonDescription?: string | null
    units: string
    licenseRequired: string
    dailyBagLimit?: number | null
    possessionLimit?: number | null
    seasonLimit?: number | null
    weaponRestrictions: string
    specialRules: string
    applicationDeadline?: Date | string | null
    drawResults?: Date | string | null
    tags: string
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HuntingInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    seasonStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    seasonEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    seasonDescription?: NullableStringFieldUpdateOperationsInput | string | null
    units?: StringFieldUpdateOperationsInput | string
    licenseRequired?: StringFieldUpdateOperationsInput | string
    dailyBagLimit?: NullableIntFieldUpdateOperationsInput | number | null
    possessionLimit?: NullableIntFieldUpdateOperationsInput | number | null
    seasonLimit?: NullableIntFieldUpdateOperationsInput | number | null
    weaponRestrictions?: StringFieldUpdateOperationsInput | string
    specialRules?: StringFieldUpdateOperationsInput | string
    applicationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drawResults?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HuntingInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    seasonStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    seasonEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    seasonDescription?: NullableStringFieldUpdateOperationsInput | string | null
    units?: StringFieldUpdateOperationsInput | string
    licenseRequired?: StringFieldUpdateOperationsInput | string
    dailyBagLimit?: NullableIntFieldUpdateOperationsInput | number | null
    possessionLimit?: NullableIntFieldUpdateOperationsInput | number | null
    seasonLimit?: NullableIntFieldUpdateOperationsInput | number | null
    weaponRestrictions?: StringFieldUpdateOperationsInput | string
    specialRules?: StringFieldUpdateOperationsInput | string
    applicationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drawResults?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HuntingInfoCreateManyInput = {
    id?: string
    species: string
    seasonStartDate: Date | string
    seasonEndDate: Date | string
    seasonDescription?: string | null
    units: string
    licenseRequired: string
    dailyBagLimit?: number | null
    possessionLimit?: number | null
    seasonLimit?: number | null
    weaponRestrictions: string
    specialRules: string
    applicationDeadline?: Date | string | null
    drawResults?: Date | string | null
    tags: string
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HuntingInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    seasonStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    seasonEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    seasonDescription?: NullableStringFieldUpdateOperationsInput | string | null
    units?: StringFieldUpdateOperationsInput | string
    licenseRequired?: StringFieldUpdateOperationsInput | string
    dailyBagLimit?: NullableIntFieldUpdateOperationsInput | number | null
    possessionLimit?: NullableIntFieldUpdateOperationsInput | number | null
    seasonLimit?: NullableIntFieldUpdateOperationsInput | number | null
    weaponRestrictions?: StringFieldUpdateOperationsInput | string
    specialRules?: StringFieldUpdateOperationsInput | string
    applicationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drawResults?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HuntingInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    seasonStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    seasonEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    seasonDescription?: NullableStringFieldUpdateOperationsInput | string | null
    units?: StringFieldUpdateOperationsInput | string
    licenseRequired?: StringFieldUpdateOperationsInput | string
    dailyBagLimit?: NullableIntFieldUpdateOperationsInput | number | null
    possessionLimit?: NullableIntFieldUpdateOperationsInput | number | null
    seasonLimit?: NullableIntFieldUpdateOperationsInput | number | null
    weaponRestrictions?: StringFieldUpdateOperationsInput | string
    specialRules?: StringFieldUpdateOperationsInput | string
    applicationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drawResults?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkInfoCreateInput = {
    id?: string
    name: string
    type: string
    location: string
    latitude: number
    longitude: number
    amenities: string
    activities: string
    dailyPassFee?: number | null
    annualPassFee?: number | null
    campingFee?: number | null
    summerHours?: string | null
    winterHours?: string | null
    currentHours: string
    campingAvailable?: boolean
    reservationRequired?: boolean | null
    petPolicy?: string | null
    accessibility: string
    currentConditions?: string | null
    alerts: string
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: UserFavoriteCreateNestedManyWithoutParkInfoInput
    tripPlanItems?: TripPlanItemCreateNestedManyWithoutParkInfoInput
  }

  export type ParkInfoUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    location: string
    latitude: number
    longitude: number
    amenities: string
    activities: string
    dailyPassFee?: number | null
    annualPassFee?: number | null
    campingFee?: number | null
    summerHours?: string | null
    winterHours?: string | null
    currentHours: string
    campingAvailable?: boolean
    reservationRequired?: boolean | null
    petPolicy?: string | null
    accessibility: string
    currentConditions?: string | null
    alerts: string
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: UserFavoriteUncheckedCreateNestedManyWithoutParkInfoInput
    tripPlanItems?: TripPlanItemUncheckedCreateNestedManyWithoutParkInfoInput
  }

  export type ParkInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    amenities?: StringFieldUpdateOperationsInput | string
    activities?: StringFieldUpdateOperationsInput | string
    dailyPassFee?: NullableFloatFieldUpdateOperationsInput | number | null
    annualPassFee?: NullableFloatFieldUpdateOperationsInput | number | null
    campingFee?: NullableFloatFieldUpdateOperationsInput | number | null
    summerHours?: NullableStringFieldUpdateOperationsInput | string | null
    winterHours?: NullableStringFieldUpdateOperationsInput | string | null
    currentHours?: StringFieldUpdateOperationsInput | string
    campingAvailable?: BoolFieldUpdateOperationsInput | boolean
    reservationRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    petPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    accessibility?: StringFieldUpdateOperationsInput | string
    currentConditions?: NullableStringFieldUpdateOperationsInput | string | null
    alerts?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: UserFavoriteUpdateManyWithoutParkInfoNestedInput
    tripPlanItems?: TripPlanItemUpdateManyWithoutParkInfoNestedInput
  }

  export type ParkInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    amenities?: StringFieldUpdateOperationsInput | string
    activities?: StringFieldUpdateOperationsInput | string
    dailyPassFee?: NullableFloatFieldUpdateOperationsInput | number | null
    annualPassFee?: NullableFloatFieldUpdateOperationsInput | number | null
    campingFee?: NullableFloatFieldUpdateOperationsInput | number | null
    summerHours?: NullableStringFieldUpdateOperationsInput | string | null
    winterHours?: NullableStringFieldUpdateOperationsInput | string | null
    currentHours?: StringFieldUpdateOperationsInput | string
    campingAvailable?: BoolFieldUpdateOperationsInput | boolean
    reservationRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    petPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    accessibility?: StringFieldUpdateOperationsInput | string
    currentConditions?: NullableStringFieldUpdateOperationsInput | string | null
    alerts?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: UserFavoriteUncheckedUpdateManyWithoutParkInfoNestedInput
    tripPlanItems?: TripPlanItemUncheckedUpdateManyWithoutParkInfoNestedInput
  }

  export type ParkInfoCreateManyInput = {
    id?: string
    name: string
    type: string
    location: string
    latitude: number
    longitude: number
    amenities: string
    activities: string
    dailyPassFee?: number | null
    annualPassFee?: number | null
    campingFee?: number | null
    summerHours?: string | null
    winterHours?: string | null
    currentHours: string
    campingAvailable?: boolean
    reservationRequired?: boolean | null
    petPolicy?: string | null
    accessibility: string
    currentConditions?: string | null
    alerts: string
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    amenities?: StringFieldUpdateOperationsInput | string
    activities?: StringFieldUpdateOperationsInput | string
    dailyPassFee?: NullableFloatFieldUpdateOperationsInput | number | null
    annualPassFee?: NullableFloatFieldUpdateOperationsInput | number | null
    campingFee?: NullableFloatFieldUpdateOperationsInput | number | null
    summerHours?: NullableStringFieldUpdateOperationsInput | string | null
    winterHours?: NullableStringFieldUpdateOperationsInput | string | null
    currentHours?: StringFieldUpdateOperationsInput | string
    campingAvailable?: BoolFieldUpdateOperationsInput | boolean
    reservationRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    petPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    accessibility?: StringFieldUpdateOperationsInput | string
    currentConditions?: NullableStringFieldUpdateOperationsInput | string | null
    alerts?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    amenities?: StringFieldUpdateOperationsInput | string
    activities?: StringFieldUpdateOperationsInput | string
    dailyPassFee?: NullableFloatFieldUpdateOperationsInput | number | null
    annualPassFee?: NullableFloatFieldUpdateOperationsInput | number | null
    campingFee?: NullableFloatFieldUpdateOperationsInput | number | null
    summerHours?: NullableStringFieldUpdateOperationsInput | string | null
    winterHours?: NullableStringFieldUpdateOperationsInput | string | null
    currentHours?: StringFieldUpdateOperationsInput | string
    campingAvailable?: BoolFieldUpdateOperationsInput | boolean
    reservationRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    petPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    accessibility?: StringFieldUpdateOperationsInput | string
    currentConditions?: NullableStringFieldUpdateOperationsInput | string | null
    alerts?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteLocations?: UserFavoriteCreateNestedManyWithoutUserInput
    tripPlans?: TripPlanCreateNestedManyWithoutUserInput
    subscriptions?: UserSubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteLocations?: UserFavoriteUncheckedCreateNestedManyWithoutUserInput
    tripPlans?: TripPlanUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteLocations?: UserFavoriteUpdateManyWithoutUserNestedInput
    tripPlans?: TripPlanUpdateManyWithoutUserNestedInput
    subscriptions?: UserSubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteLocations?: UserFavoriteUncheckedUpdateManyWithoutUserNestedInput
    tripPlans?: TripPlanUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteCreateInput = {
    id?: string
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    notes?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoriteLocationsInput
    troutStocking?: TroutStockingCreateNestedOneWithoutFavoritesInput
    parkInfo?: ParkInfoCreateNestedOneWithoutFavoritesInput
    event?: OutdoorEventCreateNestedOneWithoutFavoritesInput
  }

  export type UserFavoriteUncheckedCreateInput = {
    id?: string
    userId: string
    troutStockingId?: string | null
    parkInfoId?: string | null
    eventId?: string | null
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type UserFavoriteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoriteLocationsNestedInput
    troutStocking?: TroutStockingUpdateOneWithoutFavoritesNestedInput
    parkInfo?: ParkInfoUpdateOneWithoutFavoritesNestedInput
    event?: OutdoorEventUpdateOneWithoutFavoritesNestedInput
  }

  export type UserFavoriteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    troutStockingId?: NullableStringFieldUpdateOperationsInput | string | null
    parkInfoId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteCreateManyInput = {
    id?: string
    userId: string
    troutStockingId?: string | null
    parkInfoId?: string | null
    eventId?: string | null
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type UserFavoriteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    troutStockingId?: NullableStringFieldUpdateOperationsInput | string | null
    parkInfoId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanCreateInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    participants?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTripPlansInput
    items?: TripPlanItemCreateNestedManyWithoutTripPlanInput
  }

  export type TripPlanUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    participants?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: TripPlanItemUncheckedCreateNestedManyWithoutTripPlanInput
  }

  export type TripPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTripPlansNestedInput
    items?: TripPlanItemUpdateManyWithoutTripPlanNestedInput
  }

  export type TripPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: TripPlanItemUncheckedUpdateManyWithoutTripPlanNestedInput
  }

  export type TripPlanCreateManyInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    participants?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanItemCreateInput = {
    id?: string
    type: string
    customTitle?: string | null
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    scheduledTime?: Date | string | null
    estimatedDuration?: number | null
    notes?: string | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tripPlan: TripPlanCreateNestedOneWithoutItemsInput
    troutStocking?: TroutStockingCreateNestedOneWithoutTripPlanItemsInput
    parkInfo?: ParkInfoCreateNestedOneWithoutTripPlanItemsInput
    event?: OutdoorEventCreateNestedOneWithoutTripPlanItemsInput
  }

  export type TripPlanItemUncheckedCreateInput = {
    id?: string
    tripPlanId: string
    type: string
    troutStockingId?: string | null
    parkInfoId?: string | null
    eventId?: string | null
    customTitle?: string | null
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    scheduledTime?: Date | string | null
    estimatedDuration?: number | null
    notes?: string | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPlanItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    customTitle?: NullableStringFieldUpdateOperationsInput | string | null
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripPlan?: TripPlanUpdateOneRequiredWithoutItemsNestedInput
    troutStocking?: TroutStockingUpdateOneWithoutTripPlanItemsNestedInput
    parkInfo?: ParkInfoUpdateOneWithoutTripPlanItemsNestedInput
    event?: OutdoorEventUpdateOneWithoutTripPlanItemsNestedInput
  }

  export type TripPlanItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripPlanId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    troutStockingId?: NullableStringFieldUpdateOperationsInput | string | null
    parkInfoId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    customTitle?: NullableStringFieldUpdateOperationsInput | string | null
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanItemCreateManyInput = {
    id?: string
    tripPlanId: string
    type: string
    troutStockingId?: string | null
    parkInfoId?: string | null
    eventId?: string | null
    customTitle?: string | null
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    scheduledTime?: Date | string | null
    estimatedDuration?: number | null
    notes?: string | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPlanItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    customTitle?: NullableStringFieldUpdateOperationsInput | string | null
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripPlanId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    troutStockingId?: NullableStringFieldUpdateOperationsInput | string | null
    parkInfoId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    customTitle?: NullableStringFieldUpdateOperationsInput | string | null
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionCreateInput = {
    id?: string
    type: string
    value: string
    notifyEmail?: boolean
    notifyPush?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionsInput
  }

  export type UserSubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    value: string
    notifyEmail?: boolean
    notifyPush?: boolean
    createdAt?: Date | string
  }

  export type UserSubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    notifyEmail?: BoolFieldUpdateOperationsInput | boolean
    notifyPush?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type UserSubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    notifyEmail?: BoolFieldUpdateOperationsInput | boolean
    notifyPush?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionCreateManyInput = {
    id?: string
    userId: string
    type: string
    value: string
    notifyEmail?: boolean
    notifyPush?: boolean
    createdAt?: Date | string
  }

  export type UserSubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    notifyEmail?: BoolFieldUpdateOperationsInput | boolean
    notifyPush?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    notifyEmail?: BoolFieldUpdateOperationsInput | boolean
    notifyPush?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataSyncLogCreateInput = {
    id?: string
    type: string
    status: string
    recordsProcessed?: number
    recordsAdded?: number
    recordsUpdated?: number
    errorMessage?: string | null
    executionTime?: number | null
    createdAt?: Date | string
  }

  export type DataSyncLogUncheckedCreateInput = {
    id?: string
    type: string
    status: string
    recordsProcessed?: number
    recordsAdded?: number
    recordsUpdated?: number
    errorMessage?: string | null
    executionTime?: number | null
    createdAt?: Date | string
  }

  export type DataSyncLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    recordsProcessed?: IntFieldUpdateOperationsInput | number
    recordsAdded?: IntFieldUpdateOperationsInput | number
    recordsUpdated?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    executionTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataSyncLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    recordsProcessed?: IntFieldUpdateOperationsInput | number
    recordsAdded?: IntFieldUpdateOperationsInput | number
    recordsUpdated?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    executionTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataSyncLogCreateManyInput = {
    id?: string
    type: string
    status: string
    recordsProcessed?: number
    recordsAdded?: number
    recordsUpdated?: number
    errorMessage?: string | null
    executionTime?: number | null
    createdAt?: Date | string
  }

  export type DataSyncLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    recordsProcessed?: IntFieldUpdateOperationsInput | number
    recordsAdded?: IntFieldUpdateOperationsInput | number
    recordsUpdated?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    executionTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataSyncLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    recordsProcessed?: IntFieldUpdateOperationsInput | number
    recordsAdded?: IntFieldUpdateOperationsInput | number
    recordsUpdated?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    executionTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserFavoriteListRelationFilter = {
    every?: UserFavoriteWhereInput
    some?: UserFavoriteWhereInput
    none?: UserFavoriteWhereInput
  }

  export type TripPlanItemListRelationFilter = {
    every?: TripPlanItemWhereInput
    some?: TripPlanItemWhereInput
    none?: TripPlanItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserFavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripPlanItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TroutStockingLocation_stockingDateCompoundUniqueInput = {
    location: string
    stockingDate: Date | string
  }

  export type TroutStockingCountOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    waterBody?: SortOrder
    county?: SortOrder
    species?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    stockingDate?: SortOrder
    nextStockingDate?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    waterBodyType?: SortOrder
    accessInfo?: SortOrder
    regulations?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TroutStockingAvgOrderByAggregateInput = {
    quantity?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type TroutStockingMaxOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    waterBody?: SortOrder
    county?: SortOrder
    species?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    stockingDate?: SortOrder
    nextStockingDate?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    waterBodyType?: SortOrder
    accessInfo?: SortOrder
    regulations?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TroutStockingMinOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    waterBody?: SortOrder
    county?: SortOrder
    species?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    stockingDate?: SortOrder
    nextStockingDate?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    waterBodyType?: SortOrder
    accessInfo?: SortOrder
    regulations?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TroutStockingSumOrderByAggregateInput = {
    quantity?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type WaterConditionCountOrderByAggregateInput = {
    id?: SortOrder
    waterBody?: SortOrder
    location?: SortOrder
    lastUpdated?: SortOrder
    waterLevel?: SortOrder
    waterTemperature?: SortOrder
    clarity?: SortOrder
    flow?: SortOrder
    fishingConditions?: SortOrder
    notes?: SortOrder
    weatherImpact?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type WaterConditionAvgOrderByAggregateInput = {
    waterTemperature?: SortOrder
  }

  export type WaterConditionMaxOrderByAggregateInput = {
    id?: SortOrder
    waterBody?: SortOrder
    location?: SortOrder
    lastUpdated?: SortOrder
    waterLevel?: SortOrder
    waterTemperature?: SortOrder
    clarity?: SortOrder
    flow?: SortOrder
    fishingConditions?: SortOrder
    notes?: SortOrder
    weatherImpact?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type WaterConditionMinOrderByAggregateInput = {
    id?: SortOrder
    waterBody?: SortOrder
    location?: SortOrder
    lastUpdated?: SortOrder
    waterLevel?: SortOrder
    waterTemperature?: SortOrder
    clarity?: SortOrder
    flow?: SortOrder
    fishingConditions?: SortOrder
    notes?: SortOrder
    weatherImpact?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type WaterConditionSumOrderByAggregateInput = {
    waterTemperature?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type OutdoorEventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    eventType?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    cost?: SortOrder
    registrationRequired?: SortOrder
    registrationUrl?: SortOrder
    contactInfo?: SortOrder
    ageRestrictions?: SortOrder
    capacity?: SortOrder
    difficulty?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutdoorEventAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    cost?: SortOrder
    capacity?: SortOrder
  }

  export type OutdoorEventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    eventType?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    cost?: SortOrder
    registrationRequired?: SortOrder
    registrationUrl?: SortOrder
    contactInfo?: SortOrder
    ageRestrictions?: SortOrder
    capacity?: SortOrder
    difficulty?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutdoorEventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    eventType?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    cost?: SortOrder
    registrationRequired?: SortOrder
    registrationUrl?: SortOrder
    contactInfo?: SortOrder
    ageRestrictions?: SortOrder
    capacity?: SortOrder
    difficulty?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutdoorEventSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    cost?: SortOrder
    capacity?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type HuntingInfoCountOrderByAggregateInput = {
    id?: SortOrder
    species?: SortOrder
    seasonStartDate?: SortOrder
    seasonEndDate?: SortOrder
    seasonDescription?: SortOrder
    units?: SortOrder
    licenseRequired?: SortOrder
    dailyBagLimit?: SortOrder
    possessionLimit?: SortOrder
    seasonLimit?: SortOrder
    weaponRestrictions?: SortOrder
    specialRules?: SortOrder
    applicationDeadline?: SortOrder
    drawResults?: SortOrder
    tags?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HuntingInfoAvgOrderByAggregateInput = {
    dailyBagLimit?: SortOrder
    possessionLimit?: SortOrder
    seasonLimit?: SortOrder
  }

  export type HuntingInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    species?: SortOrder
    seasonStartDate?: SortOrder
    seasonEndDate?: SortOrder
    seasonDescription?: SortOrder
    units?: SortOrder
    licenseRequired?: SortOrder
    dailyBagLimit?: SortOrder
    possessionLimit?: SortOrder
    seasonLimit?: SortOrder
    weaponRestrictions?: SortOrder
    specialRules?: SortOrder
    applicationDeadline?: SortOrder
    drawResults?: SortOrder
    tags?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HuntingInfoMinOrderByAggregateInput = {
    id?: SortOrder
    species?: SortOrder
    seasonStartDate?: SortOrder
    seasonEndDate?: SortOrder
    seasonDescription?: SortOrder
    units?: SortOrder
    licenseRequired?: SortOrder
    dailyBagLimit?: SortOrder
    possessionLimit?: SortOrder
    seasonLimit?: SortOrder
    weaponRestrictions?: SortOrder
    specialRules?: SortOrder
    applicationDeadline?: SortOrder
    drawResults?: SortOrder
    tags?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HuntingInfoSumOrderByAggregateInput = {
    dailyBagLimit?: SortOrder
    possessionLimit?: SortOrder
    seasonLimit?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ParkInfoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    amenities?: SortOrder
    activities?: SortOrder
    dailyPassFee?: SortOrder
    annualPassFee?: SortOrder
    campingFee?: SortOrder
    summerHours?: SortOrder
    winterHours?: SortOrder
    currentHours?: SortOrder
    campingAvailable?: SortOrder
    reservationRequired?: SortOrder
    petPolicy?: SortOrder
    accessibility?: SortOrder
    currentConditions?: SortOrder
    alerts?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkInfoAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    dailyPassFee?: SortOrder
    annualPassFee?: SortOrder
    campingFee?: SortOrder
  }

  export type ParkInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    amenities?: SortOrder
    activities?: SortOrder
    dailyPassFee?: SortOrder
    annualPassFee?: SortOrder
    campingFee?: SortOrder
    summerHours?: SortOrder
    winterHours?: SortOrder
    currentHours?: SortOrder
    campingAvailable?: SortOrder
    reservationRequired?: SortOrder
    petPolicy?: SortOrder
    accessibility?: SortOrder
    currentConditions?: SortOrder
    alerts?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkInfoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    amenities?: SortOrder
    activities?: SortOrder
    dailyPassFee?: SortOrder
    annualPassFee?: SortOrder
    campingFee?: SortOrder
    summerHours?: SortOrder
    winterHours?: SortOrder
    currentHours?: SortOrder
    campingAvailable?: SortOrder
    reservationRequired?: SortOrder
    petPolicy?: SortOrder
    accessibility?: SortOrder
    currentConditions?: SortOrder
    alerts?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkInfoSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    dailyPassFee?: SortOrder
    annualPassFee?: SortOrder
    campingFee?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type TripPlanListRelationFilter = {
    every?: TripPlanWhereInput
    some?: TripPlanWhereInput
    none?: TripPlanWhereInput
  }

  export type UserSubscriptionListRelationFilter = {
    every?: UserSubscriptionWhereInput
    some?: UserSubscriptionWhereInput
    none?: UserSubscriptionWhereInput
  }

  export type TripPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserSubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TroutStockingNullableScalarRelationFilter = {
    is?: TroutStockingWhereInput | null
    isNot?: TroutStockingWhereInput | null
  }

  export type ParkInfoNullableScalarRelationFilter = {
    is?: ParkInfoWhereInput | null
    isNot?: ParkInfoWhereInput | null
  }

  export type OutdoorEventNullableScalarRelationFilter = {
    is?: OutdoorEventWhereInput | null
    isNot?: OutdoorEventWhereInput | null
  }

  export type UserFavoriteUserIdTroutStockingIdCompoundUniqueInput = {
    userId: string
    troutStockingId: string
  }

  export type UserFavoriteUserIdParkInfoIdCompoundUniqueInput = {
    userId: string
    parkInfoId: string
  }

  export type UserFavoriteUserIdEventIdCompoundUniqueInput = {
    userId: string
    eventId: string
  }

  export type UserFavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    troutStockingId?: SortOrder
    parkInfoId?: SortOrder
    eventId?: SortOrder
    customLocation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type UserFavoriteAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type UserFavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    troutStockingId?: SortOrder
    parkInfoId?: SortOrder
    eventId?: SortOrder
    customLocation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type UserFavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    troutStockingId?: SortOrder
    parkInfoId?: SortOrder
    eventId?: SortOrder
    customLocation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type UserFavoriteSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type TripPlanCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    participants?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripPlanAvgOrderByAggregateInput = {
    participants?: SortOrder
  }

  export type TripPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    participants?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripPlanMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    participants?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripPlanSumOrderByAggregateInput = {
    participants?: SortOrder
  }

  export type TripPlanScalarRelationFilter = {
    is?: TripPlanWhereInput
    isNot?: TripPlanWhereInput
  }

  export type TripPlanItemCountOrderByAggregateInput = {
    id?: SortOrder
    tripPlanId?: SortOrder
    type?: SortOrder
    troutStockingId?: SortOrder
    parkInfoId?: SortOrder
    eventId?: SortOrder
    customTitle?: SortOrder
    customLocation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    scheduledTime?: SortOrder
    estimatedDuration?: SortOrder
    notes?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripPlanItemAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    estimatedDuration?: SortOrder
  }

  export type TripPlanItemMaxOrderByAggregateInput = {
    id?: SortOrder
    tripPlanId?: SortOrder
    type?: SortOrder
    troutStockingId?: SortOrder
    parkInfoId?: SortOrder
    eventId?: SortOrder
    customTitle?: SortOrder
    customLocation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    scheduledTime?: SortOrder
    estimatedDuration?: SortOrder
    notes?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripPlanItemMinOrderByAggregateInput = {
    id?: SortOrder
    tripPlanId?: SortOrder
    type?: SortOrder
    troutStockingId?: SortOrder
    parkInfoId?: SortOrder
    eventId?: SortOrder
    customTitle?: SortOrder
    customLocation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    scheduledTime?: SortOrder
    estimatedDuration?: SortOrder
    notes?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripPlanItemSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    estimatedDuration?: SortOrder
  }

  export type UserSubscriptionUserIdTypeValueCompoundUniqueInput = {
    userId: string
    type: string
    value: string
  }

  export type UserSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    notifyEmail?: SortOrder
    notifyPush?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    notifyEmail?: SortOrder
    notifyPush?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    notifyEmail?: SortOrder
    notifyPush?: SortOrder
    createdAt?: SortOrder
  }

  export type DataSyncLogCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    recordsProcessed?: SortOrder
    recordsAdded?: SortOrder
    recordsUpdated?: SortOrder
    errorMessage?: SortOrder
    executionTime?: SortOrder
    createdAt?: SortOrder
  }

  export type DataSyncLogAvgOrderByAggregateInput = {
    recordsProcessed?: SortOrder
    recordsAdded?: SortOrder
    recordsUpdated?: SortOrder
    executionTime?: SortOrder
  }

  export type DataSyncLogMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    recordsProcessed?: SortOrder
    recordsAdded?: SortOrder
    recordsUpdated?: SortOrder
    errorMessage?: SortOrder
    executionTime?: SortOrder
    createdAt?: SortOrder
  }

  export type DataSyncLogMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    recordsProcessed?: SortOrder
    recordsAdded?: SortOrder
    recordsUpdated?: SortOrder
    errorMessage?: SortOrder
    executionTime?: SortOrder
    createdAt?: SortOrder
  }

  export type DataSyncLogSumOrderByAggregateInput = {
    recordsProcessed?: SortOrder
    recordsAdded?: SortOrder
    recordsUpdated?: SortOrder
    executionTime?: SortOrder
  }

  export type UserFavoriteCreateNestedManyWithoutTroutStockingInput = {
    create?: XOR<UserFavoriteCreateWithoutTroutStockingInput, UserFavoriteUncheckedCreateWithoutTroutStockingInput> | UserFavoriteCreateWithoutTroutStockingInput[] | UserFavoriteUncheckedCreateWithoutTroutStockingInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutTroutStockingInput | UserFavoriteCreateOrConnectWithoutTroutStockingInput[]
    createMany?: UserFavoriteCreateManyTroutStockingInputEnvelope
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
  }

  export type TripPlanItemCreateNestedManyWithoutTroutStockingInput = {
    create?: XOR<TripPlanItemCreateWithoutTroutStockingInput, TripPlanItemUncheckedCreateWithoutTroutStockingInput> | TripPlanItemCreateWithoutTroutStockingInput[] | TripPlanItemUncheckedCreateWithoutTroutStockingInput[]
    connectOrCreate?: TripPlanItemCreateOrConnectWithoutTroutStockingInput | TripPlanItemCreateOrConnectWithoutTroutStockingInput[]
    createMany?: TripPlanItemCreateManyTroutStockingInputEnvelope
    connect?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
  }

  export type UserFavoriteUncheckedCreateNestedManyWithoutTroutStockingInput = {
    create?: XOR<UserFavoriteCreateWithoutTroutStockingInput, UserFavoriteUncheckedCreateWithoutTroutStockingInput> | UserFavoriteCreateWithoutTroutStockingInput[] | UserFavoriteUncheckedCreateWithoutTroutStockingInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutTroutStockingInput | UserFavoriteCreateOrConnectWithoutTroutStockingInput[]
    createMany?: UserFavoriteCreateManyTroutStockingInputEnvelope
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
  }

  export type TripPlanItemUncheckedCreateNestedManyWithoutTroutStockingInput = {
    create?: XOR<TripPlanItemCreateWithoutTroutStockingInput, TripPlanItemUncheckedCreateWithoutTroutStockingInput> | TripPlanItemCreateWithoutTroutStockingInput[] | TripPlanItemUncheckedCreateWithoutTroutStockingInput[]
    connectOrCreate?: TripPlanItemCreateOrConnectWithoutTroutStockingInput | TripPlanItemCreateOrConnectWithoutTroutStockingInput[]
    createMany?: TripPlanItemCreateManyTroutStockingInputEnvelope
    connect?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserFavoriteUpdateManyWithoutTroutStockingNestedInput = {
    create?: XOR<UserFavoriteCreateWithoutTroutStockingInput, UserFavoriteUncheckedCreateWithoutTroutStockingInput> | UserFavoriteCreateWithoutTroutStockingInput[] | UserFavoriteUncheckedCreateWithoutTroutStockingInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutTroutStockingInput | UserFavoriteCreateOrConnectWithoutTroutStockingInput[]
    upsert?: UserFavoriteUpsertWithWhereUniqueWithoutTroutStockingInput | UserFavoriteUpsertWithWhereUniqueWithoutTroutStockingInput[]
    createMany?: UserFavoriteCreateManyTroutStockingInputEnvelope
    set?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    disconnect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    delete?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    update?: UserFavoriteUpdateWithWhereUniqueWithoutTroutStockingInput | UserFavoriteUpdateWithWhereUniqueWithoutTroutStockingInput[]
    updateMany?: UserFavoriteUpdateManyWithWhereWithoutTroutStockingInput | UserFavoriteUpdateManyWithWhereWithoutTroutStockingInput[]
    deleteMany?: UserFavoriteScalarWhereInput | UserFavoriteScalarWhereInput[]
  }

  export type TripPlanItemUpdateManyWithoutTroutStockingNestedInput = {
    create?: XOR<TripPlanItemCreateWithoutTroutStockingInput, TripPlanItemUncheckedCreateWithoutTroutStockingInput> | TripPlanItemCreateWithoutTroutStockingInput[] | TripPlanItemUncheckedCreateWithoutTroutStockingInput[]
    connectOrCreate?: TripPlanItemCreateOrConnectWithoutTroutStockingInput | TripPlanItemCreateOrConnectWithoutTroutStockingInput[]
    upsert?: TripPlanItemUpsertWithWhereUniqueWithoutTroutStockingInput | TripPlanItemUpsertWithWhereUniqueWithoutTroutStockingInput[]
    createMany?: TripPlanItemCreateManyTroutStockingInputEnvelope
    set?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    disconnect?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    delete?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    connect?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    update?: TripPlanItemUpdateWithWhereUniqueWithoutTroutStockingInput | TripPlanItemUpdateWithWhereUniqueWithoutTroutStockingInput[]
    updateMany?: TripPlanItemUpdateManyWithWhereWithoutTroutStockingInput | TripPlanItemUpdateManyWithWhereWithoutTroutStockingInput[]
    deleteMany?: TripPlanItemScalarWhereInput | TripPlanItemScalarWhereInput[]
  }

  export type UserFavoriteUncheckedUpdateManyWithoutTroutStockingNestedInput = {
    create?: XOR<UserFavoriteCreateWithoutTroutStockingInput, UserFavoriteUncheckedCreateWithoutTroutStockingInput> | UserFavoriteCreateWithoutTroutStockingInput[] | UserFavoriteUncheckedCreateWithoutTroutStockingInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutTroutStockingInput | UserFavoriteCreateOrConnectWithoutTroutStockingInput[]
    upsert?: UserFavoriteUpsertWithWhereUniqueWithoutTroutStockingInput | UserFavoriteUpsertWithWhereUniqueWithoutTroutStockingInput[]
    createMany?: UserFavoriteCreateManyTroutStockingInputEnvelope
    set?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    disconnect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    delete?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    update?: UserFavoriteUpdateWithWhereUniqueWithoutTroutStockingInput | UserFavoriteUpdateWithWhereUniqueWithoutTroutStockingInput[]
    updateMany?: UserFavoriteUpdateManyWithWhereWithoutTroutStockingInput | UserFavoriteUpdateManyWithWhereWithoutTroutStockingInput[]
    deleteMany?: UserFavoriteScalarWhereInput | UserFavoriteScalarWhereInput[]
  }

  export type TripPlanItemUncheckedUpdateManyWithoutTroutStockingNestedInput = {
    create?: XOR<TripPlanItemCreateWithoutTroutStockingInput, TripPlanItemUncheckedCreateWithoutTroutStockingInput> | TripPlanItemCreateWithoutTroutStockingInput[] | TripPlanItemUncheckedCreateWithoutTroutStockingInput[]
    connectOrCreate?: TripPlanItemCreateOrConnectWithoutTroutStockingInput | TripPlanItemCreateOrConnectWithoutTroutStockingInput[]
    upsert?: TripPlanItemUpsertWithWhereUniqueWithoutTroutStockingInput | TripPlanItemUpsertWithWhereUniqueWithoutTroutStockingInput[]
    createMany?: TripPlanItemCreateManyTroutStockingInputEnvelope
    set?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    disconnect?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    delete?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    connect?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    update?: TripPlanItemUpdateWithWhereUniqueWithoutTroutStockingInput | TripPlanItemUpdateWithWhereUniqueWithoutTroutStockingInput[]
    updateMany?: TripPlanItemUpdateManyWithWhereWithoutTroutStockingInput | TripPlanItemUpdateManyWithWhereWithoutTroutStockingInput[]
    deleteMany?: TripPlanItemScalarWhereInput | TripPlanItemScalarWhereInput[]
  }

  export type UserFavoriteCreateNestedManyWithoutEventInput = {
    create?: XOR<UserFavoriteCreateWithoutEventInput, UserFavoriteUncheckedCreateWithoutEventInput> | UserFavoriteCreateWithoutEventInput[] | UserFavoriteUncheckedCreateWithoutEventInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutEventInput | UserFavoriteCreateOrConnectWithoutEventInput[]
    createMany?: UserFavoriteCreateManyEventInputEnvelope
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
  }

  export type TripPlanItemCreateNestedManyWithoutEventInput = {
    create?: XOR<TripPlanItemCreateWithoutEventInput, TripPlanItemUncheckedCreateWithoutEventInput> | TripPlanItemCreateWithoutEventInput[] | TripPlanItemUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TripPlanItemCreateOrConnectWithoutEventInput | TripPlanItemCreateOrConnectWithoutEventInput[]
    createMany?: TripPlanItemCreateManyEventInputEnvelope
    connect?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
  }

  export type UserFavoriteUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<UserFavoriteCreateWithoutEventInput, UserFavoriteUncheckedCreateWithoutEventInput> | UserFavoriteCreateWithoutEventInput[] | UserFavoriteUncheckedCreateWithoutEventInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutEventInput | UserFavoriteCreateOrConnectWithoutEventInput[]
    createMany?: UserFavoriteCreateManyEventInputEnvelope
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
  }

  export type TripPlanItemUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TripPlanItemCreateWithoutEventInput, TripPlanItemUncheckedCreateWithoutEventInput> | TripPlanItemCreateWithoutEventInput[] | TripPlanItemUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TripPlanItemCreateOrConnectWithoutEventInput | TripPlanItemCreateOrConnectWithoutEventInput[]
    createMany?: TripPlanItemCreateManyEventInputEnvelope
    connect?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserFavoriteUpdateManyWithoutEventNestedInput = {
    create?: XOR<UserFavoriteCreateWithoutEventInput, UserFavoriteUncheckedCreateWithoutEventInput> | UserFavoriteCreateWithoutEventInput[] | UserFavoriteUncheckedCreateWithoutEventInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutEventInput | UserFavoriteCreateOrConnectWithoutEventInput[]
    upsert?: UserFavoriteUpsertWithWhereUniqueWithoutEventInput | UserFavoriteUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: UserFavoriteCreateManyEventInputEnvelope
    set?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    disconnect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    delete?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    update?: UserFavoriteUpdateWithWhereUniqueWithoutEventInput | UserFavoriteUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: UserFavoriteUpdateManyWithWhereWithoutEventInput | UserFavoriteUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: UserFavoriteScalarWhereInput | UserFavoriteScalarWhereInput[]
  }

  export type TripPlanItemUpdateManyWithoutEventNestedInput = {
    create?: XOR<TripPlanItemCreateWithoutEventInput, TripPlanItemUncheckedCreateWithoutEventInput> | TripPlanItemCreateWithoutEventInput[] | TripPlanItemUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TripPlanItemCreateOrConnectWithoutEventInput | TripPlanItemCreateOrConnectWithoutEventInput[]
    upsert?: TripPlanItemUpsertWithWhereUniqueWithoutEventInput | TripPlanItemUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TripPlanItemCreateManyEventInputEnvelope
    set?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    disconnect?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    delete?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    connect?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    update?: TripPlanItemUpdateWithWhereUniqueWithoutEventInput | TripPlanItemUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TripPlanItemUpdateManyWithWhereWithoutEventInput | TripPlanItemUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TripPlanItemScalarWhereInput | TripPlanItemScalarWhereInput[]
  }

  export type UserFavoriteUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<UserFavoriteCreateWithoutEventInput, UserFavoriteUncheckedCreateWithoutEventInput> | UserFavoriteCreateWithoutEventInput[] | UserFavoriteUncheckedCreateWithoutEventInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutEventInput | UserFavoriteCreateOrConnectWithoutEventInput[]
    upsert?: UserFavoriteUpsertWithWhereUniqueWithoutEventInput | UserFavoriteUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: UserFavoriteCreateManyEventInputEnvelope
    set?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    disconnect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    delete?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    update?: UserFavoriteUpdateWithWhereUniqueWithoutEventInput | UserFavoriteUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: UserFavoriteUpdateManyWithWhereWithoutEventInput | UserFavoriteUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: UserFavoriteScalarWhereInput | UserFavoriteScalarWhereInput[]
  }

  export type TripPlanItemUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TripPlanItemCreateWithoutEventInput, TripPlanItemUncheckedCreateWithoutEventInput> | TripPlanItemCreateWithoutEventInput[] | TripPlanItemUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TripPlanItemCreateOrConnectWithoutEventInput | TripPlanItemCreateOrConnectWithoutEventInput[]
    upsert?: TripPlanItemUpsertWithWhereUniqueWithoutEventInput | TripPlanItemUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TripPlanItemCreateManyEventInputEnvelope
    set?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    disconnect?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    delete?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    connect?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    update?: TripPlanItemUpdateWithWhereUniqueWithoutEventInput | TripPlanItemUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TripPlanItemUpdateManyWithWhereWithoutEventInput | TripPlanItemUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TripPlanItemScalarWhereInput | TripPlanItemScalarWhereInput[]
  }

  export type UserFavoriteCreateNestedManyWithoutParkInfoInput = {
    create?: XOR<UserFavoriteCreateWithoutParkInfoInput, UserFavoriteUncheckedCreateWithoutParkInfoInput> | UserFavoriteCreateWithoutParkInfoInput[] | UserFavoriteUncheckedCreateWithoutParkInfoInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutParkInfoInput | UserFavoriteCreateOrConnectWithoutParkInfoInput[]
    createMany?: UserFavoriteCreateManyParkInfoInputEnvelope
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
  }

  export type TripPlanItemCreateNestedManyWithoutParkInfoInput = {
    create?: XOR<TripPlanItemCreateWithoutParkInfoInput, TripPlanItemUncheckedCreateWithoutParkInfoInput> | TripPlanItemCreateWithoutParkInfoInput[] | TripPlanItemUncheckedCreateWithoutParkInfoInput[]
    connectOrCreate?: TripPlanItemCreateOrConnectWithoutParkInfoInput | TripPlanItemCreateOrConnectWithoutParkInfoInput[]
    createMany?: TripPlanItemCreateManyParkInfoInputEnvelope
    connect?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
  }

  export type UserFavoriteUncheckedCreateNestedManyWithoutParkInfoInput = {
    create?: XOR<UserFavoriteCreateWithoutParkInfoInput, UserFavoriteUncheckedCreateWithoutParkInfoInput> | UserFavoriteCreateWithoutParkInfoInput[] | UserFavoriteUncheckedCreateWithoutParkInfoInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutParkInfoInput | UserFavoriteCreateOrConnectWithoutParkInfoInput[]
    createMany?: UserFavoriteCreateManyParkInfoInputEnvelope
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
  }

  export type TripPlanItemUncheckedCreateNestedManyWithoutParkInfoInput = {
    create?: XOR<TripPlanItemCreateWithoutParkInfoInput, TripPlanItemUncheckedCreateWithoutParkInfoInput> | TripPlanItemCreateWithoutParkInfoInput[] | TripPlanItemUncheckedCreateWithoutParkInfoInput[]
    connectOrCreate?: TripPlanItemCreateOrConnectWithoutParkInfoInput | TripPlanItemCreateOrConnectWithoutParkInfoInput[]
    createMany?: TripPlanItemCreateManyParkInfoInputEnvelope
    connect?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserFavoriteUpdateManyWithoutParkInfoNestedInput = {
    create?: XOR<UserFavoriteCreateWithoutParkInfoInput, UserFavoriteUncheckedCreateWithoutParkInfoInput> | UserFavoriteCreateWithoutParkInfoInput[] | UserFavoriteUncheckedCreateWithoutParkInfoInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutParkInfoInput | UserFavoriteCreateOrConnectWithoutParkInfoInput[]
    upsert?: UserFavoriteUpsertWithWhereUniqueWithoutParkInfoInput | UserFavoriteUpsertWithWhereUniqueWithoutParkInfoInput[]
    createMany?: UserFavoriteCreateManyParkInfoInputEnvelope
    set?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    disconnect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    delete?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    update?: UserFavoriteUpdateWithWhereUniqueWithoutParkInfoInput | UserFavoriteUpdateWithWhereUniqueWithoutParkInfoInput[]
    updateMany?: UserFavoriteUpdateManyWithWhereWithoutParkInfoInput | UserFavoriteUpdateManyWithWhereWithoutParkInfoInput[]
    deleteMany?: UserFavoriteScalarWhereInput | UserFavoriteScalarWhereInput[]
  }

  export type TripPlanItemUpdateManyWithoutParkInfoNestedInput = {
    create?: XOR<TripPlanItemCreateWithoutParkInfoInput, TripPlanItemUncheckedCreateWithoutParkInfoInput> | TripPlanItemCreateWithoutParkInfoInput[] | TripPlanItemUncheckedCreateWithoutParkInfoInput[]
    connectOrCreate?: TripPlanItemCreateOrConnectWithoutParkInfoInput | TripPlanItemCreateOrConnectWithoutParkInfoInput[]
    upsert?: TripPlanItemUpsertWithWhereUniqueWithoutParkInfoInput | TripPlanItemUpsertWithWhereUniqueWithoutParkInfoInput[]
    createMany?: TripPlanItemCreateManyParkInfoInputEnvelope
    set?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    disconnect?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    delete?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    connect?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    update?: TripPlanItemUpdateWithWhereUniqueWithoutParkInfoInput | TripPlanItemUpdateWithWhereUniqueWithoutParkInfoInput[]
    updateMany?: TripPlanItemUpdateManyWithWhereWithoutParkInfoInput | TripPlanItemUpdateManyWithWhereWithoutParkInfoInput[]
    deleteMany?: TripPlanItemScalarWhereInput | TripPlanItemScalarWhereInput[]
  }

  export type UserFavoriteUncheckedUpdateManyWithoutParkInfoNestedInput = {
    create?: XOR<UserFavoriteCreateWithoutParkInfoInput, UserFavoriteUncheckedCreateWithoutParkInfoInput> | UserFavoriteCreateWithoutParkInfoInput[] | UserFavoriteUncheckedCreateWithoutParkInfoInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutParkInfoInput | UserFavoriteCreateOrConnectWithoutParkInfoInput[]
    upsert?: UserFavoriteUpsertWithWhereUniqueWithoutParkInfoInput | UserFavoriteUpsertWithWhereUniqueWithoutParkInfoInput[]
    createMany?: UserFavoriteCreateManyParkInfoInputEnvelope
    set?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    disconnect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    delete?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    update?: UserFavoriteUpdateWithWhereUniqueWithoutParkInfoInput | UserFavoriteUpdateWithWhereUniqueWithoutParkInfoInput[]
    updateMany?: UserFavoriteUpdateManyWithWhereWithoutParkInfoInput | UserFavoriteUpdateManyWithWhereWithoutParkInfoInput[]
    deleteMany?: UserFavoriteScalarWhereInput | UserFavoriteScalarWhereInput[]
  }

  export type TripPlanItemUncheckedUpdateManyWithoutParkInfoNestedInput = {
    create?: XOR<TripPlanItemCreateWithoutParkInfoInput, TripPlanItemUncheckedCreateWithoutParkInfoInput> | TripPlanItemCreateWithoutParkInfoInput[] | TripPlanItemUncheckedCreateWithoutParkInfoInput[]
    connectOrCreate?: TripPlanItemCreateOrConnectWithoutParkInfoInput | TripPlanItemCreateOrConnectWithoutParkInfoInput[]
    upsert?: TripPlanItemUpsertWithWhereUniqueWithoutParkInfoInput | TripPlanItemUpsertWithWhereUniqueWithoutParkInfoInput[]
    createMany?: TripPlanItemCreateManyParkInfoInputEnvelope
    set?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    disconnect?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    delete?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    connect?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    update?: TripPlanItemUpdateWithWhereUniqueWithoutParkInfoInput | TripPlanItemUpdateWithWhereUniqueWithoutParkInfoInput[]
    updateMany?: TripPlanItemUpdateManyWithWhereWithoutParkInfoInput | TripPlanItemUpdateManyWithWhereWithoutParkInfoInput[]
    deleteMany?: TripPlanItemScalarWhereInput | TripPlanItemScalarWhereInput[]
  }

  export type UserFavoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFavoriteCreateWithoutUserInput, UserFavoriteUncheckedCreateWithoutUserInput> | UserFavoriteCreateWithoutUserInput[] | UserFavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutUserInput | UserFavoriteCreateOrConnectWithoutUserInput[]
    createMany?: UserFavoriteCreateManyUserInputEnvelope
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
  }

  export type TripPlanCreateNestedManyWithoutUserInput = {
    create?: XOR<TripPlanCreateWithoutUserInput, TripPlanUncheckedCreateWithoutUserInput> | TripPlanCreateWithoutUserInput[] | TripPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripPlanCreateOrConnectWithoutUserInput | TripPlanCreateOrConnectWithoutUserInput[]
    createMany?: TripPlanCreateManyUserInputEnvelope
    connect?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
  }

  export type UserSubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
  }

  export type UserFavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFavoriteCreateWithoutUserInput, UserFavoriteUncheckedCreateWithoutUserInput> | UserFavoriteCreateWithoutUserInput[] | UserFavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutUserInput | UserFavoriteCreateOrConnectWithoutUserInput[]
    createMany?: UserFavoriteCreateManyUserInputEnvelope
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
  }

  export type TripPlanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TripPlanCreateWithoutUserInput, TripPlanUncheckedCreateWithoutUserInput> | TripPlanCreateWithoutUserInput[] | TripPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripPlanCreateOrConnectWithoutUserInput | TripPlanCreateOrConnectWithoutUserInput[]
    createMany?: TripPlanCreateManyUserInputEnvelope
    connect?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
  }

  export type UserSubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
  }

  export type UserFavoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFavoriteCreateWithoutUserInput, UserFavoriteUncheckedCreateWithoutUserInput> | UserFavoriteCreateWithoutUserInput[] | UserFavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutUserInput | UserFavoriteCreateOrConnectWithoutUserInput[]
    upsert?: UserFavoriteUpsertWithWhereUniqueWithoutUserInput | UserFavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFavoriteCreateManyUserInputEnvelope
    set?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    disconnect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    delete?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    update?: UserFavoriteUpdateWithWhereUniqueWithoutUserInput | UserFavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFavoriteUpdateManyWithWhereWithoutUserInput | UserFavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFavoriteScalarWhereInput | UserFavoriteScalarWhereInput[]
  }

  export type TripPlanUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripPlanCreateWithoutUserInput, TripPlanUncheckedCreateWithoutUserInput> | TripPlanCreateWithoutUserInput[] | TripPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripPlanCreateOrConnectWithoutUserInput | TripPlanCreateOrConnectWithoutUserInput[]
    upsert?: TripPlanUpsertWithWhereUniqueWithoutUserInput | TripPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripPlanCreateManyUserInputEnvelope
    set?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    disconnect?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    delete?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    connect?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    update?: TripPlanUpdateWithWhereUniqueWithoutUserInput | TripPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripPlanUpdateManyWithWhereWithoutUserInput | TripPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripPlanScalarWhereInput | TripPlanScalarWhereInput[]
  }

  export type UserSubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: UserSubscriptionUpsertWithWhereUniqueWithoutUserInput | UserSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    set?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    disconnect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    delete?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    update?: UserSubscriptionUpdateWithWhereUniqueWithoutUserInput | UserSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSubscriptionUpdateManyWithWhereWithoutUserInput | UserSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
  }

  export type UserFavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFavoriteCreateWithoutUserInput, UserFavoriteUncheckedCreateWithoutUserInput> | UserFavoriteCreateWithoutUserInput[] | UserFavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutUserInput | UserFavoriteCreateOrConnectWithoutUserInput[]
    upsert?: UserFavoriteUpsertWithWhereUniqueWithoutUserInput | UserFavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFavoriteCreateManyUserInputEnvelope
    set?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    disconnect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    delete?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    update?: UserFavoriteUpdateWithWhereUniqueWithoutUserInput | UserFavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFavoriteUpdateManyWithWhereWithoutUserInput | UserFavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFavoriteScalarWhereInput | UserFavoriteScalarWhereInput[]
  }

  export type TripPlanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripPlanCreateWithoutUserInput, TripPlanUncheckedCreateWithoutUserInput> | TripPlanCreateWithoutUserInput[] | TripPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripPlanCreateOrConnectWithoutUserInput | TripPlanCreateOrConnectWithoutUserInput[]
    upsert?: TripPlanUpsertWithWhereUniqueWithoutUserInput | TripPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripPlanCreateManyUserInputEnvelope
    set?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    disconnect?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    delete?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    connect?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    update?: TripPlanUpdateWithWhereUniqueWithoutUserInput | TripPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripPlanUpdateManyWithWhereWithoutUserInput | TripPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripPlanScalarWhereInput | TripPlanScalarWhereInput[]
  }

  export type UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: UserSubscriptionUpsertWithWhereUniqueWithoutUserInput | UserSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    set?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    disconnect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    delete?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    update?: UserSubscriptionUpdateWithWhereUniqueWithoutUserInput | UserSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSubscriptionUpdateManyWithWhereWithoutUserInput | UserSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFavoriteLocationsInput = {
    create?: XOR<UserCreateWithoutFavoriteLocationsInput, UserUncheckedCreateWithoutFavoriteLocationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteLocationsInput
    connect?: UserWhereUniqueInput
  }

  export type TroutStockingCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<TroutStockingCreateWithoutFavoritesInput, TroutStockingUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: TroutStockingCreateOrConnectWithoutFavoritesInput
    connect?: TroutStockingWhereUniqueInput
  }

  export type ParkInfoCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<ParkInfoCreateWithoutFavoritesInput, ParkInfoUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: ParkInfoCreateOrConnectWithoutFavoritesInput
    connect?: ParkInfoWhereUniqueInput
  }

  export type OutdoorEventCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<OutdoorEventCreateWithoutFavoritesInput, OutdoorEventUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: OutdoorEventCreateOrConnectWithoutFavoritesInput
    connect?: OutdoorEventWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoriteLocationsNestedInput = {
    create?: XOR<UserCreateWithoutFavoriteLocationsInput, UserUncheckedCreateWithoutFavoriteLocationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteLocationsInput
    upsert?: UserUpsertWithoutFavoriteLocationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoriteLocationsInput, UserUpdateWithoutFavoriteLocationsInput>, UserUncheckedUpdateWithoutFavoriteLocationsInput>
  }

  export type TroutStockingUpdateOneWithoutFavoritesNestedInput = {
    create?: XOR<TroutStockingCreateWithoutFavoritesInput, TroutStockingUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: TroutStockingCreateOrConnectWithoutFavoritesInput
    upsert?: TroutStockingUpsertWithoutFavoritesInput
    disconnect?: TroutStockingWhereInput | boolean
    delete?: TroutStockingWhereInput | boolean
    connect?: TroutStockingWhereUniqueInput
    update?: XOR<XOR<TroutStockingUpdateToOneWithWhereWithoutFavoritesInput, TroutStockingUpdateWithoutFavoritesInput>, TroutStockingUncheckedUpdateWithoutFavoritesInput>
  }

  export type ParkInfoUpdateOneWithoutFavoritesNestedInput = {
    create?: XOR<ParkInfoCreateWithoutFavoritesInput, ParkInfoUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: ParkInfoCreateOrConnectWithoutFavoritesInput
    upsert?: ParkInfoUpsertWithoutFavoritesInput
    disconnect?: ParkInfoWhereInput | boolean
    delete?: ParkInfoWhereInput | boolean
    connect?: ParkInfoWhereUniqueInput
    update?: XOR<XOR<ParkInfoUpdateToOneWithWhereWithoutFavoritesInput, ParkInfoUpdateWithoutFavoritesInput>, ParkInfoUncheckedUpdateWithoutFavoritesInput>
  }

  export type OutdoorEventUpdateOneWithoutFavoritesNestedInput = {
    create?: XOR<OutdoorEventCreateWithoutFavoritesInput, OutdoorEventUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: OutdoorEventCreateOrConnectWithoutFavoritesInput
    upsert?: OutdoorEventUpsertWithoutFavoritesInput
    disconnect?: OutdoorEventWhereInput | boolean
    delete?: OutdoorEventWhereInput | boolean
    connect?: OutdoorEventWhereUniqueInput
    update?: XOR<XOR<OutdoorEventUpdateToOneWithWhereWithoutFavoritesInput, OutdoorEventUpdateWithoutFavoritesInput>, OutdoorEventUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserCreateNestedOneWithoutTripPlansInput = {
    create?: XOR<UserCreateWithoutTripPlansInput, UserUncheckedCreateWithoutTripPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripPlansInput
    connect?: UserWhereUniqueInput
  }

  export type TripPlanItemCreateNestedManyWithoutTripPlanInput = {
    create?: XOR<TripPlanItemCreateWithoutTripPlanInput, TripPlanItemUncheckedCreateWithoutTripPlanInput> | TripPlanItemCreateWithoutTripPlanInput[] | TripPlanItemUncheckedCreateWithoutTripPlanInput[]
    connectOrCreate?: TripPlanItemCreateOrConnectWithoutTripPlanInput | TripPlanItemCreateOrConnectWithoutTripPlanInput[]
    createMany?: TripPlanItemCreateManyTripPlanInputEnvelope
    connect?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
  }

  export type TripPlanItemUncheckedCreateNestedManyWithoutTripPlanInput = {
    create?: XOR<TripPlanItemCreateWithoutTripPlanInput, TripPlanItemUncheckedCreateWithoutTripPlanInput> | TripPlanItemCreateWithoutTripPlanInput[] | TripPlanItemUncheckedCreateWithoutTripPlanInput[]
    connectOrCreate?: TripPlanItemCreateOrConnectWithoutTripPlanInput | TripPlanItemCreateOrConnectWithoutTripPlanInput[]
    createMany?: TripPlanItemCreateManyTripPlanInputEnvelope
    connect?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTripPlansNestedInput = {
    create?: XOR<UserCreateWithoutTripPlansInput, UserUncheckedCreateWithoutTripPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripPlansInput
    upsert?: UserUpsertWithoutTripPlansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTripPlansInput, UserUpdateWithoutTripPlansInput>, UserUncheckedUpdateWithoutTripPlansInput>
  }

  export type TripPlanItemUpdateManyWithoutTripPlanNestedInput = {
    create?: XOR<TripPlanItemCreateWithoutTripPlanInput, TripPlanItemUncheckedCreateWithoutTripPlanInput> | TripPlanItemCreateWithoutTripPlanInput[] | TripPlanItemUncheckedCreateWithoutTripPlanInput[]
    connectOrCreate?: TripPlanItemCreateOrConnectWithoutTripPlanInput | TripPlanItemCreateOrConnectWithoutTripPlanInput[]
    upsert?: TripPlanItemUpsertWithWhereUniqueWithoutTripPlanInput | TripPlanItemUpsertWithWhereUniqueWithoutTripPlanInput[]
    createMany?: TripPlanItemCreateManyTripPlanInputEnvelope
    set?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    disconnect?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    delete?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    connect?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    update?: TripPlanItemUpdateWithWhereUniqueWithoutTripPlanInput | TripPlanItemUpdateWithWhereUniqueWithoutTripPlanInput[]
    updateMany?: TripPlanItemUpdateManyWithWhereWithoutTripPlanInput | TripPlanItemUpdateManyWithWhereWithoutTripPlanInput[]
    deleteMany?: TripPlanItemScalarWhereInput | TripPlanItemScalarWhereInput[]
  }

  export type TripPlanItemUncheckedUpdateManyWithoutTripPlanNestedInput = {
    create?: XOR<TripPlanItemCreateWithoutTripPlanInput, TripPlanItemUncheckedCreateWithoutTripPlanInput> | TripPlanItemCreateWithoutTripPlanInput[] | TripPlanItemUncheckedCreateWithoutTripPlanInput[]
    connectOrCreate?: TripPlanItemCreateOrConnectWithoutTripPlanInput | TripPlanItemCreateOrConnectWithoutTripPlanInput[]
    upsert?: TripPlanItemUpsertWithWhereUniqueWithoutTripPlanInput | TripPlanItemUpsertWithWhereUniqueWithoutTripPlanInput[]
    createMany?: TripPlanItemCreateManyTripPlanInputEnvelope
    set?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    disconnect?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    delete?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    connect?: TripPlanItemWhereUniqueInput | TripPlanItemWhereUniqueInput[]
    update?: TripPlanItemUpdateWithWhereUniqueWithoutTripPlanInput | TripPlanItemUpdateWithWhereUniqueWithoutTripPlanInput[]
    updateMany?: TripPlanItemUpdateManyWithWhereWithoutTripPlanInput | TripPlanItemUpdateManyWithWhereWithoutTripPlanInput[]
    deleteMany?: TripPlanItemScalarWhereInput | TripPlanItemScalarWhereInput[]
  }

  export type TripPlanCreateNestedOneWithoutItemsInput = {
    create?: XOR<TripPlanCreateWithoutItemsInput, TripPlanUncheckedCreateWithoutItemsInput>
    connectOrCreate?: TripPlanCreateOrConnectWithoutItemsInput
    connect?: TripPlanWhereUniqueInput
  }

  export type TroutStockingCreateNestedOneWithoutTripPlanItemsInput = {
    create?: XOR<TroutStockingCreateWithoutTripPlanItemsInput, TroutStockingUncheckedCreateWithoutTripPlanItemsInput>
    connectOrCreate?: TroutStockingCreateOrConnectWithoutTripPlanItemsInput
    connect?: TroutStockingWhereUniqueInput
  }

  export type ParkInfoCreateNestedOneWithoutTripPlanItemsInput = {
    create?: XOR<ParkInfoCreateWithoutTripPlanItemsInput, ParkInfoUncheckedCreateWithoutTripPlanItemsInput>
    connectOrCreate?: ParkInfoCreateOrConnectWithoutTripPlanItemsInput
    connect?: ParkInfoWhereUniqueInput
  }

  export type OutdoorEventCreateNestedOneWithoutTripPlanItemsInput = {
    create?: XOR<OutdoorEventCreateWithoutTripPlanItemsInput, OutdoorEventUncheckedCreateWithoutTripPlanItemsInput>
    connectOrCreate?: OutdoorEventCreateOrConnectWithoutTripPlanItemsInput
    connect?: OutdoorEventWhereUniqueInput
  }

  export type TripPlanUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<TripPlanCreateWithoutItemsInput, TripPlanUncheckedCreateWithoutItemsInput>
    connectOrCreate?: TripPlanCreateOrConnectWithoutItemsInput
    upsert?: TripPlanUpsertWithoutItemsInput
    connect?: TripPlanWhereUniqueInput
    update?: XOR<XOR<TripPlanUpdateToOneWithWhereWithoutItemsInput, TripPlanUpdateWithoutItemsInput>, TripPlanUncheckedUpdateWithoutItemsInput>
  }

  export type TroutStockingUpdateOneWithoutTripPlanItemsNestedInput = {
    create?: XOR<TroutStockingCreateWithoutTripPlanItemsInput, TroutStockingUncheckedCreateWithoutTripPlanItemsInput>
    connectOrCreate?: TroutStockingCreateOrConnectWithoutTripPlanItemsInput
    upsert?: TroutStockingUpsertWithoutTripPlanItemsInput
    disconnect?: TroutStockingWhereInput | boolean
    delete?: TroutStockingWhereInput | boolean
    connect?: TroutStockingWhereUniqueInput
    update?: XOR<XOR<TroutStockingUpdateToOneWithWhereWithoutTripPlanItemsInput, TroutStockingUpdateWithoutTripPlanItemsInput>, TroutStockingUncheckedUpdateWithoutTripPlanItemsInput>
  }

  export type ParkInfoUpdateOneWithoutTripPlanItemsNestedInput = {
    create?: XOR<ParkInfoCreateWithoutTripPlanItemsInput, ParkInfoUncheckedCreateWithoutTripPlanItemsInput>
    connectOrCreate?: ParkInfoCreateOrConnectWithoutTripPlanItemsInput
    upsert?: ParkInfoUpsertWithoutTripPlanItemsInput
    disconnect?: ParkInfoWhereInput | boolean
    delete?: ParkInfoWhereInput | boolean
    connect?: ParkInfoWhereUniqueInput
    update?: XOR<XOR<ParkInfoUpdateToOneWithWhereWithoutTripPlanItemsInput, ParkInfoUpdateWithoutTripPlanItemsInput>, ParkInfoUncheckedUpdateWithoutTripPlanItemsInput>
  }

  export type OutdoorEventUpdateOneWithoutTripPlanItemsNestedInput = {
    create?: XOR<OutdoorEventCreateWithoutTripPlanItemsInput, OutdoorEventUncheckedCreateWithoutTripPlanItemsInput>
    connectOrCreate?: OutdoorEventCreateOrConnectWithoutTripPlanItemsInput
    upsert?: OutdoorEventUpsertWithoutTripPlanItemsInput
    disconnect?: OutdoorEventWhereInput | boolean
    delete?: OutdoorEventWhereInput | boolean
    connect?: OutdoorEventWhereUniqueInput
    update?: XOR<XOR<OutdoorEventUpdateToOneWithWhereWithoutTripPlanItemsInput, OutdoorEventUpdateWithoutTripPlanItemsInput>, OutdoorEventUncheckedUpdateWithoutTripPlanItemsInput>
  }

  export type UserCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    upsert?: UserUpsertWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionsInput, UserUpdateWithoutSubscriptionsInput>, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type UserFavoriteCreateWithoutTroutStockingInput = {
    id?: string
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    notes?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoriteLocationsInput
    parkInfo?: ParkInfoCreateNestedOneWithoutFavoritesInput
    event?: OutdoorEventCreateNestedOneWithoutFavoritesInput
  }

  export type UserFavoriteUncheckedCreateWithoutTroutStockingInput = {
    id?: string
    userId: string
    parkInfoId?: string | null
    eventId?: string | null
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type UserFavoriteCreateOrConnectWithoutTroutStockingInput = {
    where: UserFavoriteWhereUniqueInput
    create: XOR<UserFavoriteCreateWithoutTroutStockingInput, UserFavoriteUncheckedCreateWithoutTroutStockingInput>
  }

  export type UserFavoriteCreateManyTroutStockingInputEnvelope = {
    data: UserFavoriteCreateManyTroutStockingInput | UserFavoriteCreateManyTroutStockingInput[]
  }

  export type TripPlanItemCreateWithoutTroutStockingInput = {
    id?: string
    type: string
    customTitle?: string | null
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    scheduledTime?: Date | string | null
    estimatedDuration?: number | null
    notes?: string | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tripPlan: TripPlanCreateNestedOneWithoutItemsInput
    parkInfo?: ParkInfoCreateNestedOneWithoutTripPlanItemsInput
    event?: OutdoorEventCreateNestedOneWithoutTripPlanItemsInput
  }

  export type TripPlanItemUncheckedCreateWithoutTroutStockingInput = {
    id?: string
    tripPlanId: string
    type: string
    parkInfoId?: string | null
    eventId?: string | null
    customTitle?: string | null
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    scheduledTime?: Date | string | null
    estimatedDuration?: number | null
    notes?: string | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPlanItemCreateOrConnectWithoutTroutStockingInput = {
    where: TripPlanItemWhereUniqueInput
    create: XOR<TripPlanItemCreateWithoutTroutStockingInput, TripPlanItemUncheckedCreateWithoutTroutStockingInput>
  }

  export type TripPlanItemCreateManyTroutStockingInputEnvelope = {
    data: TripPlanItemCreateManyTroutStockingInput | TripPlanItemCreateManyTroutStockingInput[]
  }

  export type UserFavoriteUpsertWithWhereUniqueWithoutTroutStockingInput = {
    where: UserFavoriteWhereUniqueInput
    update: XOR<UserFavoriteUpdateWithoutTroutStockingInput, UserFavoriteUncheckedUpdateWithoutTroutStockingInput>
    create: XOR<UserFavoriteCreateWithoutTroutStockingInput, UserFavoriteUncheckedCreateWithoutTroutStockingInput>
  }

  export type UserFavoriteUpdateWithWhereUniqueWithoutTroutStockingInput = {
    where: UserFavoriteWhereUniqueInput
    data: XOR<UserFavoriteUpdateWithoutTroutStockingInput, UserFavoriteUncheckedUpdateWithoutTroutStockingInput>
  }

  export type UserFavoriteUpdateManyWithWhereWithoutTroutStockingInput = {
    where: UserFavoriteScalarWhereInput
    data: XOR<UserFavoriteUpdateManyMutationInput, UserFavoriteUncheckedUpdateManyWithoutTroutStockingInput>
  }

  export type UserFavoriteScalarWhereInput = {
    AND?: UserFavoriteScalarWhereInput | UserFavoriteScalarWhereInput[]
    OR?: UserFavoriteScalarWhereInput[]
    NOT?: UserFavoriteScalarWhereInput | UserFavoriteScalarWhereInput[]
    id?: StringFilter<"UserFavorite"> | string
    userId?: StringFilter<"UserFavorite"> | string
    troutStockingId?: StringNullableFilter<"UserFavorite"> | string | null
    parkInfoId?: StringNullableFilter<"UserFavorite"> | string | null
    eventId?: StringNullableFilter<"UserFavorite"> | string | null
    customLocation?: StringNullableFilter<"UserFavorite"> | string | null
    latitude?: FloatNullableFilter<"UserFavorite"> | number | null
    longitude?: FloatNullableFilter<"UserFavorite"> | number | null
    notes?: StringNullableFilter<"UserFavorite"> | string | null
    createdAt?: DateTimeFilter<"UserFavorite"> | Date | string
  }

  export type TripPlanItemUpsertWithWhereUniqueWithoutTroutStockingInput = {
    where: TripPlanItemWhereUniqueInput
    update: XOR<TripPlanItemUpdateWithoutTroutStockingInput, TripPlanItemUncheckedUpdateWithoutTroutStockingInput>
    create: XOR<TripPlanItemCreateWithoutTroutStockingInput, TripPlanItemUncheckedCreateWithoutTroutStockingInput>
  }

  export type TripPlanItemUpdateWithWhereUniqueWithoutTroutStockingInput = {
    where: TripPlanItemWhereUniqueInput
    data: XOR<TripPlanItemUpdateWithoutTroutStockingInput, TripPlanItemUncheckedUpdateWithoutTroutStockingInput>
  }

  export type TripPlanItemUpdateManyWithWhereWithoutTroutStockingInput = {
    where: TripPlanItemScalarWhereInput
    data: XOR<TripPlanItemUpdateManyMutationInput, TripPlanItemUncheckedUpdateManyWithoutTroutStockingInput>
  }

  export type TripPlanItemScalarWhereInput = {
    AND?: TripPlanItemScalarWhereInput | TripPlanItemScalarWhereInput[]
    OR?: TripPlanItemScalarWhereInput[]
    NOT?: TripPlanItemScalarWhereInput | TripPlanItemScalarWhereInput[]
    id?: StringFilter<"TripPlanItem"> | string
    tripPlanId?: StringFilter<"TripPlanItem"> | string
    type?: StringFilter<"TripPlanItem"> | string
    troutStockingId?: StringNullableFilter<"TripPlanItem"> | string | null
    parkInfoId?: StringNullableFilter<"TripPlanItem"> | string | null
    eventId?: StringNullableFilter<"TripPlanItem"> | string | null
    customTitle?: StringNullableFilter<"TripPlanItem"> | string | null
    customLocation?: StringNullableFilter<"TripPlanItem"> | string | null
    latitude?: FloatNullableFilter<"TripPlanItem"> | number | null
    longitude?: FloatNullableFilter<"TripPlanItem"> | number | null
    scheduledTime?: DateTimeNullableFilter<"TripPlanItem"> | Date | string | null
    estimatedDuration?: IntNullableFilter<"TripPlanItem"> | number | null
    notes?: StringNullableFilter<"TripPlanItem"> | string | null
    completed?: BoolFilter<"TripPlanItem"> | boolean
    createdAt?: DateTimeFilter<"TripPlanItem"> | Date | string
    updatedAt?: DateTimeFilter<"TripPlanItem"> | Date | string
  }

  export type UserFavoriteCreateWithoutEventInput = {
    id?: string
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    notes?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoriteLocationsInput
    troutStocking?: TroutStockingCreateNestedOneWithoutFavoritesInput
    parkInfo?: ParkInfoCreateNestedOneWithoutFavoritesInput
  }

  export type UserFavoriteUncheckedCreateWithoutEventInput = {
    id?: string
    userId: string
    troutStockingId?: string | null
    parkInfoId?: string | null
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type UserFavoriteCreateOrConnectWithoutEventInput = {
    where: UserFavoriteWhereUniqueInput
    create: XOR<UserFavoriteCreateWithoutEventInput, UserFavoriteUncheckedCreateWithoutEventInput>
  }

  export type UserFavoriteCreateManyEventInputEnvelope = {
    data: UserFavoriteCreateManyEventInput | UserFavoriteCreateManyEventInput[]
  }

  export type TripPlanItemCreateWithoutEventInput = {
    id?: string
    type: string
    customTitle?: string | null
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    scheduledTime?: Date | string | null
    estimatedDuration?: number | null
    notes?: string | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tripPlan: TripPlanCreateNestedOneWithoutItemsInput
    troutStocking?: TroutStockingCreateNestedOneWithoutTripPlanItemsInput
    parkInfo?: ParkInfoCreateNestedOneWithoutTripPlanItemsInput
  }

  export type TripPlanItemUncheckedCreateWithoutEventInput = {
    id?: string
    tripPlanId: string
    type: string
    troutStockingId?: string | null
    parkInfoId?: string | null
    customTitle?: string | null
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    scheduledTime?: Date | string | null
    estimatedDuration?: number | null
    notes?: string | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPlanItemCreateOrConnectWithoutEventInput = {
    where: TripPlanItemWhereUniqueInput
    create: XOR<TripPlanItemCreateWithoutEventInput, TripPlanItemUncheckedCreateWithoutEventInput>
  }

  export type TripPlanItemCreateManyEventInputEnvelope = {
    data: TripPlanItemCreateManyEventInput | TripPlanItemCreateManyEventInput[]
  }

  export type UserFavoriteUpsertWithWhereUniqueWithoutEventInput = {
    where: UserFavoriteWhereUniqueInput
    update: XOR<UserFavoriteUpdateWithoutEventInput, UserFavoriteUncheckedUpdateWithoutEventInput>
    create: XOR<UserFavoriteCreateWithoutEventInput, UserFavoriteUncheckedCreateWithoutEventInput>
  }

  export type UserFavoriteUpdateWithWhereUniqueWithoutEventInput = {
    where: UserFavoriteWhereUniqueInput
    data: XOR<UserFavoriteUpdateWithoutEventInput, UserFavoriteUncheckedUpdateWithoutEventInput>
  }

  export type UserFavoriteUpdateManyWithWhereWithoutEventInput = {
    where: UserFavoriteScalarWhereInput
    data: XOR<UserFavoriteUpdateManyMutationInput, UserFavoriteUncheckedUpdateManyWithoutEventInput>
  }

  export type TripPlanItemUpsertWithWhereUniqueWithoutEventInput = {
    where: TripPlanItemWhereUniqueInput
    update: XOR<TripPlanItemUpdateWithoutEventInput, TripPlanItemUncheckedUpdateWithoutEventInput>
    create: XOR<TripPlanItemCreateWithoutEventInput, TripPlanItemUncheckedCreateWithoutEventInput>
  }

  export type TripPlanItemUpdateWithWhereUniqueWithoutEventInput = {
    where: TripPlanItemWhereUniqueInput
    data: XOR<TripPlanItemUpdateWithoutEventInput, TripPlanItemUncheckedUpdateWithoutEventInput>
  }

  export type TripPlanItemUpdateManyWithWhereWithoutEventInput = {
    where: TripPlanItemScalarWhereInput
    data: XOR<TripPlanItemUpdateManyMutationInput, TripPlanItemUncheckedUpdateManyWithoutEventInput>
  }

  export type UserFavoriteCreateWithoutParkInfoInput = {
    id?: string
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    notes?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoriteLocationsInput
    troutStocking?: TroutStockingCreateNestedOneWithoutFavoritesInput
    event?: OutdoorEventCreateNestedOneWithoutFavoritesInput
  }

  export type UserFavoriteUncheckedCreateWithoutParkInfoInput = {
    id?: string
    userId: string
    troutStockingId?: string | null
    eventId?: string | null
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type UserFavoriteCreateOrConnectWithoutParkInfoInput = {
    where: UserFavoriteWhereUniqueInput
    create: XOR<UserFavoriteCreateWithoutParkInfoInput, UserFavoriteUncheckedCreateWithoutParkInfoInput>
  }

  export type UserFavoriteCreateManyParkInfoInputEnvelope = {
    data: UserFavoriteCreateManyParkInfoInput | UserFavoriteCreateManyParkInfoInput[]
  }

  export type TripPlanItemCreateWithoutParkInfoInput = {
    id?: string
    type: string
    customTitle?: string | null
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    scheduledTime?: Date | string | null
    estimatedDuration?: number | null
    notes?: string | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tripPlan: TripPlanCreateNestedOneWithoutItemsInput
    troutStocking?: TroutStockingCreateNestedOneWithoutTripPlanItemsInput
    event?: OutdoorEventCreateNestedOneWithoutTripPlanItemsInput
  }

  export type TripPlanItemUncheckedCreateWithoutParkInfoInput = {
    id?: string
    tripPlanId: string
    type: string
    troutStockingId?: string | null
    eventId?: string | null
    customTitle?: string | null
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    scheduledTime?: Date | string | null
    estimatedDuration?: number | null
    notes?: string | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPlanItemCreateOrConnectWithoutParkInfoInput = {
    where: TripPlanItemWhereUniqueInput
    create: XOR<TripPlanItemCreateWithoutParkInfoInput, TripPlanItemUncheckedCreateWithoutParkInfoInput>
  }

  export type TripPlanItemCreateManyParkInfoInputEnvelope = {
    data: TripPlanItemCreateManyParkInfoInput | TripPlanItemCreateManyParkInfoInput[]
  }

  export type UserFavoriteUpsertWithWhereUniqueWithoutParkInfoInput = {
    where: UserFavoriteWhereUniqueInput
    update: XOR<UserFavoriteUpdateWithoutParkInfoInput, UserFavoriteUncheckedUpdateWithoutParkInfoInput>
    create: XOR<UserFavoriteCreateWithoutParkInfoInput, UserFavoriteUncheckedCreateWithoutParkInfoInput>
  }

  export type UserFavoriteUpdateWithWhereUniqueWithoutParkInfoInput = {
    where: UserFavoriteWhereUniqueInput
    data: XOR<UserFavoriteUpdateWithoutParkInfoInput, UserFavoriteUncheckedUpdateWithoutParkInfoInput>
  }

  export type UserFavoriteUpdateManyWithWhereWithoutParkInfoInput = {
    where: UserFavoriteScalarWhereInput
    data: XOR<UserFavoriteUpdateManyMutationInput, UserFavoriteUncheckedUpdateManyWithoutParkInfoInput>
  }

  export type TripPlanItemUpsertWithWhereUniqueWithoutParkInfoInput = {
    where: TripPlanItemWhereUniqueInput
    update: XOR<TripPlanItemUpdateWithoutParkInfoInput, TripPlanItemUncheckedUpdateWithoutParkInfoInput>
    create: XOR<TripPlanItemCreateWithoutParkInfoInput, TripPlanItemUncheckedCreateWithoutParkInfoInput>
  }

  export type TripPlanItemUpdateWithWhereUniqueWithoutParkInfoInput = {
    where: TripPlanItemWhereUniqueInput
    data: XOR<TripPlanItemUpdateWithoutParkInfoInput, TripPlanItemUncheckedUpdateWithoutParkInfoInput>
  }

  export type TripPlanItemUpdateManyWithWhereWithoutParkInfoInput = {
    where: TripPlanItemScalarWhereInput
    data: XOR<TripPlanItemUpdateManyMutationInput, TripPlanItemUncheckedUpdateManyWithoutParkInfoInput>
  }

  export type UserFavoriteCreateWithoutUserInput = {
    id?: string
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    notes?: string | null
    createdAt?: Date | string
    troutStocking?: TroutStockingCreateNestedOneWithoutFavoritesInput
    parkInfo?: ParkInfoCreateNestedOneWithoutFavoritesInput
    event?: OutdoorEventCreateNestedOneWithoutFavoritesInput
  }

  export type UserFavoriteUncheckedCreateWithoutUserInput = {
    id?: string
    troutStockingId?: string | null
    parkInfoId?: string | null
    eventId?: string | null
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type UserFavoriteCreateOrConnectWithoutUserInput = {
    where: UserFavoriteWhereUniqueInput
    create: XOR<UserFavoriteCreateWithoutUserInput, UserFavoriteUncheckedCreateWithoutUserInput>
  }

  export type UserFavoriteCreateManyUserInputEnvelope = {
    data: UserFavoriteCreateManyUserInput | UserFavoriteCreateManyUserInput[]
  }

  export type TripPlanCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    participants?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: TripPlanItemCreateNestedManyWithoutTripPlanInput
  }

  export type TripPlanUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    participants?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: TripPlanItemUncheckedCreateNestedManyWithoutTripPlanInput
  }

  export type TripPlanCreateOrConnectWithoutUserInput = {
    where: TripPlanWhereUniqueInput
    create: XOR<TripPlanCreateWithoutUserInput, TripPlanUncheckedCreateWithoutUserInput>
  }

  export type TripPlanCreateManyUserInputEnvelope = {
    data: TripPlanCreateManyUserInput | TripPlanCreateManyUserInput[]
  }

  export type UserSubscriptionCreateWithoutUserInput = {
    id?: string
    type: string
    value: string
    notifyEmail?: boolean
    notifyPush?: boolean
    createdAt?: Date | string
  }

  export type UserSubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    value: string
    notifyEmail?: boolean
    notifyPush?: boolean
    createdAt?: Date | string
  }

  export type UserSubscriptionCreateOrConnectWithoutUserInput = {
    where: UserSubscriptionWhereUniqueInput
    create: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type UserSubscriptionCreateManyUserInputEnvelope = {
    data: UserSubscriptionCreateManyUserInput | UserSubscriptionCreateManyUserInput[]
  }

  export type UserFavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: UserFavoriteWhereUniqueInput
    update: XOR<UserFavoriteUpdateWithoutUserInput, UserFavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<UserFavoriteCreateWithoutUserInput, UserFavoriteUncheckedCreateWithoutUserInput>
  }

  export type UserFavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: UserFavoriteWhereUniqueInput
    data: XOR<UserFavoriteUpdateWithoutUserInput, UserFavoriteUncheckedUpdateWithoutUserInput>
  }

  export type UserFavoriteUpdateManyWithWhereWithoutUserInput = {
    where: UserFavoriteScalarWhereInput
    data: XOR<UserFavoriteUpdateManyMutationInput, UserFavoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type TripPlanUpsertWithWhereUniqueWithoutUserInput = {
    where: TripPlanWhereUniqueInput
    update: XOR<TripPlanUpdateWithoutUserInput, TripPlanUncheckedUpdateWithoutUserInput>
    create: XOR<TripPlanCreateWithoutUserInput, TripPlanUncheckedCreateWithoutUserInput>
  }

  export type TripPlanUpdateWithWhereUniqueWithoutUserInput = {
    where: TripPlanWhereUniqueInput
    data: XOR<TripPlanUpdateWithoutUserInput, TripPlanUncheckedUpdateWithoutUserInput>
  }

  export type TripPlanUpdateManyWithWhereWithoutUserInput = {
    where: TripPlanScalarWhereInput
    data: XOR<TripPlanUpdateManyMutationInput, TripPlanUncheckedUpdateManyWithoutUserInput>
  }

  export type TripPlanScalarWhereInput = {
    AND?: TripPlanScalarWhereInput | TripPlanScalarWhereInput[]
    OR?: TripPlanScalarWhereInput[]
    NOT?: TripPlanScalarWhereInput | TripPlanScalarWhereInput[]
    id?: StringFilter<"TripPlan"> | string
    userId?: StringFilter<"TripPlan"> | string
    title?: StringFilter<"TripPlan"> | string
    description?: StringNullableFilter<"TripPlan"> | string | null
    startDate?: DateTimeFilter<"TripPlan"> | Date | string
    endDate?: DateTimeNullableFilter<"TripPlan"> | Date | string | null
    participants?: IntFilter<"TripPlan"> | number
    createdAt?: DateTimeFilter<"TripPlan"> | Date | string
    updatedAt?: DateTimeFilter<"TripPlan"> | Date | string
  }

  export type UserSubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSubscriptionWhereUniqueInput
    update: XOR<UserSubscriptionUpdateWithoutUserInput, UserSubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type UserSubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSubscriptionWhereUniqueInput
    data: XOR<UserSubscriptionUpdateWithoutUserInput, UserSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type UserSubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: UserSubscriptionScalarWhereInput
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSubscriptionScalarWhereInput = {
    AND?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
    OR?: UserSubscriptionScalarWhereInput[]
    NOT?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
    id?: StringFilter<"UserSubscription"> | string
    userId?: StringFilter<"UserSubscription"> | string
    type?: StringFilter<"UserSubscription"> | string
    value?: StringFilter<"UserSubscription"> | string
    notifyEmail?: BoolFilter<"UserSubscription"> | boolean
    notifyPush?: BoolFilter<"UserSubscription"> | boolean
    createdAt?: DateTimeFilter<"UserSubscription"> | Date | string
  }

  export type UserCreateWithoutFavoriteLocationsInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tripPlans?: TripPlanCreateNestedManyWithoutUserInput
    subscriptions?: UserSubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoriteLocationsInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tripPlans?: TripPlanUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoriteLocationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoriteLocationsInput, UserUncheckedCreateWithoutFavoriteLocationsInput>
  }

  export type TroutStockingCreateWithoutFavoritesInput = {
    id?: string
    location: string
    waterBody: string
    county?: string | null
    species: string
    size?: string | null
    quantity: number
    stockingDate: Date | string
    nextStockingDate?: Date | string | null
    latitude?: number | null
    longitude?: number | null
    waterBodyType?: string | null
    accessInfo?: string | null
    regulations?: string | null
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tripPlanItems?: TripPlanItemCreateNestedManyWithoutTroutStockingInput
  }

  export type TroutStockingUncheckedCreateWithoutFavoritesInput = {
    id?: string
    location: string
    waterBody: string
    county?: string | null
    species: string
    size?: string | null
    quantity: number
    stockingDate: Date | string
    nextStockingDate?: Date | string | null
    latitude?: number | null
    longitude?: number | null
    waterBodyType?: string | null
    accessInfo?: string | null
    regulations?: string | null
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tripPlanItems?: TripPlanItemUncheckedCreateNestedManyWithoutTroutStockingInput
  }

  export type TroutStockingCreateOrConnectWithoutFavoritesInput = {
    where: TroutStockingWhereUniqueInput
    create: XOR<TroutStockingCreateWithoutFavoritesInput, TroutStockingUncheckedCreateWithoutFavoritesInput>
  }

  export type ParkInfoCreateWithoutFavoritesInput = {
    id?: string
    name: string
    type: string
    location: string
    latitude: number
    longitude: number
    amenities: string
    activities: string
    dailyPassFee?: number | null
    annualPassFee?: number | null
    campingFee?: number | null
    summerHours?: string | null
    winterHours?: string | null
    currentHours: string
    campingAvailable?: boolean
    reservationRequired?: boolean | null
    petPolicy?: string | null
    accessibility: string
    currentConditions?: string | null
    alerts: string
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tripPlanItems?: TripPlanItemCreateNestedManyWithoutParkInfoInput
  }

  export type ParkInfoUncheckedCreateWithoutFavoritesInput = {
    id?: string
    name: string
    type: string
    location: string
    latitude: number
    longitude: number
    amenities: string
    activities: string
    dailyPassFee?: number | null
    annualPassFee?: number | null
    campingFee?: number | null
    summerHours?: string | null
    winterHours?: string | null
    currentHours: string
    campingAvailable?: boolean
    reservationRequired?: boolean | null
    petPolicy?: string | null
    accessibility: string
    currentConditions?: string | null
    alerts: string
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tripPlanItems?: TripPlanItemUncheckedCreateNestedManyWithoutParkInfoInput
  }

  export type ParkInfoCreateOrConnectWithoutFavoritesInput = {
    where: ParkInfoWhereUniqueInput
    create: XOR<ParkInfoCreateWithoutFavoritesInput, ParkInfoUncheckedCreateWithoutFavoritesInput>
  }

  export type OutdoorEventCreateWithoutFavoritesInput = {
    id?: string
    title: string
    description?: string | null
    eventType: string
    location: string
    latitude?: number | null
    longitude?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    cost?: number | null
    registrationRequired?: boolean
    registrationUrl?: string | null
    contactInfo?: string | null
    ageRestrictions?: string | null
    capacity?: number | null
    difficulty?: string | null
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tripPlanItems?: TripPlanItemCreateNestedManyWithoutEventInput
  }

  export type OutdoorEventUncheckedCreateWithoutFavoritesInput = {
    id?: string
    title: string
    description?: string | null
    eventType: string
    location: string
    latitude?: number | null
    longitude?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    cost?: number | null
    registrationRequired?: boolean
    registrationUrl?: string | null
    contactInfo?: string | null
    ageRestrictions?: string | null
    capacity?: number | null
    difficulty?: string | null
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tripPlanItems?: TripPlanItemUncheckedCreateNestedManyWithoutEventInput
  }

  export type OutdoorEventCreateOrConnectWithoutFavoritesInput = {
    where: OutdoorEventWhereUniqueInput
    create: XOR<OutdoorEventCreateWithoutFavoritesInput, OutdoorEventUncheckedCreateWithoutFavoritesInput>
  }

  export type UserUpsertWithoutFavoriteLocationsInput = {
    update: XOR<UserUpdateWithoutFavoriteLocationsInput, UserUncheckedUpdateWithoutFavoriteLocationsInput>
    create: XOR<UserCreateWithoutFavoriteLocationsInput, UserUncheckedCreateWithoutFavoriteLocationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoriteLocationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoriteLocationsInput, UserUncheckedUpdateWithoutFavoriteLocationsInput>
  }

  export type UserUpdateWithoutFavoriteLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripPlans?: TripPlanUpdateManyWithoutUserNestedInput
    subscriptions?: UserSubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoriteLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripPlans?: TripPlanUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TroutStockingUpsertWithoutFavoritesInput = {
    update: XOR<TroutStockingUpdateWithoutFavoritesInput, TroutStockingUncheckedUpdateWithoutFavoritesInput>
    create: XOR<TroutStockingCreateWithoutFavoritesInput, TroutStockingUncheckedCreateWithoutFavoritesInput>
    where?: TroutStockingWhereInput
  }

  export type TroutStockingUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: TroutStockingWhereInput
    data: XOR<TroutStockingUpdateWithoutFavoritesInput, TroutStockingUncheckedUpdateWithoutFavoritesInput>
  }

  export type TroutStockingUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    waterBody?: StringFieldUpdateOperationsInput | string
    county?: NullableStringFieldUpdateOperationsInput | string | null
    species?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    stockingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextStockingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    waterBodyType?: NullableStringFieldUpdateOperationsInput | string | null
    accessInfo?: NullableStringFieldUpdateOperationsInput | string | null
    regulations?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripPlanItems?: TripPlanItemUpdateManyWithoutTroutStockingNestedInput
  }

  export type TroutStockingUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    waterBody?: StringFieldUpdateOperationsInput | string
    county?: NullableStringFieldUpdateOperationsInput | string | null
    species?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    stockingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextStockingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    waterBodyType?: NullableStringFieldUpdateOperationsInput | string | null
    accessInfo?: NullableStringFieldUpdateOperationsInput | string | null
    regulations?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripPlanItems?: TripPlanItemUncheckedUpdateManyWithoutTroutStockingNestedInput
  }

  export type ParkInfoUpsertWithoutFavoritesInput = {
    update: XOR<ParkInfoUpdateWithoutFavoritesInput, ParkInfoUncheckedUpdateWithoutFavoritesInput>
    create: XOR<ParkInfoCreateWithoutFavoritesInput, ParkInfoUncheckedCreateWithoutFavoritesInput>
    where?: ParkInfoWhereInput
  }

  export type ParkInfoUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: ParkInfoWhereInput
    data: XOR<ParkInfoUpdateWithoutFavoritesInput, ParkInfoUncheckedUpdateWithoutFavoritesInput>
  }

  export type ParkInfoUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    amenities?: StringFieldUpdateOperationsInput | string
    activities?: StringFieldUpdateOperationsInput | string
    dailyPassFee?: NullableFloatFieldUpdateOperationsInput | number | null
    annualPassFee?: NullableFloatFieldUpdateOperationsInput | number | null
    campingFee?: NullableFloatFieldUpdateOperationsInput | number | null
    summerHours?: NullableStringFieldUpdateOperationsInput | string | null
    winterHours?: NullableStringFieldUpdateOperationsInput | string | null
    currentHours?: StringFieldUpdateOperationsInput | string
    campingAvailable?: BoolFieldUpdateOperationsInput | boolean
    reservationRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    petPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    accessibility?: StringFieldUpdateOperationsInput | string
    currentConditions?: NullableStringFieldUpdateOperationsInput | string | null
    alerts?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripPlanItems?: TripPlanItemUpdateManyWithoutParkInfoNestedInput
  }

  export type ParkInfoUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    amenities?: StringFieldUpdateOperationsInput | string
    activities?: StringFieldUpdateOperationsInput | string
    dailyPassFee?: NullableFloatFieldUpdateOperationsInput | number | null
    annualPassFee?: NullableFloatFieldUpdateOperationsInput | number | null
    campingFee?: NullableFloatFieldUpdateOperationsInput | number | null
    summerHours?: NullableStringFieldUpdateOperationsInput | string | null
    winterHours?: NullableStringFieldUpdateOperationsInput | string | null
    currentHours?: StringFieldUpdateOperationsInput | string
    campingAvailable?: BoolFieldUpdateOperationsInput | boolean
    reservationRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    petPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    accessibility?: StringFieldUpdateOperationsInput | string
    currentConditions?: NullableStringFieldUpdateOperationsInput | string | null
    alerts?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripPlanItems?: TripPlanItemUncheckedUpdateManyWithoutParkInfoNestedInput
  }

  export type OutdoorEventUpsertWithoutFavoritesInput = {
    update: XOR<OutdoorEventUpdateWithoutFavoritesInput, OutdoorEventUncheckedUpdateWithoutFavoritesInput>
    create: XOR<OutdoorEventCreateWithoutFavoritesInput, OutdoorEventUncheckedCreateWithoutFavoritesInput>
    where?: OutdoorEventWhereInput
  }

  export type OutdoorEventUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: OutdoorEventWhereInput
    data: XOR<OutdoorEventUpdateWithoutFavoritesInput, OutdoorEventUncheckedUpdateWithoutFavoritesInput>
  }

  export type OutdoorEventUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    registrationRequired?: BoolFieldUpdateOperationsInput | boolean
    registrationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ageRestrictions?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripPlanItems?: TripPlanItemUpdateManyWithoutEventNestedInput
  }

  export type OutdoorEventUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    registrationRequired?: BoolFieldUpdateOperationsInput | boolean
    registrationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ageRestrictions?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripPlanItems?: TripPlanItemUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserCreateWithoutTripPlansInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteLocations?: UserFavoriteCreateNestedManyWithoutUserInput
    subscriptions?: UserSubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTripPlansInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteLocations?: UserFavoriteUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTripPlansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTripPlansInput, UserUncheckedCreateWithoutTripPlansInput>
  }

  export type TripPlanItemCreateWithoutTripPlanInput = {
    id?: string
    type: string
    customTitle?: string | null
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    scheduledTime?: Date | string | null
    estimatedDuration?: number | null
    notes?: string | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    troutStocking?: TroutStockingCreateNestedOneWithoutTripPlanItemsInput
    parkInfo?: ParkInfoCreateNestedOneWithoutTripPlanItemsInput
    event?: OutdoorEventCreateNestedOneWithoutTripPlanItemsInput
  }

  export type TripPlanItemUncheckedCreateWithoutTripPlanInput = {
    id?: string
    type: string
    troutStockingId?: string | null
    parkInfoId?: string | null
    eventId?: string | null
    customTitle?: string | null
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    scheduledTime?: Date | string | null
    estimatedDuration?: number | null
    notes?: string | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPlanItemCreateOrConnectWithoutTripPlanInput = {
    where: TripPlanItemWhereUniqueInput
    create: XOR<TripPlanItemCreateWithoutTripPlanInput, TripPlanItemUncheckedCreateWithoutTripPlanInput>
  }

  export type TripPlanItemCreateManyTripPlanInputEnvelope = {
    data: TripPlanItemCreateManyTripPlanInput | TripPlanItemCreateManyTripPlanInput[]
  }

  export type UserUpsertWithoutTripPlansInput = {
    update: XOR<UserUpdateWithoutTripPlansInput, UserUncheckedUpdateWithoutTripPlansInput>
    create: XOR<UserCreateWithoutTripPlansInput, UserUncheckedCreateWithoutTripPlansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTripPlansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTripPlansInput, UserUncheckedUpdateWithoutTripPlansInput>
  }

  export type UserUpdateWithoutTripPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteLocations?: UserFavoriteUpdateManyWithoutUserNestedInput
    subscriptions?: UserSubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTripPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteLocations?: UserFavoriteUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TripPlanItemUpsertWithWhereUniqueWithoutTripPlanInput = {
    where: TripPlanItemWhereUniqueInput
    update: XOR<TripPlanItemUpdateWithoutTripPlanInput, TripPlanItemUncheckedUpdateWithoutTripPlanInput>
    create: XOR<TripPlanItemCreateWithoutTripPlanInput, TripPlanItemUncheckedCreateWithoutTripPlanInput>
  }

  export type TripPlanItemUpdateWithWhereUniqueWithoutTripPlanInput = {
    where: TripPlanItemWhereUniqueInput
    data: XOR<TripPlanItemUpdateWithoutTripPlanInput, TripPlanItemUncheckedUpdateWithoutTripPlanInput>
  }

  export type TripPlanItemUpdateManyWithWhereWithoutTripPlanInput = {
    where: TripPlanItemScalarWhereInput
    data: XOR<TripPlanItemUpdateManyMutationInput, TripPlanItemUncheckedUpdateManyWithoutTripPlanInput>
  }

  export type TripPlanCreateWithoutItemsInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    participants?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTripPlansInput
  }

  export type TripPlanUncheckedCreateWithoutItemsInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    participants?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPlanCreateOrConnectWithoutItemsInput = {
    where: TripPlanWhereUniqueInput
    create: XOR<TripPlanCreateWithoutItemsInput, TripPlanUncheckedCreateWithoutItemsInput>
  }

  export type TroutStockingCreateWithoutTripPlanItemsInput = {
    id?: string
    location: string
    waterBody: string
    county?: string | null
    species: string
    size?: string | null
    quantity: number
    stockingDate: Date | string
    nextStockingDate?: Date | string | null
    latitude?: number | null
    longitude?: number | null
    waterBodyType?: string | null
    accessInfo?: string | null
    regulations?: string | null
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: UserFavoriteCreateNestedManyWithoutTroutStockingInput
  }

  export type TroutStockingUncheckedCreateWithoutTripPlanItemsInput = {
    id?: string
    location: string
    waterBody: string
    county?: string | null
    species: string
    size?: string | null
    quantity: number
    stockingDate: Date | string
    nextStockingDate?: Date | string | null
    latitude?: number | null
    longitude?: number | null
    waterBodyType?: string | null
    accessInfo?: string | null
    regulations?: string | null
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: UserFavoriteUncheckedCreateNestedManyWithoutTroutStockingInput
  }

  export type TroutStockingCreateOrConnectWithoutTripPlanItemsInput = {
    where: TroutStockingWhereUniqueInput
    create: XOR<TroutStockingCreateWithoutTripPlanItemsInput, TroutStockingUncheckedCreateWithoutTripPlanItemsInput>
  }

  export type ParkInfoCreateWithoutTripPlanItemsInput = {
    id?: string
    name: string
    type: string
    location: string
    latitude: number
    longitude: number
    amenities: string
    activities: string
    dailyPassFee?: number | null
    annualPassFee?: number | null
    campingFee?: number | null
    summerHours?: string | null
    winterHours?: string | null
    currentHours: string
    campingAvailable?: boolean
    reservationRequired?: boolean | null
    petPolicy?: string | null
    accessibility: string
    currentConditions?: string | null
    alerts: string
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: UserFavoriteCreateNestedManyWithoutParkInfoInput
  }

  export type ParkInfoUncheckedCreateWithoutTripPlanItemsInput = {
    id?: string
    name: string
    type: string
    location: string
    latitude: number
    longitude: number
    amenities: string
    activities: string
    dailyPassFee?: number | null
    annualPassFee?: number | null
    campingFee?: number | null
    summerHours?: string | null
    winterHours?: string | null
    currentHours: string
    campingAvailable?: boolean
    reservationRequired?: boolean | null
    petPolicy?: string | null
    accessibility: string
    currentConditions?: string | null
    alerts: string
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: UserFavoriteUncheckedCreateNestedManyWithoutParkInfoInput
  }

  export type ParkInfoCreateOrConnectWithoutTripPlanItemsInput = {
    where: ParkInfoWhereUniqueInput
    create: XOR<ParkInfoCreateWithoutTripPlanItemsInput, ParkInfoUncheckedCreateWithoutTripPlanItemsInput>
  }

  export type OutdoorEventCreateWithoutTripPlanItemsInput = {
    id?: string
    title: string
    description?: string | null
    eventType: string
    location: string
    latitude?: number | null
    longitude?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    cost?: number | null
    registrationRequired?: boolean
    registrationUrl?: string | null
    contactInfo?: string | null
    ageRestrictions?: string | null
    capacity?: number | null
    difficulty?: string | null
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: UserFavoriteCreateNestedManyWithoutEventInput
  }

  export type OutdoorEventUncheckedCreateWithoutTripPlanItemsInput = {
    id?: string
    title: string
    description?: string | null
    eventType: string
    location: string
    latitude?: number | null
    longitude?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    cost?: number | null
    registrationRequired?: boolean
    registrationUrl?: string | null
    contactInfo?: string | null
    ageRestrictions?: string | null
    capacity?: number | null
    difficulty?: string | null
    source?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    favorites?: UserFavoriteUncheckedCreateNestedManyWithoutEventInput
  }

  export type OutdoorEventCreateOrConnectWithoutTripPlanItemsInput = {
    where: OutdoorEventWhereUniqueInput
    create: XOR<OutdoorEventCreateWithoutTripPlanItemsInput, OutdoorEventUncheckedCreateWithoutTripPlanItemsInput>
  }

  export type TripPlanUpsertWithoutItemsInput = {
    update: XOR<TripPlanUpdateWithoutItemsInput, TripPlanUncheckedUpdateWithoutItemsInput>
    create: XOR<TripPlanCreateWithoutItemsInput, TripPlanUncheckedCreateWithoutItemsInput>
    where?: TripPlanWhereInput
  }

  export type TripPlanUpdateToOneWithWhereWithoutItemsInput = {
    where?: TripPlanWhereInput
    data: XOR<TripPlanUpdateWithoutItemsInput, TripPlanUncheckedUpdateWithoutItemsInput>
  }

  export type TripPlanUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTripPlansNestedInput
  }

  export type TripPlanUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TroutStockingUpsertWithoutTripPlanItemsInput = {
    update: XOR<TroutStockingUpdateWithoutTripPlanItemsInput, TroutStockingUncheckedUpdateWithoutTripPlanItemsInput>
    create: XOR<TroutStockingCreateWithoutTripPlanItemsInput, TroutStockingUncheckedCreateWithoutTripPlanItemsInput>
    where?: TroutStockingWhereInput
  }

  export type TroutStockingUpdateToOneWithWhereWithoutTripPlanItemsInput = {
    where?: TroutStockingWhereInput
    data: XOR<TroutStockingUpdateWithoutTripPlanItemsInput, TroutStockingUncheckedUpdateWithoutTripPlanItemsInput>
  }

  export type TroutStockingUpdateWithoutTripPlanItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    waterBody?: StringFieldUpdateOperationsInput | string
    county?: NullableStringFieldUpdateOperationsInput | string | null
    species?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    stockingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextStockingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    waterBodyType?: NullableStringFieldUpdateOperationsInput | string | null
    accessInfo?: NullableStringFieldUpdateOperationsInput | string | null
    regulations?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: UserFavoriteUpdateManyWithoutTroutStockingNestedInput
  }

  export type TroutStockingUncheckedUpdateWithoutTripPlanItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    waterBody?: StringFieldUpdateOperationsInput | string
    county?: NullableStringFieldUpdateOperationsInput | string | null
    species?: StringFieldUpdateOperationsInput | string
    size?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    stockingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextStockingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    waterBodyType?: NullableStringFieldUpdateOperationsInput | string | null
    accessInfo?: NullableStringFieldUpdateOperationsInput | string | null
    regulations?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: UserFavoriteUncheckedUpdateManyWithoutTroutStockingNestedInput
  }

  export type ParkInfoUpsertWithoutTripPlanItemsInput = {
    update: XOR<ParkInfoUpdateWithoutTripPlanItemsInput, ParkInfoUncheckedUpdateWithoutTripPlanItemsInput>
    create: XOR<ParkInfoCreateWithoutTripPlanItemsInput, ParkInfoUncheckedCreateWithoutTripPlanItemsInput>
    where?: ParkInfoWhereInput
  }

  export type ParkInfoUpdateToOneWithWhereWithoutTripPlanItemsInput = {
    where?: ParkInfoWhereInput
    data: XOR<ParkInfoUpdateWithoutTripPlanItemsInput, ParkInfoUncheckedUpdateWithoutTripPlanItemsInput>
  }

  export type ParkInfoUpdateWithoutTripPlanItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    amenities?: StringFieldUpdateOperationsInput | string
    activities?: StringFieldUpdateOperationsInput | string
    dailyPassFee?: NullableFloatFieldUpdateOperationsInput | number | null
    annualPassFee?: NullableFloatFieldUpdateOperationsInput | number | null
    campingFee?: NullableFloatFieldUpdateOperationsInput | number | null
    summerHours?: NullableStringFieldUpdateOperationsInput | string | null
    winterHours?: NullableStringFieldUpdateOperationsInput | string | null
    currentHours?: StringFieldUpdateOperationsInput | string
    campingAvailable?: BoolFieldUpdateOperationsInput | boolean
    reservationRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    petPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    accessibility?: StringFieldUpdateOperationsInput | string
    currentConditions?: NullableStringFieldUpdateOperationsInput | string | null
    alerts?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: UserFavoriteUpdateManyWithoutParkInfoNestedInput
  }

  export type ParkInfoUncheckedUpdateWithoutTripPlanItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    amenities?: StringFieldUpdateOperationsInput | string
    activities?: StringFieldUpdateOperationsInput | string
    dailyPassFee?: NullableFloatFieldUpdateOperationsInput | number | null
    annualPassFee?: NullableFloatFieldUpdateOperationsInput | number | null
    campingFee?: NullableFloatFieldUpdateOperationsInput | number | null
    summerHours?: NullableStringFieldUpdateOperationsInput | string | null
    winterHours?: NullableStringFieldUpdateOperationsInput | string | null
    currentHours?: StringFieldUpdateOperationsInput | string
    campingAvailable?: BoolFieldUpdateOperationsInput | boolean
    reservationRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    petPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    accessibility?: StringFieldUpdateOperationsInput | string
    currentConditions?: NullableStringFieldUpdateOperationsInput | string | null
    alerts?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: UserFavoriteUncheckedUpdateManyWithoutParkInfoNestedInput
  }

  export type OutdoorEventUpsertWithoutTripPlanItemsInput = {
    update: XOR<OutdoorEventUpdateWithoutTripPlanItemsInput, OutdoorEventUncheckedUpdateWithoutTripPlanItemsInput>
    create: XOR<OutdoorEventCreateWithoutTripPlanItemsInput, OutdoorEventUncheckedCreateWithoutTripPlanItemsInput>
    where?: OutdoorEventWhereInput
  }

  export type OutdoorEventUpdateToOneWithWhereWithoutTripPlanItemsInput = {
    where?: OutdoorEventWhereInput
    data: XOR<OutdoorEventUpdateWithoutTripPlanItemsInput, OutdoorEventUncheckedUpdateWithoutTripPlanItemsInput>
  }

  export type OutdoorEventUpdateWithoutTripPlanItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    registrationRequired?: BoolFieldUpdateOperationsInput | boolean
    registrationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ageRestrictions?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: UserFavoriteUpdateManyWithoutEventNestedInput
  }

  export type OutdoorEventUncheckedUpdateWithoutTripPlanItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    registrationRequired?: BoolFieldUpdateOperationsInput | boolean
    registrationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ageRestrictions?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: UserFavoriteUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserCreateWithoutSubscriptionsInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteLocations?: UserFavoriteCreateNestedManyWithoutUserInput
    tripPlans?: TripPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteLocations?: UserFavoriteUncheckedCreateNestedManyWithoutUserInput
    tripPlans?: TripPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
  }

  export type UserUpsertWithoutSubscriptionsInput = {
    update: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteLocations?: UserFavoriteUpdateManyWithoutUserNestedInput
    tripPlans?: TripPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteLocations?: UserFavoriteUncheckedUpdateManyWithoutUserNestedInput
    tripPlans?: TripPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserFavoriteCreateManyTroutStockingInput = {
    id?: string
    userId: string
    parkInfoId?: string | null
    eventId?: string | null
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type TripPlanItemCreateManyTroutStockingInput = {
    id?: string
    tripPlanId: string
    type: string
    parkInfoId?: string | null
    eventId?: string | null
    customTitle?: string | null
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    scheduledTime?: Date | string | null
    estimatedDuration?: number | null
    notes?: string | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFavoriteUpdateWithoutTroutStockingInput = {
    id?: StringFieldUpdateOperationsInput | string
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoriteLocationsNestedInput
    parkInfo?: ParkInfoUpdateOneWithoutFavoritesNestedInput
    event?: OutdoorEventUpdateOneWithoutFavoritesNestedInput
  }

  export type UserFavoriteUncheckedUpdateWithoutTroutStockingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parkInfoId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteUncheckedUpdateManyWithoutTroutStockingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parkInfoId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanItemUpdateWithoutTroutStockingInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    customTitle?: NullableStringFieldUpdateOperationsInput | string | null
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripPlan?: TripPlanUpdateOneRequiredWithoutItemsNestedInput
    parkInfo?: ParkInfoUpdateOneWithoutTripPlanItemsNestedInput
    event?: OutdoorEventUpdateOneWithoutTripPlanItemsNestedInput
  }

  export type TripPlanItemUncheckedUpdateWithoutTroutStockingInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripPlanId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    parkInfoId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    customTitle?: NullableStringFieldUpdateOperationsInput | string | null
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanItemUncheckedUpdateManyWithoutTroutStockingInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripPlanId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    parkInfoId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    customTitle?: NullableStringFieldUpdateOperationsInput | string | null
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteCreateManyEventInput = {
    id?: string
    userId: string
    troutStockingId?: string | null
    parkInfoId?: string | null
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type TripPlanItemCreateManyEventInput = {
    id?: string
    tripPlanId: string
    type: string
    troutStockingId?: string | null
    parkInfoId?: string | null
    customTitle?: string | null
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    scheduledTime?: Date | string | null
    estimatedDuration?: number | null
    notes?: string | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFavoriteUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoriteLocationsNestedInput
    troutStocking?: TroutStockingUpdateOneWithoutFavoritesNestedInput
    parkInfo?: ParkInfoUpdateOneWithoutFavoritesNestedInput
  }

  export type UserFavoriteUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    troutStockingId?: NullableStringFieldUpdateOperationsInput | string | null
    parkInfoId?: NullableStringFieldUpdateOperationsInput | string | null
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    troutStockingId?: NullableStringFieldUpdateOperationsInput | string | null
    parkInfoId?: NullableStringFieldUpdateOperationsInput | string | null
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanItemUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    customTitle?: NullableStringFieldUpdateOperationsInput | string | null
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripPlan?: TripPlanUpdateOneRequiredWithoutItemsNestedInput
    troutStocking?: TroutStockingUpdateOneWithoutTripPlanItemsNestedInput
    parkInfo?: ParkInfoUpdateOneWithoutTripPlanItemsNestedInput
  }

  export type TripPlanItemUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripPlanId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    troutStockingId?: NullableStringFieldUpdateOperationsInput | string | null
    parkInfoId?: NullableStringFieldUpdateOperationsInput | string | null
    customTitle?: NullableStringFieldUpdateOperationsInput | string | null
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanItemUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripPlanId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    troutStockingId?: NullableStringFieldUpdateOperationsInput | string | null
    parkInfoId?: NullableStringFieldUpdateOperationsInput | string | null
    customTitle?: NullableStringFieldUpdateOperationsInput | string | null
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteCreateManyParkInfoInput = {
    id?: string
    userId: string
    troutStockingId?: string | null
    eventId?: string | null
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type TripPlanItemCreateManyParkInfoInput = {
    id?: string
    tripPlanId: string
    type: string
    troutStockingId?: string | null
    eventId?: string | null
    customTitle?: string | null
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    scheduledTime?: Date | string | null
    estimatedDuration?: number | null
    notes?: string | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFavoriteUpdateWithoutParkInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoriteLocationsNestedInput
    troutStocking?: TroutStockingUpdateOneWithoutFavoritesNestedInput
    event?: OutdoorEventUpdateOneWithoutFavoritesNestedInput
  }

  export type UserFavoriteUncheckedUpdateWithoutParkInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    troutStockingId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteUncheckedUpdateManyWithoutParkInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    troutStockingId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanItemUpdateWithoutParkInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    customTitle?: NullableStringFieldUpdateOperationsInput | string | null
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripPlan?: TripPlanUpdateOneRequiredWithoutItemsNestedInput
    troutStocking?: TroutStockingUpdateOneWithoutTripPlanItemsNestedInput
    event?: OutdoorEventUpdateOneWithoutTripPlanItemsNestedInput
  }

  export type TripPlanItemUncheckedUpdateWithoutParkInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripPlanId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    troutStockingId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    customTitle?: NullableStringFieldUpdateOperationsInput | string | null
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanItemUncheckedUpdateManyWithoutParkInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripPlanId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    troutStockingId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    customTitle?: NullableStringFieldUpdateOperationsInput | string | null
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteCreateManyUserInput = {
    id?: string
    troutStockingId?: string | null
    parkInfoId?: string | null
    eventId?: string | null
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type TripPlanCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    participants?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSubscriptionCreateManyUserInput = {
    id?: string
    type: string
    value: string
    notifyEmail?: boolean
    notifyPush?: boolean
    createdAt?: Date | string
  }

  export type UserFavoriteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    troutStocking?: TroutStockingUpdateOneWithoutFavoritesNestedInput
    parkInfo?: ParkInfoUpdateOneWithoutFavoritesNestedInput
    event?: OutdoorEventUpdateOneWithoutFavoritesNestedInput
  }

  export type UserFavoriteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    troutStockingId?: NullableStringFieldUpdateOperationsInput | string | null
    parkInfoId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    troutStockingId?: NullableStringFieldUpdateOperationsInput | string | null
    parkInfoId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: TripPlanItemUpdateManyWithoutTripPlanNestedInput
  }

  export type TripPlanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: TripPlanItemUncheckedUpdateManyWithoutTripPlanNestedInput
  }

  export type TripPlanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    notifyEmail?: BoolFieldUpdateOperationsInput | boolean
    notifyPush?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    notifyEmail?: BoolFieldUpdateOperationsInput | boolean
    notifyPush?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    notifyEmail?: BoolFieldUpdateOperationsInput | boolean
    notifyPush?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanItemCreateManyTripPlanInput = {
    id?: string
    type: string
    troutStockingId?: string | null
    parkInfoId?: string | null
    eventId?: string | null
    customTitle?: string | null
    customLocation?: string | null
    latitude?: number | null
    longitude?: number | null
    scheduledTime?: Date | string | null
    estimatedDuration?: number | null
    notes?: string | null
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPlanItemUpdateWithoutTripPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    customTitle?: NullableStringFieldUpdateOperationsInput | string | null
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    troutStocking?: TroutStockingUpdateOneWithoutTripPlanItemsNestedInput
    parkInfo?: ParkInfoUpdateOneWithoutTripPlanItemsNestedInput
    event?: OutdoorEventUpdateOneWithoutTripPlanItemsNestedInput
  }

  export type TripPlanItemUncheckedUpdateWithoutTripPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    troutStockingId?: NullableStringFieldUpdateOperationsInput | string | null
    parkInfoId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    customTitle?: NullableStringFieldUpdateOperationsInput | string | null
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanItemUncheckedUpdateManyWithoutTripPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    troutStockingId?: NullableStringFieldUpdateOperationsInput | string | null
    parkInfoId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    customTitle?: NullableStringFieldUpdateOperationsInput | string | null
    customLocation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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