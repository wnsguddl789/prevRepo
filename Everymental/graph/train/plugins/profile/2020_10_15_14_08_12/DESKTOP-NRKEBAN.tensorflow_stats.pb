"�Y
DDeviceIDLE"IDLE1�����ƠBA�����ƠBQ      �?Y      �?�Unknown
BHostIDLE"IDLE1     ��@A     ��@aI���<��?iI���<��?�Unknown
uHostFlushSummaryWriter"FlushSummaryWriter(1     B�@9     B�@A     B�@I     B�@ah��A��?i���R���?�Unknown�
�HostRandomUniform"9sequential_3/dropout/dropout/random_uniform/RandomUniform(1������a@9������a@A������a@I������a@a��"��ʕ?i��n���?�Unknown
~HostMatMul"*gradient_tape/sequential_3/dense_10/MatMul(1     �W@9     �W@A     �W@I     �W@a�c6���?i;��4j�?�Unknown
�HostResourceApplyGradientDescent"-SGD/SGD/update_2/ResourceApplyGradientDescent(1�����LR@9�����LR@A�����LR@I�����LR@a:�g�?i��w�i�?�Unknown
�HostMatMul",gradient_tape/sequential_3/dense_10/MatMul_1(1ffffffP@9ffffffP@AffffffP@IffffffP@an���'�?iIrxY��?�Unknown
sHost_FusedMatMul"sequential_3/dense_9/Relu(1������C@9������C@A������C@I������C@a����=x?i6˛���?�Unknown
�	HostRandomUniform";sequential_3/dropout_1/dropout/random_uniform/RandomUniform(1fffff�C@9fffff�C@Afffff�C@Ifffff�C@a�z���x?i+�̡��?�Unknown
d
HostDataset"Iterator::Model(1      =@9      =@A33333�7@I33333�7@aُ�&m?i����6�?�Unknown
�HostResourceApplyGradientDescent"-SGD/SGD/update_5/ResourceApplyGradientDescent(1�����L7@9�����L7@A�����L7@I�����L7@a��_Ȇl?i�r��}S�?�Unknown
ZHostArgMax"ArgMax(13333337@93333337@A3333337@I3333337@a�G0kpgl?i�� �o�?�Unknown
tHost_FusedMatMul"sequential_3/dense_10/Relu(1������5@9������5@A������5@I������5@a'�5��qj?i����V��?�Unknown
eHost
LogicalAnd"
LogicalAnd(1�����3@9�����3@A�����3@I�����3@aS^�{fbg?igc]���?�Unknown�
iHostWriteSummary"WriteSummary(1�����3@9�����3@A�����3@I�����3@aS^�{fbg?iv�����?�Unknown�
�HostDataset"?Iterator::Model::ParallelMapV2::Zip[0]::FlatMap[2]::Concatenate(1�����A@9�����A@A�����L2@I�����L2@a:�gf?i�m���?�Unknown
�HostDataset"AIterator::Model::ParallelMapV2::Zip[1]::ForeverRepeat::FromTensor(1ffffff0@9ffffff @Affffff0@Iffffff @an���'d?i9�ה���?�Unknown
�HostBiasAddGrad"7gradient_tape/sequential_3/dense_10/BiasAdd/BiasAddGrad(1      .@9      .@A      .@I      .@a�t�\]b?i�zc����?�Unknown
�HostDataset"OIterator::Model::ParallelMapV2::Zip[0]::FlatMap[2]::Concatenate[0]::TensorSlice(1������-@9������-@A������-@I������-@a�̼�>b?i{7G�2�?�Unknown
}HostMatMul")gradient_tape/sequential_3/dense_9/MatMul(1������-@9������-@A������-@I������-@a�̼�>b?iH�*�p�?�Unknown
�HostReadVariableOp"+sequential_3/dense_11/MatMul/ReadVariableOp(1������-@9������-@A������-@I������-@a�$�;�b?im�f��,�?�Unknown
�Host#SparseSoftmaxCrossEntropyWithLogits"gsparse_categorical_crossentropy/SparseSoftmaxCrossEntropyWithLogits/SparseSoftmaxCrossEntropyWithLogits(1������$@9������$@A������$@I������$@aㆸ�8wY?i�ݹDK9�?�Unknown
~HostMatMul"*gradient_tape/sequential_3/dense_11/MatMul(1������ @9������ @A������ @I������ @a�EF_��T?iӀ��C�?�Unknown
�HostMatMul",gradient_tape/sequential_3/dense_11/MatMul_1(1������ @9������ @A������ @I������ @a����RT?iN�ps�M�?�Unknown
rHostSoftmax"sequential_3/dense_11/Softmax(1ffffff @9ffffff @Affffff @Iffffff @an���'T?i!8P��W�?�Unknown
�HostReluGrad"+gradient_tape/sequential_3/dense_9/ReluGrad(1������@9������@A������@I������@a<�i�XS?i��6�sa�?�Unknown
sHostCast"!sequential_3/dropout/dropout/Cast(1      @9      @A      @I      @a��f��O?i���hi�?�Unknown
�HostResourceApplyGradientDescent"+SGD/SGD/update/ResourceApplyGradientDescent(1������@9������@A������@I������@a�����L?i`�	�p�?�Unknown
�HostMul"Ugradient_tape/sparse_categorical_crossentropy/SparseSoftmaxCrossEntropyWithLogits/mul(1������@9������@A������@I������@a'�5��qJ?i�(�>w�?�Unknown
sHostDataset"Iterator::Model::ParallelMapV2(1333333@9333333@A333333@I333333@a'wG��I?i�����}�?�Unknown
^HostGatherV2"GatherV2(1ffffff@9ffffff@Affffff@Iffffff@a�����H?il{#���?�Unknown
� HostDataset"5Iterator::Model::ParallelMapV2::Zip[1]::ForeverRepeat(1������4@9������4@A������@I������@aԅàC�E?i��c4]��?�Unknown
�!HostGreaterEqual")sequential_3/dropout/dropout/GreaterEqual(1������@9������@A������@I������@aԅàC�E?i��KE���?�Unknown
x"HostDataset"#Iterator::Model::ParallelMapV2::Zip(1ffffffN@9ffffffN@A333333@I333333@a�� �E?iϋ���?�Unknown
w#Host_FusedMatMul"sequential_3/dense_11/BiasAdd(1333333@9333333@A333333@I333333@a*e
}jC?i�+Yʘ�?�Unknown
g$HostStridedSlice"strided_slice(1ffffff@9ffffff@Affffff@Iffffff@a�K��B?i�$"\q��?�Unknown
�%HostSum"1sparse_categorical_crossentropy/weighted_loss/Sum(1      @9      @A      @I      @a����#A?i�� X���?�Unknown
�&HostResourceApplyGradientDescent"-SGD/SGD/update_3/ResourceApplyGradientDescent(1333333@9333333@A333333@I333333@a�DQY��@?i��v���?�Unknown
�'HostReluGrad",gradient_tape/sequential_3/dense_10/ReluGrad(1333333@9333333@A333333@I333333@a�DQY��@?i6Q͠��?�Unknown
�(HostResourceApplyGradientDescent"-SGD/SGD/update_1/ResourceApplyGradientDescent(1ffffff
@9ffffff
@Affffff
@Iffffff
@a_���2)@?i�u{���?�Unknown
l)HostIteratorGetNext"IteratorGetNext(1������@9������@A������@I������@a6�*��\>?i8;ي��?�Unknown
�*HostResourceApplyGradientDescent"-SGD/SGD/update_4/ResourceApplyGradientDescent(1333333@9333333@A333333@I333333@a�G0kpg<?iA��xp��?�Unknown
`+HostGatherV2"
GatherV2_1(1ffffff@9ffffff@Affffff@Iffffff@aj�)�l;?i��K޸�?�Unknown
�,HostBiasAddGrad"6gradient_tape/sequential_3/dense_9/BiasAdd/BiasAddGrad(1������@9������@A������@I������@aㆸ�8w9?i��`���?�Unknown
u-HostCast"#sequential_3/dropout_1/dropout/Cast(1      @9      @A      @I      @a�F;e{|8?iVͅ��?�Unknown
�.HostTile"Bgradient_tape/sparse_categorical_crossentropy/weighted_loss/Tile_1(1ffffff@9ffffff@Affffff@Iffffff@a�@� �6?i5��e���?�Unknown
�/HostReadVariableOp",sequential_3/dense_11/BiasAdd/ReadVariableOp(1������@9������@A������@I������@aԅàC�5?i��]���?�Unknown
�0HostReadVariableOp"+sequential_3/dense_9/BiasAdd/ReadVariableOp(1������ @9������ @A������ @I������ @a�EF_��4?io�)1��?�Unknown
�1HostPack"/sparse_categorical_crossentropy/Reshape_1/shape(1������ @9������ @A������ @I������ @a�EF_��4?i8��O���?�Unknown
�2HostStridedSlice"-sparse_categorical_crossentropy/strided_slice(1������ @9������ @A������ @I������ @a�EF_��4?iq��U��?�Unknown
t3HostAssignAddVariableOp"AssignAddVariableOp(1       @9       @A       @I       @aL�ɖ3?i"*�Y���?�Unknown
s4HostReadVariableOp"SGD/Cast/ReadVariableOp(1       @9       @A       @I       @aL�ɖ3?iC�3;��?�Unknown
�5HostBiasAddGrad"7gradient_tape/sequential_3/dense_11/BiasAdd/BiasAddGrad(1ffffff�?9ffffff�?Affffff�?Iffffff�?a�K��2?i�l�����?�Unknown
v6HostAssignAddVariableOp"AssignAddVariableOp_2(1�������?9�������?A�������?I�������?ańΚN�1?i��W����?�Unknown
q7HostMul" sequential_3/dropout/dropout/Mul(1�������?9�������?A�������?I�������?ańΚN�1?i^ +���?�Unknown
V8HostSum"Sum_2(1333333�?9333333�?A333333�?I333333�?a�DQY��0?i�JV���?�Unknown
�9HostDataset"/Iterator::Model::ParallelMapV2::Zip[0]::FlatMap(1������A@9������A@A�������?I�������?az�/�W/?iE�T��?�Unknown
�:HostGreaterEqual"+sequential_3/dropout_1/dropout/GreaterEqual(1�������?9�������?A�������?I�������?az�/�W/?i�?\����?�Unknown
X;HostEqual"Equal(1ffffff�?9ffffff�?Affffff�?Iffffff�?aj�)�l+?i�ڎ����?�Unknown
�<HostMul"0gradient_tape/sequential_3/dropout/dropout/Mul_1(1ffffff�?9ffffff�?Affffff�?Iffffff�?aj�)�l+?i�u�ed��?�Unknown
X=HostCast"Cast_2(1�������?9�������?A�������?I�������?aㆸ�8w)?iq�K����?�Unknown
s>HostMul""sequential_3/dropout/dropout/Mul_1(1�������?9�������?A�������?I�������?aㆸ�8w)?i�L�L���?�Unknown
|?HostAssignAddVariableOp"SGD/SGD/AssignAddVariableOp(1333333�?9333333�?A333333�?I333333�?a[�#��'?iو�h��?�Unknown
�@HostMul"0gradient_tape/sequential_3/dropout_1/dropout/Mul(1333333�?9333333�?A333333�?I333333�?a[�#��'?i�Ě����?�Unknown
VAHostCast"Cast(1�������?9�������?A�������?I�������?aԅàC�%?i���H���?�Unknown
�BHostCast"bsparse_categorical_crossentropy/ArithmeticOptimizer/ReorderCastLikeAndValuePreserving_int64_Cast_1(1�������?9�������?A�������?I�������?aԅàC�%?i)�5��?�Unknown
vCHostAssignAddVariableOp"AssignAddVariableOp_4(1      �?9      �?A      �?I      �?aL�ɖ#?i���yn��?�Unknown
DHostMul".gradient_tape/sequential_3/dropout/dropout/Mul(1      �?9      �?A      �?I      �?aL�ɖ#?iI�2���?�Unknown
�EHostDivNoNan"Lgradient_tape/sparse_categorical_crossentropy/weighted_loss/value/div_no_nan(1      �?9      �?A      �?I      �?aL�ɖ#?i�r�R���?�Unknown
sFHostMul""sequential_3/dropout_1/dropout/Mul(1      �?9      �?A      �?I      �?aL�ɖ#?iiOV���?�Unknown
�GHostDataset"NIterator::Model::ParallelMapV2::Zip[0]::FlatMap[2]::Concatenate[1]::FromTensor(1�������?9�������?A�������?I�������?ańΚN�!?iQ�?�4��?�Unknown
`HHostDivNoNan"
div_no_nan(1�������?9�������?A�������?I�������?ańΚN�!?i9�)�N��?�Unknown
�IHostDivNoNan"3sparse_categorical_crossentropy/weighted_loss/value(1�������?9�������?A�������?I�������?ańΚN�!?i!V�h��?�Unknown
vJHostAssignAddVariableOp"AssignAddVariableOp_1(1�������?9�������?A�������?I�������?az�/�W?ia�T�c��?�Unknown
XKHostCast"Cast_1(1�������?9�������?A�������?I�������?az�/�W?i�P�x^��?�Unknown
aLHostIdentity"Identity(1�������?9�������?A�������?I�������?az�/�W?i���5Y��?�Unknown�
�MHostMul"2gradient_tape/sequential_3/dropout_1/dropout/Mul_1(1�������?9�������?A�������?I�������?az�/�W?i!K�S��?�Unknown
XNHostCast"Cast_3(1ffffff�?9ffffff�?Affffff�?Iffffff�?aj�)�l?i���X/��?�Unknown
bOHostDivNoNan"div_no_nan_1(1ffffff�?9ffffff�?Affffff�?Iffffff�?aj�)�l?iQ�K�
��?�Unknown
wPHostReadVariableOp"div_no_nan_1/ReadVariableOp(1ffffff�?9ffffff�?Affffff�?Iffffff�?aj�)�l?i�3�#���?�Unknown
�QHostReadVariableOp"+sequential_3/dense_10/MatMul/ReadVariableOp(1ffffff�?9ffffff�?Affffff�?Iffffff�?aj�)�l?i��~����?�Unknown
�RHostCast"?sparse_categorical_crossentropy/weighted_loss/num_elements/Cast(1ffffff�?9ffffff�?Affffff�?Iffffff�?aj�)�l?i����?�Unknown
XSHostCast"Cast_4(1333333�?9333333�?A333333�?I333333�?a[�#��?i	��X��?�Unknown
�THostReadVariableOp",sequential_3/dense_10/BiasAdd/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?a[�#��?i�
�
��?�Unknown
�UHostReadVariableOp"*sequential_3/dense_9/MatMul/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?a[�#��?i�(����?�Unknown
vVHostAssignAddVariableOp"AssignAddVariableOp_3(1      �?9      �?A      �?I      �?aL�ɖ?i14�m��?�Unknown
TWHostMul"Mul(1      �?9      �?A      �?I      �?aL�ɖ?iy}�
��?�Unknown
uXHostMul"$sequential_3/dropout_1/dropout/Mul_1(1      �?9      �?A      �?I      �?aL�ɖ?i���;���?�Unknown
wYHostReadVariableOp"div_no_nan/ReadVariableOp_1(1�������?9�������?A�������?I�������?az�/�W?ia�f�$��?�Unknown
yZHostReadVariableOp"div_no_nan_1/ReadVariableOp_1(1�������?9�������?A�������?I�������?az�/�W?iq����?�Unknown
u[HostReadVariableOp"div_no_nan/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?a[�#��?i�������?�Unknown*�X
uHostFlushSummaryWriter"FlushSummaryWriter(1     B�@9     B�@A     B�@I     B�@a��,��?i��,��?�Unknown�
�HostRandomUniform"9sequential_3/dropout/dropout/random_uniform/RandomUniform(1������a@9������a@A������a@I������a@aU'E`kª?ioJ1�(��?�Unknown
~HostMatMul"*gradient_tape/sequential_3/dense_10/MatMul(1     �W@9     �W@A     �W@I     �W@a�gVF'ڡ?i谖;���?�Unknown
�HostResourceApplyGradientDescent"-SGD/SGD/update_2/ResourceApplyGradientDescent(1�����LR@9�����LR@A�����LR@I�����LR@a�F��؂�?ik$��?�Unknown
�HostMatMul",gradient_tape/sequential_3/dense_10/MatMul_1(1ffffffP@9ffffffP@AffffffP@IffffffP@aEi�U���?ig���i�?�Unknown
sHost_FusedMatMul"sequential_3/dense_9/Relu(1������C@9������C@A������C@I������C@a��&!č?i�4k�/��?�Unknown
�HostRandomUniform";sequential_3/dropout_1/dropout/random_uniform/RandomUniform(1fffff�C@9fffff�C@Afffff�C@Ifffff�C@a�48�f��?i�HYV�?�Unknown
dHostDataset"Iterator::Model(1      =@9      =@A33333�7@I33333�7@a��3�Ё?iʋ=���?�Unknown
�	HostResourceApplyGradientDescent"-SGD/SGD/update_5/ResourceApplyGradientDescent(1�����L7@9�����L7@A�����L7@I�����L7@a�?����?i��{���?�Unknown
Z
HostArgMax"ArgMax(13333337@93333337@A3333337@I3333337@a�o${Qp�?i�v��j)�?�Unknown
tHost_FusedMatMul"sequential_3/dense_10/Relu(1������5@9������5@A������5@I������5@a	q,o<�?iM�4~\j�?�Unknown
eHost
LogicalAnd"
LogicalAnd(1�����3@9�����3@A�����3@I�����3@a�E� ��|?i�<v�ɣ�?�Unknown�
iHostWriteSummary"WriteSummary(1�����3@9�����3@A�����3@I�����3@a�E� ��|?ic�j7��?�Unknown�
�HostDataset"?Iterator::Model::ParallelMapV2::Zip[0]::FlatMap[2]::Concatenate(1�����A@9�����A@A�����L2@I�����L2@a�F��؂{?i�S[=�?�Unknown
�HostDataset"AIterator::Model::ParallelMapV2::Zip[1]::ForeverRepeat::FromTensor(1ffffff0@9ffffff @Affffff0@Iffffff @aEi�U��x?i��[�E�?�Unknown
�HostBiasAddGrad"7gradient_tape/sequential_3/dense_10/BiasAdd/BiasAddGrad(1      .@9      .@A      .@I      .@a6�_Kӌv?i���r�?�Unknown
�HostDataset"OIterator::Model::ParallelMapV2::Zip[0]::FlatMap[2]::Concatenate[0]::TensorSlice(1������-@9������-@A������-@I������-@aZ|Wfv?i0���r��?�Unknown
}HostMatMul")gradient_tape/sequential_3/dense_9/MatMul(1������-@9������-@A������-@I������-@aZ|Wfv?iG��]?��?�Unknown
�HostReadVariableOp"+sequential_3/dense_11/MatMul/ReadVariableOp(1������-@9������-@A������-@I������-@a~k���?v?i����?�Unknown
�Host#SparseSoftmaxCrossEntropyWithLogits"gsparse_categorical_crossentropy/SparseSoftmaxCrossEntropyWithLogits/SparseSoftmaxCrossEntropyWithLogits(1������$@9������$@A������$@I������$@a-���Do?i��?�Unknown
~HostMatMul"*gradient_tape/sequential_3/dense_11/MatMul(1������ @9������ @A������ @I������ @a��`}�Ai?i�+��E1�?�Unknown
�HostMatMul",gradient_tape/sequential_3/dense_11/MatMul_1(1������ @9������ @A������ @I������ @a�����h?i�ł7:J�?�Unknown
rHostSoftmax"sequential_3/dense_11/Softmax(1ffffff @9ffffff @Affffff @Iffffff @aEi�U��h?i�����b�?�Unknown
�HostReluGrad"+gradient_tape/sequential_3/dense_9/ReluGrad(1������@9������@A������@I������@a�|���g?i�s��z�?�Unknown
sHostCast"!sequential_3/dropout/dropout/Cast(1      @9      @A      @I      @a�-���c?iԫ��-��?�Unknown
�HostResourceApplyGradientDescent"+SGD/SGD/update/ResourceApplyGradientDescent(1������@9������@A������@I������@a���J�a?i�����?�Unknown
�HostMul"Ugradient_tape/sparse_categorical_crossentropy/SparseSoftmaxCrossEntropyWithLogits/mul(1������@9������@A������@I������@a	q,o<`?i��3c'��?�Unknown
sHostDataset"Iterator::Model::ParallelMapV2(1333333@9333333@A333333@I333333@a�b�0��_?i&�����?�Unknown
^HostGatherV2"GatherV2(1ffffff@9ffffff@Affffff@Iffffff@a�cc�
�^?iؐ<_l��?�Unknown
�HostDataset"5Iterator::Model::ParallelMapV2::Zip[1]::ForeverRepeat(1������4@9������4@A������@I������@a��}�ruZ?i�Ϣ���?�Unknown
�HostGreaterEqual")sequential_3/dropout/dropout/GreaterEqual(1������@9������@A������@I������@a��}�ruZ?i�	����?�Unknown
x HostDataset"#Iterator::Model::ParallelMapV2::Zip(1ffffffN@9ffffffN@A333333@I333333@a*h更�Y?it�ے���?�Unknown
w!Host_FusedMatMul"sequential_3/dense_11/BiasAdd(1333333@9333333@A333333@I333333@aaj��sW?i)�^q��?�Unknown
g"HostStridedSlice"strided_slice(1ffffff@9ffffff@Affffff@Iffffff@a��&���V?i�tNW��?�Unknown
�#HostSum"1sparse_categorical_crossentropy/weighted_loss/Sum(1      @9      @A      @I      @a�l{h�U?iT��S|�?�Unknown
�$HostResourceApplyGradientDescent"-SGD/SGD/update_3/ResourceApplyGradientDescent(1333333@9333333@A333333@I333333@a'��@rT?i�(#W�"�?�Unknown
�%HostReluGrad",gradient_tape/sequential_3/dense_10/ReluGrad(1333333@9333333@A333333@I333333@a'��@rT?iB��Z�,�?�Unknown
�&HostResourceApplyGradientDescent"-SGD/SGD/update_1/ResourceApplyGradientDescent(1ffffff
@9ffffff
@Affffff
@Iffffff
@a�m^�S?iyN�e�6�?�Unknown
l'HostIteratorGetNext"IteratorGetNext(1������@9������@A������@I������@a�nA�3�R?i0o�,@�?�Unknown
�(HostResourceApplyGradientDescent"-SGD/SGD/update_4/ResourceApplyGradientDescent(1333333@9333333@A333333@I333333@a�o${QpQ?ihs��H�?�Unknown
`)HostGatherV2"
GatherV2_1(1ffffff@9ffffff@Affffff@Iffffff@az�S`�P?i`̜�OQ�?�Unknown
�*HostBiasAddGrad"6gradient_tape/sequential_3/dense_9/BiasAdd/BiasAddGrad(1������@9������@A������@I������@a-���DO?i��!Y�?�Unknown
u+HostCast"#sequential_3/dropout_1/dropout/Cast(1      @9      @A      @I      @aI�ԹN?i~^�`�?�Unknown
�,HostTile"Bgradient_tape/sparse_categorical_crossentropy/weighted_loss/Tile_1(1ffffff@9ffffff@Affffff@Iffffff@a��U�K?i�dT��g�?�Unknown
�-HostReadVariableOp",sequential_3/dense_11/BiasAdd/ReadVariableOp(1������@9������@A������@I������@a��}�ruJ?iF�-n�?�Unknown
�.HostReadVariableOp"+sequential_3/dense_9/BiasAdd/ReadVariableOp(1������ @9������ @A������ @I������ @a��`}�AI?i��&t}t�?�Unknown
�/HostPack"/sparse_categorical_crossentropy/Reshape_1/shape(1������ @9������ @A������ @I������ @a��`}�AI?i�4F��z�?�Unknown
�0HostStridedSlice"-sparse_categorical_crossentropy/strided_slice(1������ @9������ @A������ @I������ @a��`}�AI?i�e<��?�Unknown
t1HostAssignAddVariableOp"AssignAddVariableOp(1       @9       @A       @I       @a��C.�H?i��!��?�Unknown
s2HostReadVariableOp"SGD/Cast/ReadVariableOp(1       @9       @A       @I       @a��C.�H?i�|%��?�Unknown
�3HostBiasAddGrad"7gradient_tape/sequential_3/dense_11/BiasAdd/BiasAddGrad(1ffffff�?9ffffff�?Affffff�?Iffffff�?a��&���F?i�xt�ے�?�Unknown
v4HostAssignAddVariableOp"AssignAddVariableOp_2(1�������?9�������?A�������?I�������?a�	��E?i{� E��?�Unknown
q5HostMul" sequential_3/dropout/dropout/Mul(1�������?9�������?A�������?I�������?a�	��E?i�}<{���?�Unknown
V6HostSum"Sum_2(1333333�?9333333�?A333333�?I333333�?a'��@rD?iԸ�ʢ�?�Unknown
�7HostDataset"/Iterator::Model::ParallelMapV2::Zip[0]::FlatMap(1������A@9������A@A�������?I�������?aC���$>C?i�,I����?�Unknown
�8HostGreaterEqual"+sequential_3/dropout_1/dropout/GreaterEqual(1�������?9�������?A�������?I�������?aC���$>C?i̠�j��?�Unknown
X9HostEqual"Equal(1ffffff�?9ffffff�?Affffff�?Iffffff�?az�S`�@?iH������?�Unknown
�:HostMul"0gradient_tape/sequential_3/dropout/dropout/Mul_1(1ffffff�?9ffffff�?Affffff�?Iffffff�?az�S`�@?i�k�?մ�?�Unknown
X;HostCast"Cast_2(1�������?9�������?A�������?I�������?a-���D??i �0߽��?�Unknown
s<HostMul""sequential_3/dropout/dropout/Mul_1(1�������?9�������?A�������?I�������?a-���D??i<��~���?�Unknown
|=HostAssignAddVariableOp"SGD/SGD/AssignAddVariableOp(1333333�?9333333�?A333333�?I333333�?ad�j7�<?i9��%B��?�Unknown
�>HostMul"0gradient_tape/sequential_3/dropout_1/dropout/Mul(1333333�?9333333�?A333333�?I333333�?ad�j7�<?i6V�����?�Unknown
V?HostCast"Cast(1�������?9�������?A�������?I�������?a��}�ru:?i���z,��?�Unknown
�@HostCast"bsparse_categorical_crossentropy/ArithmeticOptimizer/ReorderCastLikeAndValuePreserving_int64_Cast_1(1�������?9�������?A�������?I�������?a��}�ru:?i�u?){��?�Unknown
vAHostAssignAddVariableOp"AssignAddVariableOp_4(1      �?9      �?A      �?I      �?a��C.�8?i->�|��?�Unknown
BHostMul".gradient_tape/sequential_3/dropout/dropout/Mul(1      �?9      �?A      �?I      �?a��C.�8?i�˔~��?�Unknown
�CHostDivNoNan"Lgradient_tape/sparse_categorical_crossentropy/weighted_loss/value/div_no_nan(1      �?9      �?A      �?I      �?a��C.�8?i'ϐJ���?�Unknown
sDHostMul""sequential_3/dropout_1/dropout/Mul(1      �?9      �?A      �?I      �?a��C.�8?i��V ���?�Unknown
�EHostDataset"NIterator::Model::ParallelMapV2::Zip[0]::FlatMap[2]::Concatenate[1]::FromTensor(1�������?9�������?A�������?I�������?a�	��5?i☈�6��?�Unknown
`FHostDivNoNan"
div_no_nan(1�������?9�������?A�������?I�������?a�	��5?i ��z���?�Unknown
�GHostDivNoNan"3sparse_categorical_crossentropy/weighted_loss/value(1�������?9�������?A�������?I�������?a�	��5?i^��7���?�Unknown
vHHostAssignAddVariableOp"AssignAddVariableOp_1(1�������?9�������?A�������?I�������?aC���$>3?i\Պ���?�Unknown
XIHostCast"Cast_1(1�������?9�������?A�������?I�������?aC���$>3?iZ)�o��?�Unknown
aJHostIdentity"Identity(1�������?9�������?A�������?I�������?aC���$>3?iXIǅ���?�Unknown�
�KHostMul"2gradient_tape/sequential_3/dropout_1/dropout/Mul_1(1�������?9�������?A�������?I�������?aC���$>3?iV�eJ?��?�Unknown
XLHostCast"Cast_3(1ffffff�?9ffffff�?Affffff�?Iffffff�?az�S`�0?i�oZ��?�Unknown
bMHostDivNoNan"div_no_nan_1(1ffffff�?9ffffff�?Affffff�?Iffffff�?az�S`�0?i�hz�t��?�Unknown
wNHostReadVariableOp"div_no_nan_1/ReadVariableOp(1ffffff�?9ffffff�?Affffff�?Iffffff�?az�S`�0?i�ۄ����?�Unknown
�OHostReadVariableOp"+sequential_3/dense_10/MatMul/ReadVariableOp(1ffffff�?9ffffff�?Affffff�?Iffffff�?az�S`�0?iNN�z���?�Unknown
�PHostCast"?sparse_categorical_crossentropy/weighted_loss/num_elements/Cast(1ffffff�?9ffffff�?Affffff�?Iffffff�?az�S`�0?i��F���?�Unknown
XQHostCast"Cast_4(1333333�?9333333�?A333333�?I333333�?ad�j7�,?i�l���?�Unknown
�RHostReadVariableOp",sequential_3/dense_10/BiasAdd/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?ad�j7�,?i��`��?�Unknown
�SHostReadVariableOp"*sequential_3/dense_9/MatMul/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?ad�j7�,?i����.��?�Unknown
vTHostAssignAddVariableOp"AssignAddVariableOp_3(1      �?9      �?A      �?I      �?a��C.�(?iŧ�����?�Unknown
TUHostMul"Mul(1      �?9      �?A      �?I      �?a��C.�(?i��v0��?�Unknown
uVHostMul"$sequential_3/dropout_1/dropout/Mul_1(1      �?9      �?A      �?I      �?a��C.�(?iCp�Q���?�Unknown
wWHostReadVariableOp"div_no_nan/ReadVariableOp_1(1�������?9�������?A�������?I�������?aC���$>#?iB��3���?�Unknown
yXHostReadVariableOp"div_no_nan_1/ReadVariableOp_1(1�������?9�������?A�������?I�������?aC���$>#?iA�D��?�Unknown
uYHostReadVariableOp"div_no_nan/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?ad�j7�?i      �?�Unknown