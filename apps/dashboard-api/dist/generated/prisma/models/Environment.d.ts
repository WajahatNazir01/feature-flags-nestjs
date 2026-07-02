import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EnvironmentModel = runtime.Types.Result.DefaultSelection<Prisma.$EnvironmentPayload>;
export type AggregateEnvironment = {
    _count: EnvironmentCountAggregateOutputType | null;
    _min: EnvironmentMinAggregateOutputType | null;
    _max: EnvironmentMaxAggregateOutputType | null;
};
export type EnvironmentMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    apiKey: string | null;
    tenantId: string | null;
    createdAt: Date | null;
};
export type EnvironmentMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    apiKey: string | null;
    tenantId: string | null;
    createdAt: Date | null;
};
export type EnvironmentCountAggregateOutputType = {
    id: number;
    name: number;
    apiKey: number;
    tenantId: number;
    createdAt: number;
    _all: number;
};
export type EnvironmentMinAggregateInputType = {
    id?: true;
    name?: true;
    apiKey?: true;
    tenantId?: true;
    createdAt?: true;
};
export type EnvironmentMaxAggregateInputType = {
    id?: true;
    name?: true;
    apiKey?: true;
    tenantId?: true;
    createdAt?: true;
};
export type EnvironmentCountAggregateInputType = {
    id?: true;
    name?: true;
    apiKey?: true;
    tenantId?: true;
    createdAt?: true;
    _all?: true;
};
export type EnvironmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnvironmentWhereInput;
    orderBy?: Prisma.EnvironmentOrderByWithRelationInput | Prisma.EnvironmentOrderByWithRelationInput[];
    cursor?: Prisma.EnvironmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EnvironmentCountAggregateInputType;
    _min?: EnvironmentMinAggregateInputType;
    _max?: EnvironmentMaxAggregateInputType;
};
export type GetEnvironmentAggregateType<T extends EnvironmentAggregateArgs> = {
    [P in keyof T & keyof AggregateEnvironment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEnvironment[P]> : Prisma.GetScalarType<T[P], AggregateEnvironment[P]>;
};
export type EnvironmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnvironmentWhereInput;
    orderBy?: Prisma.EnvironmentOrderByWithAggregationInput | Prisma.EnvironmentOrderByWithAggregationInput[];
    by: Prisma.EnvironmentScalarFieldEnum[] | Prisma.EnvironmentScalarFieldEnum;
    having?: Prisma.EnvironmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EnvironmentCountAggregateInputType | true;
    _min?: EnvironmentMinAggregateInputType;
    _max?: EnvironmentMaxAggregateInputType;
};
export type EnvironmentGroupByOutputType = {
    id: string;
    name: string;
    apiKey: string;
    tenantId: string;
    createdAt: Date;
    _count: EnvironmentCountAggregateOutputType | null;
    _min: EnvironmentMinAggregateOutputType | null;
    _max: EnvironmentMaxAggregateOutputType | null;
};
export type GetEnvironmentGroupByPayload<T extends EnvironmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EnvironmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EnvironmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EnvironmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EnvironmentGroupByOutputType[P]>;
}>>;
export type EnvironmentWhereInput = {
    AND?: Prisma.EnvironmentWhereInput | Prisma.EnvironmentWhereInput[];
    OR?: Prisma.EnvironmentWhereInput[];
    NOT?: Prisma.EnvironmentWhereInput | Prisma.EnvironmentWhereInput[];
    id?: Prisma.StringFilter<"Environment"> | string;
    name?: Prisma.StringFilter<"Environment"> | string;
    apiKey?: Prisma.StringFilter<"Environment"> | string;
    tenantId?: Prisma.StringFilter<"Environment"> | string;
    createdAt?: Prisma.DateTimeFilter<"Environment"> | Date | string;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    statuses?: Prisma.FlagStatusListRelationFilter;
};
export type EnvironmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    apiKey?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    tenant?: Prisma.TenantOrderByWithRelationInput;
    statuses?: Prisma.FlagStatusOrderByRelationAggregateInput;
};
export type EnvironmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    apiKey?: string;
    AND?: Prisma.EnvironmentWhereInput | Prisma.EnvironmentWhereInput[];
    OR?: Prisma.EnvironmentWhereInput[];
    NOT?: Prisma.EnvironmentWhereInput | Prisma.EnvironmentWhereInput[];
    name?: Prisma.StringFilter<"Environment"> | string;
    tenantId?: Prisma.StringFilter<"Environment"> | string;
    createdAt?: Prisma.DateTimeFilter<"Environment"> | Date | string;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    statuses?: Prisma.FlagStatusListRelationFilter;
}, "id" | "apiKey">;
export type EnvironmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    apiKey?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EnvironmentCountOrderByAggregateInput;
    _max?: Prisma.EnvironmentMaxOrderByAggregateInput;
    _min?: Prisma.EnvironmentMinOrderByAggregateInput;
};
export type EnvironmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.EnvironmentScalarWhereWithAggregatesInput | Prisma.EnvironmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.EnvironmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EnvironmentScalarWhereWithAggregatesInput | Prisma.EnvironmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Environment"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Environment"> | string;
    apiKey?: Prisma.StringWithAggregatesFilter<"Environment"> | string;
    tenantId?: Prisma.StringWithAggregatesFilter<"Environment"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Environment"> | Date | string;
};
export type EnvironmentCreateInput = {
    id?: string;
    name: string;
    apiKey?: string;
    createdAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutEnvironmentsInput;
    statuses?: Prisma.FlagStatusCreateNestedManyWithoutEnvironmentInput;
};
export type EnvironmentUncheckedCreateInput = {
    id?: string;
    name: string;
    apiKey?: string;
    tenantId: string;
    createdAt?: Date | string;
    statuses?: Prisma.FlagStatusUncheckedCreateNestedManyWithoutEnvironmentInput;
};
export type EnvironmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    apiKey?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutEnvironmentsNestedInput;
    statuses?: Prisma.FlagStatusUpdateManyWithoutEnvironmentNestedInput;
};
export type EnvironmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    apiKey?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statuses?: Prisma.FlagStatusUncheckedUpdateManyWithoutEnvironmentNestedInput;
};
export type EnvironmentCreateManyInput = {
    id?: string;
    name: string;
    apiKey?: string;
    tenantId: string;
    createdAt?: Date | string;
};
export type EnvironmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    apiKey?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnvironmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    apiKey?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnvironmentListRelationFilter = {
    every?: Prisma.EnvironmentWhereInput;
    some?: Prisma.EnvironmentWhereInput;
    none?: Prisma.EnvironmentWhereInput;
};
export type EnvironmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EnvironmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    apiKey?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EnvironmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    apiKey?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EnvironmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    apiKey?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EnvironmentScalarRelationFilter = {
    is?: Prisma.EnvironmentWhereInput;
    isNot?: Prisma.EnvironmentWhereInput;
};
export type EnvironmentCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.EnvironmentCreateWithoutTenantInput, Prisma.EnvironmentUncheckedCreateWithoutTenantInput> | Prisma.EnvironmentCreateWithoutTenantInput[] | Prisma.EnvironmentUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.EnvironmentCreateOrConnectWithoutTenantInput | Prisma.EnvironmentCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.EnvironmentCreateManyTenantInputEnvelope;
    connect?: Prisma.EnvironmentWhereUniqueInput | Prisma.EnvironmentWhereUniqueInput[];
};
export type EnvironmentUncheckedCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.EnvironmentCreateWithoutTenantInput, Prisma.EnvironmentUncheckedCreateWithoutTenantInput> | Prisma.EnvironmentCreateWithoutTenantInput[] | Prisma.EnvironmentUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.EnvironmentCreateOrConnectWithoutTenantInput | Prisma.EnvironmentCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.EnvironmentCreateManyTenantInputEnvelope;
    connect?: Prisma.EnvironmentWhereUniqueInput | Prisma.EnvironmentWhereUniqueInput[];
};
export type EnvironmentUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.EnvironmentCreateWithoutTenantInput, Prisma.EnvironmentUncheckedCreateWithoutTenantInput> | Prisma.EnvironmentCreateWithoutTenantInput[] | Prisma.EnvironmentUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.EnvironmentCreateOrConnectWithoutTenantInput | Prisma.EnvironmentCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.EnvironmentUpsertWithWhereUniqueWithoutTenantInput | Prisma.EnvironmentUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.EnvironmentCreateManyTenantInputEnvelope;
    set?: Prisma.EnvironmentWhereUniqueInput | Prisma.EnvironmentWhereUniqueInput[];
    disconnect?: Prisma.EnvironmentWhereUniqueInput | Prisma.EnvironmentWhereUniqueInput[];
    delete?: Prisma.EnvironmentWhereUniqueInput | Prisma.EnvironmentWhereUniqueInput[];
    connect?: Prisma.EnvironmentWhereUniqueInput | Prisma.EnvironmentWhereUniqueInput[];
    update?: Prisma.EnvironmentUpdateWithWhereUniqueWithoutTenantInput | Prisma.EnvironmentUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.EnvironmentUpdateManyWithWhereWithoutTenantInput | Prisma.EnvironmentUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.EnvironmentScalarWhereInput | Prisma.EnvironmentScalarWhereInput[];
};
export type EnvironmentUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.EnvironmentCreateWithoutTenantInput, Prisma.EnvironmentUncheckedCreateWithoutTenantInput> | Prisma.EnvironmentCreateWithoutTenantInput[] | Prisma.EnvironmentUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.EnvironmentCreateOrConnectWithoutTenantInput | Prisma.EnvironmentCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.EnvironmentUpsertWithWhereUniqueWithoutTenantInput | Prisma.EnvironmentUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.EnvironmentCreateManyTenantInputEnvelope;
    set?: Prisma.EnvironmentWhereUniqueInput | Prisma.EnvironmentWhereUniqueInput[];
    disconnect?: Prisma.EnvironmentWhereUniqueInput | Prisma.EnvironmentWhereUniqueInput[];
    delete?: Prisma.EnvironmentWhereUniqueInput | Prisma.EnvironmentWhereUniqueInput[];
    connect?: Prisma.EnvironmentWhereUniqueInput | Prisma.EnvironmentWhereUniqueInput[];
    update?: Prisma.EnvironmentUpdateWithWhereUniqueWithoutTenantInput | Prisma.EnvironmentUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.EnvironmentUpdateManyWithWhereWithoutTenantInput | Prisma.EnvironmentUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.EnvironmentScalarWhereInput | Prisma.EnvironmentScalarWhereInput[];
};
export type EnvironmentCreateNestedOneWithoutStatusesInput = {
    create?: Prisma.XOR<Prisma.EnvironmentCreateWithoutStatusesInput, Prisma.EnvironmentUncheckedCreateWithoutStatusesInput>;
    connectOrCreate?: Prisma.EnvironmentCreateOrConnectWithoutStatusesInput;
    connect?: Prisma.EnvironmentWhereUniqueInput;
};
export type EnvironmentUpdateOneRequiredWithoutStatusesNestedInput = {
    create?: Prisma.XOR<Prisma.EnvironmentCreateWithoutStatusesInput, Prisma.EnvironmentUncheckedCreateWithoutStatusesInput>;
    connectOrCreate?: Prisma.EnvironmentCreateOrConnectWithoutStatusesInput;
    upsert?: Prisma.EnvironmentUpsertWithoutStatusesInput;
    connect?: Prisma.EnvironmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EnvironmentUpdateToOneWithWhereWithoutStatusesInput, Prisma.EnvironmentUpdateWithoutStatusesInput>, Prisma.EnvironmentUncheckedUpdateWithoutStatusesInput>;
};
export type EnvironmentCreateWithoutTenantInput = {
    id?: string;
    name: string;
    apiKey?: string;
    createdAt?: Date | string;
    statuses?: Prisma.FlagStatusCreateNestedManyWithoutEnvironmentInput;
};
export type EnvironmentUncheckedCreateWithoutTenantInput = {
    id?: string;
    name: string;
    apiKey?: string;
    createdAt?: Date | string;
    statuses?: Prisma.FlagStatusUncheckedCreateNestedManyWithoutEnvironmentInput;
};
export type EnvironmentCreateOrConnectWithoutTenantInput = {
    where: Prisma.EnvironmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.EnvironmentCreateWithoutTenantInput, Prisma.EnvironmentUncheckedCreateWithoutTenantInput>;
};
export type EnvironmentCreateManyTenantInputEnvelope = {
    data: Prisma.EnvironmentCreateManyTenantInput | Prisma.EnvironmentCreateManyTenantInput[];
    skipDuplicates?: boolean;
};
export type EnvironmentUpsertWithWhereUniqueWithoutTenantInput = {
    where: Prisma.EnvironmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.EnvironmentUpdateWithoutTenantInput, Prisma.EnvironmentUncheckedUpdateWithoutTenantInput>;
    create: Prisma.XOR<Prisma.EnvironmentCreateWithoutTenantInput, Prisma.EnvironmentUncheckedCreateWithoutTenantInput>;
};
export type EnvironmentUpdateWithWhereUniqueWithoutTenantInput = {
    where: Prisma.EnvironmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.EnvironmentUpdateWithoutTenantInput, Prisma.EnvironmentUncheckedUpdateWithoutTenantInput>;
};
export type EnvironmentUpdateManyWithWhereWithoutTenantInput = {
    where: Prisma.EnvironmentScalarWhereInput;
    data: Prisma.XOR<Prisma.EnvironmentUpdateManyMutationInput, Prisma.EnvironmentUncheckedUpdateManyWithoutTenantInput>;
};
export type EnvironmentScalarWhereInput = {
    AND?: Prisma.EnvironmentScalarWhereInput | Prisma.EnvironmentScalarWhereInput[];
    OR?: Prisma.EnvironmentScalarWhereInput[];
    NOT?: Prisma.EnvironmentScalarWhereInput | Prisma.EnvironmentScalarWhereInput[];
    id?: Prisma.StringFilter<"Environment"> | string;
    name?: Prisma.StringFilter<"Environment"> | string;
    apiKey?: Prisma.StringFilter<"Environment"> | string;
    tenantId?: Prisma.StringFilter<"Environment"> | string;
    createdAt?: Prisma.DateTimeFilter<"Environment"> | Date | string;
};
export type EnvironmentCreateWithoutStatusesInput = {
    id?: string;
    name: string;
    apiKey?: string;
    createdAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutEnvironmentsInput;
};
export type EnvironmentUncheckedCreateWithoutStatusesInput = {
    id?: string;
    name: string;
    apiKey?: string;
    tenantId: string;
    createdAt?: Date | string;
};
export type EnvironmentCreateOrConnectWithoutStatusesInput = {
    where: Prisma.EnvironmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.EnvironmentCreateWithoutStatusesInput, Prisma.EnvironmentUncheckedCreateWithoutStatusesInput>;
};
export type EnvironmentUpsertWithoutStatusesInput = {
    update: Prisma.XOR<Prisma.EnvironmentUpdateWithoutStatusesInput, Prisma.EnvironmentUncheckedUpdateWithoutStatusesInput>;
    create: Prisma.XOR<Prisma.EnvironmentCreateWithoutStatusesInput, Prisma.EnvironmentUncheckedCreateWithoutStatusesInput>;
    where?: Prisma.EnvironmentWhereInput;
};
export type EnvironmentUpdateToOneWithWhereWithoutStatusesInput = {
    where?: Prisma.EnvironmentWhereInput;
    data: Prisma.XOR<Prisma.EnvironmentUpdateWithoutStatusesInput, Prisma.EnvironmentUncheckedUpdateWithoutStatusesInput>;
};
export type EnvironmentUpdateWithoutStatusesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    apiKey?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutEnvironmentsNestedInput;
};
export type EnvironmentUncheckedUpdateWithoutStatusesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    apiKey?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnvironmentCreateManyTenantInput = {
    id?: string;
    name: string;
    apiKey?: string;
    createdAt?: Date | string;
};
export type EnvironmentUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    apiKey?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statuses?: Prisma.FlagStatusUpdateManyWithoutEnvironmentNestedInput;
};
export type EnvironmentUncheckedUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    apiKey?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statuses?: Prisma.FlagStatusUncheckedUpdateManyWithoutEnvironmentNestedInput;
};
export type EnvironmentUncheckedUpdateManyWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    apiKey?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnvironmentCountOutputType = {
    statuses: number;
};
export type EnvironmentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    statuses?: boolean | EnvironmentCountOutputTypeCountStatusesArgs;
};
export type EnvironmentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnvironmentCountOutputTypeSelect<ExtArgs> | null;
};
export type EnvironmentCountOutputTypeCountStatusesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FlagStatusWhereInput;
};
export type EnvironmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    apiKey?: boolean;
    tenantId?: boolean;
    createdAt?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    statuses?: boolean | Prisma.Environment$statusesArgs<ExtArgs>;
    _count?: boolean | Prisma.EnvironmentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["environment"]>;
export type EnvironmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    apiKey?: boolean;
    tenantId?: boolean;
    createdAt?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["environment"]>;
export type EnvironmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    apiKey?: boolean;
    tenantId?: boolean;
    createdAt?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["environment"]>;
export type EnvironmentSelectScalar = {
    id?: boolean;
    name?: boolean;
    apiKey?: boolean;
    tenantId?: boolean;
    createdAt?: boolean;
};
export type EnvironmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "apiKey" | "tenantId" | "createdAt", ExtArgs["result"]["environment"]>;
export type EnvironmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    statuses?: boolean | Prisma.Environment$statusesArgs<ExtArgs>;
    _count?: boolean | Prisma.EnvironmentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EnvironmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type EnvironmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type $EnvironmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Environment";
    objects: {
        tenant: Prisma.$TenantPayload<ExtArgs>;
        statuses: Prisma.$FlagStatusPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        apiKey: string;
        tenantId: string;
        createdAt: Date;
    }, ExtArgs["result"]["environment"]>;
    composites: {};
};
export type EnvironmentGetPayload<S extends boolean | null | undefined | EnvironmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EnvironmentPayload, S>;
export type EnvironmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EnvironmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EnvironmentCountAggregateInputType | true;
};
export interface EnvironmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Environment'];
        meta: {
            name: 'Environment';
        };
    };
    findUnique<T extends EnvironmentFindUniqueArgs>(args: Prisma.SelectSubset<T, EnvironmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EnvironmentClient<runtime.Types.Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EnvironmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EnvironmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EnvironmentClient<runtime.Types.Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EnvironmentFindFirstArgs>(args?: Prisma.SelectSubset<T, EnvironmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__EnvironmentClient<runtime.Types.Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EnvironmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EnvironmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EnvironmentClient<runtime.Types.Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EnvironmentFindManyArgs>(args?: Prisma.SelectSubset<T, EnvironmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EnvironmentCreateArgs>(args: Prisma.SelectSubset<T, EnvironmentCreateArgs<ExtArgs>>): Prisma.Prisma__EnvironmentClient<runtime.Types.Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EnvironmentCreateManyArgs>(args?: Prisma.SelectSubset<T, EnvironmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EnvironmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EnvironmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EnvironmentDeleteArgs>(args: Prisma.SelectSubset<T, EnvironmentDeleteArgs<ExtArgs>>): Prisma.Prisma__EnvironmentClient<runtime.Types.Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EnvironmentUpdateArgs>(args: Prisma.SelectSubset<T, EnvironmentUpdateArgs<ExtArgs>>): Prisma.Prisma__EnvironmentClient<runtime.Types.Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EnvironmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, EnvironmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EnvironmentUpdateManyArgs>(args: Prisma.SelectSubset<T, EnvironmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EnvironmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EnvironmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EnvironmentUpsertArgs>(args: Prisma.SelectSubset<T, EnvironmentUpsertArgs<ExtArgs>>): Prisma.Prisma__EnvironmentClient<runtime.Types.Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EnvironmentCountArgs>(args?: Prisma.Subset<T, EnvironmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EnvironmentCountAggregateOutputType> : number>;
    aggregate<T extends EnvironmentAggregateArgs>(args: Prisma.Subset<T, EnvironmentAggregateArgs>): Prisma.PrismaPromise<GetEnvironmentAggregateType<T>>;
    groupBy<T extends EnvironmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EnvironmentGroupByArgs['orderBy'];
    } : {
        orderBy?: EnvironmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EnvironmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnvironmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EnvironmentFieldRefs;
}
export interface Prisma__EnvironmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tenant<T extends Prisma.TenantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TenantDefaultArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    statuses<T extends Prisma.Environment$statusesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Environment$statusesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FlagStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EnvironmentFieldRefs {
    readonly id: Prisma.FieldRef<"Environment", 'String'>;
    readonly name: Prisma.FieldRef<"Environment", 'String'>;
    readonly apiKey: Prisma.FieldRef<"Environment", 'String'>;
    readonly tenantId: Prisma.FieldRef<"Environment", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Environment", 'DateTime'>;
}
export type EnvironmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnvironmentSelect<ExtArgs> | null;
    omit?: Prisma.EnvironmentOmit<ExtArgs> | null;
    include?: Prisma.EnvironmentInclude<ExtArgs> | null;
    where: Prisma.EnvironmentWhereUniqueInput;
};
export type EnvironmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnvironmentSelect<ExtArgs> | null;
    omit?: Prisma.EnvironmentOmit<ExtArgs> | null;
    include?: Prisma.EnvironmentInclude<ExtArgs> | null;
    where: Prisma.EnvironmentWhereUniqueInput;
};
export type EnvironmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnvironmentSelect<ExtArgs> | null;
    omit?: Prisma.EnvironmentOmit<ExtArgs> | null;
    include?: Prisma.EnvironmentInclude<ExtArgs> | null;
    where?: Prisma.EnvironmentWhereInput;
    orderBy?: Prisma.EnvironmentOrderByWithRelationInput | Prisma.EnvironmentOrderByWithRelationInput[];
    cursor?: Prisma.EnvironmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnvironmentScalarFieldEnum | Prisma.EnvironmentScalarFieldEnum[];
};
export type EnvironmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnvironmentSelect<ExtArgs> | null;
    omit?: Prisma.EnvironmentOmit<ExtArgs> | null;
    include?: Prisma.EnvironmentInclude<ExtArgs> | null;
    where?: Prisma.EnvironmentWhereInput;
    orderBy?: Prisma.EnvironmentOrderByWithRelationInput | Prisma.EnvironmentOrderByWithRelationInput[];
    cursor?: Prisma.EnvironmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnvironmentScalarFieldEnum | Prisma.EnvironmentScalarFieldEnum[];
};
export type EnvironmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnvironmentSelect<ExtArgs> | null;
    omit?: Prisma.EnvironmentOmit<ExtArgs> | null;
    include?: Prisma.EnvironmentInclude<ExtArgs> | null;
    where?: Prisma.EnvironmentWhereInput;
    orderBy?: Prisma.EnvironmentOrderByWithRelationInput | Prisma.EnvironmentOrderByWithRelationInput[];
    cursor?: Prisma.EnvironmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnvironmentScalarFieldEnum | Prisma.EnvironmentScalarFieldEnum[];
};
export type EnvironmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnvironmentSelect<ExtArgs> | null;
    omit?: Prisma.EnvironmentOmit<ExtArgs> | null;
    include?: Prisma.EnvironmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EnvironmentCreateInput, Prisma.EnvironmentUncheckedCreateInput>;
};
export type EnvironmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EnvironmentCreateManyInput | Prisma.EnvironmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EnvironmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnvironmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EnvironmentOmit<ExtArgs> | null;
    data: Prisma.EnvironmentCreateManyInput | Prisma.EnvironmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EnvironmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EnvironmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnvironmentSelect<ExtArgs> | null;
    omit?: Prisma.EnvironmentOmit<ExtArgs> | null;
    include?: Prisma.EnvironmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EnvironmentUpdateInput, Prisma.EnvironmentUncheckedUpdateInput>;
    where: Prisma.EnvironmentWhereUniqueInput;
};
export type EnvironmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EnvironmentUpdateManyMutationInput, Prisma.EnvironmentUncheckedUpdateManyInput>;
    where?: Prisma.EnvironmentWhereInput;
    limit?: number;
};
export type EnvironmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnvironmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EnvironmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EnvironmentUpdateManyMutationInput, Prisma.EnvironmentUncheckedUpdateManyInput>;
    where?: Prisma.EnvironmentWhereInput;
    limit?: number;
    include?: Prisma.EnvironmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EnvironmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnvironmentSelect<ExtArgs> | null;
    omit?: Prisma.EnvironmentOmit<ExtArgs> | null;
    include?: Prisma.EnvironmentInclude<ExtArgs> | null;
    where: Prisma.EnvironmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.EnvironmentCreateInput, Prisma.EnvironmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EnvironmentUpdateInput, Prisma.EnvironmentUncheckedUpdateInput>;
};
export type EnvironmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnvironmentSelect<ExtArgs> | null;
    omit?: Prisma.EnvironmentOmit<ExtArgs> | null;
    include?: Prisma.EnvironmentInclude<ExtArgs> | null;
    where: Prisma.EnvironmentWhereUniqueInput;
};
export type EnvironmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnvironmentWhereInput;
    limit?: number;
};
export type Environment$statusesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EnvironmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnvironmentSelect<ExtArgs> | null;
    omit?: Prisma.EnvironmentOmit<ExtArgs> | null;
    include?: Prisma.EnvironmentInclude<ExtArgs> | null;
};
