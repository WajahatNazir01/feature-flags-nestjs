import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FeatureFlagModel = runtime.Types.Result.DefaultSelection<Prisma.$FeatureFlagPayload>;
export type AggregateFeatureFlag = {
    _count: FeatureFlagCountAggregateOutputType | null;
    _min: FeatureFlagMinAggregateOutputType | null;
    _max: FeatureFlagMaxAggregateOutputType | null;
};
export type FeatureFlagMinAggregateOutputType = {
    id: string | null;
    key: string | null;
    description: string | null;
    createdAt: Date | null;
};
export type FeatureFlagMaxAggregateOutputType = {
    id: string | null;
    key: string | null;
    description: string | null;
    createdAt: Date | null;
};
export type FeatureFlagCountAggregateOutputType = {
    id: number;
    key: number;
    description: number;
    createdAt: number;
    _all: number;
};
export type FeatureFlagMinAggregateInputType = {
    id?: true;
    key?: true;
    description?: true;
    createdAt?: true;
};
export type FeatureFlagMaxAggregateInputType = {
    id?: true;
    key?: true;
    description?: true;
    createdAt?: true;
};
export type FeatureFlagCountAggregateInputType = {
    id?: true;
    key?: true;
    description?: true;
    createdAt?: true;
    _all?: true;
};
export type FeatureFlagAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeatureFlagWhereInput;
    orderBy?: Prisma.FeatureFlagOrderByWithRelationInput | Prisma.FeatureFlagOrderByWithRelationInput[];
    cursor?: Prisma.FeatureFlagWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FeatureFlagCountAggregateInputType;
    _min?: FeatureFlagMinAggregateInputType;
    _max?: FeatureFlagMaxAggregateInputType;
};
export type GetFeatureFlagAggregateType<T extends FeatureFlagAggregateArgs> = {
    [P in keyof T & keyof AggregateFeatureFlag]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFeatureFlag[P]> : Prisma.GetScalarType<T[P], AggregateFeatureFlag[P]>;
};
export type FeatureFlagGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeatureFlagWhereInput;
    orderBy?: Prisma.FeatureFlagOrderByWithAggregationInput | Prisma.FeatureFlagOrderByWithAggregationInput[];
    by: Prisma.FeatureFlagScalarFieldEnum[] | Prisma.FeatureFlagScalarFieldEnum;
    having?: Prisma.FeatureFlagScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FeatureFlagCountAggregateInputType | true;
    _min?: FeatureFlagMinAggregateInputType;
    _max?: FeatureFlagMaxAggregateInputType;
};
export type FeatureFlagGroupByOutputType = {
    id: string;
    key: string;
    description: string | null;
    createdAt: Date;
    _count: FeatureFlagCountAggregateOutputType | null;
    _min: FeatureFlagMinAggregateOutputType | null;
    _max: FeatureFlagMaxAggregateOutputType | null;
};
export type GetFeatureFlagGroupByPayload<T extends FeatureFlagGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FeatureFlagGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FeatureFlagGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FeatureFlagGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FeatureFlagGroupByOutputType[P]>;
}>>;
export type FeatureFlagWhereInput = {
    AND?: Prisma.FeatureFlagWhereInput | Prisma.FeatureFlagWhereInput[];
    OR?: Prisma.FeatureFlagWhereInput[];
    NOT?: Prisma.FeatureFlagWhereInput | Prisma.FeatureFlagWhereInput[];
    id?: Prisma.StringFilter<"FeatureFlag"> | string;
    key?: Prisma.StringFilter<"FeatureFlag"> | string;
    description?: Prisma.StringNullableFilter<"FeatureFlag"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"FeatureFlag"> | Date | string;
    statuses?: Prisma.FlagStatusListRelationFilter;
};
export type FeatureFlagOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    statuses?: Prisma.FlagStatusOrderByRelationAggregateInput;
};
export type FeatureFlagWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    key?: string;
    AND?: Prisma.FeatureFlagWhereInput | Prisma.FeatureFlagWhereInput[];
    OR?: Prisma.FeatureFlagWhereInput[];
    NOT?: Prisma.FeatureFlagWhereInput | Prisma.FeatureFlagWhereInput[];
    description?: Prisma.StringNullableFilter<"FeatureFlag"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"FeatureFlag"> | Date | string;
    statuses?: Prisma.FlagStatusListRelationFilter;
}, "id" | "key">;
export type FeatureFlagOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.FeatureFlagCountOrderByAggregateInput;
    _max?: Prisma.FeatureFlagMaxOrderByAggregateInput;
    _min?: Prisma.FeatureFlagMinOrderByAggregateInput;
};
export type FeatureFlagScalarWhereWithAggregatesInput = {
    AND?: Prisma.FeatureFlagScalarWhereWithAggregatesInput | Prisma.FeatureFlagScalarWhereWithAggregatesInput[];
    OR?: Prisma.FeatureFlagScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FeatureFlagScalarWhereWithAggregatesInput | Prisma.FeatureFlagScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FeatureFlag"> | string;
    key?: Prisma.StringWithAggregatesFilter<"FeatureFlag"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"FeatureFlag"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FeatureFlag"> | Date | string;
};
export type FeatureFlagCreateInput = {
    id?: string;
    key: string;
    description?: string | null;
    createdAt?: Date | string;
    statuses?: Prisma.FlagStatusCreateNestedManyWithoutFlagInput;
};
export type FeatureFlagUncheckedCreateInput = {
    id?: string;
    key: string;
    description?: string | null;
    createdAt?: Date | string;
    statuses?: Prisma.FlagStatusUncheckedCreateNestedManyWithoutFlagInput;
};
export type FeatureFlagUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statuses?: Prisma.FlagStatusUpdateManyWithoutFlagNestedInput;
};
export type FeatureFlagUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statuses?: Prisma.FlagStatusUncheckedUpdateManyWithoutFlagNestedInput;
};
export type FeatureFlagCreateManyInput = {
    id?: string;
    key: string;
    description?: string | null;
    createdAt?: Date | string;
};
export type FeatureFlagUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeatureFlagUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeatureFlagCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FeatureFlagMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FeatureFlagMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FeatureFlagScalarRelationFilter = {
    is?: Prisma.FeatureFlagWhereInput;
    isNot?: Prisma.FeatureFlagWhereInput;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type FeatureFlagCreateNestedOneWithoutStatusesInput = {
    create?: Prisma.XOR<Prisma.FeatureFlagCreateWithoutStatusesInput, Prisma.FeatureFlagUncheckedCreateWithoutStatusesInput>;
    connectOrCreate?: Prisma.FeatureFlagCreateOrConnectWithoutStatusesInput;
    connect?: Prisma.FeatureFlagWhereUniqueInput;
};
export type FeatureFlagUpdateOneRequiredWithoutStatusesNestedInput = {
    create?: Prisma.XOR<Prisma.FeatureFlagCreateWithoutStatusesInput, Prisma.FeatureFlagUncheckedCreateWithoutStatusesInput>;
    connectOrCreate?: Prisma.FeatureFlagCreateOrConnectWithoutStatusesInput;
    upsert?: Prisma.FeatureFlagUpsertWithoutStatusesInput;
    connect?: Prisma.FeatureFlagWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FeatureFlagUpdateToOneWithWhereWithoutStatusesInput, Prisma.FeatureFlagUpdateWithoutStatusesInput>, Prisma.FeatureFlagUncheckedUpdateWithoutStatusesInput>;
};
export type FeatureFlagCreateWithoutStatusesInput = {
    id?: string;
    key: string;
    description?: string | null;
    createdAt?: Date | string;
};
export type FeatureFlagUncheckedCreateWithoutStatusesInput = {
    id?: string;
    key: string;
    description?: string | null;
    createdAt?: Date | string;
};
export type FeatureFlagCreateOrConnectWithoutStatusesInput = {
    where: Prisma.FeatureFlagWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeatureFlagCreateWithoutStatusesInput, Prisma.FeatureFlagUncheckedCreateWithoutStatusesInput>;
};
export type FeatureFlagUpsertWithoutStatusesInput = {
    update: Prisma.XOR<Prisma.FeatureFlagUpdateWithoutStatusesInput, Prisma.FeatureFlagUncheckedUpdateWithoutStatusesInput>;
    create: Prisma.XOR<Prisma.FeatureFlagCreateWithoutStatusesInput, Prisma.FeatureFlagUncheckedCreateWithoutStatusesInput>;
    where?: Prisma.FeatureFlagWhereInput;
};
export type FeatureFlagUpdateToOneWithWhereWithoutStatusesInput = {
    where?: Prisma.FeatureFlagWhereInput;
    data: Prisma.XOR<Prisma.FeatureFlagUpdateWithoutStatusesInput, Prisma.FeatureFlagUncheckedUpdateWithoutStatusesInput>;
};
export type FeatureFlagUpdateWithoutStatusesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeatureFlagUncheckedUpdateWithoutStatusesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeatureFlagCountOutputType = {
    statuses: number;
};
export type FeatureFlagCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    statuses?: boolean | FeatureFlagCountOutputTypeCountStatusesArgs;
};
export type FeatureFlagCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureFlagCountOutputTypeSelect<ExtArgs> | null;
};
export type FeatureFlagCountOutputTypeCountStatusesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FlagStatusWhereInput;
};
export type FeatureFlagSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    description?: boolean;
    createdAt?: boolean;
    statuses?: boolean | Prisma.FeatureFlag$statusesArgs<ExtArgs>;
    _count?: boolean | Prisma.FeatureFlagCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["featureFlag"]>;
export type FeatureFlagSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    description?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["featureFlag"]>;
export type FeatureFlagSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    description?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["featureFlag"]>;
export type FeatureFlagSelectScalar = {
    id?: boolean;
    key?: boolean;
    description?: boolean;
    createdAt?: boolean;
};
export type FeatureFlagOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "key" | "description" | "createdAt", ExtArgs["result"]["featureFlag"]>;
export type FeatureFlagInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    statuses?: boolean | Prisma.FeatureFlag$statusesArgs<ExtArgs>;
    _count?: boolean | Prisma.FeatureFlagCountOutputTypeDefaultArgs<ExtArgs>;
};
export type FeatureFlagIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type FeatureFlagIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $FeatureFlagPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FeatureFlag";
    objects: {
        statuses: Prisma.$FlagStatusPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        key: string;
        description: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["featureFlag"]>;
    composites: {};
};
export type FeatureFlagGetPayload<S extends boolean | null | undefined | FeatureFlagDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FeatureFlagPayload, S>;
export type FeatureFlagCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FeatureFlagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FeatureFlagCountAggregateInputType | true;
};
export interface FeatureFlagDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FeatureFlag'];
        meta: {
            name: 'FeatureFlag';
        };
    };
    findUnique<T extends FeatureFlagFindUniqueArgs>(args: Prisma.SelectSubset<T, FeatureFlagFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FeatureFlagClient<runtime.Types.Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FeatureFlagFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FeatureFlagFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FeatureFlagClient<runtime.Types.Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FeatureFlagFindFirstArgs>(args?: Prisma.SelectSubset<T, FeatureFlagFindFirstArgs<ExtArgs>>): Prisma.Prisma__FeatureFlagClient<runtime.Types.Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FeatureFlagFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FeatureFlagFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FeatureFlagClient<runtime.Types.Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FeatureFlagFindManyArgs>(args?: Prisma.SelectSubset<T, FeatureFlagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FeatureFlagCreateArgs>(args: Prisma.SelectSubset<T, FeatureFlagCreateArgs<ExtArgs>>): Prisma.Prisma__FeatureFlagClient<runtime.Types.Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FeatureFlagCreateManyArgs>(args?: Prisma.SelectSubset<T, FeatureFlagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FeatureFlagCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FeatureFlagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FeatureFlagDeleteArgs>(args: Prisma.SelectSubset<T, FeatureFlagDeleteArgs<ExtArgs>>): Prisma.Prisma__FeatureFlagClient<runtime.Types.Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FeatureFlagUpdateArgs>(args: Prisma.SelectSubset<T, FeatureFlagUpdateArgs<ExtArgs>>): Prisma.Prisma__FeatureFlagClient<runtime.Types.Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FeatureFlagDeleteManyArgs>(args?: Prisma.SelectSubset<T, FeatureFlagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FeatureFlagUpdateManyArgs>(args: Prisma.SelectSubset<T, FeatureFlagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FeatureFlagUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FeatureFlagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FeatureFlagUpsertArgs>(args: Prisma.SelectSubset<T, FeatureFlagUpsertArgs<ExtArgs>>): Prisma.Prisma__FeatureFlagClient<runtime.Types.Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FeatureFlagCountArgs>(args?: Prisma.Subset<T, FeatureFlagCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FeatureFlagCountAggregateOutputType> : number>;
    aggregate<T extends FeatureFlagAggregateArgs>(args: Prisma.Subset<T, FeatureFlagAggregateArgs>): Prisma.PrismaPromise<GetFeatureFlagAggregateType<T>>;
    groupBy<T extends FeatureFlagGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FeatureFlagGroupByArgs['orderBy'];
    } : {
        orderBy?: FeatureFlagGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FeatureFlagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureFlagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FeatureFlagFieldRefs;
}
export interface Prisma__FeatureFlagClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    statuses<T extends Prisma.FeatureFlag$statusesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FeatureFlag$statusesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FlagStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FeatureFlagFieldRefs {
    readonly id: Prisma.FieldRef<"FeatureFlag", 'String'>;
    readonly key: Prisma.FieldRef<"FeatureFlag", 'String'>;
    readonly description: Prisma.FieldRef<"FeatureFlag", 'String'>;
    readonly createdAt: Prisma.FieldRef<"FeatureFlag", 'DateTime'>;
}
export type FeatureFlagFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureFlagSelect<ExtArgs> | null;
    omit?: Prisma.FeatureFlagOmit<ExtArgs> | null;
    include?: Prisma.FeatureFlagInclude<ExtArgs> | null;
    where: Prisma.FeatureFlagWhereUniqueInput;
};
export type FeatureFlagFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureFlagSelect<ExtArgs> | null;
    omit?: Prisma.FeatureFlagOmit<ExtArgs> | null;
    include?: Prisma.FeatureFlagInclude<ExtArgs> | null;
    where: Prisma.FeatureFlagWhereUniqueInput;
};
export type FeatureFlagFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureFlagSelect<ExtArgs> | null;
    omit?: Prisma.FeatureFlagOmit<ExtArgs> | null;
    include?: Prisma.FeatureFlagInclude<ExtArgs> | null;
    where?: Prisma.FeatureFlagWhereInput;
    orderBy?: Prisma.FeatureFlagOrderByWithRelationInput | Prisma.FeatureFlagOrderByWithRelationInput[];
    cursor?: Prisma.FeatureFlagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeatureFlagScalarFieldEnum | Prisma.FeatureFlagScalarFieldEnum[];
};
export type FeatureFlagFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureFlagSelect<ExtArgs> | null;
    omit?: Prisma.FeatureFlagOmit<ExtArgs> | null;
    include?: Prisma.FeatureFlagInclude<ExtArgs> | null;
    where?: Prisma.FeatureFlagWhereInput;
    orderBy?: Prisma.FeatureFlagOrderByWithRelationInput | Prisma.FeatureFlagOrderByWithRelationInput[];
    cursor?: Prisma.FeatureFlagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeatureFlagScalarFieldEnum | Prisma.FeatureFlagScalarFieldEnum[];
};
export type FeatureFlagFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureFlagSelect<ExtArgs> | null;
    omit?: Prisma.FeatureFlagOmit<ExtArgs> | null;
    include?: Prisma.FeatureFlagInclude<ExtArgs> | null;
    where?: Prisma.FeatureFlagWhereInput;
    orderBy?: Prisma.FeatureFlagOrderByWithRelationInput | Prisma.FeatureFlagOrderByWithRelationInput[];
    cursor?: Prisma.FeatureFlagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeatureFlagScalarFieldEnum | Prisma.FeatureFlagScalarFieldEnum[];
};
export type FeatureFlagCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureFlagSelect<ExtArgs> | null;
    omit?: Prisma.FeatureFlagOmit<ExtArgs> | null;
    include?: Prisma.FeatureFlagInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FeatureFlagCreateInput, Prisma.FeatureFlagUncheckedCreateInput>;
};
export type FeatureFlagCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FeatureFlagCreateManyInput | Prisma.FeatureFlagCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FeatureFlagCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureFlagSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FeatureFlagOmit<ExtArgs> | null;
    data: Prisma.FeatureFlagCreateManyInput | Prisma.FeatureFlagCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FeatureFlagUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureFlagSelect<ExtArgs> | null;
    omit?: Prisma.FeatureFlagOmit<ExtArgs> | null;
    include?: Prisma.FeatureFlagInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FeatureFlagUpdateInput, Prisma.FeatureFlagUncheckedUpdateInput>;
    where: Prisma.FeatureFlagWhereUniqueInput;
};
export type FeatureFlagUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FeatureFlagUpdateManyMutationInput, Prisma.FeatureFlagUncheckedUpdateManyInput>;
    where?: Prisma.FeatureFlagWhereInput;
    limit?: number;
};
export type FeatureFlagUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureFlagSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FeatureFlagOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FeatureFlagUpdateManyMutationInput, Prisma.FeatureFlagUncheckedUpdateManyInput>;
    where?: Prisma.FeatureFlagWhereInput;
    limit?: number;
};
export type FeatureFlagUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureFlagSelect<ExtArgs> | null;
    omit?: Prisma.FeatureFlagOmit<ExtArgs> | null;
    include?: Prisma.FeatureFlagInclude<ExtArgs> | null;
    where: Prisma.FeatureFlagWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeatureFlagCreateInput, Prisma.FeatureFlagUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FeatureFlagUpdateInput, Prisma.FeatureFlagUncheckedUpdateInput>;
};
export type FeatureFlagDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureFlagSelect<ExtArgs> | null;
    omit?: Prisma.FeatureFlagOmit<ExtArgs> | null;
    include?: Prisma.FeatureFlagInclude<ExtArgs> | null;
    where: Prisma.FeatureFlagWhereUniqueInput;
};
export type FeatureFlagDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeatureFlagWhereInput;
    limit?: number;
};
export type FeatureFlag$statusesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FlagStatusSelect<ExtArgs> | null;
    omit?: Prisma.FlagStatusOmit<ExtArgs> | null;
    include?: Prisma.FlagStatusInclude<ExtArgs> | null;
    where?: Prisma.FlagStatusWhereInput;
    orderBy?: Prisma.FlagStatusOrderByWithRelationInput | Prisma.FlagStatusOrderByWithRelationInput[];
    cursor?: Prisma.FlagStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FlagStatusScalarFieldEnum | Prisma.FlagStatusScalarFieldEnum[];
};
export type FeatureFlagDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureFlagSelect<ExtArgs> | null;
    omit?: Prisma.FeatureFlagOmit<ExtArgs> | null;
    include?: Prisma.FeatureFlagInclude<ExtArgs> | null;
};
