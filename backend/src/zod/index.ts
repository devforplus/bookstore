import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['Serializable']);

export const UsersScalarFieldEnumSchema = z.enum(['id','name','password','sex','email','phone','address']);

export const AddressesScalarFieldEnumSchema = z.enum(['id','zip_code','address','detailedAddress']);

export const BooksScalarFieldEnumSchema = z.enum(['id','name','cost','price','description','quantity','author','genre_id']);

export const OrdersScalarFieldEnumSchema = z.enum(['id','order_date','total_price','orderer','canceled']);

export const OrderDetailsScalarFieldEnumSchema = z.enum(['order_id','book_id']);

export const GenresScalarFieldEnumSchema = z.enum(['id','genre']);

export const CartsScalarFieldEnumSchema = z.enum(['cart_owner_id','book_id','quantity']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USERS SCHEMA
/////////////////////////////////////////

export const usersSchema = z.object({
  id: z.string(),
  name: z.string(),
  password: z.string(),
  sex: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.number().int(),
})

export type users = z.infer<typeof usersSchema>

/////////////////////////////////////////
// ADDRESSES SCHEMA
/////////////////////////////////////////

export const addressesSchema = z.object({
  id: z.number().int(),
  zip_code: z.string(),
  address: z.string(),
  detailedAddress: z.string(),
})

export type addresses = z.infer<typeof addressesSchema>

/////////////////////////////////////////
// BOOKS SCHEMA
/////////////////////////////////////////

export const booksSchema = z.object({
  id: z.string(),
  name: z.string(),
  cost: z.number().int(),
  price: z.number().int(),
  description: z.string(),
  quantity: z.number().int(),
  author: z.string(),
  genre_id: z.number().int(),
})

export type books = z.infer<typeof booksSchema>

/////////////////////////////////////////
// ORDERS SCHEMA
/////////////////////////////////////////

export const ordersSchema = z.object({
  id: z.string(),
  order_date: z.coerce.date(),
  total_price: z.number().int(),
  orderer: z.string(),
  canceled: z.coerce.date().nullable(),
})

export type orders = z.infer<typeof ordersSchema>

/////////////////////////////////////////
// ORDER DETAILS SCHEMA
/////////////////////////////////////////

export const orderDetailsSchema = z.object({
  order_id: z.string(),
  book_id: z.string(),
})

export type orderDetails = z.infer<typeof orderDetailsSchema>

/////////////////////////////////////////
// GENRES SCHEMA
/////////////////////////////////////////

export const genresSchema = z.object({
  id: z.number().int(),
  genre: z.string(),
})

export type genres = z.infer<typeof genresSchema>

/////////////////////////////////////////
// CARTS SCHEMA
/////////////////////////////////////////

export const cartsSchema = z.object({
  cart_owner_id: z.string(),
  book_id: z.string(),
  quantity: z.number().int(),
})

export type carts = z.infer<typeof cartsSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USERS
//------------------------------------------------------

export const usersIncludeSchema: z.ZodType<Prisma.usersInclude> = z.object({
  carts: z.union([z.boolean(),z.lazy(() => cartsFindManyArgsSchema)]).optional(),
  orders: z.union([z.boolean(),z.lazy(() => ordersFindManyArgsSchema)]).optional(),
  addresses: z.union([z.boolean(),z.lazy(() => addressesArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UsersCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const usersArgsSchema: z.ZodType<Prisma.usersDefaultArgs> = z.object({
  select: z.lazy(() => usersSelectSchema).optional(),
  include: z.lazy(() => usersIncludeSchema).optional(),
}).strict();

export const usersCountOutputTypeArgsSchema: z.ZodType<Prisma.usersCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => usersCountOutputTypeSelectSchema).nullish(),
}).strict();

export const usersCountOutputTypeSelectSchema: z.ZodType<Prisma.usersCountOutputTypeSelect> = z.object({
  carts: z.boolean().optional(),
  orders: z.boolean().optional(),
}).strict();

export const usersSelectSchema: z.ZodType<Prisma.usersSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  password: z.boolean().optional(),
  sex: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  address: z.boolean().optional(),
  carts: z.union([z.boolean(),z.lazy(() => cartsFindManyArgsSchema)]).optional(),
  orders: z.union([z.boolean(),z.lazy(() => ordersFindManyArgsSchema)]).optional(),
  addresses: z.union([z.boolean(),z.lazy(() => addressesArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UsersCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ADDRESSES
//------------------------------------------------------

export const addressesIncludeSchema: z.ZodType<Prisma.addressesInclude> = z.object({
  users: z.union([z.boolean(),z.lazy(() => usersFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AddressesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const addressesArgsSchema: z.ZodType<Prisma.addressesDefaultArgs> = z.object({
  select: z.lazy(() => addressesSelectSchema).optional(),
  include: z.lazy(() => addressesIncludeSchema).optional(),
}).strict();

export const addressesCountOutputTypeArgsSchema: z.ZodType<Prisma.addressesCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => addressesCountOutputTypeSelectSchema).nullish(),
}).strict();

export const addressesCountOutputTypeSelectSchema: z.ZodType<Prisma.addressesCountOutputTypeSelect> = z.object({
  users: z.boolean().optional(),
}).strict();

export const addressesSelectSchema: z.ZodType<Prisma.addressesSelect> = z.object({
  id: z.boolean().optional(),
  zip_code: z.boolean().optional(),
  address: z.boolean().optional(),
  detailedAddress: z.boolean().optional(),
  users: z.union([z.boolean(),z.lazy(() => usersFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AddressesCountOutputTypeArgsSchema)]).optional(),
}).strict()

// BOOKS
//------------------------------------------------------

export const booksIncludeSchema: z.ZodType<Prisma.booksInclude> = z.object({
  genres: z.union([z.boolean(),z.lazy(() => genresArgsSchema)]).optional(),
  carts: z.union([z.boolean(),z.lazy(() => cartsFindManyArgsSchema)]).optional(),
  orderDetails: z.union([z.boolean(),z.lazy(() => orderDetailsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BooksCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const booksArgsSchema: z.ZodType<Prisma.booksDefaultArgs> = z.object({
  select: z.lazy(() => booksSelectSchema).optional(),
  include: z.lazy(() => booksIncludeSchema).optional(),
}).strict();

export const booksCountOutputTypeArgsSchema: z.ZodType<Prisma.booksCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => booksCountOutputTypeSelectSchema).nullish(),
}).strict();

export const booksCountOutputTypeSelectSchema: z.ZodType<Prisma.booksCountOutputTypeSelect> = z.object({
  carts: z.boolean().optional(),
  orderDetails: z.boolean().optional(),
}).strict();

export const booksSelectSchema: z.ZodType<Prisma.booksSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  cost: z.boolean().optional(),
  price: z.boolean().optional(),
  description: z.boolean().optional(),
  quantity: z.boolean().optional(),
  author: z.boolean().optional(),
  genre_id: z.boolean().optional(),
  genres: z.union([z.boolean(),z.lazy(() => genresArgsSchema)]).optional(),
  carts: z.union([z.boolean(),z.lazy(() => cartsFindManyArgsSchema)]).optional(),
  orderDetails: z.union([z.boolean(),z.lazy(() => orderDetailsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BooksCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ORDERS
//------------------------------------------------------

export const ordersIncludeSchema: z.ZodType<Prisma.ordersInclude> = z.object({
  orderDetails: z.union([z.boolean(),z.lazy(() => orderDetailsFindManyArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrdersCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ordersArgsSchema: z.ZodType<Prisma.ordersDefaultArgs> = z.object({
  select: z.lazy(() => ordersSelectSchema).optional(),
  include: z.lazy(() => ordersIncludeSchema).optional(),
}).strict();

export const ordersCountOutputTypeArgsSchema: z.ZodType<Prisma.ordersCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ordersCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ordersCountOutputTypeSelectSchema: z.ZodType<Prisma.ordersCountOutputTypeSelect> = z.object({
  orderDetails: z.boolean().optional(),
}).strict();

export const ordersSelectSchema: z.ZodType<Prisma.ordersSelect> = z.object({
  id: z.boolean().optional(),
  order_date: z.boolean().optional(),
  total_price: z.boolean().optional(),
  orderer: z.boolean().optional(),
  canceled: z.boolean().optional(),
  orderDetails: z.union([z.boolean(),z.lazy(() => orderDetailsFindManyArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrdersCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ORDER DETAILS
//------------------------------------------------------

export const orderDetailsIncludeSchema: z.ZodType<Prisma.orderDetailsInclude> = z.object({
  books: z.union([z.boolean(),z.lazy(() => booksArgsSchema)]).optional(),
  orders: z.union([z.boolean(),z.lazy(() => ordersArgsSchema)]).optional(),
}).strict()

export const orderDetailsArgsSchema: z.ZodType<Prisma.orderDetailsDefaultArgs> = z.object({
  select: z.lazy(() => orderDetailsSelectSchema).optional(),
  include: z.lazy(() => orderDetailsIncludeSchema).optional(),
}).strict();

export const orderDetailsSelectSchema: z.ZodType<Prisma.orderDetailsSelect> = z.object({
  order_id: z.boolean().optional(),
  book_id: z.boolean().optional(),
  books: z.union([z.boolean(),z.lazy(() => booksArgsSchema)]).optional(),
  orders: z.union([z.boolean(),z.lazy(() => ordersArgsSchema)]).optional(),
}).strict()

// GENRES
//------------------------------------------------------

export const genresIncludeSchema: z.ZodType<Prisma.genresInclude> = z.object({
  books: z.union([z.boolean(),z.lazy(() => booksFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => GenresCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const genresArgsSchema: z.ZodType<Prisma.genresDefaultArgs> = z.object({
  select: z.lazy(() => genresSelectSchema).optional(),
  include: z.lazy(() => genresIncludeSchema).optional(),
}).strict();

export const genresCountOutputTypeArgsSchema: z.ZodType<Prisma.genresCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => genresCountOutputTypeSelectSchema).nullish(),
}).strict();

export const genresCountOutputTypeSelectSchema: z.ZodType<Prisma.genresCountOutputTypeSelect> = z.object({
  books: z.boolean().optional(),
}).strict();

export const genresSelectSchema: z.ZodType<Prisma.genresSelect> = z.object({
  id: z.boolean().optional(),
  genre: z.boolean().optional(),
  books: z.union([z.boolean(),z.lazy(() => booksFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => GenresCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CARTS
//------------------------------------------------------

export const cartsIncludeSchema: z.ZodType<Prisma.cartsInclude> = z.object({
  books: z.union([z.boolean(),z.lazy(() => booksArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
}).strict()

export const cartsArgsSchema: z.ZodType<Prisma.cartsDefaultArgs> = z.object({
  select: z.lazy(() => cartsSelectSchema).optional(),
  include: z.lazy(() => cartsIncludeSchema).optional(),
}).strict();

export const cartsSelectSchema: z.ZodType<Prisma.cartsSelect> = z.object({
  cart_owner_id: z.boolean().optional(),
  book_id: z.boolean().optional(),
  quantity: z.boolean().optional(),
  books: z.union([z.boolean(),z.lazy(() => booksArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const usersWhereInputSchema: z.ZodType<Prisma.usersWhereInput> = z.object({
  AND: z.union([ z.lazy(() => usersWhereInputSchema),z.lazy(() => usersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => usersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => usersWhereInputSchema),z.lazy(() => usersWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sex: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  carts: z.lazy(() => CartsListRelationFilterSchema).optional(),
  orders: z.lazy(() => OrdersListRelationFilterSchema).optional(),
  addresses: z.union([ z.lazy(() => AddressesRelationFilterSchema),z.lazy(() => addressesWhereInputSchema) ]).optional(),
}).strict();

export const usersOrderByWithRelationInputSchema: z.ZodType<Prisma.usersOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  sex: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  carts: z.lazy(() => cartsOrderByRelationAggregateInputSchema).optional(),
  orders: z.lazy(() => ordersOrderByRelationAggregateInputSchema).optional(),
  addresses: z.lazy(() => addressesOrderByWithRelationInputSchema).optional()
}).strict();

export const usersWhereUniqueInputSchema: z.ZodType<Prisma.usersWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => usersWhereInputSchema),z.lazy(() => usersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => usersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => usersWhereInputSchema),z.lazy(() => usersWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sex: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  carts: z.lazy(() => CartsListRelationFilterSchema).optional(),
  orders: z.lazy(() => OrdersListRelationFilterSchema).optional(),
  addresses: z.union([ z.lazy(() => AddressesRelationFilterSchema),z.lazy(() => addressesWhereInputSchema) ]).optional(),
}).strict());

export const usersOrderByWithAggregationInputSchema: z.ZodType<Prisma.usersOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  sex: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => usersCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => usersAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => usersMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => usersMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => usersSumOrderByAggregateInputSchema).optional()
}).strict();

export const usersScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.usersScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => usersScalarWhereWithAggregatesInputSchema),z.lazy(() => usersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => usersScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => usersScalarWhereWithAggregatesInputSchema),z.lazy(() => usersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  sex: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const addressesWhereInputSchema: z.ZodType<Prisma.addressesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => addressesWhereInputSchema),z.lazy(() => addressesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => addressesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => addressesWhereInputSchema),z.lazy(() => addressesWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  zip_code: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  detailedAddress: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  users: z.lazy(() => UsersListRelationFilterSchema).optional()
}).strict();

export const addressesOrderByWithRelationInputSchema: z.ZodType<Prisma.addressesOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  zip_code: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  detailedAddress: z.lazy(() => SortOrderSchema).optional(),
  users: z.lazy(() => usersOrderByRelationAggregateInputSchema).optional()
}).strict();

export const addressesWhereUniqueInputSchema: z.ZodType<Prisma.addressesWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => addressesWhereInputSchema),z.lazy(() => addressesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => addressesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => addressesWhereInputSchema),z.lazy(() => addressesWhereInputSchema).array() ]).optional(),
  zip_code: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  detailedAddress: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  users: z.lazy(() => UsersListRelationFilterSchema).optional()
}).strict());

export const addressesOrderByWithAggregationInputSchema: z.ZodType<Prisma.addressesOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  zip_code: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  detailedAddress: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => addressesCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => addressesAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => addressesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => addressesMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => addressesSumOrderByAggregateInputSchema).optional()
}).strict();

export const addressesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.addressesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => addressesScalarWhereWithAggregatesInputSchema),z.lazy(() => addressesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => addressesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => addressesScalarWhereWithAggregatesInputSchema),z.lazy(() => addressesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  zip_code: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  detailedAddress: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const booksWhereInputSchema: z.ZodType<Prisma.booksWhereInput> = z.object({
  AND: z.union([ z.lazy(() => booksWhereInputSchema),z.lazy(() => booksWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => booksWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => booksWhereInputSchema),z.lazy(() => booksWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  cost: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  price: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  author: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  genre_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  genres: z.union([ z.lazy(() => GenresRelationFilterSchema),z.lazy(() => genresWhereInputSchema) ]).optional(),
  carts: z.lazy(() => CartsListRelationFilterSchema).optional(),
  orderDetails: z.lazy(() => OrderDetailsListRelationFilterSchema).optional()
}).strict();

export const booksOrderByWithRelationInputSchema: z.ZodType<Prisma.booksOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  cost: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  author: z.lazy(() => SortOrderSchema).optional(),
  genre_id: z.lazy(() => SortOrderSchema).optional(),
  genres: z.lazy(() => genresOrderByWithRelationInputSchema).optional(),
  carts: z.lazy(() => cartsOrderByRelationAggregateInputSchema).optional(),
  orderDetails: z.lazy(() => orderDetailsOrderByRelationAggregateInputSchema).optional()
}).strict();

export const booksWhereUniqueInputSchema: z.ZodType<Prisma.booksWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => booksWhereInputSchema),z.lazy(() => booksWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => booksWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => booksWhereInputSchema),z.lazy(() => booksWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  cost: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  price: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  author: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  genre_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  genres: z.union([ z.lazy(() => GenresRelationFilterSchema),z.lazy(() => genresWhereInputSchema) ]).optional(),
  carts: z.lazy(() => CartsListRelationFilterSchema).optional(),
  orderDetails: z.lazy(() => OrderDetailsListRelationFilterSchema).optional()
}).strict());

export const booksOrderByWithAggregationInputSchema: z.ZodType<Prisma.booksOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  cost: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  author: z.lazy(() => SortOrderSchema).optional(),
  genre_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => booksCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => booksAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => booksMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => booksMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => booksSumOrderByAggregateInputSchema).optional()
}).strict();

export const booksScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.booksScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => booksScalarWhereWithAggregatesInputSchema),z.lazy(() => booksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => booksScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => booksScalarWhereWithAggregatesInputSchema),z.lazy(() => booksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  cost: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  price: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  author: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  genre_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const ordersWhereInputSchema: z.ZodType<Prisma.ordersWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ordersWhereInputSchema),z.lazy(() => ordersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ordersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ordersWhereInputSchema),z.lazy(() => ordersWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  order_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  total_price: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  orderer: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  canceled: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  orderDetails: z.lazy(() => OrderDetailsListRelationFilterSchema).optional(),
  users: z.union([ z.lazy(() => UsersRelationFilterSchema),z.lazy(() => usersWhereInputSchema) ]).optional(),
}).strict();

export const ordersOrderByWithRelationInputSchema: z.ZodType<Prisma.ordersOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  order_date: z.lazy(() => SortOrderSchema).optional(),
  total_price: z.lazy(() => SortOrderSchema).optional(),
  orderer: z.lazy(() => SortOrderSchema).optional(),
  canceled: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  orderDetails: z.lazy(() => orderDetailsOrderByRelationAggregateInputSchema).optional(),
  users: z.lazy(() => usersOrderByWithRelationInputSchema).optional()
}).strict();

export const ordersWhereUniqueInputSchema: z.ZodType<Prisma.ordersWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => ordersWhereInputSchema),z.lazy(() => ordersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ordersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ordersWhereInputSchema),z.lazy(() => ordersWhereInputSchema).array() ]).optional(),
  order_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  total_price: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  orderer: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  canceled: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  orderDetails: z.lazy(() => OrderDetailsListRelationFilterSchema).optional(),
  users: z.union([ z.lazy(() => UsersRelationFilterSchema),z.lazy(() => usersWhereInputSchema) ]).optional(),
}).strict());

export const ordersOrderByWithAggregationInputSchema: z.ZodType<Prisma.ordersOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  order_date: z.lazy(() => SortOrderSchema).optional(),
  total_price: z.lazy(() => SortOrderSchema).optional(),
  orderer: z.lazy(() => SortOrderSchema).optional(),
  canceled: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => ordersCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ordersAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ordersMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ordersMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ordersSumOrderByAggregateInputSchema).optional()
}).strict();

export const ordersScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ordersScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ordersScalarWhereWithAggregatesInputSchema),z.lazy(() => ordersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ordersScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ordersScalarWhereWithAggregatesInputSchema),z.lazy(() => ordersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  order_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  total_price: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  orderer: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  canceled: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const orderDetailsWhereInputSchema: z.ZodType<Prisma.orderDetailsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => orderDetailsWhereInputSchema),z.lazy(() => orderDetailsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => orderDetailsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => orderDetailsWhereInputSchema),z.lazy(() => orderDetailsWhereInputSchema).array() ]).optional(),
  order_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  book_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  books: z.union([ z.lazy(() => BooksRelationFilterSchema),z.lazy(() => booksWhereInputSchema) ]).optional(),
  orders: z.union([ z.lazy(() => OrdersRelationFilterSchema),z.lazy(() => ordersWhereInputSchema) ]).optional(),
}).strict();

export const orderDetailsOrderByWithRelationInputSchema: z.ZodType<Prisma.orderDetailsOrderByWithRelationInput> = z.object({
  order_id: z.lazy(() => SortOrderSchema).optional(),
  book_id: z.lazy(() => SortOrderSchema).optional(),
  books: z.lazy(() => booksOrderByWithRelationInputSchema).optional(),
  orders: z.lazy(() => ordersOrderByWithRelationInputSchema).optional()
}).strict();

export const orderDetailsWhereUniqueInputSchema: z.ZodType<Prisma.orderDetailsWhereUniqueInput> = z.object({
  order_id_book_id: z.lazy(() => orderDetailsOrder_idBook_idCompoundUniqueInputSchema)
})
.and(z.object({
  order_id_book_id: z.lazy(() => orderDetailsOrder_idBook_idCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => orderDetailsWhereInputSchema),z.lazy(() => orderDetailsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => orderDetailsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => orderDetailsWhereInputSchema),z.lazy(() => orderDetailsWhereInputSchema).array() ]).optional(),
  order_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  book_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  books: z.union([ z.lazy(() => BooksRelationFilterSchema),z.lazy(() => booksWhereInputSchema) ]).optional(),
  orders: z.union([ z.lazy(() => OrdersRelationFilterSchema),z.lazy(() => ordersWhereInputSchema) ]).optional(),
}).strict());

export const orderDetailsOrderByWithAggregationInputSchema: z.ZodType<Prisma.orderDetailsOrderByWithAggregationInput> = z.object({
  order_id: z.lazy(() => SortOrderSchema).optional(),
  book_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => orderDetailsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => orderDetailsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => orderDetailsMinOrderByAggregateInputSchema).optional()
}).strict();

export const orderDetailsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.orderDetailsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => orderDetailsScalarWhereWithAggregatesInputSchema),z.lazy(() => orderDetailsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => orderDetailsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => orderDetailsScalarWhereWithAggregatesInputSchema),z.lazy(() => orderDetailsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  order_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  book_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const genresWhereInputSchema: z.ZodType<Prisma.genresWhereInput> = z.object({
  AND: z.union([ z.lazy(() => genresWhereInputSchema),z.lazy(() => genresWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => genresWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => genresWhereInputSchema),z.lazy(() => genresWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  genre: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  books: z.lazy(() => BooksListRelationFilterSchema).optional()
}).strict();

export const genresOrderByWithRelationInputSchema: z.ZodType<Prisma.genresOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  genre: z.lazy(() => SortOrderSchema).optional(),
  books: z.lazy(() => booksOrderByRelationAggregateInputSchema).optional()
}).strict();

export const genresWhereUniqueInputSchema: z.ZodType<Prisma.genresWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    genre: z.string()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    genre: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  genre: z.string().optional(),
  AND: z.union([ z.lazy(() => genresWhereInputSchema),z.lazy(() => genresWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => genresWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => genresWhereInputSchema),z.lazy(() => genresWhereInputSchema).array() ]).optional(),
  books: z.lazy(() => BooksListRelationFilterSchema).optional()
}).strict());

export const genresOrderByWithAggregationInputSchema: z.ZodType<Prisma.genresOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  genre: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => genresCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => genresAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => genresMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => genresMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => genresSumOrderByAggregateInputSchema).optional()
}).strict();

export const genresScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.genresScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => genresScalarWhereWithAggregatesInputSchema),z.lazy(() => genresScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => genresScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => genresScalarWhereWithAggregatesInputSchema),z.lazy(() => genresScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  genre: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const cartsWhereInputSchema: z.ZodType<Prisma.cartsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => cartsWhereInputSchema),z.lazy(() => cartsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => cartsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => cartsWhereInputSchema),z.lazy(() => cartsWhereInputSchema).array() ]).optional(),
  cart_owner_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  book_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  books: z.union([ z.lazy(() => BooksRelationFilterSchema),z.lazy(() => booksWhereInputSchema) ]).optional(),
  users: z.union([ z.lazy(() => UsersRelationFilterSchema),z.lazy(() => usersWhereInputSchema) ]).optional(),
}).strict();

export const cartsOrderByWithRelationInputSchema: z.ZodType<Prisma.cartsOrderByWithRelationInput> = z.object({
  cart_owner_id: z.lazy(() => SortOrderSchema).optional(),
  book_id: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  books: z.lazy(() => booksOrderByWithRelationInputSchema).optional(),
  users: z.lazy(() => usersOrderByWithRelationInputSchema).optional()
}).strict();

export const cartsWhereUniqueInputSchema: z.ZodType<Prisma.cartsWhereUniqueInput> = z.object({
  cart_owner_id_book_id: z.lazy(() => cartsCart_owner_idBook_idCompoundUniqueInputSchema)
})
.and(z.object({
  cart_owner_id_book_id: z.lazy(() => cartsCart_owner_idBook_idCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => cartsWhereInputSchema),z.lazy(() => cartsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => cartsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => cartsWhereInputSchema),z.lazy(() => cartsWhereInputSchema).array() ]).optional(),
  cart_owner_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  book_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  books: z.union([ z.lazy(() => BooksRelationFilterSchema),z.lazy(() => booksWhereInputSchema) ]).optional(),
  users: z.union([ z.lazy(() => UsersRelationFilterSchema),z.lazy(() => usersWhereInputSchema) ]).optional(),
}).strict());

export const cartsOrderByWithAggregationInputSchema: z.ZodType<Prisma.cartsOrderByWithAggregationInput> = z.object({
  cart_owner_id: z.lazy(() => SortOrderSchema).optional(),
  book_id: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => cartsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => cartsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => cartsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => cartsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => cartsSumOrderByAggregateInputSchema).optional()
}).strict();

export const cartsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.cartsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => cartsScalarWhereWithAggregatesInputSchema),z.lazy(() => cartsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => cartsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => cartsScalarWhereWithAggregatesInputSchema),z.lazy(() => cartsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  cart_owner_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  book_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const usersCreateInputSchema: z.ZodType<Prisma.usersCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  sex: z.string(),
  email: z.string(),
  phone: z.string(),
  carts: z.lazy(() => cartsCreateNestedManyWithoutUsersInputSchema).optional(),
  orders: z.lazy(() => ordersCreateNestedManyWithoutUsersInputSchema).optional(),
  addresses: z.lazy(() => addressesCreateNestedOneWithoutUsersInputSchema)
}).strict();

export const usersUncheckedCreateInputSchema: z.ZodType<Prisma.usersUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  sex: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.number().int(),
  carts: z.lazy(() => cartsUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  orders: z.lazy(() => ordersUncheckedCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const usersUpdateInputSchema: z.ZodType<Prisma.usersUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sex: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  carts: z.lazy(() => cartsUpdateManyWithoutUsersNestedInputSchema).optional(),
  orders: z.lazy(() => ordersUpdateManyWithoutUsersNestedInputSchema).optional(),
  addresses: z.lazy(() => addressesUpdateOneRequiredWithoutUsersNestedInputSchema).optional()
}).strict();

export const usersUncheckedUpdateInputSchema: z.ZodType<Prisma.usersUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sex: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  carts: z.lazy(() => cartsUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  orders: z.lazy(() => ordersUncheckedUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const usersCreateManyInputSchema: z.ZodType<Prisma.usersCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  sex: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.number().int()
}).strict();

export const usersUpdateManyMutationInputSchema: z.ZodType<Prisma.usersUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sex: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const usersUncheckedUpdateManyInputSchema: z.ZodType<Prisma.usersUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sex: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const addressesCreateInputSchema: z.ZodType<Prisma.addressesCreateInput> = z.object({
  zip_code: z.string(),
  address: z.string(),
  detailedAddress: z.string(),
  users: z.lazy(() => usersCreateNestedManyWithoutAddressesInputSchema).optional()
}).strict();

export const addressesUncheckedCreateInputSchema: z.ZodType<Prisma.addressesUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  zip_code: z.string(),
  address: z.string(),
  detailedAddress: z.string(),
  users: z.lazy(() => usersUncheckedCreateNestedManyWithoutAddressesInputSchema).optional()
}).strict();

export const addressesUpdateInputSchema: z.ZodType<Prisma.addressesUpdateInput> = z.object({
  zip_code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  detailedAddress: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => usersUpdateManyWithoutAddressesNestedInputSchema).optional()
}).strict();

export const addressesUncheckedUpdateInputSchema: z.ZodType<Prisma.addressesUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  zip_code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  detailedAddress: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => usersUncheckedUpdateManyWithoutAddressesNestedInputSchema).optional()
}).strict();

export const addressesCreateManyInputSchema: z.ZodType<Prisma.addressesCreateManyInput> = z.object({
  id: z.number().int().optional(),
  zip_code: z.string(),
  address: z.string(),
  detailedAddress: z.string()
}).strict();

export const addressesUpdateManyMutationInputSchema: z.ZodType<Prisma.addressesUpdateManyMutationInput> = z.object({
  zip_code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  detailedAddress: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const addressesUncheckedUpdateManyInputSchema: z.ZodType<Prisma.addressesUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  zip_code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  detailedAddress: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const booksCreateInputSchema: z.ZodType<Prisma.booksCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  cost: z.number().int(),
  price: z.number().int(),
  description: z.string(),
  quantity: z.number().int(),
  author: z.string(),
  genres: z.lazy(() => genresCreateNestedOneWithoutBooksInputSchema),
  carts: z.lazy(() => cartsCreateNestedManyWithoutBooksInputSchema).optional(),
  orderDetails: z.lazy(() => orderDetailsCreateNestedManyWithoutBooksInputSchema).optional()
}).strict();

export const booksUncheckedCreateInputSchema: z.ZodType<Prisma.booksUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  cost: z.number().int(),
  price: z.number().int(),
  description: z.string(),
  quantity: z.number().int(),
  author: z.string(),
  genre_id: z.number().int(),
  carts: z.lazy(() => cartsUncheckedCreateNestedManyWithoutBooksInputSchema).optional(),
  orderDetails: z.lazy(() => orderDetailsUncheckedCreateNestedManyWithoutBooksInputSchema).optional()
}).strict();

export const booksUpdateInputSchema: z.ZodType<Prisma.booksUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cost: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genres: z.lazy(() => genresUpdateOneRequiredWithoutBooksNestedInputSchema).optional(),
  carts: z.lazy(() => cartsUpdateManyWithoutBooksNestedInputSchema).optional(),
  orderDetails: z.lazy(() => orderDetailsUpdateManyWithoutBooksNestedInputSchema).optional()
}).strict();

export const booksUncheckedUpdateInputSchema: z.ZodType<Prisma.booksUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cost: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genre_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  carts: z.lazy(() => cartsUncheckedUpdateManyWithoutBooksNestedInputSchema).optional(),
  orderDetails: z.lazy(() => orderDetailsUncheckedUpdateManyWithoutBooksNestedInputSchema).optional()
}).strict();

export const booksCreateManyInputSchema: z.ZodType<Prisma.booksCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  cost: z.number().int(),
  price: z.number().int(),
  description: z.string(),
  quantity: z.number().int(),
  author: z.string(),
  genre_id: z.number().int()
}).strict();

export const booksUpdateManyMutationInputSchema: z.ZodType<Prisma.booksUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cost: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const booksUncheckedUpdateManyInputSchema: z.ZodType<Prisma.booksUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cost: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genre_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ordersCreateInputSchema: z.ZodType<Prisma.ordersCreateInput> = z.object({
  id: z.string().optional(),
  order_date: z.coerce.date().optional(),
  total_price: z.number().int(),
  canceled: z.coerce.date().optional().nullable(),
  orderDetails: z.lazy(() => orderDetailsCreateNestedManyWithoutOrdersInputSchema).optional(),
  users: z.lazy(() => usersCreateNestedOneWithoutOrdersInputSchema)
}).strict();

export const ordersUncheckedCreateInputSchema: z.ZodType<Prisma.ordersUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  order_date: z.coerce.date().optional(),
  total_price: z.number().int(),
  orderer: z.string(),
  canceled: z.coerce.date().optional().nullable(),
  orderDetails: z.lazy(() => orderDetailsUncheckedCreateNestedManyWithoutOrdersInputSchema).optional()
}).strict();

export const ordersUpdateInputSchema: z.ZodType<Prisma.ordersUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  total_price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  canceled: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orderDetails: z.lazy(() => orderDetailsUpdateManyWithoutOrdersNestedInputSchema).optional(),
  users: z.lazy(() => usersUpdateOneRequiredWithoutOrdersNestedInputSchema).optional()
}).strict();

export const ordersUncheckedUpdateInputSchema: z.ZodType<Prisma.ordersUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  total_price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  orderer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  canceled: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orderDetails: z.lazy(() => orderDetailsUncheckedUpdateManyWithoutOrdersNestedInputSchema).optional()
}).strict();

export const ordersCreateManyInputSchema: z.ZodType<Prisma.ordersCreateManyInput> = z.object({
  id: z.string().optional(),
  order_date: z.coerce.date().optional(),
  total_price: z.number().int(),
  orderer: z.string(),
  canceled: z.coerce.date().optional().nullable()
}).strict();

export const ordersUpdateManyMutationInputSchema: z.ZodType<Prisma.ordersUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  total_price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  canceled: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ordersUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ordersUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  total_price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  orderer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  canceled: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const orderDetailsCreateInputSchema: z.ZodType<Prisma.orderDetailsCreateInput> = z.object({
  books: z.lazy(() => booksCreateNestedOneWithoutOrderDetailsInputSchema),
  orders: z.lazy(() => ordersCreateNestedOneWithoutOrderDetailsInputSchema)
}).strict();

export const orderDetailsUncheckedCreateInputSchema: z.ZodType<Prisma.orderDetailsUncheckedCreateInput> = z.object({
  order_id: z.string(),
  book_id: z.string()
}).strict();

export const orderDetailsUpdateInputSchema: z.ZodType<Prisma.orderDetailsUpdateInput> = z.object({
  books: z.lazy(() => booksUpdateOneRequiredWithoutOrderDetailsNestedInputSchema).optional(),
  orders: z.lazy(() => ordersUpdateOneRequiredWithoutOrderDetailsNestedInputSchema).optional()
}).strict();

export const orderDetailsUncheckedUpdateInputSchema: z.ZodType<Prisma.orderDetailsUncheckedUpdateInput> = z.object({
  order_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  book_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const orderDetailsCreateManyInputSchema: z.ZodType<Prisma.orderDetailsCreateManyInput> = z.object({
  order_id: z.string(),
  book_id: z.string()
}).strict();

export const orderDetailsUpdateManyMutationInputSchema: z.ZodType<Prisma.orderDetailsUpdateManyMutationInput> = z.object({
}).strict();

export const orderDetailsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.orderDetailsUncheckedUpdateManyInput> = z.object({
  order_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  book_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const genresCreateInputSchema: z.ZodType<Prisma.genresCreateInput> = z.object({
  genre: z.string(),
  books: z.lazy(() => booksCreateNestedManyWithoutGenresInputSchema).optional()
}).strict();

export const genresUncheckedCreateInputSchema: z.ZodType<Prisma.genresUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  genre: z.string(),
  books: z.lazy(() => booksUncheckedCreateNestedManyWithoutGenresInputSchema).optional()
}).strict();

export const genresUpdateInputSchema: z.ZodType<Prisma.genresUpdateInput> = z.object({
  genre: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  books: z.lazy(() => booksUpdateManyWithoutGenresNestedInputSchema).optional()
}).strict();

export const genresUncheckedUpdateInputSchema: z.ZodType<Prisma.genresUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  genre: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  books: z.lazy(() => booksUncheckedUpdateManyWithoutGenresNestedInputSchema).optional()
}).strict();

export const genresCreateManyInputSchema: z.ZodType<Prisma.genresCreateManyInput> = z.object({
  id: z.number().int().optional(),
  genre: z.string()
}).strict();

export const genresUpdateManyMutationInputSchema: z.ZodType<Prisma.genresUpdateManyMutationInput> = z.object({
  genre: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const genresUncheckedUpdateManyInputSchema: z.ZodType<Prisma.genresUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  genre: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const cartsCreateInputSchema: z.ZodType<Prisma.cartsCreateInput> = z.object({
  quantity: z.number().int().optional(),
  books: z.lazy(() => booksCreateNestedOneWithoutCartsInputSchema),
  users: z.lazy(() => usersCreateNestedOneWithoutCartsInputSchema)
}).strict();

export const cartsUncheckedCreateInputSchema: z.ZodType<Prisma.cartsUncheckedCreateInput> = z.object({
  cart_owner_id: z.string(),
  book_id: z.string(),
  quantity: z.number().int().optional()
}).strict();

export const cartsUpdateInputSchema: z.ZodType<Prisma.cartsUpdateInput> = z.object({
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  books: z.lazy(() => booksUpdateOneRequiredWithoutCartsNestedInputSchema).optional(),
  users: z.lazy(() => usersUpdateOneRequiredWithoutCartsNestedInputSchema).optional()
}).strict();

export const cartsUncheckedUpdateInputSchema: z.ZodType<Prisma.cartsUncheckedUpdateInput> = z.object({
  cart_owner_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  book_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const cartsCreateManyInputSchema: z.ZodType<Prisma.cartsCreateManyInput> = z.object({
  cart_owner_id: z.string(),
  book_id: z.string(),
  quantity: z.number().int().optional()
}).strict();

export const cartsUpdateManyMutationInputSchema: z.ZodType<Prisma.cartsUpdateManyMutationInput> = z.object({
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const cartsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.cartsUncheckedUpdateManyInput> = z.object({
  cart_owner_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  book_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const CartsListRelationFilterSchema: z.ZodType<Prisma.CartsListRelationFilter> = z.object({
  every: z.lazy(() => cartsWhereInputSchema).optional(),
  some: z.lazy(() => cartsWhereInputSchema).optional(),
  none: z.lazy(() => cartsWhereInputSchema).optional()
}).strict();

export const OrdersListRelationFilterSchema: z.ZodType<Prisma.OrdersListRelationFilter> = z.object({
  every: z.lazy(() => ordersWhereInputSchema).optional(),
  some: z.lazy(() => ordersWhereInputSchema).optional(),
  none: z.lazy(() => ordersWhereInputSchema).optional()
}).strict();

export const AddressesRelationFilterSchema: z.ZodType<Prisma.AddressesRelationFilter> = z.object({
  is: z.lazy(() => addressesWhereInputSchema).optional(),
  isNot: z.lazy(() => addressesWhereInputSchema).optional()
}).strict();

export const cartsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.cartsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ordersOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ordersOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const usersCountOrderByAggregateInputSchema: z.ZodType<Prisma.usersCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  sex: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const usersAvgOrderByAggregateInputSchema: z.ZodType<Prisma.usersAvgOrderByAggregateInput> = z.object({
  address: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const usersMaxOrderByAggregateInputSchema: z.ZodType<Prisma.usersMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  sex: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const usersMinOrderByAggregateInputSchema: z.ZodType<Prisma.usersMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  sex: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const usersSumOrderByAggregateInputSchema: z.ZodType<Prisma.usersSumOrderByAggregateInput> = z.object({
  address: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const UsersListRelationFilterSchema: z.ZodType<Prisma.UsersListRelationFilter> = z.object({
  every: z.lazy(() => usersWhereInputSchema).optional(),
  some: z.lazy(() => usersWhereInputSchema).optional(),
  none: z.lazy(() => usersWhereInputSchema).optional()
}).strict();

export const usersOrderByRelationAggregateInputSchema: z.ZodType<Prisma.usersOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const addressesCountOrderByAggregateInputSchema: z.ZodType<Prisma.addressesCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  zip_code: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  detailedAddress: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const addressesAvgOrderByAggregateInputSchema: z.ZodType<Prisma.addressesAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const addressesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.addressesMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  zip_code: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  detailedAddress: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const addressesMinOrderByAggregateInputSchema: z.ZodType<Prisma.addressesMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  zip_code: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  detailedAddress: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const addressesSumOrderByAggregateInputSchema: z.ZodType<Prisma.addressesSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GenresRelationFilterSchema: z.ZodType<Prisma.GenresRelationFilter> = z.object({
  is: z.lazy(() => genresWhereInputSchema).optional(),
  isNot: z.lazy(() => genresWhereInputSchema).optional()
}).strict();

export const OrderDetailsListRelationFilterSchema: z.ZodType<Prisma.OrderDetailsListRelationFilter> = z.object({
  every: z.lazy(() => orderDetailsWhereInputSchema).optional(),
  some: z.lazy(() => orderDetailsWhereInputSchema).optional(),
  none: z.lazy(() => orderDetailsWhereInputSchema).optional()
}).strict();

export const orderDetailsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.orderDetailsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const booksCountOrderByAggregateInputSchema: z.ZodType<Prisma.booksCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  cost: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  author: z.lazy(() => SortOrderSchema).optional(),
  genre_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const booksAvgOrderByAggregateInputSchema: z.ZodType<Prisma.booksAvgOrderByAggregateInput> = z.object({
  cost: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  genre_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const booksMaxOrderByAggregateInputSchema: z.ZodType<Prisma.booksMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  cost: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  author: z.lazy(() => SortOrderSchema).optional(),
  genre_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const booksMinOrderByAggregateInputSchema: z.ZodType<Prisma.booksMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  cost: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  author: z.lazy(() => SortOrderSchema).optional(),
  genre_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const booksSumOrderByAggregateInputSchema: z.ZodType<Prisma.booksSumOrderByAggregateInput> = z.object({
  cost: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  genre_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const UsersRelationFilterSchema: z.ZodType<Prisma.UsersRelationFilter> = z.object({
  is: z.lazy(() => usersWhereInputSchema).optional(),
  isNot: z.lazy(() => usersWhereInputSchema).optional()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const ordersCountOrderByAggregateInputSchema: z.ZodType<Prisma.ordersCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  order_date: z.lazy(() => SortOrderSchema).optional(),
  total_price: z.lazy(() => SortOrderSchema).optional(),
  orderer: z.lazy(() => SortOrderSchema).optional(),
  canceled: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ordersAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ordersAvgOrderByAggregateInput> = z.object({
  total_price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ordersMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ordersMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  order_date: z.lazy(() => SortOrderSchema).optional(),
  total_price: z.lazy(() => SortOrderSchema).optional(),
  orderer: z.lazy(() => SortOrderSchema).optional(),
  canceled: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ordersMinOrderByAggregateInputSchema: z.ZodType<Prisma.ordersMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  order_date: z.lazy(() => SortOrderSchema).optional(),
  total_price: z.lazy(() => SortOrderSchema).optional(),
  orderer: z.lazy(() => SortOrderSchema).optional(),
  canceled: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ordersSumOrderByAggregateInputSchema: z.ZodType<Prisma.ordersSumOrderByAggregateInput> = z.object({
  total_price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const BooksRelationFilterSchema: z.ZodType<Prisma.BooksRelationFilter> = z.object({
  is: z.lazy(() => booksWhereInputSchema).optional(),
  isNot: z.lazy(() => booksWhereInputSchema).optional()
}).strict();

export const OrdersRelationFilterSchema: z.ZodType<Prisma.OrdersRelationFilter> = z.object({
  is: z.lazy(() => ordersWhereInputSchema).optional(),
  isNot: z.lazy(() => ordersWhereInputSchema).optional()
}).strict();

export const orderDetailsOrder_idBook_idCompoundUniqueInputSchema: z.ZodType<Prisma.orderDetailsOrder_idBook_idCompoundUniqueInput> = z.object({
  order_id: z.string(),
  book_id: z.string()
}).strict();

export const orderDetailsCountOrderByAggregateInputSchema: z.ZodType<Prisma.orderDetailsCountOrderByAggregateInput> = z.object({
  order_id: z.lazy(() => SortOrderSchema).optional(),
  book_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const orderDetailsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.orderDetailsMaxOrderByAggregateInput> = z.object({
  order_id: z.lazy(() => SortOrderSchema).optional(),
  book_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const orderDetailsMinOrderByAggregateInputSchema: z.ZodType<Prisma.orderDetailsMinOrderByAggregateInput> = z.object({
  order_id: z.lazy(() => SortOrderSchema).optional(),
  book_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BooksListRelationFilterSchema: z.ZodType<Prisma.BooksListRelationFilter> = z.object({
  every: z.lazy(() => booksWhereInputSchema).optional(),
  some: z.lazy(() => booksWhereInputSchema).optional(),
  none: z.lazy(() => booksWhereInputSchema).optional()
}).strict();

export const booksOrderByRelationAggregateInputSchema: z.ZodType<Prisma.booksOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const genresCountOrderByAggregateInputSchema: z.ZodType<Prisma.genresCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  genre: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const genresAvgOrderByAggregateInputSchema: z.ZodType<Prisma.genresAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const genresMaxOrderByAggregateInputSchema: z.ZodType<Prisma.genresMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  genre: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const genresMinOrderByAggregateInputSchema: z.ZodType<Prisma.genresMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  genre: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const genresSumOrderByAggregateInputSchema: z.ZodType<Prisma.genresSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const cartsCart_owner_idBook_idCompoundUniqueInputSchema: z.ZodType<Prisma.cartsCart_owner_idBook_idCompoundUniqueInput> = z.object({
  cart_owner_id: z.string(),
  book_id: z.string()
}).strict();

export const cartsCountOrderByAggregateInputSchema: z.ZodType<Prisma.cartsCountOrderByAggregateInput> = z.object({
  cart_owner_id: z.lazy(() => SortOrderSchema).optional(),
  book_id: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const cartsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.cartsAvgOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const cartsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.cartsMaxOrderByAggregateInput> = z.object({
  cart_owner_id: z.lazy(() => SortOrderSchema).optional(),
  book_id: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const cartsMinOrderByAggregateInputSchema: z.ZodType<Prisma.cartsMinOrderByAggregateInput> = z.object({
  cart_owner_id: z.lazy(() => SortOrderSchema).optional(),
  book_id: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const cartsSumOrderByAggregateInputSchema: z.ZodType<Prisma.cartsSumOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const cartsCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.cartsCreateNestedManyWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => cartsCreateWithoutUsersInputSchema),z.lazy(() => cartsCreateWithoutUsersInputSchema).array(),z.lazy(() => cartsUncheckedCreateWithoutUsersInputSchema),z.lazy(() => cartsUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => cartsCreateOrConnectWithoutUsersInputSchema),z.lazy(() => cartsCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => cartsCreateManyUsersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => cartsWhereUniqueInputSchema),z.lazy(() => cartsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ordersCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.ordersCreateNestedManyWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => ordersCreateWithoutUsersInputSchema),z.lazy(() => ordersCreateWithoutUsersInputSchema).array(),z.lazy(() => ordersUncheckedCreateWithoutUsersInputSchema),z.lazy(() => ordersUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ordersCreateOrConnectWithoutUsersInputSchema),z.lazy(() => ordersCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ordersCreateManyUsersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ordersWhereUniqueInputSchema),z.lazy(() => ordersWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const addressesCreateNestedOneWithoutUsersInputSchema: z.ZodType<Prisma.addressesCreateNestedOneWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => addressesCreateWithoutUsersInputSchema),z.lazy(() => addressesUncheckedCreateWithoutUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => addressesCreateOrConnectWithoutUsersInputSchema).optional(),
  connect: z.lazy(() => addressesWhereUniqueInputSchema).optional()
}).strict();

export const cartsUncheckedCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.cartsUncheckedCreateNestedManyWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => cartsCreateWithoutUsersInputSchema),z.lazy(() => cartsCreateWithoutUsersInputSchema).array(),z.lazy(() => cartsUncheckedCreateWithoutUsersInputSchema),z.lazy(() => cartsUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => cartsCreateOrConnectWithoutUsersInputSchema),z.lazy(() => cartsCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => cartsCreateManyUsersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => cartsWhereUniqueInputSchema),z.lazy(() => cartsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ordersUncheckedCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.ordersUncheckedCreateNestedManyWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => ordersCreateWithoutUsersInputSchema),z.lazy(() => ordersCreateWithoutUsersInputSchema).array(),z.lazy(() => ordersUncheckedCreateWithoutUsersInputSchema),z.lazy(() => ordersUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ordersCreateOrConnectWithoutUsersInputSchema),z.lazy(() => ordersCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ordersCreateManyUsersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ordersWhereUniqueInputSchema),z.lazy(() => ordersWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const cartsUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.cartsUpdateManyWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => cartsCreateWithoutUsersInputSchema),z.lazy(() => cartsCreateWithoutUsersInputSchema).array(),z.lazy(() => cartsUncheckedCreateWithoutUsersInputSchema),z.lazy(() => cartsUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => cartsCreateOrConnectWithoutUsersInputSchema),z.lazy(() => cartsCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => cartsUpsertWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => cartsUpsertWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => cartsCreateManyUsersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => cartsWhereUniqueInputSchema),z.lazy(() => cartsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => cartsWhereUniqueInputSchema),z.lazy(() => cartsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => cartsWhereUniqueInputSchema),z.lazy(() => cartsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => cartsWhereUniqueInputSchema),z.lazy(() => cartsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => cartsUpdateWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => cartsUpdateWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => cartsUpdateManyWithWhereWithoutUsersInputSchema),z.lazy(() => cartsUpdateManyWithWhereWithoutUsersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => cartsScalarWhereInputSchema),z.lazy(() => cartsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ordersUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.ordersUpdateManyWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => ordersCreateWithoutUsersInputSchema),z.lazy(() => ordersCreateWithoutUsersInputSchema).array(),z.lazy(() => ordersUncheckedCreateWithoutUsersInputSchema),z.lazy(() => ordersUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ordersCreateOrConnectWithoutUsersInputSchema),z.lazy(() => ordersCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ordersUpsertWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => ordersUpsertWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ordersCreateManyUsersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ordersWhereUniqueInputSchema),z.lazy(() => ordersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ordersWhereUniqueInputSchema),z.lazy(() => ordersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ordersWhereUniqueInputSchema),z.lazy(() => ordersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ordersWhereUniqueInputSchema),z.lazy(() => ordersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ordersUpdateWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => ordersUpdateWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ordersUpdateManyWithWhereWithoutUsersInputSchema),z.lazy(() => ordersUpdateManyWithWhereWithoutUsersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ordersScalarWhereInputSchema),z.lazy(() => ordersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const addressesUpdateOneRequiredWithoutUsersNestedInputSchema: z.ZodType<Prisma.addressesUpdateOneRequiredWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => addressesCreateWithoutUsersInputSchema),z.lazy(() => addressesUncheckedCreateWithoutUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => addressesCreateOrConnectWithoutUsersInputSchema).optional(),
  upsert: z.lazy(() => addressesUpsertWithoutUsersInputSchema).optional(),
  connect: z.lazy(() => addressesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => addressesUpdateToOneWithWhereWithoutUsersInputSchema),z.lazy(() => addressesUpdateWithoutUsersInputSchema),z.lazy(() => addressesUncheckedUpdateWithoutUsersInputSchema) ]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const cartsUncheckedUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.cartsUncheckedUpdateManyWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => cartsCreateWithoutUsersInputSchema),z.lazy(() => cartsCreateWithoutUsersInputSchema).array(),z.lazy(() => cartsUncheckedCreateWithoutUsersInputSchema),z.lazy(() => cartsUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => cartsCreateOrConnectWithoutUsersInputSchema),z.lazy(() => cartsCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => cartsUpsertWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => cartsUpsertWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => cartsCreateManyUsersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => cartsWhereUniqueInputSchema),z.lazy(() => cartsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => cartsWhereUniqueInputSchema),z.lazy(() => cartsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => cartsWhereUniqueInputSchema),z.lazy(() => cartsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => cartsWhereUniqueInputSchema),z.lazy(() => cartsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => cartsUpdateWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => cartsUpdateWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => cartsUpdateManyWithWhereWithoutUsersInputSchema),z.lazy(() => cartsUpdateManyWithWhereWithoutUsersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => cartsScalarWhereInputSchema),z.lazy(() => cartsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ordersUncheckedUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.ordersUncheckedUpdateManyWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => ordersCreateWithoutUsersInputSchema),z.lazy(() => ordersCreateWithoutUsersInputSchema).array(),z.lazy(() => ordersUncheckedCreateWithoutUsersInputSchema),z.lazy(() => ordersUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ordersCreateOrConnectWithoutUsersInputSchema),z.lazy(() => ordersCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ordersUpsertWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => ordersUpsertWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ordersCreateManyUsersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ordersWhereUniqueInputSchema),z.lazy(() => ordersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ordersWhereUniqueInputSchema),z.lazy(() => ordersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ordersWhereUniqueInputSchema),z.lazy(() => ordersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ordersWhereUniqueInputSchema),z.lazy(() => ordersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ordersUpdateWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => ordersUpdateWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ordersUpdateManyWithWhereWithoutUsersInputSchema),z.lazy(() => ordersUpdateManyWithWhereWithoutUsersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ordersScalarWhereInputSchema),z.lazy(() => ordersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const usersCreateNestedManyWithoutAddressesInputSchema: z.ZodType<Prisma.usersCreateNestedManyWithoutAddressesInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutAddressesInputSchema),z.lazy(() => usersCreateWithoutAddressesInputSchema).array(),z.lazy(() => usersUncheckedCreateWithoutAddressesInputSchema),z.lazy(() => usersUncheckedCreateWithoutAddressesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => usersCreateOrConnectWithoutAddressesInputSchema),z.lazy(() => usersCreateOrConnectWithoutAddressesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => usersCreateManyAddressesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => usersWhereUniqueInputSchema),z.lazy(() => usersWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const usersUncheckedCreateNestedManyWithoutAddressesInputSchema: z.ZodType<Prisma.usersUncheckedCreateNestedManyWithoutAddressesInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutAddressesInputSchema),z.lazy(() => usersCreateWithoutAddressesInputSchema).array(),z.lazy(() => usersUncheckedCreateWithoutAddressesInputSchema),z.lazy(() => usersUncheckedCreateWithoutAddressesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => usersCreateOrConnectWithoutAddressesInputSchema),z.lazy(() => usersCreateOrConnectWithoutAddressesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => usersCreateManyAddressesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => usersWhereUniqueInputSchema),z.lazy(() => usersWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const usersUpdateManyWithoutAddressesNestedInputSchema: z.ZodType<Prisma.usersUpdateManyWithoutAddressesNestedInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutAddressesInputSchema),z.lazy(() => usersCreateWithoutAddressesInputSchema).array(),z.lazy(() => usersUncheckedCreateWithoutAddressesInputSchema),z.lazy(() => usersUncheckedCreateWithoutAddressesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => usersCreateOrConnectWithoutAddressesInputSchema),z.lazy(() => usersCreateOrConnectWithoutAddressesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => usersUpsertWithWhereUniqueWithoutAddressesInputSchema),z.lazy(() => usersUpsertWithWhereUniqueWithoutAddressesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => usersCreateManyAddressesInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => usersWhereUniqueInputSchema),z.lazy(() => usersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => usersWhereUniqueInputSchema),z.lazy(() => usersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => usersWhereUniqueInputSchema),z.lazy(() => usersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => usersWhereUniqueInputSchema),z.lazy(() => usersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => usersUpdateWithWhereUniqueWithoutAddressesInputSchema),z.lazy(() => usersUpdateWithWhereUniqueWithoutAddressesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => usersUpdateManyWithWhereWithoutAddressesInputSchema),z.lazy(() => usersUpdateManyWithWhereWithoutAddressesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => usersScalarWhereInputSchema),z.lazy(() => usersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const usersUncheckedUpdateManyWithoutAddressesNestedInputSchema: z.ZodType<Prisma.usersUncheckedUpdateManyWithoutAddressesNestedInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutAddressesInputSchema),z.lazy(() => usersCreateWithoutAddressesInputSchema).array(),z.lazy(() => usersUncheckedCreateWithoutAddressesInputSchema),z.lazy(() => usersUncheckedCreateWithoutAddressesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => usersCreateOrConnectWithoutAddressesInputSchema),z.lazy(() => usersCreateOrConnectWithoutAddressesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => usersUpsertWithWhereUniqueWithoutAddressesInputSchema),z.lazy(() => usersUpsertWithWhereUniqueWithoutAddressesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => usersCreateManyAddressesInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => usersWhereUniqueInputSchema),z.lazy(() => usersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => usersWhereUniqueInputSchema),z.lazy(() => usersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => usersWhereUniqueInputSchema),z.lazy(() => usersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => usersWhereUniqueInputSchema),z.lazy(() => usersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => usersUpdateWithWhereUniqueWithoutAddressesInputSchema),z.lazy(() => usersUpdateWithWhereUniqueWithoutAddressesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => usersUpdateManyWithWhereWithoutAddressesInputSchema),z.lazy(() => usersUpdateManyWithWhereWithoutAddressesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => usersScalarWhereInputSchema),z.lazy(() => usersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const genresCreateNestedOneWithoutBooksInputSchema: z.ZodType<Prisma.genresCreateNestedOneWithoutBooksInput> = z.object({
  create: z.union([ z.lazy(() => genresCreateWithoutBooksInputSchema),z.lazy(() => genresUncheckedCreateWithoutBooksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => genresCreateOrConnectWithoutBooksInputSchema).optional(),
  connect: z.lazy(() => genresWhereUniqueInputSchema).optional()
}).strict();

export const cartsCreateNestedManyWithoutBooksInputSchema: z.ZodType<Prisma.cartsCreateNestedManyWithoutBooksInput> = z.object({
  create: z.union([ z.lazy(() => cartsCreateWithoutBooksInputSchema),z.lazy(() => cartsCreateWithoutBooksInputSchema).array(),z.lazy(() => cartsUncheckedCreateWithoutBooksInputSchema),z.lazy(() => cartsUncheckedCreateWithoutBooksInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => cartsCreateOrConnectWithoutBooksInputSchema),z.lazy(() => cartsCreateOrConnectWithoutBooksInputSchema).array() ]).optional(),
  createMany: z.lazy(() => cartsCreateManyBooksInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => cartsWhereUniqueInputSchema),z.lazy(() => cartsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const orderDetailsCreateNestedManyWithoutBooksInputSchema: z.ZodType<Prisma.orderDetailsCreateNestedManyWithoutBooksInput> = z.object({
  create: z.union([ z.lazy(() => orderDetailsCreateWithoutBooksInputSchema),z.lazy(() => orderDetailsCreateWithoutBooksInputSchema).array(),z.lazy(() => orderDetailsUncheckedCreateWithoutBooksInputSchema),z.lazy(() => orderDetailsUncheckedCreateWithoutBooksInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => orderDetailsCreateOrConnectWithoutBooksInputSchema),z.lazy(() => orderDetailsCreateOrConnectWithoutBooksInputSchema).array() ]).optional(),
  createMany: z.lazy(() => orderDetailsCreateManyBooksInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => orderDetailsWhereUniqueInputSchema),z.lazy(() => orderDetailsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const cartsUncheckedCreateNestedManyWithoutBooksInputSchema: z.ZodType<Prisma.cartsUncheckedCreateNestedManyWithoutBooksInput> = z.object({
  create: z.union([ z.lazy(() => cartsCreateWithoutBooksInputSchema),z.lazy(() => cartsCreateWithoutBooksInputSchema).array(),z.lazy(() => cartsUncheckedCreateWithoutBooksInputSchema),z.lazy(() => cartsUncheckedCreateWithoutBooksInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => cartsCreateOrConnectWithoutBooksInputSchema),z.lazy(() => cartsCreateOrConnectWithoutBooksInputSchema).array() ]).optional(),
  createMany: z.lazy(() => cartsCreateManyBooksInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => cartsWhereUniqueInputSchema),z.lazy(() => cartsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const orderDetailsUncheckedCreateNestedManyWithoutBooksInputSchema: z.ZodType<Prisma.orderDetailsUncheckedCreateNestedManyWithoutBooksInput> = z.object({
  create: z.union([ z.lazy(() => orderDetailsCreateWithoutBooksInputSchema),z.lazy(() => orderDetailsCreateWithoutBooksInputSchema).array(),z.lazy(() => orderDetailsUncheckedCreateWithoutBooksInputSchema),z.lazy(() => orderDetailsUncheckedCreateWithoutBooksInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => orderDetailsCreateOrConnectWithoutBooksInputSchema),z.lazy(() => orderDetailsCreateOrConnectWithoutBooksInputSchema).array() ]).optional(),
  createMany: z.lazy(() => orderDetailsCreateManyBooksInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => orderDetailsWhereUniqueInputSchema),z.lazy(() => orderDetailsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const genresUpdateOneRequiredWithoutBooksNestedInputSchema: z.ZodType<Prisma.genresUpdateOneRequiredWithoutBooksNestedInput> = z.object({
  create: z.union([ z.lazy(() => genresCreateWithoutBooksInputSchema),z.lazy(() => genresUncheckedCreateWithoutBooksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => genresCreateOrConnectWithoutBooksInputSchema).optional(),
  upsert: z.lazy(() => genresUpsertWithoutBooksInputSchema).optional(),
  connect: z.lazy(() => genresWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => genresUpdateToOneWithWhereWithoutBooksInputSchema),z.lazy(() => genresUpdateWithoutBooksInputSchema),z.lazy(() => genresUncheckedUpdateWithoutBooksInputSchema) ]).optional(),
}).strict();

export const cartsUpdateManyWithoutBooksNestedInputSchema: z.ZodType<Prisma.cartsUpdateManyWithoutBooksNestedInput> = z.object({
  create: z.union([ z.lazy(() => cartsCreateWithoutBooksInputSchema),z.lazy(() => cartsCreateWithoutBooksInputSchema).array(),z.lazy(() => cartsUncheckedCreateWithoutBooksInputSchema),z.lazy(() => cartsUncheckedCreateWithoutBooksInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => cartsCreateOrConnectWithoutBooksInputSchema),z.lazy(() => cartsCreateOrConnectWithoutBooksInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => cartsUpsertWithWhereUniqueWithoutBooksInputSchema),z.lazy(() => cartsUpsertWithWhereUniqueWithoutBooksInputSchema).array() ]).optional(),
  createMany: z.lazy(() => cartsCreateManyBooksInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => cartsWhereUniqueInputSchema),z.lazy(() => cartsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => cartsWhereUniqueInputSchema),z.lazy(() => cartsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => cartsWhereUniqueInputSchema),z.lazy(() => cartsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => cartsWhereUniqueInputSchema),z.lazy(() => cartsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => cartsUpdateWithWhereUniqueWithoutBooksInputSchema),z.lazy(() => cartsUpdateWithWhereUniqueWithoutBooksInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => cartsUpdateManyWithWhereWithoutBooksInputSchema),z.lazy(() => cartsUpdateManyWithWhereWithoutBooksInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => cartsScalarWhereInputSchema),z.lazy(() => cartsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const orderDetailsUpdateManyWithoutBooksNestedInputSchema: z.ZodType<Prisma.orderDetailsUpdateManyWithoutBooksNestedInput> = z.object({
  create: z.union([ z.lazy(() => orderDetailsCreateWithoutBooksInputSchema),z.lazy(() => orderDetailsCreateWithoutBooksInputSchema).array(),z.lazy(() => orderDetailsUncheckedCreateWithoutBooksInputSchema),z.lazy(() => orderDetailsUncheckedCreateWithoutBooksInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => orderDetailsCreateOrConnectWithoutBooksInputSchema),z.lazy(() => orderDetailsCreateOrConnectWithoutBooksInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => orderDetailsUpsertWithWhereUniqueWithoutBooksInputSchema),z.lazy(() => orderDetailsUpsertWithWhereUniqueWithoutBooksInputSchema).array() ]).optional(),
  createMany: z.lazy(() => orderDetailsCreateManyBooksInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => orderDetailsWhereUniqueInputSchema),z.lazy(() => orderDetailsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => orderDetailsWhereUniqueInputSchema),z.lazy(() => orderDetailsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => orderDetailsWhereUniqueInputSchema),z.lazy(() => orderDetailsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => orderDetailsWhereUniqueInputSchema),z.lazy(() => orderDetailsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => orderDetailsUpdateWithWhereUniqueWithoutBooksInputSchema),z.lazy(() => orderDetailsUpdateWithWhereUniqueWithoutBooksInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => orderDetailsUpdateManyWithWhereWithoutBooksInputSchema),z.lazy(() => orderDetailsUpdateManyWithWhereWithoutBooksInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => orderDetailsScalarWhereInputSchema),z.lazy(() => orderDetailsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const cartsUncheckedUpdateManyWithoutBooksNestedInputSchema: z.ZodType<Prisma.cartsUncheckedUpdateManyWithoutBooksNestedInput> = z.object({
  create: z.union([ z.lazy(() => cartsCreateWithoutBooksInputSchema),z.lazy(() => cartsCreateWithoutBooksInputSchema).array(),z.lazy(() => cartsUncheckedCreateWithoutBooksInputSchema),z.lazy(() => cartsUncheckedCreateWithoutBooksInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => cartsCreateOrConnectWithoutBooksInputSchema),z.lazy(() => cartsCreateOrConnectWithoutBooksInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => cartsUpsertWithWhereUniqueWithoutBooksInputSchema),z.lazy(() => cartsUpsertWithWhereUniqueWithoutBooksInputSchema).array() ]).optional(),
  createMany: z.lazy(() => cartsCreateManyBooksInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => cartsWhereUniqueInputSchema),z.lazy(() => cartsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => cartsWhereUniqueInputSchema),z.lazy(() => cartsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => cartsWhereUniqueInputSchema),z.lazy(() => cartsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => cartsWhereUniqueInputSchema),z.lazy(() => cartsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => cartsUpdateWithWhereUniqueWithoutBooksInputSchema),z.lazy(() => cartsUpdateWithWhereUniqueWithoutBooksInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => cartsUpdateManyWithWhereWithoutBooksInputSchema),z.lazy(() => cartsUpdateManyWithWhereWithoutBooksInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => cartsScalarWhereInputSchema),z.lazy(() => cartsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const orderDetailsUncheckedUpdateManyWithoutBooksNestedInputSchema: z.ZodType<Prisma.orderDetailsUncheckedUpdateManyWithoutBooksNestedInput> = z.object({
  create: z.union([ z.lazy(() => orderDetailsCreateWithoutBooksInputSchema),z.lazy(() => orderDetailsCreateWithoutBooksInputSchema).array(),z.lazy(() => orderDetailsUncheckedCreateWithoutBooksInputSchema),z.lazy(() => orderDetailsUncheckedCreateWithoutBooksInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => orderDetailsCreateOrConnectWithoutBooksInputSchema),z.lazy(() => orderDetailsCreateOrConnectWithoutBooksInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => orderDetailsUpsertWithWhereUniqueWithoutBooksInputSchema),z.lazy(() => orderDetailsUpsertWithWhereUniqueWithoutBooksInputSchema).array() ]).optional(),
  createMany: z.lazy(() => orderDetailsCreateManyBooksInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => orderDetailsWhereUniqueInputSchema),z.lazy(() => orderDetailsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => orderDetailsWhereUniqueInputSchema),z.lazy(() => orderDetailsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => orderDetailsWhereUniqueInputSchema),z.lazy(() => orderDetailsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => orderDetailsWhereUniqueInputSchema),z.lazy(() => orderDetailsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => orderDetailsUpdateWithWhereUniqueWithoutBooksInputSchema),z.lazy(() => orderDetailsUpdateWithWhereUniqueWithoutBooksInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => orderDetailsUpdateManyWithWhereWithoutBooksInputSchema),z.lazy(() => orderDetailsUpdateManyWithWhereWithoutBooksInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => orderDetailsScalarWhereInputSchema),z.lazy(() => orderDetailsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const orderDetailsCreateNestedManyWithoutOrdersInputSchema: z.ZodType<Prisma.orderDetailsCreateNestedManyWithoutOrdersInput> = z.object({
  create: z.union([ z.lazy(() => orderDetailsCreateWithoutOrdersInputSchema),z.lazy(() => orderDetailsCreateWithoutOrdersInputSchema).array(),z.lazy(() => orderDetailsUncheckedCreateWithoutOrdersInputSchema),z.lazy(() => orderDetailsUncheckedCreateWithoutOrdersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => orderDetailsCreateOrConnectWithoutOrdersInputSchema),z.lazy(() => orderDetailsCreateOrConnectWithoutOrdersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => orderDetailsCreateManyOrdersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => orderDetailsWhereUniqueInputSchema),z.lazy(() => orderDetailsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const usersCreateNestedOneWithoutOrdersInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutOrdersInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutOrdersInputSchema),z.lazy(() => usersUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutOrdersInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional()
}).strict();

export const orderDetailsUncheckedCreateNestedManyWithoutOrdersInputSchema: z.ZodType<Prisma.orderDetailsUncheckedCreateNestedManyWithoutOrdersInput> = z.object({
  create: z.union([ z.lazy(() => orderDetailsCreateWithoutOrdersInputSchema),z.lazy(() => orderDetailsCreateWithoutOrdersInputSchema).array(),z.lazy(() => orderDetailsUncheckedCreateWithoutOrdersInputSchema),z.lazy(() => orderDetailsUncheckedCreateWithoutOrdersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => orderDetailsCreateOrConnectWithoutOrdersInputSchema),z.lazy(() => orderDetailsCreateOrConnectWithoutOrdersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => orderDetailsCreateManyOrdersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => orderDetailsWhereUniqueInputSchema),z.lazy(() => orderDetailsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const orderDetailsUpdateManyWithoutOrdersNestedInputSchema: z.ZodType<Prisma.orderDetailsUpdateManyWithoutOrdersNestedInput> = z.object({
  create: z.union([ z.lazy(() => orderDetailsCreateWithoutOrdersInputSchema),z.lazy(() => orderDetailsCreateWithoutOrdersInputSchema).array(),z.lazy(() => orderDetailsUncheckedCreateWithoutOrdersInputSchema),z.lazy(() => orderDetailsUncheckedCreateWithoutOrdersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => orderDetailsCreateOrConnectWithoutOrdersInputSchema),z.lazy(() => orderDetailsCreateOrConnectWithoutOrdersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => orderDetailsUpsertWithWhereUniqueWithoutOrdersInputSchema),z.lazy(() => orderDetailsUpsertWithWhereUniqueWithoutOrdersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => orderDetailsCreateManyOrdersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => orderDetailsWhereUniqueInputSchema),z.lazy(() => orderDetailsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => orderDetailsWhereUniqueInputSchema),z.lazy(() => orderDetailsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => orderDetailsWhereUniqueInputSchema),z.lazy(() => orderDetailsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => orderDetailsWhereUniqueInputSchema),z.lazy(() => orderDetailsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => orderDetailsUpdateWithWhereUniqueWithoutOrdersInputSchema),z.lazy(() => orderDetailsUpdateWithWhereUniqueWithoutOrdersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => orderDetailsUpdateManyWithWhereWithoutOrdersInputSchema),z.lazy(() => orderDetailsUpdateManyWithWhereWithoutOrdersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => orderDetailsScalarWhereInputSchema),z.lazy(() => orderDetailsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const usersUpdateOneRequiredWithoutOrdersNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutOrdersNestedInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutOrdersInputSchema),z.lazy(() => usersUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutOrdersInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutOrdersInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutOrdersInputSchema),z.lazy(() => usersUpdateWithoutOrdersInputSchema),z.lazy(() => usersUncheckedUpdateWithoutOrdersInputSchema) ]).optional(),
}).strict();

export const orderDetailsUncheckedUpdateManyWithoutOrdersNestedInputSchema: z.ZodType<Prisma.orderDetailsUncheckedUpdateManyWithoutOrdersNestedInput> = z.object({
  create: z.union([ z.lazy(() => orderDetailsCreateWithoutOrdersInputSchema),z.lazy(() => orderDetailsCreateWithoutOrdersInputSchema).array(),z.lazy(() => orderDetailsUncheckedCreateWithoutOrdersInputSchema),z.lazy(() => orderDetailsUncheckedCreateWithoutOrdersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => orderDetailsCreateOrConnectWithoutOrdersInputSchema),z.lazy(() => orderDetailsCreateOrConnectWithoutOrdersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => orderDetailsUpsertWithWhereUniqueWithoutOrdersInputSchema),z.lazy(() => orderDetailsUpsertWithWhereUniqueWithoutOrdersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => orderDetailsCreateManyOrdersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => orderDetailsWhereUniqueInputSchema),z.lazy(() => orderDetailsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => orderDetailsWhereUniqueInputSchema),z.lazy(() => orderDetailsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => orderDetailsWhereUniqueInputSchema),z.lazy(() => orderDetailsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => orderDetailsWhereUniqueInputSchema),z.lazy(() => orderDetailsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => orderDetailsUpdateWithWhereUniqueWithoutOrdersInputSchema),z.lazy(() => orderDetailsUpdateWithWhereUniqueWithoutOrdersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => orderDetailsUpdateManyWithWhereWithoutOrdersInputSchema),z.lazy(() => orderDetailsUpdateManyWithWhereWithoutOrdersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => orderDetailsScalarWhereInputSchema),z.lazy(() => orderDetailsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const booksCreateNestedOneWithoutOrderDetailsInputSchema: z.ZodType<Prisma.booksCreateNestedOneWithoutOrderDetailsInput> = z.object({
  create: z.union([ z.lazy(() => booksCreateWithoutOrderDetailsInputSchema),z.lazy(() => booksUncheckedCreateWithoutOrderDetailsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => booksCreateOrConnectWithoutOrderDetailsInputSchema).optional(),
  connect: z.lazy(() => booksWhereUniqueInputSchema).optional()
}).strict();

export const ordersCreateNestedOneWithoutOrderDetailsInputSchema: z.ZodType<Prisma.ordersCreateNestedOneWithoutOrderDetailsInput> = z.object({
  create: z.union([ z.lazy(() => ordersCreateWithoutOrderDetailsInputSchema),z.lazy(() => ordersUncheckedCreateWithoutOrderDetailsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ordersCreateOrConnectWithoutOrderDetailsInputSchema).optional(),
  connect: z.lazy(() => ordersWhereUniqueInputSchema).optional()
}).strict();

export const booksUpdateOneRequiredWithoutOrderDetailsNestedInputSchema: z.ZodType<Prisma.booksUpdateOneRequiredWithoutOrderDetailsNestedInput> = z.object({
  create: z.union([ z.lazy(() => booksCreateWithoutOrderDetailsInputSchema),z.lazy(() => booksUncheckedCreateWithoutOrderDetailsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => booksCreateOrConnectWithoutOrderDetailsInputSchema).optional(),
  upsert: z.lazy(() => booksUpsertWithoutOrderDetailsInputSchema).optional(),
  connect: z.lazy(() => booksWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => booksUpdateToOneWithWhereWithoutOrderDetailsInputSchema),z.lazy(() => booksUpdateWithoutOrderDetailsInputSchema),z.lazy(() => booksUncheckedUpdateWithoutOrderDetailsInputSchema) ]).optional(),
}).strict();

export const ordersUpdateOneRequiredWithoutOrderDetailsNestedInputSchema: z.ZodType<Prisma.ordersUpdateOneRequiredWithoutOrderDetailsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ordersCreateWithoutOrderDetailsInputSchema),z.lazy(() => ordersUncheckedCreateWithoutOrderDetailsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ordersCreateOrConnectWithoutOrderDetailsInputSchema).optional(),
  upsert: z.lazy(() => ordersUpsertWithoutOrderDetailsInputSchema).optional(),
  connect: z.lazy(() => ordersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ordersUpdateToOneWithWhereWithoutOrderDetailsInputSchema),z.lazy(() => ordersUpdateWithoutOrderDetailsInputSchema),z.lazy(() => ordersUncheckedUpdateWithoutOrderDetailsInputSchema) ]).optional(),
}).strict();

export const booksCreateNestedManyWithoutGenresInputSchema: z.ZodType<Prisma.booksCreateNestedManyWithoutGenresInput> = z.object({
  create: z.union([ z.lazy(() => booksCreateWithoutGenresInputSchema),z.lazy(() => booksCreateWithoutGenresInputSchema).array(),z.lazy(() => booksUncheckedCreateWithoutGenresInputSchema),z.lazy(() => booksUncheckedCreateWithoutGenresInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => booksCreateOrConnectWithoutGenresInputSchema),z.lazy(() => booksCreateOrConnectWithoutGenresInputSchema).array() ]).optional(),
  createMany: z.lazy(() => booksCreateManyGenresInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => booksWhereUniqueInputSchema),z.lazy(() => booksWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const booksUncheckedCreateNestedManyWithoutGenresInputSchema: z.ZodType<Prisma.booksUncheckedCreateNestedManyWithoutGenresInput> = z.object({
  create: z.union([ z.lazy(() => booksCreateWithoutGenresInputSchema),z.lazy(() => booksCreateWithoutGenresInputSchema).array(),z.lazy(() => booksUncheckedCreateWithoutGenresInputSchema),z.lazy(() => booksUncheckedCreateWithoutGenresInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => booksCreateOrConnectWithoutGenresInputSchema),z.lazy(() => booksCreateOrConnectWithoutGenresInputSchema).array() ]).optional(),
  createMany: z.lazy(() => booksCreateManyGenresInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => booksWhereUniqueInputSchema),z.lazy(() => booksWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const booksUpdateManyWithoutGenresNestedInputSchema: z.ZodType<Prisma.booksUpdateManyWithoutGenresNestedInput> = z.object({
  create: z.union([ z.lazy(() => booksCreateWithoutGenresInputSchema),z.lazy(() => booksCreateWithoutGenresInputSchema).array(),z.lazy(() => booksUncheckedCreateWithoutGenresInputSchema),z.lazy(() => booksUncheckedCreateWithoutGenresInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => booksCreateOrConnectWithoutGenresInputSchema),z.lazy(() => booksCreateOrConnectWithoutGenresInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => booksUpsertWithWhereUniqueWithoutGenresInputSchema),z.lazy(() => booksUpsertWithWhereUniqueWithoutGenresInputSchema).array() ]).optional(),
  createMany: z.lazy(() => booksCreateManyGenresInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => booksWhereUniqueInputSchema),z.lazy(() => booksWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => booksWhereUniqueInputSchema),z.lazy(() => booksWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => booksWhereUniqueInputSchema),z.lazy(() => booksWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => booksWhereUniqueInputSchema),z.lazy(() => booksWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => booksUpdateWithWhereUniqueWithoutGenresInputSchema),z.lazy(() => booksUpdateWithWhereUniqueWithoutGenresInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => booksUpdateManyWithWhereWithoutGenresInputSchema),z.lazy(() => booksUpdateManyWithWhereWithoutGenresInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => booksScalarWhereInputSchema),z.lazy(() => booksScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const booksUncheckedUpdateManyWithoutGenresNestedInputSchema: z.ZodType<Prisma.booksUncheckedUpdateManyWithoutGenresNestedInput> = z.object({
  create: z.union([ z.lazy(() => booksCreateWithoutGenresInputSchema),z.lazy(() => booksCreateWithoutGenresInputSchema).array(),z.lazy(() => booksUncheckedCreateWithoutGenresInputSchema),z.lazy(() => booksUncheckedCreateWithoutGenresInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => booksCreateOrConnectWithoutGenresInputSchema),z.lazy(() => booksCreateOrConnectWithoutGenresInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => booksUpsertWithWhereUniqueWithoutGenresInputSchema),z.lazy(() => booksUpsertWithWhereUniqueWithoutGenresInputSchema).array() ]).optional(),
  createMany: z.lazy(() => booksCreateManyGenresInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => booksWhereUniqueInputSchema),z.lazy(() => booksWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => booksWhereUniqueInputSchema),z.lazy(() => booksWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => booksWhereUniqueInputSchema),z.lazy(() => booksWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => booksWhereUniqueInputSchema),z.lazy(() => booksWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => booksUpdateWithWhereUniqueWithoutGenresInputSchema),z.lazy(() => booksUpdateWithWhereUniqueWithoutGenresInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => booksUpdateManyWithWhereWithoutGenresInputSchema),z.lazy(() => booksUpdateManyWithWhereWithoutGenresInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => booksScalarWhereInputSchema),z.lazy(() => booksScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const booksCreateNestedOneWithoutCartsInputSchema: z.ZodType<Prisma.booksCreateNestedOneWithoutCartsInput> = z.object({
  create: z.union([ z.lazy(() => booksCreateWithoutCartsInputSchema),z.lazy(() => booksUncheckedCreateWithoutCartsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => booksCreateOrConnectWithoutCartsInputSchema).optional(),
  connect: z.lazy(() => booksWhereUniqueInputSchema).optional()
}).strict();

export const usersCreateNestedOneWithoutCartsInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutCartsInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutCartsInputSchema),z.lazy(() => usersUncheckedCreateWithoutCartsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutCartsInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional()
}).strict();

export const booksUpdateOneRequiredWithoutCartsNestedInputSchema: z.ZodType<Prisma.booksUpdateOneRequiredWithoutCartsNestedInput> = z.object({
  create: z.union([ z.lazy(() => booksCreateWithoutCartsInputSchema),z.lazy(() => booksUncheckedCreateWithoutCartsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => booksCreateOrConnectWithoutCartsInputSchema).optional(),
  upsert: z.lazy(() => booksUpsertWithoutCartsInputSchema).optional(),
  connect: z.lazy(() => booksWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => booksUpdateToOneWithWhereWithoutCartsInputSchema),z.lazy(() => booksUpdateWithoutCartsInputSchema),z.lazy(() => booksUncheckedUpdateWithoutCartsInputSchema) ]).optional(),
}).strict();

export const usersUpdateOneRequiredWithoutCartsNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutCartsNestedInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutCartsInputSchema),z.lazy(() => usersUncheckedCreateWithoutCartsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutCartsInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutCartsInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutCartsInputSchema),z.lazy(() => usersUpdateWithoutCartsInputSchema),z.lazy(() => usersUncheckedUpdateWithoutCartsInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const cartsCreateWithoutUsersInputSchema: z.ZodType<Prisma.cartsCreateWithoutUsersInput> = z.object({
  quantity: z.number().int().optional(),
  books: z.lazy(() => booksCreateNestedOneWithoutCartsInputSchema)
}).strict();

export const cartsUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.cartsUncheckedCreateWithoutUsersInput> = z.object({
  book_id: z.string(),
  quantity: z.number().int().optional()
}).strict();

export const cartsCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.cartsCreateOrConnectWithoutUsersInput> = z.object({
  where: z.lazy(() => cartsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => cartsCreateWithoutUsersInputSchema),z.lazy(() => cartsUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const cartsCreateManyUsersInputEnvelopeSchema: z.ZodType<Prisma.cartsCreateManyUsersInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => cartsCreateManyUsersInputSchema),z.lazy(() => cartsCreateManyUsersInputSchema).array() ]),
}).strict();

export const ordersCreateWithoutUsersInputSchema: z.ZodType<Prisma.ordersCreateWithoutUsersInput> = z.object({
  id: z.string().optional(),
  order_date: z.coerce.date().optional(),
  total_price: z.number().int(),
  canceled: z.coerce.date().optional().nullable(),
  orderDetails: z.lazy(() => orderDetailsCreateNestedManyWithoutOrdersInputSchema).optional()
}).strict();

export const ordersUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.ordersUncheckedCreateWithoutUsersInput> = z.object({
  id: z.string().optional(),
  order_date: z.coerce.date().optional(),
  total_price: z.number().int(),
  canceled: z.coerce.date().optional().nullable(),
  orderDetails: z.lazy(() => orderDetailsUncheckedCreateNestedManyWithoutOrdersInputSchema).optional()
}).strict();

export const ordersCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.ordersCreateOrConnectWithoutUsersInput> = z.object({
  where: z.lazy(() => ordersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ordersCreateWithoutUsersInputSchema),z.lazy(() => ordersUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const ordersCreateManyUsersInputEnvelopeSchema: z.ZodType<Prisma.ordersCreateManyUsersInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ordersCreateManyUsersInputSchema),z.lazy(() => ordersCreateManyUsersInputSchema).array() ]),
}).strict();

export const addressesCreateWithoutUsersInputSchema: z.ZodType<Prisma.addressesCreateWithoutUsersInput> = z.object({
  zip_code: z.string(),
  address: z.string(),
  detailedAddress: z.string()
}).strict();

export const addressesUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.addressesUncheckedCreateWithoutUsersInput> = z.object({
  id: z.number().int().optional(),
  zip_code: z.string(),
  address: z.string(),
  detailedAddress: z.string()
}).strict();

export const addressesCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.addressesCreateOrConnectWithoutUsersInput> = z.object({
  where: z.lazy(() => addressesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => addressesCreateWithoutUsersInputSchema),z.lazy(() => addressesUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const cartsUpsertWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.cartsUpsertWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => cartsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => cartsUpdateWithoutUsersInputSchema),z.lazy(() => cartsUncheckedUpdateWithoutUsersInputSchema) ]),
  create: z.union([ z.lazy(() => cartsCreateWithoutUsersInputSchema),z.lazy(() => cartsUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const cartsUpdateWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.cartsUpdateWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => cartsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => cartsUpdateWithoutUsersInputSchema),z.lazy(() => cartsUncheckedUpdateWithoutUsersInputSchema) ]),
}).strict();

export const cartsUpdateManyWithWhereWithoutUsersInputSchema: z.ZodType<Prisma.cartsUpdateManyWithWhereWithoutUsersInput> = z.object({
  where: z.lazy(() => cartsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => cartsUpdateManyMutationInputSchema),z.lazy(() => cartsUncheckedUpdateManyWithoutUsersInputSchema) ]),
}).strict();

export const cartsScalarWhereInputSchema: z.ZodType<Prisma.cartsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => cartsScalarWhereInputSchema),z.lazy(() => cartsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => cartsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => cartsScalarWhereInputSchema),z.lazy(() => cartsScalarWhereInputSchema).array() ]).optional(),
  cart_owner_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  book_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const ordersUpsertWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.ordersUpsertWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => ordersWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ordersUpdateWithoutUsersInputSchema),z.lazy(() => ordersUncheckedUpdateWithoutUsersInputSchema) ]),
  create: z.union([ z.lazy(() => ordersCreateWithoutUsersInputSchema),z.lazy(() => ordersUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export const ordersUpdateWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.ordersUpdateWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => ordersWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ordersUpdateWithoutUsersInputSchema),z.lazy(() => ordersUncheckedUpdateWithoutUsersInputSchema) ]),
}).strict();

export const ordersUpdateManyWithWhereWithoutUsersInputSchema: z.ZodType<Prisma.ordersUpdateManyWithWhereWithoutUsersInput> = z.object({
  where: z.lazy(() => ordersScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ordersUpdateManyMutationInputSchema),z.lazy(() => ordersUncheckedUpdateManyWithoutUsersInputSchema) ]),
}).strict();

export const ordersScalarWhereInputSchema: z.ZodType<Prisma.ordersScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ordersScalarWhereInputSchema),z.lazy(() => ordersScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ordersScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ordersScalarWhereInputSchema),z.lazy(() => ordersScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  order_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  total_price: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  orderer: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  canceled: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const addressesUpsertWithoutUsersInputSchema: z.ZodType<Prisma.addressesUpsertWithoutUsersInput> = z.object({
  update: z.union([ z.lazy(() => addressesUpdateWithoutUsersInputSchema),z.lazy(() => addressesUncheckedUpdateWithoutUsersInputSchema) ]),
  create: z.union([ z.lazy(() => addressesCreateWithoutUsersInputSchema),z.lazy(() => addressesUncheckedCreateWithoutUsersInputSchema) ]),
  where: z.lazy(() => addressesWhereInputSchema).optional()
}).strict();

export const addressesUpdateToOneWithWhereWithoutUsersInputSchema: z.ZodType<Prisma.addressesUpdateToOneWithWhereWithoutUsersInput> = z.object({
  where: z.lazy(() => addressesWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => addressesUpdateWithoutUsersInputSchema),z.lazy(() => addressesUncheckedUpdateWithoutUsersInputSchema) ]),
}).strict();

export const addressesUpdateWithoutUsersInputSchema: z.ZodType<Prisma.addressesUpdateWithoutUsersInput> = z.object({
  zip_code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  detailedAddress: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const addressesUncheckedUpdateWithoutUsersInputSchema: z.ZodType<Prisma.addressesUncheckedUpdateWithoutUsersInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  zip_code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  detailedAddress: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const usersCreateWithoutAddressesInputSchema: z.ZodType<Prisma.usersCreateWithoutAddressesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  sex: z.string(),
  email: z.string(),
  phone: z.string(),
  carts: z.lazy(() => cartsCreateNestedManyWithoutUsersInputSchema).optional(),
  orders: z.lazy(() => ordersCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const usersUncheckedCreateWithoutAddressesInputSchema: z.ZodType<Prisma.usersUncheckedCreateWithoutAddressesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  sex: z.string(),
  email: z.string(),
  phone: z.string(),
  carts: z.lazy(() => cartsUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  orders: z.lazy(() => ordersUncheckedCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const usersCreateOrConnectWithoutAddressesInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutAddressesInput> = z.object({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutAddressesInputSchema),z.lazy(() => usersUncheckedCreateWithoutAddressesInputSchema) ]),
}).strict();

export const usersCreateManyAddressesInputEnvelopeSchema: z.ZodType<Prisma.usersCreateManyAddressesInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => usersCreateManyAddressesInputSchema),z.lazy(() => usersCreateManyAddressesInputSchema).array() ]),
}).strict();

export const usersUpsertWithWhereUniqueWithoutAddressesInputSchema: z.ZodType<Prisma.usersUpsertWithWhereUniqueWithoutAddressesInput> = z.object({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => usersUpdateWithoutAddressesInputSchema),z.lazy(() => usersUncheckedUpdateWithoutAddressesInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutAddressesInputSchema),z.lazy(() => usersUncheckedCreateWithoutAddressesInputSchema) ]),
}).strict();

export const usersUpdateWithWhereUniqueWithoutAddressesInputSchema: z.ZodType<Prisma.usersUpdateWithWhereUniqueWithoutAddressesInput> = z.object({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => usersUpdateWithoutAddressesInputSchema),z.lazy(() => usersUncheckedUpdateWithoutAddressesInputSchema) ]),
}).strict();

export const usersUpdateManyWithWhereWithoutAddressesInputSchema: z.ZodType<Prisma.usersUpdateManyWithWhereWithoutAddressesInput> = z.object({
  where: z.lazy(() => usersScalarWhereInputSchema),
  data: z.union([ z.lazy(() => usersUpdateManyMutationInputSchema),z.lazy(() => usersUncheckedUpdateManyWithoutAddressesInputSchema) ]),
}).strict();

export const usersScalarWhereInputSchema: z.ZodType<Prisma.usersScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => usersScalarWhereInputSchema),z.lazy(() => usersScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => usersScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => usersScalarWhereInputSchema),z.lazy(() => usersScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sex: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const genresCreateWithoutBooksInputSchema: z.ZodType<Prisma.genresCreateWithoutBooksInput> = z.object({
  genre: z.string()
}).strict();

export const genresUncheckedCreateWithoutBooksInputSchema: z.ZodType<Prisma.genresUncheckedCreateWithoutBooksInput> = z.object({
  id: z.number().int().optional(),
  genre: z.string()
}).strict();

export const genresCreateOrConnectWithoutBooksInputSchema: z.ZodType<Prisma.genresCreateOrConnectWithoutBooksInput> = z.object({
  where: z.lazy(() => genresWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => genresCreateWithoutBooksInputSchema),z.lazy(() => genresUncheckedCreateWithoutBooksInputSchema) ]),
}).strict();

export const cartsCreateWithoutBooksInputSchema: z.ZodType<Prisma.cartsCreateWithoutBooksInput> = z.object({
  quantity: z.number().int().optional(),
  users: z.lazy(() => usersCreateNestedOneWithoutCartsInputSchema)
}).strict();

export const cartsUncheckedCreateWithoutBooksInputSchema: z.ZodType<Prisma.cartsUncheckedCreateWithoutBooksInput> = z.object({
  cart_owner_id: z.string(),
  quantity: z.number().int().optional()
}).strict();

export const cartsCreateOrConnectWithoutBooksInputSchema: z.ZodType<Prisma.cartsCreateOrConnectWithoutBooksInput> = z.object({
  where: z.lazy(() => cartsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => cartsCreateWithoutBooksInputSchema),z.lazy(() => cartsUncheckedCreateWithoutBooksInputSchema) ]),
}).strict();

export const cartsCreateManyBooksInputEnvelopeSchema: z.ZodType<Prisma.cartsCreateManyBooksInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => cartsCreateManyBooksInputSchema),z.lazy(() => cartsCreateManyBooksInputSchema).array() ]),
}).strict();

export const orderDetailsCreateWithoutBooksInputSchema: z.ZodType<Prisma.orderDetailsCreateWithoutBooksInput> = z.object({
  orders: z.lazy(() => ordersCreateNestedOneWithoutOrderDetailsInputSchema)
}).strict();

export const orderDetailsUncheckedCreateWithoutBooksInputSchema: z.ZodType<Prisma.orderDetailsUncheckedCreateWithoutBooksInput> = z.object({
  order_id: z.string()
}).strict();

export const orderDetailsCreateOrConnectWithoutBooksInputSchema: z.ZodType<Prisma.orderDetailsCreateOrConnectWithoutBooksInput> = z.object({
  where: z.lazy(() => orderDetailsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => orderDetailsCreateWithoutBooksInputSchema),z.lazy(() => orderDetailsUncheckedCreateWithoutBooksInputSchema) ]),
}).strict();

export const orderDetailsCreateManyBooksInputEnvelopeSchema: z.ZodType<Prisma.orderDetailsCreateManyBooksInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => orderDetailsCreateManyBooksInputSchema),z.lazy(() => orderDetailsCreateManyBooksInputSchema).array() ]),
}).strict();

export const genresUpsertWithoutBooksInputSchema: z.ZodType<Prisma.genresUpsertWithoutBooksInput> = z.object({
  update: z.union([ z.lazy(() => genresUpdateWithoutBooksInputSchema),z.lazy(() => genresUncheckedUpdateWithoutBooksInputSchema) ]),
  create: z.union([ z.lazy(() => genresCreateWithoutBooksInputSchema),z.lazy(() => genresUncheckedCreateWithoutBooksInputSchema) ]),
  where: z.lazy(() => genresWhereInputSchema).optional()
}).strict();

export const genresUpdateToOneWithWhereWithoutBooksInputSchema: z.ZodType<Prisma.genresUpdateToOneWithWhereWithoutBooksInput> = z.object({
  where: z.lazy(() => genresWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => genresUpdateWithoutBooksInputSchema),z.lazy(() => genresUncheckedUpdateWithoutBooksInputSchema) ]),
}).strict();

export const genresUpdateWithoutBooksInputSchema: z.ZodType<Prisma.genresUpdateWithoutBooksInput> = z.object({
  genre: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const genresUncheckedUpdateWithoutBooksInputSchema: z.ZodType<Prisma.genresUncheckedUpdateWithoutBooksInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  genre: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const cartsUpsertWithWhereUniqueWithoutBooksInputSchema: z.ZodType<Prisma.cartsUpsertWithWhereUniqueWithoutBooksInput> = z.object({
  where: z.lazy(() => cartsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => cartsUpdateWithoutBooksInputSchema),z.lazy(() => cartsUncheckedUpdateWithoutBooksInputSchema) ]),
  create: z.union([ z.lazy(() => cartsCreateWithoutBooksInputSchema),z.lazy(() => cartsUncheckedCreateWithoutBooksInputSchema) ]),
}).strict();

export const cartsUpdateWithWhereUniqueWithoutBooksInputSchema: z.ZodType<Prisma.cartsUpdateWithWhereUniqueWithoutBooksInput> = z.object({
  where: z.lazy(() => cartsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => cartsUpdateWithoutBooksInputSchema),z.lazy(() => cartsUncheckedUpdateWithoutBooksInputSchema) ]),
}).strict();

export const cartsUpdateManyWithWhereWithoutBooksInputSchema: z.ZodType<Prisma.cartsUpdateManyWithWhereWithoutBooksInput> = z.object({
  where: z.lazy(() => cartsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => cartsUpdateManyMutationInputSchema),z.lazy(() => cartsUncheckedUpdateManyWithoutBooksInputSchema) ]),
}).strict();

export const orderDetailsUpsertWithWhereUniqueWithoutBooksInputSchema: z.ZodType<Prisma.orderDetailsUpsertWithWhereUniqueWithoutBooksInput> = z.object({
  where: z.lazy(() => orderDetailsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => orderDetailsUpdateWithoutBooksInputSchema),z.lazy(() => orderDetailsUncheckedUpdateWithoutBooksInputSchema) ]),
  create: z.union([ z.lazy(() => orderDetailsCreateWithoutBooksInputSchema),z.lazy(() => orderDetailsUncheckedCreateWithoutBooksInputSchema) ]),
}).strict();

export const orderDetailsUpdateWithWhereUniqueWithoutBooksInputSchema: z.ZodType<Prisma.orderDetailsUpdateWithWhereUniqueWithoutBooksInput> = z.object({
  where: z.lazy(() => orderDetailsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => orderDetailsUpdateWithoutBooksInputSchema),z.lazy(() => orderDetailsUncheckedUpdateWithoutBooksInputSchema) ]),
}).strict();

export const orderDetailsUpdateManyWithWhereWithoutBooksInputSchema: z.ZodType<Prisma.orderDetailsUpdateManyWithWhereWithoutBooksInput> = z.object({
  where: z.lazy(() => orderDetailsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => orderDetailsUpdateManyMutationInputSchema),z.lazy(() => orderDetailsUncheckedUpdateManyWithoutBooksInputSchema) ]),
}).strict();

export const orderDetailsScalarWhereInputSchema: z.ZodType<Prisma.orderDetailsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => orderDetailsScalarWhereInputSchema),z.lazy(() => orderDetailsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => orderDetailsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => orderDetailsScalarWhereInputSchema),z.lazy(() => orderDetailsScalarWhereInputSchema).array() ]).optional(),
  order_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  book_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const orderDetailsCreateWithoutOrdersInputSchema: z.ZodType<Prisma.orderDetailsCreateWithoutOrdersInput> = z.object({
  books: z.lazy(() => booksCreateNestedOneWithoutOrderDetailsInputSchema)
}).strict();

export const orderDetailsUncheckedCreateWithoutOrdersInputSchema: z.ZodType<Prisma.orderDetailsUncheckedCreateWithoutOrdersInput> = z.object({
  book_id: z.string()
}).strict();

export const orderDetailsCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.orderDetailsCreateOrConnectWithoutOrdersInput> = z.object({
  where: z.lazy(() => orderDetailsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => orderDetailsCreateWithoutOrdersInputSchema),z.lazy(() => orderDetailsUncheckedCreateWithoutOrdersInputSchema) ]),
}).strict();

export const orderDetailsCreateManyOrdersInputEnvelopeSchema: z.ZodType<Prisma.orderDetailsCreateManyOrdersInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => orderDetailsCreateManyOrdersInputSchema),z.lazy(() => orderDetailsCreateManyOrdersInputSchema).array() ]),
}).strict();

export const usersCreateWithoutOrdersInputSchema: z.ZodType<Prisma.usersCreateWithoutOrdersInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  sex: z.string(),
  email: z.string(),
  phone: z.string(),
  carts: z.lazy(() => cartsCreateNestedManyWithoutUsersInputSchema).optional(),
  addresses: z.lazy(() => addressesCreateNestedOneWithoutUsersInputSchema)
}).strict();

export const usersUncheckedCreateWithoutOrdersInputSchema: z.ZodType<Prisma.usersUncheckedCreateWithoutOrdersInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  sex: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.number().int(),
  carts: z.lazy(() => cartsUncheckedCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const usersCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutOrdersInput> = z.object({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutOrdersInputSchema),z.lazy(() => usersUncheckedCreateWithoutOrdersInputSchema) ]),
}).strict();

export const orderDetailsUpsertWithWhereUniqueWithoutOrdersInputSchema: z.ZodType<Prisma.orderDetailsUpsertWithWhereUniqueWithoutOrdersInput> = z.object({
  where: z.lazy(() => orderDetailsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => orderDetailsUpdateWithoutOrdersInputSchema),z.lazy(() => orderDetailsUncheckedUpdateWithoutOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => orderDetailsCreateWithoutOrdersInputSchema),z.lazy(() => orderDetailsUncheckedCreateWithoutOrdersInputSchema) ]),
}).strict();

export const orderDetailsUpdateWithWhereUniqueWithoutOrdersInputSchema: z.ZodType<Prisma.orderDetailsUpdateWithWhereUniqueWithoutOrdersInput> = z.object({
  where: z.lazy(() => orderDetailsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => orderDetailsUpdateWithoutOrdersInputSchema),z.lazy(() => orderDetailsUncheckedUpdateWithoutOrdersInputSchema) ]),
}).strict();

export const orderDetailsUpdateManyWithWhereWithoutOrdersInputSchema: z.ZodType<Prisma.orderDetailsUpdateManyWithWhereWithoutOrdersInput> = z.object({
  where: z.lazy(() => orderDetailsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => orderDetailsUpdateManyMutationInputSchema),z.lazy(() => orderDetailsUncheckedUpdateManyWithoutOrdersInputSchema) ]),
}).strict();

export const usersUpsertWithoutOrdersInputSchema: z.ZodType<Prisma.usersUpsertWithoutOrdersInput> = z.object({
  update: z.union([ z.lazy(() => usersUpdateWithoutOrdersInputSchema),z.lazy(() => usersUncheckedUpdateWithoutOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutOrdersInputSchema),z.lazy(() => usersUncheckedCreateWithoutOrdersInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional()
}).strict();

export const usersUpdateToOneWithWhereWithoutOrdersInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutOrdersInput> = z.object({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutOrdersInputSchema),z.lazy(() => usersUncheckedUpdateWithoutOrdersInputSchema) ]),
}).strict();

export const usersUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.usersUpdateWithoutOrdersInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sex: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  carts: z.lazy(() => cartsUpdateManyWithoutUsersNestedInputSchema).optional(),
  addresses: z.lazy(() => addressesUpdateOneRequiredWithoutUsersNestedInputSchema).optional()
}).strict();

export const usersUncheckedUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.usersUncheckedUpdateWithoutOrdersInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sex: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  carts: z.lazy(() => cartsUncheckedUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const booksCreateWithoutOrderDetailsInputSchema: z.ZodType<Prisma.booksCreateWithoutOrderDetailsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  cost: z.number().int(),
  price: z.number().int(),
  description: z.string(),
  quantity: z.number().int(),
  author: z.string(),
  genres: z.lazy(() => genresCreateNestedOneWithoutBooksInputSchema),
  carts: z.lazy(() => cartsCreateNestedManyWithoutBooksInputSchema).optional()
}).strict();

export const booksUncheckedCreateWithoutOrderDetailsInputSchema: z.ZodType<Prisma.booksUncheckedCreateWithoutOrderDetailsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  cost: z.number().int(),
  price: z.number().int(),
  description: z.string(),
  quantity: z.number().int(),
  author: z.string(),
  genre_id: z.number().int(),
  carts: z.lazy(() => cartsUncheckedCreateNestedManyWithoutBooksInputSchema).optional()
}).strict();

export const booksCreateOrConnectWithoutOrderDetailsInputSchema: z.ZodType<Prisma.booksCreateOrConnectWithoutOrderDetailsInput> = z.object({
  where: z.lazy(() => booksWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => booksCreateWithoutOrderDetailsInputSchema),z.lazy(() => booksUncheckedCreateWithoutOrderDetailsInputSchema) ]),
}).strict();

export const ordersCreateWithoutOrderDetailsInputSchema: z.ZodType<Prisma.ordersCreateWithoutOrderDetailsInput> = z.object({
  id: z.string().optional(),
  order_date: z.coerce.date().optional(),
  total_price: z.number().int(),
  canceled: z.coerce.date().optional().nullable(),
  users: z.lazy(() => usersCreateNestedOneWithoutOrdersInputSchema)
}).strict();

export const ordersUncheckedCreateWithoutOrderDetailsInputSchema: z.ZodType<Prisma.ordersUncheckedCreateWithoutOrderDetailsInput> = z.object({
  id: z.string().optional(),
  order_date: z.coerce.date().optional(),
  total_price: z.number().int(),
  orderer: z.string(),
  canceled: z.coerce.date().optional().nullable()
}).strict();

export const ordersCreateOrConnectWithoutOrderDetailsInputSchema: z.ZodType<Prisma.ordersCreateOrConnectWithoutOrderDetailsInput> = z.object({
  where: z.lazy(() => ordersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ordersCreateWithoutOrderDetailsInputSchema),z.lazy(() => ordersUncheckedCreateWithoutOrderDetailsInputSchema) ]),
}).strict();

export const booksUpsertWithoutOrderDetailsInputSchema: z.ZodType<Prisma.booksUpsertWithoutOrderDetailsInput> = z.object({
  update: z.union([ z.lazy(() => booksUpdateWithoutOrderDetailsInputSchema),z.lazy(() => booksUncheckedUpdateWithoutOrderDetailsInputSchema) ]),
  create: z.union([ z.lazy(() => booksCreateWithoutOrderDetailsInputSchema),z.lazy(() => booksUncheckedCreateWithoutOrderDetailsInputSchema) ]),
  where: z.lazy(() => booksWhereInputSchema).optional()
}).strict();

export const booksUpdateToOneWithWhereWithoutOrderDetailsInputSchema: z.ZodType<Prisma.booksUpdateToOneWithWhereWithoutOrderDetailsInput> = z.object({
  where: z.lazy(() => booksWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => booksUpdateWithoutOrderDetailsInputSchema),z.lazy(() => booksUncheckedUpdateWithoutOrderDetailsInputSchema) ]),
}).strict();

export const booksUpdateWithoutOrderDetailsInputSchema: z.ZodType<Prisma.booksUpdateWithoutOrderDetailsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cost: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genres: z.lazy(() => genresUpdateOneRequiredWithoutBooksNestedInputSchema).optional(),
  carts: z.lazy(() => cartsUpdateManyWithoutBooksNestedInputSchema).optional()
}).strict();

export const booksUncheckedUpdateWithoutOrderDetailsInputSchema: z.ZodType<Prisma.booksUncheckedUpdateWithoutOrderDetailsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cost: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genre_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  carts: z.lazy(() => cartsUncheckedUpdateManyWithoutBooksNestedInputSchema).optional()
}).strict();

export const ordersUpsertWithoutOrderDetailsInputSchema: z.ZodType<Prisma.ordersUpsertWithoutOrderDetailsInput> = z.object({
  update: z.union([ z.lazy(() => ordersUpdateWithoutOrderDetailsInputSchema),z.lazy(() => ordersUncheckedUpdateWithoutOrderDetailsInputSchema) ]),
  create: z.union([ z.lazy(() => ordersCreateWithoutOrderDetailsInputSchema),z.lazy(() => ordersUncheckedCreateWithoutOrderDetailsInputSchema) ]),
  where: z.lazy(() => ordersWhereInputSchema).optional()
}).strict();

export const ordersUpdateToOneWithWhereWithoutOrderDetailsInputSchema: z.ZodType<Prisma.ordersUpdateToOneWithWhereWithoutOrderDetailsInput> = z.object({
  where: z.lazy(() => ordersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ordersUpdateWithoutOrderDetailsInputSchema),z.lazy(() => ordersUncheckedUpdateWithoutOrderDetailsInputSchema) ]),
}).strict();

export const ordersUpdateWithoutOrderDetailsInputSchema: z.ZodType<Prisma.ordersUpdateWithoutOrderDetailsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  total_price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  canceled: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  users: z.lazy(() => usersUpdateOneRequiredWithoutOrdersNestedInputSchema).optional()
}).strict();

export const ordersUncheckedUpdateWithoutOrderDetailsInputSchema: z.ZodType<Prisma.ordersUncheckedUpdateWithoutOrderDetailsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  total_price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  orderer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  canceled: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const booksCreateWithoutGenresInputSchema: z.ZodType<Prisma.booksCreateWithoutGenresInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  cost: z.number().int(),
  price: z.number().int(),
  description: z.string(),
  quantity: z.number().int(),
  author: z.string(),
  carts: z.lazy(() => cartsCreateNestedManyWithoutBooksInputSchema).optional(),
  orderDetails: z.lazy(() => orderDetailsCreateNestedManyWithoutBooksInputSchema).optional()
}).strict();

export const booksUncheckedCreateWithoutGenresInputSchema: z.ZodType<Prisma.booksUncheckedCreateWithoutGenresInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  cost: z.number().int(),
  price: z.number().int(),
  description: z.string(),
  quantity: z.number().int(),
  author: z.string(),
  carts: z.lazy(() => cartsUncheckedCreateNestedManyWithoutBooksInputSchema).optional(),
  orderDetails: z.lazy(() => orderDetailsUncheckedCreateNestedManyWithoutBooksInputSchema).optional()
}).strict();

export const booksCreateOrConnectWithoutGenresInputSchema: z.ZodType<Prisma.booksCreateOrConnectWithoutGenresInput> = z.object({
  where: z.lazy(() => booksWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => booksCreateWithoutGenresInputSchema),z.lazy(() => booksUncheckedCreateWithoutGenresInputSchema) ]),
}).strict();

export const booksCreateManyGenresInputEnvelopeSchema: z.ZodType<Prisma.booksCreateManyGenresInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => booksCreateManyGenresInputSchema),z.lazy(() => booksCreateManyGenresInputSchema).array() ]),
}).strict();

export const booksUpsertWithWhereUniqueWithoutGenresInputSchema: z.ZodType<Prisma.booksUpsertWithWhereUniqueWithoutGenresInput> = z.object({
  where: z.lazy(() => booksWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => booksUpdateWithoutGenresInputSchema),z.lazy(() => booksUncheckedUpdateWithoutGenresInputSchema) ]),
  create: z.union([ z.lazy(() => booksCreateWithoutGenresInputSchema),z.lazy(() => booksUncheckedCreateWithoutGenresInputSchema) ]),
}).strict();

export const booksUpdateWithWhereUniqueWithoutGenresInputSchema: z.ZodType<Prisma.booksUpdateWithWhereUniqueWithoutGenresInput> = z.object({
  where: z.lazy(() => booksWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => booksUpdateWithoutGenresInputSchema),z.lazy(() => booksUncheckedUpdateWithoutGenresInputSchema) ]),
}).strict();

export const booksUpdateManyWithWhereWithoutGenresInputSchema: z.ZodType<Prisma.booksUpdateManyWithWhereWithoutGenresInput> = z.object({
  where: z.lazy(() => booksScalarWhereInputSchema),
  data: z.union([ z.lazy(() => booksUpdateManyMutationInputSchema),z.lazy(() => booksUncheckedUpdateManyWithoutGenresInputSchema) ]),
}).strict();

export const booksScalarWhereInputSchema: z.ZodType<Prisma.booksScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => booksScalarWhereInputSchema),z.lazy(() => booksScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => booksScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => booksScalarWhereInputSchema),z.lazy(() => booksScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  cost: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  price: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  author: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  genre_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const booksCreateWithoutCartsInputSchema: z.ZodType<Prisma.booksCreateWithoutCartsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  cost: z.number().int(),
  price: z.number().int(),
  description: z.string(),
  quantity: z.number().int(),
  author: z.string(),
  genres: z.lazy(() => genresCreateNestedOneWithoutBooksInputSchema),
  orderDetails: z.lazy(() => orderDetailsCreateNestedManyWithoutBooksInputSchema).optional()
}).strict();

export const booksUncheckedCreateWithoutCartsInputSchema: z.ZodType<Prisma.booksUncheckedCreateWithoutCartsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  cost: z.number().int(),
  price: z.number().int(),
  description: z.string(),
  quantity: z.number().int(),
  author: z.string(),
  genre_id: z.number().int(),
  orderDetails: z.lazy(() => orderDetailsUncheckedCreateNestedManyWithoutBooksInputSchema).optional()
}).strict();

export const booksCreateOrConnectWithoutCartsInputSchema: z.ZodType<Prisma.booksCreateOrConnectWithoutCartsInput> = z.object({
  where: z.lazy(() => booksWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => booksCreateWithoutCartsInputSchema),z.lazy(() => booksUncheckedCreateWithoutCartsInputSchema) ]),
}).strict();

export const usersCreateWithoutCartsInputSchema: z.ZodType<Prisma.usersCreateWithoutCartsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  sex: z.string(),
  email: z.string(),
  phone: z.string(),
  orders: z.lazy(() => ordersCreateNestedManyWithoutUsersInputSchema).optional(),
  addresses: z.lazy(() => addressesCreateNestedOneWithoutUsersInputSchema)
}).strict();

export const usersUncheckedCreateWithoutCartsInputSchema: z.ZodType<Prisma.usersUncheckedCreateWithoutCartsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  sex: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.number().int(),
  orders: z.lazy(() => ordersUncheckedCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export const usersCreateOrConnectWithoutCartsInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutCartsInput> = z.object({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutCartsInputSchema),z.lazy(() => usersUncheckedCreateWithoutCartsInputSchema) ]),
}).strict();

export const booksUpsertWithoutCartsInputSchema: z.ZodType<Prisma.booksUpsertWithoutCartsInput> = z.object({
  update: z.union([ z.lazy(() => booksUpdateWithoutCartsInputSchema),z.lazy(() => booksUncheckedUpdateWithoutCartsInputSchema) ]),
  create: z.union([ z.lazy(() => booksCreateWithoutCartsInputSchema),z.lazy(() => booksUncheckedCreateWithoutCartsInputSchema) ]),
  where: z.lazy(() => booksWhereInputSchema).optional()
}).strict();

export const booksUpdateToOneWithWhereWithoutCartsInputSchema: z.ZodType<Prisma.booksUpdateToOneWithWhereWithoutCartsInput> = z.object({
  where: z.lazy(() => booksWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => booksUpdateWithoutCartsInputSchema),z.lazy(() => booksUncheckedUpdateWithoutCartsInputSchema) ]),
}).strict();

export const booksUpdateWithoutCartsInputSchema: z.ZodType<Prisma.booksUpdateWithoutCartsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cost: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genres: z.lazy(() => genresUpdateOneRequiredWithoutBooksNestedInputSchema).optional(),
  orderDetails: z.lazy(() => orderDetailsUpdateManyWithoutBooksNestedInputSchema).optional()
}).strict();

export const booksUncheckedUpdateWithoutCartsInputSchema: z.ZodType<Prisma.booksUncheckedUpdateWithoutCartsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cost: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genre_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  orderDetails: z.lazy(() => orderDetailsUncheckedUpdateManyWithoutBooksNestedInputSchema).optional()
}).strict();

export const usersUpsertWithoutCartsInputSchema: z.ZodType<Prisma.usersUpsertWithoutCartsInput> = z.object({
  update: z.union([ z.lazy(() => usersUpdateWithoutCartsInputSchema),z.lazy(() => usersUncheckedUpdateWithoutCartsInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutCartsInputSchema),z.lazy(() => usersUncheckedCreateWithoutCartsInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional()
}).strict();

export const usersUpdateToOneWithWhereWithoutCartsInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutCartsInput> = z.object({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutCartsInputSchema),z.lazy(() => usersUncheckedUpdateWithoutCartsInputSchema) ]),
}).strict();

export const usersUpdateWithoutCartsInputSchema: z.ZodType<Prisma.usersUpdateWithoutCartsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sex: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => ordersUpdateManyWithoutUsersNestedInputSchema).optional(),
  addresses: z.lazy(() => addressesUpdateOneRequiredWithoutUsersNestedInputSchema).optional()
}).strict();

export const usersUncheckedUpdateWithoutCartsInputSchema: z.ZodType<Prisma.usersUncheckedUpdateWithoutCartsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sex: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => ordersUncheckedUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const cartsCreateManyUsersInputSchema: z.ZodType<Prisma.cartsCreateManyUsersInput> = z.object({
  book_id: z.string(),
  quantity: z.number().int().optional()
}).strict();

export const ordersCreateManyUsersInputSchema: z.ZodType<Prisma.ordersCreateManyUsersInput> = z.object({
  id: z.string().optional(),
  order_date: z.coerce.date().optional(),
  total_price: z.number().int(),
  canceled: z.coerce.date().optional().nullable()
}).strict();

export const cartsUpdateWithoutUsersInputSchema: z.ZodType<Prisma.cartsUpdateWithoutUsersInput> = z.object({
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  books: z.lazy(() => booksUpdateOneRequiredWithoutCartsNestedInputSchema).optional()
}).strict();

export const cartsUncheckedUpdateWithoutUsersInputSchema: z.ZodType<Prisma.cartsUncheckedUpdateWithoutUsersInput> = z.object({
  book_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const cartsUncheckedUpdateManyWithoutUsersInputSchema: z.ZodType<Prisma.cartsUncheckedUpdateManyWithoutUsersInput> = z.object({
  book_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ordersUpdateWithoutUsersInputSchema: z.ZodType<Prisma.ordersUpdateWithoutUsersInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  total_price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  canceled: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orderDetails: z.lazy(() => orderDetailsUpdateManyWithoutOrdersNestedInputSchema).optional()
}).strict();

export const ordersUncheckedUpdateWithoutUsersInputSchema: z.ZodType<Prisma.ordersUncheckedUpdateWithoutUsersInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  total_price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  canceled: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orderDetails: z.lazy(() => orderDetailsUncheckedUpdateManyWithoutOrdersNestedInputSchema).optional()
}).strict();

export const ordersUncheckedUpdateManyWithoutUsersInputSchema: z.ZodType<Prisma.ordersUncheckedUpdateManyWithoutUsersInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  total_price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  canceled: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const usersCreateManyAddressesInputSchema: z.ZodType<Prisma.usersCreateManyAddressesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  sex: z.string(),
  email: z.string(),
  phone: z.string()
}).strict();

export const usersUpdateWithoutAddressesInputSchema: z.ZodType<Prisma.usersUpdateWithoutAddressesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sex: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  carts: z.lazy(() => cartsUpdateManyWithoutUsersNestedInputSchema).optional(),
  orders: z.lazy(() => ordersUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const usersUncheckedUpdateWithoutAddressesInputSchema: z.ZodType<Prisma.usersUncheckedUpdateWithoutAddressesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sex: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  carts: z.lazy(() => cartsUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
  orders: z.lazy(() => ordersUncheckedUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export const usersUncheckedUpdateManyWithoutAddressesInputSchema: z.ZodType<Prisma.usersUncheckedUpdateManyWithoutAddressesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sex: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const cartsCreateManyBooksInputSchema: z.ZodType<Prisma.cartsCreateManyBooksInput> = z.object({
  cart_owner_id: z.string(),
  quantity: z.number().int().optional()
}).strict();

export const orderDetailsCreateManyBooksInputSchema: z.ZodType<Prisma.orderDetailsCreateManyBooksInput> = z.object({
  order_id: z.string()
}).strict();

export const cartsUpdateWithoutBooksInputSchema: z.ZodType<Prisma.cartsUpdateWithoutBooksInput> = z.object({
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => usersUpdateOneRequiredWithoutCartsNestedInputSchema).optional()
}).strict();

export const cartsUncheckedUpdateWithoutBooksInputSchema: z.ZodType<Prisma.cartsUncheckedUpdateWithoutBooksInput> = z.object({
  cart_owner_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const cartsUncheckedUpdateManyWithoutBooksInputSchema: z.ZodType<Prisma.cartsUncheckedUpdateManyWithoutBooksInput> = z.object({
  cart_owner_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const orderDetailsUpdateWithoutBooksInputSchema: z.ZodType<Prisma.orderDetailsUpdateWithoutBooksInput> = z.object({
  orders: z.lazy(() => ordersUpdateOneRequiredWithoutOrderDetailsNestedInputSchema).optional()
}).strict();

export const orderDetailsUncheckedUpdateWithoutBooksInputSchema: z.ZodType<Prisma.orderDetailsUncheckedUpdateWithoutBooksInput> = z.object({
  order_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const orderDetailsUncheckedUpdateManyWithoutBooksInputSchema: z.ZodType<Prisma.orderDetailsUncheckedUpdateManyWithoutBooksInput> = z.object({
  order_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const orderDetailsCreateManyOrdersInputSchema: z.ZodType<Prisma.orderDetailsCreateManyOrdersInput> = z.object({
  book_id: z.string()
}).strict();

export const orderDetailsUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.orderDetailsUpdateWithoutOrdersInput> = z.object({
  books: z.lazy(() => booksUpdateOneRequiredWithoutOrderDetailsNestedInputSchema).optional()
}).strict();

export const orderDetailsUncheckedUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.orderDetailsUncheckedUpdateWithoutOrdersInput> = z.object({
  book_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const orderDetailsUncheckedUpdateManyWithoutOrdersInputSchema: z.ZodType<Prisma.orderDetailsUncheckedUpdateManyWithoutOrdersInput> = z.object({
  book_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const booksCreateManyGenresInputSchema: z.ZodType<Prisma.booksCreateManyGenresInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  cost: z.number().int(),
  price: z.number().int(),
  description: z.string(),
  quantity: z.number().int(),
  author: z.string()
}).strict();

export const booksUpdateWithoutGenresInputSchema: z.ZodType<Prisma.booksUpdateWithoutGenresInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cost: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  carts: z.lazy(() => cartsUpdateManyWithoutBooksNestedInputSchema).optional(),
  orderDetails: z.lazy(() => orderDetailsUpdateManyWithoutBooksNestedInputSchema).optional()
}).strict();

export const booksUncheckedUpdateWithoutGenresInputSchema: z.ZodType<Prisma.booksUncheckedUpdateWithoutGenresInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cost: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  carts: z.lazy(() => cartsUncheckedUpdateManyWithoutBooksNestedInputSchema).optional(),
  orderDetails: z.lazy(() => orderDetailsUncheckedUpdateManyWithoutBooksNestedInputSchema).optional()
}).strict();

export const booksUncheckedUpdateManyWithoutGenresInputSchema: z.ZodType<Prisma.booksUncheckedUpdateManyWithoutGenresInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cost: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const usersFindFirstArgsSchema: z.ZodType<Prisma.usersFindFirstArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  where: usersWhereInputSchema.optional(),
  orderBy: z.union([ usersOrderByWithRelationInputSchema.array(),usersOrderByWithRelationInputSchema ]).optional(),
  cursor: usersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UsersScalarFieldEnumSchema,UsersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const usersFindFirstOrThrowArgsSchema: z.ZodType<Prisma.usersFindFirstOrThrowArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  where: usersWhereInputSchema.optional(),
  orderBy: z.union([ usersOrderByWithRelationInputSchema.array(),usersOrderByWithRelationInputSchema ]).optional(),
  cursor: usersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UsersScalarFieldEnumSchema,UsersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const usersFindManyArgsSchema: z.ZodType<Prisma.usersFindManyArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  where: usersWhereInputSchema.optional(),
  orderBy: z.union([ usersOrderByWithRelationInputSchema.array(),usersOrderByWithRelationInputSchema ]).optional(),
  cursor: usersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UsersScalarFieldEnumSchema,UsersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const usersAggregateArgsSchema: z.ZodType<Prisma.usersAggregateArgs> = z.object({
  where: usersWhereInputSchema.optional(),
  orderBy: z.union([ usersOrderByWithRelationInputSchema.array(),usersOrderByWithRelationInputSchema ]).optional(),
  cursor: usersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const usersGroupByArgsSchema: z.ZodType<Prisma.usersGroupByArgs> = z.object({
  where: usersWhereInputSchema.optional(),
  orderBy: z.union([ usersOrderByWithAggregationInputSchema.array(),usersOrderByWithAggregationInputSchema ]).optional(),
  by: UsersScalarFieldEnumSchema.array(),
  having: usersScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const usersFindUniqueArgsSchema: z.ZodType<Prisma.usersFindUniqueArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  where: usersWhereUniqueInputSchema,
}).strict() ;

export const usersFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.usersFindUniqueOrThrowArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  where: usersWhereUniqueInputSchema,
}).strict() ;

export const addressesFindFirstArgsSchema: z.ZodType<Prisma.addressesFindFirstArgs> = z.object({
  select: addressesSelectSchema.optional(),
  include: addressesIncludeSchema.optional(),
  where: addressesWhereInputSchema.optional(),
  orderBy: z.union([ addressesOrderByWithRelationInputSchema.array(),addressesOrderByWithRelationInputSchema ]).optional(),
  cursor: addressesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AddressesScalarFieldEnumSchema,AddressesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const addressesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.addressesFindFirstOrThrowArgs> = z.object({
  select: addressesSelectSchema.optional(),
  include: addressesIncludeSchema.optional(),
  where: addressesWhereInputSchema.optional(),
  orderBy: z.union([ addressesOrderByWithRelationInputSchema.array(),addressesOrderByWithRelationInputSchema ]).optional(),
  cursor: addressesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AddressesScalarFieldEnumSchema,AddressesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const addressesFindManyArgsSchema: z.ZodType<Prisma.addressesFindManyArgs> = z.object({
  select: addressesSelectSchema.optional(),
  include: addressesIncludeSchema.optional(),
  where: addressesWhereInputSchema.optional(),
  orderBy: z.union([ addressesOrderByWithRelationInputSchema.array(),addressesOrderByWithRelationInputSchema ]).optional(),
  cursor: addressesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AddressesScalarFieldEnumSchema,AddressesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const addressesAggregateArgsSchema: z.ZodType<Prisma.addressesAggregateArgs> = z.object({
  where: addressesWhereInputSchema.optional(),
  orderBy: z.union([ addressesOrderByWithRelationInputSchema.array(),addressesOrderByWithRelationInputSchema ]).optional(),
  cursor: addressesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const addressesGroupByArgsSchema: z.ZodType<Prisma.addressesGroupByArgs> = z.object({
  where: addressesWhereInputSchema.optional(),
  orderBy: z.union([ addressesOrderByWithAggregationInputSchema.array(),addressesOrderByWithAggregationInputSchema ]).optional(),
  by: AddressesScalarFieldEnumSchema.array(),
  having: addressesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const addressesFindUniqueArgsSchema: z.ZodType<Prisma.addressesFindUniqueArgs> = z.object({
  select: addressesSelectSchema.optional(),
  include: addressesIncludeSchema.optional(),
  where: addressesWhereUniqueInputSchema,
}).strict() ;

export const addressesFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.addressesFindUniqueOrThrowArgs> = z.object({
  select: addressesSelectSchema.optional(),
  include: addressesIncludeSchema.optional(),
  where: addressesWhereUniqueInputSchema,
}).strict() ;

export const booksFindFirstArgsSchema: z.ZodType<Prisma.booksFindFirstArgs> = z.object({
  select: booksSelectSchema.optional(),
  include: booksIncludeSchema.optional(),
  where: booksWhereInputSchema.optional(),
  orderBy: z.union([ booksOrderByWithRelationInputSchema.array(),booksOrderByWithRelationInputSchema ]).optional(),
  cursor: booksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BooksScalarFieldEnumSchema,BooksScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const booksFindFirstOrThrowArgsSchema: z.ZodType<Prisma.booksFindFirstOrThrowArgs> = z.object({
  select: booksSelectSchema.optional(),
  include: booksIncludeSchema.optional(),
  where: booksWhereInputSchema.optional(),
  orderBy: z.union([ booksOrderByWithRelationInputSchema.array(),booksOrderByWithRelationInputSchema ]).optional(),
  cursor: booksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BooksScalarFieldEnumSchema,BooksScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const booksFindManyArgsSchema: z.ZodType<Prisma.booksFindManyArgs> = z.object({
  select: booksSelectSchema.optional(),
  include: booksIncludeSchema.optional(),
  where: booksWhereInputSchema.optional(),
  orderBy: z.union([ booksOrderByWithRelationInputSchema.array(),booksOrderByWithRelationInputSchema ]).optional(),
  cursor: booksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BooksScalarFieldEnumSchema,BooksScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const booksAggregateArgsSchema: z.ZodType<Prisma.booksAggregateArgs> = z.object({
  where: booksWhereInputSchema.optional(),
  orderBy: z.union([ booksOrderByWithRelationInputSchema.array(),booksOrderByWithRelationInputSchema ]).optional(),
  cursor: booksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const booksGroupByArgsSchema: z.ZodType<Prisma.booksGroupByArgs> = z.object({
  where: booksWhereInputSchema.optional(),
  orderBy: z.union([ booksOrderByWithAggregationInputSchema.array(),booksOrderByWithAggregationInputSchema ]).optional(),
  by: BooksScalarFieldEnumSchema.array(),
  having: booksScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const booksFindUniqueArgsSchema: z.ZodType<Prisma.booksFindUniqueArgs> = z.object({
  select: booksSelectSchema.optional(),
  include: booksIncludeSchema.optional(),
  where: booksWhereUniqueInputSchema,
}).strict() ;

export const booksFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.booksFindUniqueOrThrowArgs> = z.object({
  select: booksSelectSchema.optional(),
  include: booksIncludeSchema.optional(),
  where: booksWhereUniqueInputSchema,
}).strict() ;

export const ordersFindFirstArgsSchema: z.ZodType<Prisma.ordersFindFirstArgs> = z.object({
  select: ordersSelectSchema.optional(),
  include: ordersIncludeSchema.optional(),
  where: ordersWhereInputSchema.optional(),
  orderBy: z.union([ ordersOrderByWithRelationInputSchema.array(),ordersOrderByWithRelationInputSchema ]).optional(),
  cursor: ordersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrdersScalarFieldEnumSchema,OrdersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ordersFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ordersFindFirstOrThrowArgs> = z.object({
  select: ordersSelectSchema.optional(),
  include: ordersIncludeSchema.optional(),
  where: ordersWhereInputSchema.optional(),
  orderBy: z.union([ ordersOrderByWithRelationInputSchema.array(),ordersOrderByWithRelationInputSchema ]).optional(),
  cursor: ordersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrdersScalarFieldEnumSchema,OrdersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ordersFindManyArgsSchema: z.ZodType<Prisma.ordersFindManyArgs> = z.object({
  select: ordersSelectSchema.optional(),
  include: ordersIncludeSchema.optional(),
  where: ordersWhereInputSchema.optional(),
  orderBy: z.union([ ordersOrderByWithRelationInputSchema.array(),ordersOrderByWithRelationInputSchema ]).optional(),
  cursor: ordersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrdersScalarFieldEnumSchema,OrdersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ordersAggregateArgsSchema: z.ZodType<Prisma.ordersAggregateArgs> = z.object({
  where: ordersWhereInputSchema.optional(),
  orderBy: z.union([ ordersOrderByWithRelationInputSchema.array(),ordersOrderByWithRelationInputSchema ]).optional(),
  cursor: ordersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ordersGroupByArgsSchema: z.ZodType<Prisma.ordersGroupByArgs> = z.object({
  where: ordersWhereInputSchema.optional(),
  orderBy: z.union([ ordersOrderByWithAggregationInputSchema.array(),ordersOrderByWithAggregationInputSchema ]).optional(),
  by: OrdersScalarFieldEnumSchema.array(),
  having: ordersScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ordersFindUniqueArgsSchema: z.ZodType<Prisma.ordersFindUniqueArgs> = z.object({
  select: ordersSelectSchema.optional(),
  include: ordersIncludeSchema.optional(),
  where: ordersWhereUniqueInputSchema,
}).strict() ;

export const ordersFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ordersFindUniqueOrThrowArgs> = z.object({
  select: ordersSelectSchema.optional(),
  include: ordersIncludeSchema.optional(),
  where: ordersWhereUniqueInputSchema,
}).strict() ;

export const orderDetailsFindFirstArgsSchema: z.ZodType<Prisma.orderDetailsFindFirstArgs> = z.object({
  select: orderDetailsSelectSchema.optional(),
  include: orderDetailsIncludeSchema.optional(),
  where: orderDetailsWhereInputSchema.optional(),
  orderBy: z.union([ orderDetailsOrderByWithRelationInputSchema.array(),orderDetailsOrderByWithRelationInputSchema ]).optional(),
  cursor: orderDetailsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrderDetailsScalarFieldEnumSchema,OrderDetailsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const orderDetailsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.orderDetailsFindFirstOrThrowArgs> = z.object({
  select: orderDetailsSelectSchema.optional(),
  include: orderDetailsIncludeSchema.optional(),
  where: orderDetailsWhereInputSchema.optional(),
  orderBy: z.union([ orderDetailsOrderByWithRelationInputSchema.array(),orderDetailsOrderByWithRelationInputSchema ]).optional(),
  cursor: orderDetailsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrderDetailsScalarFieldEnumSchema,OrderDetailsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const orderDetailsFindManyArgsSchema: z.ZodType<Prisma.orderDetailsFindManyArgs> = z.object({
  select: orderDetailsSelectSchema.optional(),
  include: orderDetailsIncludeSchema.optional(),
  where: orderDetailsWhereInputSchema.optional(),
  orderBy: z.union([ orderDetailsOrderByWithRelationInputSchema.array(),orderDetailsOrderByWithRelationInputSchema ]).optional(),
  cursor: orderDetailsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrderDetailsScalarFieldEnumSchema,OrderDetailsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const orderDetailsAggregateArgsSchema: z.ZodType<Prisma.orderDetailsAggregateArgs> = z.object({
  where: orderDetailsWhereInputSchema.optional(),
  orderBy: z.union([ orderDetailsOrderByWithRelationInputSchema.array(),orderDetailsOrderByWithRelationInputSchema ]).optional(),
  cursor: orderDetailsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const orderDetailsGroupByArgsSchema: z.ZodType<Prisma.orderDetailsGroupByArgs> = z.object({
  where: orderDetailsWhereInputSchema.optional(),
  orderBy: z.union([ orderDetailsOrderByWithAggregationInputSchema.array(),orderDetailsOrderByWithAggregationInputSchema ]).optional(),
  by: OrderDetailsScalarFieldEnumSchema.array(),
  having: orderDetailsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const orderDetailsFindUniqueArgsSchema: z.ZodType<Prisma.orderDetailsFindUniqueArgs> = z.object({
  select: orderDetailsSelectSchema.optional(),
  include: orderDetailsIncludeSchema.optional(),
  where: orderDetailsWhereUniqueInputSchema,
}).strict() ;

export const orderDetailsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.orderDetailsFindUniqueOrThrowArgs> = z.object({
  select: orderDetailsSelectSchema.optional(),
  include: orderDetailsIncludeSchema.optional(),
  where: orderDetailsWhereUniqueInputSchema,
}).strict() ;

export const genresFindFirstArgsSchema: z.ZodType<Prisma.genresFindFirstArgs> = z.object({
  select: genresSelectSchema.optional(),
  include: genresIncludeSchema.optional(),
  where: genresWhereInputSchema.optional(),
  orderBy: z.union([ genresOrderByWithRelationInputSchema.array(),genresOrderByWithRelationInputSchema ]).optional(),
  cursor: genresWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GenresScalarFieldEnumSchema,GenresScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const genresFindFirstOrThrowArgsSchema: z.ZodType<Prisma.genresFindFirstOrThrowArgs> = z.object({
  select: genresSelectSchema.optional(),
  include: genresIncludeSchema.optional(),
  where: genresWhereInputSchema.optional(),
  orderBy: z.union([ genresOrderByWithRelationInputSchema.array(),genresOrderByWithRelationInputSchema ]).optional(),
  cursor: genresWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GenresScalarFieldEnumSchema,GenresScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const genresFindManyArgsSchema: z.ZodType<Prisma.genresFindManyArgs> = z.object({
  select: genresSelectSchema.optional(),
  include: genresIncludeSchema.optional(),
  where: genresWhereInputSchema.optional(),
  orderBy: z.union([ genresOrderByWithRelationInputSchema.array(),genresOrderByWithRelationInputSchema ]).optional(),
  cursor: genresWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GenresScalarFieldEnumSchema,GenresScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const genresAggregateArgsSchema: z.ZodType<Prisma.genresAggregateArgs> = z.object({
  where: genresWhereInputSchema.optional(),
  orderBy: z.union([ genresOrderByWithRelationInputSchema.array(),genresOrderByWithRelationInputSchema ]).optional(),
  cursor: genresWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const genresGroupByArgsSchema: z.ZodType<Prisma.genresGroupByArgs> = z.object({
  where: genresWhereInputSchema.optional(),
  orderBy: z.union([ genresOrderByWithAggregationInputSchema.array(),genresOrderByWithAggregationInputSchema ]).optional(),
  by: GenresScalarFieldEnumSchema.array(),
  having: genresScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const genresFindUniqueArgsSchema: z.ZodType<Prisma.genresFindUniqueArgs> = z.object({
  select: genresSelectSchema.optional(),
  include: genresIncludeSchema.optional(),
  where: genresWhereUniqueInputSchema,
}).strict() ;

export const genresFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.genresFindUniqueOrThrowArgs> = z.object({
  select: genresSelectSchema.optional(),
  include: genresIncludeSchema.optional(),
  where: genresWhereUniqueInputSchema,
}).strict() ;

export const cartsFindFirstArgsSchema: z.ZodType<Prisma.cartsFindFirstArgs> = z.object({
  select: cartsSelectSchema.optional(),
  include: cartsIncludeSchema.optional(),
  where: cartsWhereInputSchema.optional(),
  orderBy: z.union([ cartsOrderByWithRelationInputSchema.array(),cartsOrderByWithRelationInputSchema ]).optional(),
  cursor: cartsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CartsScalarFieldEnumSchema,CartsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const cartsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.cartsFindFirstOrThrowArgs> = z.object({
  select: cartsSelectSchema.optional(),
  include: cartsIncludeSchema.optional(),
  where: cartsWhereInputSchema.optional(),
  orderBy: z.union([ cartsOrderByWithRelationInputSchema.array(),cartsOrderByWithRelationInputSchema ]).optional(),
  cursor: cartsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CartsScalarFieldEnumSchema,CartsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const cartsFindManyArgsSchema: z.ZodType<Prisma.cartsFindManyArgs> = z.object({
  select: cartsSelectSchema.optional(),
  include: cartsIncludeSchema.optional(),
  where: cartsWhereInputSchema.optional(),
  orderBy: z.union([ cartsOrderByWithRelationInputSchema.array(),cartsOrderByWithRelationInputSchema ]).optional(),
  cursor: cartsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CartsScalarFieldEnumSchema,CartsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const cartsAggregateArgsSchema: z.ZodType<Prisma.cartsAggregateArgs> = z.object({
  where: cartsWhereInputSchema.optional(),
  orderBy: z.union([ cartsOrderByWithRelationInputSchema.array(),cartsOrderByWithRelationInputSchema ]).optional(),
  cursor: cartsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const cartsGroupByArgsSchema: z.ZodType<Prisma.cartsGroupByArgs> = z.object({
  where: cartsWhereInputSchema.optional(),
  orderBy: z.union([ cartsOrderByWithAggregationInputSchema.array(),cartsOrderByWithAggregationInputSchema ]).optional(),
  by: CartsScalarFieldEnumSchema.array(),
  having: cartsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const cartsFindUniqueArgsSchema: z.ZodType<Prisma.cartsFindUniqueArgs> = z.object({
  select: cartsSelectSchema.optional(),
  include: cartsIncludeSchema.optional(),
  where: cartsWhereUniqueInputSchema,
}).strict() ;

export const cartsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.cartsFindUniqueOrThrowArgs> = z.object({
  select: cartsSelectSchema.optional(),
  include: cartsIncludeSchema.optional(),
  where: cartsWhereUniqueInputSchema,
}).strict() ;

export const usersCreateArgsSchema: z.ZodType<Prisma.usersCreateArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  data: z.union([ usersCreateInputSchema,usersUncheckedCreateInputSchema ]),
}).strict() ;

export const usersUpsertArgsSchema: z.ZodType<Prisma.usersUpsertArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  where: usersWhereUniqueInputSchema,
  create: z.union([ usersCreateInputSchema,usersUncheckedCreateInputSchema ]),
  update: z.union([ usersUpdateInputSchema,usersUncheckedUpdateInputSchema ]),
}).strict() ;

export const usersCreateManyArgsSchema: z.ZodType<Prisma.usersCreateManyArgs> = z.object({
  data: z.union([ usersCreateManyInputSchema,usersCreateManyInputSchema.array() ]),
}).strict() ;

export const usersCreateManyAndReturnArgsSchema: z.ZodType<Prisma.usersCreateManyAndReturnArgs> = z.object({
  data: z.union([ usersCreateManyInputSchema,usersCreateManyInputSchema.array() ]),
}).strict() ;

export const usersDeleteArgsSchema: z.ZodType<Prisma.usersDeleteArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  where: usersWhereUniqueInputSchema,
}).strict() ;

export const usersUpdateArgsSchema: z.ZodType<Prisma.usersUpdateArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: usersIncludeSchema.optional(),
  data: z.union([ usersUpdateInputSchema,usersUncheckedUpdateInputSchema ]),
  where: usersWhereUniqueInputSchema,
}).strict() ;

export const usersUpdateManyArgsSchema: z.ZodType<Prisma.usersUpdateManyArgs> = z.object({
  data: z.union([ usersUpdateManyMutationInputSchema,usersUncheckedUpdateManyInputSchema ]),
  where: usersWhereInputSchema.optional(),
}).strict() ;

export const usersDeleteManyArgsSchema: z.ZodType<Prisma.usersDeleteManyArgs> = z.object({
  where: usersWhereInputSchema.optional(),
}).strict() ;

export const addressesCreateArgsSchema: z.ZodType<Prisma.addressesCreateArgs> = z.object({
  select: addressesSelectSchema.optional(),
  include: addressesIncludeSchema.optional(),
  data: z.union([ addressesCreateInputSchema,addressesUncheckedCreateInputSchema ]),
}).strict() ;

export const addressesUpsertArgsSchema: z.ZodType<Prisma.addressesUpsertArgs> = z.object({
  select: addressesSelectSchema.optional(),
  include: addressesIncludeSchema.optional(),
  where: addressesWhereUniqueInputSchema,
  create: z.union([ addressesCreateInputSchema,addressesUncheckedCreateInputSchema ]),
  update: z.union([ addressesUpdateInputSchema,addressesUncheckedUpdateInputSchema ]),
}).strict() ;

export const addressesCreateManyArgsSchema: z.ZodType<Prisma.addressesCreateManyArgs> = z.object({
  data: z.union([ addressesCreateManyInputSchema,addressesCreateManyInputSchema.array() ]),
}).strict() ;

export const addressesCreateManyAndReturnArgsSchema: z.ZodType<Prisma.addressesCreateManyAndReturnArgs> = z.object({
  data: z.union([ addressesCreateManyInputSchema,addressesCreateManyInputSchema.array() ]),
}).strict() ;

export const addressesDeleteArgsSchema: z.ZodType<Prisma.addressesDeleteArgs> = z.object({
  select: addressesSelectSchema.optional(),
  include: addressesIncludeSchema.optional(),
  where: addressesWhereUniqueInputSchema,
}).strict() ;

export const addressesUpdateArgsSchema: z.ZodType<Prisma.addressesUpdateArgs> = z.object({
  select: addressesSelectSchema.optional(),
  include: addressesIncludeSchema.optional(),
  data: z.union([ addressesUpdateInputSchema,addressesUncheckedUpdateInputSchema ]),
  where: addressesWhereUniqueInputSchema,
}).strict() ;

export const addressesUpdateManyArgsSchema: z.ZodType<Prisma.addressesUpdateManyArgs> = z.object({
  data: z.union([ addressesUpdateManyMutationInputSchema,addressesUncheckedUpdateManyInputSchema ]),
  where: addressesWhereInputSchema.optional(),
}).strict() ;

export const addressesDeleteManyArgsSchema: z.ZodType<Prisma.addressesDeleteManyArgs> = z.object({
  where: addressesWhereInputSchema.optional(),
}).strict() ;

export const booksCreateArgsSchema: z.ZodType<Prisma.booksCreateArgs> = z.object({
  select: booksSelectSchema.optional(),
  include: booksIncludeSchema.optional(),
  data: z.union([ booksCreateInputSchema,booksUncheckedCreateInputSchema ]),
}).strict() ;

export const booksUpsertArgsSchema: z.ZodType<Prisma.booksUpsertArgs> = z.object({
  select: booksSelectSchema.optional(),
  include: booksIncludeSchema.optional(),
  where: booksWhereUniqueInputSchema,
  create: z.union([ booksCreateInputSchema,booksUncheckedCreateInputSchema ]),
  update: z.union([ booksUpdateInputSchema,booksUncheckedUpdateInputSchema ]),
}).strict() ;

export const booksCreateManyArgsSchema: z.ZodType<Prisma.booksCreateManyArgs> = z.object({
  data: z.union([ booksCreateManyInputSchema,booksCreateManyInputSchema.array() ]),
}).strict() ;

export const booksCreateManyAndReturnArgsSchema: z.ZodType<Prisma.booksCreateManyAndReturnArgs> = z.object({
  data: z.union([ booksCreateManyInputSchema,booksCreateManyInputSchema.array() ]),
}).strict() ;

export const booksDeleteArgsSchema: z.ZodType<Prisma.booksDeleteArgs> = z.object({
  select: booksSelectSchema.optional(),
  include: booksIncludeSchema.optional(),
  where: booksWhereUniqueInputSchema,
}).strict() ;

export const booksUpdateArgsSchema: z.ZodType<Prisma.booksUpdateArgs> = z.object({
  select: booksSelectSchema.optional(),
  include: booksIncludeSchema.optional(),
  data: z.union([ booksUpdateInputSchema,booksUncheckedUpdateInputSchema ]),
  where: booksWhereUniqueInputSchema,
}).strict() ;

export const booksUpdateManyArgsSchema: z.ZodType<Prisma.booksUpdateManyArgs> = z.object({
  data: z.union([ booksUpdateManyMutationInputSchema,booksUncheckedUpdateManyInputSchema ]),
  where: booksWhereInputSchema.optional(),
}).strict() ;

export const booksDeleteManyArgsSchema: z.ZodType<Prisma.booksDeleteManyArgs> = z.object({
  where: booksWhereInputSchema.optional(),
}).strict() ;

export const ordersCreateArgsSchema: z.ZodType<Prisma.ordersCreateArgs> = z.object({
  select: ordersSelectSchema.optional(),
  include: ordersIncludeSchema.optional(),
  data: z.union([ ordersCreateInputSchema,ordersUncheckedCreateInputSchema ]),
}).strict() ;

export const ordersUpsertArgsSchema: z.ZodType<Prisma.ordersUpsertArgs> = z.object({
  select: ordersSelectSchema.optional(),
  include: ordersIncludeSchema.optional(),
  where: ordersWhereUniqueInputSchema,
  create: z.union([ ordersCreateInputSchema,ordersUncheckedCreateInputSchema ]),
  update: z.union([ ordersUpdateInputSchema,ordersUncheckedUpdateInputSchema ]),
}).strict() ;

export const ordersCreateManyArgsSchema: z.ZodType<Prisma.ordersCreateManyArgs> = z.object({
  data: z.union([ ordersCreateManyInputSchema,ordersCreateManyInputSchema.array() ]),
}).strict() ;

export const ordersCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ordersCreateManyAndReturnArgs> = z.object({
  data: z.union([ ordersCreateManyInputSchema,ordersCreateManyInputSchema.array() ]),
}).strict() ;

export const ordersDeleteArgsSchema: z.ZodType<Prisma.ordersDeleteArgs> = z.object({
  select: ordersSelectSchema.optional(),
  include: ordersIncludeSchema.optional(),
  where: ordersWhereUniqueInputSchema,
}).strict() ;

export const ordersUpdateArgsSchema: z.ZodType<Prisma.ordersUpdateArgs> = z.object({
  select: ordersSelectSchema.optional(),
  include: ordersIncludeSchema.optional(),
  data: z.union([ ordersUpdateInputSchema,ordersUncheckedUpdateInputSchema ]),
  where: ordersWhereUniqueInputSchema,
}).strict() ;

export const ordersUpdateManyArgsSchema: z.ZodType<Prisma.ordersUpdateManyArgs> = z.object({
  data: z.union([ ordersUpdateManyMutationInputSchema,ordersUncheckedUpdateManyInputSchema ]),
  where: ordersWhereInputSchema.optional(),
}).strict() ;

export const ordersDeleteManyArgsSchema: z.ZodType<Prisma.ordersDeleteManyArgs> = z.object({
  where: ordersWhereInputSchema.optional(),
}).strict() ;

export const orderDetailsCreateArgsSchema: z.ZodType<Prisma.orderDetailsCreateArgs> = z.object({
  select: orderDetailsSelectSchema.optional(),
  include: orderDetailsIncludeSchema.optional(),
  data: z.union([ orderDetailsCreateInputSchema,orderDetailsUncheckedCreateInputSchema ]),
}).strict() ;

export const orderDetailsUpsertArgsSchema: z.ZodType<Prisma.orderDetailsUpsertArgs> = z.object({
  select: orderDetailsSelectSchema.optional(),
  include: orderDetailsIncludeSchema.optional(),
  where: orderDetailsWhereUniqueInputSchema,
  create: z.union([ orderDetailsCreateInputSchema,orderDetailsUncheckedCreateInputSchema ]),
  update: z.union([ orderDetailsUpdateInputSchema,orderDetailsUncheckedUpdateInputSchema ]),
}).strict() ;

export const orderDetailsCreateManyArgsSchema: z.ZodType<Prisma.orderDetailsCreateManyArgs> = z.object({
  data: z.union([ orderDetailsCreateManyInputSchema,orderDetailsCreateManyInputSchema.array() ]),
}).strict() ;

export const orderDetailsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.orderDetailsCreateManyAndReturnArgs> = z.object({
  data: z.union([ orderDetailsCreateManyInputSchema,orderDetailsCreateManyInputSchema.array() ]),
}).strict() ;

export const orderDetailsDeleteArgsSchema: z.ZodType<Prisma.orderDetailsDeleteArgs> = z.object({
  select: orderDetailsSelectSchema.optional(),
  include: orderDetailsIncludeSchema.optional(),
  where: orderDetailsWhereUniqueInputSchema,
}).strict() ;

export const orderDetailsUpdateArgsSchema: z.ZodType<Prisma.orderDetailsUpdateArgs> = z.object({
  select: orderDetailsSelectSchema.optional(),
  include: orderDetailsIncludeSchema.optional(),
  data: z.union([ orderDetailsUpdateInputSchema,orderDetailsUncheckedUpdateInputSchema ]),
  where: orderDetailsWhereUniqueInputSchema,
}).strict() ;

export const orderDetailsUpdateManyArgsSchema: z.ZodType<Prisma.orderDetailsUpdateManyArgs> = z.object({
  data: z.union([ orderDetailsUpdateManyMutationInputSchema,orderDetailsUncheckedUpdateManyInputSchema ]),
  where: orderDetailsWhereInputSchema.optional(),
}).strict() ;

export const orderDetailsDeleteManyArgsSchema: z.ZodType<Prisma.orderDetailsDeleteManyArgs> = z.object({
  where: orderDetailsWhereInputSchema.optional(),
}).strict() ;

export const genresCreateArgsSchema: z.ZodType<Prisma.genresCreateArgs> = z.object({
  select: genresSelectSchema.optional(),
  include: genresIncludeSchema.optional(),
  data: z.union([ genresCreateInputSchema,genresUncheckedCreateInputSchema ]),
}).strict() ;

export const genresUpsertArgsSchema: z.ZodType<Prisma.genresUpsertArgs> = z.object({
  select: genresSelectSchema.optional(),
  include: genresIncludeSchema.optional(),
  where: genresWhereUniqueInputSchema,
  create: z.union([ genresCreateInputSchema,genresUncheckedCreateInputSchema ]),
  update: z.union([ genresUpdateInputSchema,genresUncheckedUpdateInputSchema ]),
}).strict() ;

export const genresCreateManyArgsSchema: z.ZodType<Prisma.genresCreateManyArgs> = z.object({
  data: z.union([ genresCreateManyInputSchema,genresCreateManyInputSchema.array() ]),
}).strict() ;

export const genresCreateManyAndReturnArgsSchema: z.ZodType<Prisma.genresCreateManyAndReturnArgs> = z.object({
  data: z.union([ genresCreateManyInputSchema,genresCreateManyInputSchema.array() ]),
}).strict() ;

export const genresDeleteArgsSchema: z.ZodType<Prisma.genresDeleteArgs> = z.object({
  select: genresSelectSchema.optional(),
  include: genresIncludeSchema.optional(),
  where: genresWhereUniqueInputSchema,
}).strict() ;

export const genresUpdateArgsSchema: z.ZodType<Prisma.genresUpdateArgs> = z.object({
  select: genresSelectSchema.optional(),
  include: genresIncludeSchema.optional(),
  data: z.union([ genresUpdateInputSchema,genresUncheckedUpdateInputSchema ]),
  where: genresWhereUniqueInputSchema,
}).strict() ;

export const genresUpdateManyArgsSchema: z.ZodType<Prisma.genresUpdateManyArgs> = z.object({
  data: z.union([ genresUpdateManyMutationInputSchema,genresUncheckedUpdateManyInputSchema ]),
  where: genresWhereInputSchema.optional(),
}).strict() ;

export const genresDeleteManyArgsSchema: z.ZodType<Prisma.genresDeleteManyArgs> = z.object({
  where: genresWhereInputSchema.optional(),
}).strict() ;

export const cartsCreateArgsSchema: z.ZodType<Prisma.cartsCreateArgs> = z.object({
  select: cartsSelectSchema.optional(),
  include: cartsIncludeSchema.optional(),
  data: z.union([ cartsCreateInputSchema,cartsUncheckedCreateInputSchema ]),
}).strict() ;

export const cartsUpsertArgsSchema: z.ZodType<Prisma.cartsUpsertArgs> = z.object({
  select: cartsSelectSchema.optional(),
  include: cartsIncludeSchema.optional(),
  where: cartsWhereUniqueInputSchema,
  create: z.union([ cartsCreateInputSchema,cartsUncheckedCreateInputSchema ]),
  update: z.union([ cartsUpdateInputSchema,cartsUncheckedUpdateInputSchema ]),
}).strict() ;

export const cartsCreateManyArgsSchema: z.ZodType<Prisma.cartsCreateManyArgs> = z.object({
  data: z.union([ cartsCreateManyInputSchema,cartsCreateManyInputSchema.array() ]),
}).strict() ;

export const cartsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.cartsCreateManyAndReturnArgs> = z.object({
  data: z.union([ cartsCreateManyInputSchema,cartsCreateManyInputSchema.array() ]),
}).strict() ;

export const cartsDeleteArgsSchema: z.ZodType<Prisma.cartsDeleteArgs> = z.object({
  select: cartsSelectSchema.optional(),
  include: cartsIncludeSchema.optional(),
  where: cartsWhereUniqueInputSchema,
}).strict() ;

export const cartsUpdateArgsSchema: z.ZodType<Prisma.cartsUpdateArgs> = z.object({
  select: cartsSelectSchema.optional(),
  include: cartsIncludeSchema.optional(),
  data: z.union([ cartsUpdateInputSchema,cartsUncheckedUpdateInputSchema ]),
  where: cartsWhereUniqueInputSchema,
}).strict() ;

export const cartsUpdateManyArgsSchema: z.ZodType<Prisma.cartsUpdateManyArgs> = z.object({
  data: z.union([ cartsUpdateManyMutationInputSchema,cartsUncheckedUpdateManyInputSchema ]),
  where: cartsWhereInputSchema.optional(),
}).strict() ;

export const cartsDeleteManyArgsSchema: z.ZodType<Prisma.cartsDeleteManyArgs> = z.object({
  where: cartsWhereInputSchema.optional(),
}).strict() ;