"�I
DDeviceIDLE"IDLE1�����ƠBA�����ƠBQ      �?Y      �?�Unknown
BHostIDLE"IDLE133333��@A33333��@a؉�؉��?i؉�؉��?�Unknown
uHostFlushSummaryWriter"FlushSummaryWriter(133333M�@933333M�@A33333M�@I33333M�@a�����?i�^��?�Unknown�
{HostMatMul"'gradient_tape/sequential/dense_1/MatMul(1����̬^@9����̬^@A����̬^@I����̬^@a�_��_��?i�[��[>�?�Unknown
}HostMatMul")gradient_tape/sequential/dense_1/MatMul_1(133333�]@933333�]@A33333�]@I33333�]@a�h�h�?iM��M�T�?�Unknown
oHost_FusedMatMul"sequential/dense/Relu(133333�O@933333�O@A33333�O@I33333�O@aB)�B)��?i�~�~��?�Unknown
qHost_FusedMatMul"sequential/dense_1/Relu(1������F@9������F@A������F@I������F@a��Ȋ�Ȋ?iI�J�T�?�Unknown
�Host#SparseSoftmaxCrossEntropyWithLogits"gsparse_categorical_crossentropy/SparseSoftmaxCrossEntropyWithLogits/SparseSoftmaxCrossEntropyWithLogits(1������C@9������C@A������C@I������C@a�o��o��?i�p���?�Unknown
y	HostMatMul"%gradient_tape/sequential/dense/MatMul(1������B@9������B@A������B@I������B@a�a�a�?i�舎��?�Unknown
�
HostDataset"5Iterator::Model::ParallelMapV2::Zip[1]::ForeverRepeat(1fffff�;@9fffff�;@A�����L9@I�����L9@a~ڧ}ڧ}?iB8�C8D�?�Unknown
oHostSoftmax"sequential/dense_2/Softmax(1     �7@9     �7@A     �7@I     �7@a������{?i�O��O{�?�Unknown
�HostResourceApplyGradientDescent"+SGD/SGD/update/ResourceApplyGradientDescent(133333�2@933333�2@A33333�2@I33333�2@a�^�^�u?ip&gr&��?�Unknown
HostReluGrad")gradient_tape/sequential/dense_1/ReluGrad(13333332@93333332@A3333332@I3333332@aUUUUUUu?i����?�Unknown
dHostDataset"Iterator::Model(1     �:@9     �:@A�����2@I�����2@avS7uS7u?i�?��?��?�Unknown
xHostDataset"#Iterator::Model::ParallelMapV2::Zip(1     @M@9     @M@A333333.@I333333.@a1�1�q?i��_���?�Unknown
aHostIdentity"Identity(1      -@9      -@A      -@I      -@a����p?i�A�A�?�Unknown�
}HostReluGrad"'gradient_tape/sequential/dense/ReluGrad(1333333,@9333333,@A333333,@I333333,@ap�p�p?i)�"+�b�?�Unknown
tHost_FusedMatMul"sequential/dense_2/BiasAdd(1������(@9������(@A������(@I������(@a]��\��l?i�����?�Unknown
{HostMatMul"'gradient_tape/sequential/dense_2/MatMul(1ffffff'@9ffffff'@Affffff'@Iffffff'@a۶m۶mk?i��Z����?�Unknown
�HostDataset"?Iterator::Model::ParallelMapV2::Zip[0]::FlatMap[0]::Concatenate(1������,@9������,@A      '@I      '@a[��Z��j?i\�^��?�Unknown
}HostMatMul")gradient_tape/sequential/dense_2/MatMul_1(1������%@9������%@A������%@I������%@a�Q�Qi?i�<��<��?�Unknown
iHostWriteSummary"WriteSummary(1ffffff$@9ffffff$@Affffff$@Iffffff$@a�~�~�g?ip&gr&��?�Unknown�
�HostResourceApplyGradientDescent"-SGD/SGD/update_2/ResourceApplyGradientDescent(1      !@9      !@A      !@I      !@a�>��>�c?i�;���?�Unknown
sHostDataset"Iterator::Model::ParallelMapV2(1������ @9������ @A������ @I������ @a;�;�c?i��N���?�Unknown
gHostStridedSlice"strided_slice(1333333 @9333333 @A333333 @I333333 @a�/��/�b?i�!�!�?�Unknown
^HostGatherV2"GatherV2(1ffffff@9ffffff@Affffff@Iffffff@aP
�P
�`?i$gr&g2�?�Unknown
�HostMul"Ugradient_tape/sparse_categorical_crossentropy/SparseSoftmaxCrossEntropyWithLogits/mul(1������@9������@A������@I������@a������Z?i��?��?�?�Unknown
ZHostArgMax"ArgMax(1������@9������@A������@I������@a�`	�`	V?i�Ȋ��J�?�Unknown
�HostSum"1sparse_categorical_crossentropy/weighted_loss/Sum(1333333@9333333@A333333@I333333@a�$I�$IR?i<��>�S�?�Unknown
lHostIteratorGetNext"IteratorGetNext(1������@9������@A������@I������@a�Y�YQ?iǙ�ə\�?�Unknown
�HostResourceApplyGradientDescent"-SGD/SGD/update_5/ResourceApplyGradientDescent(1������@9������@A������@I������@a�Y�YQ?iRFeTFe�?�Unknown
` HostGatherV2"
GatherV2_1(1333333@9333333@A333333@I333333@a����O?i�>��>m�?�Unknown
�!HostResourceApplyGradientDescent"-SGD/SGD/update_3/ResourceApplyGradientDescent(1333333@9333333@A333333@I333333@a����O?iR7uS7u�?�Unknown
�"HostBiasAddGrad"2gradient_tape/sequential/dense/BiasAdd/BiasAddGrad(1ffffff
@9ffffff
@Affffff
@Iffffff
@a����N?i��<��|�?�Unknown
�#HostResourceApplyGradientDescent"-SGD/SGD/update_1/ResourceApplyGradientDescent(1������	@9������	@A������	@I������	@a��N?iFtDGt��?�Unknown
�$HostDataset"OIterator::Model::ParallelMapV2::Zip[0]::FlatMap[0]::Concatenate[0]::TensorSlice(1ffffff@9ffffff@Affffff@Iffffff@a�A�AJ?i�K���?�Unknown
�%HostResourceApplyGradientDescent"-SGD/SGD/update_4/ResourceApplyGradientDescent(1ffffff@9ffffff@Affffff@Iffffff@a�A�AJ?i�Q���?�Unknown
�&HostBiasAddGrad"4gradient_tape/sequential/dense_1/BiasAdd/BiasAddGrad(1ffffff@9ffffff@Affffff@Iffffff@a�A�AJ?i�%X�%��?�Unknown
�'HostDataset"AIterator::Model::ParallelMapV2::Zip[1]::ForeverRepeat::FromTensor(1������@9�������?A������@I�������?a�a�aH?i�=��=��?�Unknown
�(HostBiasAddGrad"4gradient_tape/sequential/dense_2/BiasAdd/BiasAddGrad(1333333@9333333@A333333@I333333@ah�h�F?i=��=ޣ�?�Unknown
e)Host
LogicalAnd"
LogicalAnd(1ffffff@9ffffff@Affffff@Iffffff@aY�Y�E?i�B)�B��?�Unknown�
�*HostTile"Bgradient_tape/sparse_categorical_crossentropy/weighted_loss/Tile_1(1ffffff@9ffffff@Affffff@Iffffff@aY�Y�E?i�nꦮ�?�Unknown
�+HostPack"/sparse_categorical_crossentropy/Reshape_1/shape(1ffffff@9ffffff@Affffff@Iffffff@aY�Y�E?i?�@��?�Unknown
�,HostStridedSlice"-sparse_categorical_crossentropy/strided_slice(1ffffff@9ffffff@Affffff@Iffffff@aY�Y�E?i�o��o��?�Unknown
�-HostCast"bsparse_categorical_crossentropy/ArithmeticOptimizer/ReorderCastLikeAndValuePreserving_int64_Cast_1(1������ @9������ @A������ @I������ @a;�;�C?i�[��[��?�Unknown
s.HostReadVariableOp"SGD/Cast/ReadVariableOp(1       @9       @A       @I       @a,�,�B?i/�0��?�Unknown
t/HostAssignAddVariableOp"AssignAddVariableOp(1ffffff�?9ffffff�?Affffff�?Iffffff�?a��A?iv�x���?�Unknown
V0HostSum"Sum_2(1�������?9�������?A�������?I�������?a��@?i�������?�Unknown
v1HostAssignAddVariableOp"AssignAddVariableOp_2(1�������?9�������?A�������?I�������?a��>?i�x��x��?�Unknown
V2HostCast"Cast(1�������?9�������?A�������?I�������?a�a�a8?i'�R(���?�Unknown
�3HostDivNoNan"Lgradient_tape/sparse_categorical_crossentropy/weighted_loss/value/div_no_nan(1�������?9�������?A�������?I�������?a�a�a8?iX�Y���?�Unknown
X4HostCast"Cast_2(1333333�?9333333�?A333333�?I333333�?ah�h�6?i�a�a��?�Unknown
X5HostEqual"Equal(1333333�?9333333�?A333333�?I333333�?ah�h�6?i�1�1��?�Unknown
�6HostDataset"/Iterator::Model::ParallelMapV2::Zip[0]::FlatMap(1      /@9      /@A333333�?I333333�?ah�h�6?i����?�Unknown
X7HostCast"Cast_3(1�������?9�������?A�������?I�������?aJ�J�4?i�`	���?�Unknown
|8HostAssignAddVariableOp"SGD/SGD/AssignAddVariableOp(1�������?9�������?A�������?I�������?aJ�J�4?i1*�2*��?�Unknown
�9HostReadVariableOp")sequential/dense_2/BiasAdd/ReadVariableOp(1�������?9�������?A�������?I�������?aJ�J�4?iZ��[���?�Unknown
�:HostDivNoNan"3sparse_categorical_crossentropy/weighted_loss/value(1      �?9      �?A      �?I      �?a,�,�2?i�h���?�Unknown
v;HostAssignAddVariableOp"AssignAddVariableOp_4(1�������?9�������?A�������?I�������?a��0?i�2*�2��?�Unknown
v<HostAssignAddVariableOp"AssignAddVariableOp_3(1�������?9�������?A�������?I�������?a��.?i�,���?�Unknown
X=HostCast"Cast_1(1�������?9�������?A�������?I�������?a��.?i��-����?�Unknown
T>HostMul"Mul(1�������?9�������?A�������?I�������?a��.?i��/����?�Unknown
`?HostDivNoNan"
div_no_nan(1�������?9�������?A�������?I�������?a��.?i�1���?�Unknown
�@HostCast"?sparse_categorical_crossentropy/weighted_loss/num_elements/Cast(1ffffff�?9ffffff�?Affffff�?Iffffff�?a�A�A*?i4Ws5W��?�Unknown
XAHostCast"Cast_4(1333333�?9333333�?A333333�?I333333�?ah�h�&?iK��K���?�Unknown
bBHostDivNoNan"div_no_nan_1(1333333�?9333333�?A333333�?I333333�?ah�h�&?ib'vb'��?�Unknown
vCHostAssignAddVariableOp"AssignAddVariableOp_1(1      �?9      �?A      �?I      �?a,�,�"?iuS7uS��?�Unknown
wDHostReadVariableOp"div_no_nan/ReadVariableOp_1(1      �?9      �?A      �?I      �?a,�,�"?i�����?�Unknown
�EHostReadVariableOp"'sequential/dense/BiasAdd/ReadVariableOp(1      �?9      �?A      �?I      �?a,�,�"?i�������?�Unknown
�FHostReadVariableOp"(sequential/dense_1/MatMul/ReadVariableOp(1      �?9      �?A      �?I      �?a,�,�"?i��z����?�Unknown
wGHostReadVariableOp"div_no_nan_1/ReadVariableOp(1�������?9�������?A�������?I�������?a��?i��{����?�Unknown
yHHostReadVariableOp"div_no_nan_1/ReadVariableOp_1(1�������?9�������?A�������?I�������?a��?i̷|˷��?�Unknown
�IHostReadVariableOp"&sequential/dense/MatMul/ReadVariableOp(1�������?9�������?A�������?I�������?a��?iۧ}ڧ��?�Unknown
�JHostReadVariableOp"(sequential/dense_2/MatMul/ReadVariableOp(1�������?9�������?A�������?I�������?a��?i�~���?�Unknown
uKHostReadVariableOp"div_no_nan/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?ah�h�?i�K��K��?�Unknown
�LHostReadVariableOp")sequential/dense_1/BiasAdd/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?ah�h�?i      �?�Unknown*�H
uHostFlushSummaryWriter"FlushSummaryWriter(133333M�@933333M�@A33333M�@I33333M�@a��b���?i��b���?�Unknown�
{HostMatMul"'gradient_tape/sequential/dense_1/MatMul(1����̬^@9����̬^@A����̬^@I����̬^@a�0%с��?iDu"���?�Unknown
}HostMatMul")gradient_tape/sequential/dense_1/MatMul_1(133333�]@933333�]@A33333�]@I33333�]@a�3T1��?i~t�7���?�Unknown
oHost_FusedMatMul"sequential/dense/Relu(133333�O@933333�O@A33333�O@I33333�O@aD>�0W�?ibx�Z6��?�Unknown
qHost_FusedMatMul"sequential/dense_1/Relu(1������F@9������F@A������F@I������F@aYW��d��?i�Á���?�Unknown
�Host#SparseSoftmaxCrossEntropyWithLogits"gsparse_categorical_crossentropy/SparseSoftmaxCrossEntropyWithLogits/SparseSoftmaxCrossEntropyWithLogits(1������C@9������C@A������C@I������C@aky��4�?i���N-�?�Unknown
yHostMatMul"%gradient_tape/sequential/dense/MatMul(1������B@9������B@A������B@I������B@a�m�ľn�?iU�;����?�Unknown
�HostDataset"5Iterator::Model::ParallelMapV2::Zip[1]::ForeverRepeat(1fffff�;@9fffff�;@A�����L9@I�����L9@a����?io���1�?�Unknown
o	HostSoftmax"sequential/dense_2/Softmax(1     �7@9     �7@A     �7@I     �7@aU���9�?i��&� ��?�Unknown
�
HostResourceApplyGradientDescent"+SGD/SGD/update/ResourceApplyGradientDescent(133333�2@933333�2@A33333�2@I33333�2@a�Y�(G�?i�:P3��?�Unknown
HostReluGrad")gradient_tape/sequential/dense_1/ReluGrad(13333332@93333332@A3333332@I3333332@a����3Â?i�1l**�?�Unknown
dHostDataset"Iterator::Model(1     �:@9     �:@A�����2@I�����2@a�a�Ϩ�?i��@�t�?�Unknown
xHostDataset"#Iterator::Model::ParallelMapV2::Zip(1     @M@9     @M@A333333.@I333333.@a�d�&"?i�����?�Unknown
aHostIdentity"Identity(1      -@9      -@A      -@I      -@a��Bt�}?i$b�u���?�Unknown�
}HostReluGrad"'gradient_tape/sequential/dense/ReluGrad(1333333,@9333333,@A333333,@I333333,@a�� 
S}?i��)�?�Unknown
tHost_FusedMatMul"sequential/dense_2/BiasAdd(1������(@9������(@A������(@I������(@a���=\y?i?�˖�[�?�Unknown
{HostMatMul"'gradient_tape/sequential/dense_2/MatMul(1ffffff'@9ffffff'@Affffff'@Iffffff'@a|׳��x?i�)9����?�Unknown
�HostDataset"?Iterator::Model::ParallelMapV2::Zip[0]::FlatMap[0]::Concatenate(1������,@9������,@A      '@I      '@a�j��w?in�m�d��?�Unknown
}HostMatMul")gradient_tape/sequential/dense_2/MatMul_1(1������%@9������%@A������%@I������%@aL�j��Dv?iK�\����?�Unknown
iHostWriteSummary"WriteSummary(1ffffff$@9ffffff$@Affffff$@Iffffff$@a+��"�u?i���D��?�Unknown�
�HostResourceApplyGradientDescent"-SGD/SGD/update_2/ResourceApplyGradientDescent(1      !@9      !@A      !@I      !@aya"�q?i^9�H
5�?�Unknown
sHostDataset"Iterator::Model::ParallelMapV2(1������ @9������ @A������ @I������ @a�����Qq?i
5λ�W�?�Unknown
gHostStridedSlice"strided_slice(1333333 @9333333 @A333333 @I333333 @a�2��`�p?ioUA}y�?�Unknown
^HostGatherV2"GatherV2(1ffffff@9ffffff@Affffff@Iffffff@a�{EXGm?i뚙�[��?�Unknown
�HostMul"Ugradient_tape/sparse_categorical_crossentropy/SparseSoftmaxCrossEntropyWithLogits/mul(1������@9������@A������@I������@al4F�2�g?i�e�ܭ�?�Unknown
ZHostArgMax"ArgMax(1������@9������@A������@I������@a�Jk��ac?ijLX>��?�Unknown
�HostSum"1sparse_categorical_crossentropy/weighted_loss/Sum(1333333@9333333@A333333@I333333@a��"�`?i�n�_S��?�Unknown
lHostIteratorGetNext"IteratorGetNext(1������@9������@A������@I������@a�� -̓^?i[�|F���?�Unknown
�HostResourceApplyGradientDescent"-SGD/SGD/update_5/ResourceApplyGradientDescent(1������@9������@A������@I������@a�� -̓^?i��-���?�Unknown
`HostGatherV2"
GatherV2_1(1333333@9333333@A333333@I333333@a�5j�i
\?i�D�a���?�Unknown
�HostResourceApplyGradientDescent"-SGD/SGD/update_3/ResourceApplyGradientDescent(1333333@9333333@A333333@I333333@a�5j�i
\?i������?�Unknown
� HostBiasAddGrad"2gradient_tape/sequential/dense/BiasAdd/BiasAddGrad(1ffffff
@9ffffff
@Affffff
@Iffffff
@a��JH7[?i�e�:}�?�Unknown
�!HostResourceApplyGradientDescent"-SGD/SGD/update_1/ResourceApplyGradientDescent(1������	@9������	@A������	@I������	@a�E'dZ?i�EN�&�?�Unknown
�"HostDataset"OIterator::Model::ParallelMapV2::Zip[0]::FlatMap[0]::Concatenate[0]::TensorSlice(1ffffff@9ffffff@Affffff@Iffffff@a�/�W?ip�];2�?�Unknown
�#HostResourceApplyGradientDescent"-SGD/SGD/update_4/ResourceApplyGradientDescent(1ffffff@9ffffff@Affffff@Iffffff@a�/�W?i��u��=�?�Unknown
�$HostBiasAddGrad"4gradient_tape/sequential/dense_1/BiasAdd/BiasAddGrad(1ffffff@9ffffff@Affffff@Iffffff@a�/�W?i����RI�?�Unknown
�%HostDataset"AIterator::Model::ParallelMapV2::Zip[1]::ForeverRepeat::FromTensor(1������@9�������?A������@I�������?a��ؾ_qU?i��lqT�?�Unknown
�&HostBiasAddGrad"4gradient_tape/sequential/dense_2/BiasAdd/BiasAddGrad(1333333@9333333@A333333@I333333@a
b�M�S?i� �]�?�Unknown
e'Host
LogicalAnd"
LogicalAnd(1ffffff@9ffffff@Affffff@Iffffff@aI3"��R?i9\�lg�?�Unknown�
�(HostTile"Bgradient_tape/sparse_categorical_crossentropy/weighted_loss/Tile_1(1ffffff@9ffffff@Affffff@Iffffff@aI3"��R?iS�(��p�?�Unknown
�)HostPack"/sparse_categorical_crossentropy/Reshape_1/shape(1ffffff@9ffffff@Affffff@Iffffff@aI3"��R?im~3�dz�?�Unknown
�*HostStridedSlice"-sparse_categorical_crossentropy/strided_slice(1ffffff@9ffffff@Affffff@Iffffff@aI3"��R?i�>����?�Unknown
�+HostCast"bsparse_categorical_crossentropy/ArithmeticOptimizer/ReorderCastLikeAndValuePreserving_int64_Cast_1(1������ @9������ @A������ @I������ @a�����QQ?irՉ��?�Unknown
s,HostReadVariableOp"SGD/Cast/ReadVariableOp(1       @9       @A       @I       @a	�kk�~P?iF�E!ɔ�?�Unknown
t-HostAssignAddVariableOp"AssignAddVariableOp(1ffffff�?9ffffff�?Affffff�?Iffffff�?a��e�VO?i1�ܞ��?�Unknown
V.HostSum"Sum_2(1�������?9�������?A�������?I�������?a�����M?i�T���?�Unknown
v/HostAssignAddVariableOp"AssignAddVariableOp_2(1�������?9�������?A�������?I�������?a�E'dJ?i����?�Unknown
V0HostCast"Cast(1�������?9�������?A�������?I�������?a��ؾ_qE?iM��i ��?�Unknown
�1HostDivNoNan"Lgradient_tape/sparse_categorical_crossentropy/weighted_loss/value/div_no_nan(1�������?9�������?A�������?I�������?a��ؾ_qE?i}R��\��?�Unknown
X2HostCast"Cast_2(1333333�?9333333�?A333333�?I333333�?a
b�M�C?i��ӈO��?�Unknown
X3HostEqual"Equal(1333333�?9333333�?A333333�?I333333�?a
b�M�C?i�,'PB��?�Unknown
�4HostDataset"/Iterator::Model::ParallelMapV2::Zip[0]::FlatMap(1      /@9      /@A333333�?I333333�?a
b�M�C?ișz5��?�Unknown
X5HostCast"Cast_3(1�������?9�������?A�������?I�������?a����$B?iɽ1N���?�Unknown
|6HostAssignAddVariableOp"SGD/SGD/AssignAddVariableOp(1�������?9�������?A�������?I�������?a����$B?i���G��?�Unknown
�7HostReadVariableOp")sequential/dense_2/BiasAdd/ReadVariableOp(1�������?9�������?A�������?I�������?a����$B?i������?�Unknown
�8HostDivNoNan"3sparse_categorical_crossentropy/weighted_loss/value(1      �?9      �?A      �?I      �?a	�kk�~@?i��a���?�Unknown
v9HostAssignAddVariableOp"AssignAddVariableOp_4(1�������?9�������?A�������?I�������?a�����=?i�r9w���?�Unknown
v:HostAssignAddVariableOp"AssignAddVariableOp_3(1�������?9�������?A�������?I�������?a�E'd:?iB�����?�Unknown
X;HostCast"Cast_1(1�������?9�������?A�������?I�������?a�E'd:?i���?��?�Unknown
T<HostMul"Mul(1�������?9�������?A�������?I�������?a�E'd:?i�L����?�Unknown
`=HostDivNoNan"
div_no_nan(1�������?9�������?A�������?I�������?a�E'd:?is����?�Unknown
�>HostCast"?sparse_categorical_crossentropy/weighted_loss/num_elements/Cast(1ffffff�?9ffffff�?Affffff�?Iffffff�?a�/�7?i����?�Unknown
X?HostCast"Cast_4(1333333�?9333333�?A333333�?I333333�?a
b�M�3?i�K��4��?�Unknown
b@HostDivNoNan"div_no_nan_1(1333333�?9333333�?A333333�?I333333�?a
b�M�3?i/\F���?�Unknown
vAHostAssignAddVariableOp"AssignAddVariableOp_1(1      �?9      �?A      �?I      �?a	�kk�~0?i�oi���?�Unknown
wBHostReadVariableOp"div_no_nan/ReadVariableOp_1(1      �?9      �?A      �?I      �?a	�kk�~0?i�v����?�Unknown
�CHostReadVariableOp"'sequential/dense/BiasAdd/ReadVariableOp(1      �?9      �?A      �?I      �?a	�kk�~0?i�J�����?�Unknown
�DHostReadVariableOp"(sequential/dense_1/MatMul/ReadVariableOp(1      �?9      �?A      �?I      �?a	�kk�~0?i������?�Unknown
wEHostReadVariableOp"div_no_nan_1/ReadVariableOp(1�������?9�������?A�������?I�������?a�E'd*?ia�Փ��?�Unknown
yFHostReadVariableOp"div_no_nan_1/ReadVariableOp_1(1�������?9�������?A�������?I�������?a�E'd*?i� t:��?�Unknown
�GHostReadVariableOp"&sequential/dense/MatMul/ReadVariableOp(1�������?9�������?A�������?I�������?a�E'd*?i%�Y���?�Unknown
�HHostReadVariableOp"(sequential/dense_2/MatMul/ReadVariableOp(1�������?9�������?A�������?I�������?a�E'd*?i{IV����?�Unknown
uIHostReadVariableOp"div_no_nan/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?a
b�M�#?i�$+N���?�Unknown
�JHostReadVariableOp")sequential/dense_1/BiasAdd/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?a
b�M�#?i     �?�Unknown