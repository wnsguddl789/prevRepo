"�K
DDeviceIDLE"IDLE1�����ƠBA�����ƠBQ      �?Y      �?�Unknown
BHostIDLE"IDLE1     H�@A     H�@a���o[��?i���o[��?�Unknown
uHostFlushSummaryWriter"FlushSummaryWriter(133333��@933333��@A33333��@I33333��@a�>��^��?i�cG)]��?�Unknown�
�HostDataset"?Iterator::Model::ParallelMapV2::Zip[0]::FlatMap[2]::Concatenate(133333g@933333g@A������f@I������f@am�s�K�?i��.�Q4�?�Unknown
{HostMatMul"'gradient_tape/sequential/dense_1/MatMul(133333s]@933333s]@A33333s]@I33333s]@a�`���?i��߇a#�?�Unknown
}HostMatMul")gradient_tape/sequential/dense_1/MatMul_1(1      Z@9      Z@A      Z@I      Z@a��0�a�?i��d�o��?�Unknown
�HostResourceApplyGradientDescent"-SGD/SGD/update_2/ResourceApplyGradientDescent(1�����LT@9�����LT@A�����LT@I�����LT@a�`b$��?i�u�8��?�Unknown
oHost_FusedMatMul"sequential/dense/Relu(1     @G@9     @G@A     @G@I     @G@a&�
�o��?i�H����?�Unknown
y	HostMatMul"%gradient_tape/sequential/dense/MatMul(1fffff�D@9fffff�D@Afffff�D@Ifffff�D@a �6��4�?iH#��jN�?�Unknown
q
Host_FusedMatMul"sequential/dense_1/Relu(133333sA@933333sA@A33333sA@I33333sA@aj��Ҵ�?i���=��?�Unknown
�HostDataset"5Iterator::Model::ParallelMapV2::Zip[1]::ForeverRepeat(1fffff�A@9fffff�A@A     @@@I     @@@aL�g~}�?i�~_2��?�Unknown
�HostStridedSlice"-sparse_categorical_crossentropy/strided_slice(133333�8@933333�8@A33333�8@I33333�8@aU���y?i��'�R	�?�Unknown
oHostSoftmax"sequential/dense_2/Softmax(13333336@93333336@A3333336@I3333336@a��>���v?i{s �_6�?�Unknown
sHostDataset"Iterator::Model::ParallelMapV2(133333�3@933333�3@A33333�3@I33333�3@a*�#I�s?i�3hZ^�?�Unknown
gHostStridedSlice"strided_slice(1�����L1@9�����L1@A�����L1@I�����L1@a�O3+܍q?io��7v��?�Unknown
|HostAssignAddVariableOp"SGD/SGD/AssignAddVariableOp(1333333+@9333333+@A333333+@I333333+@a�S��}�k?iÖk���?�Unknown
dHostDataset"Iterator::Model(1fffff&@@9fffff&@@A333333)@I333333)@av�3��i?i�������?�Unknown
�Host#SparseSoftmaxCrossEntropyWithLogits"gsparse_categorical_crossentropy/SparseSoftmaxCrossEntropyWithLogits/SparseSoftmaxCrossEntropyWithLogits(1������%@9������%@A������%@I������%@a����e?ib�\����?�Unknown
iHostWriteSummary"WriteSummary(1������"@9������"@A������"@I������"@a,X�F�c?i�`����?�Unknown�
}HostMatMul")gradient_tape/sequential/dense_2/MatMul_1(1������"@9������"@A������"@I������"@a,X�F�c?i ꂳ��?�Unknown
�HostResourceApplyGradientDescent"+SGD/SGD/update/ResourceApplyGradientDescent(1      "@9      "@A      "@I      "@a�dI�Cb?iw34��?�Unknown
}HostReluGrad"'gradient_tape/sequential/dense/ReluGrad(1      !@9      !@A      !@I      !@a���?a?i+.�"7�?�Unknown
tHost_FusedMatMul"sequential/dense_2/BiasAdd(1      !@9      !@A      !@I      !@a���?a?i�KKw'�?�Unknown
�HostResourceApplyGradientDescent"-SGD/SGD/update_4/ResourceApplyGradientDescent(1333333@9333333@A333333@I333333@a���&�]?i��ޒG6�?�Unknown
^HostGatherV2"GatherV2(1������@9������@A������@I������@a���+e\?i��tEHD�?�Unknown
�HostMul"Ugradient_tape/sparse_categorical_crossentropy/SparseSoftmaxCrossEntropyWithLogits/mul(1������@9������@A������@I������@a�yO�*Y?i]��M�P�?�Unknown
{HostMatMul"'gradient_tape/sequential/dense_2/MatMul(1333333@9333333@A333333@I333333@a�1�r�W?i&_+��\�?�Unknown
xHostDataset"#Iterator::Model::ParallelMapV2::Zip(1�����Il@9�����Il@A������@I������@a�K.DO�S?iLv�.�f�?�Unknown
�HostResourceApplyGradientDescent"-SGD/SGD/update_5/ResourceApplyGradientDescent(1ffffff@9ffffff@Affffff@Iffffff@a�}�M�P?i�ot8�n�?�Unknown
ZHostArgMax"ArgMax(1ffffff@9ffffff@Affffff@Iffffff@a�!8���N?i�=�f�v�?�Unknown
HostReluGrad")gradient_tape/sequential/dense_1/ReluGrad(1333333@9333333@A333333@I333333@a�S��}�K?i�|HƂ}�?�Unknown
l HostIteratorGetNext"IteratorGetNext(1ffffff
@9ffffff
@Affffff
@Iffffff
@a�`m���J?i X�15��?�Unknown
�!HostBiasAddGrad"2gradient_tape/sequential/dense/BiasAdd/BiasAddGrad(1������	@9������	@A������	@I������	@a,mޱ��I?i��ੳ��?�Unknown
�"HostResourceApplyGradientDescent"-SGD/SGD/update_1/ResourceApplyGradientDescent(1      @9      @A      @I      @aY���AZH?i�N:ʐ�?�Unknown
e#Host
LogicalAnd"
LogicalAnd(1333333@9333333@A333333@I333333@a�1�r�G?i"��֬��?�Unknown�
�$HostDataset"AIterator::Model::ParallelMapV2::Zip[1]::ForeverRepeat::FromTensor(1ffffff@9ffffff�?Affffff@Iffffff�?a������F?iʴ�[��?�Unknown
�%HostTile"Bgradient_tape/sparse_categorical_crossentropy/weighted_loss/Tile_1(1ffffff@9ffffff@Affffff@Iffffff@a������F?ir��(
��?�Unknown
�&HostPack"/sparse_categorical_crossentropy/Reshape_1/shape(1������@9������@A������@I������@a����E?i]"
ބ��?�Unknown
`'HostGatherV2"
GatherV2_1(1������@9������@A������@I������@a����E?i�Cz�ˬ�?�Unknown
�(HostBiasAddGrad"4gradient_tape/sequential/dense_1/BiasAdd/BiasAddGrad(1333333@9333333@A333333@I333333@a��f�g{C?i?�ky���?�Unknown
V)HostSum"Sum_2(1ffffff@9ffffff@Affffff@Iffffff@aw��ǘ�B?i7��_U��?�Unknown
�*HostBiasAddGrad"4gradient_tape/sequential/dense_2/BiasAdd/BiasAddGrad(1������@9������@A������@I������@a�H���A?ir%R̺�?�Unknown
�+HostDataset"/Iterator::Model::ParallelMapV2::Zip[0]::FlatMap(133333Cg@933333Cg@A       @I       @a;+�+<@?i3�]۾�?�Unknown
�,HostResourceApplyGradientDescent"-SGD/SGD/update_3/ResourceApplyGradientDescent(1       @9       @A       @I       @a;+�+<@?i���g���?�Unknown
v-HostAssignAddVariableOp"AssignAddVariableOp_2(1ffffff�?9ffffff�?Affffff�?Iffffff�?a�!8���>?i�!,���?�Unknown
�.HostReadVariableOp"'sequential/dense/BiasAdd/ReadVariableOp(1�������?9�������?A�������?I�������?a�:�9=?i?%��l��?�Unknown
�/HostReadVariableOp")sequential/dense_2/BiasAdd/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?a�S��}�;?i��V����?�Unknown
�0HostReadVariableOp"&sequential/dense/MatMul/ReadVariableOp(1�������?9�������?A�������?I�������?a,mޱ��9?i� M��?�Unknown
�1HostCast"?sparse_categorical_crossentropy/weighted_loss/num_elements/Cast(1�������?9�������?A�������?I�������?a,mޱ��9?ie<CJ^��?�Unknown
X2HostCast"Cast_2(1      �?9      �?A      �?I      �?aY���AZ8?ivz�i��?�Unknown
X3HostEqual"Equal(1      �?9      �?A      �?I      �?aY���AZ8?i���t��?�Unknown
�4HostDivNoNan"Lgradient_tape/sparse_categorical_crossentropy/weighted_loss/value/div_no_nan(1ffffff�?9ffffff�?Affffff�?Iffffff�?a������6?i�`(/L��?�Unknown
�5HostCast"bsparse_categorical_crossentropy/ArithmeticOptimizer/ReorderCastLikeAndValuePreserving_int64_Cast_1(1ffffff�?9ffffff�?Affffff�?Iffffff�?a������6?i/՟�#��?�Unknown
X6HostCast"Cast_3(1�������?9�������?A�������?I�������?a����5?i��W����?�Unknown
�7HostDataset"NIterator::Model::ParallelMapV2::Zip[0]::FlatMap[2]::Concatenate[1]::FromTensor(1333333�?9333333�?A333333�?I333333�?a��f�g{3?i��PQ6��?�Unknown
v8HostAssignAddVariableOp"AssignAddVariableOp_4(1�������?9�������?A�������?I�������?a�H���1?i�ۉ�q��?�Unknown
V9HostCast"Cast(1�������?9�������?A�������?I�������?a�H���1?i�$�C���?�Unknown
b:HostDivNoNan"div_no_nan_1(1�������?9�������?A�������?I�������?a�H���1?i�m�����?�Unknown
X;HostCast"Cast_1(1�������?9�������?A�������?I�������?a,mޱ��)?iދ�Z���?�Unknown
�<HostSum"1sparse_categorical_crossentropy/weighted_loss/Sum(1�������?9�������?A�������?I�������?a,mޱ��)?iũ��'��?�Unknown
v=HostAssignAddVariableOp"AssignAddVariableOp_1(1ffffff�?9ffffff�?Affffff�?Iffffff�?a������&?i�c.����?�Unknown
v>HostAssignAddVariableOp"AssignAddVariableOp_3(1ffffff�?9ffffff�?Affffff�?Iffffff�?a������&?ijM���?�Unknown
X?HostCast"Cast_4(1ffffff�?9ffffff�?Affffff�?Iffffff�?a������&?iCإ�j��?�Unknown
T@HostMul"Mul(1ffffff�?9ffffff�?Affffff�?Iffffff�?a������&?im�����?�Unknown
sAHostReadVariableOp"SGD/Cast/ReadVariableOp(1ffffff�?9ffffff�?Affffff�?Iffffff�?a������&?i�LLB��?�Unknown
tBHostAssignAddVariableOp"AssignAddVariableOp(1333333�?9333333�?A333333�?I333333�?a��f�g{#?i��z��?�Unknown
�CHostDataset"OIterator::Model::ParallelMapV2::Zip[0]::FlatMap[2]::Concatenate[0]::TensorSlice(1333333�?9333333�?A333333�?I333333�?a��f�g{#?iq�����?�Unknown
`DHostDivNoNan"
div_no_nan(1      �?9      �?A      �?I      �?a;+�+< ?i!��{���?�Unknown
aEHostIdentity"Identity(1�������?9�������?A�������?I�������?a,mޱ��?i{�J���?�Unknown�
wFHostReadVariableOp"div_no_nan/ReadVariableOp_1(1�������?9�������?A�������?I�������?a,mޱ��?i
�U��?�Unknown
�GHostReadVariableOp")sequential/dense_1/BiasAdd/ReadVariableOp(1�������?9�������?A�������?I�������?a,mޱ��?i����$��?�Unknown
�HHostDivNoNan"3sparse_categorical_crossentropy/weighted_loss/value(1�������?9�������?A�������?I�������?a,mޱ��?i�'ɷ���?�Unknown
uIHostReadVariableOp"div_no_nan/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?a��f�g{?i$S����?�Unknown
wJHostReadVariableOp"div_no_nan_1/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?a��f�g{?i[~En,��?�Unknown
yKHostReadVariableOp"div_no_nan_1/ReadVariableOp_1(1333333�?9333333�?A333333�?I333333�?a��f�g{?i���I���?�Unknown
�LHostReadVariableOp"(sequential/dense_1/MatMul/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?a��f�g{?i���$d��?�Unknown
�MHostReadVariableOp"(sequential/dense_2/MatMul/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?a��f�g{?i      �?�Unknown*�J
uHostFlushSummaryWriter"FlushSummaryWriter(133333��@933333��@A33333��@I33333��@a\g	���?i\g	���?�Unknown�
�HostDataset"?Iterator::Model::ParallelMapV2::Zip[0]::FlatMap[2]::Concatenate(133333g@933333g@A������f@I������f@a5�x5o��?i#���J~�?�Unknown
{HostMatMul"'gradient_tape/sequential/dense_1/MatMul(133333s]@933333s]@A33333s]@I33333s]@a�v��'�?i�w h�/�?�Unknown
}HostMatMul")gradient_tape/sequential/dense_1/MatMul_1(1      Z@9      Z@A      Z@I      Z@a��ۇ��?iJ2��J��?�Unknown
�HostResourceApplyGradientDescent"-SGD/SGD/update_2/ResourceApplyGradientDescent(1�����LT@9�����LT@A�����LT@I�����LT@a�F]���?iԓr���?�Unknown
oHost_FusedMatMul"sequential/dense/Relu(1     @G@9     @G@A     @G@I     @G@a}Ub�?i=|>?��?�Unknown
yHostMatMul"%gradient_tape/sequential/dense/MatMul(1fffff�D@9fffff�D@Afffff�D@Ifffff�D@a��F9�?i�tY��?�Unknown
qHost_FusedMatMul"sequential/dense_1/Relu(133333sA@933333sA@A33333sA@I33333sA@a.O�G��?i�ϴ�F��?�Unknown
�	HostDataset"5Iterator::Model::ParallelMapV2::Zip[1]::ForeverRepeat(1fffff�A@9fffff�A@A     @@@I     @@@ag���J�?i�\��?�Unknown
�
HostStridedSlice"-sparse_categorical_crossentropy/strided_slice(133333�8@933333�8@A33333�8@I33333�8@a�|����?i׏��p�?�Unknown
oHostSoftmax"sequential/dense_2/Softmax(13333336@93333336@A3333336@I3333336@a�I��k�?i�Ėrc��?�Unknown
sHostDataset"Iterator::Model::ParallelMapV2(133333�3@933333�3@A33333�3@I33333�3@a��sw�?iX�eP�
�?�Unknown
gHostStridedSlice"strided_slice(1�����L1@9�����L1@A�����L1@I�����L1@a^2���?i��ςJ�?�Unknown
|HostAssignAddVariableOp"SGD/SGD/AssignAddVariableOp(1333333+@9333333+@A333333+@I333333+@a���Zay?i��Q��|�?�Unknown
dHostDataset"Iterator::Model(1fffff&@@9fffff&@@A333333)@I333333)@a�SzPx-w?i�����?�Unknown
�Host#SparseSoftmaxCrossEntropyWithLogits"gsparse_categorical_crossentropy/SparseSoftmaxCrossEntropyWithLogits/SparseSoftmaxCrossEntropyWithLogits(1������%@9������%@A������%@I������%@a�GD���s?i(v�,���?�Unknown
iHostWriteSummary"WriteSummary(1������"@9������"@A������"@I������"@a��o��Jq?iOU�I7��?�Unknown�
}HostMatMul")gradient_tape/sequential/dense_2/MatMul_1(1������"@9������"@A������"@I������"@a��o��Jq?iv4�f��?�Unknown
�HostResourceApplyGradientDescent"+SGD/SGD/update/ResourceApplyGradientDescent(1      "@9      "@A      "@I      "@a�;^1�p?i�P���8�?�Unknown
}HostReluGrad"'gradient_tape/sequential/dense/ReluGrad(1      !@9      !@A      !@I      !@a`��yEo?i�dC.X�?�Unknown
tHost_FusedMatMul"sequential/dense_2/BiasAdd(1      !@9      !@A      !@I      !@a`��yEo?i#��sw�?�Unknown
�HostResourceApplyGradientDescent"-SGD/SGD/update_4/ResourceApplyGradientDescent(1333333@9333333@A333333@I333333@awaeJ�j?i.|O��?�Unknown
^HostGatherV2"GatherV2(1������@9������@A������@I������@a[���bi?i��r����?�Unknown
�HostMul"Ugradient_tape/sparse_categorical_crossentropy/SparseSoftmaxCrossEntropyWithLogits/mul(1������@9������@A������@I������@a��ɴI�f?i1l'���?�Unknown
{HostMatMul"'gradient_tape/sequential/dense_2/MatMul(1333333@9333333@A333333@I333333@a��F�Ve?i)smp���?�Unknown
xHostDataset"#Iterator::Model::ParallelMapV2::Zip(1�����Il@9�����Il@A������@I������@a�����b?iD:\���?�Unknown
�HostResourceApplyGradientDescent"-SGD/SGD/update_5/ResourceApplyGradientDescent(1ffffff@9ffffff@Affffff@Iffffff@ae���*^?i��)����?�Unknown
ZHostArgMax"ArgMax(1ffffff@9ffffff@Affffff@Iffffff@aqs8��[?i)�E���?�Unknown
HostReluGrad")gradient_tape/sequential/dense_1/ReluGrad(1333333@9333333@A333333@I333333@a���ZaY?i@��p�?�Unknown
lHostIteratorGetNext"IteratorGetNext(1ffffff
@9ffffff
@Affffff
@Iffffff
@a�W�#HX?i-��?�Unknown
�HostBiasAddGrad"2gradient_tape/sequential/dense/BiasAdd/BiasAddGrad(1������	@9������	@A������	@I������	@a��*즋W?i�{�Z+�?�Unknown
� HostResourceApplyGradientDescent"-SGD/SGD/update_1/ResourceApplyGradientDescent(1      @9      @A      @I      @a�Oh}�V?i�Ϲ:d6�?�Unknown
e!Host
LogicalAnd"
LogicalAnd(1333333@9333333@A333333@I333333@a��F�VU?iQ�\�A�?�Unknown�
�"HostDataset"AIterator::Model::ParallelMapV2::Zip[1]::ForeverRepeat::FromTensor(1ffffff@9ffffff�?Affffff@Iffffff�?a���2�T?i!&d�\K�?�Unknown
�#HostTile"Bgradient_tape/sparse_categorical_crossentropy/weighted_loss/Tile_1(1ffffff@9ffffff@Affffff@Iffffff@a���2�T?i�xk��U�?�Unknown
�$HostPack"/sparse_categorical_crossentropy/Reshape_1/shape(1������@9������@A������@I������@a�GD���S?iמ�_�?�Unknown
`%HostGatherV2"
GatherV2_1(1������@9������@A������@I������@a���w!S?i��Z)i�?�Unknown
�&HostBiasAddGrad"4gradient_tape/sequential/dense_1/BiasAdd/BiasAddGrad(1333333@9333333@A333333@I333333@a�? 1��Q?i��?��q�?�Unknown
V'HostSum"Sum_2(1ffffff@9ffffff@Affffff@Iffffff@a���_�P?i!|<�sz�?�Unknown
�(HostBiasAddGrad"4gradient_tape/sequential/dense_2/BiasAdd/BiasAddGrad(1������@9������@A������@I������@a��]�0P?i骝ꋂ�?�Unknown
�)HostDataset"/Iterator::Model::ParallelMapV2::Zip[0]::FlatMap(133333Cg@933333Cg@A       @I       @aj�5��nM?iYxǎ��?�Unknown
�*HostResourceApplyGradientDescent"-SGD/SGD/update_3/ResourceApplyGradientDescent(1       @9       @A       @I       @aj�5��nM?i�E�2C��?�Unknown
v+HostAssignAddVariableOp"AssignAddVariableOp_2(1ffffff�?9ffffff�?Affffff�?Iffffff�?aqs8��K?i�b�@��?�Unknown
�,HostReadVariableOp"'sequential/dense/BiasAdd/ReadVariableOp(1�������?9�������?A�������?I�������?ay_��}J?i��q�ߞ�?�Unknown
�-HostReadVariableOp")sequential/dense_2/BiasAdd/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?a���ZaI?i��!��?�Unknown
�.HostReadVariableOp"&sequential/dense/MatMul/ReadVariableOp(1�������?9�������?A�������?I�������?a��*즋G?iє����?�Unknown
�/HostCast"?sparse_categorical_crossentropy/weighted_loss/num_elements/Cast(1�������?9�������?A�������?I�������?a��*즋G?i��>���?�Unknown
X0HostCast"Cast_2(1      �?9      �?A      �?I      �?a�Oh}�F?i��]�k��?�Unknown
X1HostEqual"Equal(1      �?9      �?A      �?I      �?a�Oh}�F?i�S}Q��?�Unknown
�2HostDivNoNan"Lgradient_tape/sparse_categorical_crossentropy/weighted_loss/value/div_no_nan(1ffffff�?9ffffff�?Affffff�?Iffffff�?a���2�D?i!� ���?�Unknown
�3HostCast"bsparse_categorical_crossentropy/ArithmeticOptimizer/ReorderCastLikeAndValuePreserving_int64_Cast_1(1ffffff�?9ffffff�?Affffff�?Iffffff�?a���2�D?i���j=��?�Unknown
X4HostCast"Cast_3(1�������?9�������?A�������?I�������?a���w!C?iE�l���?�Unknown
�5HostDataset"NIterator::Model::ParallelMapV2::Zip[0]::FlatMap[2]::Concatenate[1]::FromTensor(1333333�?9333333�?A333333�?I333333�?a�? 1��A?iU��o��?�Unknown
v6HostAssignAddVariableOp"AssignAddVariableOp_4(1�������?9�������?A�������?I�������?a��]�0@?i�~i�{��?�Unknown
V7HostCast"Cast(1�������?9�������?A�������?I�������?a��]�0@?i����?�Unknown
b8HostDivNoNan"div_no_nan_1(1�������?9�������?A�������?I�������?a��]�0@?i�������?�Unknown
X9HostCast"Cast_1(1�������?9�������?A�������?I�������?a��*즋7?i�2�n���?�Unknown
�:HostSum"1sparse_categorical_crossentropy/weighted_loss/Sum(1�������?9�������?A�������?I�������?a��*즋7?iA���v��?�Unknown
v;HostAssignAddVariableOp"AssignAddVariableOp_1(1ffffff�?9ffffff�?Affffff�?Iffffff�?a���2�4?i���)
��?�Unknown
v<HostAssignAddVariableOp"AssignAddVariableOp_3(1ffffff�?9ffffff�?Affffff�?Iffffff�?a���2�4?i�a	p���?�Unknown
X=HostCast"Cast_4(1ffffff�?9ffffff�?Affffff�?Iffffff�?a���2�4?i]6K�0��?�Unknown
T>HostMul"Mul(1ffffff�?9ffffff�?Affffff�?Iffffff�?a���2�4?i�����?�Unknown
s?HostReadVariableOp"SGD/Cast/ReadVariableOp(1ffffff�?9ffffff�?Affffff�?Iffffff�?a���2�4?i���BW��?�Unknown
t@HostAssignAddVariableOp"AssignAddVariableOp(1333333�?9333333�?A333333�?I333333�?a�? 1��1?i�uZ���?�Unknown
�AHostDataset"OIterator::Model::ParallelMapV2::Zip[0]::FlatMap[2]::Concatenate[0]::TensorSlice(1333333�?9333333�?A333333�?I333333�?a�? 1��1?i�'r���?�Unknown
`BHostDivNoNan"
div_no_nan(1      �?9      �?A      �?I      �?aj�5��n-?i1�%[���?�Unknown
aCHostIdentity"Identity(1�������?9�������?A�������?I�������?a��*즋'?i�]���?�Unknown�
wDHostReadVariableOp"div_no_nan/ReadVariableOp_1(1�������?9�������?A�������?I�������?a��*즋'?i� Љ��?�Unknown
�EHostReadVariableOp")sequential/dense_1/BiasAdd/ReadVariableOp(1�������?9�������?A�������?I�������?a��*즋'?iA�q���?�Unknown
�FHostDivNoNan"3sparse_categorical_crossentropy/weighted_loss/value(1�������?9�������?A�������?I�������?a��*즋'?i��D{��?�Unknown
uGHostReadVariableOp"div_no_nan/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?a�? 1��!?i���Е��?�Unknown
wHHostReadVariableOp"div_no_nan_1/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?a�? 1��!?i�Ɇ\���?�Unknown
yIHostReadVariableOp"div_no_nan_1/ReadVariableOp_1(1333333�?9333333�?A333333�?I333333�?a�? 1��!?i��Y����?�Unknown
�JHostReadVariableOp"(sequential/dense_1/MatMul/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?a�? 1��!?i�,t���?�Unknown
�KHostReadVariableOp"(sequential/dense_2/MatMul/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?a�? 1��!?i     �?�Unknown