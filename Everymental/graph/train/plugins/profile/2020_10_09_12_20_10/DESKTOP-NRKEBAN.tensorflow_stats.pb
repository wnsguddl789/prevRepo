"�K
DDeviceIDLE"IDLE1�����ƠBA�����ƠBQ      �?Y      �?�Unknown
BHostIDLE"IDLE1����̩�@A����̩�@ab����?ib����?�Unknown
uHostFlushSummaryWriter"FlushSummaryWriter(1     h�@9     h�@A     h�@I     h�@aҴ&���?i����#=�?�Unknown�
{HostMatMul"'gradient_tape/sequential/dense_1/MatMul(1������o@9������o@A������o@I������o@a��Lb�0�?i��![.�?�Unknown
oHost_FusedMatMul"sequential/dense/Relu(1������i@9������i@A������i@I������i@a
���s�?i�S%m��?�Unknown
yHostMatMul"%gradient_tape/sequential/dense/MatMul(1�����	g@9�����	g@A�����	g@I�����	g@a�=��?i$!F��?�Unknown
}HostMatMul")gradient_tape/sequential/dense_1/MatMul_1(1������M@9������M@A������M@I������M@a\��	�?iZ��l�E�?�Unknown
^HostGatherV2"GatherV2(1     �K@9     �K@A     �K@I     �K@a1Д/�1�?i�3B�Z��?�Unknown
q	Host_FusedMatMul"sequential/dense_1/Relu(1     �K@9     �K@A     �K@I     �K@a1Д/�1�?i܆ � �?�Unknown
�
HostResourceApplyGradientDescent"+SGD/SGD/update/ResourceApplyGradientDescent(1fffff�I@9fffff�I@Afffff�I@Ifffff�I@a0�eH��?i���	n�?�Unknown
}HostReluGrad"'gradient_tape/sequential/dense/ReluGrad(1ffffff=@9ffffff=@Affffff=@Iffffff=@aW�o�!�z?i����?�Unknown
�HostDataset"5Iterator::Model::ParallelMapV2::Zip[1]::ForeverRepeat(1ffffff;@9ffffff;@A     �8@I     �8@a��t�qv?i������?�Unknown
�HostDataset"?Iterator::Model::ParallelMapV2::Zip[0]::FlatMap[0]::Concatenate(13333339@93333339@A      6@I      6@a��CY�'t?i��,��?�Unknown
�HostResourceApplyGradientDescent"-SGD/SGD/update_2/ResourceApplyGradientDescent(133333�2@933333�2@A33333�2@I33333�2@a}߬ح!q?iSfc�^�?�Unknown
ZHostArgMax"ArgMax(13333332@93333332@A3333332@I3333332@as=�9j�p?i΂�\�<�?�Unknown
�HostResourceApplyGradientDescent"-SGD/SGD/update_1/ResourceApplyGradientDescent(1������1@9������1@A������1@I������1@akU��Np?iy��T]�?�Unknown
sHostDataset"Iterator::Model::ParallelMapV2(1�����L1@9�����L1@A�����L1@I�����L1@a�f�ϭ�o?i���?}�?�Unknown
�HostPack"/sparse_categorical_crossentropy/Reshape_1/shape(133333�0@933333�0@A33333�0@I33333�0@a��d�>�n?i��l~���?�Unknown
�Host#SparseSoftmaxCrossEntropyWithLogits"gsparse_categorical_crossentropy/SparseSoftmaxCrossEntropyWithLogits/SparseSoftmaxCrossEntropyWithLogits(1ffffff0@9ffffff0@Affffff0@Iffffff0@a�R�,�n?i⍙���?�Unknown
tHost_FusedMatMul"sequential/dense_2/BiasAdd(1      +@9      +@A      +@I      +@a&.v�C�h?i*Ii��?�Unknown
dHostDataset"Iterator::Model(1������>@9������>@A������*@I������*@aF��s^h?iV�����?�Unknown
}HostMatMul")gradient_tape/sequential/dense_2/MatMul_1(1������'@9������'@A������'@I������'@a�y?#ޞe?i�:+�f �?�Unknown
oHostSoftmax"sequential/dense_2/Softmax(1������&@9������&@A������&@I������&@aѩA�>�d?iz|��I�?�Unknown
iHostWriteSummary"WriteSummary(1ffffff$@9ffffff$@Affffff$@Iffffff$@a�9H�`�b?i��x:�'�?�Unknown�
{HostMatMul"'gradient_tape/sequential/dense_2/MatMul(1ffffff!@9ffffff!@Affffff!@Iffffff!@a�� ���_?i!UM�7�?�Unknown
�HostMul"Ugradient_tape/sparse_categorical_crossentropy/SparseSoftmaxCrossEntropyWithLogits/mul(1333333@9333333@A333333@I333333@a;�W?i���vC�?�Unknown
HostReluGrad")gradient_tape/sequential/dense_1/ReluGrad(1������@9������@A������@I������@a��Ħ��S?i'U��ZM�?�Unknown
gHostStridedSlice"strided_slice(1������@9������@A������@I������@a�!�A0S?i�8��V�?�Unknown
eHost
LogicalAnd"
LogicalAnd(1333333@9333333@A333333@I333333@a���w�Q?iyt��_�?�Unknown�
�HostResourceApplyGradientDescent"-SGD/SGD/update_5/ResourceApplyGradientDescent(1      @9      @A      @I      @ao�N`�}P?i�E�M�g�?�Unknown
�HostBiasAddGrad"2gradient_tape/sequential/dense/BiasAdd/BiasAddGrad(1333333@9333333@A333333@I333333@a���ŃO?i[�!?�o�?�Unknown
� HostStridedSlice"-sparse_categorical_crossentropy/strided_slice(1      @9      @A      @I      @a�����PM?i|�y!w�?�Unknown
`!HostGatherV2"
GatherV2_1(1333333@9333333@A333333@I333333@a|��bH�L?i)�,�F~�?�Unknown
�"HostSum"1sparse_categorical_crossentropy/weighted_loss/Sum(1333333@9333333@A333333@I333333@a|��bH�L?i�-El��?�Unknown
l#HostIteratorGetNext"IteratorGetNext(1ffffff@9ffffff@Affffff@Iffffff@ak����K?i���b��?�Unknown
x$HostDataset"#Iterator::Model::ParallelMapV2::Zip(1ffffffL@9ffffffL@Affffff
@Iffffff
@aҷ�/H?iǅjn��?�Unknown
�%HostDataset"OIterator::Model::ParallelMapV2::Zip[0]::FlatMap[0]::Concatenate[0]::TensorSlice(1������	@9������	@A������	@I������	@a
���sG?i���eK��?�Unknown
�&HostResourceApplyGradientDescent"-SGD/SGD/update_4/ResourceApplyGradientDescent(1������@9������@A������@I������@a�1�:M�F?i�d�x���?�Unknown
V'HostSum"Sum_2(1      @9      @A      @I      @a�a�խ�E?i)�q�x��?�Unknown
�(HostDataset"AIterator::Model::ParallelMapV2::Zip[1]::ForeverRepeat::FromTensor(1333333@9333333�?A333333@I333333�?aّ�pAE?iM�Ȩ�?�Unknown
�)HostBiasAddGrad"4gradient_tape/sequential/dense_1/BiasAdd/BiasAddGrad(1������@9������@A������@I������@a��Ħ��C?i���[���?�Unknown
�*HostResourceApplyGradientDescent"-SGD/SGD/update_3/ResourceApplyGradientDescent(1������@9������@A������@I������@a�!�A0C?iQ'�~��?�Unknown
�+HostBiasAddGrad"4gradient_tape/sequential/dense_2/BiasAdd/BiasAddGrad(1      @9      @A      @I      @a�Q�ܐRB?i�Y?���?�Unknown
|,HostAssignAddVariableOp"SGD/SGD/AssignAddVariableOp(1ffffff@9ffffff@Affffff@Iffffff@aw��R�@?i�`J��?�Unknown
�-HostTile"Bgradient_tape/sparse_categorical_crossentropy/weighted_loss/Tile_1(1ffffff@9ffffff@Affffff@Iffffff@aw��R�@?i}�H5���?�Unknown
�.HostCast"BArithmeticOptimizer/ReorderCastLikeAndValuePreserving_float_Cast_1(1������ @9������ @A������ @I������ @a�"��&�>?i�:Z��?�Unknown
v/HostAssignAddVariableOp"AssignAddVariableOp_2(1       @9       @A       @I       @a�����P=?i�W��?�Unknown
�0HostReadVariableOp"&sequential/dense/MatMul/ReadVariableOp(1�������?9�������?A�������?I�������?aKB�3jb:?i9`Z�P��?�Unknown
�1HostReadVariableOp")sequential/dense_1/BiasAdd/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?a*��i+�8?i��	n��?�Unknown
�2HostReadVariableOp")sequential/dense_2/BiasAdd/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?a*��i+�8?i��4o���?�Unknown
V3HostCast"Cast(1�������?9�������?A�������?I�������?a
���s7?i����y��?�Unknown
�4HostCast"bsparse_categorical_crossentropy/ArithmeticOptimizer/ReorderCastLikeAndValuePreserving_int64_Cast_1(1�������?9�������?A�������?I�������?a
���s7?i!�\jh��?�Unknown
t5HostAssignAddVariableOp"AssignAddVariableOp(1      �?9      �?A      �?I      �?a�a�խ�5?i�s (��?�Unknown
u6HostReadVariableOp"div_no_nan/ReadVariableOp(1      �?9      �?A      �?I      �?a�a�խ�5?i�+ҕ���?�Unknown
�7HostDivNoNan"Lgradient_tape/sparse_categorical_crossentropy/weighted_loss/value/div_no_nan(1ffffff�?9ffffff�?Affffff�?Iffffff�?a���o�4?i��Cx��?�Unknown
X8HostCast"Cast_2(1�������?9�������?A�������?I�������?a�!�A03?i�ܻ	���?�Unknown
X9HostEqual"Equal(1�������?9�������?A�������?I�������?a�!�A03?i���;��?�Unknown
�:HostReadVariableOp"(sequential/dense_2/MatMul/ReadVariableOp(1�������?9�������?A�������?I�������?a�!�A03?i�N̕���?�Unknown
b;HostDivNoNan"div_no_nan_1(1�������?9�������?A�������?I�������?ag�ϭ�0?i�"����?�Unknown
v<HostAssignAddVariableOp"AssignAddVariableOp_4(1      �?9      �?A      �?I      �?a�����P-?iA���v��?�Unknown
X=HostCast"Cast_3(1      �?9      �?A      �?I      �?a�����P-?i���K��?�Unknown
T>HostMul"Mul(1      �?9      �?A      �?I      �?a�����P-?iQx�� ��?�Unknown
`?HostDivNoNan"
div_no_nan(1      �?9      �?A      �?I      �?a�����P-?i������?�Unknown
�@HostDataset"/Iterator::Model::ParallelMapV2::Zip[0]::FlatMap(1�����:@9�����:@A�������?I�������?aKB�3jb*?i�-����?�Unknown
�AHostDivNoNan"3sparse_categorical_crossentropy/weighted_loss/value(1�������?9�������?A�������?I�������?aKB�3jb*?iiZB��?�Unknown
vBHostAssignAddVariableOp"AssignAddVariableOp_1(1�������?9�������?A�������?I�������?a
���s'?i�d$R���?�Unknown
vCHostAssignAddVariableOp"AssignAddVariableOp_3(1�������?9�������?A�������?I�������?a
���s'?iA`�0��?�Unknown
XDHostCast"Cast_1(1�������?9�������?A�������?I�������?a
���s'?i�[�ϧ��?�Unknown
sEHostReadVariableOp"SGD/Cast/ReadVariableOp(1�������?9�������?A�������?I�������?a
���s'?i�W���?�Unknown
�FHostCast"?sparse_categorical_crossentropy/weighted_loss/num_elements/Cast(1�������?9�������?A�������?I�������?a
���s'?i!SLM���?�Unknown
XGHostCast"Cast_4(1ffffff�?9ffffff�?Affffff�?Iffffff�?a���o�$?iM=����?�Unknown
�HHostReadVariableOp"'sequential/dense/BiasAdd/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?a���w�!?i�T���?�Unknown
wIHostReadVariableOp"div_no_nan_1/ReadVariableOp(1      �?9      �?A      �?I      �?a�����P?iIɒ����?�Unknown
�JHostReadVariableOp"(sequential/dense_1/MatMul/ReadVariableOp(1      �?9      �?A      �?I      �?a�����P?i��!���?�Unknown
aKHostIdentity"Identity(1�������?9�������?A�������?I�������?a
���s?i]6����?�Unknown�
wLHostReadVariableOp"div_no_nan/ReadVariableOp_1(1�������?9�������?A�������?I�������?a
���s?i-�`D��?�Unknown
yMHostReadVariableOp"div_no_nan_1/ReadVariableOp_1(1�������?9�������?A�������?I�������?a
���s?i�������?�Unknown*�J
uHostFlushSummaryWriter"FlushSummaryWriter(1     h�@9     h�@A     h�@I     h�@a�?�>~�?i�?�>~�?�Unknown�
{HostMatMul"'gradient_tape/sequential/dense_1/MatMul(1������o@9������o@A������o@I������o@a�����?i9o�6��?�Unknown
oHost_FusedMatMul"sequential/dense/Relu(1������i@9������i@A������i@I������i@a�2Tvl�?i��9�ŉ�?�Unknown
yHostMatMul"%gradient_tape/sequential/dense/MatMul(1�����	g@9�����	g@A�����	g@I�����	g@a.���-�?i7�����?�Unknown
}HostMatMul")gradient_tape/sequential/dense_1/MatMul_1(1������M@9������M@A������M@I������M@a�Z�h�?i�CB���?�Unknown
^HostGatherV2"GatherV2(1     �K@9     �K@A     �K@I     �K@a�r���?i�&XY���?�Unknown
qHost_FusedMatMul"sequential/dense_1/Relu(1     �K@9     �K@A     �K@I     �K@a�r���?i5�lpT`�?�Unknown
�HostResourceApplyGradientDescent"+SGD/SGD/update/ResourceApplyGradientDescent(1fffff�I@9fffff�I@Afffff�I@Ifffff�I@a[/�����?i�CrL��?�Unknown
}	HostReluGrad"'gradient_tape/sequential/dense/ReluGrad(1ffffff=@9ffffff=@Affffff=@Iffffff=@aK�Ԧ���?iy���|�?�Unknown
�
HostDataset"5Iterator::Model::ParallelMapV2::Zip[1]::ForeverRepeat(1ffffff;@9ffffff;@A     �8@I     �8@a���u�?i˰9����?�Unknown
�HostDataset"?Iterator::Model::ParallelMapV2::Zip[0]::FlatMap[0]::Concatenate(13333339@93333339@A      6@I      6@a�[�5E�?i9�A���?�Unknown
�HostResourceApplyGradientDescent"-SGD/SGD/update_2/ResourceApplyGradientDescent(133333�2@933333�2@A33333�2@I33333�2@a�'H:a�?i=�b~Ea�?�Unknown
ZHostArgMax"ArgMax(13333332@93333332@A3333332@I3333332@a-��7�?i��H�	��?�Unknown
�HostResourceApplyGradientDescent"-SGD/SGD/update_1/ResourceApplyGradientDescent(1������1@9������1@A������1@I������1@a�-B�.?i�)͖g��?�Unknown
sHostDataset"Iterator::Model::ParallelMapV2(1�����L1@9�����L1@A�����L1@I�����L1@a�����N~?is%��?�Unknown
�HostPack"/sparse_categorical_crossentropy/Reshape_1/shape(133333�0@933333�0@A33333�0@I33333�0@a:ڑ�A}?i'INʇV�?�Unknown
�Host#SparseSoftmaxCrossEntropyWithLogits"gsparse_categorical_crossentropy/SparseSoftmaxCrossEntropyWithLogits/SparseSoftmaxCrossEntropyWithLogits(1ffffff0@9ffffff0@Affffff0@Iffffff0@a	��V��|?i� �����?�Unknown
tHost_FusedMatMul"sequential/dense_2/BiasAdd(1      +@9      +@A      +@I      +@a����d�w?i��#�J��?�Unknown
dHostDataset"Iterator::Model(1������>@9������>@A������*@I������*@a�|���Lw?i}�����?�Unknown
}HostMatMul")gradient_tape/sequential/dense_2/MatMul_1(1������'@9������'@A������'@I������'@a̞����t?i��b�;�?�Unknown
oHostSoftmax"sequential/dense_2/Softmax(1������&@9������&@A������&@I������&@a6�3��s?i���-?�?�Unknown
iHostWriteSummary"WriteSummary(1ffffff$@9ffffff$@Affffff$@Iffffff$@as+ n�q?i�H	��b�?�Unknown�
{HostMatMul"'gradient_tape/sequential/dense_2/MatMul(1ffffff!@9ffffff!@Affffff!@Iffffff!@a u:�p{n?i[��`e��?�Unknown
�HostMul"Ugradient_tape/sparse_categorical_crossentropy/SparseSoftmaxCrossEntropyWithLogits/mul(1333333@9333333@A333333@I333333@a���E�f?i=^�$x��?�Unknown
HostReluGrad")gradient_tape/sequential/dense_1/ReluGrad(1������@9������@A������@I������@a�
����b?iH���c��?�Unknown
gHostStridedSlice"strided_slice(1������@9������@A������@I������@a>i��8b?i���ț��?�Unknown
eHost
LogicalAnd"
LogicalAnd(1333333@9333333@A333333@I333333@a&��X�`?i�X!m��?�Unknown�
�HostResourceApplyGradientDescent"-SGD/SGD/update_5/ResourceApplyGradientDescent(1      @9      @A      @I      @abg���_?i�&d1��?�Unknown
�HostBiasAddGrad"2gradient_tape/sequential/dense/BiasAdd/BiasAddGrad(1333333@9333333@A333333@I333333@a5$���!^?i��CB��?�Unknown
�HostStridedSlice"-sparse_categorical_crossentropy/strided_slice(1      @9      @A      @I      @as?饓\?i=VF��?�Unknown
`HostGatherV2"
GatherV2_1(1333333@9333333@A333333@I333333@aݝ��/T[?i�|P%��?�Unknown
� HostSum"1sparse_categorical_crossentropy/weighted_loss/Sum(1333333@9333333@A333333@I333333@aݝ��/T[?i��J=��?�Unknown
l!HostIteratorGetNext"IteratorGetNext(1ffffff@9ffffff@Affffff@Iffffff@aG�D̠Z?i��l��"�?�Unknown
x"HostDataset"#Iterator::Model::ParallelMapV2::Zip(1ffffffL@9ffffffL@Affffff
@Iffffff
@aY�F��W?iC�T�z.�?�Unknown
�#HostDataset"OIterator::Model::ParallelMapV2::Zip[0]::FlatMap[0]::Concatenate[0]::TensorSlice(1������	@9������	@A������	@I������	@a�2TvlV?i\�c˰9�?�Unknown
�$HostResourceApplyGradientDescent"-SGD/SGD/update_4/ResourceApplyGradientDescent(1������@9������@A������@I������@a-�am�U?i%x�T�D�?�Unknown
V%HostSum"Sum_2(1      @9      @A      @I      @a��n��U?i���+O�?�Unknown
�&HostDataset"AIterator::Model::ParallelMapV2::Zip[1]::ForeverRepeat::FromTensor(1333333@9333333�?A333333@I333333�?a N|KRT?i�m~Q9Y�?�Unknown
�'HostBiasAddGrad"4gradient_tape/sequential/dense_1/BiasAdd/BiasAddGrad(1������@9������@A������@I������@a�
����R?iI9S�b�?�Unknown
�(HostResourceApplyGradientDescent"-SGD/SGD/update_3/ResourceApplyGradientDescent(1������@9������@A������@I������@a>i��8R?i~�O#�k�?�Unknown
�)HostBiasAddGrad"4gradient_tape/sequential/dense_2/BiasAdd/BiasAddGrad(1      @9      @A      @I      @a�ǱG��Q?ibds��t�?�Unknown
|*HostAssignAddVariableOp"SGD/SGD/AssignAddVariableOp(1ffffff@9ffffff@Affffff@Iffffff@a|����P?i�J�{�|�?�Unknown
�+HostTile"Bgradient_tape/sparse_categorical_crossentropy/weighted_loss/Tile_1(1ffffff@9ffffff@Affffff@Iffffff@a|����P?i�0Yv���?�Unknown
�,HostCast"BArithmeticOptimizer/ReorderCastLikeAndValuePreserving_float_Cast_1(1������ @9������ @A������ @I������ @a���[nM?i�$��?�Unknown
v-HostAssignAddVariableOp"AssignAddVariableOp_2(1       @9       @A       @I       @as?饓L?iמ���?�Unknown
�.HostReadVariableOp"&sequential/dense/MatMul/ReadVariableOp(1�������?9�������?A�������?I�������?a��:I?i�&=sW��?�Unknown
�/HostReadVariableOp")sequential/dense_1/BiasAdd/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?a�u9�=�G?i�4�BL��?�Unknown
�0HostReadVariableOp")sequential/dense_2/BiasAdd/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?a�u9�=�G?i?C�A��?�Unknown
V1HostCast"Cast(1�������?9�������?A�������?I�������?a�2TvlF?iL؄/ܪ�?�Unknown
�2HostCast"bsparse_categorical_crossentropy/ArithmeticOptimizer/ReorderCastLikeAndValuePreserving_int64_Cast_1(1�������?9�������?A�������?I�������?a�2TvlF?iYmMw��?�Unknown
t3HostAssignAddVariableOp"AssignAddVariableOp(1      �?9      �?A      �?I      �?a��n��E?i������?�Unknown
u4HostReadVariableOp"div_no_nan/ReadVariableOp(1      �?9      �?A      �?I      �?a��n��E?iѤj$���?�Unknown
�5HostDivNoNan"Lgradient_tape/sparse_categorical_crossentropy/weighted_loss/value/div_no_nan(1ffffff�?9ffffff�?Affffff�?Iffffff�?aj��Z�C?i<GA���?�Unknown
X6HostCast"Cast_2(1�������?9�������?A�������?I�������?a>i��8B?iVp?�o��?�Unknown
X7HostEqual"Equal(1�������?9�������?A�������?I�������?a>i��8B?ip�=����?�Unknown
�8HostReadVariableOp"(sequential/dense_2/MatMul/ReadVariableOp(1�������?9�������?A�������?I�������?a>i��8B?i��;����?�Unknown
b9HostDivNoNan"div_no_nan_1(1�������?9�������?A�������?I�������?a�ųi"�>?i���f��?�Unknown
v:HostAssignAddVariableOp"AssignAddVariableOp_4(1      �?9      �?A      �?I      �?as?饓<?i+������?�Unknown
X;HostCast"Cast_3(1      �?9      �?A      �?I      �?as?饓<?iSsrh��?�Unknown
T<HostMul"Mul(1      �?9      �?A      �?I      �?as?饓<?i{0�q���?�Unknown
`=HostDivNoNan"
div_no_nan(1      �?9      �?A      �?I      �?as?饓<?i��[dj��?�Unknown
�>HostDataset"/Iterator::Model::ParallelMapV2::Zip[0]::FlatMap(1�����:@9�����:@A�������?I�������?a��:9?iz1�����?�Unknown
�?HostDivNoNan"3sparse_categorical_crossentropy/weighted_loss/value(1�������?9�������?A�������?I�������?a��:9?iQu����?�Unknown
v@HostAssignAddVariableOp"AssignAddVariableOp_1(1�������?9�������?A�������?I�������?a�2Tvl6?i�?Xt���?�Unknown
vAHostAssignAddVariableOp"AssignAddVariableOp_3(1�������?9�������?A�������?I�������?a�2Tvl6?i]
T��?�Unknown
XBHostCast"Cast_1(1�������?9�������?A�������?I�������?a�2Tvl6?i��ߑ!��?�Unknown
sCHostReadVariableOp"SGD/Cast/ReadVariableOp(1�������?9�������?A�������?I�������?a�2Tvl6?ii�� ���?�Unknown
�DHostCast"?sparse_categorical_crossentropy/weighted_loss/num_elements/Cast(1�������?9�������?A�������?I�������?a�2Tvl6?i�ig����?�Unknown
XEHostCast"Cast_4(1ffffff�?9ffffff�?Affffff�?Iffffff�?aj��Z�3?i%�R�0��?�Unknown
�FHostReadVariableOp"'sequential/dense/BiasAdd/ReadVariableOp(1333333�?9333333�?A333333�?I333333�?a&��X�0?i
�e�J��?�Unknown
wGHostReadVariableOp"div_no_nan_1/ReadVariableOp(1      �?9      �?A      �?I      �?as?饓,?i��0��?�Unknown
�HHostReadVariableOp"(sequential/dense_1/MatMul/ReadVariableOp(1      �?9      �?A      �?I      �?as?饓,?i2Pک���?�Unknown
aIHostIdentity"Identity(1�������?9�������?A�������?I�������?a�2Tvl&?iu5<q2��?�Unknown�
wJHostReadVariableOp"div_no_nan/ReadVariableOp_1(1�������?9�������?A�������?I�������?a�2Tvl&?i��8���?�Unknown
yKHostReadVariableOp"div_no_nan_1/ReadVariableOp_1(1�������?9�������?A�������?I�������?a�2Tvl&?i�������?�Unknown