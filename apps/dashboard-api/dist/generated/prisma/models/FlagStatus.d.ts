import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FlagStatusModel = runtime.Types.Result.DefaultSelection<Prisma.$FlagStatusPayload>;
export type AggregateFlagStatus = {
    _count: FlagStatusCountAggregateOutputType | null;
    _min: FlagStatusMinAggregateOutputType | null;
    _max: FlagStatusMaxAggregateOutputType | null;
};
export type FlagStatusMinAggregateOutputType = {
    id: string | null;
    environmentId: string | null;
    flagId: string | null;
    isEnabled: boolean | null;
};
export type FlagStatusMaxAggregateOutputType = {
    id: string | null;
    environmentId: string | null;
    flagId: string | null;
    isEnabled: boolean | null;
};
export type FlagStatusCountAggregateOutputType = {
    id: number;
    environmentId: number;
    flagId: number;
    isEnabled: number;
    rules: number;
    _all: number;
};
export type FlagStatusMinAggregateInputType = {
    id?: true;
    environmentId?: true;
    flagId?: true;
    isEnabled?: true;
};
export type FlagStatusMaxAggregateInputType = {
    id?: true;
    environmentId?: true;
    flagId?: true;
    isEnabled?: true;
};
export type FlagStatusCountAggregateInputType = {
    id?: true;
    environmentId?: true;
    flagId?: true;
    isEnabled?: true;
    rules?: true;
    _all?: true;
};
export type FlagStatusAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FlagStatusWhereInput;
    orderBy?: Prisma.FlagStatusOrderByWithRelationInput | Prisma.FlagStatusOrderByWithRelationInput[];
    cursor?: Prisma.FlagStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FlagStatusCountAggregateInputType;
    _min?: FlagStatusMinAggregateInputType;
    _max?: FlagStatusMaxAggregateInputType;
};
export type GetFlagStatusAggregateType<T extends FlagStatusAggregateArgs> = {
    [P in keyof T & keyof AggregateFlagStatus]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFlagStatus[P]> : Prisma.GetScalarType<T[P], AggregateFlagStatus[P]>;
};
export type FlagStatusGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FlagStatusWhereInput;
    orderBy?: Prisma.FlagStatusOrderByWithAggregationInput | Prisma.FlagStatusOrderByWithAggregationInput[];
    by: Prisma.FlagStatusScalarFieldEnum[] | Prisma.FlagStatusScalarFieldEnum;
    having?: Prisma.FlagStatusScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FlagStatusCountAggregateInputType | true;
    _min?: FlagStatusMinAggregateInputType;
    _max?: FlagStatusMaxAggregateInputType;
};
export type FlagStatusGroupByOutputType = {
    id: string;
    environmentId: string;
    flagId: string;
    isEnabled: boolean;
    rules: runtime.JsonValue | null;
    _count: FlagStatusCountAggregateOutputType | null;
    _min: FlagStatusMinAggregateOutputType | null;
    _max: FlagStatusMaxAggregateOutputType | null;
};
export type GetFlagStatusGroupByPayload<T extends FlagStatusGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FlagStatusGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FlagStatusGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FlagStatusGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FlagStatusGroupByOutputType[P]>;
}>>;
export type FlagStatusWhereInput = {
    AND?: Prisma.FlagStatusWhereInput | Prisma.FlagStatusWhereInput[];
    OR?: Prisma.FlagStatusWhereInput[];
    NOT?: Prisma.FlagStatusWhereInput | Prisma.FlagStatusWhereInput[];
    id?: Prisma.StringFilter<"FlagStatus"> | string;
    environmentId?: Prisma.StringFilter<"FlagStatus"> | string;
    flagId?: Prisma.StringFilter<"FlagStatus"> | string;
    isEnabled?: Prisma.BoolFilter<"FlagStatus"> | boolean;
    rules?: Prisma.JsonNullableFilter<"FlagStatus">;
    environment?: Prisma.XOR<Prisma.EnvironmentScalarRelationFilter, Prisma.EnvironmentWhereInput>;
    flag?: Prisma.XOR<Prisma.FeatureFlagScalarRelationFilter, Prisma.FeatureFlagWhereInput>;
};
export type FlagStatusOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    environmentId?: Prisma.SortOrder;
    flagId?: Prisma.SortOrder;
    isEnabled?: Prisma.SortOrder;
    rules?: Prisma.SortOrderInput | Prisma.SortOrder;
    environment?: Prisma.EnvironmentOrderByWithRelationInput;
    flag?: Prisma.FeatureFlagOrderByWithRelationInput;
};
export type FlagStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    environmentId_flagId?: Prisma.FlagStatusEnvironmentIdFlagIdCompoundUniqueInput;
    AND?: Prisma.FlagStatusWhereInput | Prisma.FlagStatusWhereInput[];
    OR?: Prisma.FlagStatusWhereInput[];
    NOT?: Prisma.FlagStatusWhereInput | Prisma.FlagStatusWhereInput[];
    environmentId?: Prisma.StringFilter<"FlagStatus"> | string;
    flagId?: Prisma.StringFilter<"FlagStatus"> | string;
    isEnabled?: Prisma.BoolFilter<"FlagStatus"> | boolean;
    rules?: Prisma.JsonNullableFilter<"FlagStatus">;
    environment?: Prisma.XOR<Prisma.EnvironmentScalarRelationFilter, Prisma.EnvironmentWhereInput>;
    flag?: Prisma.XOR<Prisma.FeatureFlagScalarRelationFilter, Prisma.FeatureFlagWhereInput>;
}, "id" | "environmentId_flagId">;
export type FlagStatusOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    environmentId?: Prisma.SortOrder;
    flagId?: Prisma.SortOrder;
    isEnabled?: Prisma.SortOrder;
    rules?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.FlagStatusCountOrderByAggregateInput;
    _max?: Prisma.FlagStatusMaxOrderByAggregateInput;
    _min?: Prisma.FlagStatusMinOrderByAggregateInput;
};
export type FlagStatusScalarWhereWithAggregatesInput = {
    AND?: Prisma.FlagStatusScalarWhereWithAggregatesInput | Prisma.FlagStatusScalarWhereWithAggregatesInput[];
    OR?: Prisma.FlagStatusScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FlagStatusScalarWhereWithAggregatesInput | Prisma.FlagStatusScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FlagStatus"> | string;
    environmentId?: Prisma.StringWithAggregatesFilter<"FlagStatus"> | string;
    flagId?: Prisma.StringWithAggregatesFilter<"FlagStatus"> | string;
    isEnabled?: Prisma.BoolWithAggregatesFilter<"FlagStatus"> | boolean;
    rules?: Prisma.JsonNullableWithAggregatesFilter<"FlagStatus">;
};
export type FlagStatusCreateInput = {
    id?: string;
    isEnabled?: boolean;
    rules?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    environment: Prisma.EnvironmentCreateNestedOneWithoutStatusesInput;
    flag: Prisma.FeatureFlagCreateNestedOneWithoutStatusesInput;
};
export type FlagStatusUncheckedCreateInput = {
    id?: string;
    environmentId: string;
    flagId: string;
    isEnabled?: boolean;
    rules?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type FlagStatusUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rules?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    environment?: Prisma.EnvironmentUpdateOneRequiredWithoutStatusesNestedInput;
    flag?: Prisma.FeatureFlagUpdateOneRequiredWithoutStatusesNestedInput;
};
export type FlagStatusUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    environmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    flagId?: Prisma.StringFieldUpdateOperationsInput | string;
    isEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rules?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type FlagStatusCreateManyInput = {
    id?: string;
    environmentId: string;
    flagId: string;
    isEnabled?: boolean;
    rules?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type FlagStatusUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rules?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type FlagStatusUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    environmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    flagId?: Prisma.StringFieldUpdateOperationsInput | string;
    isEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rules?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type FlagStatusListRelationFilter = {
    every?: Prisma.FlagStatusWhereInput;
    some?: Prisma.FlagStatusWhereInput;
    none?: Prisma.FlagStatusWhereInput;
};
export type FlagStatusOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FlagStatusEnvironmentIdFlagIdCompoundUniqueInput = {
    environmentId: string;
    flagId: string;
};
export type FlagStatusCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    environmentId?: Prisma.SortOrder;
    flagId?: Prisma.SortOrder;
    isEnabled?: Prisma.SortOrder;
    rules?: Prisma.SortOrder;
};
export type FlagStatusMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    environmentId?: Prisma.SortOrder;
    flagId?: Prisma.SortOrder;
    isEnabled?: Prisma.SortOrder;
};
export type FlagStatusMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    environmentId?: Prisma.SortOrder;
    flagId?: Prisma.SortOrder;
    isEnabled?: Prisma.SortOrder;
};
export type FlagStatusCreateNestedManyWithoutEnvironmentInput = {
    create?: Prisma.XOR<Prisma.FlagStatusCreateWithoutEnvironmentInput, Prisma.FlagStatusUncheckedCreateWithoutEnvironmentInput> | Prisma.FlagStatusCreateWithoutEnvironmentInput[] | Prisma.FlagStatusUncheckedCreateWithoutEnvironmentInput[];
    connectOrCreate?: Prisma.FlagStatusCreateOrConnectWithoutEnvironmentInput | Prisma.FlagStatusCreateOrConnectWithoutEnvironmentInput[];
    createMany?: Prisma.FlagStatusCreateManyEnvironmentInputEnvelope;
    connect?: Prisma.FlagStatusWhereUniqueInput | Prisma.FlagStatusWhereUniqueInput[];
};
export type FlagStatusUncheckedCreateNestedManyWithoutEnvironmentInput = {
    create?: Prisma.XOR<Prisma.FlagStatusCreateWithoutEnvironmentInput, Prisma.FlagStatusUncheckedCreateWithoutEnvironmentInput> | Prisma.FlagStatusCreateWithoutEnvironmentInput[] | Prisma.FlagStatusUncheckedCreateWithoutEnvironmentInput[];
    connectOrCreate?: Prisma.FlagStatusCreateOrConnectWithoutEnvironmentInput | Prisma.FlagStatusCreateOrConnectWithoutEnvironmentInput[];
    createMany?: Prisma.FlagStatusCreateManyEnvironmentInputEnvelope;
    connect?: Prisma.FlagStatusWhereUniqueInput | Prisma.FlagStatusWhereUniqueInput[];
};
export type FlagStatusUpdateManyWithoutEnvironmentNestedInput = {
    create?: Prisma.XOR<Prisma.FlagStatusCreateWithoutEnvironmentInput, Prisma.FlagStatusUncheckedCreateWithoutEnvironmentInput> | Prisma.FlagStatusCreateWithoutEnvironmentInput[] | Prisma.FlagStatusUncheckedCreateWithoutEnvironmentInput[];
    connectOrCreate?: Prisma.FlagStatusCreateOrConnectWithoutEnvironmentInput | Prisma.FlagStatusCreateOrConnectWithoutEnvironmentInput[];
    upsert?: Prisma.FlagStatusUpsertWithWhereUniqueWithoutEnvironmentInput | Prisma.FlagStatusUpsertWithWhereUniqueWithoutEnvironmentInput[];
    createMany?: Prisma.FlagStatusCreateManyEnvironmentInputEnvelope;
    set?: Prisma.FlagStatusWhereUniqueInput | Prisma.FlagStatusWhereUniqueInput[];
    disconnect?: Prisma.FlagStatusWhereUniqueInput | Prisma.FlagStatusWhereUniqueInput[];
    delete?: Prisma.FlagStatusWhereUniqueInput | Prisma.FlagStatusWhereUniqueInput[];
    connect?: Prisma.FlagStatusWhereUniqueInput | Prisma.FlagStatusWhereUniqueInput[];
    update?: Prisma.FlagStatusUpdateWithWhereUniqueWithoutEnvironmentInput | Prisma.FlagStatusUpdateWithWhereUniqueWithoutEnvironmentInput[];
    updateMany?: Prisma.FlagStatusUpdateManyWithWhereWithoutEnvironmentInput | Prisma.FlagStatusUpdateManyWithWhereWithoutEnvironmentInput[];
    deleteMany?: Prisma.FlagStatusScalarWhereInput | Prisma.FlagStatusScalarWhereInput[];
};
export type FlagStatusUncheckedUpdateManyWithoutEnvironmentNestedInput = {
    create?: Prisma.XOR<Prisma.FlagStatusCreateWithoutEnvironmentInput, Prisma.FlagStatusUncheckedCreateWithoutEnvironmentInput> | Prisma.FlagStatusCreateWithoutEnvironmentInput[] | Prisma.FlagStatusUncheckedCreateWithoutEnvironmentInput[];
    connectOrCreate?: Prisma.FlagStatusCreateOrConnectWithoutEnvironmentInput | Prisma.FlagStatusCreateOrConnectWithoutEnvironmentInput[];
    upsert?: Prisma.FlagStatusUpsertWithWhereUniqueWithoutEnvironmentInput | Prisma.FlagStatusUpsertWithWhereUniqueWithoutEnvironmentInput[];
    createMany?: Prisma.FlagStatusCreateManyEnvironmentInputEnvelope;
    set?: Prisma.FlagStatusWhereUniqueInput | Prisma.FlagStatusWhereUniqueInput[];
    disconnect?: Prisma.FlagStatusWhereUniqueInput | Prisma.FlagStatusWhereUniqueInput[];
    delete?: Prisma.FlagStatusWhereUniqueInput | Prisma.FlagStatusWhereUniqueInput[];
    connect?: Prisma.FlagStatusWhereUniqueInput | Prisma.FlagStatusWhereUniqueInput[];
    update?: Prisma.FlagStatusUpdateWithWhereUniqueWithoutEnvironmentInput | Prisma.FlagStatusUpdateWithWhereUniqueWithoutEnvironmentInput[];
    updateMany?: Prisma.FlagStatusUpdateManyWithWhereWithoutEnvironmentInput | Prisma.FlagStatusUpdateManyWithWhereWithoutEnvironmentInput[];
    deleteMany?: Prisma.FlagStatusScalarWhereInput | Prisma.FlagStatusScalarWhereInput[];
};
export type FlagStatusCreateNestedManyWithoutFlagInput = {
    create?: Prisma.XOR<Prisma.FlagStatusCreateWithoutFlagInput, Prisma.FlagStatusUncheckedCreateWithoutFlagInput> | Prisma.FlagStatusCreateWithoutFlagInput[] | Prisma.FlagStatusUncheckedCreateWithoutFlagInput[];
    connectOrCreate?: Prisma.FlagStatusCreateOrConnectWithoutFlagInput | Prisma.FlagStatusCreateOrConnectWithoutFlagInput[];
    createMany?: Prisma.FlagStatusCreateManyFlagInputEnvelope;
    connect?: Prisma.FlagStatusWhereUniqueInput | Prisma.FlagStatusWhereUniqueInput[];
};
export type FlagStatusUncheckedCreateNestedManyWithoutFlagInput = {
    create?: Prisma.XOR<Prisma.FlagStatusCreateWithoutFlagInput, Prisma.FlagStatusUncheckedCreateWithoutFlagInput> | Prisma.FlagStatusCreateWithoutFlagInput[] | Prisma.FlagStatusUncheckedCreateWithoutFlagInput[];
    connectOrCreate?: Prisma.FlagStatusCreateOrConnectWithoutFlagInput | Prisma.FlagStatusCreateOrConnectWithoutFlagInput[];
    createMany?: Prisma.FlagStatusCreateManyFlagInputEnvelope;
    connect?: Prisma.FlagStatusWhereUniqueInput | Prisma.FlagStatusWhereUniqueInput[];
};
export type FlagStatusUpdateManyWithoutFlagNestedInput = {
    create?: Prisma.XOR<Prisma.FlagStatusCreateWithoutFlagInput, Prisma.FlagStatusUncheckedCreateWithoutFlagInput> | Prisma.FlagStatusCreateWithoutFlagInput[] | Prisma.FlagStatusUncheckedCreateWithoutFlagInput[];
    connectOrCreate?: Prisma.FlagStatusCreateOrConnectWithoutFlagInput | Prisma.FlagStatusCreateOrConnectWithoutFlagInput[];
    upsert?: Prisma.FlagStatusUpsertWithWhereUniqueWithoutFlagInput | Prisma.FlagStatusUpsertWithWhereUniqueWithoutFlagInput[];
    createMany?: Prisma.FlagStatusCreateManyFlagInputEnvelope;
    set?: Prisma.FlagStatusWhereUniqueInput | Prisma.FlagStatusWhereUniqueInput[];
    disconnect?: Prisma.FlagStatusWhereUniqueInput | Prisma.FlagStatusWhereUniqueInput[];
    delete?: Prisma.FlagStatusWhereUniqueInput | Prisma.FlagStatusWhereUniqueInput[];
    connect?: Prisma.FlagStatusWhereUniqueInput | Prisma.FlagStatusWhereUniqueInput[];
    update?: Prisma.FlagStatusUpdateWithWhereUniqueWithoutFlagInput | Prisma.FlagStatusUpdateWithWhereUniqueWithoutFlagInput[];
    updateMany?: Prisma.FlagStatusUpdateManyWithWhereWithoutFlagInput | Prisma.FlagStatusUpdateManyWithWhereWithoutFlagInput[];
    deleteMany?: Prisma.FlagStatusScalarWhereInput | Prisma.FlagStatusScalarWhereInput[];
};
export type FlagStatusUncheckedUpdateManyWithoutFlagNestedInput = {
    create?: Prisma.XOR<Prisma.FlagStatusCreateWithoutFlagInput, Prisma.FlagStatusUncheckedCreateWithoutFlagInput> | Prisma.FlagStatusCreateWithoutFlagInput[] | Prisma.FlagStatusUncheckedCreateWithoutFlagInput[];
    connectOrCreate?: Prisma.FlagStatusCreateOrConnectWithoutFlagInput | Prisma.FlagStatusCreateOrConnectWithoutFlagInput[];
    upsert?: Prisma.FlagStatusUpsertWithWhereUniqueWithoutFlagInput | Prisma.FlagStatusUpsertWithWhereUniqueWithoutFlagInput[];
    createMany?: Prisma.FlagStatusCreateManyFlagInputEnvelope;
    set?: Prisma.FlagStatusWhereUniqueInput | Prisma.FlagStatusWhereUniqueInput[];
    disconnect?: Prisma.FlagStatusWhereUniqueInput | Prisma.FlagStatusWhereUniqueInput[];
    delete?: Prisma.FlagStatusWhereUniqueInput | Prisma.FlagStatusWhereUniqueInput[];
    connect?: Prisma.FlagStatusWhereUniqueInput | Prisma.FlagStatusWhereUniqueInput[];
    update?: Prisma.FlagStatusUpdateWithWhereUniqueWithoutFlagInput | Prisma.FlagStatusUpdateWithWhereUniqueWithoutFlagInput[];
    updateMany?: Prisma.FlagStatusUpdateManyWithWhereWithoutFlagInput | Prisma.FlagStatusUpdateManyWithWhereWithoutFlagInput[];
    deleteMany?: Prisma.FlagStatusScalarWhereInput | Prisma.FlagStatusScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type FlagStatusCreateWithoutEnvironmentInput = {
    id?: string;
    isEnabled?: boolean;
    rules?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    flag: Prisma.FeatureFlagCreateNestedOneWithoutStatusesInput;
};
export type FlagStatusUncheckedCreateWithoutEnvironmentInput = {
    id?: string;
    flagId: string;
    isEnabled?: boolean;
    rules?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type FlagStatusCreateOrConnectWithoutEnvironmentInput = {
    where: Prisma.FlagStatusWhereUniqueInput;
    create: Prisma.XOR<Prisma.FlagStatusCreateWithoutEnvironmentInput, Prisma.FlagStatusUncheckedCreateWithoutEnvironmentInput>;
};
export type FlagStatusCreateManyEnvironmentInputEnvelope = {
    data: Prisma.FlagStatusCreateManyEnvironmentInput | Prisma.FlagStatusCreateManyEnvironmentInput[];
    skipDuplicates?: boolean;
};
export type FlagStatusUpsertWithWhereUniqueWithoutEnvironmentInput = {
    where: Prisma.FlagStatusWhereUniqueInput;
    update: Prisma.XOR<Prisma.FlagStatusUpdateWithoutEnvironmentInput, Prisma.FlagStatusUncheckedUpdateWithoutEnvironmentInput>;
    create: Prisma.XOR<Prisma.FlagStatusCreateWithoutEnvironmentInput, Prisma.FlagStatusUncheckedCreateWithoutEnvironmentInput>;
};
export type FlagStatusUpdateWithWhereUniqueWithoutEnvironmentInput = {
    where: Prisma.FlagStatusWhereUniqueInput;
    data: Prisma.XOR<Prisma.FlagStatusUpdateWithoutEnvironmentInput, Prisma.FlagStatusUncheckedUpdateWithoutEnvironmentInput>;
};
export type FlagStatusUpdateManyWithWhereWithoutEnvironmentInput = {
    where: Prisma.FlagStatusScalarWhereInput;
    data: Prisma.XOR<Prisma.FlagStatusUpdateManyMutationInput, Prisma.FlagStatusUncheckedUpdateManyWithoutEnvironmentInput>;
};
export type FlagStatusScalarWhereInput = {
    AND?: Prisma.FlagStatusScalarWhereInput | Prisma.FlagStatusScalarWhereInput[];
    OR?: Prisma.FlagStatusScalarWhereInput[];
    NOT?: Prisma.FlagStatusScalarWhereInput | Prisma.FlagStatusScalarWhereInput[];
    id?: Prisma.StringFilter<"FlagStatus"> | string;
    environmentId?: Prisma.StringFilter<"FlagStatus"> | string;
    flagId?: Prisma.StringFilter<"FlagStatus"> | string;
    isEnabled?: Prisma.BoolFilter<"FlagStatus"> | boolean;
    rules?: Prisma.JsonNullableFilter<"FlagStatus">;
};
export type FlagStatusCreateWithoutFlagInput = {
    id?: string;
    isEnabled?: boolean;
    rules?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    environment: Prisma.EnvironmentCreateNestedOneWithoutStatusesInput;
};
export type FlagStatusUncheckedCreateWithoutFlagInput = {
    id?: string;
    environmentId: string;
    isEnabled?: boolean;
    rules?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type FlagStatusCreateOrConnectWithoutFlagInput = {
    where: Prisma.FlagStatusWhereUniqueInput;
    create: Prisma.XOR<Prisma.FlagStatusCreateWithoutFlagInput, Prisma.FlagStatusUncheckedCreateWithoutFlagInput>;
};
export type FlagStatusCreateManyFlagInputEnvelope = {
    data: Prisma.FlagStatusCreateManyFlagInput | Prisma.FlagStatusCreateManyFlagInput[];
    skipDuplicates?: boolean;
};
export type FlagStatusUpsertWithWhereUniqueWithoutFlagInput = {
    where: Prisma.FlagStatusWhereUniqueInput;
    update: Prisma.XOR<Prisma.FlagStatusUpdateWithoutFlagInput, Prisma.FlagStatusUncheckedUpdateWithoutFlagInput>;
    create: Prisma.XOR<Prisma.FlagStatusCreateWithoutFlagInput, Prisma.FlagStatusUncheckedCreateWithoutFlagInput>;
};
export type FlagStatusUpdateWithWhereUniqueWithoutFlagInput = {
    where: Prisma.FlagStatusWhereUniqueInput;
    data: Prisma.XOR<Prisma.FlagStatusUpdateWithoutFlagInput, Prisma.FlagStatusUncheckedUpdateWithoutFlagInput>;
};
export type FlagStatusUpdateManyWithWhereWithoutFlagInput = {
    where: Prisma.FlagStatusScalarWhereInput;
    data: Prisma.XOR<Prisma.FlagStatusUpdateManyMutationInput, Prisma.FlagStatusUncheckedUpdateManyWithoutFlagInput>;
};
export type FlagStatusCreateManyEnvironmentInput = {
    id?: string;
    flagId: string;
    isEnabled?: boolean;
    rules?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type FlagStatusUpdateWithoutEnvironmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rules?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    flag?: Prisma.FeatureFlagUpdateOneRequiredWithoutStatusesNestedInput;
};
export type FlagStatusUncheckedUpdateWithoutEnvironmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    flagId?: Prisma.StringFieldUpdateOperationsInput | string;
    isEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rules?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type FlagStatusUncheckedUpdateManyWithoutEnvironmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    flagId?: Prisma.StringFieldUpdateOperationsInput | string;
    isEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rules?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type FlagStatusCreateManyFlagInput = {
    id?: string;
    environmentId: string;
    isEnabled?: boolean;
    rules?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type FlagStatusUpdateWithoutFlagInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rules?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    environment?: Prisma.EnvironmentUpdateOneRequiredWithoutStatusesNestedInput;
};
export type FlagStatusUncheckedUpdateWithoutFlagInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    environmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    isEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rules?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type FlagStatusUncheckedUpdateManyWithoutFlagInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    environmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    isEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rules?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type FlagStatusSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    environmentId?: boolean;
    flagId?: boolean;
    isEnabled?: boolean;
    rules?: boolean;
    environment?: boolean | Prisma.EnvironmentDefaultArgs<ExtArgs>;
    flag?: boolean | Prisma.FeatureFlagDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["flagStatus"]>;
export type FlagStatusSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    environmentId?: boolean;
    flagId?: boolean;
    isEnabled?: boolean;
    rules?: boolean;
    environment?: boolean | Prisma.EnvironmentDefaultArgs<ExtArgs>;
    flag?: boolean | Prisma.FeatureFlagDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["flagStatus"]>;
export type FlagStatusSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    environmentId?: boolean;
    flagId?: boolean;
    isEnabled?: boolean;
    rules?: boolean;
    environment?: boolean | Prisma.EnvironmentDefaultArgs<ExtArgs>;
    flag?: boolean | Prisma.FeatureFlagDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["flagStatus"]>;
export type FlagStatusSelectScalar = {
    id?: boolean;
    environmentId?: boolean;
    flagId?: boolean;
    isEnabled?: boolean;
    rules?: boolean;
};
export type FlagStatusOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "environmentId" | "flagId" | "isEnabled" | "rules", ExtArgs["result"]["flagStatus"]>;
export type FlagStatusInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    environment?: boolean | Prisma.EnvironmentDefaultArgs<ExtArgs>;
    flag?: boolean | Prisma.FeatureFlagDefaultArgs<ExtArgs>;
};
export type FlagStatusIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    environment?: boolean | Prisma.EnvironmentDefaultArgs<ExtArgs>;
    flag?: boolean | Prisma.FeatureFlagDefaultArgs<ExtArgs>;
};
export type FlagStatusIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    environment?: boolean | Prisma.EnvironmentDefaultArgs<ExtArgs>;
    flag?: boolean | Prisma.FeatureFlagDefaultArgs<ExtArgs>;
};
export type $FlagStatusPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FlagStatus";
    objects: {
        environment: Prisma.$EnvironmentPayload<ExtArgs>;
        flag: Prisma.$FeatureFlagPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        environmentId: string;
        flagId: string;
        isEnabled: boolean;
        rules: runtime.JsonValue | null;
    }, ExtArgs["result"]["flagStatus"]>;
    composites: {};
};
export type FlagStatusGetPayload<S extends boolean | null | undefined | FlagStatusDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FlagStatusPayload, S>;
export type FlagStatusCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FlagStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FlagStatusCountAggregateInputType | true;
};
export interface FlagStatusDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FlagStatus'];
        meta: {
            name: 'FlagStatus';
        };
    };
    findUnique<T extends FlagStatusFindUniqueArgs>(args: Prisma.SelectSubset<T, FlagStatusFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FlagStatusClient<runtime.Types.Result.GetResult<Prisma.$FlagStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FlagStatusFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FlagStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FlagStatusClient<runtime.Types.Result.GetResult<Prisma.$FlagStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FlagStatusFindFirstArgs>(args?: Prisma.SelectSubset<T, FlagStatusFindFirstArgs<ExtArgs>>): Prisma.Prisma__FlagStatusClient<runtime.Types.Result.GetResult<Prisma.$FlagStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FlagStatusFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FlagStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FlagStatusClient<runtime.Types.Result.GetResult<Prisma.$FlagStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FlagStatusFindManyArgs>(args?: Prisma.SelectSubset<T, FlagStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FlagStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FlagStatusCreateArgs>(args: Prisma.SelectSubset<T, FlagStatusCreateArgs<ExtArgs>>): Prisma.Prisma__FlagStatusClient<runtime.Types.Result.GetResult<Prisma.$FlagStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FlagStatusCreateManyArgs>(args?: Prisma.SelectSubset<T, FlagStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FlagStatusCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FlagStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FlagStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FlagStatusDeleteArgs>(args: Prisma.SelectSubset<T, FlagStatusDeleteArgs<ExtArgs>>): Prisma.Prisma__FlagStatusClient<runtime.Types.Result.GetResult<Prisma.$FlagStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FlagStatusUpdateArgs>(args: Prisma.SelectSubset<T, FlagStatusUpdateArgs<ExtArgs>>): Prisma.Prisma__FlagStatusClient<runtime.Types.Result.GetResult<Prisma.$FlagStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FlagStatusDeleteManyArgs>(args?: Prisma.SelectSubset<T, FlagStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FlagStatusUpdateManyArgs>(args: Prisma.SelectSubset<T, FlagStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FlagStatusUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FlagStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FlagStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FlagStatusUpsertArgs>(args: Prisma.SelectSubset<T, FlagStatusUpsertArgs<ExtArgs>>): Prisma.Prisma__FlagStatusClient<runtime.Types.Result.GetResult<Prisma.$FlagStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FlagStatusCountArgs>(args?: Prisma.Subset<T, FlagStatusCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FlagStatusCountAggregateOutputType> : number>;
    aggregate<T extends FlagStatusAggregateArgs>(args: Prisma.Subset<T, FlagStatusAggregateArgs>): Prisma.PrismaPromise<GetFlagStatusAggregateType<T>>;
    groupBy<T extends FlagStatusGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FlagStatusGroupByArgs['orderBy'];
    } : {
        orderBy?: FlagStatusGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FlagStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlagStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FlagStatusFieldRefs;
}
export interface Prisma__FlagStatusClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    environment<T extends Prisma.EnvironmentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EnvironmentDefaultArgs<ExtArgs>>): Prisma.Prisma__EnvironmentClient<runtime.Types.Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    flag<T extends Prisma.FeatureFlagDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FeatureFlagDefaultArgs<ExtArgs>>): Prisma.Prisma__FeatureFlagClient<runtime.Types.Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FlagStatusFieldRefs {
    readonly id: Prisma.FieldRef<"FlagStatus", 'String'>;
    readonly environmentId: Prisma.FieldRef<"FlagStatus", 'String'>;
    readonly flagId: Prisma.FieldRef<"FlagStatus", 'String'>;
    readonly isEnabled: Prisma.FieldRef<"FlagStatus", 'Boolean'>;
    readonly rules: Prisma.FieldRef<"FlagStatus", 'Json'>;
}
export type FlagStatusFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FlagStatusSelect<ExtArgs> | null;
    omit?: Prisma.FlagStatusOmit<ExtArgs> | null;
    include?: Prisma.FlagStatusInclude<ExtArgs> | null;
    where: Prisma.FlagStatusWhereUniqueInput;
};
export type FlagStatusFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FlagStatusSelect<ExtArgs> | null;
    omit?: Prisma.FlagStatusOmit<ExtArgs> | null;
    include?: Prisma.FlagStatusInclude<ExtArgs> | null;
    where: Prisma.FlagStatusWhereUniqueInput;
};
export type FlagStatusFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FlagStatusFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FlagStatusFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FlagStatusCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FlagStatusSelect<ExtArgs> | null;
    omit?: Prisma.FlagStatusOmit<ExtArgs> | null;
    include?: Prisma.FlagStatusInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FlagStatusCreateInput, Prisma.FlagStatusUncheckedCreateInput>;
};
export type FlagStatusCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FlagStatusCreateManyInput | Prisma.FlagStatusCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FlagStatusCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FlagStatusSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FlagStatusOmit<ExtArgs> | null;
    data: Prisma.FlagStatusCreateManyInput | Prisma.FlagStatusCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FlagStatusIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FlagStatusUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FlagStatusSelect<ExtArgs> | null;
    omit?: Prisma.FlagStatusOmit<ExtArgs> | null;
    include?: Prisma.FlagStatusInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FlagStatusUpdateInput, Prisma.FlagStatusUncheckedUpdateInput>;
    where: Prisma.FlagStatusWhereUniqueInput;
};
export type FlagStatusUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FlagStatusUpdateManyMutationInput, Prisma.FlagStatusUncheckedUpdateManyInput>;
    where?: Prisma.FlagStatusWhereInput;
    limit?: number;
};
export type FlagStatusUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FlagStatusSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FlagStatusOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FlagStatusUpdateManyMutationInput, Prisma.FlagStatusUncheckedUpdateManyInput>;
    where?: Prisma.FlagStatusWhereInput;
    limit?: number;
    include?: Prisma.FlagStatusIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FlagStatusUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FlagStatusSelect<ExtArgs> | null;
    omit?: Prisma.FlagStatusOmit<ExtArgs> | null;
    include?: Prisma.FlagStatusInclude<ExtArgs> | null;
    where: Prisma.FlagStatusWhereUniqueInput;
    create: Prisma.XOR<Prisma.FlagStatusCreateInput, Prisma.FlagStatusUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FlagStatusUpdateInput, Prisma.FlagStatusUncheckedUpdateInput>;
};
export type FlagStatusDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FlagStatusSelect<ExtArgs> | null;
    omit?: Prisma.FlagStatusOmit<ExtArgs> | null;
    include?: Prisma.FlagStatusInclude<ExtArgs> | null;
    where: Prisma.FlagStatusWhereUniqueInput;
};
export type FlagStatusDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FlagStatusWhereInput;
    limit?: number;
};
export type FlagStatusDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FlagStatusSelect<ExtArgs> | null;
    omit?: Prisma.FlagStatusOmit<ExtArgs> | null;
    include?: Prisma.FlagStatusInclude<ExtArgs> | null;
};
