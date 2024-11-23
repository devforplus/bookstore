// $로 시작하지 않는 키만 포함하는 새로운 인터페이스 생성
export type OmitDollarKeys<T> = {
	[K in keyof T as K extends `$${string}` ? never : K]: T[K];
};
