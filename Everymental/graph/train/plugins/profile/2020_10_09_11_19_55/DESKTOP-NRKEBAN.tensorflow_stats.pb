"�K
DDeviceIDLE"IDLE1�����ƠBA�����ƠBQ      �?Y      �?�Unknown
BHostIDLE"IDLE133333��@A33333��@a�e����?i�e����?�Unknown
uHostFlushSummaryWriter"FlushSummaryWriter(133333�@933333�@A33333�@I33333�@a�Q����?iH��Z�d�?�Unknown�
oHost_FusedMatMul"sequential/dense/Relu(1�����Aw@9�����Aw@A�����Aw@I�����Aw@ai|=�p�?ij:>��r�?�Unknown
yHostMatMul"%gradient_tape/sequential/dense/MatMul(1�����j@9�����j@A�����j@I�����j@a	�[��m�?i��ѓ)�?�Unknown
^HostGatherV2"GatherV2(1fffff�g@9fffff�g@Afffff�g@Ifffff�g@a�����?iI��%��?�Unknown
{HostMatMul"'gradient_tape/sequential/dense_1/MatMul(133333�Z@933333�Z@A33333�Z@I33333�Z@a��:Q�?i	ȷL���?�Unknown
�HostResourceApplyGradientDescent"+SGD/SGD/update/ResourceApplyGradientDescent(133333sL@933333sL@A33333sL@I33333sL@a�$�L"�?i����8�?�Unknown
q	Host_FusedMatMul"sequential/dense_1/Relu(1     �F@9     �F@A     �F@I     �F@a�����?i���M�l�?�Unknown
}
HostMatMul")gradient_tape/sequential/dense_1/MatMul_1(1fffff�F@9fffff�F@Afffff�F@Ifffff�F@ae�߆�͇?ir�'��?�Unknown
oHostSoftmax"sequential/dense_2/Softmax(1      <@9      <@A      <@I      <@aq�Fm}?i��I��?�Unknown
�Host#SparseSoftmaxCrossEntropyWithLogits"gsparse_categorical_crossentropy/SparseSoftmaxCrossEntropyWithLogits/SparseSoftmaxCrossEntropyWithLogits(1      0@9      0@A      0@I      0@a�u(��p?i�����(�?�Unknown
�HostResourceApplyGradientDescent"-SGD/SGD/update_2/ResourceApplyGradientDescent(1������/@9������/@A������/@I������/@a�����p?i2[��I�?�Unknown
}HostReluGrad"'gradient_tape/sequential/dense/ReluGrad(1      ,@9      ,@A      ,@I      ,@aq�Fmm?i \w�eg�?�Unknown
�HostDataset"5Iterator::Model::ParallelMapV2::Zip[1]::ForeverRepeat(1�����1@9�����1@Affffff*@Iffffff*@a)���k?i)��$��?�Unknown
}HostMatMul")gradient_tape/sequential/dense_2/MatMul_1(1������(@9������(@A������(@I������(@a���XV�i?i�������?�Unknown
dHostDataset"Iterator::Model(1     �1@9     �1@A������'@I������'@a�G՗L�h?i@��:̵�?�Unknown
iHostWriteSummary"WriteSummary(1������#@9������#@A������#@I������#@a*˓%�d?ij}`e��?�Unknown�
{HostMatMul"'gradient_tape/sequential/dense_2/MatMul(1      #@9      #@A      #@I      #@a0S��c?iv�i]��?�Unknown
�HostDataset"?Iterator::Model::ParallelMapV2::Zip[0]::FlatMap[0]::Concatenate(1������%@9������%@A333333@I333333@a��w֕\?itiw���?�Unknown
�HostMul"Ugradient_tape/sparse_categorical_crossentropy/SparseSoftmaxCrossEntropyWithLogits/mul(1ffffff@9ffffff@Affffff@Iffffff@a)���[?i	�R���?�Unknown
tHost_FusedMatMul"sequential/dense_2/BiasAdd(1333333@9333333@A333333@I333333@a@�m�aX?i�t�)��?�Unknown
sHostDataset"Iterator::Model::ParallelMapV2(1������@9������@A������@I������@a�t��W?i2�[2��?�Unknown
HostReluGrad")gradient_tape/sequential/dense_1/ReluGrad(1������@9������@A������@I������@a�t��W?il{';��?�Unknown
gHostStridedSlice"strided_slice(1������@9������@A������@I������@a�t��W?i���C�*�?�Unknown
�HostResourceApplyGradientDescent"-SGD/SGD/update_5/ResourceApplyGradientDescent(1ffffff@9ffffff@Affffff@Iffffff@a����`pU?i�K=ta5�?�Unknown
�HostSum"1sparse_categorical_crossentropy/weighted_loss/Sum(1333333@9333333@A333333@I333333@a��c�-T?i��F8x?�?�Unknown
ZHostArgMax"ArgMax(1������@9������@A������@I������@a�H�קQ?i(y�#LH�?�Unknown
`HostGatherV2"
GatherV2_1(1ffffff@9ffffff@Affffff@Iffffff@aPߏ�9<Q?i��@�P�?�Unknown
�HostDataset"OIterator::Model::ParallelMapV2::Zip[0]::FlatMap[0]::Concatenate[0]::TensorSlice(1      @9      @A      @I      @a�u(��P?iS՟�RY�?�Unknown
�HostDataset"AIterator::Model::ParallelMapV2::Zip[1]::ForeverRepeat::FromTensor(1333333@9333333�?A333333@I333333�?a����dP?iٵ��a�?�Unknown
l HostIteratorGetNext"IteratorGetNext(1ffffff@9ffffff@Affffff@Iffffff@a�F���O?i�bo��i�?�Unknown
x!HostDataset"#Iterator::Model::ParallelMapV2::Zip(1ffffff@@9ffffff@@A������@I������@a�s��O?i��6�Hq�?�Unknown
�"HostStridedSlice"-sparse_categorical_crossentropy/strided_slice(1      @9      @A      @I      @aq�FmM?i|�}�x�?�Unknown
�#HostBiasAddGrad"2gradient_tape/sequential/dense/BiasAdd/BiasAddGrad(1333333@9333333@A333333@I333333@a��w֕L?i{�Z��?�Unknown
�$HostBiasAddGrad"4gradient_tape/sequential/dense_2/BiasAdd/BiasAddGrad(1ffffff
@9ffffff
@Affffff
@Iffffff
@a)���K?i�u� ���?�Unknown
�%HostPack"/sparse_categorical_crossentropy/Reshape_1/shape(1ffffff
@9ffffff
@Affffff
@Iffffff
@a)���K?i �����?�Unknown
�&HostResourceApplyGradientDescent"-SGD/SGD/update_4/ResourceApplyGradientDescent(1������	@9������	@A������	@I������	@aYV�`�J?i���b��?�Unknown
�'HostResourceApplyGradientDescent"-SGD/SGD/update_3/ResourceApplyGradientDescent(1      @9      @A      @I      @a�<�8I?iѥ����?�Unknown
e(Host
LogicalAnd"
LogicalAnd(1ffffff@9ffffff@Affffff@Iffffff@a��t�G?i�M$W���?�Unknown�
�)HostBiasAddGrad"4gradient_tape/sequential/dense_1/BiasAdd/BiasAddGrad(1ffffff@9ffffff@Affffff@Iffffff@a��t�G?iW�)�u��?�Unknown
�*HostTile"Bgradient_tape/sparse_categorical_crossentropy/weighted_loss/Tile_1(1������@9������@A������@I������@a�8�9�F?ieio�"��?�Unknown
�+HostCast"BArithmeticOptimizer/ReorderCastLikeAndValuePreserving_float_Cast_1(1������@9������@A������@I������@a(f��E?i�������?�Unknown
t,HostAssignAddVariableOp"AssignAddVariableOp(1      @9      @A      @I      @au�2�E?id���ڶ�?�Unknown
�-HostResourceApplyGradientDescent"-SGD/SGD/update_1/ResourceApplyGradientDescent(1ffffff@9ffffff@Affffff@Iffffff@a�MVC?i�[�����?�Unknown
s.HostReadVariableOp"SGD/Cast/ReadVariableOp(1ffffff�?9ffffff�?Affffff�?Iffffff�?a�F���??i	2Bޮ��?�Unknown
v/HostAssignAddVariableOp"AssignAddVariableOp_2(1�������?9�������?A�������?I�������?a$�LD>?i���gw��?�Unknown
X0HostEqual"Equal(1�������?9�������?A�������?I�������?a$�LD>?iqwI�?��?�Unknown
�1HostDivNoNan"Lgradient_tape/sparse_categorical_crossentropy/weighted_loss/value/div_no_nan(1�������?9�������?A�������?I�������?a$�LD>?i%�z��?�Unknown
V2HostSum"Sum_2(1333333�?9333333�?A333333�?I333333�?a��w֕<?i$��5���?�Unknown
�3HostCast"bsparse_categorical_crossentropy/ArithmeticOptimizer/ReorderCastLikeAndValuePreserving_int64_Cast_1(1�������?9�������?A�������?I�������?aYV�`�:?ioē!���?�Unknown
v4HostAssignAddVariableOp"AssignAddVariableOp_4(1      �?9      �?A      �?I      �?a�<�89?i��>��?�Unknown
X5HostCast"Cast_2(1      �?9      �?A      �?I      �?a�<�89?i��\F��?�Unknown
|6HostAssignAddVariableOp"SGD/SGD/AssignAddVariableOp(1      �?9      �?A      �?I      �?a�<�89?i1�\ym��?�Unknown
�7HostCast"?sparse_categorical_crossentropy/weighted_loss/num_elements/Cast(1ffffff�?9ffffff�?Affffff�?Iffffff�?a��t�7?i���^��?�Unknown
X8HostCast"Cast_3(1333333�?9333333�?A333333�?I333333�?a��c�-4?i��x���?�Unknown
�9HostDataset"/Iterator::Model::ParallelMapV2::Zip[0]::FlatMap(1      (@9      (@A333333�?I333333�?a��c�-4?i��)j��?�Unknown
V:HostCast"Cast(1�������?9�������?A�������?I�������?a]�2?i��&���?�Unknown
T;HostMul"Mul(1�������?9�������?A�������?I�������?a]�2?i��h�	��?�Unknown
v<HostAssignAddVariableOp"AssignAddVariableOp_1(1      �?9      �?A      �?I      �?a�u(��0?i���$��?�Unknown
�=HostDivNoNan"3sparse_categorical_crossentropy/weighted_loss/value(1      �?9      �?A      �?I      �?a�u(��0?i�m>��?�Unknown
X>HostCast"Cast_1(1�������?9�������?A�������?I�������?a$�LD.?i �.Z"��?�Unknown
`?HostDivNoNan"
div_no_nan(1�������?9�������?A�������?I�������?aYV�`�*?i�r0����?�Unknown
v@HostAssignAddVariableOp"AssignAddVariableOp_3(1ffffff�?9ffffff�?Affffff�?Iffffff�?a��t�'?i��qwI��?�Unknown
XAHostCast"Cast_4(1ffffff�?9ffffff�?Affffff�?Iffffff�?a��t�'?i�F����?�Unknown
bBHostDivNoNan"div_no_nan_1(1ffffff�?9ffffff�?Affffff�?Iffffff�?a��t�'?ix���:��?�Unknown
�CHostReadVariableOp"(sequential/dense_1/MatMul/ReadVariableOp(1ffffff�?9ffffff�?Affffff�?Iffffff�?a��t�'?ii6m���?�Unknown
wDHostReadVariableOp"div_no_nan/ReadVariableOp_1(1333333�?9333333�?A333333�?I333333�?a��c�-$?i�P�E���?�Unknown
�EHostReadVariableOp"(sequential/dense_2/MatMul/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?a��c�-$?i�89��?�Unknown
yFHostReadVariableOp"div_no_nan_1/ReadVariableOp_1(1      �?9      �?A      �?I      �?a�u(�� ?ih��'F��?�Unknown
�GHostReadVariableOp"'sequential/dense/BiasAdd/ReadVariableOp(1      �?9      �?A      �?I      �?a�u(�� ?i1S��?�Unknown
�HHostReadVariableOp"&sequential/dense/MatMul/ReadVariableOp(1      �?9      �?A      �?I      �?a�u(�� ?iv�{;`��?�Unknown
�IHostReadVariableOp")sequential/dense_1/BiasAdd/ReadVariableOp(1      �?9      �?A      �?I      �?a�u(�� ?i��<Em��?�Unknown
�JHostReadVariableOp")sequential/dense_2/BiasAdd/ReadVariableOp(1      �?9      �?A      �?I      �?a�u(�� ?i���Nz��?�Unknown
aKHostIdentity"Identity(1�������?9�������?A�������?I�������?aYV�`�?iWb��Q��?�Unknown�
uLHostReadVariableOp"div_no_nan/ReadVariableOp(1�������?9�������?A�������?I�������?aYV�`�?i*1��(��?�Unknown
wMHostReadVariableOp"div_no_nan_1/ReadVariableOp(1�������?9�������?A�������?I�������?aYV�`�?i�������?�Unknown*�J
uHostFlushSummaryWriter"FlushSummaryWriter(133333�@933333�@A33333�@I33333�@a�9cuN�?i�9cuN�?�Unknown�
oHost_FusedMatMul"sequential/dense/Relu(1�����Aw@9�����Aw@A�����Aw@I�����Aw@a���8��?i#�n�H��?�Unknown
yHostMatMul"%gradient_tape/sequential/dense/MatMul(1�����j@9�����j@A�����j@I�����j@aM�Y$�m�?i��t�?�Unknown
^HostGatherV2"GatherV2(1fffff�g@9fffff�g@Afffff�g@Ifffff�g@a^�P�W7�?i��#
���?�Unknown
{HostMatMul"'gradient_tape/sequential/dense_1/MatMul(133333�Z@933333�Z@A33333�Z@I33333�Z@aI�[��?i.��+j�?�Unknown
�HostResourceApplyGradientDescent"+SGD/SGD/update/ResourceApplyGradientDescent(133333sL@933333sL@A33333sL@I33333sL@a=�a�r�?i�����-�?�Unknown
qHost_FusedMatMul"sequential/dense_1/Relu(1     �F@9     �F@A     �F@I     �F@ad3N�،�?i#(�k��?�Unknown
}HostMatMul")gradient_tape/sequential/dense_1/MatMul_1(1fffff�F@9fffff�F@Afffff�F@Ifffff�F@ad�M�v�?i���4�e�?�Unknown
o	HostSoftmax"sequential/dense_2/Softmax(1      <@9      <@A      <@I      <@a@?`���?i�t���?�Unknown
�
Host#SparseSoftmaxCrossEntropyWithLogits"gsparse_categorical_crossentropy/SparseSoftmaxCrossEntropyWithLogits/SparseSoftmaxCrossEntropyWithLogits(1      0@9      0@A      0@I      0@a%�m �{?i�����?�Unknown
�HostResourceApplyGradientDescent"-SGD/SGD/update_2/ResourceApplyGradientDescent(1������/@9������/@A������/@I������/@a&OmX�S{?i�δ��3�?�Unknown
}HostReluGrad"'gradient_tape/sequential/dense/ReluGrad(1      ,@9      ,@A      ,@I      ,@a@?`��x?i�u8�c�?�Unknown
�HostDataset"5Iterator::Model::ParallelMapV2::Zip[1]::ForeverRepeat(1�����1@9�����1@Affffff*@Iffffff*@aK�Z�үv?i�D��$��?�Unknown
}HostMatMul")gradient_tape/sequential/dense_2/MatMul_1(1������(@9������(@A������(@I������(@aX�T��#u?i��&�l��?�Unknown
dHostDataset"Iterator::Model(1     �1@9     �1@A������'@I������'@a_Qp�Gt?i�8���?�Unknown
iHostWriteSummary"WriteSummary(1������#@9������#@A������#@I������#@az_CP��p?i�����?�Unknown�
{HostMatMul"'gradient_tape/sequential/dense_2/MatMul(1      #@9      #@A      #@I      #@a~OAX�Sp?iQ�X�S&�?�Unknown
�HostDataset"?Iterator::Model::ParallelMapV2::Zip[0]::FlatMap[0]::Concatenate(1������%@9������%@A333333@I333333@aE]@�_g?i�����=�?�Unknown
�HostMul"Ugradient_tape/sparse_categorical_crossentropy/SparseSoftmaxCrossEntropyWithLogits/mul(1ffffff@9ffffff@Affffff@Iffffff@aK�Z�үf?i�Q9WcT�?�Unknown
tHost_FusedMatMul"sequential/dense_2/BiasAdd(1333333@9333333@A333333@I333333@aa�O ��c?iN�Y/Sh�?�Unknown
sHostDataset"Iterator::Model::ParallelMapV2(1������@9������@A������@I������@ad_N�ؗc?i��)�{�?�Unknown
HostReluGrad")gradient_tape/sequential/dense_1/ReluGrad(1������@9������@A������@I������@ad_N�ؗc?i>�����?�Unknown
gHostStridedSlice"strided_slice(1������@9������@A������@I������@ad_N�ؗc?ik�ʹ��?�Unknown
�HostResourceApplyGradientDescent"-SGD/SGD/update_5/ResourceApplyGradientDescent(1ffffff@9ffffff@Affffff@Iffffff@atF�܇a?i�Һ����?�Unknown
�HostSum"1sparse_categorical_crossentropy/weighted_loss/Sum(1333333@9333333@A333333@I333333@a|�A �`?i��u"��?�Unknown
ZHostArgMax"ArgMax(1������@9������@A������@I������@as@��\?iIN�X���?�Unknown
`HostGatherV2"
GatherV2_1(1ffffff@9ffffff@Affffff@Iffffff@a�p��/\?i���<���?�Unknown
�HostDataset"OIterator::Model::ParallelMapV2::Zip[0]::FlatMap[0]::Concatenate[0]::TensorSlice(1      @9      @A      @I      @a%�m �[?i��+!j��?�Unknown
�HostDataset"AIterator::Model::ParallelMapV2::Zip[1]::ForeverRepeat::FromTensor(1333333@9333333�?A333333@I333333�?a*?k`��Z?iI�[���?�Unknown
lHostIteratorGetNext"IteratorGetNext(1ffffff@9ffffff@Affffff@Iffffff@a/h��Z?i�'<��	�?�Unknown
xHostDataset"#Iterator::Model::ParallelMapV2::Zip(1ffffff@@9ffffff@@A������@I������@a5�e �oY?iiZ�ҙ�?�Unknown
� HostStridedSlice"-sparse_categorical_crossentropy/strided_slice(1      @9      @A      @I      @a@?`��X?i�����"�?�Unknown
�!HostBiasAddGrad"2gradient_tape/sequential/dense/BiasAdd/BiasAddGrad(1333333@9333333@A333333@I333333@aE]@�_W?iI�\�Q.�?�Unknown
�"HostBiasAddGrad"4gradient_tape/sequential/dense_2/BiasAdd/BiasAddGrad(1ffffff
@9ffffff
@Affffff
@Iffffff
@aK�Z�үV?i�欌�9�?�Unknown
�#HostPack"/sparse_categorical_crossentropy/Reshape_1/shape(1ffffff
@9ffffff
@Affffff
@Iffffff
@aK�Z�үV?i	�uE�?�Unknown
�$HostResourceApplyGradientDescent"-SGD/SGD/update_4/ResourceApplyGradientDescent(1������	@9������	@A������	@I������	@aQ�W ��U?i	@�_P�?�Unknown
�%HostResourceApplyGradientDescent"-SGD/SGD/update_3/ResourceApplyGradientDescent(1      @9      @A      @I      @a[R�֟T?iIi]KQZ�?�Unknown
e&Host
LogicalAnd"
LogicalAnd(1ffffff@9ffffff@Affffff@Iffffff@af�L��?S?iɏ8�c�?�Unknown�
�'HostBiasAddGrad"4gradient_tape/sequential/dense_1/BiasAdd/BiasAddGrad(1ffffff@9ffffff@Affffff@Iffffff@af�L��?S?iI��$�m�?�Unknown
�(HostTile"Bgradient_tape/sparse_categorical_crossentropy/weighted_loss/Tile_1(1������@9������@A������@I������@al?J�ڏR?ii�M�v�?�Unknown
�)HostCast"BArithmeticOptimizer/ReorderCastLikeAndValuePreserving_float_Cast_1(1������@9������@A������@I������@arG@��Q?i)�m ��?�Unknown
t*HostAssignAddVariableOp"AssignAddVariableOp(1      @9      @A      @I      @aw�D��/Q?i�!>�`��?�Unknown
�+HostResourceApplyGradientDescent"-SGD/SGD/update_1/ResourceApplyGradientDescent(1ffffff@9ffffff@Affffff@Iffffff@a~���O?i)An�H��?�Unknown
s,HostReadVariableOp"SGD/Cast/ReadVariableOp(1ffffff�?9ffffff�?Affffff�?Iffffff�?a/h��J?iI[^�Ж�?�Unknown
v-HostAssignAddVariableOp"AssignAddVariableOp_2(1�������?9�������?A�������?I�������?a;�b�οH?i	t�� ��?�Unknown
X.HostEqual"Equal(1�������?9�������?A�������?I�������?a;�b�οH?iɌ��0��?�Unknown
�/HostDivNoNan"Lgradient_tape/sparse_categorical_crossentropy/weighted_loss/value/div_no_nan(1�������?9�������?A�������?I�������?a;�b�οH?i��>�`��?�Unknown
V0HostSum"Sum_2(1333333�?9333333�?A333333�?I333333�?aE]@�_G?i鼎�8��?�Unknown
�1HostCast"bsparse_categorical_crossentropy/ArithmeticOptimizer/ReorderCastLikeAndValuePreserving_int64_Cast_1(1�������?9�������?A�������?I�������?aQ�W ��E?i�Ҏ����?�Unknown
v2HostAssignAddVariableOp"AssignAddVariableOp_4(1      �?9      �?A      �?I      �?a[R�֟D?i��>���?�Unknown
X3HostCast"Cast_2(1      �?9      �?A      �?I      �?a[R�֟D?i)����?�Unknown
|4HostAssignAddVariableOp"SGD/SGD/AssignAddVariableOp(1      �?9      �?A      �?I      �?a[R�֟D?i��w0��?�Unknown
�5HostCast"?sparse_categorical_crossentropy/weighted_loss/num_elements/Cast(1ffffff�?9ffffff�?Affffff�?Iffffff�?af�L��?C?i	$�m ��?�Unknown
X6HostCast"Cast_3(1333333�?9333333�?A333333�?I333333�?a|�A �@?i�4�e ��?�Unknown
�7HostDataset"/Iterator::Model::ParallelMapV2::Zip[0]::FlatMap(1      (@9      (@A333333�?I333333�?a|�A �@?i	E]@��?�Unknown
V8HostCast"Cast(1�������?9�������?A�������?I�������?a�x��?>?i)T�U��?�Unknown
T9HostMul"Mul(1�������?9�������?A�������?I�������?a�x��?>?iIc_N���?�Unknown
v:HostAssignAddVariableOp"AssignAddVariableOp_1(1      �?9      �?A      �?I      �?a%�m �;?i	qG@��?�Unknown
�;HostDivNoNan"3sparse_categorical_crossentropy/weighted_loss/value(1      �?9      �?A      �?I      �?a%�m �;?i�~�@���?�Unknown
X<HostCast"Cast_1(1�������?9�������?A�������?I�������?a;�b�ο8?i)�o:���?�Unknown
`=HostDivNoNan"
div_no_nan(1�������?9�������?A�������?I�������?aQ�W ��5?i)��4���?�Unknown
v>HostAssignAddVariableOp"AssignAddVariableOp_3(1ffffff�?9ffffff�?Affffff�?Iffffff�?af�L��?3?iɟ0���?�Unknown
X?HostCast"Cast_4(1ffffff�?9ffffff�?Affffff�?Iffffff�?af�L��?3?ii�O+X��?�Unknown
b@HostDivNoNan"div_no_nan_1(1ffffff�?9ffffff�?Affffff�?Iffffff�?af�L��?3?i	�&���?�Unknown
�AHostReadVariableOp"(sequential/dense_1/MatMul/ReadVariableOp(1ffffff�?9ffffff�?Affffff�?Iffffff�?af�L��?3?i���!(��?�Unknown
wBHostReadVariableOp"div_no_nan/ReadVariableOp_1(1333333�?9333333�?A333333�?I333333�?a|�A �0?i�ď8��?�Unknown
�CHostReadVariableOp"(sequential/dense_2/MatMul/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?a|�A �0?i)�oH��?�Unknown
yDHostReadVariableOp"div_no_nan_1/ReadVariableOp_1(1      �?9      �?A      �?I      �?a%�m �+?i	�� ��?�Unknown
�EHostReadVariableOp"'sequential/dense/BiasAdd/ReadVariableOp(1      �?9      �?A      �?I      �?a%�m �+?i�ڏ���?�Unknown
�FHostReadVariableOp"&sequential/dense/MatMul/ReadVariableOp(1      �?9      �?A      �?I      �?a%�m �+?i��p��?�Unknown
�GHostReadVariableOp")sequential/dense_1/BiasAdd/ReadVariableOp(1      �?9      �?A      �?I      �?a%�m �+?i��(��?�Unknown
�HHostReadVariableOp")sequential/dense_2/BiasAdd/ReadVariableOp(1      �?9      �?A      �?I      �?a%�m �+?i��?���?�Unknown
aIHostIdentity"Identity(1�������?9�������?A�������?I�������?aQ�W ��%?i	�@��?�Unknown�
uJHostReadVariableOp"div_no_nan/ReadVariableOp(1�������?9�������?A�������?I�������?aQ�W ��%?i������?�Unknown
wKHostReadVariableOp"div_no_nan_1/ReadVariableOp(1�������?9�������?A�������?I�������?aQ�W ��%?i     �?�Unknown