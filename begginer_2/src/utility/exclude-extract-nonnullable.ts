export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// SomeTypesから string、number を排除したType
type NonNullableTypes = Exclude<SomeTypes, string | number>;
// SomeTypesから DebugType を排除したType
type NonFunctionType = Exclude<SomeTypes, DebugType>;

type TypeExcludeFunction = Exclude<SomeTypes, Function>;
// SomeTypesから DebugTypeのみを抽出したType
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
// SomeTypesから number | string　のみを抽出したType
type NonFunctionTypeByExtract = Extract<SomeTypes, number | string>;

type NullableTypes = string | number | null | undefined;
// NullableTypesから number | string　のみを抽出したType
type Non_NullableTypes = Extract<NullableTypes, string | number>;

