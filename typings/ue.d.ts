/// <reference path="_part_0_ue.d.ts">/>
/// <reference path="_part_1_ue.d.ts">/>
/// <reference path="_part_2_ue.d.ts">/>
/// <reference path="_part_3_ue.d.ts">/>
/// <reference path="_part_4_ue.d.ts">/>
declare class MeshTangentsTool extends SingleSelectionMeshEditingTool { 
	Settings: MeshTangentsToolProperties;
	DefaultMaterial: MaterialInterface;
	PreviewMesh: PreviewMesh;
	PreviewGeometry: PreviewGeometry;
	static Load(ResourceName: string): MeshTangentsTool;
	static Find(Outer: UObject, ResourceName: string): MeshTangentsTool;
	static GetDefaultObject(): MeshTangentsTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshTangentsTool;
	static C(Other: UObject | any): MeshTangentsTool;
}

declare class MeshToVolumeToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): MeshToVolumeToolBuilder;
	static Find(Outer: UObject, ResourceName: string): MeshToVolumeToolBuilder;
	static GetDefaultObject(): MeshToVolumeToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshToVolumeToolBuilder;
	static C(Other: UObject | any): MeshToVolumeToolBuilder;
}

declare type EMeshToVolumeMode = 'TriangulatePolygons' | 'MinimalPolygons' | 'EMeshToVolumeMode_MAX';
declare var EMeshToVolumeMode : { TriangulatePolygons:'TriangulatePolygons',MinimalPolygons:'MinimalPolygons',EMeshToVolumeMode_MAX:'EMeshToVolumeMode_MAX', };
declare class MeshToVolumeToolProperties extends InteractiveToolPropertySet { 
	ConversionMode: EMeshToVolumeMode;
	NewVolumeType: UnrealEngineClass;
	TargetVolume: any;
	static Load(ResourceName: string): MeshToVolumeToolProperties;
	static Find(Outer: UObject, ResourceName: string): MeshToVolumeToolProperties;
	static GetDefaultObject(): MeshToVolumeToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshToVolumeToolProperties;
	static C(Other: UObject | any): MeshToVolumeToolProperties;
}

declare class MeshToVolumeTool extends SingleSelectionMeshEditingTool { 
	Settings: MeshToVolumeToolProperties;
	HandleSourcesProperties: OnAcceptHandleSourcesProperties;
	PreviewMesh: PreviewMesh;
	VolumeEdgesSet: LineSetComponent;
	static Load(ResourceName: string): MeshToVolumeTool;
	static Find(Outer: UObject, ResourceName: string): MeshToVolumeTool;
	static GetDefaultObject(): MeshToVolumeTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshToVolumeTool;
	static C(Other: UObject | any): MeshToVolumeTool;
}

declare class PolygonOnMeshToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): PolygonOnMeshToolBuilder;
	static Find(Outer: UObject, ResourceName: string): PolygonOnMeshToolBuilder;
	static GetDefaultObject(): PolygonOnMeshToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolygonOnMeshToolBuilder;
	static C(Other: UObject | any): PolygonOnMeshToolBuilder;
}

declare type EEmbeddedPolygonOpMethod = 'TrimOutside' | 'TrimInside' | 'InsertPolygon' | 'CutThrough' | 'EEmbeddedPolygonOpMethod_MAX';
declare var EEmbeddedPolygonOpMethod : { TrimOutside:'TrimOutside',TrimInside:'TrimInside',InsertPolygon:'InsertPolygon',CutThrough:'CutThrough',EEmbeddedPolygonOpMethod_MAX:'EEmbeddedPolygonOpMethod_MAX', };
declare type EPolygonType = 'Circle' | 'Square' | 'Rectangle' | 'RoundRect' | 'Custom' | 'EPolygonType_MAX';
declare var EPolygonType : { Circle:'Circle',Square:'Square',Rectangle:'Rectangle',RoundRect:'RoundRect',Custom:'Custom',EPolygonType_MAX:'EPolygonType_MAX', };
declare class PolygonOnMeshToolProperties extends InteractiveToolPropertySet { 
	Operation: EEmbeddedPolygonOpMethod;
	Shape: EPolygonType;
	bCutWithBoolean: boolean;
	bTryToFixCracks: boolean;
	PolygonScale: number;
	Width: number;
	Height: number;
	CornerRatio: number;
	Subdivisions: number;
	static Load(ResourceName: string): PolygonOnMeshToolProperties;
	static Find(Outer: UObject, ResourceName: string): PolygonOnMeshToolProperties;
	static GetDefaultObject(): PolygonOnMeshToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolygonOnMeshToolProperties;
	static C(Other: UObject | any): PolygonOnMeshToolProperties;
}

declare class PolygonOnMeshToolActionPropertySet extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): PolygonOnMeshToolActionPropertySet;
	static Find(Outer: UObject, ResourceName: string): PolygonOnMeshToolActionPropertySet;
	static GetDefaultObject(): PolygonOnMeshToolActionPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolygonOnMeshToolActionPropertySet;
	DrawPolygon(): void;
	static C(Other: UObject | any): PolygonOnMeshToolActionPropertySet;
}

declare class PolygonOnMeshTool extends SingleSelectionMeshEditingTool { 
	BasicProperties: PolygonOnMeshToolProperties;
	ActionProperties: PolygonOnMeshToolActionPropertySet;
	Preview: MeshOpPreviewWithBackgroundCompute;
	DrawnLineSet: LineSetComponent;
	PlaneMechanic: ConstructionPlaneMechanic;
	DrawPolygonMechanic: CollectSurfacePathMechanic;
	static Load(ResourceName: string): PolygonOnMeshTool;
	static Find(Outer: UObject, ResourceName: string): PolygonOnMeshTool;
	static GetDefaultObject(): PolygonOnMeshTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PolygonOnMeshTool;
	static C(Other: UObject | any): PolygonOnMeshTool;
}

declare class ShapeSprayToolBuilder extends MeshSurfacePointMeshEditingToolBuilder { 
	static Load(ResourceName: string): ShapeSprayToolBuilder;
	static Find(Outer: UObject, ResourceName: string): ShapeSprayToolBuilder;
	static GetDefaultObject(): ShapeSprayToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ShapeSprayToolBuilder;
	static C(Other: UObject | any): ShapeSprayToolBuilder;
}

declare class ShapeSprayToolProperties extends InteractiveToolPropertySet { 
	Color: LinearColor;
	bRandomColor: boolean;
	DropSpeed: number;
	ObjectSize: number;
	NumSplats: number;
	Material: MaterialInterface;
	static Load(ResourceName: string): ShapeSprayToolProperties;
	static Find(Outer: UObject, ResourceName: string): ShapeSprayToolProperties;
	static GetDefaultObject(): ShapeSprayToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ShapeSprayToolProperties;
	static C(Other: UObject | any): ShapeSprayToolProperties;
}

declare class ShapeSprayTool extends DynamicMeshBrushTool { 
	Settings: ShapeSprayToolProperties;
	AccumMeshComponent: DynamicMeshComponent;
	static Load(ResourceName: string): ShapeSprayTool;
	static Find(Outer: UObject, ResourceName: string): ShapeSprayTool;
	static GetDefaultObject(): ShapeSprayTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ShapeSprayTool;
	static C(Other: UObject | any): ShapeSprayTool;
}

declare class SimplifyMeshToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): SimplifyMeshToolBuilder;
	static Find(Outer: UObject, ResourceName: string): SimplifyMeshToolBuilder;
	static GetDefaultObject(): SimplifyMeshToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SimplifyMeshToolBuilder;
	static C(Other: UObject | any): SimplifyMeshToolBuilder;
}

declare type ESimplifyType = 'QEM' | 'Attribute' | 'UEStandard' | 'MinimalExistingVertex' | 'MinimalPlanar' | 'MinimalPolygroup' | 'ESimplifyType_MAX';
declare var ESimplifyType : { QEM:'QEM',Attribute:'Attribute',UEStandard:'UEStandard',MinimalExistingVertex:'MinimalExistingVertex',MinimalPlanar:'MinimalPlanar',MinimalPolygroup:'MinimalPolygroup',ESimplifyType_MAX:'ESimplifyType_MAX', };
declare type ESimplifyTargetType = 'Percentage' | 'TriangleCount' | 'VertexCount' | 'EdgeLength' | 'MinimalPlanar' | 'ESimplifyTargetType_MAX';
declare var ESimplifyTargetType : { Percentage:'Percentage',TriangleCount:'TriangleCount',VertexCount:'VertexCount',EdgeLength:'EdgeLength',MinimalPlanar:'MinimalPlanar',ESimplifyTargetType_MAX:'ESimplifyTargetType_MAX', };
declare class SimplifyMeshToolProperties extends MeshConstraintProperties { 
	SimplifierType: ESimplifyType;
	TargetMode: ESimplifyTargetType;
	TargetPercentage: number;
	TargetEdgeLength: number;
	TargetTriangleCount: number;
	TargetVertexCount: number;
	MinimalAngleThreshold: number;
	PolyEdgeAngleTolerance: number;
	bDiscardAttributes: boolean;
	bGeometricConstraint: boolean;
	GeometricTolerance: number;
	bShowGroupColors: boolean;
	bReproject: boolean;
	static Load(ResourceName: string): SimplifyMeshToolProperties;
	static Find(Outer: UObject, ResourceName: string): SimplifyMeshToolProperties;
	static GetDefaultObject(): SimplifyMeshToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SimplifyMeshToolProperties;
	static C(Other: UObject | any): SimplifyMeshToolProperties;
}

declare class SimplifyMeshTool extends SingleSelectionMeshEditingTool { 
	SimplifyProperties: SimplifyMeshToolProperties;
	MeshStatisticsProperties: MeshStatisticsProperties;
	Preview: MeshOpPreviewWithBackgroundCompute;
	MeshElementsDisplay: MeshElementsVisualizer;
	static Load(ResourceName: string): SimplifyMeshTool;
	static Find(Outer: UObject, ResourceName: string): SimplifyMeshTool;
	static GetDefaultObject(): SimplifyMeshTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SimplifyMeshTool;
	static C(Other: UObject | any): SimplifyMeshTool;
}

declare class SubdividePolyToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): SubdividePolyToolBuilder;
	static Find(Outer: UObject, ResourceName: string): SubdividePolyToolBuilder;
	static GetDefaultObject(): SubdividePolyToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubdividePolyToolBuilder;
	static C(Other: UObject | any): SubdividePolyToolBuilder;
}

declare type ESubdivisionScheme = 'Bilinear' | 'CatmullClark' | 'Loop' | 'ESubdivisionScheme_MAX';
declare var ESubdivisionScheme : { Bilinear:'Bilinear',CatmullClark:'CatmullClark',Loop:'Loop',ESubdivisionScheme_MAX:'ESubdivisionScheme_MAX', };
declare type ESubdivisionOutputNormals = 'Interpolated' | 'Generated' | 'None' | 'ESubdivisionOutputNormals_MAX';
declare var ESubdivisionOutputNormals : { Interpolated:'Interpolated',Generated:'Generated',None:'None',ESubdivisionOutputNormals_MAX:'ESubdivisionOutputNormals_MAX', };
declare type ESubdivisionOutputUVs = 'Interpolated' | 'None' | 'ESubdivisionOutputUVs_MAX';
declare var ESubdivisionOutputUVs : { Interpolated:'Interpolated',None:'None',ESubdivisionOutputUVs_MAX:'ESubdivisionOutputUVs_MAX', };
declare class SubdividePolyToolProperties extends InteractiveToolPropertySet { 
	SubdivisionLevel: number;
	bCatmullClarkOK: boolean;
	SubdivisionScheme: ESubdivisionScheme;
	NormalComputationMethod: ESubdivisionOutputNormals;
	UVComputationMethod: ESubdivisionOutputUVs;
	bNewPolyGroups: boolean;
	bRenderGroups: boolean;
	bRenderCage: boolean;
	static Load(ResourceName: string): SubdividePolyToolProperties;
	static Find(Outer: UObject, ResourceName: string): SubdividePolyToolProperties;
	static GetDefaultObject(): SubdividePolyToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubdividePolyToolProperties;
	static C(Other: UObject | any): SubdividePolyToolProperties;
}

declare class SubdividePolyTool extends SingleSelectionMeshEditingTool { 
	PreviewMesh: PreviewMesh;
	Properties: SubdividePolyToolProperties;
	PreviewGeometry: PreviewGeometry;
	static Load(ResourceName: string): SubdividePolyTool;
	static Find(Outer: UObject, ResourceName: string): SubdividePolyTool;
	static GetDefaultObject(): SubdividePolyTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubdividePolyTool;
	static C(Other: UObject | any): SubdividePolyTool;
}

declare class VoxelCSGMeshesToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): VoxelCSGMeshesToolBuilder;
	static Find(Outer: UObject, ResourceName: string): VoxelCSGMeshesToolBuilder;
	static GetDefaultObject(): VoxelCSGMeshesToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelCSGMeshesToolBuilder;
	static C(Other: UObject | any): VoxelCSGMeshesToolBuilder;
}

declare type EVoxelCSGOperation = 'DifferenceAB' | 'DifferenceBA' | 'Intersect' | 'Union' | 'EVoxelCSGOperation_MAX';
declare var EVoxelCSGOperation : { DifferenceAB:'DifferenceAB',DifferenceBA:'DifferenceBA',Intersect:'Intersect',Union:'Union',EVoxelCSGOperation_MAX:'EVoxelCSGOperation_MAX', };
declare class VoxelCSGMeshesToolProperties extends InteractiveToolPropertySet { 
	Operation: EVoxelCSGOperation;
	VoxelCount: number;
	MeshAdaptivity: number;
	OffsetDistance: number;
	bAutoSimplify: boolean;
	static Load(ResourceName: string): VoxelCSGMeshesToolProperties;
	static Find(Outer: UObject, ResourceName: string): VoxelCSGMeshesToolProperties;
	static GetDefaultObject(): VoxelCSGMeshesToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelCSGMeshesToolProperties;
	static C(Other: UObject | any): VoxelCSGMeshesToolProperties;
}

declare class VoxelCSGMeshesTool extends MultiSelectionMeshEditingTool { 
	CSGProps: VoxelCSGMeshesToolProperties;
	MeshStatisticsProperties: MeshStatisticsProperties;
	HandleSourcesProperties: OnAcceptHandleSourcesProperties;
	Preview: MeshOpPreviewWithBackgroundCompute;
	static Load(ResourceName: string): VoxelCSGMeshesTool;
	static Find(Outer: UObject, ResourceName: string): VoxelCSGMeshesTool;
	static GetDefaultObject(): VoxelCSGMeshesTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoxelCSGMeshesTool;
	static C(Other: UObject | any): VoxelCSGMeshesTool;
}

declare class GenerateStaticMeshLODAssetToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): GenerateStaticMeshLODAssetToolBuilder;
	static Find(Outer: UObject, ResourceName: string): GenerateStaticMeshLODAssetToolBuilder;
	static GetDefaultObject(): GenerateStaticMeshLODAssetToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GenerateStaticMeshLODAssetToolBuilder;
	static C(Other: UObject | any): GenerateStaticMeshLODAssetToolBuilder;
}

declare type EGenerateLODAssetOutputMode = 'CreateNewAsset' | 'UpdateExistingAsset' | 'EGenerateLODAssetOutputMode_MAX';
declare var EGenerateLODAssetOutputMode : { CreateNewAsset:'CreateNewAsset',UpdateExistingAsset:'UpdateExistingAsset',EGenerateLODAssetOutputMode_MAX:'EGenerateLODAssetOutputMode_MAX', };
declare class GenerateStaticMeshLODAssetToolOutputProperties extends InteractiveToolPropertySet { 
	OutputMode: EGenerateLODAssetOutputMode;
	NewAssetName: string;
	bSaveInputAsHiResSource: boolean;
	GeneratedSuffix: string;
	bShowOutputMode: boolean;
	static Load(ResourceName: string): GenerateStaticMeshLODAssetToolOutputProperties;
	static Find(Outer: UObject, ResourceName: string): GenerateStaticMeshLODAssetToolOutputProperties;
	static GetDefaultObject(): GenerateStaticMeshLODAssetToolOutputProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GenerateStaticMeshLODAssetToolOutputProperties;
	static C(Other: UObject | any): GenerateStaticMeshLODAssetToolOutputProperties;
}

declare class GenerateStaticMeshLODAssetToolPresetProperties extends InteractiveToolPropertySet { 
	Preset: any;
	static Load(ResourceName: string): GenerateStaticMeshLODAssetToolPresetProperties;
	static Find(Outer: UObject, ResourceName: string): GenerateStaticMeshLODAssetToolPresetProperties;
	static GetDefaultObject(): GenerateStaticMeshLODAssetToolPresetProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GenerateStaticMeshLODAssetToolPresetProperties;
	WriteToPreset(): void;
	ReadFromPreset(): void;
	static C(Other: UObject | any): GenerateStaticMeshLODAssetToolPresetProperties;
}

declare class GenerateStaticMeshLODProcess_PreprocessSettings { 
	FilterGroupLayer: string;
	ThickenWeightMapName: string;
	ThickenAmount: number;
	clone() : GenerateStaticMeshLODProcess_PreprocessSettings;
	static C(Other: UObject | any): GenerateStaticMeshLODProcess_PreprocessSettings;
}

declare type EGenerateStaticMeshLODProcess_MeshGeneratorModes = 'Solidify' | 'SolidifyAndClose' | 'CleanAndSimplify' | 'ConvexHull' | 'EGenerateStaticMeshLODProcess_MAX';
declare var EGenerateStaticMeshLODProcess_MeshGeneratorModes : { Solidify:'Solidify',SolidifyAndClose:'SolidifyAndClose',CleanAndSimplify:'CleanAndSimplify',ConvexHull:'ConvexHull',EGenerateStaticMeshLODProcess_MAX:'EGenerateStaticMeshLODProcess_MAX', };
declare class GenerateStaticMeshLODProcessSettings { 
	MeshGenerator: EGenerateStaticMeshLODProcess_MeshGeneratorModes;
	SolidifyVoxelResolution: number;
	WindingThreshold: number;
	ClosureDistance: number;
	bPrefilterVertices: boolean;
	PrefilterGridResolution: number;
	clone() : GenerateStaticMeshLODProcessSettings;
	static C(Other: UObject | any): GenerateStaticMeshLODProcessSettings;
}

declare type EGenerateStaticMeshLODProcess_SimplifyMethod = 'TriangleCount' | 'VertexCount' | 'TrianglePercentage' | 'GeometricTolerance' | 'EGenerateStaticMeshLODProcess_MAX';
declare var EGenerateStaticMeshLODProcess_SimplifyMethod : { TriangleCount:'TriangleCount',VertexCount:'VertexCount',TrianglePercentage:'TrianglePercentage',GeometricTolerance:'GeometricTolerance',EGenerateStaticMeshLODProcess_MAX:'EGenerateStaticMeshLODProcess_MAX', };
declare class GenerateStaticMeshLODProcess_SimplifySettings { 
	Method: EGenerateStaticMeshLODProcess_SimplifyMethod;
	TargetCount: number;
	TargetPercentage: number;
	Tolerance: number;
	clone() : GenerateStaticMeshLODProcess_SimplifySettings;
	static C(Other: UObject | any): GenerateStaticMeshLODProcess_SimplifySettings;
}

declare type EGenerateStaticMeshLODProcess_NormalsMethod = 'FromAngleThreshold' | 'PerVertex' | 'PerTriangle' | 'EGenerateStaticMeshLODProcess_MAX';
declare var EGenerateStaticMeshLODProcess_NormalsMethod : { FromAngleThreshold:'FromAngleThreshold',PerVertex:'PerVertex',PerTriangle:'PerTriangle',EGenerateStaticMeshLODProcess_MAX:'EGenerateStaticMeshLODProcess_MAX', };
declare class GenerateStaticMeshLODProcess_NormalsSettings { 
	Method: EGenerateStaticMeshLODProcess_NormalsMethod;
	Angle: number;
	clone() : GenerateStaticMeshLODProcess_NormalsSettings;
	static C(Other: UObject | any): GenerateStaticMeshLODProcess_NormalsSettings;
}

declare type EGenerateStaticMeshLODBakeResolution = 'Resolution16' | 'Resolution32' | 'Resolution64' | 'Resolution128' | 'Resolution256' | 'Resolution512' | 'Resolution1024' | 'Resolution2048' | 'Resolution4096' | 'Resolution8192' | 'EGenerateStaticMeshLODBakeResolution_MAX';
declare var EGenerateStaticMeshLODBakeResolution : { Resolution16:'Resolution16',Resolution32:'Resolution32',Resolution64:'Resolution64',Resolution128:'Resolution128',Resolution256:'Resolution256',Resolution512:'Resolution512',Resolution1024:'Resolution1024',Resolution2048:'Resolution2048',Resolution4096:'Resolution4096',Resolution8192:'Resolution8192',EGenerateStaticMeshLODBakeResolution_MAX:'EGenerateStaticMeshLODBakeResolution_MAX', };
declare class GenerateStaticMeshLODProcess_TextureSettings { 
	BakeResolution: EGenerateStaticMeshLODBakeResolution;
	BakeThickness: number;
	bCombineTextures: boolean;
	clone() : GenerateStaticMeshLODProcess_TextureSettings;
	static C(Other: UObject | any): GenerateStaticMeshLODProcess_TextureSettings;
}

declare type EGenerateStaticMeshLODProcess_AutoUVMethod = 'PatchBuilder' | 'UVAtlas' | 'XAtlas' | 'EGenerateStaticMeshLODProcess_MAX';
declare var EGenerateStaticMeshLODProcess_AutoUVMethod : { PatchBuilder:'PatchBuilder',UVAtlas:'UVAtlas',XAtlas:'XAtlas',EGenerateStaticMeshLODProcess_MAX:'EGenerateStaticMeshLODProcess_MAX', };
declare class GenerateStaticMeshLODProcess_UVSettings_PatchBuilder { 
	CurvatureAlignment: number;
	SmoothingSteps: number;
	SmoothingAlpha: number;
	clone() : GenerateStaticMeshLODProcess_UVSettings_PatchBuilder;
	static C(Other: UObject | any): GenerateStaticMeshLODProcess_UVSettings_PatchBuilder;
}

declare class GenerateStaticMeshLODProcess_UVSettings { 
	UVMethod: EGenerateStaticMeshLODProcess_AutoUVMethod;
	NumUVAtlasCharts: number;
	NumInitialPatches: number;
	MergingThreshold: number;
	MaxAngleDeviation: number;
	PatchBuilder: GenerateStaticMeshLODProcess_UVSettings_PatchBuilder;
	clone() : GenerateStaticMeshLODProcess_UVSettings;
	static C(Other: UObject | any): GenerateStaticMeshLODProcess_UVSettings;
}

declare type EGenerateStaticMeshLODSimpleCollisionGeometryType = 'AlignedBoxes' | 'OrientedBoxes' | 'MinimalSpheres' | 'Capsules' | 'ConvexHulls' | 'SweptHulls' | 'MinVolume' | 'None' | 'EGenerateStaticMeshLODSimpleCollisionGeometryType_MAX';
declare var EGenerateStaticMeshLODSimpleCollisionGeometryType : { AlignedBoxes:'AlignedBoxes',OrientedBoxes:'OrientedBoxes',MinimalSpheres:'MinimalSpheres',Capsules:'Capsules',ConvexHulls:'ConvexHulls',SweptHulls:'SweptHulls',MinVolume:'MinVolume',None:'None',EGenerateStaticMeshLODSimpleCollisionGeometryType_MAX:'EGenerateStaticMeshLODSimpleCollisionGeometryType_MAX', };
declare type EGenerateStaticMeshLODProjectedHullAxisMode = 'X' | 'Y' | 'Z' | 'SmallestBoxDimension' | 'SmallestVolume' | 'EGenerateStaticMeshLODProjectedHullAxisMode_MAX';
declare var EGenerateStaticMeshLODProjectedHullAxisMode : { X:'X',Y:'Y',Z:'Z',SmallestBoxDimension:'SmallestBoxDimension',SmallestVolume:'SmallestVolume',EGenerateStaticMeshLODProjectedHullAxisMode_MAX:'EGenerateStaticMeshLODProjectedHullAxisMode_MAX', };
declare class GenerateStaticMeshLODProcess_CollisionSettings { 
	CollisionGroupLayerName: string;
	CollisionType: EGenerateStaticMeshLODSimpleCollisionGeometryType;
	ConvexTriangleCount: number;
	bPrefilterVertices: boolean;
	PrefilterGridResolution: number;
	bSimplifyPolygons: boolean;
	HullTolerance: number;
	SweepAxis: EGenerateStaticMeshLODProjectedHullAxisMode;
	clone() : GenerateStaticMeshLODProcess_CollisionSettings;
	static C(Other: UObject | any): GenerateStaticMeshLODProcess_CollisionSettings;
}

declare class GenerateStaticMeshLODAssetToolProperties extends InteractiveToolPropertySet { 
	Preprocessing: GenerateStaticMeshLODProcess_PreprocessSettings;
	MeshGeneration: GenerateStaticMeshLODProcessSettings;
	Simplification: GenerateStaticMeshLODProcess_SimplifySettings;
	Normals: GenerateStaticMeshLODProcess_NormalsSettings;
	TextureBaking: GenerateStaticMeshLODProcess_TextureSettings;
	UVGeneration: GenerateStaticMeshLODProcess_UVSettings;
	SimpleCollision: GenerateStaticMeshLODProcess_CollisionSettings;
	CollisionGroupLayerName: string;
	GroupLayersList: string[];
	static Load(ResourceName: string): GenerateStaticMeshLODAssetToolProperties;
	static Find(Outer: UObject, ResourceName: string): GenerateStaticMeshLODAssetToolProperties;
	static GetDefaultObject(): GenerateStaticMeshLODAssetToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GenerateStaticMeshLODAssetToolProperties;
	GetGroupLayersFunc(): string[];
	static C(Other: UObject | any): GenerateStaticMeshLODAssetToolProperties;
}

declare type EGenerateStaticMeshLOD_BakeConstraint = 'NoConstraint' | 'DoNotBake' | 'EGenerateStaticMeshLOD_MAX';
declare var EGenerateStaticMeshLOD_BakeConstraint : { NoConstraint:'NoConstraint',DoNotBake:'DoNotBake',EGenerateStaticMeshLOD_MAX:'EGenerateStaticMeshLOD_MAX', };
declare class GenerateStaticMeshLOD_MaterialConfig { 
	Material: MaterialInterface;
	Constraint: EGenerateStaticMeshLOD_BakeConstraint;
	clone() : GenerateStaticMeshLOD_MaterialConfig;
	static C(Other: UObject | any): GenerateStaticMeshLOD_MaterialConfig;
}

declare class GenerateStaticMeshLOD_TextureConfig { 
	Texture: Texture2D;
	Constraint: EGenerateStaticMeshLOD_BakeConstraint;
	clone() : GenerateStaticMeshLOD_TextureConfig;
	static C(Other: UObject | any): GenerateStaticMeshLOD_TextureConfig;
}

declare class GenerateStaticMeshLODAssetToolTextureProperties extends InteractiveToolPropertySet { 
	Materials: GenerateStaticMeshLOD_MaterialConfig[];
	Textures: GenerateStaticMeshLOD_TextureConfig[];
	PreviewTextures: Texture2D[];
	static Load(ResourceName: string): GenerateStaticMeshLODAssetToolTextureProperties;
	static Find(Outer: UObject, ResourceName: string): GenerateStaticMeshLODAssetToolTextureProperties;
	static GetDefaultObject(): GenerateStaticMeshLODAssetToolTextureProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GenerateStaticMeshLODAssetToolTextureProperties;
	static C(Other: UObject | any): GenerateStaticMeshLODAssetToolTextureProperties;
}

declare class GenerateStaticMeshLODProcess extends UObject { 
	SourceStaticMesh: StaticMesh;
	AllDerivedTextures: any;
	DerivedNormalMapTex: Texture2D;
	DerivedMultiTextureBakeResult: Texture2D;
	static Load(ResourceName: string): GenerateStaticMeshLODProcess;
	static Find(Outer: UObject, ResourceName: string): GenerateStaticMeshLODProcess;
	static GetDefaultObject(): GenerateStaticMeshLODProcess;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GenerateStaticMeshLODProcess;
	static C(Other: UObject | any): GenerateStaticMeshLODProcess;
}

declare class GenerateStaticMeshLODAssetTool extends MultiSelectionMeshEditingTool { 
	OutputProperties: GenerateStaticMeshLODAssetToolOutputProperties;
	BasicProperties: GenerateStaticMeshLODAssetToolProperties;
	PresetProperties: GenerateStaticMeshLODAssetToolPresetProperties;
	TextureProperties: GenerateStaticMeshLODAssetToolTextureProperties;
	CollisionVizSettings: CollisionGeometryVisualizationProperties;
	PreviewWithBackgroundCompute: MeshOpPreviewWithBackgroundCompute;
	PreviewTextures: Texture2D[];
	PreviewMaterials: MaterialInterface[];
	ObjectData: PhysicsObjectToolPropertySet;
	LineMaterial: MaterialInterface;
	CollisionPreview: PreviewGeometry;
	GenerateProcess: GenerateStaticMeshLODProcess;
	static Load(ResourceName: string): GenerateStaticMeshLODAssetTool;
	static Find(Outer: UObject, ResourceName: string): GenerateStaticMeshLODAssetTool;
	static GetDefaultObject(): GenerateStaticMeshLODAssetTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GenerateStaticMeshLODAssetTool;
	static C(Other: UObject | any): GenerateStaticMeshLODAssetTool;
}

declare class StaticMeshLODGenerationSettings extends UObject { 
	Preprocessing: GenerateStaticMeshLODProcess_PreprocessSettings;
	MeshGeneration: GenerateStaticMeshLODProcessSettings;
	Simplification: GenerateStaticMeshLODProcess_SimplifySettings;
	Normals: GenerateStaticMeshLODProcess_NormalsSettings;
	TextureBaking: GenerateStaticMeshLODProcess_TextureSettings;
	UVGeneration: GenerateStaticMeshLODProcess_UVSettings;
	SimpleCollision: GenerateStaticMeshLODProcess_CollisionSettings;
	static Load(ResourceName: string): StaticMeshLODGenerationSettings;
	static Find(Outer: UObject, ResourceName: string): StaticMeshLODGenerationSettings;
	static GetDefaultObject(): StaticMeshLODGenerationSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StaticMeshLODGenerationSettings;
	static C(Other: UObject | any): StaticMeshLODGenerationSettings;
}

declare class StaticMeshLODGenerationSettingsFactory extends Factory { 
	static Load(ResourceName: string): StaticMeshLODGenerationSettingsFactory;
	static Find(Outer: UObject, ResourceName: string): StaticMeshLODGenerationSettingsFactory;
	static GetDefaultObject(): StaticMeshLODGenerationSettingsFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StaticMeshLODGenerationSettingsFactory;
	static C(Other: UObject | any): StaticMeshLODGenerationSettingsFactory;
}

declare class LODManagerToolBuilder extends MultiSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): LODManagerToolBuilder;
	static Find(Outer: UObject, ResourceName: string): LODManagerToolBuilder;
	static GetDefaultObject(): LODManagerToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LODManagerToolBuilder;
	static C(Other: UObject | any): LODManagerToolBuilder;
}

declare class LODManagerLODInfo { 
	vertexcount: number;
	TriangleCount: number;
	clone() : LODManagerLODInfo;
	static C(Other: UObject | any): LODManagerLODInfo;
}

declare class LODManagerLODProperties extends InteractiveToolPropertySet { 
	SourceLODs: LODManagerLODInfo[];
	HiResSource: LODManagerLODInfo[];
	RenderLODs: LODManagerLODInfo[];
	bNaniteEnabled: boolean;
	PercentTriangles: number;
	Materials: StaticMaterial[];
	static Load(ResourceName: string): LODManagerLODProperties;
	static Find(Outer: UObject, ResourceName: string): LODManagerLODProperties;
	static GetDefaultObject(): LODManagerLODProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LODManagerLODProperties;
	static C(Other: UObject | any): LODManagerLODProperties;
}

declare class LODManagerPreviewLODProperties extends InteractiveToolPropertySet { 
	VisibleLOD: string;
	LODNamesList: string[];
	bShowSeams: boolean;
	static Load(ResourceName: string): LODManagerPreviewLODProperties;
	static Find(Outer: UObject, ResourceName: string): LODManagerPreviewLODProperties;
	static GetDefaultObject(): LODManagerPreviewLODProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LODManagerPreviewLODProperties;
	GetLODNamesFunc(): string[];
	static C(Other: UObject | any): LODManagerPreviewLODProperties;
}

declare class LODManagerActionPropertySet extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): LODManagerActionPropertySet;
	static Find(Outer: UObject, ResourceName: string): LODManagerActionPropertySet;
	static GetDefaultObject(): LODManagerActionPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LODManagerActionPropertySet;
	static C(Other: UObject | any): LODManagerActionPropertySet;
}

declare class LODManagerHiResSourceModelActions extends LODManagerActionPropertySet { 
	static Load(ResourceName: string): LODManagerHiResSourceModelActions;
	static Find(Outer: UObject, ResourceName: string): LODManagerHiResSourceModelActions;
	static GetDefaultObject(): LODManagerHiResSourceModelActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LODManagerHiResSourceModelActions;
	MoveToLOD0(): void;
	Delete(): void;
	static C(Other: UObject | any): LODManagerHiResSourceModelActions;
}

declare class LODManagerMaterialActions extends LODManagerActionPropertySet { 
	static Load(ResourceName: string): LODManagerMaterialActions;
	static Find(Outer: UObject, ResourceName: string): LODManagerMaterialActions;
	static GetDefaultObject(): LODManagerMaterialActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LODManagerMaterialActions;
	CleanMaterials(): void;
	static C(Other: UObject | any): LODManagerMaterialActions;
}

declare class LODManagerTool extends MultiSelectionMeshEditingTool { 
	LODInfoProperties: LODManagerLODProperties;
	LODPreviewProperties: LODManagerPreviewLODProperties;
	HiResSourceModelActions: LODManagerHiResSourceModelActions;
	MaterialActions: LODManagerMaterialActions;
	LODPreview: PreviewMesh;
	LODPreviewLines: PreviewGeometry;
	static Load(ResourceName: string): LODManagerTool;
	static Find(Outer: UObject, ResourceName: string): LODManagerTool;
	static GetDefaultObject(): LODManagerTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LODManagerTool;
	RemoveUnreferencedMaterials(): void;
	MoveHiResToLOD0(): void;
	DeleteHiResSourceModel(): void;
	static C(Other: UObject | any): LODManagerTool;
}

declare class StylusInputSubsystem extends EditorSubsystem { 
	static Load(ResourceName: string): StylusInputSubsystem;
	static Find(Outer: UObject, ResourceName: string): StylusInputSubsystem;
	static GetDefaultObject(): StylusInputSubsystem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StylusInputSubsystem;
	static C(Other: UObject | any): StylusInputSubsystem;
}

declare class ModelingToolsEditorMode extends BaseLegacyWidgetEdMode { 
	SceneSnappingManager: ModelingSceneSnappingManager;
	static Load(ResourceName: string): ModelingToolsEditorMode;
	static Find(Outer: UObject, ResourceName: string): ModelingToolsEditorMode;
	static GetDefaultObject(): ModelingToolsEditorMode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ModelingToolsEditorMode;
	static C(Other: UObject | any): ModelingToolsEditorMode;
}

declare type EModelingModeDefaultMeshObjectType = 'StaticMeshAsset' | 'VolumeActor' | 'DynamicMeshActor' | 'EModelingModeDefaultMeshObjectType_MAX';
declare var EModelingModeDefaultMeshObjectType : { StaticMeshAsset:'StaticMeshAsset',VolumeActor:'VolumeActor',DynamicMeshActor:'DynamicMeshActor',EModelingModeDefaultMeshObjectType_MAX:'EModelingModeDefaultMeshObjectType_MAX', };
declare type EModelingModeAssetGenerationBehavior = 'AutoGenerateAndAutosave' | 'AutoGenerateButDoNotAutosave' | 'InteractivePromptToSave' | 'EModelingModeAssetGenerationBehavior_MAX';
declare var EModelingModeAssetGenerationBehavior : { AutoGenerateAndAutosave:'AutoGenerateAndAutosave',AutoGenerateButDoNotAutosave:'AutoGenerateButDoNotAutosave',InteractivePromptToSave:'InteractivePromptToSave',EModelingModeAssetGenerationBehavior_MAX:'EModelingModeAssetGenerationBehavior_MAX', };
declare type EModelingModeAssetGenerationLocation = 'AutoGeneratedWorldRelativeAssetPath' | 'AutoGeneratedGlobalAssetPath' | 'CurrentAssetBrowserPathIfAvailable' | 'EModelingModeAssetGenerationLocation_MAX';
declare var EModelingModeAssetGenerationLocation : { AutoGeneratedWorldRelativeAssetPath:'AutoGeneratedWorldRelativeAssetPath',AutoGeneratedGlobalAssetPath:'AutoGeneratedGlobalAssetPath',CurrentAssetBrowserPathIfAvailable:'CurrentAssetBrowserPathIfAvailable',EModelingModeAssetGenerationLocation_MAX:'EModelingModeAssetGenerationLocation_MAX', };
declare class ModelingToolsEditorModeSettings extends DeveloperSettings { 
	bEnableDynamicMeshActors: boolean;
	DefaultMeshObjectType: EModelingModeDefaultMeshObjectType;
	AssetGenerationMode: EModelingModeAssetGenerationBehavior;
	AssetGenerationLocation: EModelingModeAssetGenerationLocation;
	AutoGeneratedAssetPath: string;
	bStoreUnsavedLevelAssetsInTopLevelGameFolder: boolean;
	bUsePerUserAutogenSubfolder: boolean;
	AutogenSubfolderUserNameOverride: string;
	bAppendRandomStringToName: boolean;
	bEnablePersistentSelections: boolean;
	static Load(ResourceName: string): ModelingToolsEditorModeSettings;
	static Find(Outer: UObject, ResourceName: string): ModelingToolsEditorModeSettings;
	static GetDefaultObject(): ModelingToolsEditorModeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ModelingToolsEditorModeSettings;
	static C(Other: UObject | any): ModelingToolsEditorModeSettings;
}

declare class ModelingModeCustomSectionColor { 
	SectionName: string;
	Color: LinearColor;
	clone() : ModelingModeCustomSectionColor;
	static C(Other: UObject | any): ModelingModeCustomSectionColor;
}

declare class ModelingModeCustomToolColor { 
	ToolName: string;
	Color: LinearColor;
	clone() : ModelingModeCustomToolColor;
	static C(Other: UObject | any): ModelingModeCustomToolColor;
}

declare class ModelingModeAssetCollectionSet { 
	Name: string;
	Collections: CollectionReference[];
	clone() : ModelingModeAssetCollectionSet;
	static C(Other: UObject | any): ModelingModeAssetCollectionSet;
}

declare class ModelingToolsModeCustomizationSettings extends DeveloperSettings { 
	ToolSectionOrder: string[];
	ToolFavorites: string[];
	SectionColors: ModelingModeCustomSectionColor[];
	ToolColors: ModelingModeCustomToolColor[];
	BrushAlphaSets: ModelingModeAssetCollectionSet[];
	static Load(ResourceName: string): ModelingToolsModeCustomizationSettings;
	static Find(Outer: UObject, ResourceName: string): ModelingToolsModeCustomizationSettings;
	static GetDefaultObject(): ModelingToolsModeCustomizationSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ModelingToolsModeCustomizationSettings;
	static C(Other: UObject | any): ModelingToolsModeCustomizationSettings;
}

declare class NewPluginDescriptorData extends UObject { 
	CreatedBy: string;
	CreatedByURL: string;
	Description: string;
	bIsBetaVersion: boolean;
	static Load(ResourceName: string): NewPluginDescriptorData;
	static Find(Outer: UObject, ResourceName: string): NewPluginDescriptorData;
	static GetDefaultObject(): NewPluginDescriptorData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NewPluginDescriptorData;
	static C(Other: UObject | any): NewPluginDescriptorData;
}

declare class PluginReferenceMetadata { 
	Name: string;
	bOptional: boolean;
	bEnabled: boolean;
	clone() : PluginReferenceMetadata;
	static C(Other: UObject | any): PluginReferenceMetadata;
}

declare class PluginMetadataObject extends UObject { 
	Version: number;
	VersionName: string;
	FriendlyName: string;
	Description: string;
	Category: string;
	CreatedBy: string;
	CreatedByURL: string;
	DocsURL: string;
	MarketplaceURL: string;
	SupportURL: string;
	bCanContainContent: boolean;
	bIsBetaVersion: boolean;
	Plugins: PluginReferenceMetadata[];
	static Load(ResourceName: string): PluginMetadataObject;
	static Find(Outer: UObject, ResourceName: string): PluginMetadataObject;
	static GetDefaultObject(): PluginMetadataObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PluginMetadataObject;
	GetAvailablePluginDependencies(): string[];
	static C(Other: UObject | any): PluginMetadataObject;
}

declare class SpeedTreeImportFactory extends Factory { 
	static Load(ResourceName: string): SpeedTreeImportFactory;
	static Find(Outer: UObject, ResourceName: string): SpeedTreeImportFactory;
	static GetDefaultObject(): SpeedTreeImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpeedTreeImportFactory;
	static C(Other: UObject | any): SpeedTreeImportFactory;
}

declare class ReimportSpeedTreeFactory extends SpeedTreeImportFactory { 
	static Load(ResourceName: string): ReimportSpeedTreeFactory;
	static Find(Outer: UObject, ResourceName: string): ReimportSpeedTreeFactory;
	static GetDefaultObject(): ReimportSpeedTreeFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReimportSpeedTreeFactory;
	static C(Other: UObject | any): ReimportSpeedTreeFactory;
}

declare type EImportGeometryType = 'IGT_3D' | 'IGT_Billboards' | 'IGT_Both' | 'IGT_MAX';
declare var EImportGeometryType : { IGT_3D:'IGT_3D',IGT_Billboards:'IGT_Billboards',IGT_Both:'IGT_Both',IGT_MAX:'IGT_MAX', };
declare type EImportLODType = 'ILT_PaintedFoliage' | 'ILT_IndividualActors' | 'ILT_MAX';
declare var EImportLODType : { ILT_PaintedFoliage:'ILT_PaintedFoliage',ILT_IndividualActors:'ILT_IndividualActors',ILT_MAX:'ILT_MAX', };
declare class SpeedTreeImportData extends AssetImportData { 
	TreeScale: number;
	ImportGeometryType: EImportGeometryType;
	LODType: EImportLODType;
	IncludeCollision: boolean;
	MakeMaterialsCheck: boolean;
	IncludeNormalMapCheck: boolean;
	IncludeDetailMapCheck: boolean;
	IncludeSpecularMapCheck: boolean;
	IncludeBranchSeamSmoothing: boolean;
	IncludeSpeedTreeAO: boolean;
	IncludeColorAdjustment: boolean;
	IncludeSubsurface: boolean;
	IncludeVertexProcessingCheck: boolean;
	IncludeWindCheck: boolean;
	IncludeSmoothLODCheck: boolean;
	static Load(ResourceName: string): SpeedTreeImportData;
	static Find(Outer: UObject, ResourceName: string): SpeedTreeImportData;
	static GetDefaultObject(): SpeedTreeImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpeedTreeImportData;
	static C(Other: UObject | any): SpeedTreeImportData;
}

declare class HLODBuilderInstancing extends HLODBuilder { 
	static Load(ResourceName: string): HLODBuilderInstancing;
	static Find(Outer: UObject, ResourceName: string): HLODBuilderInstancing;
	static GetDefaultObject(): HLODBuilderInstancing;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HLODBuilderInstancing;
	static C(Other: UObject | any): HLODBuilderInstancing;
}

declare class HLODBuilderMeshApproximateSettings extends HLODBuilderSettings { 
	MeshApproximationSettings: MeshApproximationSettings;
	HLODMaterial: Material;
	static Load(ResourceName: string): HLODBuilderMeshApproximateSettings;
	static Find(Outer: UObject, ResourceName: string): HLODBuilderMeshApproximateSettings;
	static GetDefaultObject(): HLODBuilderMeshApproximateSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HLODBuilderMeshApproximateSettings;
	static C(Other: UObject | any): HLODBuilderMeshApproximateSettings;
}

declare class HLODBuilderMeshApproximate extends HLODBuilder { 
	static Load(ResourceName: string): HLODBuilderMeshApproximate;
	static Find(Outer: UObject, ResourceName: string): HLODBuilderMeshApproximate;
	static GetDefaultObject(): HLODBuilderMeshApproximate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HLODBuilderMeshApproximate;
	static C(Other: UObject | any): HLODBuilderMeshApproximate;
}

declare class HLODBuilderMeshMergeSettings extends HLODBuilderSettings { 
	MeshMergeSettings: MeshMergingSettings;
	HLODMaterial: Material;
	static Load(ResourceName: string): HLODBuilderMeshMergeSettings;
	static Find(Outer: UObject, ResourceName: string): HLODBuilderMeshMergeSettings;
	static GetDefaultObject(): HLODBuilderMeshMergeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HLODBuilderMeshMergeSettings;
	static C(Other: UObject | any): HLODBuilderMeshMergeSettings;
}

declare class HLODBuilderMeshMerge extends HLODBuilder { 
	static Load(ResourceName: string): HLODBuilderMeshMerge;
	static Find(Outer: UObject, ResourceName: string): HLODBuilderMeshMerge;
	static GetDefaultObject(): HLODBuilderMeshMerge;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HLODBuilderMeshMerge;
	static C(Other: UObject | any): HLODBuilderMeshMerge;
}

declare class HLODBuilderMeshSimplifySettings extends HLODBuilderSettings { 
	MeshSimplifySettings: MeshProxySettings;
	HLODMaterial: Material;
	static Load(ResourceName: string): HLODBuilderMeshSimplifySettings;
	static Find(Outer: UObject, ResourceName: string): HLODBuilderMeshSimplifySettings;
	static GetDefaultObject(): HLODBuilderMeshSimplifySettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HLODBuilderMeshSimplifySettings;
	static C(Other: UObject | any): HLODBuilderMeshSimplifySettings;
}

declare class HLODBuilderMeshSimplify extends HLODBuilder { 
	static Load(ResourceName: string): HLODBuilderMeshSimplify;
	static Find(Outer: UObject, ResourceName: string): HLODBuilderMeshSimplify;
	static GetDefaultObject(): HLODBuilderMeshSimplify;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HLODBuilderMeshSimplify;
	static C(Other: UObject | any): HLODBuilderMeshSimplify;
}

declare class AutomationUtilsBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): AutomationUtilsBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): AutomationUtilsBlueprintLibrary;
	static GetDefaultObject(): AutomationUtilsBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AutomationUtilsBlueprintLibrary;
	static TakeGameplayAutomationScreenshot(ScreenShotName: string,MaxGlobalError: number,MaxLocalError: number,MapNameOverride: string): void;
	static C(Other: UObject | any): AutomationUtilsBlueprintLibrary;
}

declare class ScreenshotComparisonCommandlet extends Commandlet { 
	static Load(ResourceName: string): ScreenshotComparisonCommandlet;
	static Find(Outer: UObject, ResourceName: string): ScreenshotComparisonCommandlet;
	static GetDefaultObject(): ScreenshotComparisonCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ScreenshotComparisonCommandlet;
	static C(Other: UObject | any): ScreenshotComparisonCommandlet;
}

declare class ActorFactoryGeometryCollection extends ActorFactory { 
	static Load(ResourceName: string): ActorFactoryGeometryCollection;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryGeometryCollection;
	static GetDefaultObject(): ActorFactoryGeometryCollection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryGeometryCollection;
	static C(Other: UObject | any): ActorFactoryGeometryCollection;
}

declare class GeometryCollectionCacheFactory extends Factory { 
	TargetCollection: GeometryCollection;
	static Load(ResourceName: string): GeometryCollectionCacheFactory;
	static Find(Outer: UObject, ResourceName: string): GeometryCollectionCacheFactory;
	static GetDefaultObject(): GeometryCollectionCacheFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCollectionCacheFactory;
	static C(Other: UObject | any): GeometryCollectionCacheFactory;
}

declare class GeometryCollectionFactory extends Factory { 
	static Load(ResourceName: string): GeometryCollectionFactory;
	static Find(Outer: UObject, ResourceName: string): GeometryCollectionFactory;
	static GetDefaultObject(): GeometryCollectionFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCollectionFactory;
	static C(Other: UObject | any): GeometryCollectionFactory;
}

declare class GeometryCollectionThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	static Load(ResourceName: string): GeometryCollectionThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): GeometryCollectionThumbnailRenderer;
	static GetDefaultObject(): GeometryCollectionThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCollectionThumbnailRenderer;
	static C(Other: UObject | any): GeometryCollectionThumbnailRenderer;
}

declare class FractureEditorMode extends BaseLegacyWidgetEdMode { 
	static Load(ResourceName: string): FractureEditorMode;
	static Find(Outer: UObject, ResourceName: string): FractureEditorMode;
	static GetDefaultObject(): FractureEditorMode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureEditorMode;
	static C(Other: UObject | any): FractureEditorMode;
}

declare class FractureModeCustomSectionColor { 
	SectionName: string;
	Color: LinearColor;
	clone() : FractureModeCustomSectionColor;
	static C(Other: UObject | any): FractureModeCustomSectionColor;
}

declare class FractureModeCustomToolColor { 
	ToolName: string;
	Color: LinearColor;
	clone() : FractureModeCustomToolColor;
	static C(Other: UObject | any): FractureModeCustomToolColor;
}

declare class FractureModeCustomizationSettings extends DeveloperSettings { 
	ToolSectionOrder: string[];
	ToolFavorites: string[];
	SectionColors: FractureModeCustomSectionColor[];
	ToolColors: FractureModeCustomToolColor[];
	static Load(ResourceName: string): FractureModeCustomizationSettings;
	static Find(Outer: UObject, ResourceName: string): FractureModeCustomizationSettings;
	static GetDefaultObject(): FractureModeCustomizationSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureModeCustomizationSettings;
	static C(Other: UObject | any): FractureModeCustomizationSettings;
}

declare class FractureSettings extends UObject { 
	ExplodeAmount: number;
	FractureLevel: number;
	bHideUnselected: boolean;
	static Load(ResourceName: string): FractureSettings;
	static Find(Outer: UObject, ResourceName: string): FractureSettings;
	static GetDefaultObject(): FractureSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureSettings;
	static C(Other: UObject | any): FractureSettings;
}

declare class FractureActionTool extends UObject { 
	static Load(ResourceName: string): FractureActionTool;
	static Find(Outer: UObject, ResourceName: string): FractureActionTool;
	static GetDefaultObject(): FractureActionTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureActionTool;
	static C(Other: UObject | any): FractureActionTool;
}

declare class FractureModalTool extends FractureActionTool { 
	VisualizedCollections: GeometryCollectionComponent[];
	static Load(ResourceName: string): FractureModalTool;
	static Find(Outer: UObject, ResourceName: string): FractureModalTool;
	static GetDefaultObject(): FractureModalTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureModalTool;
	static C(Other: UObject | any): FractureModalTool;
}

declare class FractureToolSettings extends UObject { 
	OwnerTool: FractureModalTool;
	static Load(ResourceName: string): FractureToolSettings;
	static Find(Outer: UObject, ResourceName: string): FractureToolSettings;
	static GetDefaultObject(): FractureToolSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolSettings;
	static C(Other: UObject | any): FractureToolSettings;
}

declare class FractureInteractiveTool extends FractureModalTool { 
	static Load(ResourceName: string): FractureInteractiveTool;
	static Find(Outer: UObject, ResourceName: string): FractureInteractiveTool;
	static GetDefaultObject(): FractureInteractiveTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureInteractiveTool;
	static C(Other: UObject | any): FractureInteractiveTool;
}

declare type EFractureAutoClusterMode = 'BoundingBox' | 'Proximity' | 'Distance' | 'Voronoi' | 'EFractureAutoClusterMode_MAX';
declare var EFractureAutoClusterMode : { BoundingBox:'BoundingBox',Proximity:'Proximity',Distance:'Distance',Voronoi:'Voronoi',EFractureAutoClusterMode_MAX:'EFractureAutoClusterMode_MAX', };
declare class FractureAutoClusterSettings extends FractureToolSettings { 
	AutoClusterMode: EFractureAutoClusterMode;
	SiteCount: any;
	bEnforceConnectivity: boolean;
	static Load(ResourceName: string): FractureAutoClusterSettings;
	static Find(Outer: UObject, ResourceName: string): FractureAutoClusterSettings;
	static GetDefaultObject(): FractureAutoClusterSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureAutoClusterSettings;
	static C(Other: UObject | any): FractureAutoClusterSettings;
}

declare class FractureToolAutoCluster extends FractureModalTool { 
	AutoClusterSettings: FractureAutoClusterSettings;
	static Load(ResourceName: string): FractureToolAutoCluster;
	static Find(Outer: UObject, ResourceName: string): FractureToolAutoCluster;
	static GetDefaultObject(): FractureToolAutoCluster;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolAutoCluster;
	static C(Other: UObject | any): FractureToolAutoCluster;
}

declare type EFractureBrickBond = 'Stretcher' | 'Stack' | 'English' | 'Header' | 'Flemish' | 'EFractureBrickBond_MAX';
declare var EFractureBrickBond : { Stretcher:'Stretcher',Stack:'Stack',English:'English',Header:'Header',Flemish:'Flemish',EFractureBrickBond_MAX:'EFractureBrickBond_MAX', };
declare class FractureBrickSettings extends FractureToolSettings { 
	Bond: EFractureBrickBond;
	BrickLength: number;
	BrickHeight: number;
	BrickDepth: number;
	static Load(ResourceName: string): FractureBrickSettings;
	static Find(Outer: UObject, ResourceName: string): FractureBrickSettings;
	static GetDefaultObject(): FractureBrickSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureBrickSettings;
	static C(Other: UObject | any): FractureBrickSettings;
}

declare class FractureCutterSettings extends FractureToolSettings { 
	RandomSeed: number;
	ChanceToFracture: number;
	bGroupFracture: boolean;
	bGroupFractureToggleEnabled: boolean;
	bDrawSites: boolean;
	bDrawSitesToggleEnabled: boolean;
	bDrawDiagram: boolean;
	Grout: number;
	Amplitude: number;
	Frequency: number;
	Persistence: number;
	Lacunarity: number;
	OctaveNumber: number;
	PointSpacing: number;
	static Load(ResourceName: string): FractureCutterSettings;
	static Find(Outer: UObject, ResourceName: string): FractureCutterSettings;
	static GetDefaultObject(): FractureCutterSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureCutterSettings;
	static C(Other: UObject | any): FractureCutterSettings;
}

declare class FractureCollisionSettings extends FractureToolSettings { 
	bAddSamplesForCollision: boolean;
	PointSpacing: number;
	static Load(ResourceName: string): FractureCollisionSettings;
	static Find(Outer: UObject, ResourceName: string): FractureCollisionSettings;
	static GetDefaultObject(): FractureCollisionSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureCollisionSettings;
	static C(Other: UObject | any): FractureCollisionSettings;
}

declare class FractureToolCutterBase extends FractureInteractiveTool { 
	CutterSettings: FractureCutterSettings;
	CollisionSettings: FractureCollisionSettings;
	static Load(ResourceName: string): FractureToolCutterBase;
	static Find(Outer: UObject, ResourceName: string): FractureToolCutterBase;
	static GetDefaultObject(): FractureToolCutterBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolCutterBase;
	static C(Other: UObject | any): FractureToolCutterBase;
}

declare class FractureToolBrick extends FractureToolCutterBase { 
	BrickSettings: FractureBrickSettings;
	static Load(ResourceName: string): FractureToolBrick;
	static Find(Outer: UObject, ResourceName: string): FractureToolBrick;
	static GetDefaultObject(): FractureToolBrick;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolBrick;
	static C(Other: UObject | any): FractureToolBrick;
}

declare class FractureClusterCutterSettings extends FractureToolSettings { 
	NumberClustersMin: number;
	NumberClustersMax: number;
	SitesPerClusterMin: number;
	SitesPerClusterMax: number;
	ClusterRadiusFractionMin: number;
	ClusterRadiusFractionMax: number;
	ClusterRadiusOffset: number;
	static Load(ResourceName: string): FractureClusterCutterSettings;
	static Find(Outer: UObject, ResourceName: string): FractureClusterCutterSettings;
	static GetDefaultObject(): FractureClusterCutterSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureClusterCutterSettings;
	static C(Other: UObject | any): FractureClusterCutterSettings;
}

declare class FractureToolVoronoiCutterBase extends FractureToolCutterBase { 
	VoronoiLineSets: LineSetComponent[];
	static Load(ResourceName: string): FractureToolVoronoiCutterBase;
	static Find(Outer: UObject, ResourceName: string): FractureToolVoronoiCutterBase;
	static GetDefaultObject(): FractureToolVoronoiCutterBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolVoronoiCutterBase;
	static C(Other: UObject | any): FractureToolVoronoiCutterBase;
}

declare class FractureToolClusterCutter extends FractureToolVoronoiCutterBase { 
	ClusterSettings: FractureClusterCutterSettings;
	static Load(ResourceName: string): FractureToolClusterCutter;
	static Find(Outer: UObject, ResourceName: string): FractureToolClusterCutter;
	static GetDefaultObject(): FractureToolClusterCutter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolClusterCutter;
	static C(Other: UObject | any): FractureToolClusterCutter;
}

declare class FractureToolFlattenAll extends FractureActionTool { 
	static Load(ResourceName: string): FractureToolFlattenAll;
	static Find(Outer: UObject, ResourceName: string): FractureToolFlattenAll;
	static GetDefaultObject(): FractureToolFlattenAll;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolFlattenAll;
	static C(Other: UObject | any): FractureToolFlattenAll;
}

declare class FractureToolCluster extends FractureActionTool { 
	static Load(ResourceName: string): FractureToolCluster;
	static Find(Outer: UObject, ResourceName: string): FractureToolCluster;
	static GetDefaultObject(): FractureToolCluster;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolCluster;
	static C(Other: UObject | any): FractureToolCluster;
}

declare class FractureToolUncluster extends FractureActionTool { 
	static Load(ResourceName: string): FractureToolUncluster;
	static Find(Outer: UObject, ResourceName: string): FractureToolUncluster;
	static GetDefaultObject(): FractureToolUncluster;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolUncluster;
	static C(Other: UObject | any): FractureToolUncluster;
}

declare class FractureToolMoveUp extends FractureActionTool { 
	static Load(ResourceName: string): FractureToolMoveUp;
	static Find(Outer: UObject, ResourceName: string): FractureToolMoveUp;
	static GetDefaultObject(): FractureToolMoveUp;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolMoveUp;
	static C(Other: UObject | any): FractureToolMoveUp;
}

declare class FractureToolClusterMerge extends FractureActionTool { 
	static Load(ResourceName: string): FractureToolClusterMerge;
	static Find(Outer: UObject, ResourceName: string): FractureToolClusterMerge;
	static GetDefaultObject(): FractureToolClusterMerge;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolClusterMerge;
	static C(Other: UObject | any): FractureToolClusterMerge;
}

declare class FractureClusterMagnetSettings extends FractureToolSettings { 
	Iterations: any;
	static Load(ResourceName: string): FractureClusterMagnetSettings;
	static Find(Outer: UObject, ResourceName: string): FractureClusterMagnetSettings;
	static GetDefaultObject(): FractureClusterMagnetSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureClusterMagnetSettings;
	static C(Other: UObject | any): FractureClusterMagnetSettings;
}

declare class FractureToolClusterMagnet extends FractureModalTool { 
	ClusterMagnetSettings: FractureClusterMagnetSettings;
	static Load(ResourceName: string): FractureToolClusterMagnet;
	static Find(Outer: UObject, ResourceName: string): FractureToolClusterMagnet;
	static GetDefaultObject(): FractureToolClusterMagnet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolClusterMagnet;
	static C(Other: UObject | any): FractureToolClusterMagnet;
}

declare class FractureConvertSettings extends FractureToolSettings { 
	bPromptForBaseName: boolean;
	bPerBone: boolean;
	bCenterPivots: boolean;
	bPlaceInWorld: boolean;
	bSelectNewActors: boolean;
	static Load(ResourceName: string): FractureConvertSettings;
	static Find(Outer: UObject, ResourceName: string): FractureConvertSettings;
	static GetDefaultObject(): FractureConvertSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureConvertSettings;
	static C(Other: UObject | any): FractureConvertSettings;
}

declare class FractureToolConvert extends FractureModalTool { 
	ConvertSettings: FractureConvertSettings;
	static Load(ResourceName: string): FractureToolConvert;
	static Find(Outer: UObject, ResourceName: string): FractureToolConvert;
	static GetDefaultObject(): FractureToolConvert;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolConvert;
	static C(Other: UObject | any): FractureToolConvert;
}

declare class FractureConvexSettings extends FractureToolSettings { 
	FractionAllowRemove: any;
	CanExceedFraction: any;
	SimplificationDistanceThreshold: any;
	static Load(ResourceName: string): FractureConvexSettings;
	static Find(Outer: UObject, ResourceName: string): FractureConvexSettings;
	static GetDefaultObject(): FractureConvexSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureConvexSettings;
	DeleteFromSelected(): void;
	ClearCustomConvex(): void;
	static C(Other: UObject | any): FractureConvexSettings;
}

declare class FractureToolConvex extends FractureModalTool { 
	ConvexSettings: FractureConvexSettings;
	static Load(ResourceName: string): FractureToolConvex;
	static Find(Outer: UObject, ResourceName: string): FractureToolConvex;
	static GetDefaultObject(): FractureToolConvex;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolConvex;
	static C(Other: UObject | any): FractureToolConvex;
}

declare type EVoronoiPattern = 'Centered' | 'Uniform' | 'Grid' | 'MeshVertices' | 'SelectedBones' | 'EVoronoiPattern_MAX';
declare var EVoronoiPattern : { Centered:'Centered',Uniform:'Uniform',Grid:'Grid',MeshVertices:'MeshVertices',SelectedBones:'SelectedBones',EVoronoiPattern_MAX:'EVoronoiPattern_MAX', };
declare type EDownsamplingMode = 'Random' | 'UniformSpacing' | 'KeepSharp' | 'EDownsamplingMode_MAX';
declare var EDownsamplingMode : { Random:'Random',UniformSpacing:'UniformSpacing',KeepSharp:'KeepSharp',EDownsamplingMode_MAX:'EDownsamplingMode_MAX', };
declare class FractureCustomVoronoiSettings extends FractureToolSettings { 
	VoronoiPattern: EVoronoiPattern;
	NormalOffset: number;
	Variability: number;
	SitesToAdd: number;
	GridX: number;
	GridY: number;
	GridZ: number;
	SkipFraction: number;
	SkipMode: EDownsamplingMode;
	ReferenceMesh: any;
	bStartAtActor: boolean;
	static Load(ResourceName: string): FractureCustomVoronoiSettings;
	static Find(Outer: UObject, ResourceName: string): FractureCustomVoronoiSettings;
	static GetDefaultObject(): FractureCustomVoronoiSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureCustomVoronoiSettings;
	UnfreezeSites(): void;
	RegenerateLiveSites(): void;
	FreezeLiveSites(): void;
	ClearFrozenSites(): void;
	static C(Other: UObject | any): FractureCustomVoronoiSettings;
}

declare class FractureTransformGizmoSettings extends FractureToolSettings { 
	bUseGizmo: boolean;
	bCenterOnSelection: boolean;
	bShowUseGizmoOption: boolean;
	TransformGizmo: CombinedTransformGizmo;
	TransformProxy: TransformProxy;
	AttachedCutter: FractureToolCutterBase;
	UsedToolsContext: InteractiveToolsContext;
	static Load(ResourceName: string): FractureTransformGizmoSettings;
	static Find(Outer: UObject, ResourceName: string): FractureTransformGizmoSettings;
	static GetDefaultObject(): FractureTransformGizmoSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureTransformGizmoSettings;
	static C(Other: UObject | any): FractureTransformGizmoSettings;
}

declare class FractureToolCustomVoronoi extends FractureToolVoronoiCutterBase { 
	CustomVoronoiSettings: FractureCustomVoronoiSettings;
	GizmoSettings: FractureTransformGizmoSettings;
	static Load(ResourceName: string): FractureToolCustomVoronoi;
	static Find(Outer: UObject, ResourceName: string): FractureToolCustomVoronoi;
	static GetDefaultObject(): FractureToolCustomVoronoi;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolCustomVoronoi;
	static C(Other: UObject | any): FractureToolCustomVoronoi;
}

declare class FractureToolDeleteBranch extends FractureActionTool { 
	static Load(ResourceName: string): FractureToolDeleteBranch;
	static Find(Outer: UObject, ResourceName: string): FractureToolDeleteBranch;
	static GetDefaultObject(): FractureToolDeleteBranch;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolDeleteBranch;
	static C(Other: UObject | any): FractureToolDeleteBranch;
}

declare class FractureToolHide extends FractureActionTool { 
	static Load(ResourceName: string): FractureToolHide;
	static Find(Outer: UObject, ResourceName: string): FractureToolHide;
	static GetDefaultObject(): FractureToolHide;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolHide;
	static C(Other: UObject | any): FractureToolHide;
}

declare class FractureToolUnhide extends FractureActionTool { 
	static Load(ResourceName: string): FractureToolUnhide;
	static Find(Outer: UObject, ResourceName: string): FractureToolUnhide;
	static GetDefaultObject(): FractureToolUnhide;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolUnhide;
	static C(Other: UObject | any): FractureToolUnhide;
}

declare class FractureToolValidate extends FractureActionTool { 
	static Load(ResourceName: string): FractureToolValidate;
	static Find(Outer: UObject, ResourceName: string): FractureToolValidate;
	static GetDefaultObject(): FractureToolValidate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolValidate;
	static C(Other: UObject | any): FractureToolValidate;
}

declare class FractureToolAddEmbeddedGeometry extends FractureActionTool { 
	static Load(ResourceName: string): FractureToolAddEmbeddedGeometry;
	static Find(Outer: UObject, ResourceName: string): FractureToolAddEmbeddedGeometry;
	static GetDefaultObject(): FractureToolAddEmbeddedGeometry;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolAddEmbeddedGeometry;
	static C(Other: UObject | any): FractureToolAddEmbeddedGeometry;
}

declare class FractureToolAutoEmbedGeometry extends FractureActionTool { 
	static Load(ResourceName: string): FractureToolAutoEmbedGeometry;
	static Find(Outer: UObject, ResourceName: string): FractureToolAutoEmbedGeometry;
	static GetDefaultObject(): FractureToolAutoEmbedGeometry;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolAutoEmbedGeometry;
	static C(Other: UObject | any): FractureToolAutoEmbedGeometry;
}

declare class FractureToolFlushEmbeddedGeometrySettings extends FractureToolSettings { 
	bExtractAsStaticMeshActors: boolean;
	static Load(ResourceName: string): FractureToolFlushEmbeddedGeometrySettings;
	static Find(Outer: UObject, ResourceName: string): FractureToolFlushEmbeddedGeometrySettings;
	static GetDefaultObject(): FractureToolFlushEmbeddedGeometrySettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolFlushEmbeddedGeometrySettings;
	static C(Other: UObject | any): FractureToolFlushEmbeddedGeometrySettings;
}

declare class FractureToolFlushEmbeddedGeometry extends FractureModalTool { 
	FlushEmbeddedGeometrySettings: FractureToolFlushEmbeddedGeometrySettings;
	static Load(ResourceName: string): FractureToolFlushEmbeddedGeometry;
	static Find(Outer: UObject, ResourceName: string): FractureToolFlushEmbeddedGeometry;
	static GetDefaultObject(): FractureToolFlushEmbeddedGeometry;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolFlushEmbeddedGeometry;
	static C(Other: UObject | any): FractureToolFlushEmbeddedGeometry;
}

declare type ENeighborSelectionMethod = 'LargestNeighbor' | 'NearestCenter' | 'ENeighborSelectionMethod_MAX';
declare var ENeighborSelectionMethod : { LargestNeighbor:'LargestNeighbor',NearestCenter:'NearestCenter',ENeighborSelectionMethod_MAX:'ENeighborSelectionMethod_MAX', };
declare type EGeometrySelectionMethod = 'VolumeCubeRoot' | 'RelativeVolume' | 'EGeometrySelectionMethod_MAX';
declare var EGeometrySelectionMethod : { VolumeCubeRoot:'VolumeCubeRoot',RelativeVolume:'RelativeVolume',EGeometrySelectionMethod_MAX:'EGeometrySelectionMethod_MAX', };
declare class FractureTinyGeoSettings extends FractureToolSettings { 
	NeighborSelection: ENeighborSelectionMethod;
	bAlsoMergeSelected: boolean;
	SelectionMethod: EGeometrySelectionMethod;
	MinVolumeCubeRoot: any;
	RelativeVolume: any;
	static Load(ResourceName: string): FractureTinyGeoSettings;
	static Find(Outer: UObject, ResourceName: string): FractureTinyGeoSettings;
	static GetDefaultObject(): FractureTinyGeoSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureTinyGeoSettings;
	static C(Other: UObject | any): FractureTinyGeoSettings;
}

declare class FractureToolFixTinyGeo extends FractureToolCutterBase { 
	TinyGeoSettings: FractureTinyGeoSettings;
	static Load(ResourceName: string): FractureToolFixTinyGeo;
	static Find(Outer: UObject, ResourceName: string): FractureToolFixTinyGeo;
	static GetDefaultObject(): FractureToolFixTinyGeo;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolFixTinyGeo;
	static C(Other: UObject | any): FractureToolFixTinyGeo;
}

declare class FractureToolGenerateAsset extends FractureActionTool { 
	AssetPath: string;
	static Load(ResourceName: string): FractureToolGenerateAsset;
	static Find(Outer: UObject, ResourceName: string): FractureToolGenerateAsset;
	static GetDefaultObject(): FractureToolGenerateAsset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolGenerateAsset;
	static C(Other: UObject | any): FractureToolGenerateAsset;
}

declare class FractureToolResetAsset extends FractureToolGenerateAsset { 
	static Load(ResourceName: string): FractureToolResetAsset;
	static Find(Outer: UObject, ResourceName: string): FractureToolResetAsset;
	static GetDefaultObject(): FractureToolResetAsset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolResetAsset;
	static C(Other: UObject | any): FractureToolResetAsset;
}

declare type EMeshCutDistribution = 'SingleCut' | 'UniformRandom' | 'Grid' | 'EMeshCutDistribution_MAX';
declare var EMeshCutDistribution : { SingleCut:'SingleCut',UniformRandom:'UniformRandom',Grid:'Grid',EMeshCutDistribution_MAX:'EMeshCutDistribution_MAX', };
declare class FractureMeshCutSettings extends FractureToolSettings { 
	CuttingActor: any;
	CutDistribution: EMeshCutDistribution;
	NumberToScatter: number;
	GridX: number;
	GridY: number;
	GridZ: number;
	Variability: number;
	MinScaleFactor: number;
	MaxScaleFactor: number;
	bRandomOrientation: boolean;
	RollRange: number;
	PitchRange: number;
	YawRange: number;
	static Load(ResourceName: string): FractureMeshCutSettings;
	static Find(Outer: UObject, ResourceName: string): FractureMeshCutSettings;
	static GetDefaultObject(): FractureMeshCutSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureMeshCutSettings;
	static C(Other: UObject | any): FractureMeshCutSettings;
}

declare class FractureToolMeshCut extends FractureToolCutterBase { 
	MeshCutSettings: FractureMeshCutSettings;
	static Load(ResourceName: string): FractureToolMeshCut;
	static Find(Outer: UObject, ResourceName: string): FractureToolMeshCut;
	static GetDefaultObject(): FractureToolMeshCut;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolMeshCut;
	static C(Other: UObject | any): FractureToolMeshCut;
}

declare class FracturePlaneCutSettings extends FractureToolSettings { 
	NumberPlanarCuts: number;
	bCanCutWithMultiplePlanes: boolean;
	static Load(ResourceName: string): FracturePlaneCutSettings;
	static Find(Outer: UObject, ResourceName: string): FracturePlaneCutSettings;
	static GetDefaultObject(): FracturePlaneCutSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FracturePlaneCutSettings;
	static C(Other: UObject | any): FracturePlaneCutSettings;
}

declare class FractureToolPlaneCut extends FractureToolCutterBase { 
	PlaneCutSettings: FracturePlaneCutSettings;
	GizmoSettings: FractureTransformGizmoSettings;
	static Load(ResourceName: string): FractureToolPlaneCut;
	static Find(Outer: UObject, ResourceName: string): FractureToolPlaneCut;
	static GetDefaultObject(): FractureToolPlaneCut;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolPlaneCut;
	static C(Other: UObject | any): FractureToolPlaneCut;
}

declare type EDynamicStateOverrideEnum = 'NoOverride' | 'Sleeping' | 'Kinematic' | 'Static' | 'EDynamicStateOverrideEnum_MAX';
declare var EDynamicStateOverrideEnum : { NoOverride:'NoOverride',Sleeping:'Sleeping',Kinematic:'Kinematic',Static:'Static',EDynamicStateOverrideEnum_MAX:'EDynamicStateOverrideEnum_MAX', };
declare class FractureInitialDynamicStateSettings extends FractureToolSettings { 
	InitialDynamicState: EDynamicStateOverrideEnum;
	static Load(ResourceName: string): FractureInitialDynamicStateSettings;
	static Find(Outer: UObject, ResourceName: string): FractureInitialDynamicStateSettings;
	static GetDefaultObject(): FractureInitialDynamicStateSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureInitialDynamicStateSettings;
	static C(Other: UObject | any): FractureInitialDynamicStateSettings;
}

declare class FractureToolSetInitialDynamicState extends FractureModalTool { 
	StateSettings: FractureInitialDynamicStateSettings;
	static Load(ResourceName: string): FractureToolSetInitialDynamicState;
	static Find(Outer: UObject, ResourceName: string): FractureToolSetInitialDynamicState;
	static GetDefaultObject(): FractureToolSetInitialDynamicState;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolSetInitialDynamicState;
	static C(Other: UObject | any): FractureToolSetInitialDynamicState;
}

declare class FractureRadialSettings extends FractureToolSettings { 
	Center: Vector;
	Normal: Vector;
	bPositionedByGizmo: boolean;
	Radius: number;
	AngularSteps: number;
	RadialSteps: number;
	AngleOffset: number;
	Variability: number;
	static Load(ResourceName: string): FractureRadialSettings;
	static Find(Outer: UObject, ResourceName: string): FractureRadialSettings;
	static GetDefaultObject(): FractureRadialSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureRadialSettings;
	static C(Other: UObject | any): FractureRadialSettings;
}

declare class FractureToolRadial extends FractureToolVoronoiCutterBase { 
	RadialSettings: FractureRadialSettings;
	GizmoSettings: FractureTransformGizmoSettings;
	static Load(ResourceName: string): FractureToolRadial;
	static Find(Outer: UObject, ResourceName: string): FractureToolRadial;
	static GetDefaultObject(): FractureToolRadial;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolRadial;
	static C(Other: UObject | any): FractureToolRadial;
}

declare class FractureRecomputeNormalsSettings extends FractureToolSettings { 
	bShowNormals: boolean;
	bShowTangents: boolean;
	Length: number;
	bOnlyTangents: boolean;
	bRecomputeSharpEdges: boolean;
	SharpEdgeAngleThreshold: number;
	bOnlyInternalSurfaces: boolean;
	static Load(ResourceName: string): FractureRecomputeNormalsSettings;
	static Find(Outer: UObject, ResourceName: string): FractureRecomputeNormalsSettings;
	static GetDefaultObject(): FractureRecomputeNormalsSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureRecomputeNormalsSettings;
	static C(Other: UObject | any): FractureRecomputeNormalsSettings;
}

declare class FractureToolRecomputeNormals extends FractureToolCutterBase { 
	NormalsSettings: FractureRecomputeNormalsSettings;
	static Load(ResourceName: string): FractureToolRecomputeNormals;
	static Find(Outer: UObject, ResourceName: string): FractureToolRecomputeNormals;
	static GetDefaultObject(): FractureToolRecomputeNormals;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolRecomputeNormals;
	static C(Other: UObject | any): FractureToolRecomputeNormals;
}

declare class FractureResampleSettings extends FractureToolSettings { 
	bOnlyShowAddedPoints: boolean;
	static Load(ResourceName: string): FractureResampleSettings;
	static Find(Outer: UObject, ResourceName: string): FractureResampleSettings;
	static GetDefaultObject(): FractureResampleSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureResampleSettings;
	static C(Other: UObject | any): FractureResampleSettings;
}

declare class FractureToolResample extends FractureToolCutterBase { 
	ResampleSettings: FractureResampleSettings;
	static Load(ResourceName: string): FractureToolResample;
	static Find(Outer: UObject, ResourceName: string): FractureToolResample;
	static GetDefaultObject(): FractureToolResample;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolResample;
	static C(Other: UObject | any): FractureToolResample;
}

declare type EMouseSelectionMethod = 'RectSelect' | 'StandardSelect' | 'EMouseSelectionMethod_MAX';
declare var EMouseSelectionMethod : { RectSelect:'RectSelect',StandardSelect:'StandardSelect',EMouseSelectionMethod_MAX:'EMouseSelectionMethod_MAX', };
declare type EVolumeSelectionMethod = 'CubeRootOfVolume' | 'RelativeToWhole' | 'RelativeToLargest' | 'EVolumeSelectionMethod_MAX';
declare var EVolumeSelectionMethod : { CubeRootOfVolume:'CubeRootOfVolume',RelativeToWhole:'RelativeToWhole',RelativeToLargest:'RelativeToLargest',EVolumeSelectionMethod_MAX:'EVolumeSelectionMethod_MAX', };
declare type ESelectionOperation = 'Replace' | 'Add' | 'Remove' | 'ESelectionOperation_MAX';
declare var ESelectionOperation : { Replace:'Replace',Add:'Add',Remove:'Remove',ESelectionOperation_MAX:'ESelectionOperation_MAX', };
declare class FractureSelectionSettings extends FractureToolSettings { 
	MouseSelectionMethod: EMouseSelectionMethod;
	VolumeSelectionMethod: EVolumeSelectionMethod;
	SelectionOperation: ESelectionOperation;
	MinVolume: any;
	MaxVolume: any;
	MinVolumeFrac: any;
	MaxVolumeFrac: any;
	static Load(ResourceName: string): FractureSelectionSettings;
	static Find(Outer: UObject, ResourceName: string): FractureSelectionSettings;
	static GetDefaultObject(): FractureSelectionSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureSelectionSettings;
	static C(Other: UObject | any): FractureSelectionSettings;
}

declare class RectangleMarqueeManager extends UObject { 
	bUseExternalClickDragBehavior: boolean;
	OnDragRectangleChangedDeferredThreshold: any;
	ClickDragBehavior: ClickDragInputBehavior;
	static Load(ResourceName: string): RectangleMarqueeManager;
	static Find(Outer: UObject, ResourceName: string): RectangleMarqueeManager;
	static GetDefaultObject(): RectangleMarqueeManager;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RectangleMarqueeManager;
	static C(Other: UObject | any): RectangleMarqueeManager;
}

declare class FractureToolSelection extends FractureToolCutterBase { 
	SelectionBehaviorSet: InputBehaviorSet;
	SelectionBehaviorSource: LocalInputBehaviorSource;
	RectangleMarqueeManager: RectangleMarqueeManager;
	UsedToolsContext: InteractiveToolsContext;
	SelectionSettings: FractureSelectionSettings;
	static Load(ResourceName: string): FractureToolSelection;
	static Find(Outer: UObject, ResourceName: string): FractureToolSelection;
	static GetDefaultObject(): FractureToolSelection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolSelection;
	static C(Other: UObject | any): FractureToolSelection;
}

declare class FractureToolSelectAll extends FractureActionTool { 
	static Load(ResourceName: string): FractureToolSelectAll;
	static Find(Outer: UObject, ResourceName: string): FractureToolSelectAll;
	static GetDefaultObject(): FractureToolSelectAll;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolSelectAll;
	static C(Other: UObject | any): FractureToolSelectAll;
}

declare class FractureToolSelectNone extends FractureToolSelectAll { 
	static Load(ResourceName: string): FractureToolSelectNone;
	static Find(Outer: UObject, ResourceName: string): FractureToolSelectNone;
	static GetDefaultObject(): FractureToolSelectNone;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolSelectNone;
	static C(Other: UObject | any): FractureToolSelectNone;
}

declare class FractureToolSelectNeighbors extends FractureToolSelectAll { 
	static Load(ResourceName: string): FractureToolSelectNeighbors;
	static Find(Outer: UObject, ResourceName: string): FractureToolSelectNeighbors;
	static GetDefaultObject(): FractureToolSelectNeighbors;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolSelectNeighbors;
	static C(Other: UObject | any): FractureToolSelectNeighbors;
}

declare class FractureToolSelectParent extends FractureToolSelectAll { 
	static Load(ResourceName: string): FractureToolSelectParent;
	static Find(Outer: UObject, ResourceName: string): FractureToolSelectParent;
	static GetDefaultObject(): FractureToolSelectParent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolSelectParent;
	static C(Other: UObject | any): FractureToolSelectParent;
}

declare class FractureToolSelectChildren extends FractureToolSelectAll { 
	static Load(ResourceName: string): FractureToolSelectChildren;
	static Find(Outer: UObject, ResourceName: string): FractureToolSelectChildren;
	static GetDefaultObject(): FractureToolSelectChildren;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolSelectChildren;
	static C(Other: UObject | any): FractureToolSelectChildren;
}

declare class FractureToolSelectSiblings extends FractureToolSelectAll { 
	static Load(ResourceName: string): FractureToolSelectSiblings;
	static Find(Outer: UObject, ResourceName: string): FractureToolSelectSiblings;
	static GetDefaultObject(): FractureToolSelectSiblings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolSelectSiblings;
	static C(Other: UObject | any): FractureToolSelectSiblings;
}

declare class FractureToolSelectAllInLevel extends FractureToolSelectAll { 
	static Load(ResourceName: string): FractureToolSelectAllInLevel;
	static Find(Outer: UObject, ResourceName: string): FractureToolSelectAllInLevel;
	static GetDefaultObject(): FractureToolSelectAllInLevel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolSelectAllInLevel;
	static C(Other: UObject | any): FractureToolSelectAllInLevel;
}

declare class FractureToolSelectInvert extends FractureToolSelectAll { 
	static Load(ResourceName: string): FractureToolSelectInvert;
	static Find(Outer: UObject, ResourceName: string): FractureToolSelectInvert;
	static GetDefaultObject(): FractureToolSelectInvert;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolSelectInvert;
	static C(Other: UObject | any): FractureToolSelectInvert;
}

declare class FractureSliceSettings extends FractureToolSettings { 
	SlicesX: number;
	SlicesY: number;
	SlicesZ: number;
	SliceAngleVariation: number;
	SliceOffsetVariation: number;
	static Load(ResourceName: string): FractureSliceSettings;
	static Find(Outer: UObject, ResourceName: string): FractureSliceSettings;
	static GetDefaultObject(): FractureSliceSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureSliceSettings;
	static C(Other: UObject | any): FractureSliceSettings;
}

declare class FractureToolSlice extends FractureToolCutterBase { 
	SliceSettings: FractureSliceSettings;
	static Load(ResourceName: string): FractureToolSlice;
	static Find(Outer: UObject, ResourceName: string): FractureToolSlice;
	static GetDefaultObject(): FractureToolSlice;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolSlice;
	static C(Other: UObject | any): FractureToolSlice;
}

declare class FractureUniformSettings extends FractureToolSettings { 
	NumberVoronoiSitesMin: number;
	NumberVoronoiSitesMax: number;
	static Load(ResourceName: string): FractureUniformSettings;
	static Find(Outer: UObject, ResourceName: string): FractureUniformSettings;
	static GetDefaultObject(): FractureUniformSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureUniformSettings;
	static C(Other: UObject | any): FractureUniformSettings;
}

declare class FractureToolUniform extends FractureToolVoronoiCutterBase { 
	UniformSettings: FractureUniformSettings;
	static Load(ResourceName: string): FractureToolUniform;
	static Find(Outer: UObject, ResourceName: string): FractureToolUniform;
	static GetDefaultObject(): FractureToolUniform;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolUniform;
	static C(Other: UObject | any): FractureToolUniform;
}

declare type ETargetMaterialIDs = 'OddIDs' | 'OddAndSelectedIDs' | 'SelectedIDs' | 'AllIDs' | 'ETargetMaterialIDs_MAX';
declare var ETargetMaterialIDs : { OddIDs:'OddIDs',OddAndSelectedIDs:'OddAndSelectedIDs',SelectedIDs:'SelectedIDs',AllIDs:'AllIDs',ETargetMaterialIDs_MAX:'ETargetMaterialIDs_MAX', };
declare type EAutoUVTextureResolution = 'Resolution16' | 'Resolution32' | 'Resolution64' | 'Resolution128' | 'Resolution256' | 'Resolution512' | 'Resolution1024' | 'Resolution2048' | 'Resolution4096' | 'Resolution8192' | 'EAutoUVTextureResolution_MAX';
declare var EAutoUVTextureResolution : { Resolution16:'Resolution16',Resolution32:'Resolution32',Resolution64:'Resolution64',Resolution128:'Resolution128',Resolution256:'Resolution256',Resolution512:'Resolution512',Resolution1024:'Resolution1024',Resolution2048:'Resolution2048',Resolution4096:'Resolution4096',Resolution8192:'Resolution8192',EAutoUVTextureResolution_MAX:'EAutoUVTextureResolution_MAX', };
declare type ETextureType = 'ThicknessAndSurfaceAttributes' | 'SpatialGradients' | 'Normals' | 'ETextureType_MAX';
declare var ETextureType : { ThicknessAndSurfaceAttributes:'ThicknessAndSurfaceAttributes',SpatialGradients:'SpatialGradients',Normals:'Normals',ETextureType_MAX:'ETextureType_MAX', };
declare class FractureAutoUVSettings extends FractureToolSettings { 
	UVChannel: string;
	UVChannelNamesList: string[];
	ProjectionScale: Vector;
	TargetMaterialIDs: ETargetMaterialIDs;
	MaterialIDs: number[];
	Resolution: EAutoUVTextureResolution;
	GutterSize: number;
	Result: Texture2D;
	bPromptToSave: boolean;
	bReplaceExisting: boolean;
	BakeTextureType: ETextureType;
	bDistToOuter: boolean;
	bAmbientOcclusion: boolean;
	bSmoothedCurvature: boolean;
	MaxDistance: any;
	OcclusionRays: number;
	OcclusionBlurRadius: any;
	CurvatureBlurRadius: any;
	VoxelResolution: number;
	SmoothingIterations: number;
	ThicknessFactor: any;
	MaxCurvature: any;
	static Load(ResourceName: string): FractureAutoUVSettings;
	static Find(Outer: UObject, ResourceName: string): FractureAutoUVSettings;
	static GetDefaultObject(): FractureAutoUVSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureAutoUVSettings;
	LayoutUVs(): void;
	GetUVChannelNamesFunc(): string[];
	DisableBoneColors(): void;
	DeleteUVChannel(): void;
	BoxProjectUVs(): void;
	BakeTexture(): void;
	AddUVChannel(): void;
	static C(Other: UObject | any): FractureAutoUVSettings;
}

declare class FractureToolAutoUV extends FractureModalTool { 
	AutoUVSettings: FractureAutoUVSettings;
	static Load(ResourceName: string): FractureToolAutoUV;
	static Find(Outer: UObject, ResourceName: string): FractureToolAutoUV;
	static GetDefaultObject(): FractureToolAutoUV;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FractureToolAutoUV;
	static C(Other: UObject | any): FractureToolAutoUV;
}

declare type EInspectedAttributeEnum = 'Volume' | 'Level' | 'InitialDynamicState' | 'Size' | 'EInspectedAttributeEnum_MAX';
declare var EInspectedAttributeEnum : { Volume:'Volume',Level:'Level',InitialDynamicState:'InitialDynamicState',Size:'Size',EInspectedAttributeEnum_MAX:'EInspectedAttributeEnum_MAX', };
declare class HistogramSettings extends UObject { 
	InspectedAttribute: EInspectedAttributeEnum;
	bSorted: boolean;
	bShowClusters: boolean;
	bShowRigids: boolean;
	bShowEmbedded: boolean;
	static Load(ResourceName: string): HistogramSettings;
	static Find(Outer: UObject, ResourceName: string): HistogramSettings;
	static GetDefaultObject(): HistogramSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HistogramSettings;
	static C(Other: UObject | any): HistogramSettings;
}

declare type EOutlinerItemNameEnum = 'BoneName' | 'BoneIndex' | 'EOutlinerItemNameEnum_MAX';
declare var EOutlinerItemNameEnum : { BoneName:'BoneName',BoneIndex:'BoneIndex',EOutlinerItemNameEnum_MAX:'EOutlinerItemNameEnum_MAX', };
declare class OutlinerSettings extends UObject { 
	ItemText: EOutlinerItemNameEnum;
	static Load(ResourceName: string): OutlinerSettings;
	static Find(Outer: UObject, ResourceName: string): OutlinerSettings;
	static GetDefaultObject(): OutlinerSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OutlinerSettings;
	static C(Other: UObject | any): OutlinerSettings;
}

declare type EDataSourceTypeEnum = 'ChaosNiagara_DataSourceType_Collision' | 'ChaosNiagara_DataSourceType_Breaking' | 'ChaosNiagara_DataSourceType_Trailing' | 'ChaosNiagara_Max';
declare var EDataSourceTypeEnum : { ChaosNiagara_DataSourceType_Collision:'ChaosNiagara_DataSourceType_Collision',ChaosNiagara_DataSourceType_Breaking:'ChaosNiagara_DataSourceType_Breaking',ChaosNiagara_DataSourceType_Trailing:'ChaosNiagara_DataSourceType_Trailing',ChaosNiagara_Max:'ChaosNiagara_Max', };
declare type ELocationFilteringModeEnum = 'ChaosNiagara_LocationFilteringMode_Inclusive' | 'ChaosNiagara_LocationFilteringMode_Exclusive' | 'ChaosNiagara_Max';
declare var ELocationFilteringModeEnum : { ChaosNiagara_LocationFilteringMode_Inclusive:'ChaosNiagara_LocationFilteringMode_Inclusive',ChaosNiagara_LocationFilteringMode_Exclusive:'ChaosNiagara_LocationFilteringMode_Exclusive',ChaosNiagara_Max:'ChaosNiagara_Max', };
declare type ELocationXToSpawnEnum = 'ChaosNiagara_LocationXToSpawn_None' | 'ChaosNiagara_LocationXToSpawn_Min' | 'ChaosNiagara_LocationXToSpawn_Max' | 'ChaosNiagara_LocationXToSpawn_MinMax' | 'ChaosNiagara_Max';
declare var ELocationXToSpawnEnum : { ChaosNiagara_LocationXToSpawn_None:'ChaosNiagara_LocationXToSpawn_None',ChaosNiagara_LocationXToSpawn_Min:'ChaosNiagara_LocationXToSpawn_Min',ChaosNiagara_LocationXToSpawn_Max:'ChaosNiagara_LocationXToSpawn_Max',ChaosNiagara_LocationXToSpawn_MinMax:'ChaosNiagara_LocationXToSpawn_MinMax',ChaosNiagara_Max:'ChaosNiagara_Max', };
declare type ELocationYToSpawnEnum = 'ChaosNiagara_LocationYToSpawn_None' | 'ChaosNiagara_LocationYToSpawn_Min' | 'ChaosNiagara_LocationYToSpawn_Max' | 'ChaosNiagara_LocationYToSpawn_MinMax' | 'ChaosNiagara_Max';
declare var ELocationYToSpawnEnum : { ChaosNiagara_LocationYToSpawn_None:'ChaosNiagara_LocationYToSpawn_None',ChaosNiagara_LocationYToSpawn_Min:'ChaosNiagara_LocationYToSpawn_Min',ChaosNiagara_LocationYToSpawn_Max:'ChaosNiagara_LocationYToSpawn_Max',ChaosNiagara_LocationYToSpawn_MinMax:'ChaosNiagara_LocationYToSpawn_MinMax',ChaosNiagara_Max:'ChaosNiagara_Max', };
declare type ELocationZToSpawnEnum = 'ChaosNiagara_LocationZToSpawn_None' | 'ChaosNiagara_LocationZToSpawn_Min' | 'ChaosNiagara_LocationZToSpawn_Max' | 'ChaosNiagara_LocationZToSpawn_MinMax' | 'ChaosNiagara_Max';
declare var ELocationZToSpawnEnum : { ChaosNiagara_LocationZToSpawn_None:'ChaosNiagara_LocationZToSpawn_None',ChaosNiagara_LocationZToSpawn_Min:'ChaosNiagara_LocationZToSpawn_Min',ChaosNiagara_LocationZToSpawn_Max:'ChaosNiagara_LocationZToSpawn_Max',ChaosNiagara_LocationZToSpawn_MinMax:'ChaosNiagara_LocationZToSpawn_MinMax',ChaosNiagara_Max:'ChaosNiagara_Max', };
declare type EDataSortTypeEnum = 'ChaosNiagara_DataSortType_NoSorting' | 'ChaosNiagara_DataSortType_RandomShuffle' | 'ChaosNiagara_DataSortType_SortByMassMaxToMin' | 'ChaosNiagara_DataSortType_SortByMassMinToMax' | 'ChaosNiagara_Max';
declare var EDataSortTypeEnum : { ChaosNiagara_DataSortType_NoSorting:'ChaosNiagara_DataSortType_NoSorting',ChaosNiagara_DataSortType_RandomShuffle:'ChaosNiagara_DataSortType_RandomShuffle',ChaosNiagara_DataSortType_SortByMassMaxToMin:'ChaosNiagara_DataSortType_SortByMassMaxToMin',ChaosNiagara_DataSortType_SortByMassMinToMax:'ChaosNiagara_DataSortType_SortByMassMinToMax',ChaosNiagara_Max:'ChaosNiagara_Max', };
declare type ERandomVelocityGenerationTypeEnum = 'ChaosNiagara_RandomVelocityGenerationType_RandomDistribution' | 'ChaosNiagara_RandomVelocityGenerationType_RandomDistributionWithStreamers' | 'ChaosNiagara_RandomVelocityGenerationType_CollisionNormalBased' | 'ChaosNiagara_Max';
declare var ERandomVelocityGenerationTypeEnum : { ChaosNiagara_RandomVelocityGenerationType_RandomDistribution:'ChaosNiagara_RandomVelocityGenerationType_RandomDistribution',ChaosNiagara_RandomVelocityGenerationType_RandomDistributionWithStreamers:'ChaosNiagara_RandomVelocityGenerationType_RandomDistributionWithStreamers',ChaosNiagara_RandomVelocityGenerationType_CollisionNormalBased:'ChaosNiagara_RandomVelocityGenerationType_CollisionNormalBased',ChaosNiagara_Max:'ChaosNiagara_Max', };
declare type EDebugTypeEnum = 'ChaosNiagara_DebugType_NoDebug' | 'ChaosNiagara_DebugType_ColorBySolver' | 'ChaosNiagara_DebugType_ColorByParticleIndex' | 'ChaosNiagara_Max';
declare var EDebugTypeEnum : { ChaosNiagara_DebugType_NoDebug:'ChaosNiagara_DebugType_NoDebug',ChaosNiagara_DebugType_ColorBySolver:'ChaosNiagara_DebugType_ColorBySolver',ChaosNiagara_DebugType_ColorByParticleIndex:'ChaosNiagara_DebugType_ColorByParticleIndex',ChaosNiagara_Max:'ChaosNiagara_Max', };
declare class NiagaraDataInterfaceChaosDestruction extends NiagaraDataInterface { 
	ChaosSolverActorSet: any;
	DataSourceType: EDataSourceTypeEnum;
	DataProcessFrequency: number;
	MaxNumberOfDataEntriesToSpawn: number;
	DoSpawn: boolean;
	SpawnMultiplierMinMax: Vector2D;
	SpawnChance: number;
	ImpulseToSpawnMinMax: Vector2D;
	SpeedToSpawnMinMax: Vector2D;
	MassToSpawnMinMax: Vector2D;
	ExtentMinToSpawnMinMax: Vector2D;
	ExtentMaxToSpawnMinMax: Vector2D;
	VolumeToSpawnMinMax: Vector2D;
	SolverTimeToSpawnMinMax: Vector2D;
	SurfaceTypeToSpawn: number;
	LocationFilteringMode: ELocationFilteringModeEnum;
	LocationXToSpawn: ELocationXToSpawnEnum;
	LocationXToSpawnMinMax: Vector2D;
	LocationYToSpawn: ELocationYToSpawnEnum;
	LocationYToSpawnMinMax: Vector2D;
	LocationZToSpawn: ELocationZToSpawnEnum;
	LocationZToSpawnMinMax: Vector2D;
	TrailMinSpeedToSpawn: number;
	DataSortingType: EDataSortTypeEnum;
	bGetExternalCollisionData: boolean;
	DoSpatialHash: boolean;
	SpatialHashVolumeMin: Vector;
	SpatialHashVolumeMax: Vector;
	SpatialHashVolumeCellSize: Vector;
	MaxDataPerCell: number;
	bApplyMaterialsFilter: boolean;
	ChaosBreakingMaterialSet: any;
	bGetExternalBreakingData: boolean;
	bGetExternalTrailingData: boolean;
	RandomPositionMagnitudeMinMax: Vector2D;
	InheritedVelocityMultiplier: number;
	RandomVelocityGenerationType: ERandomVelocityGenerationTypeEnum;
	RandomVelocityMagnitudeMinMax: Vector2D;
	SpreadAngleMax: number;
	VelocityOffsetMin: Vector;
	VelocityOffsetMax: Vector;
	FinalVelocityMagnitudeMinMax: Vector2D;
	MaxLatency: number;
	DebugType: EDebugTypeEnum;
	LastSpawnedPointID: number;
	LastSpawnTime: number;
	SolverTime: number;
	TimeStampOfLastProcessedData: number;
	static Load(ResourceName: string): NiagaraDataInterfaceChaosDestruction;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceChaosDestruction;
	static GetDefaultObject(): NiagaraDataInterfaceChaosDestruction;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceChaosDestruction;
	static C(Other: UObject | any): NiagaraDataInterfaceChaosDestruction;
}

declare class NiagaraDataInterfaceGeometryCollection extends NiagaraDataInterface { 
	GeometryCollectionActor: GeometryCollectionActor;
	static Load(ResourceName: string): NiagaraDataInterfaceGeometryCollection;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfaceGeometryCollection;
	static GetDefaultObject(): NiagaraDataInterfaceGeometryCollection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfaceGeometryCollection;
	static C(Other: UObject | any): NiagaraDataInterfaceGeometryCollection;
}

declare class NiagaraDataInterfacePhysicsField extends NiagaraDataInterface { 
	static Load(ResourceName: string): NiagaraDataInterfacePhysicsField;
	static Find(Outer: UObject, ResourceName: string): NiagaraDataInterfacePhysicsField;
	static GetDefaultObject(): NiagaraDataInterfacePhysicsField;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraDataInterfacePhysicsField;
	static C(Other: UObject | any): NiagaraDataInterfacePhysicsField;
}

declare class ActorFactoryChaosSolver extends ActorFactory { 
	static Load(ResourceName: string): ActorFactoryChaosSolver;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryChaosSolver;
	static GetDefaultObject(): ActorFactoryChaosSolver;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryChaosSolver;
	static C(Other: UObject | any): ActorFactoryChaosSolver;
}

declare class ChaosSolverFactory extends Factory { 
	static Load(ResourceName: string): ChaosSolverFactory;
	static Find(Outer: UObject, ResourceName: string): ChaosSolverFactory;
	static GetDefaultObject(): ChaosSolverFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ChaosSolverFactory;
	static C(Other: UObject | any): ChaosSolverFactory;
}

declare class InputMappingContext_Factory extends Factory { 
	static Load(ResourceName: string): InputMappingContext_Factory;
	static Find(Outer: UObject, ResourceName: string): InputMappingContext_Factory;
	static GetDefaultObject(): InputMappingContext_Factory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InputMappingContext_Factory;
	static C(Other: UObject | any): InputMappingContext_Factory;
}

declare class InputAction_Factory extends Factory { 
	static Load(ResourceName: string): InputAction_Factory;
	static Find(Outer: UObject, ResourceName: string): InputAction_Factory;
	static GetDefaultObject(): InputAction_Factory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InputAction_Factory;
	static C(Other: UObject | any): InputAction_Factory;
}

declare class PlayerMappableInputConfig_Factory extends Factory { 
	static Load(ResourceName: string): PlayerMappableInputConfig_Factory;
	static Find(Outer: UObject, ResourceName: string): PlayerMappableInputConfig_Factory;
	static GetDefaultObject(): PlayerMappableInputConfig_Factory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlayerMappableInputConfig_Factory;
	static C(Other: UObject | any): PlayerMappableInputConfig_Factory;
}

declare class InputBindingTarget extends UObject { 
	static Load(ResourceName: string): InputBindingTarget;
	static Find(Outer: UObject, ResourceName: string): InputBindingTarget;
	static GetDefaultObject(): InputBindingTarget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InputBindingTarget;
	static C(Other: UObject | any): InputBindingTarget;
}

declare class ControllablePlayer extends UObject { 
	Player: PlayerController;
	BindingTargets: any;
	InputContext: any;
	InputAction: any;
	static Load(ResourceName: string): ControllablePlayer;
	static Find(Outer: UObject, ResourceName: string): ControllablePlayer;
	static GetDefaultObject(): ControllablePlayer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ControllablePlayer;
	static C(Other: UObject | any): ControllablePlayer;
}

declare class MovieSceneGeometryCollectionParams { 
	GeometryCollectionCache: SoftObjectPath;
	StartFrameOffset: FrameNumber;
	EndFrameOffset: FrameNumber;
	PlayRate: number;
	clone() : MovieSceneGeometryCollectionParams;
	static C(Other: UObject | any): MovieSceneGeometryCollectionParams;
}

declare class MovieSceneGeometryCollectionSection extends MovieSceneSection { 
	Params: MovieSceneGeometryCollectionParams;
	static Load(ResourceName: string): MovieSceneGeometryCollectionSection;
	static Find(Outer: UObject, ResourceName: string): MovieSceneGeometryCollectionSection;
	static GetDefaultObject(): MovieSceneGeometryCollectionSection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneGeometryCollectionSection;
	static C(Other: UObject | any): MovieSceneGeometryCollectionSection;
}

declare class MovieSceneGeometryCollectionTrack extends MovieSceneNameableTrack { 
	AnimationSections: MovieSceneSection[];
	static Load(ResourceName: string): MovieSceneGeometryCollectionTrack;
	static Find(Outer: UObject, ResourceName: string): MovieSceneGeometryCollectionTrack;
	static GetDefaultObject(): MovieSceneGeometryCollectionTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneGeometryCollectionTrack;
	static C(Other: UObject | any): MovieSceneGeometryCollectionTrack;
}

declare class GeometryScriptLibrary_CollisionFunctions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GeometryScriptLibrary_CollisionFunctions;
	static Find(Outer: UObject, ResourceName: string): GeometryScriptLibrary_CollisionFunctions;
	static GetDefaultObject(): GeometryScriptLibrary_CollisionFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryScriptLibrary_CollisionFunctions;
	static SetStaticMeshCollisionFromMesh(FromDynamicMesh: DynamicMesh,ToStaticMeshAsset: StaticMesh,Options: GeometryScriptCollisionFromMeshOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static SetStaticMeshCollisionFromComponent(StaticMeshAsset: StaticMesh,SourceComponent: PrimitiveComponent,Options: GeometryScriptSetSimpleCollisionOptions,Debug: GeometryScriptDebug): void;
	static SetDynamicMeshCollisionFromMesh(FromDynamicMesh: DynamicMesh,ToDynamicMeshComponent: DynamicMeshComponent,Options: GeometryScriptCollisionFromMeshOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static ResetDynamicMeshCollision(Component: DynamicMeshComponent,bEmitTransaction: boolean,Debug: GeometryScriptDebug): void;
	static C(Other: UObject | any): GeometryScriptLibrary_CollisionFunctions;
}

declare class GeometryScriptLibrary_ContainmentFunctions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GeometryScriptLibrary_ContainmentFunctions;
	static Find(Outer: UObject, ResourceName: string): GeometryScriptLibrary_ContainmentFunctions;
	static GetDefaultObject(): GeometryScriptLibrary_ContainmentFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryScriptLibrary_ContainmentFunctions;
	static ComputeMeshSweptHull(TargetMesh: DynamicMesh,CopyToMesh?: DynamicMesh,CopyToMeshOut?: DynamicMesh,ProjectionFrame?: Transform,Options?: GeometryScriptSweptHullOptions,Debug?: GeometryScriptDebug): {CopyToMesh: DynamicMesh, CopyToMeshOut: DynamicMesh, $: DynamicMesh};
	static ComputeMeshConvexHull(TargetMesh: DynamicMesh,CopyToMesh?: DynamicMesh,CopyToMeshOut?: DynamicMesh,Options?: GeometryScriptConvexHullOptions,Debug?: GeometryScriptDebug): {CopyToMesh: DynamicMesh, CopyToMeshOut: DynamicMesh, $: DynamicMesh};
	static C(Other: UObject | any): GeometryScriptLibrary_ContainmentFunctions;
}

declare class GeometryScriptUVList { 
	clone() : GeometryScriptUVList;
	static C(Other: UObject | any): GeometryScriptUVList;
	ConvertUVListToArray(UVArray?: Vector2D[]): {UVArray: Vector2D[]};
	GetUVListItem(index: number,bIsValidIndex?: boolean): {bIsValidIndex: boolean, $: Vector2D};
	GetUVListLastIndex(): number;
	GetUVListLength(): number;
	static ConvertUVListToArray(UVList: GeometryScriptUVList,UVArray?: Vector2D[]): {UVArray: Vector2D[]};
	static GetUVListItem(UVList: GeometryScriptUVList,index: number,bIsValidIndex?: boolean): {bIsValidIndex: boolean, $: Vector2D};
	static GetUVListLastIndex(UVList: GeometryScriptUVList): number;
	static GetUVListLength(UVList: GeometryScriptUVList): number;
}

declare class GeometryScriptLibrary_ListUtilityFunctions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GeometryScriptLibrary_ListUtilityFunctions;
	static Find(Outer: UObject, ResourceName: string): GeometryScriptLibrary_ListUtilityFunctions;
	static GetDefaultObject(): GeometryScriptLibrary_ListUtilityFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryScriptLibrary_ListUtilityFunctions;
	static GetVectorListLength(VectorList: GeometryScriptVectorList): number;
	static GetVectorListLastIndex(VectorList: GeometryScriptVectorList): number;
	static GetVectorListItem(VectorList: GeometryScriptVectorList,index: number,bIsValidIndex?: boolean): {bIsValidIndex: boolean, $: Vector};
	static GetUVListLength(UVList: GeometryScriptUVList): number;
	static GetUVListLastIndex(UVList: GeometryScriptUVList): number;
	static GetUVListItem(UVList: GeometryScriptUVList,index: number,bIsValidIndex?: boolean): {bIsValidIndex: boolean, $: Vector2D};
	static GetTriangleListLength(TriangleList: GeometryScriptTriangleList): number;
	static GetTriangleListLastTriangle(TriangleList: GeometryScriptTriangleList): number;
	static GetTriangleListItem(TriangleList: GeometryScriptTriangleList,Triangle: number,bIsValidTriangle?: boolean): {bIsValidTriangle: boolean, $: IntVector};
	static GetIndexListLength(IndexList: GeometryScriptIndexList): number;
	static GetIndexListLastIndex(IndexList: GeometryScriptIndexList): number;
	static GetIndexListItem(IndexList: GeometryScriptIndexList,index: number,bIsValidIndex?: boolean): {bIsValidIndex: boolean, $: number};
	static GetColorListLength(ColorList: GeometryScriptColorList): number;
	static GetColorListLastIndex(ColorList: GeometryScriptColorList): number;
	static GetColorListItem(ColorList: GeometryScriptColorList,index: number,bIsValidIndex?: boolean): {bIsValidIndex: boolean, $: LinearColor};
	static ConvertVectorListToArray(VectorList: GeometryScriptVectorList,VectorArray?: Vector[]): {VectorArray: Vector[]};
	static ConvertUVListToArray(UVList: GeometryScriptUVList,UVArray?: Vector2D[]): {UVArray: Vector2D[]};
	static ConvertTriangleListToArray(TriangleList: GeometryScriptTriangleList,TriangleArray?: IntVector[]): {TriangleArray: IntVector[]};
	static ConvertIndexListToArray(IndexList: GeometryScriptIndexList,IndexArray?: number[]): {IndexArray: number[]};
	static ConvertColorListToArray(ColorList: GeometryScriptColorList,ColorArray?: LinearColor[]): {ColorArray: LinearColor[]};
	static ConvertArrayToVectorList(VectorArray: Vector[],VectorList?: GeometryScriptVectorList): {VectorList: GeometryScriptVectorList};
	static ConvertArrayToUVList(UVArray: Vector2D[],UVList?: GeometryScriptUVList): {UVList: GeometryScriptUVList};
	static ConvertArrayToTriangleList(TriangleArray: IntVector[],TriangleList?: GeometryScriptTriangleList): {TriangleList: GeometryScriptTriangleList};
	static ConvertArrayToIndexList(IndexArray: number[],IndexList?: GeometryScriptIndexList,IndexType?: EGeometryScriptIndexType): {IndexList: GeometryScriptIndexList};
	static ConvertArrayToColorList(ColorArray: LinearColor[],ColorList?: GeometryScriptColorList): {ColorList: GeometryScriptColorList};
	static C(Other: UObject | any): GeometryScriptLibrary_ListUtilityFunctions;
}

declare class GeometryScriptLibrary_StaticMeshFunctions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GeometryScriptLibrary_StaticMeshFunctions;
	static Find(Outer: UObject, ResourceName: string): GeometryScriptLibrary_StaticMeshFunctions;
	static GetDefaultObject(): GeometryScriptLibrary_StaticMeshFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryScriptLibrary_StaticMeshFunctions;
	static GetSectionMaterialListFromStaticMesh(FromStaticMeshAsset: StaticMesh,RequestedLOD: GeometryScriptMeshReadLOD,MaterialList?: MaterialInterface[],MaterialIndex?: number[],Outcome?: EGeometryScriptOutcomePins,Debug?: GeometryScriptDebug): {MaterialList: MaterialInterface[], MaterialIndex: number[], Outcome: EGeometryScriptOutcomePins};
	static CopyMeshToStaticMesh(FromDynamicMesh: DynamicMesh,ToStaticMeshAsset: StaticMesh,Options: GeometryScriptCopyMeshToAssetOptions,TargetLod: GeometryScriptMeshWriteLOD,Outcome?: EGeometryScriptOutcomePins,Debug?: GeometryScriptDebug): {Outcome: EGeometryScriptOutcomePins, $: DynamicMesh};
	static CopyMeshFromStaticMesh(FromStaticMeshAsset: StaticMesh,ToDynamicMesh: DynamicMesh,AssetOptions: GeometryScriptCopyMeshFromAssetOptions,RequestedLOD: GeometryScriptMeshReadLOD,Outcome?: EGeometryScriptOutcomePins,Debug?: GeometryScriptDebug): {Outcome: EGeometryScriptOutcomePins, $: DynamicMesh};
	static C(Other: UObject | any): GeometryScriptLibrary_StaticMeshFunctions;
}

declare class GeometryScriptLibrary_MeshBasicEditFunctions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GeometryScriptLibrary_MeshBasicEditFunctions;
	static Find(Outer: UObject, ResourceName: string): GeometryScriptLibrary_MeshBasicEditFunctions;
	static GetDefaultObject(): GeometryScriptLibrary_MeshBasicEditFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryScriptLibrary_MeshBasicEditFunctions;
	static SetVertexPosition(TargetMesh: DynamicMesh,VertexID: number,NewPosition: Vector,bIsValidVertex?: boolean,bDeferChangeNotifications?: boolean): {bIsValidVertex: boolean, $: DynamicMesh};
	static DiscardMeshAttributes(TargetMesh: DynamicMesh,bDeferChangeNotifications: boolean): DynamicMesh;
	static DeleteVerticesFromMesh(TargetMesh: DynamicMesh,VertexList: GeometryScriptIndexList,NumDeleted?: number,bDeferChangeNotifications?: boolean): {NumDeleted: number, $: DynamicMesh};
	static DeleteVertexFromMesh(TargetMesh: DynamicMesh,VertexID: number,bWasVertexDeleted?: boolean,bDeferChangeNotifications?: boolean): {bWasVertexDeleted: boolean, $: DynamicMesh};
	static DeleteTrianglesFromMesh(TargetMesh: DynamicMesh,TriangleList: GeometryScriptIndexList,NumDeleted?: number,bDeferChangeNotifications?: boolean): {NumDeleted: number, $: DynamicMesh};
	static DeleteTriangleFromMesh(TargetMesh: DynamicMesh,TriangleID: number,bWasTriangleDeleted?: boolean,bDeferChangeNotifications?: boolean): {bWasTriangleDeleted: boolean, $: DynamicMesh};
	static AppendMeshRepeated(TargetMesh: DynamicMesh,AppendMesh: DynamicMesh,AppendTransform: Transform,RepeatCount: number,bApplyTransformToFirstInstance: boolean,bDeferChangeNotifications: boolean,Debug: GeometryScriptDebug): DynamicMesh;
	static AppendMesh(TargetMesh: DynamicMesh,AppendMesh: DynamicMesh,AppendTransform: Transform,bDeferChangeNotifications: boolean,Debug: GeometryScriptDebug): DynamicMesh;
	static AppendBuffersToMesh(TargetMesh: DynamicMesh,Buffers: GeometryScriptSimpleMeshBuffers,NewTriangleIndicesList?: GeometryScriptIndexList,MaterialID?: number,bDeferChangeNotifications?: boolean,Debug?: GeometryScriptDebug): {NewTriangleIndicesList: GeometryScriptIndexList, $: DynamicMesh};
	static AddVerticesToMesh(TargetMesh: DynamicMesh,NewPositionsList: GeometryScriptVectorList,NewIndicesList?: GeometryScriptIndexList,bDeferChangeNotifications?: boolean): {NewIndicesList: GeometryScriptIndexList, $: DynamicMesh};
	static AddVertexToMesh(TargetMesh: DynamicMesh,NewPosition: Vector,NewVertexIndex?: number,bDeferChangeNotifications?: boolean): {NewVertexIndex: number, $: DynamicMesh};
	static AddTriangleToMesh(TargetMesh: DynamicMesh,NewTriangle: IntVector,NewTriangleIndex?: number,NewTriangleGroupID?: number,bDeferChangeNotifications?: boolean,Debug?: GeometryScriptDebug): {NewTriangleIndex: number, $: DynamicMesh};
	static AddTrianglesToMesh(TargetMesh: DynamicMesh,NewTrianglesList: GeometryScriptTriangleList,NewIndicesList?: GeometryScriptIndexList,NewTriangleGroupID?: number,bDeferChangeNotifications?: boolean,Debug?: GeometryScriptDebug): {NewIndicesList: GeometryScriptIndexList, $: DynamicMesh};
	static C(Other: UObject | any): GeometryScriptLibrary_MeshBasicEditFunctions;
}

declare class GeometryScriptLibrary_MeshBooleanFunctions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GeometryScriptLibrary_MeshBooleanFunctions;
	static Find(Outer: UObject, ResourceName: string): GeometryScriptLibrary_MeshBooleanFunctions;
	static GetDefaultObject(): GeometryScriptLibrary_MeshBooleanFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryScriptLibrary_MeshBooleanFunctions;
	static ApplyMeshSelfUnion(TargetMesh: DynamicMesh,Options: GeometryScriptMeshSelfUnionOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static ApplyMeshPlaneSlice(TargetMesh: DynamicMesh,CutFrame: Transform,Options: GeometryScriptMeshPlaneSliceOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static ApplyMeshPlaneCut(TargetMesh: DynamicMesh,CutFrame: Transform,Options: GeometryScriptMeshPlaneCutOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static ApplyMeshMirror(TargetMesh: DynamicMesh,MirrorFrame: Transform,Options: GeometryScriptMeshMirrorOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static ApplyMeshBoolean(TargetMesh: DynamicMesh,TargetTransform: Transform,ToolMesh: DynamicMesh,ToolTransform: Transform,Operation: EGeometryScriptBooleanOperation,Options: GeometryScriptMeshBooleanOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static C(Other: UObject | any): GeometryScriptLibrary_MeshBooleanFunctions;
}

declare class GeometryScriptLibrary_MeshComparisonFunctions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GeometryScriptLibrary_MeshComparisonFunctions;
	static Find(Outer: UObject, ResourceName: string): GeometryScriptLibrary_MeshComparisonFunctions;
	static GetDefaultObject(): GeometryScriptLibrary_MeshComparisonFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryScriptLibrary_MeshComparisonFunctions;
	static MeasureDistancesBetweenMeshes(TargetMesh: DynamicMesh,OtherMesh: DynamicMesh,Options: GeometryScriptMeasureMeshDistanceOptions,MaxDistance?: any,MinDistance?: any,AverageDistance?: any,RootMeanSqrDeviation?: any,Debug?: GeometryScriptDebug): {MaxDistance: any, MinDistance: any, AverageDistance: any, RootMeanSqrDeviation: any, $: DynamicMesh};
	static IsSameMeshAs(TargetMesh: DynamicMesh,OtherMesh: DynamicMesh,Options: GeometryScriptIsSameMeshOptions,bIsSameMesh?: boolean,Debug?: GeometryScriptDebug): {bIsSameMesh: boolean, $: DynamicMesh};
	static IsIntersectingMesh(TargetMesh: DynamicMesh,TargetTransform: Transform,OtherMesh: DynamicMesh,OtherTransform: Transform,bIsIntersecting?: boolean,Debug?: GeometryScriptDebug): {bIsIntersecting: boolean, $: DynamicMesh};
	static C(Other: UObject | any): GeometryScriptLibrary_MeshComparisonFunctions;
}

declare class GeometryScriptLibrary_MeshDecompositionFunctions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GeometryScriptLibrary_MeshDecompositionFunctions;
	static Find(Outer: UObject, ResourceName: string): GeometryScriptLibrary_MeshDecompositionFunctions;
	static GetDefaultObject(): GeometryScriptLibrary_MeshDecompositionFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryScriptLibrary_MeshDecompositionFunctions;
	static SplitMeshByPolygroups(TargetMesh: DynamicMesh,GroupLayer: GeometryScriptGroupLayer,ComponentMeshes?: DynamicMesh[],ComponentPolygroups?: number[],MeshPool?: DynamicMeshPool,Debug?: GeometryScriptDebug): {ComponentMeshes: DynamicMesh[], ComponentPolygroups: number[], $: DynamicMesh};
	static SplitMeshByMaterialIDs(TargetMesh: DynamicMesh,ComponentMeshes?: DynamicMesh[],ComponentMaterialIDs?: number[],MeshPool?: DynamicMeshPool,Debug?: GeometryScriptDebug): {ComponentMeshes: DynamicMesh[], ComponentMaterialIDs: number[], $: DynamicMesh};
	static SplitMeshByComponents(TargetMesh: DynamicMesh,ComponentMeshes?: DynamicMesh[],MeshPool?: DynamicMeshPool,Debug?: GeometryScriptDebug): {ComponentMeshes: DynamicMesh[], $: DynamicMesh};
	static GetSubMeshFromMesh(TargetMesh: DynamicMesh,StoreToSubmesh?: DynamicMesh,TriangleList?: GeometryScriptIndexList,StoreToSubmeshOut?: DynamicMesh,Debug?: GeometryScriptDebug): {StoreToSubmesh: DynamicMesh, StoreToSubmeshOut: DynamicMesh, $: DynamicMesh};
	static CopyMeshToMesh(CopyFromMesh: DynamicMesh,CopyToMesh?: DynamicMesh,CopyToMeshOut?: DynamicMesh,Debug?: GeometryScriptDebug): {CopyToMesh: DynamicMesh, CopyToMeshOut: DynamicMesh, $: DynamicMesh};
	static C(Other: UObject | any): GeometryScriptLibrary_MeshDecompositionFunctions;
}

declare class GeometryScriptLibrary_MeshDeformFunctions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GeometryScriptLibrary_MeshDeformFunctions;
	static Find(Outer: UObject, ResourceName: string): GeometryScriptLibrary_MeshDeformFunctions;
	static GetDefaultObject(): GeometryScriptLibrary_MeshDeformFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryScriptLibrary_MeshDeformFunctions;
	static ApplyTwistWarpToMesh(TargetMesh: DynamicMesh,Options: GeometryScriptTwistWarpOptions,TwistOrientation: Transform,TwistAngle: number,TwistExtent: number,Debug: GeometryScriptDebug): DynamicMesh;
	static ApplyPerlinNoiseToMesh(TargetMesh: DynamicMesh,Options: GeometryScriptPerlinNoiseOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static ApplyMathWarpToMesh(TargetMesh: DynamicMesh,WarpOrientation: Transform,WarpType: EGeometryScriptMathWarpType,Options: GeometryScriptMathWarpOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static ApplyIterativeSmoothingToMesh(TargetMesh: DynamicMesh,Options: GeometryScriptIterativeMeshSmoothingOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static ApplyFlareWarpToMesh(TargetMesh: DynamicMesh,Options: GeometryScriptFlareWarpOptions,FlareOrientation: Transform,FlarePercentX: number,FlarePercentY: number,FlareExtent: number,Debug: GeometryScriptDebug): DynamicMesh;
	static ApplyDisplaceFromTextureMap(TargetMesh: DynamicMesh,Texture: Texture2D,Options: GeometryScriptDisplaceFromTextureOptions,UVLayer: number,Debug: GeometryScriptDebug): DynamicMesh;
	static ApplyBendWarpToMesh(TargetMesh: DynamicMesh,Options: GeometryScriptBendWarpOptions,BendOrientation: Transform,BendAngle: number,BendExtent: number,Debug: GeometryScriptDebug): DynamicMesh;
	static C(Other: UObject | any): GeometryScriptLibrary_MeshDeformFunctions;
}

declare class GeometryScriptLibrary_MeshMaterialFunctions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GeometryScriptLibrary_MeshMaterialFunctions;
	static Find(Outer: UObject, ResourceName: string): GeometryScriptLibrary_MeshMaterialFunctions;
	static GetDefaultObject(): GeometryScriptLibrary_MeshMaterialFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryScriptLibrary_MeshMaterialFunctions;
	static SetTriangleMaterialID(TargetMesh: DynamicMesh,TriangleID: number,MaterialID: number,bIsValidTriangle?: boolean,bDeferChangeNotifications?: boolean): {bIsValidTriangle: boolean, $: DynamicMesh};
	static SetPolygroupMaterialID(TargetMesh: DynamicMesh,GroupLayer: GeometryScriptGroupLayer,PolygroupID: number,MaterialID: number,bIsValidPolygroupID?: boolean,bDeferChangeNotifications?: boolean,Debug?: GeometryScriptDebug): {bIsValidPolygroupID: boolean, $: DynamicMesh};
	static SetAllTriangleMaterialIDs(TargetMesh: DynamicMesh,TriangleMaterialIDList?: GeometryScriptIndexList,bDeferChangeNotifications?: boolean,Debug?: GeometryScriptDebug): {TriangleMaterialIDList: GeometryScriptIndexList, $: DynamicMesh};
	static RemapMaterialIDs(TargetMesh: DynamicMesh,FromMaterialID: number,ToMaterialID: number,Debug: GeometryScriptDebug): DynamicMesh;
	static GetTriangleMaterialID(TargetMesh: DynamicMesh,TriangleID: number,bIsValidTriangle?: boolean): {bIsValidTriangle: boolean, $: number};
	static GetMaxMaterialID(TargetMesh: DynamicMesh,bHasMaterialIDs?: boolean): {bHasMaterialIDs: boolean, $: number};
	static GetAllTriangleMaterialIDs(TargetMesh: DynamicMesh,MaterialIDList?: GeometryScriptIndexList,bHasMaterialIDs?: boolean): {MaterialIDList: GeometryScriptIndexList, bHasMaterialIDs: boolean, $: DynamicMesh};
	static EnableMaterialIDs(TargetMesh: DynamicMesh,Debug: GeometryScriptDebug): DynamicMesh;
	static DeleteTrianglesByMaterialID(TargetMesh: DynamicMesh,MaterialID: number,NumDeleted?: number,bDeferChangeNotifications?: boolean,Debug?: GeometryScriptDebug): {NumDeleted: number, $: DynamicMesh};
	static CompactMaterialIDs(TargetMesh: DynamicMesh,SourceMaterialList: MaterialInterface[],CompactedMaterialList?: MaterialInterface[],Debug?: GeometryScriptDebug): {CompactedMaterialList: MaterialInterface[], $: DynamicMesh};
	static ClearMaterialIDs(TargetMesh: DynamicMesh,ClearValue: number,Debug: GeometryScriptDebug): DynamicMesh;
	static C(Other: UObject | any): GeometryScriptLibrary_MeshMaterialFunctions;
}

declare class GeometryScriptLibrary_MeshModelingFunctions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GeometryScriptLibrary_MeshModelingFunctions;
	static Find(Outer: UObject, ResourceName: string): GeometryScriptLibrary_MeshModelingFunctions;
	static GetDefaultObject(): GeometryScriptLibrary_MeshModelingFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryScriptLibrary_MeshModelingFunctions;
	static ApplyMeshShell(TargetMesh: DynamicMesh,Options: GeometryScriptMeshOffsetOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static ApplyMeshPolygroupBevel(TargetMesh: DynamicMesh,Options: GeometryScriptMeshBevelOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static ApplyMeshOffset(TargetMesh: DynamicMesh,Options: GeometryScriptMeshOffsetOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static ApplyMeshExtrude(TargetMesh: DynamicMesh,Options: GeometryScriptMeshExtrudeOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static C(Other: UObject | any): GeometryScriptLibrary_MeshModelingFunctions;
}

declare class GeometryScriptLibrary_MeshNormalsFunctions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GeometryScriptLibrary_MeshNormalsFunctions;
	static Find(Outer: UObject, ResourceName: string): GeometryScriptLibrary_MeshNormalsFunctions;
	static GetDefaultObject(): GeometryScriptLibrary_MeshNormalsFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryScriptLibrary_MeshNormalsFunctions;
	static SetPerVertexNormals(TargetMesh: DynamicMesh,Debug: GeometryScriptDebug): DynamicMesh;
	static SetPerFaceNormals(TargetMesh: DynamicMesh,Debug: GeometryScriptDebug): DynamicMesh;
	static SetMeshTriangleNormals(TargetMesh: DynamicMesh,TriangleID: number,Normals: GeometryScriptTriangle,bIsValidTriangle?: boolean,bDeferChangeNotifications?: boolean): {bIsValidTriangle: boolean, $: DynamicMesh};
	static RecomputeNormals(TargetMesh: DynamicMesh,CalculateOptions: GeometryScriptCalculateNormalsOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static FlipNormals(TargetMesh: DynamicMesh,Debug: GeometryScriptDebug): DynamicMesh;
	static ComputeTangents(TargetMesh: DynamicMesh,Options: GeometryScriptTangentsOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static ComputeSplitNormals(TargetMesh: DynamicMesh,SplitOptions: GeometryScriptSplitNormalsOptions,CalculateOptions: GeometryScriptCalculateNormalsOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static AutoRepairNormals(TargetMesh: DynamicMesh,Debug: GeometryScriptDebug): DynamicMesh;
	static C(Other: UObject | any): GeometryScriptLibrary_MeshNormalsFunctions;
}

declare class GeometryScriptLibrary_MeshPolygroupFunctions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GeometryScriptLibrary_MeshPolygroupFunctions;
	static Find(Outer: UObject, ResourceName: string): GeometryScriptLibrary_MeshPolygroupFunctions;
	static GetDefaultObject(): GeometryScriptLibrary_MeshPolygroupFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryScriptLibrary_MeshPolygroupFunctions;
	static SetNumExtendedPolygroupLayers(TargetMesh: DynamicMesh,NumLayers: number,Debug: GeometryScriptDebug): DynamicMesh;
	static GetTrianglesInPolygroup(TargetMesh: DynamicMesh,GroupLayer: GeometryScriptGroupLayer,PolygroupID: number,TriangleIDsOut?: GeometryScriptIndexList): {TriangleIDsOut: GeometryScriptIndexList, $: DynamicMesh};
	static GetTrianglePolygroupID(TargetMesh: DynamicMesh,GroupLayer: GeometryScriptGroupLayer,TriangleID: number,bIsValidTriangle?: boolean): {bIsValidTriangle: boolean, $: number};
	static GetPolygroupIDsInMesh(TargetMesh: DynamicMesh,GroupLayer: GeometryScriptGroupLayer,PolygroupIDsOut?: GeometryScriptIndexList): {PolygroupIDsOut: GeometryScriptIndexList, $: DynamicMesh};
	static GetAllTrianglePolygroupIDs(TargetMesh: DynamicMesh,GroupLayer: GeometryScriptGroupLayer,PolygroupIDsOut?: GeometryScriptIndexList): {PolygroupIDsOut: GeometryScriptIndexList, $: DynamicMesh};
	static EnablePolygroups(TargetMesh: DynamicMesh,Debug: GeometryScriptDebug): DynamicMesh;
	static DeleteTrianglesInPolygroup(TargetMesh: DynamicMesh,GroupLayer: GeometryScriptGroupLayer,PolygroupID: number,NumDeleted?: number,bDeferChangeNotifications?: boolean,Debug?: GeometryScriptDebug): {NumDeleted: number, $: DynamicMesh};
	static CopyPolygroupsLayer(TargetMesh: DynamicMesh,FromGroupLayer: GeometryScriptGroupLayer,ToGroupLayer: GeometryScriptGroupLayer,Debug: GeometryScriptDebug): DynamicMesh;
	static ConvertUVIslandsToPolygroups(TargetMesh: DynamicMesh,GroupLayer: GeometryScriptGroupLayer,UVLayer: number,Debug: GeometryScriptDebug): DynamicMesh;
	static ConvertComponentsToPolygroups(TargetMesh: DynamicMesh,GroupLayer: GeometryScriptGroupLayer,Debug: GeometryScriptDebug): DynamicMesh;
	static ComputePolygroupsFromAngleThreshold(TargetMesh: DynamicMesh,GroupLayer: GeometryScriptGroupLayer,CreaseAngle: number,MinGroupSize: number,Debug: GeometryScriptDebug): DynamicMesh;
	static ClearPolygroups(TargetMesh: DynamicMesh,GroupLayer: GeometryScriptGroupLayer,ClearValue: number,Debug: GeometryScriptDebug): DynamicMesh;
	static C(Other: UObject | any): GeometryScriptLibrary_MeshPolygroupFunctions;
}

declare class GeometryScriptLibrary_MeshPrimitiveFunctions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GeometryScriptLibrary_MeshPrimitiveFunctions;
	static Find(Outer: UObject, ResourceName: string): GeometryScriptLibrary_MeshPrimitiveFunctions;
	static GetDefaultObject(): GeometryScriptLibrary_MeshPrimitiveFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryScriptLibrary_MeshPrimitiveFunctions;
	static AppendTriangulatedPolygon(TargetMesh: DynamicMesh,PrimitiveOptions: GeometryScriptPrimitiveOptions,Transform: Transform,PolygonVertices: Vector2D[],bAllowSelfIntersections: boolean,Debug: GeometryScriptDebug): DynamicMesh;
	static AppendTorus(TargetMesh: DynamicMesh,PrimitiveOptions: GeometryScriptPrimitiveOptions,Transform: Transform,RevolveOptions: GeometryScriptRevolveOptions,MajorRadius: number,MinorRadius: number,MajorSteps: number,MinorSteps: number,Origin: EGeometryScriptPrimitiveOriginMode,Debug: GeometryScriptDebug): DynamicMesh;
	static AppendSpiralRevolvePolygon(TargetMesh: DynamicMesh,PrimitiveOptions: GeometryScriptPrimitiveOptions,Transform: Transform,PolygonVertices: Vector2D[],RevolveOptions: GeometryScriptRevolveOptions,Radius: number,Steps: number,RisePerRevolution: number,Debug: GeometryScriptDebug): DynamicMesh;
	static AppendSphereLatLong(TargetMesh: DynamicMesh,PrimitiveOptions: GeometryScriptPrimitiveOptions,Transform: Transform,Radius: number,StepsPhi: number,StepsTheta: number,Origin: EGeometryScriptPrimitiveOriginMode,Debug: GeometryScriptDebug): DynamicMesh;
	static AppendSphereBox(TargetMesh: DynamicMesh,PrimitiveOptions: GeometryScriptPrimitiveOptions,Transform: Transform,Radius: number,StepsX: number,StepsY: number,StepsZ: number,Origin: EGeometryScriptPrimitiveOriginMode,Debug: GeometryScriptDebug): DynamicMesh;
	static AppendSimpleSweptPolygon(TargetMesh: DynamicMesh,PrimitiveOptions: GeometryScriptPrimitiveOptions,Transform: Transform,PolygonVertices: Vector2D[],SweepPath: Vector[],bLoop: boolean,bCapped: boolean,StartScale: number,EndScale: number,Debug: GeometryScriptDebug): DynamicMesh;
	static AppendSimpleExtrudePolygon(TargetMesh: DynamicMesh,PrimitiveOptions: GeometryScriptPrimitiveOptions,Transform: Transform,PolygonVertices: Vector2D[],Height: number,HeightSteps: number,bCapped: boolean,Origin: EGeometryScriptPrimitiveOriginMode,Debug: GeometryScriptDebug): DynamicMesh;
	static AppendRoundRectangleXY(TargetMesh: DynamicMesh,PrimitiveOptions: GeometryScriptPrimitiveOptions,Transform: Transform,DimensionX: number,DimensionY: number,CornerRadius: number,StepsWidth: number,StepsHeight: number,StepsRound: number,Debug: GeometryScriptDebug): DynamicMesh;
	static AppendRoundRectangle_Compatibility_5_0(TargetMesh: DynamicMesh,PrimitiveOptions: GeometryScriptPrimitiveOptions,Transform: Transform,DimensionX: number,DimensionY: number,CornerRadius: number,StepsWidth: number,StepsHeight: number,StepsRound: number,Debug: GeometryScriptDebug): DynamicMesh;
	static AppendRevolvePolygon(TargetMesh: DynamicMesh,PrimitiveOptions: GeometryScriptPrimitiveOptions,Transform: Transform,PolygonVertices: Vector2D[],RevolveOptions: GeometryScriptRevolveOptions,Radius: number,Steps: number,Debug: GeometryScriptDebug): DynamicMesh;
	static AppendRevolvePath(TargetMesh: DynamicMesh,PrimitiveOptions: GeometryScriptPrimitiveOptions,Transform: Transform,PathVertices: Vector2D[],RevolveOptions: GeometryScriptRevolveOptions,Steps: number,bCapped: boolean,Debug: GeometryScriptDebug): DynamicMesh;
	static AppendRectangleXY(TargetMesh: DynamicMesh,PrimitiveOptions: GeometryScriptPrimitiveOptions,Transform: Transform,DimensionX: number,DimensionY: number,StepsWidth: number,StepsHeight: number,Debug: GeometryScriptDebug): DynamicMesh;
	static AppendRectangle_Compatibility_5_0(TargetMesh: DynamicMesh,PrimitiveOptions: GeometryScriptPrimitiveOptions,Transform: Transform,DimensionX: number,DimensionY: number,StepsWidth: number,StepsHeight: number,Debug: GeometryScriptDebug): DynamicMesh;
	static AppendLinearStairs(TargetMesh: DynamicMesh,PrimitiveOptions: GeometryScriptPrimitiveOptions,Transform: Transform,StepWidth: number,StepHeight: number,StepDepth: number,NumSteps: number,bFloating: boolean,Debug: GeometryScriptDebug): DynamicMesh;
	static AppendDisc(TargetMesh: DynamicMesh,PrimitiveOptions: GeometryScriptPrimitiveOptions,Transform: Transform,Radius: number,AngleSteps: number,SpokeSteps: number,StartAngle: number,EndAngle: number,HoleRadius: number,Debug: GeometryScriptDebug): DynamicMesh;
	static AppendCylinder(TargetMesh: DynamicMesh,PrimitiveOptions: GeometryScriptPrimitiveOptions,Transform: Transform,Radius: number,Height: number,RadialSteps: number,HeightSteps: number,bCapped: boolean,Origin: EGeometryScriptPrimitiveOriginMode,Debug: GeometryScriptDebug): DynamicMesh;
	static AppendCurvedStairs(TargetMesh: DynamicMesh,PrimitiveOptions: GeometryScriptPrimitiveOptions,Transform: Transform,StepWidth: number,StepHeight: number,InnerRadius: number,CurveAngle: number,NumSteps: number,bFloating: boolean,Debug: GeometryScriptDebug): DynamicMesh;
	static AppendCone(TargetMesh: DynamicMesh,PrimitiveOptions: GeometryScriptPrimitiveOptions,Transform: Transform,BaseRadius: number,TopRadius: number,Height: number,RadialSteps: number,HeightSteps: number,bCapped: boolean,Origin: EGeometryScriptPrimitiveOriginMode,Debug: GeometryScriptDebug): DynamicMesh;
	static AppendCapsule(TargetMesh: DynamicMesh,PrimitiveOptions: GeometryScriptPrimitiveOptions,Transform: Transform,Radius: number,LineLength: number,HemisphereSteps: number,CircleSteps: number,Origin: EGeometryScriptPrimitiveOriginMode,Debug: GeometryScriptDebug): DynamicMesh;
	static AppendBox(TargetMesh: DynamicMesh,PrimitiveOptions: GeometryScriptPrimitiveOptions,Transform: Transform,DimensionX: number,DimensionY: number,DimensionZ: number,StepsX: number,StepsY: number,StepsZ: number,Origin: EGeometryScriptPrimitiveOriginMode,Debug: GeometryScriptDebug): DynamicMesh;
	static C(Other: UObject | any): GeometryScriptLibrary_MeshPrimitiveFunctions;
}

declare class GeometryScriptLibrary_MeshQueryFunctions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GeometryScriptLibrary_MeshQueryFunctions;
	static Find(Outer: UObject, ResourceName: string): GeometryScriptLibrary_MeshQueryFunctions;
	static GetDefaultObject(): GeometryScriptLibrary_MeshQueryFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryScriptLibrary_MeshQueryFunctions;
	static IsValidVertexID(TargetMesh: DynamicMesh,VertexID: number): boolean;
	static IsValidTriangleID(TargetMesh: DynamicMesh,TriangleID: number): boolean;
	static GetVertexPosition(TargetMesh: DynamicMesh,VertexID: number,bIsValidVertex?: boolean): {bIsValidVertex: boolean, $: Vector};
	static GetVertexCount(TargetMesh: DynamicMesh): number;
	static GetUVSetBoundingBox(TargetMesh: DynamicMesh,UvSetIndex: number,bIsValidUVSet?: boolean,bUVSetIsEmpty?: boolean): {bIsValidUVSet: boolean, bUVSetIsEmpty: boolean, $: Box2D};
	static GetTriangleUVs(TargetMesh: DynamicMesh,UvSetIndex: number,TriangleID: number,UV1?: Vector2D,UV2?: Vector2D,UV3?: Vector2D,bHaveValidUVs?: boolean): {UV1: Vector2D, UV2: Vector2D, UV3: Vector2D, bHaveValidUVs: boolean};
	static GetTrianglePositions(TargetMesh: DynamicMesh,TriangleID: number,bIsValidTriangle?: boolean,Vertex1?: Vector,Vertex2?: Vector,Vertex3?: Vector): {bIsValidTriangle: boolean, Vertex1: Vector, Vertex2: Vector, Vertex3: Vector};
	static GetTriangleIndices(TargetMesh: DynamicMesh,TriangleID: number,bIsValidTriangle?: boolean): {bIsValidTriangle: boolean, $: IntVector};
	static GetTriangleFaceNormal(TargetMesh: DynamicMesh,TriangleID: number,bIsValidTriangle?: boolean): {bIsValidTriangle: boolean, $: Vector};
	static GetNumVertexIDs(TargetMesh: DynamicMesh): number;
	static GetNumUVSets(TargetMesh: DynamicMesh): number;
	static GetNumTriangleIDs(TargetMesh: DynamicMesh): number;
	static GetNumOpenBorderLoops(TargetMesh: DynamicMesh,bAmbiguousTopologyFound?: boolean): {bAmbiguousTopologyFound: boolean, $: number};
	static GetNumOpenBorderEdges(TargetMesh: DynamicMesh): number;
	static GetNumExtendedPolygroupLayers(TargetMesh: DynamicMesh): number;
	static GetNumConnectedComponents(TargetMesh: DynamicMesh): number;
	static GetMeshVolumeArea(TargetMesh: DynamicMesh,SurfaceArea?: number,Volume?: number): {SurfaceArea: number, Volume: number};
	static GetMeshHasAttributeSet(TargetMesh: DynamicMesh): boolean;
	static GetMeshBoundingBox(TargetMesh: DynamicMesh): Box;
	static GetIsDenseMesh(TargetMesh: DynamicMesh): boolean;
	static GetIsClosedMesh(TargetMesh: DynamicMesh): boolean;
	static GetHasVertexIDGaps(TargetMesh: DynamicMesh): boolean;
	static GetHasTriangleIDGaps(TargetMesh: DynamicMesh): boolean;
	static GetHasPolygroups(TargetMesh: DynamicMesh): boolean;
	static GetHasMaterialIDs(TargetMesh: DynamicMesh): boolean;
	static GetAllVertexPositions(TargetMesh: DynamicMesh,PositionList?: GeometryScriptVectorList,bSkipGaps?: boolean,bHasVertexIDGaps?: boolean): {PositionList: GeometryScriptVectorList, bHasVertexIDGaps: boolean, $: DynamicMesh};
	static GetAllVertexIDs(TargetMesh: DynamicMesh,VertexIDList?: GeometryScriptIndexList,bHasVertexIDGaps?: boolean): {VertexIDList: GeometryScriptIndexList, bHasVertexIDGaps: boolean, $: DynamicMesh};
	static GetAllTriangleIndices(TargetMesh: DynamicMesh,TriangleList?: GeometryScriptTriangleList,bSkipGaps?: boolean,bHasTriangleIDGaps?: boolean): {TriangleList: GeometryScriptTriangleList, bHasTriangleIDGaps: boolean, $: DynamicMesh};
	static GetAllTriangleIDs(TargetMesh: DynamicMesh,TriangleIDList?: GeometryScriptIndexList,bHasTriangleIDGaps?: boolean): {TriangleIDList: GeometryScriptIndexList, bHasTriangleIDGaps: boolean, $: DynamicMesh};
	static C(Other: UObject | any): GeometryScriptLibrary_MeshQueryFunctions;
}

declare class GeometryScriptLibrary_MeshRepairFunctions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GeometryScriptLibrary_MeshRepairFunctions;
	static Find(Outer: UObject, ResourceName: string): GeometryScriptLibrary_MeshRepairFunctions;
	static GetDefaultObject(): GeometryScriptLibrary_MeshRepairFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryScriptLibrary_MeshRepairFunctions;
	static WeldMeshEdges(TargetMesh: DynamicMesh,WeldOptions: GeometryScriptWeldEdgesOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static RemoveSmallComponents(TargetMesh: DynamicMesh,Options: GeometryScriptRemoveSmallComponentOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static RemoveHiddenTriangles(TargetMesh: DynamicMesh,Options: GeometryScriptRemoveHiddenTrianglesOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static FillAllMeshHoles(TargetMesh: DynamicMesh,FillOptions: GeometryScriptFillHolesOptions,NumFilledHoles?: number,NumFailedHoleFills?: number,Debug?: GeometryScriptDebug): {NumFilledHoles: number, NumFailedHoleFills: number, $: DynamicMesh};
	static CompactMesh(TargetMesh: DynamicMesh,Debug: GeometryScriptDebug): DynamicMesh;
	static C(Other: UObject | any): GeometryScriptLibrary_MeshRepairFunctions;
}

declare class GeometryScriptLibrary_MeshSimplifyFunctions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GeometryScriptLibrary_MeshSimplifyFunctions;
	static Find(Outer: UObject, ResourceName: string): GeometryScriptLibrary_MeshSimplifyFunctions;
	static GetDefaultObject(): GeometryScriptLibrary_MeshSimplifyFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryScriptLibrary_MeshSimplifyFunctions;
	static ApplySimplifyToVertexCount(TargetMesh: DynamicMesh,vertexcount: number,Options: GeometryScriptSimplifyMeshOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static ApplySimplifyToTriangleCount(TargetMesh: DynamicMesh,TriangleCount: number,Options: GeometryScriptSimplifyMeshOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static ApplySimplifyToTolerance(TargetMesh: DynamicMesh,Tolerance: number,Options: GeometryScriptSimplifyMeshOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static ApplySimplifyToPolygroupTopology(TargetMesh: DynamicMesh,Options: GeometryScriptPolygroupSimplifyOptions,GroupLayer: GeometryScriptGroupLayer,Debug: GeometryScriptDebug): DynamicMesh;
	static ApplySimplifyToPlanar(TargetMesh: DynamicMesh,Options: GeometryScriptPlanarSimplifyOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static C(Other: UObject | any): GeometryScriptLibrary_MeshSimplifyFunctions;
}

declare class GeometryScriptLibrary_MeshSpatial extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GeometryScriptLibrary_MeshSpatial;
	static Find(Outer: UObject, ResourceName: string): GeometryScriptLibrary_MeshSpatial;
	static GetDefaultObject(): GeometryScriptLibrary_MeshSpatial;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryScriptLibrary_MeshSpatial;
	static ResetBVH(ResetBVH?: GeometryScriptDynamicMeshBVH): {ResetBVH: GeometryScriptDynamicMeshBVH};
	static RebuildBVHForMesh(TargetMesh: DynamicMesh,UpdateBVH?: GeometryScriptDynamicMeshBVH,bOnlyIfInvalid?: boolean,Debug?: GeometryScriptDebug): {UpdateBVH: GeometryScriptDynamicMeshBVH, $: DynamicMesh};
	static IsPointInsideMesh(TargetMesh: DynamicMesh,QueryBVH: GeometryScriptDynamicMeshBVH,QueryPoint: Vector,Options: GeometryScriptSpatialQueryOptions,bIsInside?: boolean,Outcome?: EGeometryScriptContainmentOutcomePins,Debug?: GeometryScriptDebug): {bIsInside: boolean, Outcome: EGeometryScriptContainmentOutcomePins, $: DynamicMesh};
	static IsBVHValidForMesh(TargetMesh: DynamicMesh,TestBVH: GeometryScriptDynamicMeshBVH,bIsValid?: boolean,Debug?: GeometryScriptDebug): {bIsValid: boolean, $: DynamicMesh};
	static FindNearestRayIntersectionWithMesh(TargetMesh: DynamicMesh,QueryBVH: GeometryScriptDynamicMeshBVH,RayOrigin: Vector,RayDirection: Vector,Options: GeometryScriptSpatialQueryOptions,HitResult?: GeometryScriptRayHitResult,Outcome?: EGeometryScriptSearchOutcomePins,Debug?: GeometryScriptDebug): {HitResult: GeometryScriptRayHitResult, Outcome: EGeometryScriptSearchOutcomePins, $: DynamicMesh};
	static FindNearestPointOnMesh(TargetMesh: DynamicMesh,QueryBVH: GeometryScriptDynamicMeshBVH,QueryPoint: Vector,Options: GeometryScriptSpatialQueryOptions,NearestResult?: GeometryScriptTrianglePoint,Outcome?: EGeometryScriptSearchOutcomePins,Debug?: GeometryScriptDebug): {NearestResult: GeometryScriptTrianglePoint, Outcome: EGeometryScriptSearchOutcomePins, $: DynamicMesh};
	static BuildBVHForMesh(TargetMesh: DynamicMesh,OutputBVH?: GeometryScriptDynamicMeshBVH,Debug?: GeometryScriptDebug): {OutputBVH: GeometryScriptDynamicMeshBVH, $: DynamicMesh};
	static C(Other: UObject | any): GeometryScriptLibrary_MeshSpatial;
}

declare class GeometryScriptLibrary_MeshSubdivideFunctions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GeometryScriptLibrary_MeshSubdivideFunctions;
	static Find(Outer: UObject, ResourceName: string): GeometryScriptLibrary_MeshSubdivideFunctions;
	static GetDefaultObject(): GeometryScriptLibrary_MeshSubdivideFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryScriptLibrary_MeshSubdivideFunctions;
	static ApplyUniformTessellation(TargetMesh: DynamicMesh,TessellationLevel: number,Debug: GeometryScriptDebug): DynamicMesh;
	static ApplyRecursivePNTessellation(TargetMesh: DynamicMesh,Options: GeometryScriptPNTessellateOptions,NumIterations: number,Debug: GeometryScriptDebug): DynamicMesh;
	static ApplyPNTessellation(TargetMesh: DynamicMesh,Options: GeometryScriptPNTessellateOptions,TessellationLevel: number,Debug: GeometryScriptDebug): DynamicMesh;
	static C(Other: UObject | any): GeometryScriptLibrary_MeshSubdivideFunctions;
}

declare class GeometryScriptLibrary_MeshTransformFunctions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GeometryScriptLibrary_MeshTransformFunctions;
	static Find(Outer: UObject, ResourceName: string): GeometryScriptLibrary_MeshTransformFunctions;
	static GetDefaultObject(): GeometryScriptLibrary_MeshTransformFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryScriptLibrary_MeshTransformFunctions;
	static TranslateMesh(TargetMesh: DynamicMesh,Translation: Vector,Debug: GeometryScriptDebug): DynamicMesh;
	static TransformMesh(TargetMesh: DynamicMesh,Transform: Transform,Debug: GeometryScriptDebug): DynamicMesh;
	static ScaleMesh(TargetMesh: DynamicMesh,Scale: Vector,Debug: GeometryScriptDebug): DynamicMesh;
	static C(Other: UObject | any): GeometryScriptLibrary_MeshTransformFunctions;
}

declare class GeometryScriptLibrary_MeshUVFunctions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GeometryScriptLibrary_MeshUVFunctions;
	static Find(Outer: UObject, ResourceName: string): GeometryScriptLibrary_MeshUVFunctions;
	static GetDefaultObject(): GeometryScriptLibrary_MeshUVFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryScriptLibrary_MeshUVFunctions;
	static TranslateMeshUVs(TargetMesh: DynamicMesh,UvSetIndex: number,Translation: Vector2D,Debug: GeometryScriptDebug): DynamicMesh;
	static SetNumUVSets(TargetMesh: DynamicMesh,NumUVSets: number,Debug: GeometryScriptDebug): DynamicMesh;
	static SetMeshUVsFromPlanarProjection(TargetMesh: DynamicMesh,UvSetIndex: number,PlaneTransform: Transform,Debug: GeometryScriptDebug): DynamicMesh;
	static SetMeshUVsFromCylinderProjection(TargetMesh: DynamicMesh,UvSetIndex: number,CylinderTransform: Transform,SplitAngle: number,Debug: GeometryScriptDebug): DynamicMesh;
	static SetMeshUVsFromBoxProjection(TargetMesh: DynamicMesh,UvSetIndex: number,BoxTransform: Transform,MinIslandTriCount: number,Debug: GeometryScriptDebug): DynamicMesh;
	static SetMeshTriangleUVs(TargetMesh: DynamicMesh,UvSetIndex: number,TriangleID: number,UVs: GeometryScriptUVTriangle,bIsValidTriangle?: boolean,bDeferChangeNotifications?: boolean): {bIsValidTriangle: boolean, $: DynamicMesh};
	static ScaleMeshUVs(TargetMesh: DynamicMesh,UvSetIndex: number,Scale: Vector2D,ScaleOrigin: Vector2D,Debug: GeometryScriptDebug): DynamicMesh;
	static RotateMeshUVs(TargetMesh: DynamicMesh,UvSetIndex: number,RotationAngle: number,RotationOrigin: Vector2D,Debug: GeometryScriptDebug): DynamicMesh;
	static RepackMeshUVs(TargetMesh: DynamicMesh,UvSetIndex: number,RepackOptions: GeometryScriptRepackUVsOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static RecomputeMeshUVs(TargetMesh: DynamicMesh,UvSetIndex: number,Options: GeometryScriptRecomputeUVsOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static CopyUVSet(TargetMesh: DynamicMesh,FromUVSet: number,ToUVSet: number,Debug: GeometryScriptDebug): DynamicMesh;
	static AutoGenerateXAtlasMeshUVs(TargetMesh: DynamicMesh,UvSetIndex: number,Options: GeometryScriptXAtlasOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static AutoGeneratePatchBuilderMeshUVs(TargetMesh: DynamicMesh,UvSetIndex: number,Options: GeometryScriptPatchBuilderOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static C(Other: UObject | any): GeometryScriptLibrary_MeshUVFunctions;
}

declare class GeometryScriptLibrary_MeshVertexColorFunctions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GeometryScriptLibrary_MeshVertexColorFunctions;
	static Find(Outer: UObject, ResourceName: string): GeometryScriptLibrary_MeshVertexColorFunctions;
	static GetDefaultObject(): GeometryScriptLibrary_MeshVertexColorFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryScriptLibrary_MeshVertexColorFunctions;
	static SetMeshPerVertexColors(TargetMesh: DynamicMesh,VertexColorList: GeometryScriptColorList,Debug: GeometryScriptDebug): DynamicMesh;
	static SetMeshConstantVertexColor(TargetMesh: DynamicMesh,Color: LinearColor,Flags: GeometryScriptColorFlags,bClearExisting: boolean,Debug: GeometryScriptDebug): DynamicMesh;
	static C(Other: UObject | any): GeometryScriptLibrary_MeshVertexColorFunctions;
}

declare class GeometryScriptLibrary_MeshVoxelFunctions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GeometryScriptLibrary_MeshVoxelFunctions;
	static Find(Outer: UObject, ResourceName: string): GeometryScriptLibrary_MeshVoxelFunctions;
	static GetDefaultObject(): GeometryScriptLibrary_MeshVoxelFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryScriptLibrary_MeshVoxelFunctions;
	static ApplyMeshSolidify(TargetMesh: DynamicMesh,Options: GeometryScriptSolidifyOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static ApplyMeshMorphology(TargetMesh: DynamicMesh,Options: GeometryScriptMorphologyOptions,Debug: GeometryScriptDebug): DynamicMesh;
	static C(Other: UObject | any): GeometryScriptLibrary_MeshVoxelFunctions;
}

declare class GeometryScriptLibrary_SceneUtilityFunctions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GeometryScriptLibrary_SceneUtilityFunctions;
	static Find(Outer: UObject, ResourceName: string): GeometryScriptLibrary_SceneUtilityFunctions;
	static GetDefaultObject(): GeometryScriptLibrary_SceneUtilityFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryScriptLibrary_SceneUtilityFunctions;
	static SetComponentMaterialList(Component: PrimitiveComponent,MaterialList: MaterialInterface[],Debug: GeometryScriptDebug): void;
	static CreateDynamicMeshPool(): DynamicMeshPool;
	static CopyMeshFromComponent(Component: SceneComponent,ToDynamicMesh: DynamicMesh,Options: GeometryScriptCopyMeshFromComponentOptions,bTransformToWorld: boolean,LocalToWorld?: Transform,Outcome?: EGeometryScriptOutcomePins,Debug?: GeometryScriptDebug): {LocalToWorld: Transform, Outcome: EGeometryScriptOutcomePins, $: DynamicMesh};
	static C(Other: UObject | any): GeometryScriptLibrary_SceneUtilityFunctions;
}

declare class OnDynamicMeshModifiedBP__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDynamicMeshModifiedBP__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDynamicMeshModifiedBP__PythonCallable;
	static GetDefaultObject(): OnDynamicMeshModifiedBP__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDynamicMeshModifiedBP__PythonCallable;
	static C(Other: UObject | any): OnDynamicMeshModifiedBP__PythonCallable;
}

declare class GeometryScriptUniqueAssetNameOptions { 
	UniqueIDDigits: number;
	clone() : GeometryScriptUniqueAssetNameOptions;
	static C(Other: UObject | any): GeometryScriptUniqueAssetNameOptions;
}

declare class GeometryScriptLibrary_CreateNewAssetFunctions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GeometryScriptLibrary_CreateNewAssetFunctions;
	static Find(Outer: UObject, ResourceName: string): GeometryScriptLibrary_CreateNewAssetFunctions;
	static GetDefaultObject(): GeometryScriptLibrary_CreateNewAssetFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryScriptLibrary_CreateNewAssetFunctions;
	static CreateUniqueNewAssetPathName(AssetFolderPath: string,BaseAssetName: string,UniqueAssetPathAndName?: string,UniqueAssetName?: string,Options?: GeometryScriptUniqueAssetNameOptions,Outcome?: EGeometryScriptOutcomePins,Debug?: GeometryScriptDebug): {UniqueAssetPathAndName: string, UniqueAssetName: string, Outcome: EGeometryScriptOutcomePins};
	static CreateNewVolumeFromMesh(FromDynamicMesh: DynamicMesh,CreateInWorld?: World,ActorTransform?: Transform,BaseActorName?: string,Options?: GeometryScriptCreateNewVolumeFromMeshOptions,Outcome?: EGeometryScriptOutcomePins,Debug?: GeometryScriptDebug): {CreateInWorld: World, Outcome: EGeometryScriptOutcomePins, $: Volume};
	static CreateNewStaticMeshAssetFromMesh(FromDynamicMesh: DynamicMesh,AssetPathAndName: string,Options: GeometryScriptCreateNewStaticMeshAssetOptions,Outcome?: EGeometryScriptOutcomePins,Debug?: GeometryScriptDebug): {Outcome: EGeometryScriptOutcomePins, $: StaticMesh};
	static C(Other: UObject | any): GeometryScriptLibrary_CreateNewAssetFunctions;
}

declare class EditorGeometryGenerationManager extends UObject { 
	static Load(ResourceName: string): EditorGeometryGenerationManager;
	static Find(Outer: UObject, ResourceName: string): EditorGeometryGenerationManager;
	static GetDefaultObject(): EditorGeometryGenerationManager;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorGeometryGenerationManager;
	static C(Other: UObject | any): EditorGeometryGenerationManager;
}

declare class EditorGeometryGenerationSubsystem extends EditorSubsystem { 
	GenerationManager: EditorGeometryGenerationManager;
	static Load(ResourceName: string): EditorGeometryGenerationSubsystem;
	static Find(Outer: UObject, ResourceName: string): EditorGeometryGenerationSubsystem;
	static GetDefaultObject(): EditorGeometryGenerationSubsystem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorGeometryGenerationSubsystem;
	static C(Other: UObject | any): EditorGeometryGenerationSubsystem;
}

declare class GeneratedDynamicMeshActor extends DynamicMeshActor { 
	bResetOnRebuild: boolean;
	static GetDefaultObject(): GeneratedDynamicMeshActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeneratedDynamicMeshActor;
	OnRebuildGeneratedMesh(TargetMesh: DynamicMesh): void;
	CopyPropertiesToStaticMesh(StaticMeshActor: StaticMeshActor,bCopyComponentMaterials: boolean): void;
	CopyPropertiesFromStaticMesh(StaticMeshActor: StaticMeshActor,bCopyComponentMaterials: boolean): void;
	static C(Other: UObject | any): GeneratedDynamicMeshActor;
}

declare class GeometryScriptLibrary_OpenSubdivFunctions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): GeometryScriptLibrary_OpenSubdivFunctions;
	static Find(Outer: UObject, ResourceName: string): GeometryScriptLibrary_OpenSubdivFunctions;
	static GetDefaultObject(): GeometryScriptLibrary_OpenSubdivFunctions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryScriptLibrary_OpenSubdivFunctions;
	static ApplyTriangleLoopSubD(FromDynamicMesh: DynamicMesh,Subdivisions: number,Debug: GeometryScriptDebug): DynamicMesh;
	static ApplyPolygroupCatmullClarkSubD(FromDynamicMesh: DynamicMesh,Subdivisions: number,GroupLayer: GeometryScriptGroupLayer,Debug: GeometryScriptDebug): DynamicMesh;
	static C(Other: UObject | any): GeometryScriptLibrary_OpenSubdivFunctions;
}

declare class GenerateLODMeshesToolBuilder extends SingleSelectionMeshEditingToolBuilder { 
	static Load(ResourceName: string): GenerateLODMeshesToolBuilder;
	static Find(Outer: UObject, ResourceName: string): GenerateLODMeshesToolBuilder;
	static GetDefaultObject(): GenerateLODMeshesToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GenerateLODMeshesToolBuilder;
	static C(Other: UObject | any): GenerateLODMeshesToolBuilder;
}

declare class LODLevelGenerateSettings { 
	SimplifierType: ESimplifyType;
	TargetMode: ESimplifyTargetType;
	TargetPercentage: number;
	TargetCount: number;
	bReproject: boolean;
	Result: string;
	clone() : LODLevelGenerateSettings;
	static C(Other: UObject | any): LODLevelGenerateSettings;
}

declare class GenerateLODMeshesToolProperties extends MeshConstraintProperties { 
	TargetMode: ESimplifyTargetType;
	SimplifierType: ESimplifyType;
	NameIndexBase: number;
	TargetPercentage: number;
	TargetEdgeLength: number;
	TargetCount: number;
	bDiscardAttributes: boolean;
	bShowWireframe: boolean;
	bShowGroupColors: boolean;
	bReproject: boolean;
	LODLevels: LODLevelGenerateSettings[];
	static Load(ResourceName: string): GenerateLODMeshesToolProperties;
	static Find(Outer: UObject, ResourceName: string): GenerateLODMeshesToolProperties;
	static GetDefaultObject(): GenerateLODMeshesToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GenerateLODMeshesToolProperties;
	static C(Other: UObject | any): GenerateLODMeshesToolProperties;
}

declare class GenerateLODMeshesTool extends SingleSelectionMeshEditingTool { 
	SimplifyProperties: GenerateLODMeshesToolProperties;
	Previews: MeshOpPreviewWithBackgroundCompute[];
	static Load(ResourceName: string): GenerateLODMeshesTool;
	static Find(Outer: UObject, ResourceName: string): GenerateLODMeshesTool;
	static GetDefaultObject(): GenerateLODMeshesTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GenerateLODMeshesTool;
	static C(Other: UObject | any): GenerateLODMeshesTool;
}

declare class GroomCardsEditorToolBuilder extends MeshSurfacePointMeshEditingToolBuilder { 
	static Load(ResourceName: string): GroomCardsEditorToolBuilder;
	static Find(Outer: UObject, ResourceName: string): GroomCardsEditorToolBuilder;
	static GetDefaultObject(): GroomCardsEditorToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GroomCardsEditorToolBuilder;
	static C(Other: UObject | any): GroomCardsEditorToolBuilder;
}

declare class EditGroomCardsToolActionPropertySet extends InteractiveToolPropertySet { 
	static Load(ResourceName: string): EditGroomCardsToolActionPropertySet;
	static Find(Outer: UObject, ResourceName: string): EditGroomCardsToolActionPropertySet;
	static GetDefaultObject(): EditGroomCardsToolActionPropertySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditGroomCardsToolActionPropertySet;
	static C(Other: UObject | any): EditGroomCardsToolActionPropertySet;
}

declare class SelectGroomCardsToolActions extends EditGroomCardsToolActionPropertySet { 
	static Load(ResourceName: string): SelectGroomCardsToolActions;
	static Find(Outer: UObject, ResourceName: string): SelectGroomCardsToolActions;
	static GetDefaultObject(): SelectGroomCardsToolActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SelectGroomCardsToolActions;
	ToStart(): void;
	ToEnd(): void;
	Fill(): void;
	Clear(): void;
	AddPrevious(): void;
	AddNext(): void;
	static C(Other: UObject | any): SelectGroomCardsToolActions;
}

declare class EditGroomCardsToolActions extends EditGroomCardsToolActionPropertySet { 
	static Load(ResourceName: string): EditGroomCardsToolActions;
	static Find(Outer: UObject, ResourceName: string): EditGroomCardsToolActions;
	static GetDefaultObject(): EditGroomCardsToolActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditGroomCardsToolActions;
	Delete(): void;
	static C(Other: UObject | any): EditGroomCardsToolActions;
}

declare class GroomCardsInfoToolProperties extends InteractiveToolPropertySet { 
	NumCards: number;
	NumVertices: number;
	NumTriangles: number;
	static Load(ResourceName: string): GroomCardsInfoToolProperties;
	static Find(Outer: UObject, ResourceName: string): GroomCardsInfoToolProperties;
	static GetDefaultObject(): GroomCardsInfoToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GroomCardsInfoToolProperties;
	static C(Other: UObject | any): GroomCardsInfoToolProperties;
}

declare class GroomCardsEditorTool extends MeshSurfacePointTool { 
	SelectActions: SelectGroomCardsToolActions;
	EditActions: EditGroomCardsToolActions;
	InfoProperties: GroomCardsInfoToolProperties;
	PreviewMesh: PreviewMesh;
	TargetGroom: any;
	PreviewGeom: PreviewGeometry;
	MeshMaterial: MaterialInterface;
	UVMaterial: MaterialInterface;
	CardMeshSelectionMechanic: PolygonSelectionMechanic;
	ControlPointsMechanic: SpaceCurveDeformationMechanic;
	static Load(ResourceName: string): GroomCardsEditorTool;
	static Find(Outer: UObject, ResourceName: string): GroomCardsEditorTool;
	static GetDefaultObject(): GroomCardsEditorTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GroomCardsEditorTool;
	static C(Other: UObject | any): GroomCardsEditorTool;
}

declare class GroomToMeshToolBuilder extends InteractiveToolBuilder { 
	static Load(ResourceName: string): GroomToMeshToolBuilder;
	static Find(Outer: UObject, ResourceName: string): GroomToMeshToolBuilder;
	static GetDefaultObject(): GroomToMeshToolBuilder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GroomToMeshToolBuilder;
	static C(Other: UObject | any): GroomToMeshToolBuilder;
}

declare type EGroomToMeshUVMode = 'PlanarSplitting' | 'MinimalConformal' | 'PlanarSplitConformal' | 'EGroomToMeshUVMode_MAX';
declare var EGroomToMeshUVMode : { PlanarSplitting:'PlanarSplitting',MinimalConformal:'MinimalConformal',PlanarSplitConformal:'PlanarSplitConformal',EGroomToMeshUVMode_MAX:'EGroomToMeshUVMode_MAX', };
declare class GroomToMeshToolProperties extends InteractiveToolPropertySet { 
	VoxelCount: number;
	BlendPower: number;
	RadiusScale: number;
	bApplyMorphology: boolean;
	ClosingDist: number;
	OpeningDist: number;
	bClipToHead: boolean;
	ClipMeshActor: any;
	bSmooth: boolean;
	Smoothness: number;
	VolumeCorrection: number;
	bSimplify: boolean;
	vertexcount: number;
	UVMode: EGroomToMeshUVMode;
	bShowSideBySide: boolean;
	bShowGuides: boolean;
	bShowUVs: boolean;
	static Load(ResourceName: string): GroomToMeshToolProperties;
	static Find(Outer: UObject, ResourceName: string): GroomToMeshToolProperties;
	static GetDefaultObject(): GroomToMeshToolProperties;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GroomToMeshToolProperties;
	static C(Other: UObject | any): GroomToMeshToolProperties;
}

declare class GroomToMeshTool extends InteractiveTool { 
	Settings: GroomToMeshToolProperties;
	PreviewMesh: PreviewMesh;
	TargetGroom: any;
	PreviewGeom: PreviewGeometry;
	MeshMaterial: MaterialInterface;
	UVMaterial: MaterialInterface;
	static Load(ResourceName: string): GroomToMeshTool;
	static Find(Outer: UObject, ResourceName: string): GroomToMeshTool;
	static GetDefaultObject(): GroomToMeshTool;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GroomToMeshTool;
	static C(Other: UObject | any): GroomToMeshTool;
}

declare class LandmassActor extends Actor { 
	EditorTickIsEnabled: boolean;
	static GetDefaultObject(): LandmassActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LandmassActor;
	SetEditorTickEnabled(bEnabled: boolean): void;
	CustomTick(DeltaSeconds: number): void;
	ActorSelectionChanged(bSelected: boolean): void;
	static C(Other: UObject | any): LandmassActor;
}

declare class LandmassBlueprintFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): LandmassBlueprintFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): LandmassBlueprintFunctionLibrary;
	static GetDefaultObject(): LandmassBlueprintFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LandmassBlueprintFunctionLibrary;
	static GetCursorWorldRay(CameraLocation?: Vector,RayOrigin?: Vector,RayDirection?: Vector): {CameraLocation: Vector, RayOrigin: Vector, RayDirection: Vector, $: boolean};
	static C(Other: UObject | any): LandmassBlueprintFunctionLibrary;
}

declare type EText3DBevelType = 'Linear' | 'HalfCircle' | 'Convex' | 'Concave' | 'OneStep' | 'TwoSteps' | 'Engraved' | 'EText3DBevelType_MAX';
declare var EText3DBevelType : { Linear:'Linear',HalfCircle:'HalfCircle',Convex:'Convex',Concave:'Concave',OneStep:'OneStep',TwoSteps:'TwoSteps',Engraved:'Engraved',EText3DBevelType_MAX:'EText3DBevelType_MAX', };
declare type EText3DHorizontalTextAlignment = 'Left' | 'Center' | 'Right' | 'EText3DHorizontalTextAlignment_MAX';
declare var EText3DHorizontalTextAlignment : { Left:'Left',Center:'Center',Right:'Right',EText3DHorizontalTextAlignment_MAX:'EText3DHorizontalTextAlignment_MAX', };
declare type EText3DVerticalTextAlignment = 'FirstLine' | 'Top' | 'Center' | 'Bottom' | 'EText3DVerticalTextAlignment_MAX';
declare var EText3DVerticalTextAlignment : { FirstLine:'FirstLine',Top:'Top',Center:'Center',Bottom:'Bottom',EText3DVerticalTextAlignment_MAX:'EText3DVerticalTextAlignment_MAX', };
declare class Text3DComponent extends SceneComponent { 
	text: string;
	Extrude: number;
	Bevel: number;
	BevelType: EText3DBevelType;
	BevelSegments: number;
	bOutline: boolean;
	OutlineExpand: number;
	FrontMaterial: MaterialInterface;
	BevelMaterial: MaterialInterface;
	ExtrudeMaterial: MaterialInterface;
	BackMaterial: MaterialInterface;
	Font: Font;
	HorizontalAlignment: EText3DHorizontalTextAlignment;
	VerticalAlignment: EText3DVerticalTextAlignment;
	Kerning: number;
	LineSpacing: number;
	WordSpacing: number;
	bHasMaxWidth: boolean;
	MaxWidth: number;
	bHasMaxHeight: boolean;
	MaxHeight: number;
	bScaleProportionally: boolean;
	bCastShadow: boolean;
	TextRoot: SceneComponent;
	TextGeneratedDelegate: UnrealEngineMulticastDelegate<() => void>;
	CharacterKernings: SceneComponent[];
	CharacterMeshes: StaticMeshComponent[];
	static Load(ResourceName: string): Text3DComponent;
	static Find(Outer: UObject, ResourceName: string): Text3DComponent;
	static GetDefaultObject(): Text3DComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Text3DComponent;
	SetWordSpacing(Value: number): void;
	SetVerticalAlignment(Value: EText3DVerticalTextAlignment): void;
	SetText(Value: string): void;
	SetScaleProportionally(Value: boolean): void;
	SetOutlineExpand(Value: number): void;
	SetOutline(bValue: boolean): void;
	SetMaxWidth(Value: number): void;
	SetMaxHeight(Value: number): void;
	SetLineSpacing(Value: number): void;
	SetKerning(Value: number): void;
	SetHorizontalAlignment(Value: EText3DHorizontalTextAlignment): void;
	SetHasMaxWidth(Value: boolean): void;
	SetHasMaxHeight(Value: boolean): void;
	SetFrontMaterial(Value: MaterialInterface): void;
	SetFreeze(bFreeze: boolean): void;
	SetFont(InFont: Font): void;
	SetExtrudeMaterial(Value: MaterialInterface): void;
	SetExtrude(Value: number): void;
	SetCastShadow(NewCastShadow: boolean): void;
	SetBevelType(Value: EText3DBevelType): void;
	SetBevelSegments(Value: number): void;
	SetBevelMaterial(Value: MaterialInterface): void;
	SetBevel(Value: number): void;
	SetBackMaterial(Value: MaterialInterface): void;
	GetGlyphMeshComponents(): StaticMeshComponent[];
	GetGlyphMeshComponent(index: number): StaticMeshComponent;
	GetGlyphKerningComponents(): SceneComponent[];
	GetGlyphKerningComponent(index: number): SceneComponent;
	GetGlyphCount(): number;
	GetBounds(Origin?: Vector,BoxExtent?: Vector): {Origin: Vector, BoxExtent: Vector};
	static C(Other: UObject | any): Text3DComponent;
}

declare class Text3DActor extends Actor { 
	Text3DComponent: Text3DComponent;
	static GetDefaultObject(): Text3DActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Text3DActor;
	static C(Other: UObject | any): Text3DActor;
}

declare type EText3DCharacterEffectOrder = 'Normal' | 'FromCenter' | 'ToCenter' | 'Opposite' | 'EText3DCharacterEffectOrder_MAX';
declare var EText3DCharacterEffectOrder : { Normal:'Normal',FromCenter:'FromCenter',ToCenter:'ToCenter',Opposite:'Opposite',EText3DCharacterEffectOrder_MAX:'EText3DCharacterEffectOrder_MAX', };
declare class Text3DCharacterTransform extends SceneComponent { 
	bLocationEnabled: boolean;
	LocationProgress: number;
	LocationOrder: EText3DCharacterEffectOrder;
	LocationRange: number;
	LocationDistance: Vector;
	bScaleEnabled: boolean;
	ScaleProgress: number;
	ScaleOrder: EText3DCharacterEffectOrder;
	ScaleRange: number;
	ScaleBegin: Vector;
	ScaleEnd: Vector;
	bRotateEnabled: boolean;
	RotateProgress: number;
	RotateOrder: EText3DCharacterEffectOrder;
	RotateRange: number;
	RotateBegin: Rotator;
	RotateEnd: Rotator;
	static Load(ResourceName: string): Text3DCharacterTransform;
	static Find(Outer: UObject, ResourceName: string): Text3DCharacterTransform;
	static GetDefaultObject(): Text3DCharacterTransform;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Text3DCharacterTransform;
	SetScaleRange(Range: number): void;
	SetScaleProgress(Progress: number): void;
	SetScaleOrder(Order: EText3DCharacterEffectOrder): void;
	SetScaleEnd(Value: Vector): void;
	SetScaleEnabled(bEnabled: boolean): void;
	SetScaleBegin(Value: Vector): void;
	SetRotateRange(Range: number): void;
	SetRotateProgress(Progress: number): void;
	SetRotateOrder(Order: EText3DCharacterEffectOrder): void;
	SetRotateEnd(Value: Rotator): void;
	SetRotateEnabled(bEnabled: boolean): void;
	SetRotateBegin(Value: Rotator): void;
	SetLocationRange(Range: number): void;
	SetLocationProgress(Progress: number): void;
	SetLocationOrder(Order: EText3DCharacterEffectOrder): void;
	SetLocationEnabled(bEnabled: boolean): void;
	SetLocationDistance(Distance: Vector): void;
	static C(Other: UObject | any): Text3DCharacterTransform;
}

declare class Text3DEngineSubsystem extends EngineSubsystem { 
	DefaultMaterial: Material;
	CachedFonts: any;
	static Load(ResourceName: string): Text3DEngineSubsystem;
	static Find(Outer: UObject, ResourceName: string): Text3DEngineSubsystem;
	static GetDefaultObject(): Text3DEngineSubsystem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Text3DEngineSubsystem;
	static C(Other: UObject | any): Text3DEngineSubsystem;
}

declare class TextGenerated__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): TextGenerated__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): TextGenerated__PythonCallable;
	static GetDefaultObject(): TextGenerated__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TextGenerated__PythonCallable;
	static C(Other: UObject | any): TextGenerated__PythonCallable;
}

declare class ActorFactoryText3D extends ActorFactory { 
	static Load(ResourceName: string): ActorFactoryText3D;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryText3D;
	static GetDefaultObject(): ActorFactoryText3D;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryText3D;
	static C(Other: UObject | any): ActorFactoryText3D;
}

declare class GroomActorFactory extends ActorFactory { 
	static Load(ResourceName: string): GroomActorFactory;
	static Find(Outer: UObject, ResourceName: string): GroomActorFactory;
	static GetDefaultObject(): GroomActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GroomActorFactory;
	static C(Other: UObject | any): GroomActorFactory;
}

declare class GroomBindingFactory extends Factory { 
	static Load(ResourceName: string): GroomBindingFactory;
	static Find(Outer: UObject, ResourceName: string): GroomBindingFactory;
	static GetDefaultObject(): GroomBindingFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GroomBindingFactory;
	static C(Other: UObject | any): GroomBindingFactory;
}

declare class GroomEditorMode extends BaseLegacyWidgetEdMode { 
	static Load(ResourceName: string): GroomEditorMode;
	static Find(Outer: UObject, ResourceName: string): GroomEditorMode;
	static GetDefaultObject(): GroomEditorMode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GroomEditorMode;
	static C(Other: UObject | any): GroomEditorMode;
}

declare class GroomFactory extends Factory { 
	static Load(ResourceName: string): GroomFactory;
	static Find(Outer: UObject, ResourceName: string): GroomFactory;
	static GetDefaultObject(): GroomFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GroomFactory;
	static C(Other: UObject | any): GroomFactory;
}

declare class HairStrandsFactory extends Factory { 
	static Load(ResourceName: string): HairStrandsFactory;
	static Find(Outer: UObject, ResourceName: string): HairStrandsFactory;
	static GetDefaultObject(): HairStrandsFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HairStrandsFactory;
	static C(Other: UObject | any): HairStrandsFactory;
}

declare class ReimportGroomCacheFactory extends HairStrandsFactory { 
	static Load(ResourceName: string): ReimportGroomCacheFactory;
	static Find(Outer: UObject, ResourceName: string): ReimportGroomCacheFactory;
	static GetDefaultObject(): ReimportGroomCacheFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReimportGroomCacheFactory;
	static C(Other: UObject | any): ReimportGroomCacheFactory;
}

declare class ReimportHairStrandsFactory extends HairStrandsFactory { 
	static Load(ResourceName: string): ReimportHairStrandsFactory;
	static Find(Outer: UObject, ResourceName: string): ReimportHairStrandsFactory;
	static GetDefaultObject(): ReimportHairStrandsFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReimportHairStrandsFactory;
	static C(Other: UObject | any): ReimportHairStrandsFactory;
}

declare type EAlembicSamplingType = 'PerFrame' | 'PerXFrames' | 'PerTimeStep' | 'EAlembicSamplingType_MAX';
declare var EAlembicSamplingType : { PerFrame:'PerFrame',PerXFrames:'PerXFrames',PerTimeStep:'PerTimeStep',EAlembicSamplingType_MAX:'EAlembicSamplingType_MAX', };
declare class AbcSamplingSettings { 
	SamplingType: EAlembicSamplingType;
	FrameSteps: number;
	TimeSteps: number;
	FrameStart: number;
	FrameEnd: number;
	bSkipEmpty: boolean;
	clone() : AbcSamplingSettings;
	static C(Other: UObject | any): AbcSamplingSettings;
}

declare class AbcNormalGenerationSettings { 
	bForceOneSmoothingGroupPerObject: boolean;
	HardEdgeAngleThreshold: number;
	bRecomputeNormals: boolean;
	bIgnoreDegenerateTriangles: boolean;
	bSkipComputingTangents: boolean;
	clone() : AbcNormalGenerationSettings;
	static C(Other: UObject | any): AbcNormalGenerationSettings;
}

declare class AbcMaterialSettings { 
	bCreateMaterials: boolean;
	bFindMaterials: boolean;
	clone() : AbcMaterialSettings;
	static C(Other: UObject | any): AbcMaterialSettings;
}

declare type EBaseCalculationType = 'None' | 'PercentageBased' | 'FixedNumber' | 'NoCompression' | 'EBaseCalculationType_MAX';
declare var EBaseCalculationType : { None:'None',PercentageBased:'PercentageBased',FixedNumber:'FixedNumber',NoCompression:'NoCompression',EBaseCalculationType_MAX:'EBaseCalculationType_MAX', };
declare class AbcCompressionSettings { 
	bMergeMeshes: boolean;
	bBakeMatrixAnimation: boolean;
	BaseCalculationType: EBaseCalculationType;
	PercentageOfTotalBases: number;
	MaxNumberOfBases: number;
	MinimumNumberOfVertexInfluencePercentage: number;
	clone() : AbcCompressionSettings;
	static C(Other: UObject | any): AbcCompressionSettings;
}

declare class AbcStaticMeshSettings { 
	bMergeMeshes: boolean;
	bPropagateMatrixTransformations: boolean;
	bGenerateLightmapUVs: boolean;
	clone() : AbcStaticMeshSettings;
	static C(Other: UObject | any): AbcStaticMeshSettings;
}

declare type EAbcGeometryCacheMotionVectorsImport = 'NoMotionVectors' | 'ImportAbcVelocitiesAsMotionVectors' | 'CalculateMotionVectorsDuringImport' | 'EAbcGeometryCacheMotionVectorsImport_MAX';
declare var EAbcGeometryCacheMotionVectorsImport : { NoMotionVectors:'NoMotionVectors',ImportAbcVelocitiesAsMotionVectors:'ImportAbcVelocitiesAsMotionVectors',CalculateMotionVectorsDuringImport:'CalculateMotionVectorsDuringImport',EAbcGeometryCacheMotionVectorsImport_MAX:'EAbcGeometryCacheMotionVectorsImport_MAX', };
declare class AbcGeometryCacheSettings { 
	bFlattenTracks: boolean;
	bStoreImportedVertexNumbers: boolean;
	bApplyConstantTopologyOptimizations: boolean;
	bCalculateMotionVectorsDuringImport: boolean;
	MotionVectors: EAbcGeometryCacheMotionVectorsImport;
	bOptimizeIndexBuffers: boolean;
	CompressedPositionPrecision: number;
	CompressedTextureCoordinatesNumberOfBits: number;
	clone() : AbcGeometryCacheSettings;
	static C(Other: UObject | any): AbcGeometryCacheSettings;
}

declare type EAbcConversionPreset = 'Maya' | 'Max' | 'Custom' | 'EAbcConversionPreset_MAX';
declare var EAbcConversionPreset : { Maya:'Maya',Max:'Max',Custom:'Custom',EAbcConversionPreset_MAX:'EAbcConversionPreset_MAX', };
declare class AbcConversionSettings { 
	Preset: EAbcConversionPreset;
	bFlipU: boolean;
	bFlipV: boolean;
	Scale: Vector;
	Rotation: Vector;
	clone() : AbcConversionSettings;
	static C(Other: UObject | any): AbcConversionSettings;
}

declare class AbcAssetImportData extends AssetImportData { 
	TrackNames: string[];
	SamplingSettings: AbcSamplingSettings;
	NormalGenerationSettings: AbcNormalGenerationSettings;
	MaterialSettings: AbcMaterialSettings;
	CompressionSettings: AbcCompressionSettings;
	StaticMeshSettings: AbcStaticMeshSettings;
	GeometryCacheSettings: AbcGeometryCacheSettings;
	ConversionSettings: AbcConversionSettings;
	static Load(ResourceName: string): AbcAssetImportData;
	static Find(Outer: UObject, ResourceName: string): AbcAssetImportData;
	static GetDefaultObject(): AbcAssetImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbcAssetImportData;
	static C(Other: UObject | any): AbcAssetImportData;
}

declare type EAlembicImportType = 'StaticMesh' | 'GeometryCache' | 'Skeletal' | 'EAlembicImportType_MAX';
declare var EAlembicImportType : { StaticMesh:'StaticMesh',GeometryCache:'GeometryCache',Skeletal:'Skeletal',EAlembicImportType_MAX:'EAlembicImportType_MAX', };
declare class AbcImportSettings extends UObject { 
	ImportType: EAlembicImportType;
	SamplingSettings: AbcSamplingSettings;
	NormalGenerationSettings: AbcNormalGenerationSettings;
	MaterialSettings: AbcMaterialSettings;
	CompressionSettings: AbcCompressionSettings;
	StaticMeshSettings: AbcStaticMeshSettings;
	GeometryCacheSettings: AbcGeometryCacheSettings;
	ConversionSettings: AbcConversionSettings;
	static Load(ResourceName: string): AbcImportSettings;
	static Find(Outer: UObject, ResourceName: string): AbcImportSettings;
	static GetDefaultObject(): AbcImportSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbcImportSettings;
	static C(Other: UObject | any): AbcImportSettings;
}

declare class AlembicTestCommandlet extends Commandlet { 
	static Load(ResourceName: string): AlembicTestCommandlet;
	static Find(Outer: UObject, ResourceName: string): AlembicTestCommandlet;
	static GetDefaultObject(): AlembicTestCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AlembicTestCommandlet;
	static C(Other: UObject | any): AlembicTestCommandlet;
}

declare class AlembicImportFactory extends Factory { 
	ImportSettings: AbcImportSettings;
	bShowOption: boolean;
	static Load(ResourceName: string): AlembicImportFactory;
	static Find(Outer: UObject, ResourceName: string): AlembicImportFactory;
	static GetDefaultObject(): AlembicImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AlembicImportFactory;
	static C(Other: UObject | any): AlembicImportFactory;
}

declare class ActorFactoryGeometryCache extends ActorFactory { 
	static Load(ResourceName: string): ActorFactoryGeometryCache;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryGeometryCache;
	static GetDefaultObject(): ActorFactoryGeometryCache;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryGeometryCache;
	static C(Other: UObject | any): ActorFactoryGeometryCache;
}

declare class GeometryCacheThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	static Load(ResourceName: string): GeometryCacheThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheThumbnailRenderer;
	static GetDefaultObject(): GeometryCacheThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheThumbnailRenderer;
	static C(Other: UObject | any): GeometryCacheThumbnailRenderer;
}

declare type EFindFrom = 'AllFiles' | 'SelectedInContentBrowser' | 'EFindFrom_MAX';
declare var EFindFrom : { AllFiles:'AllFiles',SelectedInContentBrowser:'SelectedInContentBrowser',EFindFrom_MAX:'EFindFrom_MAX', };
declare type EAutosaveRecoverType = 'NONE' | 'LastAutosave' | 'SelectedAssetSet' | 'EAutosaveRecoverType_MAX';
declare var EAutosaveRecoverType : { NONE:'NONE',LastAutosave:'LastAutosave',SelectedAssetSet:'SelectedAssetSet',EAutosaveRecoverType_MAX:'EAutosaveRecoverType_MAX', };
declare class AssetAssistantEditorUISetting extends UObject { 
	TextToFind: string;
	FindFrom: EFindFrom;
	PatternText: string;
	Result: string[];
	SetText: string;
	AutosaveRecoverType: EAutosaveRecoverType;
	AutosaveRepeatRate: number;
	PluginHotkey: number;
	Class: UnrealEngineClass;
	static Load(ResourceName: string): AssetAssistantEditorUISetting;
	static Find(Outer: UObject, ResourceName: string): AssetAssistantEditorUISetting;
	static GetDefaultObject(): AssetAssistantEditorUISetting;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AssetAssistantEditorUISetting;
	static C(Other: UObject | any): AssetAssistantEditorUISetting;
}

declare class AssetsCleanerSettings extends UObject { 
	bShowLevels: boolean;
	bDeleteEmptyFolders: boolean;
	static Load(ResourceName: string): AssetsCleanerSettings;
	static Find(Outer: UObject, ResourceName: string): AssetsCleanerSettings;
	static GetDefaultObject(): AssetsCleanerSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AssetsCleanerSettings;
	static C(Other: UObject | any): AssetsCleanerSettings;
}

declare class DACustomInputConfigBinder extends Actor { 
	ActionMappings: InputActionKeyMapping[];
	AxisMappings: InputAxisKeyMapping[];
	static GetDefaultObject(): DACustomInputConfigBinder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DACustomInputConfigBinder;
	static C(Other: UObject | any): DACustomInputConfigBinder;
}

declare class SnapMapFlowEditorVisualization extends Actor { 
	LoadedLevels: any;
	LoadedPackages: any;
	DebugDrawBounds: Box;
	DebugDrawColor: Color;
	static GetDefaultObject(): SnapMapFlowEditorVisualization;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SnapMapFlowEditorVisualization;
	static C(Other: UObject | any): SnapMapFlowEditorVisualization;
}

declare class SnapGridFlowModuleDBImportSettings extends UObject { 
	Category: string;
	bAllowRotation: boolean;
	static Load(ResourceName: string): SnapGridFlowModuleDBImportSettings;
	static Find(Outer: UObject, ResourceName: string): SnapGridFlowModuleDBImportSettings;
	static GetDefaultObject(): SnapGridFlowModuleDBImportSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SnapGridFlowModuleDBImportSettings;
	static C(Other: UObject | any): SnapGridFlowModuleDBImportSettings;
}

declare class DungeonEdModeHandler extends UObject { 
	static Load(ResourceName: string): DungeonEdModeHandler;
	static Find(Outer: UObject, ResourceName: string): DungeonEdModeHandler;
	static GetDefaultObject(): DungeonEdModeHandler;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DungeonEdModeHandler;
	static C(Other: UObject | any): DungeonEdModeHandler;
}

declare class DungeonThemeDataFactory extends Factory { 
	static Load(ResourceName: string): DungeonThemeDataFactory;
	static Find(Outer: UObject, ResourceName: string): DungeonThemeDataFactory;
	static GetDefaultObject(): DungeonThemeDataFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DungeonThemeDataFactory;
	static C(Other: UObject | any): DungeonThemeDataFactory;
}

declare class EdGraphNode_GrammarBase extends EdGraphNode { 
	static Load(ResourceName: string): EdGraphNode_GrammarBase;
	static Find(Outer: UObject, ResourceName: string): EdGraphNode_GrammarBase;
	static GetDefaultObject(): EdGraphNode_GrammarBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphNode_GrammarBase;
	static C(Other: UObject | any): EdGraphNode_GrammarBase;
}

declare class EdGraphNode_GrammarNode extends EdGraphNode_GrammarBase { 
	TypeInfo: any;
	index: number;
	bDisplayIndex: boolean;
	NodeId: Guid;
	DependentNodes: any;
	static Load(ResourceName: string): EdGraphNode_GrammarNode;
	static Find(Outer: UObject, ResourceName: string): EdGraphNode_GrammarNode;
	static GetDefaultObject(): EdGraphNode_GrammarNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphNode_GrammarNode;
	static C(Other: UObject | any): EdGraphNode_GrammarNode;
}

declare class EdGraphNode_DebugGrammarNode extends EdGraphNode_GrammarNode { 
	static Load(ResourceName: string): EdGraphNode_DebugGrammarNode;
	static Find(Outer: UObject, ResourceName: string): EdGraphNode_DebugGrammarNode;
	static GetDefaultObject(): EdGraphNode_DebugGrammarNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphNode_DebugGrammarNode;
	static C(Other: UObject | any): EdGraphNode_DebugGrammarNode;
}

declare class EdGraphNode_DebugGrammarDoorNode extends EdGraphNode { 
	Incoming: EdGraphNode_DebugGrammarNode;
	Outgoing: EdGraphNode_DebugGrammarNode;
	static Load(ResourceName: string): EdGraphNode_DebugGrammarDoorNode;
	static Find(Outer: UObject, ResourceName: string): EdGraphNode_DebugGrammarDoorNode;
	static GetDefaultObject(): EdGraphNode_DebugGrammarDoorNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphNode_DebugGrammarDoorNode;
	static C(Other: UObject | any): EdGraphNode_DebugGrammarDoorNode;
}

declare class EdGraphNode_DungeonBase extends EdGraphNode { 
	static Load(ResourceName: string): EdGraphNode_DungeonBase;
	static Find(Outer: UObject, ResourceName: string): EdGraphNode_DungeonBase;
	static GetDefaultObject(): EdGraphNode_DungeonBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphNode_DungeonBase;
	static C(Other: UObject | any): EdGraphNode_DungeonBase;
}

declare class EdGraphNode_DungeonActorBase extends EdGraphNode_DungeonBase { 
	Probability: number;
	Affinity: number;
	ConsumeOnAttach: boolean;
	Offset: Transform;
	bUseSelectionLogic: boolean;
	bLogicOverridesAffinity: boolean;
	SelectionLogics: DungeonSelectorLogic[];
	bUseTransformLogic: boolean;
	TransformLogics: DungeonTransformLogic[];
	bUseSpawnLogic: boolean;
	SpawnLogics: DungeonSpawnLogic[];
	bUseSpatialConstraint: boolean;
	SpatialConstraint: DungeonSpatialConstraint;
	ExecutionOrder: number;
	static Load(ResourceName: string): EdGraphNode_DungeonActorBase;
	static Find(Outer: UObject, ResourceName: string): EdGraphNode_DungeonActorBase;
	static GetDefaultObject(): EdGraphNode_DungeonActorBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphNode_DungeonActorBase;
	static C(Other: UObject | any): EdGraphNode_DungeonActorBase;
}

declare class EdGraphNode_DungeonActorTemplate extends EdGraphNode_DungeonActorBase { 
	ClassTemplate: UnrealEngineClass;
	ActorTemplate: Actor;
	static Load(ResourceName: string): EdGraphNode_DungeonActorTemplate;
	static Find(Outer: UObject, ResourceName: string): EdGraphNode_DungeonActorTemplate;
	static GetDefaultObject(): EdGraphNode_DungeonActorTemplate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphNode_DungeonActorTemplate;
	static C(Other: UObject | any): EdGraphNode_DungeonActorTemplate;
}

declare class EdGraphNode_DungeonMarker extends EdGraphNode_DungeonBase { 
	MarkerName: string;
	bUserDefined: boolean;
	bBuilderEmittedMarker: boolean;
	static Load(ResourceName: string): EdGraphNode_DungeonMarker;
	static Find(Outer: UObject, ResourceName: string): EdGraphNode_DungeonMarker;
	static GetDefaultObject(): EdGraphNode_DungeonMarker;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphNode_DungeonMarker;
	static C(Other: UObject | any): EdGraphNode_DungeonMarker;
}

declare class EdGraphNode_DungeonMarkerEmitter extends EdGraphNode_DungeonBase { 
	ParentMarker: EdGraphNode_DungeonMarker;
	Offset: Transform;
	static Load(ResourceName: string): EdGraphNode_DungeonMarkerEmitter;
	static Find(Outer: UObject, ResourceName: string): EdGraphNode_DungeonMarkerEmitter;
	static GetDefaultObject(): EdGraphNode_DungeonMarkerEmitter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphNode_DungeonMarkerEmitter;
	static C(Other: UObject | any): EdGraphNode_DungeonMarkerEmitter;
}

declare class EdGraphNode_DungeonMesh extends EdGraphNode_DungeonActorBase { 
	Mesh: StaticMesh;
	MaterialOverrides: MaterialOverride[];
	bUseCustomCollision: boolean;
	BodyInstance: BodyInstance;
	AdvancedOptions: StaticMeshComponent;
	static Load(ResourceName: string): EdGraphNode_DungeonMesh;
	static Find(Outer: UObject, ResourceName: string): EdGraphNode_DungeonMesh;
	static GetDefaultObject(): EdGraphNode_DungeonMesh;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphNode_DungeonMesh;
	static C(Other: UObject | any): EdGraphNode_DungeonMesh;
}

declare class EdGraphNode_DungeonParticleSystem extends EdGraphNode_DungeonActorBase { 
	ParticleSystem: ParticleSystem;
	static Load(ResourceName: string): EdGraphNode_DungeonParticleSystem;
	static Find(Outer: UObject, ResourceName: string): EdGraphNode_DungeonParticleSystem;
	static GetDefaultObject(): EdGraphNode_DungeonParticleSystem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphNode_DungeonParticleSystem;
	static C(Other: UObject | any): EdGraphNode_DungeonParticleSystem;
}

declare class EdGraphNode_DungeonPointLight extends EdGraphNode_DungeonActorBase { 
	PointLight: PointLightComponent;
	static Load(ResourceName: string): EdGraphNode_DungeonPointLight;
	static Find(Outer: UObject, ResourceName: string): EdGraphNode_DungeonPointLight;
	static GetDefaultObject(): EdGraphNode_DungeonPointLight;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphNode_DungeonPointLight;
	static C(Other: UObject | any): EdGraphNode_DungeonPointLight;
}

declare class EdGraphNode_DungeonSpotLight extends EdGraphNode_DungeonActorBase { 
	SpotLight: SpotLightComponent;
	static Load(ResourceName: string): EdGraphNode_DungeonSpotLight;
	static Find(Outer: UObject, ResourceName: string): EdGraphNode_DungeonSpotLight;
	static GetDefaultObject(): EdGraphNode_DungeonSpotLight;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphNode_DungeonSpotLight;
	static C(Other: UObject | any): EdGraphNode_DungeonSpotLight;
}

declare class EdGraphNode_ExecNodeBase extends EdGraphNode { 
	static Load(ResourceName: string): EdGraphNode_ExecNodeBase;
	static Find(Outer: UObject, ResourceName: string): EdGraphNode_ExecNodeBase;
	static GetDefaultObject(): EdGraphNode_ExecNodeBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphNode_ExecNodeBase;
	static C(Other: UObject | any): EdGraphNode_ExecNodeBase;
}

declare class EdGraphNode_ExecEntryNode extends EdGraphNode_ExecNodeBase { 
	static Load(ResourceName: string): EdGraphNode_ExecEntryNode;
	static Find(Outer: UObject, ResourceName: string): EdGraphNode_ExecEntryNode;
	static GetDefaultObject(): EdGraphNode_ExecEntryNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphNode_ExecEntryNode;
	static C(Other: UObject | any): EdGraphNode_ExecEntryNode;
}

declare class EdGraphNode_ExecRuleNode extends EdGraphNode_ExecNodeBase { 
	Rule: any;
	ExecutionMode: ERuleNodeExecutionMode;
	ExecutionConfig: RuleNodeExecutionModeConfig;
	static Load(ResourceName: string): EdGraphNode_ExecRuleNode;
	static Find(Outer: UObject, ResourceName: string): EdGraphNode_ExecRuleNode;
	static GetDefaultObject(): EdGraphNode_ExecRuleNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphNode_ExecRuleNode;
	static C(Other: UObject | any): EdGraphNode_ExecRuleNode;
}

declare class EdGraphSchema_DungeonProp extends EdGraphSchema { 
	static Load(ResourceName: string): EdGraphSchema_DungeonProp;
	static Find(Outer: UObject, ResourceName: string): EdGraphSchema_DungeonProp;
	static GetDefaultObject(): EdGraphSchema_DungeonProp;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphSchema_DungeonProp;
	static C(Other: UObject | any): EdGraphSchema_DungeonProp;
}

declare class EdGraphSchema_Extensions extends UObject { 
	static Load(ResourceName: string): EdGraphSchema_Extensions;
	static Find(Outer: UObject, ResourceName: string): EdGraphSchema_Extensions;
	static GetDefaultObject(): EdGraphSchema_Extensions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphSchema_Extensions;
	static C(Other: UObject | any): EdGraphSchema_Extensions;
}

declare class EdGraphSchema_FlowExec extends EdGraphSchema { 
	static Load(ResourceName: string): EdGraphSchema_FlowExec;
	static Find(Outer: UObject, ResourceName: string): EdGraphSchema_FlowExec;
	static GetDefaultObject(): EdGraphSchema_FlowExec;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphSchema_FlowExec;
	static C(Other: UObject | any): EdGraphSchema_FlowExec;
}

declare class EdGraphSchema_Grammar extends EdGraphSchema { 
	static Load(ResourceName: string): EdGraphSchema_Grammar;
	static Find(Outer: UObject, ResourceName: string): EdGraphSchema_Grammar;
	static GetDefaultObject(): EdGraphSchema_Grammar;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphSchema_Grammar;
	static C(Other: UObject | any): EdGraphSchema_Grammar;
}

declare class EdGraph_Grammar extends EdGraph { 
	static Load(ResourceName: string): EdGraph_Grammar;
	static Find(Outer: UObject, ResourceName: string): EdGraph_Grammar;
	static GetDefaultObject(): EdGraph_Grammar;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraph_Grammar;
	static C(Other: UObject | any): EdGraph_Grammar;
}

declare class EdGraph_DebugGrammar extends EdGraph_Grammar { 
	static Load(ResourceName: string): EdGraph_DebugGrammar;
	static Find(Outer: UObject, ResourceName: string): EdGraph_DebugGrammar;
	static GetDefaultObject(): EdGraph_DebugGrammar;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraph_DebugGrammar;
	static C(Other: UObject | any): EdGraph_DebugGrammar;
}

declare class EdGraph_DungeonProp extends EdGraph { 
	static Load(ResourceName: string): EdGraph_DungeonProp;
	static Find(Outer: UObject, ResourceName: string): EdGraph_DungeonProp;
	static GetDefaultObject(): EdGraph_DungeonProp;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraph_DungeonProp;
	static C(Other: UObject | any): EdGraph_DungeonProp;
}

declare class EdGraph_FlowExec extends EdGraph { 
	EntryNode: EdGraphNode_ExecEntryNode;
	static Load(ResourceName: string): EdGraph_FlowExec;
	static Find(Outer: UObject, ResourceName: string): EdGraph_FlowExec;
	static GetDefaultObject(): EdGraph_FlowExec;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraph_FlowExec;
	static C(Other: UObject | any): EdGraph_FlowExec;
}

declare class FlowEditorSettings extends UObject { 
	Seed: number;
	bRandomizeSeedOnBuild: boolean;
	MaxBuildRetries: number;
	ParameterOverrides: any;
	NumTimeoutsRetriesAllowed: number;
	static Load(ResourceName: string): FlowEditorSettings;
	static Find(Outer: UObject, ResourceName: string): FlowEditorSettings;
	static GetDefaultObject(): FlowEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FlowEditorSettings;
	static C(Other: UObject | any): FlowEditorSettings;
}

declare class FlowPerfEditorSettings extends UObject { 
	NumTests: number;
	MaxRetries: number;
	PassRetryThreshold: number;
	WarningRetryThreshold: number;
	ParameterOverrides: any;
	GarbageCollectEveryNTests: number;
	static Load(ResourceName: string): FlowPerfEditorSettings;
	static Find(Outer: UObject, ResourceName: string): FlowPerfEditorSettings;
	static GetDefaultObject(): FlowPerfEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FlowPerfEditorSettings;
	static C(Other: UObject | any): FlowPerfEditorSettings;
}

declare class SnapMapEditor_GraphDesignAppModeSettings extends UObject { 
	Seed: number;
	bRandomizeSeed: boolean;
	bAutoZoomResultGraph: boolean;
	static Load(ResourceName: string): SnapMapEditor_GraphDesignAppModeSettings;
	static Find(Outer: UObject, ResourceName: string): SnapMapEditor_GraphDesignAppModeSettings;
	static GetDefaultObject(): SnapMapEditor_GraphDesignAppModeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SnapMapEditor_GraphDesignAppModeSettings;
	static C(Other: UObject | any): SnapMapEditor_GraphDesignAppModeSettings;
}

declare class GridDungeonEdModeHandler extends DungeonEdModeHandler { 
	static Load(ResourceName: string): GridDungeonEdModeHandler;
	static Find(Outer: UObject, ResourceName: string): GridDungeonEdModeHandler;
	static GetDefaultObject(): GridDungeonEdModeHandler;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GridDungeonEdModeHandler;
	static C(Other: UObject | any): GridDungeonEdModeHandler;
}

declare class GridDungeonEdToolData extends UObject { 
	FloorIndex: number;
	BrushSize: number;
	CellType: EGridPaintToolCellType;
	static Load(ResourceName: string): GridDungeonEdToolData;
	static Find(Outer: UObject, ResourceName: string): GridDungeonEdToolData;
	static GetDefaultObject(): GridDungeonEdToolData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GridDungeonEdToolData;
	static C(Other: UObject | any): GridDungeonEdToolData;
}

declare class GridFlowAbstractEdGraph extends EdGraph { 
	static Load(ResourceName: string): GridFlowAbstractEdGraph;
	static Find(Outer: UObject, ResourceName: string): GridFlowAbstractEdGraph;
	static GetDefaultObject(): GridFlowAbstractEdGraph;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GridFlowAbstractEdGraph;
	static C(Other: UObject | any): GridFlowAbstractEdGraph;
}

declare class GridFlowAbstractEdGraphNodeBase extends EdGraphNode { 
	static Load(ResourceName: string): GridFlowAbstractEdGraphNodeBase;
	static Find(Outer: UObject, ResourceName: string): GridFlowAbstractEdGraphNodeBase;
	static GetDefaultObject(): GridFlowAbstractEdGraphNodeBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GridFlowAbstractEdGraphNodeBase;
	static C(Other: UObject | any): GridFlowAbstractEdGraphNodeBase;
}

declare class GridFlowAbstractEdGraphNode extends GridFlowAbstractEdGraphNodeBase { 
	static Load(ResourceName: string): GridFlowAbstractEdGraphNode;
	static Find(Outer: UObject, ResourceName: string): GridFlowAbstractEdGraphNode;
	static GetDefaultObject(): GridFlowAbstractEdGraphNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GridFlowAbstractEdGraphNode;
	static C(Other: UObject | any): GridFlowAbstractEdGraphNode;
}

declare class GridFlowAbstractEdGraphSchema extends EdGraphSchema { 
	static Load(ResourceName: string): GridFlowAbstractEdGraphSchema;
	static Find(Outer: UObject, ResourceName: string): GridFlowAbstractEdGraphSchema;
	static GetDefaultObject(): GridFlowAbstractEdGraphSchema;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GridFlowAbstractEdGraphSchema;
	static C(Other: UObject | any): GridFlowAbstractEdGraphSchema;
}

declare class GridFlowAssetFactory extends Factory { 
	static Load(ResourceName: string): GridFlowAssetFactory;
	static Find(Outer: UObject, ResourceName: string): GridFlowAssetFactory;
	static GetDefaultObject(): GridFlowAssetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GridFlowAssetFactory;
	static C(Other: UObject | any): GridFlowAssetFactory;
}

declare class GridFlowExecEdGraphNodeBase extends EdGraphNode { 
	static Load(ResourceName: string): GridFlowExecEdGraphNodeBase;
	static Find(Outer: UObject, ResourceName: string): GridFlowExecEdGraphNodeBase;
	static GetDefaultObject(): GridFlowExecEdGraphNodeBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GridFlowExecEdGraphNodeBase;
	static C(Other: UObject | any): GridFlowExecEdGraphNodeBase;
}

declare class GridFlowExecEdGraphNode_Result extends GridFlowExecEdGraphNodeBase { 
	static Load(ResourceName: string): GridFlowExecEdGraphNode_Result;
	static Find(Outer: UObject, ResourceName: string): GridFlowExecEdGraphNode_Result;
	static GetDefaultObject(): GridFlowExecEdGraphNode_Result;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GridFlowExecEdGraphNode_Result;
	static C(Other: UObject | any): GridFlowExecEdGraphNode_Result;
}

declare class GridFlowExecEdGraph extends EdGraph { 
	ResultNode: GridFlowExecEdGraphNode_Result;
	static Load(ResourceName: string): GridFlowExecEdGraph;
	static Find(Outer: UObject, ResourceName: string): GridFlowExecEdGraph;
	static GetDefaultObject(): GridFlowExecEdGraph;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GridFlowExecEdGraph;
	static C(Other: UObject | any): GridFlowExecEdGraph;
}

declare class GridFlowExecEdGraphNode_Task extends GridFlowExecEdGraphNodeBase { 
	TaskTemplate: FlowExecTask;
	static Load(ResourceName: string): GridFlowExecEdGraphNode_Task;
	static Find(Outer: UObject, ResourceName: string): GridFlowExecEdGraphNode_Task;
	static GetDefaultObject(): GridFlowExecEdGraphNode_Task;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GridFlowExecEdGraphNode_Task;
	static C(Other: UObject | any): GridFlowExecEdGraphNode_Task;
}

declare class GridFlowExecEdGraphSchema extends EdGraphSchema { 
	static Load(ResourceName: string): GridFlowExecEdGraphSchema;
	static Find(Outer: UObject, ResourceName: string): GridFlowExecEdGraphSchema;
	static GetDefaultObject(): GridFlowExecEdGraphSchema;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GridFlowExecEdGraphSchema;
	static C(Other: UObject | any): GridFlowExecEdGraphSchema;
}

declare class GridPatternEdGroundItem extends StaticMeshComponent { 
	MaterialInstance: MaterialInstanceDynamic;
	HoverAnimation: CurveFloat;
	Coord: IntPoint;
	ItemType: EMarkerGenGridPatternRuleType;
	static Load(ResourceName: string): GridPatternEdGroundItem;
	static Find(Outer: UObject, ResourceName: string): GridPatternEdGroundItem;
	static GetDefaultObject(): GridPatternEdGroundItem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GridPatternEdGroundItem;
	static C(Other: UObject | any): GridPatternEdGroundItem;
}

declare class GridPatternEdCursorActor extends Actor { 
	CursorMesh: StaticMeshComponent;
	static GetDefaultObject(): GridPatternEdCursorActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GridPatternEdCursorActor;
	static C(Other: UObject | any): GridPatternEdCursorActor;
}

declare class GridPatternEdRuleActor extends Actor { 
	Color: LinearColor;
	CanvasTexture: CanvasRenderTarget2D;
	MeshComponent: StaticMeshComponent;
	SceneRoot: SceneComponent;
	Rule: MarkerGenGridPatternRule;
	MaterialInstance: MaterialInstanceDynamic;
	Font: Font;
	FontTitle: Font;
	static GetDefaultObject(): GridPatternEdRuleActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GridPatternEdRuleActor;
	RenderCanvas(Canvas: Canvas,Width: number,Height: number): void;
	static C(Other: UObject | any): GridPatternEdRuleActor;
}

declare class GridPatternEdGroundActor extends Actor { 
	SceneRoot: SceneComponent;
	Tiles: any;
	XEdges: any;
	YEdges: any;
	Corners: any;
	static GetDefaultObject(): GridPatternEdGroundActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GridPatternEdGroundActor;
	static C(Other: UObject | any): GridPatternEdGroundActor;
}

declare class MGGridPatternGroundMeshItemColors { 
	BodyColor: LinearColor;
	BorderColor: LinearColor;
	HoverBodyColor: LinearColor;
	HoverBorderColor: LinearColor;
	clone() : MGGridPatternGroundMeshItemColors;
	static C(Other: UObject | any): MGGridPatternGroundMeshItemColors;
}

declare class MGGridPatternEdGroundSettings { 
	Start: IntPoint;
	End: IntPoint;
	TileSize: number;
	EdgeSize: number;
	BorderThickness: number;
	HoverBorderThickness: number;
	HoverAnimationTime: number;
	HoverAnimation: CurveFloat;
	GroundColor: MGGridPatternGroundMeshItemColors;
	EdgeColor: MGGridPatternGroundMeshItemColors;
	CornerColor: MGGridPatternGroundMeshItemColors;
	clone() : MGGridPatternEdGroundSettings;
	static C(Other: UObject | any): MGGridPatternEdGroundSettings;
}

declare class MGGridPatternEditorSettings extends DataAsset { 
	GroundSettings: MGGridPatternEdGroundSettings;
	static Load(ResourceName: string): MGGridPatternEditorSettings;
	static Find(Outer: UObject, ResourceName: string): MGGridPatternEditorSettings;
	static GetDefaultObject(): MGGridPatternEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MGGridPatternEditorSettings;
	static C(Other: UObject | any): MGGridPatternEditorSettings;
}

declare class MGPatternGraphNode extends EdGraphNode { 
	NodeTemplate: MGPatternScriptNode;
	static Load(ResourceName: string): MGPatternGraphNode;
	static Find(Outer: UObject, ResourceName: string): MGPatternGraphNode;
	static GetDefaultObject(): MGPatternGraphNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MGPatternGraphNode;
	static C(Other: UObject | any): MGPatternGraphNode;
}

declare class MGPatternGraphConditionNode extends MGPatternGraphNode { 
	static Load(ResourceName: string): MGPatternGraphConditionNode;
	static Find(Outer: UObject, ResourceName: string): MGPatternGraphConditionNode;
	static GetDefaultObject(): MGPatternGraphConditionNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MGPatternGraphConditionNode;
	static C(Other: UObject | any): MGPatternGraphConditionNode;
}

declare class MGPatternGraphNode_Result extends MGPatternGraphConditionNode { 
	static Load(ResourceName: string): MGPatternGraphNode_Result;
	static Find(Outer: UObject, ResourceName: string): MGPatternGraphNode_Result;
	static GetDefaultObject(): MGPatternGraphNode_Result;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MGPatternGraphNode_Result;
	static C(Other: UObject | any): MGPatternGraphNode_Result;
}

declare class MGPatternGraphActionNode extends MGPatternGraphNode { 
	static Load(ResourceName: string): MGPatternGraphActionNode;
	static Find(Outer: UObject, ResourceName: string): MGPatternGraphActionNode;
	static GetDefaultObject(): MGPatternGraphActionNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MGPatternGraphActionNode;
	static C(Other: UObject | any): MGPatternGraphActionNode;
}

declare class MGPatternGraphNode_OnPass extends MGPatternGraphActionNode { 
	static Load(ResourceName: string): MGPatternGraphNode_OnPass;
	static Find(Outer: UObject, ResourceName: string): MGPatternGraphNode_OnPass;
	static GetDefaultObject(): MGPatternGraphNode_OnPass;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MGPatternGraphNode_OnPass;
	static C(Other: UObject | any): MGPatternGraphNode_OnPass;
}

declare class MGPatternGraph extends EdGraph { 
	ResultNode: MGPatternGraphNode_Result;
	ActionPassNode: MGPatternGraphNode_OnPass;
	static Load(ResourceName: string): MGPatternGraph;
	static Find(Outer: UObject, ResourceName: string): MGPatternGraph;
	static GetDefaultObject(): MGPatternGraph;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MGPatternGraph;
	static C(Other: UObject | any): MGPatternGraph;
}

declare class MGPatternGraphNode_EmitMarker extends MGPatternGraphActionNode { 
	static Load(ResourceName: string): MGPatternGraphNode_EmitMarker;
	static Find(Outer: UObject, ResourceName: string): MGPatternGraphNode_EmitMarker;
	static GetDefaultObject(): MGPatternGraphNode_EmitMarker;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MGPatternGraphNode_EmitMarker;
	static C(Other: UObject | any): MGPatternGraphNode_EmitMarker;
}

declare class MGPatternGraphNode_RemoveMarker extends MGPatternGraphActionNode { 
	static Load(ResourceName: string): MGPatternGraphNode_RemoveMarker;
	static Find(Outer: UObject, ResourceName: string): MGPatternGraphNode_RemoveMarker;
	static GetDefaultObject(): MGPatternGraphNode_RemoveMarker;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MGPatternGraphNode_RemoveMarker;
	static C(Other: UObject | any): MGPatternGraphNode_RemoveMarker;
}

declare class MGPatternGraphNode_LogicalAnd extends MGPatternGraphConditionNode { 
	static Load(ResourceName: string): MGPatternGraphNode_LogicalAnd;
	static Find(Outer: UObject, ResourceName: string): MGPatternGraphNode_LogicalAnd;
	static GetDefaultObject(): MGPatternGraphNode_LogicalAnd;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MGPatternGraphNode_LogicalAnd;
	static C(Other: UObject | any): MGPatternGraphNode_LogicalAnd;
}

declare class MGPatternGraphNode_LogicalNot extends MGPatternGraphConditionNode { 
	static Load(ResourceName: string): MGPatternGraphNode_LogicalNot;
	static Find(Outer: UObject, ResourceName: string): MGPatternGraphNode_LogicalNot;
	static GetDefaultObject(): MGPatternGraphNode_LogicalNot;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MGPatternGraphNode_LogicalNot;
	static C(Other: UObject | any): MGPatternGraphNode_LogicalNot;
}

declare class MGPatternGraphNode_LogicalOr extends MGPatternGraphConditionNode { 
	static Load(ResourceName: string): MGPatternGraphNode_LogicalOr;
	static Find(Outer: UObject, ResourceName: string): MGPatternGraphNode_LogicalOr;
	static GetDefaultObject(): MGPatternGraphNode_LogicalOr;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MGPatternGraphNode_LogicalOr;
	static C(Other: UObject | any): MGPatternGraphNode_LogicalOr;
}

declare class MGPatternGraphNode_MarkerExists extends MGPatternGraphConditionNode { 
	static Load(ResourceName: string): MGPatternGraphNode_MarkerExists;
	static Find(Outer: UObject, ResourceName: string): MGPatternGraphNode_MarkerExists;
	static GetDefaultObject(): MGPatternGraphNode_MarkerExists;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MGPatternGraphNode_MarkerExists;
	static C(Other: UObject | any): MGPatternGraphNode_MarkerExists;
}

declare class MGPatternGraphSchema extends EdGraphSchema { 
	static Load(ResourceName: string): MGPatternGraphSchema;
	static Find(Outer: UObject, ResourceName: string): MGPatternGraphSchema;
	static GetDefaultObject(): MGPatternGraphSchema;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MGPatternGraphSchema;
	static C(Other: UObject | any): MGPatternGraphSchema;
}

declare class PlaceableMarkerActorFactory extends ActorFactory { 
	static Load(ResourceName: string): PlaceableMarkerActorFactory;
	static Find(Outer: UObject, ResourceName: string): PlaceableMarkerActorFactory;
	static GetDefaultObject(): PlaceableMarkerActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlaceableMarkerActorFactory;
	static C(Other: UObject | any): PlaceableMarkerActorFactory;
}

declare class PlaceableMarkerAssetFactory extends Factory { 
	static Load(ResourceName: string): PlaceableMarkerAssetFactory;
	static Find(Outer: UObject, ResourceName: string): PlaceableMarkerAssetFactory;
	static GetDefaultObject(): PlaceableMarkerAssetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlaceableMarkerAssetFactory;
	static C(Other: UObject | any): PlaceableMarkerAssetFactory;
}

declare class SnapConnectionActorFactory extends ActorFactory { 
	static Load(ResourceName: string): SnapConnectionActorFactory;
	static Find(Outer: UObject, ResourceName: string): SnapConnectionActorFactory;
	static GetDefaultObject(): SnapConnectionActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SnapConnectionActorFactory;
	static C(Other: UObject | any): SnapConnectionActorFactory;
}

declare class SnapConnectionAssetFactory extends Factory { 
	static Load(ResourceName: string): SnapConnectionAssetFactory;
	static Find(Outer: UObject, ResourceName: string): SnapConnectionAssetFactory;
	static GetDefaultObject(): SnapConnectionAssetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SnapConnectionAssetFactory;
	static C(Other: UObject | any): SnapConnectionAssetFactory;
}

declare class SnapGridFlowModuleBoundsActorFactory extends ActorFactory { 
	static Load(ResourceName: string): SnapGridFlowModuleBoundsActorFactory;
	static Find(Outer: UObject, ResourceName: string): SnapGridFlowModuleBoundsActorFactory;
	static GetDefaultObject(): SnapGridFlowModuleBoundsActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SnapGridFlowModuleBoundsActorFactory;
	static C(Other: UObject | any): SnapGridFlowModuleBoundsActorFactory;
}

declare class SnapGridFlowAssetFactory extends Factory { 
	static Load(ResourceName: string): SnapGridFlowAssetFactory;
	static Find(Outer: UObject, ResourceName: string): SnapGridFlowAssetFactory;
	static GetDefaultObject(): SnapGridFlowAssetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SnapGridFlowAssetFactory;
	static C(Other: UObject | any): SnapGridFlowAssetFactory;
}

declare class SnapGridFlowModuleBoundsAssetFactory extends Factory { 
	static Load(ResourceName: string): SnapGridFlowModuleBoundsAssetFactory;
	static Find(Outer: UObject, ResourceName: string): SnapGridFlowModuleBoundsAssetFactory;
	static GetDefaultObject(): SnapGridFlowModuleBoundsAssetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SnapGridFlowModuleBoundsAssetFactory;
	static C(Other: UObject | any): SnapGridFlowModuleBoundsAssetFactory;
}

declare class SnapGridFlowModuleDatabaseFactory extends Factory { 
	static Load(ResourceName: string): SnapGridFlowModuleDatabaseFactory;
	static Find(Outer: UObject, ResourceName: string): SnapGridFlowModuleDatabaseFactory;
	static GetDefaultObject(): SnapGridFlowModuleDatabaseFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SnapGridFlowModuleDatabaseFactory;
	static C(Other: UObject | any): SnapGridFlowModuleDatabaseFactory;
}

declare class SnapGridFlowEditorSettings extends FlowEditorSettings { 
	ModuleDatabase: SnapGridFlowModuleDatabase;
	bSupportDoorCategories: boolean;
	static Load(ResourceName: string): SnapGridFlowEditorSettings;
	static Find(Outer: UObject, ResourceName: string): SnapGridFlowEditorSettings;
	static GetDefaultObject(): SnapGridFlowEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SnapGridFlowEditorSettings;
	static C(Other: UObject | any): SnapGridFlowEditorSettings;
}

declare class SnapMapAssetFactory extends Factory { 
	static Load(ResourceName: string): SnapMapAssetFactory;
	static Find(Outer: UObject, ResourceName: string): SnapMapAssetFactory;
	static GetDefaultObject(): SnapMapAssetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SnapMapAssetFactory;
	static C(Other: UObject | any): SnapMapAssetFactory;
}

declare class SnapMapEditorCallbackHandler extends DungeonEventListener { 
	static Load(ResourceName: string): SnapMapEditorCallbackHandler;
	static Find(Outer: UObject, ResourceName: string): SnapMapEditorCallbackHandler;
	static GetDefaultObject(): SnapMapEditorCallbackHandler;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SnapMapEditorCallbackHandler;
	static C(Other: UObject | any): SnapMapEditorCallbackHandler;
}

declare class FlowEditorDebugAppModeSettings extends UObject { 
	SpacingHorizontal: number;
	SpacingVertical: number;
	static Load(ResourceName: string): FlowEditorDebugAppModeSettings;
	static Find(Outer: UObject, ResourceName: string): FlowEditorDebugAppModeSettings;
	static GetDefaultObject(): FlowEditorDebugAppModeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FlowEditorDebugAppModeSettings;
	static C(Other: UObject | any): FlowEditorDebugAppModeSettings;
}

declare class SnapMapEdModeHandler extends DungeonEdModeHandler { 
	static Load(ResourceName: string): SnapMapEdModeHandler;
	static Find(Outer: UObject, ResourceName: string): SnapMapEdModeHandler;
	static GetDefaultObject(): SnapMapEdModeHandler;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SnapMapEdModeHandler;
	static C(Other: UObject | any): SnapMapEdModeHandler;
}

declare class SnapMapEdModeUISettings extends UObject { 
	bNeonVisuals: boolean;
	static Load(ResourceName: string): SnapMapEdModeUISettings;
	static Find(Outer: UObject, ResourceName: string): SnapMapEdModeUISettings;
	static GetDefaultObject(): SnapMapEdModeUISettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SnapMapEdModeUISettings;
	static C(Other: UObject | any): SnapMapEdModeUISettings;
}

declare class SnapMapModuleDBFactory extends Factory { 
	static Load(ResourceName: string): SnapMapModuleDBFactory;
	static Find(Outer: UObject, ResourceName: string): SnapMapModuleDBFactory;
	static GetDefaultObject(): SnapMapModuleDBFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SnapMapModuleDBFactory;
	static C(Other: UObject | any): SnapMapModuleDBFactory;
}

declare class SnapMapPerfEditorSettings extends UObject { 
	NumTests: number;
	MaxRetries: number;
	PassRetryThreshold: number;
	WarningRetryThreshold: number;
	GarbageCollectEveryNTests: number;
	ModuleDatabase: SnapMapModuleDatabase;
	bAllowModuleRotations: boolean;
	CollisionTestContraction: number;
	MaxProcessingTimeSecs: number;
	static Load(ResourceName: string): SnapMapPerfEditorSettings;
	static Find(Outer: UObject, ResourceName: string): SnapMapPerfEditorSettings;
	static GetDefaultObject(): SnapMapPerfEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SnapMapPerfEditorSettings;
	static C(Other: UObject | any): SnapMapPerfEditorSettings;
}

declare class ThemeEditorMarkerVisualizer extends Actor { 
	MeshComponent: DAProcMeshComponent;
	static GetDefaultObject(): ThemeEditorMarkerVisualizer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ThemeEditorMarkerVisualizer;
	static C(Other: UObject | any): ThemeEditorMarkerVisualizer;
}

declare class GridFlowTilemapEdGraphNode extends EdGraphNode { 
	PreviewTexture: Texture;
	static Load(ResourceName: string): GridFlowTilemapEdGraphNode;
	static Find(Outer: UObject, ResourceName: string): GridFlowTilemapEdGraphNode;
	static GetDefaultObject(): GridFlowTilemapEdGraphNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GridFlowTilemapEdGraphNode;
	static C(Other: UObject | any): GridFlowTilemapEdGraphNode;
}

declare class GridFlowTilemapEdGraph extends EdGraph { 
	PreviewNode: GridFlowTilemapEdGraphNode;
	static Load(ResourceName: string): GridFlowTilemapEdGraph;
	static Find(Outer: UObject, ResourceName: string): GridFlowTilemapEdGraph;
	static GetDefaultObject(): GridFlowTilemapEdGraph;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GridFlowTilemapEdGraph;
	static C(Other: UObject | any): GridFlowTilemapEdGraph;
}

declare class GridFlowTilemapEdGraphSchema extends EdGraphSchema { 
	static Load(ResourceName: string): GridFlowTilemapEdGraphSchema;
	static Find(Outer: UObject, ResourceName: string): GridFlowTilemapEdGraphSchema;
	static GetDefaultObject(): GridFlowTilemapEdGraphSchema;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GridFlowTilemapEdGraphSchema;
	static C(Other: UObject | any): GridFlowTilemapEdGraphSchema;
}

declare class EMSActorSaveInterface extends Interface { 
	static Load(ResourceName: string): EMSActorSaveInterface;
	static Find(Outer: UObject, ResourceName: string): EMSActorSaveInterface;
	static GetDefaultObject(): EMSActorSaveInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EMSActorSaveInterface;
	ComponentsToSave(Components?: ActorComponent[]): {Components: ActorComponent[]};
	ActorSaved(): void;
	ActorPreSave(): void;
	ActorLoaded(): void;
	static C(Other: UObject | any): EMSActorSaveInterface;
}

declare class EMSAsyncLoadGame extends BlueprintAsyncActionBase { 
	OnCompleted: UnrealEngineMulticastDelegate<() => void>;
	OnFailed: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): EMSAsyncLoadGame;
	static Find(Outer: UObject, ResourceName: string): EMSAsyncLoadGame;
	static GetDefaultObject(): EMSAsyncLoadGame;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EMSAsyncLoadGame;
	static AsyncLoadActors(WorldContextObject: UObject,Data: number,bFullReload: boolean): EMSAsyncLoadGame;
	static C(Other: UObject | any): EMSAsyncLoadGame;
}

declare class EMSAsyncSaveGame extends BlueprintAsyncActionBase { 
	OnCompleted: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): EMSAsyncSaveGame;
	static Find(Outer: UObject, ResourceName: string): EMSAsyncSaveGame;
	static GetDefaultObject(): EMSAsyncSaveGame;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EMSAsyncSaveGame;
	static AsyncSaveActors(WorldContextObject: UObject,Data: number): EMSAsyncSaveGame;
	static C(Other: UObject | any): EMSAsyncSaveGame;
}

declare type EAsyncCheckType = 'CT_Both' | 'CT_Save' | 'CT_Load' | 'CT_MAX';
declare var EAsyncCheckType : { CT_Both:'CT_Both',CT_Save:'CT_Save',CT_Load:'CT_Load',CT_MAX:'CT_MAX', };
declare class EMSAsyncWait extends BlueprintAsyncActionBase { 
	OnCompleted: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): EMSAsyncWait;
	static Find(Outer: UObject, ResourceName: string): EMSAsyncWait;
	static GetDefaultObject(): EMSAsyncWait;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EMSAsyncWait;
	static AsyncWaitForOperation(WorldContextObject: UObject,CheckType: EAsyncCheckType): EMSAsyncWait;
	static C(Other: UObject | any): EMSAsyncWait;
}

declare class EMSFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): EMSFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): EMSFunctionLibrary;
	static GetDefaultObject(): EMSFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EMSFunctionLibrary;
	static SetCurrentSaveUserName(WorldContextObject: UObject,UserName: string): void;
	static SetCurrentSaveGameName(WorldContextObject: UObject,SaveGameName: string): void;
	static SetActorSaveProperties(WorldContextObject: UObject,bSkipSave: boolean,bPersistent: boolean,bSkipTransform: boolean): void;
	static SaveCustom(WorldContextObject: UObject,SaveGame: EMSCustomSaveGame): boolean;
	static IsSavingOrLoading(WorldContextObject: UObject): boolean;
	static ImportSaveThumbnail(WorldContextObject: UObject,SaveGameName: string): Texture2D;
	static GetSortedSaveSlots(WorldContextObject: UObject): string[];
	static GetSlotInfoSaveGame(WorldContextObject: UObject,SaveGameName?: string): {SaveGameName: string, $: EMSInfoSaveGame};
	static GetNamedSlotInfo(WorldContextObject: UObject,SaveGameName: string): EMSInfoSaveGame;
	static GetCustomSave(WorldContextObject: UObject,SaveGameClass: UnrealEngineClass): EMSCustomSaveGame;
	static GetAllSaveUsers(WorldContextObject: UObject): string[];
	static ExportSaveThumbnail(WorldContextObject: UObject,TextureRenderTarget: TextureRenderTarget2D,SaveGameName: string): void;
	static DoesSaveSlotExist(WorldContextObject: UObject,SaveGameName: string): boolean;
	static DeleteSaveUser(WorldContextObject: UObject,UserName: string): void;
	static DeleteCustomSave(WorldContextObject: UObject,SaveGame: EMSCustomSaveGame): void;
	static DeleteAllSaveDataForSlot(WorldContextObject: UObject,SaveGameName: string): void;
	static C(Other: UObject | any): EMSFunctionLibrary;
}

declare class LevelArchive { 
	clone() : LevelArchive;
	static C(Other: UObject | any): LevelArchive;
}

declare class MultiLevelStreamingData { 
	clone() : MultiLevelStreamingData;
	static C(Other: UObject | any): MultiLevelStreamingData;
}

declare class PlayerStackArchive { 
	clone() : PlayerStackArchive;
	static C(Other: UObject | any): PlayerStackArchive;
}

declare class ActorSaveData { 
	clone() : ActorSaveData;
	static C(Other: UObject | any): ActorSaveData;
}

declare class LevelScriptSaveData { 
	clone() : LevelScriptSaveData;
	static C(Other: UObject | any): LevelScriptSaveData;
}

declare class GameObjectSaveData { 
	clone() : GameObjectSaveData;
	static C(Other: UObject | any): GameObjectSaveData;
}

declare class ControllerSaveData { 
	clone() : ControllerSaveData;
	static C(Other: UObject | any): ControllerSaveData;
}

declare class PawnSaveData { 
	clone() : PawnSaveData;
	static C(Other: UObject | any): PawnSaveData;
}

declare class EMSObject extends GameInstanceSubsystem { 
	CurrentSaveGameName: string;
	CurrentSaveUserName: string;
	CachedSlotInfoSave: EMSInfoSaveGame;
	CachedCustomSaves: any;
	ActorList: Actor[];
	LevelArchiveList: LevelArchive[];
	MultiLevelStreamData: MultiLevelStreamingData;
	PlayerStackData: PlayerStackArchive;
	SavedActors: ActorSaveData[];
	SavedScripts: LevelScriptSaveData[];
	SavedGameMode: GameObjectSaveData;
	SavedGameState: GameObjectSaveData;
	SavedController: ControllerSaveData;
	SavedPawn: PawnSaveData;
	SavedPlayerState: GameObjectSaveData;
	static Load(ResourceName: string): EMSObject;
	static Find(Outer: UObject, ResourceName: string): EMSObject;
	static GetDefaultObject(): EMSObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EMSObject;
	static C(Other: UObject | any): EMSObject;
}

declare type EFileSaveMethod = 'FM_Desktop' | 'FM_Console' | 'FM_MAX';
declare var EFileSaveMethod : { FM_Desktop:'FM_Desktop',FM_Console:'FM_Console',FM_MAX:'FM_MAX', };
declare type ELoadMethod = 'LM_Default' | 'LM_Deferred' | 'LM_Thread' | 'LM_MAX';
declare var ELoadMethod : { LM_Default:'LM_Default',LM_Deferred:'LM_Deferred',LM_Thread:'LM_Thread',LM_MAX:'LM_MAX', };
declare type EMultiLevelSaveMethod = 'ML_Disabled' | 'ML_Normal' | 'ML_Stream' | 'ML_Slow' | 'ML_MAX';
declare var EMultiLevelSaveMethod : { ML_Disabled:'ML_Disabled',ML_Normal:'ML_Normal',ML_Stream:'ML_Stream',ML_Slow:'ML_Slow',ML_MAX:'ML_MAX', };
declare class EMSPluginSettings extends UObject { 
	DefaultSaveGameName: string;
	SlotInfoSaveGameClass: SoftClassPath;
	FileSaveMethod: EFileSaveMethod;
	bAdvancedSpawnCheck: boolean;
	bSimpleActorNames: boolean;
	bAutoSaveStructs: boolean;
	bMultiThreadSaving: boolean;
	LoadMethod: ELoadMethod;
	DeferredLoadStackSize: number;
	AsyncWaitDelay: number;
	MultiLevelSaving: EMultiLevelSaveMethod;
	bPersistentPlayer: boolean;
	bPersistentGameMode: boolean;
	static Load(ResourceName: string): EMSPluginSettings;
	static Find(Outer: UObject, ResourceName: string): EMSPluginSettings;
	static GetDefaultObject(): EMSPluginSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EMSPluginSettings;
	static C(Other: UObject | any): EMSPluginSettings;
}

declare class AsyncLoadFailedPin__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): AsyncLoadFailedPin__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): AsyncLoadFailedPin__PythonCallable;
	static GetDefaultObject(): AsyncLoadFailedPin__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AsyncLoadFailedPin__PythonCallable;
	static C(Other: UObject | any): AsyncLoadFailedPin__PythonCallable;
}

declare class AsyncLoadOutputPin__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): AsyncLoadOutputPin__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): AsyncLoadOutputPin__PythonCallable;
	static GetDefaultObject(): AsyncLoadOutputPin__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AsyncLoadOutputPin__PythonCallable;
	static C(Other: UObject | any): AsyncLoadOutputPin__PythonCallable;
}

declare class AsyncSaveOutputPin__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): AsyncSaveOutputPin__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): AsyncSaveOutputPin__PythonCallable;
	static GetDefaultObject(): AsyncSaveOutputPin__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AsyncSaveOutputPin__PythonCallable;
	static C(Other: UObject | any): AsyncSaveOutputPin__PythonCallable;
}

declare class AsyncWaitOutputPin__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): AsyncWaitOutputPin__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): AsyncWaitOutputPin__PythonCallable;
	static GetDefaultObject(): AsyncWaitOutputPin__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AsyncWaitOutputPin__PythonCallable;
	static C(Other: UObject | any): AsyncWaitOutputPin__PythonCallable;
}

declare class OpenNewWindow extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): OpenNewWindow;
	static Find(Outer: UObject, ResourceName: string): OpenNewWindow;
	static GetDefaultObject(): OpenNewWindow;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OpenNewWindow;
	static OpenWindow(): Actor;
	static C(Other: UObject | any): OpenNewWindow;
}

declare class QuestTaskRequirement extends ActorComponent { 
	QuestTaskRequirementId: string;
	TextParams: string[];
	IntParams: number[];
	FloatParams: number[];
	BoolParams: boolean[];
	TransformParams: Transform[];
	VectorParams: Vector[];
	RequiredQuestTasks: UnrealEngineClass[];
	static Load(ResourceName: string): QuestTaskRequirement;
	static Find(Outer: UObject, ResourceName: string): QuestTaskRequirement;
	static GetDefaultObject(): QuestTaskRequirement;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QuestTaskRequirement;
	OnQuestTaskRequirementCheck(Owner: Actor,Result?: boolean,ParentQuest?: UnrealEngineClass,ParentTask?: UnrealEngineClass): {Result: boolean};
	static C(Other: UObject | any): QuestTaskRequirement;
}

declare class QuestReward extends ActorComponent { 
	QuestRewardId: string;
	TextParams: string[];
	IntParams: number[];
	FloatParams: number[];
	BoolParams: boolean[];
	TransformParams: Transform[];
	VectorParams: Vector[];
	static Load(ResourceName: string): QuestReward;
	static Find(Outer: UObject, ResourceName: string): QuestReward;
	static GetDefaultObject(): QuestReward;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QuestReward;
	OnQuestRewardAccepted(Owner: Actor,ParentQuest: UnrealEngineClass,ParentTask: UnrealEngineClass): void;
	static C(Other: UObject | any): QuestReward;
}

declare class QuestTask extends ActorComponent { 
	QuestTaskId: string;
	Title: string;
	ShortDescription: string;
	LongDescription: string;
	TextParams: string[];
	IntParams: number[];
	FloatParams: number[];
	BoolParams: boolean[];
	TransformParams: Transform[];
	VectorParams: Vector[];
	ProgressRequired: number;
	IsOptional: boolean;
	FailQuestWhenFailed: boolean;
	StartAvailableQuestTasksAfterCompletion: boolean;
	AcceptRewardOnComplete: boolean;
	CheckRequirementsBeforeStart: boolean;
	CheckRequirementsBeforeComplete: boolean;
	Requirements: UnrealEngineClass[];
	Rewards: UnrealEngineClass[];
	UseTimeLimit: boolean;
	ShouldFailIfTimeExceed: boolean;
	ShouldCompleteQuestIfTimeExceed: boolean;
	ShouldFailQuestIfTimeExceed: boolean;
	DisableProgressCheckOnCompletion: boolean;
	SecondsToComplete: number;
	static Load(ResourceName: string): QuestTask;
	static Find(Outer: UObject, ResourceName: string): QuestTask;
	static GetDefaultObject(): QuestTask;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QuestTask;
	OnQuestTaskStarted(Owner: Actor,ParentQuest: UnrealEngineClass): void;
	OnQuestTaskProgressChanged(Owner: Actor,ParentQuest: UnrealEngineClass,CurrentProgress: number): void;
	OnQuestTaskFailed(Owner: Actor,ParentQuest: UnrealEngineClass): void;
	OnQuestTaskCompleted(Owner: Actor,ParentQuest: UnrealEngineClass): void;
	static C(Other: UObject | any): QuestTask;
}

declare class QuestRequirement extends ActorComponent { 
	QuestRequirementId: string;
	TextParams: string[];
	IntParams: number[];
	FloatParams: number[];
	BoolParams: boolean[];
	TransformParams: Transform[];
	VectorParams: Vector[];
	RequiredQuests: UnrealEngineClass[];
	static Load(ResourceName: string): QuestRequirement;
	static Find(Outer: UObject, ResourceName: string): QuestRequirement;
	static GetDefaultObject(): QuestRequirement;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QuestRequirement;
	OnQuestRequirementCheck(Owner: Actor,Result?: boolean,ParentQuest?: UnrealEngineClass): {Result: boolean};
	static C(Other: UObject | any): QuestRequirement;
}

declare class Quest extends ActorComponent { 
	QuestId: string;
	Title: string;
	ShortDescription: string;
	LongDescription: string;
	TextParams: string[];
	IntParams: number[];
	FloatParams: number[];
	BoolParams: boolean[];
	TransformParams: Transform[];
	VectorParams: Vector[];
	IsRepeatable: boolean;
	CheckRequirementsBeforeAccept: boolean;
	CheckRequirementsBeforeComplete: boolean;
	CheckDelayBeforeRepeat: boolean;
	AcceptAllTaskRewardsOnComplete: boolean;
	RequiredAmountOfTasksToComplete: number;
	DelayBeforeRepeatInSeconds: number;
	MaxRepeatCount: number;
	UseTimeLimit: boolean;
	ShouldFailIfTimeExceed: boolean;
	SecondsToComplete: number;
	Tasks: UnrealEngineClass[];
	Requirements: UnrealEngineClass[];
	Rewards: UnrealEngineClass[];
	static Load(ResourceName: string): Quest;
	static Find(Outer: UObject, ResourceName: string): Quest;
	static GetDefaultObject(): Quest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Quest;
	OnQuestStarted(Owner: Actor): void;
	OnQuestFailed(Owner: Actor): void;
	OnQuestCompleted(Owner: Actor): void;
	static C(Other: UObject | any): Quest;
}

declare class BTDecorator_CanAcceptQuest extends BTDecorator { 
	QuestManager: BlackboardKeySelector;
	Quest: UnrealEngineClass;
	static Load(ResourceName: string): BTDecorator_CanAcceptQuest;
	static Find(Outer: UObject, ResourceName: string): BTDecorator_CanAcceptQuest;
	static GetDefaultObject(): BTDecorator_CanAcceptQuest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BTDecorator_CanAcceptQuest;
	static C(Other: UObject | any): BTDecorator_CanAcceptQuest;
}

declare class BTDecorator_CanAddProgressToTask extends BTDecorator { 
	QuestManager: BlackboardKeySelector;
	IsTaskProgressAdded: BlackboardKeySelector;
	Quest: UnrealEngineClass;
	QuestTask: UnrealEngineClass;
	ProgressLesserThan: number;
	static Load(ResourceName: string): BTDecorator_CanAddProgressToTask;
	static Find(Outer: UObject, ResourceName: string): BTDecorator_CanAddProgressToTask;
	static GetDefaultObject(): BTDecorator_CanAddProgressToTask;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BTDecorator_CanAddProgressToTask;
	static C(Other: UObject | any): BTDecorator_CanAddProgressToTask;
}

declare class BTDecorator_CanCompleteQuest extends BTDecorator { 
	QuestManager: BlackboardKeySelector;
	Quest: UnrealEngineClass;
	static Load(ResourceName: string): BTDecorator_CanCompleteQuest;
	static Find(Outer: UObject, ResourceName: string): BTDecorator_CanCompleteQuest;
	static GetDefaultObject(): BTDecorator_CanCompleteQuest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BTDecorator_CanCompleteQuest;
	static C(Other: UObject | any): BTDecorator_CanCompleteQuest;
}

declare class BTTask_AcceptQuest extends BTTaskNode { 
	QuestManager: BlackboardKeySelector;
	Quest: UnrealEngineClass;
	static Load(ResourceName: string): BTTask_AcceptQuest;
	static Find(Outer: UObject, ResourceName: string): BTTask_AcceptQuest;
	static GetDefaultObject(): BTTask_AcceptQuest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BTTask_AcceptQuest;
	static C(Other: UObject | any): BTTask_AcceptQuest;
}

declare class BTTask_AddProgressToQuestTask extends BTTaskNode { 
	QuestManager: BlackboardKeySelector;
	TaskProgressAdded: BlackboardKeySelector;
	Quest: UnrealEngineClass;
	QuestTask: UnrealEngineClass;
	ProgressToAdd: number;
	IsFailedOnCompletion: boolean;
	static Load(ResourceName: string): BTTask_AddProgressToQuestTask;
	static Find(Outer: UObject, ResourceName: string): BTTask_AddProgressToQuestTask;
	static GetDefaultObject(): BTTask_AddProgressToQuestTask;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BTTask_AddProgressToQuestTask;
	static C(Other: UObject | any): BTTask_AddProgressToQuestTask;
}

declare class BTTask_CompleteQuest extends BTTaskNode { 
	QuestManager: BlackboardKeySelector;
	Quest: UnrealEngineClass;
	IsFailed: boolean;
	static Load(ResourceName: string): BTTask_CompleteQuest;
	static Find(Outer: UObject, ResourceName: string): BTTask_CompleteQuest;
	static GetDefaultObject(): BTTask_CompleteQuest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BTTask_CompleteQuest;
	static C(Other: UObject | any): BTTask_CompleteQuest;
}

declare class QuestTaskRequirementInternal { 
	QuestTaskRequirement: UnrealEngineClass;
	IsCompleted: boolean;
	clone() : QuestTaskRequirementInternal;
	static C(Other: UObject | any): QuestTaskRequirementInternal;
}

declare class QuestRewardInternal { 
	QuestReward: UnrealEngineClass;
	IsRewardAccepted: boolean;
	clone() : QuestRewardInternal;
	static C(Other: UObject | any): QuestRewardInternal;
}

declare class QuestTaskInternal { 
	QuestTask: UnrealEngineClass;
	Requirements: QuestTaskRequirementInternal[];
	Rewards: QuestRewardInternal[];
	IsCompleted: boolean;
	IsStarted: boolean;
	IsActive: boolean;
	IsFailed: boolean;
	CurrentProgress: number;
	SecondsRemaining: number;
	clone() : QuestTaskInternal;
	static C(Other: UObject | any): QuestTaskInternal;
}

declare class QuestRequirementInternal { 
	QuestRequirement: UnrealEngineClass;
	IsCompleted: boolean;
	clone() : QuestRequirementInternal;
	static C(Other: UObject | any): QuestRequirementInternal;
}

declare class QuestInternal { 
	Quest: UnrealEngineClass;
	Tasks: QuestTaskInternal[];
	Requirements: QuestRequirementInternal[];
	Rewards: QuestRewardInternal[];
	IsCompleted: boolean;
	IsFailed: boolean;
	IsAccepted: boolean;
	IsActive: boolean;
	RepeatedCount: number;
	SecondsRemaining: number;
	CompletedAt: DateTime;
	clone() : QuestInternal;
	static C(Other: UObject | any): QuestInternal;
}

declare class QuestManager extends ActorComponent { 
	Quests: QuestInternal[];
	QuestRewardAcceptedEvent: UnrealEngineMulticastDelegate<(QuestReward: UnrealEngineClass, ParentQuest: UnrealEngineClass, ParentTask: UnrealEngineClass) => void>;
	QuestRequirementCheckEvent: UnrealEngineMulticastDelegate<(QuestRequirement: UnrealEngineClass, ParentQuest: UnrealEngineClass) => void>;
	QuestTaskRequirementCheckEvent: UnrealEngineMulticastDelegate<(QuestTaskRequirement: UnrealEngineClass, ParentQuest: UnrealEngineClass, ParentTask: UnrealEngineClass) => void>;
	QuestTaskStartedEvent: UnrealEngineMulticastDelegate<(Quest: UnrealEngineClass, Task: UnrealEngineClass) => void>;
	QuestTaskCompletedEvent: UnrealEngineMulticastDelegate<(Quest: UnrealEngineClass, Task: UnrealEngineClass) => void>;
	QuestTaskFailedEvent: UnrealEngineMulticastDelegate<(Quest: UnrealEngineClass, Task: UnrealEngineClass) => void>;
	QuestTaskProgressChangedEvent: UnrealEngineMulticastDelegate<(Quest: UnrealEngineClass, Task: UnrealEngineClass) => void>;
	QuestStartedEvent: UnrealEngineMulticastDelegate<(Quest: UnrealEngineClass) => void>;
	QuestCompletedEvent: UnrealEngineMulticastDelegate<(Quest: UnrealEngineClass) => void>;
	QuestFailedEvent: UnrealEngineMulticastDelegate<(Quest: UnrealEngineClass) => void>;
	DestroyInstancesAfterOperation: boolean;
	static Load(ResourceName: string): QuestManager;
	static Find(Outer: UObject, ResourceName: string): QuestManager;
	static GetDefaultObject(): QuestManager;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QuestManager;
	UpdateQuestTaskRemainingSeconds(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass,Seconds: number): void;
	UpdateQuestRemainingSecondsOnClient(Quest: UnrealEngineClass,Seconds: number): void;
	StartQuestTask(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass): void;
	StartAvailableQuestTasks(Quest: UnrealEngineClass): void;
	SetActiveQuest(Quest: UnrealEngineClass): void;
	ServerStartQuestTask(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass): void;
	ServerStartAvailableQuestTasks(Quest: UnrealEngineClass): void;
	ServerResetQuestManager(): void;
	ServerRemoveDynamicRewardFromQuestTask(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass,QuestTaskReward: UnrealEngineClass): void;
	ServerRemoveDynamicRewardFromQuest(Quest: UnrealEngineClass,QuestReward: UnrealEngineClass): void;
	ServerRemoveDynamicRequirementFromQuestTask(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass,QuestTaskRequirement: UnrealEngineClass): void;
	ServerRemoveDynamicRequirementFromQuest(Quest: UnrealEngineClass,QuestRequirement: UnrealEngineClass): void;
	ServerRemoveDynamicQuestTaskFromQuest(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass): void;
	ServerLoadQuests(QuestsToLoad: QuestInternal[]): void;
	ServerDropQuest(Quest: UnrealEngineClass): void;
	ServerDestroyQuestSystemTemporaryInstances(): void;
	ServerCompleteQuestTask(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass,IsFailed: boolean): void;
	ServerCompleteQuest(Quest: UnrealEngineClass,IsFailed: boolean): void;
	ServerAddQuestTaskProgress(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass,Progress: number): void;
	ServerAddDynamicRewardToQuestTask(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass,QuestTaskReward: UnrealEngineClass): void;
	ServerAddDynamicRewardToQuest(Quest: UnrealEngineClass,QuestReward: UnrealEngineClass): void;
	ServerAddDynamicRequirementToQuestTask(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass,QuestTaskRequirement: UnrealEngineClass): void;
	ServerAddDynamicRequirementToQuest(Quest: UnrealEngineClass,QuestRequirement: UnrealEngineClass): void;
	ServerAddDynamicQuestTaskToQuest(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass,StartDynamicQuestTaskImmediately: boolean): void;
	ServerAcceptReward(QuestReward: UnrealEngineClass): void;
	ServerAcceptQuest(Quest: UnrealEngineClass,SetAsActiveQuest: boolean): void;
	ServerAcceptAllQuestRewards(Quest: UnrealEngineClass): void;
	RunQuestTimer(Quest: UnrealEngineClass,QuestTimerHandle: TimerHandle): void;
	RunQuestTaskTimer(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass,QuestTimerHandle: TimerHandle): void;
	ResetQuestManager(): void;
	RemoveDynamicRewardFromQuestTask(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass,QuestTaskReward: UnrealEngineClass): void;
	RemoveDynamicRewardFromQuest(Quest: UnrealEngineClass,QuestReward: UnrealEngineClass): void;
	RemoveDynamicRequirementFromQuestTask(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass,QuestTaskRequirement: UnrealEngineClass): void;
	RemoveDynamicRequirementFromQuest(Quest: UnrealEngineClass,QuestRequirement: UnrealEngineClass): void;
	RemoveDynamicQuestTaskFromQuest(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass): void;
	RemoveActiveQuest(Quest: UnrealEngineClass): void;
	LoadQuests(QuestsToLoad: QuestInternal[]): void;
	IsQuestTaskFailed(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass): boolean;
	IsQuestTaskCompleted(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass): boolean;
	IsQuestTaskAvailable(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass): boolean;
	IsQuestFailed(Quest: UnrealEngineClass): boolean;
	IsQuestCompleted(Quest: UnrealEngineClass): boolean;
	IsQuestAccepted(Quest: UnrealEngineClass): boolean;
	IsAllQuestTasksCompleted(Quest: UnrealEngineClass): boolean;
	GetQuestTaskSecondsRemaining(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass): number;
	GetQuestTaskRewards(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass): UnrealEngineClass[];
	GetQuestTaskRequirements(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass): UnrealEngineClass[];
	GetQuestTaskCurrentProgress(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass): number;
	GetQuestsForSave(): QuestInternal[];
	GetQuestSecondsRemaining(Quest: UnrealEngineClass): number;
	GetQuestRewards(Quest: UnrealEngineClass): UnrealEngineClass[];
	GetQuestRequirements(Quest: UnrealEngineClass): UnrealEngineClass[];
	GetFailedQuests(): UnrealEngineClass[];
	GetExistingQuestTaskById(Quest: UnrealEngineClass,QuestTaskId: string): UnrealEngineClass;
	GetCompletedQuests(): UnrealEngineClass[];
	GetAvailableQuestTasks(Quest: UnrealEngineClass): UnrealEngineClass[];
	GetAllQuestTasks(Quest: UnrealEngineClass): UnrealEngineClass[];
	GetActiveQuests(): UnrealEngineClass[];
	GetActiveQuest(): UnrealEngineClass;
	GetAcceptedQuests(): UnrealEngineClass[];
	GetAcceptedQuestById(QuestId: string): UnrealEngineClass;
	DropQuest(Quest: UnrealEngineClass): void;
	DestroyQuestSystemTemporaryInstances(): void;
	CompleteQuestTask(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass,IsFailed: boolean): void;
	CompleteQuest(Quest: UnrealEngineClass,IsFailed: boolean): void;
	ClientUpdateQuestTaskRemainingSeconds(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass,Seconds: number): void;
	ClientUpdateQuestRemainingSecondsOnClient(Quest: UnrealEngineClass,Seconds: number): void;
	CheckQuestTaskRequirements(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass): boolean;
	CheckQuestTaskRequirement(Quest: UnrealEngineClass,QuestTaskRequirement: UnrealEngineClass): boolean;
	CheckQuestRequirements(Quest: UnrealEngineClass): boolean;
	CheckQuestRequirement(QuestRequirement: UnrealEngineClass): boolean;
	CheckDynamicQuestTaskRequirements(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass): boolean;
	CheckDynamicQuestRequirements(Quest: UnrealEngineClass): boolean;
	AddQuestTaskProgress(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass,Progress: number): void;
	AddDynamicRewardToQuestTask(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass,QuestTaskReward: UnrealEngineClass): void;
	AddDynamicRewardToQuest(Quest: UnrealEngineClass,QuestReward: UnrealEngineClass): void;
	AddDynamicRequirementToQuestTask(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass,QuestTaskRequirement: UnrealEngineClass): void;
	AddDynamicRequirementToQuest(Quest: UnrealEngineClass,QuestRequirement: UnrealEngineClass): void;
	AddDynamicQuestTaskToQuest(Quest: UnrealEngineClass,QuestTask: UnrealEngineClass,StartDynamicQuestTaskImmediately: boolean): void;
	AddActiveQuest(Quest: UnrealEngineClass): void;
	AcceptReward(QuestReward: UnrealEngineClass): void;
	AcceptQuest(Quest: UnrealEngineClass,SetAsActiveQuest: boolean): void;
	AcceptAllQuestRewards(Quest: UnrealEngineClass): void;
	static C(Other: UObject | any): QuestManager;
}

declare class QuestCompletedDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): QuestCompletedDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): QuestCompletedDelegate__PythonCallable;
	static GetDefaultObject(): QuestCompletedDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QuestCompletedDelegate__PythonCallable;
	static C(Other: UObject | any): QuestCompletedDelegate__PythonCallable;
}

declare class QuestFailedDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): QuestFailedDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): QuestFailedDelegate__PythonCallable;
	static GetDefaultObject(): QuestFailedDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QuestFailedDelegate__PythonCallable;
	static C(Other: UObject | any): QuestFailedDelegate__PythonCallable;
}

declare class QuestRequirementCheckDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): QuestRequirementCheckDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): QuestRequirementCheckDelegate__PythonCallable;
	static GetDefaultObject(): QuestRequirementCheckDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QuestRequirementCheckDelegate__PythonCallable;
	static C(Other: UObject | any): QuestRequirementCheckDelegate__PythonCallable;
}

declare class QuestRewardAcceptedDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): QuestRewardAcceptedDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): QuestRewardAcceptedDelegate__PythonCallable;
	static GetDefaultObject(): QuestRewardAcceptedDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QuestRewardAcceptedDelegate__PythonCallable;
	static C(Other: UObject | any): QuestRewardAcceptedDelegate__PythonCallable;
}

declare class QuestStartedDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): QuestStartedDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): QuestStartedDelegate__PythonCallable;
	static GetDefaultObject(): QuestStartedDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QuestStartedDelegate__PythonCallable;
	static C(Other: UObject | any): QuestStartedDelegate__PythonCallable;
}

declare class QuestTaskCompletedDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): QuestTaskCompletedDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): QuestTaskCompletedDelegate__PythonCallable;
	static GetDefaultObject(): QuestTaskCompletedDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QuestTaskCompletedDelegate__PythonCallable;
	static C(Other: UObject | any): QuestTaskCompletedDelegate__PythonCallable;
}

declare class QuestTaskFailedDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): QuestTaskFailedDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): QuestTaskFailedDelegate__PythonCallable;
	static GetDefaultObject(): QuestTaskFailedDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QuestTaskFailedDelegate__PythonCallable;
	static C(Other: UObject | any): QuestTaskFailedDelegate__PythonCallable;
}

declare class QuestTaskProgressChangedDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): QuestTaskProgressChangedDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): QuestTaskProgressChangedDelegate__PythonCallable;
	static GetDefaultObject(): QuestTaskProgressChangedDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QuestTaskProgressChangedDelegate__PythonCallable;
	static C(Other: UObject | any): QuestTaskProgressChangedDelegate__PythonCallable;
}

declare class QuestTaskRequirementCheckDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): QuestTaskRequirementCheckDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): QuestTaskRequirementCheckDelegate__PythonCallable;
	static GetDefaultObject(): QuestTaskRequirementCheckDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QuestTaskRequirementCheckDelegate__PythonCallable;
	static C(Other: UObject | any): QuestTaskRequirementCheckDelegate__PythonCallable;
}

declare class QuestTaskStartedDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): QuestTaskStartedDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): QuestTaskStartedDelegate__PythonCallable;
	static GetDefaultObject(): QuestTaskStartedDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QuestTaskStartedDelegate__PythonCallable;
	static C(Other: UObject | any): QuestTaskStartedDelegate__PythonCallable;
}

declare class MovieSceneBindingExtensions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MovieSceneBindingExtensions;
	static Find(Outer: UObject, ResourceName: string): MovieSceneBindingExtensions;
	static GetDefaultObject(): MovieSceneBindingExtensions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneBindingExtensions;
	static SetParent(InBinding: SequencerBindingProxy,InParentBinding: SequencerBindingProxy): void;
	static SetName(InBinding: SequencerBindingProxy,InName: string): void;
	static SetDisplayName(InBinding: SequencerBindingProxy,InDisplayName: string): void;
	static RemoveTrack(InBinding: SequencerBindingProxy,TrackToRemove: MovieSceneTrack): void;
	static Remove(InBinding: SequencerBindingProxy): void;
	static MoveBindingContents(SourceBindingId: SequencerBindingProxy,DestinationBindingId: SequencerBindingProxy): void;
	static IsValid(InBinding: SequencerBindingProxy): boolean;
	static GetTracks(InBinding: SequencerBindingProxy): MovieSceneTrack[];
	static GetPossessedObjectClass(InBinding: SequencerBindingProxy): UnrealEngineClass;
	static GetParent(InBinding: SequencerBindingProxy): SequencerBindingProxy;
	static GetObjectTemplate(InBinding: SequencerBindingProxy): UObject;
	static GetName(InBinding: SequencerBindingProxy): string;
	static GetId(InBinding: SequencerBindingProxy): Guid;
	static GetDisplayName(InBinding: SequencerBindingProxy): string;
	static GetChildPossessables(InBinding: SequencerBindingProxy): SequencerBindingProxy[];
	static FindTracksByType(InBinding: SequencerBindingProxy,TrackType: UnrealEngineClass): MovieSceneTrack[];
	static FindTracksByExactType(InBinding: SequencerBindingProxy,TrackType: UnrealEngineClass): MovieSceneTrack[];
	static AddTrack(InBinding: SequencerBindingProxy,TrackType: UnrealEngineClass): MovieSceneTrack;
	static C(Other: UObject | any): MovieSceneBindingExtensions;
}

declare class MovieSceneEventTrackExtensions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MovieSceneEventTrackExtensions;
	static Find(Outer: UObject, ResourceName: string): MovieSceneEventTrackExtensions;
	static GetDefaultObject(): MovieSceneEventTrackExtensions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneEventTrackExtensions;
	static GetBoundObjectPropertyClass(EventKey: MovieSceneEvent): UnrealEngineClass;
	static AddEventTriggerSection(InTrack: MovieSceneEventTrack): MovieSceneEventTriggerSection;
	static AddEventRepeaterSection(InTrack: MovieSceneEventTrack): MovieSceneEventRepeaterSection;
	static C(Other: UObject | any): MovieSceneEventTrackExtensions;
}

declare class MovieSceneFolderExtensions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MovieSceneFolderExtensions;
	static Find(Outer: UObject, ResourceName: string): MovieSceneFolderExtensions;
	static GetDefaultObject(): MovieSceneFolderExtensions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneFolderExtensions;
	static SetFolderName(Folder: MovieSceneFolder,InFolderName: string): boolean;
	static SetFolderColor(Folder: MovieSceneFolder,InFolderColor: Color): boolean;
	static RemoveChildObjectBinding(Folder: MovieSceneFolder,InObjectBinding: SequencerBindingProxy): boolean;
	static RemoveChildMasterTrack(Folder: MovieSceneFolder,InMasterTrack: MovieSceneTrack): boolean;
	static RemoveChildFolder(TargetFolder: MovieSceneFolder,FolderToRemove: MovieSceneFolder): boolean;
	static GetFolderName(Folder: MovieSceneFolder): string;
	static GetFolderColor(Folder: MovieSceneFolder): Color;
	static GetChildObjectBindings(Folder: MovieSceneFolder): SequencerBindingProxy[];
	static GetChildMasterTracks(Folder: MovieSceneFolder): MovieSceneTrack[];
	static GetChildFolders(Folder: MovieSceneFolder): MovieSceneFolder[];
	static AddChildObjectBinding(Folder: MovieSceneFolder,InObjectBinding: SequencerBindingProxy): boolean;
	static AddChildMasterTrack(Folder: MovieSceneFolder,InMasterTrack: MovieSceneTrack): boolean;
	static AddChildFolder(TargetFolder: MovieSceneFolder,FolderToAdd: MovieSceneFolder): boolean;
	static C(Other: UObject | any): MovieSceneFolderExtensions;
}

declare class MovieScenePropertyTrackExtensions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MovieScenePropertyTrackExtensions;
	static Find(Outer: UObject, ResourceName: string): MovieScenePropertyTrackExtensions;
	static GetDefaultObject(): MovieScenePropertyTrackExtensions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieScenePropertyTrackExtensions;
	static SetPropertyNameAndPath(Track: MovieScenePropertyTrack,InPropertyName: string,InPropertyPath: string): void;
	static SetObjectPropertyClass(Track: MovieSceneObjectPropertyTrack,PropertyClass: UnrealEngineClass): void;
	static GetUniqueTrackName(Track: MovieScenePropertyTrack): string;
	static GetPropertyPath(Track: MovieScenePropertyTrack): string;
	static GetPropertyName(Track: MovieScenePropertyTrack): string;
	static GetObjectPropertyClass(Track: MovieSceneObjectPropertyTrack): UnrealEngineClass;
	static C(Other: UObject | any): MovieScenePropertyTrackExtensions;
}

declare class MovieSceneScriptingKey extends UObject { 
	static Load(ResourceName: string): MovieSceneScriptingKey;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingKey;
	static GetDefaultObject(): MovieSceneScriptingKey;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingKey;
	static C(Other: UObject | any): MovieSceneScriptingKey;
}

declare type ESequenceTimeUnit = 'DisplayRate' | 'TickResolution' | 'ESequenceTimeUnit_MAX';
declare var ESequenceTimeUnit : { DisplayRate:'DisplayRate',TickResolution:'TickResolution',ESequenceTimeUnit_MAX:'ESequenceTimeUnit_MAX', };
declare class MovieSceneScriptingActorReferenceKey extends MovieSceneScriptingKey { 
	static Load(ResourceName: string): MovieSceneScriptingActorReferenceKey;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingActorReferenceKey;
	static GetDefaultObject(): MovieSceneScriptingActorReferenceKey;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingActorReferenceKey;
	SetValue(InNewValue: MovieSceneObjectBindingID): void;
	SetTime(NewFrameNumber: FrameNumber,SubFrame: number,TimeUnit: ESequenceTimeUnit): void;
	GetValue(): MovieSceneObjectBindingID;
	GetTime(TimeUnit: ESequenceTimeUnit): FrameTime;
	static C(Other: UObject | any): MovieSceneScriptingActorReferenceKey;
}

declare class MovieSceneScriptingActorReferenceChannel extends MovieSceneScriptingChannel { 
	static Load(ResourceName: string): MovieSceneScriptingActorReferenceChannel;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingActorReferenceChannel;
	static GetDefaultObject(): MovieSceneScriptingActorReferenceChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingActorReferenceChannel;
	SetDefault(InDefaultValue: MovieSceneObjectBindingID): void;
	RemoveKey(Key: MovieSceneScriptingKey): void;
	RemoveDefault(): void;
	HasDefault(): boolean;
	GetKeys(): MovieSceneScriptingKey[];
	GetDefault(): MovieSceneObjectBindingID;
	AddKey(InTime: FrameNumber,NewValue: MovieSceneObjectBindingID,SubFrame: number,TimeUnit: ESequenceTimeUnit): MovieSceneScriptingActorReferenceKey;
	static C(Other: UObject | any): MovieSceneScriptingActorReferenceChannel;
}

declare class MovieSceneScriptingBoolKey extends MovieSceneScriptingKey { 
	static Load(ResourceName: string): MovieSceneScriptingBoolKey;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingBoolKey;
	static GetDefaultObject(): MovieSceneScriptingBoolKey;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingBoolKey;
	SetValue(InNewValue: boolean): void;
	SetTime(NewFrameNumber: FrameNumber,SubFrame: number,TimeUnit: ESequenceTimeUnit): void;
	GetValue(): boolean;
	GetTime(TimeUnit: ESequenceTimeUnit): FrameTime;
	static C(Other: UObject | any): MovieSceneScriptingBoolKey;
}

declare class MovieSceneScriptingBoolChannel extends MovieSceneScriptingChannel { 
	static Load(ResourceName: string): MovieSceneScriptingBoolChannel;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingBoolChannel;
	static GetDefaultObject(): MovieSceneScriptingBoolChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingBoolChannel;
	SetDefault(InDefaultValue: boolean): void;
	RemoveKey(Key: MovieSceneScriptingKey): void;
	RemoveDefault(): void;
	HasDefault(): boolean;
	GetNumKeys(): number;
	GetKeys(): MovieSceneScriptingKey[];
	GetDefault(): boolean;
	EvaluateKeys(Range: SequencerScriptingRange,FrameRate: FrameRate): boolean[];
	ComputeEffectiveRange(): SequencerScriptingRange;
	AddKey(InTime: FrameNumber,NewValue: boolean,SubFrame: number,TimeUnit: ESequenceTimeUnit): MovieSceneScriptingBoolKey;
	static C(Other: UObject | any): MovieSceneScriptingBoolChannel;
}

declare class MovieSceneScriptingByteKey extends MovieSceneScriptingKey { 
	static Load(ResourceName: string): MovieSceneScriptingByteKey;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingByteKey;
	static GetDefaultObject(): MovieSceneScriptingByteKey;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingByteKey;
	SetValue(InNewValue: number): void;
	SetTime(NewFrameNumber: FrameNumber,SubFrame: number,TimeUnit: ESequenceTimeUnit): void;
	GetValue(): number;
	GetTime(TimeUnit: ESequenceTimeUnit): FrameTime;
	static C(Other: UObject | any): MovieSceneScriptingByteKey;
}

declare class MovieSceneScriptingByteChannel extends MovieSceneScriptingChannel { 
	static Load(ResourceName: string): MovieSceneScriptingByteChannel;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingByteChannel;
	static GetDefaultObject(): MovieSceneScriptingByteChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingByteChannel;
	SetDefault(InDefaultValue: number): void;
	RemoveKey(Key: MovieSceneScriptingKey): void;
	RemoveDefault(): void;
	HasDefault(): boolean;
	GetKeys(): MovieSceneScriptingKey[];
	GetDefault(): number;
	AddKey(InTime: FrameNumber,NewValue: number,SubFrame: number,TimeUnit: ESequenceTimeUnit,InInterpolation: EMovieSceneKeyInterpolation): MovieSceneScriptingByteKey;
	static C(Other: UObject | any): MovieSceneScriptingByteChannel;
}

declare class MovieSceneScriptingDoubleKey extends MovieSceneScriptingKey { 
	static Load(ResourceName: string): MovieSceneScriptingDoubleKey;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingDoubleKey;
	static GetDefaultObject(): MovieSceneScriptingDoubleKey;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingDoubleKey;
	SetValue(InNewValue: any): void;
	SetTime(NewFrameNumber: FrameNumber,SubFrame: number,TimeUnit: ESequenceTimeUnit): void;
	SetTangentWeightMode(InNewValue: ERichCurveTangentWeightMode): void;
	SetTangentMode(InNewValue: ERichCurveTangentMode): void;
	SetLeaveTangentWeight(InNewValue: number): void;
	SetLeaveTangent(InNewValue: number): void;
	SetInterpolationMode(InNewValue: ERichCurveInterpMode): void;
	SetArriveTangentWeight(InNewValue: number): void;
	SetArriveTangent(InNewValue: number): void;
	GetValue(): any;
	GetTime(TimeUnit: ESequenceTimeUnit): FrameTime;
	GetTangentWeightMode(): ERichCurveTangentWeightMode;
	GetTangentMode(): ERichCurveTangentMode;
	GetLeaveTangentWeight(): number;
	GetLeaveTangent(): number;
	GetInterpolationMode(): ERichCurveInterpMode;
	GetArriveTangentWeight(): number;
	GetArriveTangent(): number;
	static C(Other: UObject | any): MovieSceneScriptingDoubleKey;
}

declare class MovieSceneScriptingDoubleChannel extends MovieSceneScriptingChannel { 
	static Load(ResourceName: string): MovieSceneScriptingDoubleChannel;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingDoubleChannel;
	static GetDefaultObject(): MovieSceneScriptingDoubleChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingDoubleChannel;
	SetPreInfinityExtrapolation(InExtrapolation: ERichCurveExtrapolation): void;
	SetPostInfinityExtrapolation(InExtrapolation: ERichCurveExtrapolation): void;
	SetDefault(InDefaultValue: any): void;
	RemoveKey(Key: MovieSceneScriptingKey): void;
	RemoveDefault(): void;
	HasDefault(): boolean;
	GetPreInfinityExtrapolation(): ERichCurveExtrapolation;
	GetPostInfinityExtrapolation(): ERichCurveExtrapolation;
	GetNumKeys(): number;
	GetKeys(): MovieSceneScriptingKey[];
	GetDefault(): any;
	EvaluateKeys(Range: SequencerScriptingRange,FrameRate: FrameRate): any[];
	ComputeEffectiveRange(): SequencerScriptingRange;
	AddKey(InTime: FrameNumber,NewValue: any,SubFrame: number,TimeUnit: ESequenceTimeUnit,InInterpolation: EMovieSceneKeyInterpolation): MovieSceneScriptingDoubleKey;
	static C(Other: UObject | any): MovieSceneScriptingDoubleChannel;
}

declare class MovieSceneScriptingEventKey extends MovieSceneScriptingKey { 
	static Load(ResourceName: string): MovieSceneScriptingEventKey;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingEventKey;
	static GetDefaultObject(): MovieSceneScriptingEventKey;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingEventKey;
	SetValue(InNewValue: MovieSceneEvent): void;
	SetTime(NewFrameNumber: FrameNumber,SubFrame: number,TimeUnit: ESequenceTimeUnit): void;
	GetValue(): MovieSceneEvent;
	GetTime(TimeUnit: ESequenceTimeUnit): FrameTime;
	static C(Other: UObject | any): MovieSceneScriptingEventKey;
}

declare class MovieSceneScriptingEventChannel extends MovieSceneScriptingChannel { 
	static Load(ResourceName: string): MovieSceneScriptingEventChannel;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingEventChannel;
	static GetDefaultObject(): MovieSceneScriptingEventChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingEventChannel;
	RemoveKey(Key: MovieSceneScriptingKey): void;
	GetKeys(): MovieSceneScriptingKey[];
	AddKey(InTime: FrameNumber,NewValue: MovieSceneEvent,SubFrame: number,TimeUnit: ESequenceTimeUnit): MovieSceneScriptingEventKey;
	static C(Other: UObject | any): MovieSceneScriptingEventChannel;
}

declare class MovieSceneScriptingFloatKey extends MovieSceneScriptingKey { 
	static Load(ResourceName: string): MovieSceneScriptingFloatKey;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingFloatKey;
	static GetDefaultObject(): MovieSceneScriptingFloatKey;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingFloatKey;
	SetValue(InNewValue: number): void;
	SetTime(NewFrameNumber: FrameNumber,SubFrame: number,TimeUnit: ESequenceTimeUnit): void;
	SetTangentWeightMode(InNewValue: ERichCurveTangentWeightMode): void;
	SetTangentMode(InNewValue: ERichCurveTangentMode): void;
	SetLeaveTangentWeight(InNewValue: number): void;
	SetLeaveTangent(InNewValue: number): void;
	SetInterpolationMode(InNewValue: ERichCurveInterpMode): void;
	SetArriveTangentWeight(InNewValue: number): void;
	SetArriveTangent(InNewValue: number): void;
	GetValue(): number;
	GetTime(TimeUnit: ESequenceTimeUnit): FrameTime;
	GetTangentWeightMode(): ERichCurveTangentWeightMode;
	GetTangentMode(): ERichCurveTangentMode;
	GetLeaveTangentWeight(): number;
	GetLeaveTangent(): number;
	GetInterpolationMode(): ERichCurveInterpMode;
	GetArriveTangentWeight(): number;
	GetArriveTangent(): number;
	static C(Other: UObject | any): MovieSceneScriptingFloatKey;
}

declare class MovieSceneScriptingActualFloatKey extends MovieSceneScriptingFloatKey { 
	static Load(ResourceName: string): MovieSceneScriptingActualFloatKey;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingActualFloatKey;
	static GetDefaultObject(): MovieSceneScriptingActualFloatKey;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingActualFloatKey;
	static C(Other: UObject | any): MovieSceneScriptingActualFloatKey;
}

declare class MovieSceneScriptingDoubleAsFloatKey extends MovieSceneScriptingFloatKey { 
	static Load(ResourceName: string): MovieSceneScriptingDoubleAsFloatKey;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingDoubleAsFloatKey;
	static GetDefaultObject(): MovieSceneScriptingDoubleAsFloatKey;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingDoubleAsFloatKey;
	static C(Other: UObject | any): MovieSceneScriptingDoubleAsFloatKey;
}

declare class MovieSceneScriptingFloatChannel extends MovieSceneScriptingChannel { 
	static Load(ResourceName: string): MovieSceneScriptingFloatChannel;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingFloatChannel;
	static GetDefaultObject(): MovieSceneScriptingFloatChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingFloatChannel;
	SetPreInfinityExtrapolation(InExtrapolation: ERichCurveExtrapolation): void;
	SetPostInfinityExtrapolation(InExtrapolation: ERichCurveExtrapolation): void;
	SetDefault(InDefaultValue: number): void;
	RemoveKey(Key: MovieSceneScriptingKey): void;
	RemoveDefault(): void;
	HasDefault(): boolean;
	GetPreInfinityExtrapolation(): ERichCurveExtrapolation;
	GetPostInfinityExtrapolation(): ERichCurveExtrapolation;
	GetNumKeys(): number;
	GetKeys(): MovieSceneScriptingKey[];
	GetDefault(): number;
	EvaluateKeys(Range: SequencerScriptingRange,FrameRate: FrameRate): number[];
	ComputeEffectiveRange(): SequencerScriptingRange;
	AddKey(InTime: FrameNumber,NewValue: number,SubFrame: number,TimeUnit: ESequenceTimeUnit,InInterpolation: EMovieSceneKeyInterpolation): MovieSceneScriptingFloatKey;
	static C(Other: UObject | any): MovieSceneScriptingFloatChannel;
}

declare class MovieSceneScriptingIntegerKey extends MovieSceneScriptingKey { 
	static Load(ResourceName: string): MovieSceneScriptingIntegerKey;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingIntegerKey;
	static GetDefaultObject(): MovieSceneScriptingIntegerKey;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingIntegerKey;
	SetValue(InNewValue: number): void;
	SetTime(NewFrameNumber: FrameNumber,SubFrame: number,TimeUnit: ESequenceTimeUnit): void;
	GetValue(): number;
	GetTime(TimeUnit: ESequenceTimeUnit): FrameTime;
	static C(Other: UObject | any): MovieSceneScriptingIntegerKey;
}

declare class MovieSceneScriptingIntegerChannel extends MovieSceneScriptingChannel { 
	static Load(ResourceName: string): MovieSceneScriptingIntegerChannel;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingIntegerChannel;
	static GetDefaultObject(): MovieSceneScriptingIntegerChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingIntegerChannel;
	SetDefault(InDefaultValue: number): void;
	RemoveKey(Key: MovieSceneScriptingKey): void;
	RemoveDefault(): void;
	HasDefault(): boolean;
	GetKeys(): MovieSceneScriptingKey[];
	GetDefault(): number;
	AddKey(InTime: FrameNumber,NewValue: number,SubFrame: number,TimeUnit: ESequenceTimeUnit): MovieSceneScriptingIntegerKey;
	static C(Other: UObject | any): MovieSceneScriptingIntegerChannel;
}

declare class MovieSceneScriptingObjectPathKey extends MovieSceneScriptingKey { 
	static Load(ResourceName: string): MovieSceneScriptingObjectPathKey;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingObjectPathKey;
	static GetDefaultObject(): MovieSceneScriptingObjectPathKey;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingObjectPathKey;
	SetValue(InNewValue: UObject): void;
	SetTime(NewFrameNumber: FrameNumber,SubFrame: number,TimeUnit: ESequenceTimeUnit): void;
	GetValue(): UObject;
	GetTime(TimeUnit: ESequenceTimeUnit): FrameTime;
	static C(Other: UObject | any): MovieSceneScriptingObjectPathKey;
}

declare class MovieSceneScriptingObjectPathChannel extends MovieSceneScriptingChannel { 
	static Load(ResourceName: string): MovieSceneScriptingObjectPathChannel;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingObjectPathChannel;
	static GetDefaultObject(): MovieSceneScriptingObjectPathChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingObjectPathChannel;
	SetDefault(InDefaultValue: UObject): void;
	RemoveKey(Key: MovieSceneScriptingKey): void;
	RemoveDefault(): void;
	HasDefault(): boolean;
	GetKeys(): MovieSceneScriptingKey[];
	GetDefault(): UObject;
	AddKey(InTime: FrameNumber,NewValue: UObject,SubFrame: number,TimeUnit: ESequenceTimeUnit): MovieSceneScriptingObjectPathKey;
	static C(Other: UObject | any): MovieSceneScriptingObjectPathChannel;
}

declare class MovieSceneScriptingStringKey extends MovieSceneScriptingKey { 
	static Load(ResourceName: string): MovieSceneScriptingStringKey;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingStringKey;
	static GetDefaultObject(): MovieSceneScriptingStringKey;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingStringKey;
	SetValue(InNewValue: string): void;
	SetTime(NewFrameNumber: FrameNumber,SubFrame: number,TimeUnit: ESequenceTimeUnit): void;
	GetValue(): string;
	GetTime(TimeUnit: ESequenceTimeUnit): FrameTime;
	static C(Other: UObject | any): MovieSceneScriptingStringKey;
}

declare class MovieSceneScriptingStringChannel extends MovieSceneScriptingChannel { 
	static Load(ResourceName: string): MovieSceneScriptingStringChannel;
	static Find(Outer: UObject, ResourceName: string): MovieSceneScriptingStringChannel;
	static GetDefaultObject(): MovieSceneScriptingStringChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneScriptingStringChannel;
	SetDefault(InDefaultValue: string): void;
	RemoveKey(Key: MovieSceneScriptingKey): void;
	RemoveDefault(): void;
	HasDefault(): boolean;
	GetKeys(): MovieSceneScriptingKey[];
	GetDefault(): string;
	AddKey(InTime: FrameNumber,NewValue: string,SubFrame: number,TimeUnit: ESequenceTimeUnit): MovieSceneScriptingStringKey;
	static C(Other: UObject | any): MovieSceneScriptingStringChannel;
}

declare class MovieSceneSectionExtensions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MovieSceneSectionExtensions;
	static Find(Outer: UObject, ResourceName: string): MovieSceneSectionExtensions;
	static GetDefaultObject(): MovieSceneSectionExtensions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneSectionExtensions;
	static SetStartFrameSeconds(Section: MovieSceneSection,StartTime: number): void;
	static SetStartFrameBounded(Section: MovieSceneSection,bIsBounded: boolean): void;
	static SetStartFrame(Section: MovieSceneSection,StartFrame: number): void;
	static SetRangeSeconds(Section: MovieSceneSection,StartTime: number,EndTime: number): void;
	static SetRange(Section: MovieSceneSection,StartFrame: number,EndFrame: number): void;
	static SetEndFrameSeconds(Section: MovieSceneSection,EndTime: number): void;
	static SetEndFrameBounded(Section: MovieSceneSection,bIsBounded: boolean): void;
	static SetEndFrame(Section: MovieSceneSection,EndFrame: number): void;
	static HasStartFrame(Section: MovieSceneSection): boolean;
	static HasEndFrame(Section: MovieSceneSection): boolean;
	static GetStartFrameSeconds(Section: MovieSceneSection): number;
	static GetStartFrame(Section: MovieSceneSection): number;
	static GetParentSequenceFrame(Section: MovieSceneSubSection,InFrame: number,ParentSequence: MovieSceneSequence): number;
	static GetEndFrameSeconds(Section: MovieSceneSection): number;
	static GetEndFrame(Section: MovieSceneSection): number;
	static GetChannelsByType(Section: MovieSceneSection,ChannelType: UnrealEngineClass): MovieSceneScriptingChannel[];
	static GetChannels(Section: MovieSceneSection): MovieSceneScriptingChannel[];
	static GetAllChannels(Section: MovieSceneSection): MovieSceneScriptingChannel[];
	static FindChannelsByType(Section: MovieSceneSection,ChannelType: UnrealEngineClass): MovieSceneScriptingChannel[];
	static C(Other: UObject | any): MovieSceneSectionExtensions;
}

declare class MovieSceneSequenceExtensions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MovieSceneSequenceExtensions;
	static Find(Outer: UObject, ResourceName: string): MovieSceneSequenceExtensions;
	static GetDefaultObject(): MovieSceneSequenceExtensions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneSequenceExtensions;
	static SortMarkedFrames(Sequence: MovieSceneSequence): void;
	static SetWorkRangeStart(InSequence: MovieSceneSequence,StartTimeInSeconds: number): void;
	static SetWorkRangeEnd(InSequence: MovieSceneSequence,EndTimeInSeconds: number): void;
	static SetViewRangeStart(InSequence: MovieSceneSequence,StartTimeInSeconds: number): void;
	static SetViewRangeEnd(InSequence: MovieSceneSequence,EndTimeInSeconds: number): void;
	static SetTickResolutionDirectly(Sequence: MovieSceneSequence,TickResolution: FrameRate): void;
	static SetTickResolution(Sequence: MovieSceneSequence,TickResolution: FrameRate): void;
	static SetReadOnly(Sequence: MovieSceneSequence,bInReadOnly: boolean): void;
	static SetPlaybackStartSeconds(Sequence: MovieSceneSequence,StartTime: number): void;
	static SetPlaybackStart(Sequence: MovieSceneSequence,StartFrame: number): void;
	static SetPlaybackEndSeconds(Sequence: MovieSceneSequence,EndTime: number): void;
	static SetPlaybackEnd(Sequence: MovieSceneSequence,EndFrame: number): void;
	static SetMarkedFrame(Sequence: MovieSceneSequence,InMarkIndex: number,InFrameNumber: FrameNumber): void;
	static SetEvaluationType(InSequence: MovieSceneSequence,InEvaluationType: EMovieSceneEvaluationType): void;
	static SetDisplayRate(Sequence: MovieSceneSequence,DisplayRate: FrameRate): void;
	static SetClockSource(InSequence: MovieSceneSequence,InClockSource: EUpdateClockSource): void;
	static ResolveBindingID(MasterSequence: MovieSceneSequence,InObjectBindingID: MovieSceneObjectBindingID): SequencerBindingProxy;
	static RemoveMasterTrack(Sequence: MovieSceneSequence,MasterTrack: MovieSceneTrack): boolean;
	static MakeRangeSeconds(Sequence: MovieSceneSequence,StartTime: number,Duration: number): SequencerScriptingRange;
	static MakeRange(Sequence: MovieSceneSequence,StartFrame: number,Duration: number): SequencerScriptingRange;
	static MakeBindingID(MasterSequence: MovieSceneSequence,InBinding: SequencerBindingProxy,Space: EMovieSceneObjectBindingSpace): MovieSceneObjectBindingID;
	static LocateBoundObjects(Sequence: MovieSceneSequence,InBinding: SequencerBindingProxy,Context: UObject): UObject[];
	static IsReadOnly(Sequence: MovieSceneSequence): boolean;
	static GetWorkRangeStart(InSequence: MovieSceneSequence): number;
	static GetWorkRangeEnd(InSequence: MovieSceneSequence): number;
	static GetViewRangeStart(InSequence: MovieSceneSequence): number;
	static GetViewRangeEnd(InSequence: MovieSceneSequence): number;
	static GetTimecodeSource(Sequence: MovieSceneSequence): Timecode;
	static GetTickResolution(Sequence: MovieSceneSequence): FrameRate;
	static GetSpawnables(Sequence: MovieSceneSequence): SequencerBindingProxy[];
	static GetRootFoldersInSequence(Sequence: MovieSceneSequence): MovieSceneFolder[];
	static GetPossessables(Sequence: MovieSceneSequence): SequencerBindingProxy[];
	static GetPortableBindingID(MasterSequence: MovieSceneSequence,DestinationSequence: MovieSceneSequence,InBinding: SequencerBindingProxy): MovieSceneObjectBindingID;
	static GetPlaybackStartSeconds(Sequence: MovieSceneSequence): number;
	static GetPlaybackStart(Sequence: MovieSceneSequence): number;
	static GetPlaybackRange(Sequence: MovieSceneSequence): SequencerScriptingRange;
	static GetPlaybackEndSeconds(Sequence: MovieSceneSequence): number;
	static GetPlaybackEnd(Sequence: MovieSceneSequence): number;
	static GetMovieScene(Sequence: MovieSceneSequence): MovieScene;
	static GetMasterTracks(Sequence: MovieSceneSequence): MovieSceneTrack[];
	static GetMarkedFrames(Sequence: MovieSceneSequence): MovieSceneMarkedFrame[];
	static GetEvaluationType(InSequence: MovieSceneSequence): EMovieSceneEvaluationType;
	static GetDisplayRate(Sequence: MovieSceneSequence): FrameRate;
	static GetClockSource(InSequence: MovieSceneSequence): EUpdateClockSource;
	static GetBindings(Sequence: MovieSceneSequence): SequencerBindingProxy[];
	static GetBindingID(InBinding: SequencerBindingProxy): MovieSceneObjectBindingID;
	static FindNextMarkedFrame(Sequence: MovieSceneSequence,InFrameNumber: FrameNumber,bForward: boolean): number;
	static FindMasterTracksByType(Sequence: MovieSceneSequence,TrackType: UnrealEngineClass): MovieSceneTrack[];
	static FindMasterTracksByExactType(Sequence: MovieSceneSequence,TrackType: UnrealEngineClass): MovieSceneTrack[];
	static FindMarkedFrameByLabel(Sequence: MovieSceneSequence,InLabel: string): number;
	static FindMarkedFrameByFrameNumber(Sequence: MovieSceneSequence,InFrameNumber: FrameNumber): number;
	static FindBindingByName(Sequence: MovieSceneSequence,Name: string): SequencerBindingProxy;
	static FindBindingById(Sequence: MovieSceneSequence,BindingID: Guid): SequencerBindingProxy;
	static DeleteMarkedFrames(Sequence: MovieSceneSequence): void;
	static DeleteMarkedFrame(Sequence: MovieSceneSequence,DeleteIndex: number): void;
	static AddSpawnableFromInstance(Sequence: MovieSceneSequence,ObjectToSpawn: UObject): SequencerBindingProxy;
	static AddSpawnableFromClass(Sequence: MovieSceneSequence,ClassToSpawn: UnrealEngineClass): SequencerBindingProxy;
	static AddRootFolderToSequence(Sequence: MovieSceneSequence,NewFolderName: string): MovieSceneFolder;
	static AddPossessable(Sequence: MovieSceneSequence,ObjectToPossess: UObject): SequencerBindingProxy;
	static AddMasterTrack(Sequence: MovieSceneSequence,TrackType: UnrealEngineClass): MovieSceneTrack;
	static AddMarkedFrame(Sequence: MovieSceneSequence,InMarkedFrame: MovieSceneMarkedFrame): number;
	static C(Other: UObject | any): MovieSceneSequenceExtensions;
}

declare class MovieSceneTrackExtensions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MovieSceneTrackExtensions;
	static Find(Outer: UObject, ResourceName: string): MovieSceneTrackExtensions;
	static GetDefaultObject(): MovieSceneTrackExtensions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneTrackExtensions;
	static SetTrackRowDisplayName(Track: MovieSceneTrack,InName: string,RowIndex: number): void;
	static SetSortingOrder(Track: MovieSceneTrack,SortingOrder: number): void;
	static SetSectionToKey(Track: MovieSceneTrack,Section: MovieSceneSection): void;
	static SetDisplayName(Track: MovieSceneTrack,InName: string): void;
	static SetColorTint(Track: MovieSceneTrack,ColorTint: Color): void;
	static RemoveSection(Track: MovieSceneTrack,Section: MovieSceneSection): void;
	static GetTrackRowDisplayName(Track: MovieSceneTrack,RowIndex: number): string;
	static GetSortingOrder(Track: MovieSceneTrack): number;
	static GetSectionToKey(Track: MovieSceneTrack): MovieSceneSection;
	static GetSections(Track: MovieSceneTrack): MovieSceneSection[];
	static GetDisplayName(Track: MovieSceneTrack): string;
	static GetColorTint(Track: MovieSceneTrack): Color;
	static AddSection(Track: MovieSceneTrack): MovieSceneSection;
	static C(Other: UObject | any): MovieSceneTrackExtensions;
}

declare class MovieSceneFloatVectorTrackExtensions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MovieSceneFloatVectorTrackExtensions;
	static Find(Outer: UObject, ResourceName: string): MovieSceneFloatVectorTrackExtensions;
	static GetDefaultObject(): MovieSceneFloatVectorTrackExtensions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneFloatVectorTrackExtensions;
	static SetNumChannelsUsed(Track: MovieSceneFloatVectorTrack,InNumChannelsUsed: number): void;
	static GetNumChannelsUsed(Track: MovieSceneFloatVectorTrack): number;
	static C(Other: UObject | any): MovieSceneFloatVectorTrackExtensions;
}

declare class MovieSceneDoubleVectorTrackExtensions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MovieSceneDoubleVectorTrackExtensions;
	static Find(Outer: UObject, ResourceName: string): MovieSceneDoubleVectorTrackExtensions;
	static GetDefaultObject(): MovieSceneDoubleVectorTrackExtensions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneDoubleVectorTrackExtensions;
	static SetNumChannelsUsed(Track: MovieSceneDoubleVectorTrack,InNumChannelsUsed: number): void;
	static GetNumChannelsUsed(Track: MovieSceneDoubleVectorTrack): number;
	static C(Other: UObject | any): MovieSceneDoubleVectorTrackExtensions;
}

declare class SequencerScriptingRangeExtensions extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): SequencerScriptingRangeExtensions;
	static Find(Outer: UObject, ResourceName: string): SequencerScriptingRangeExtensions;
	static GetDefaultObject(): SequencerScriptingRangeExtensions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SequencerScriptingRangeExtensions;
	static SetStartSeconds(Range?: SequencerScriptingRange,Start?: number): {Range: SequencerScriptingRange};
	static SetStartFrame(Range?: SequencerScriptingRange,Start?: number): {Range: SequencerScriptingRange};
	static SetEndSeconds(Range?: SequencerScriptingRange,End?: number): {Range: SequencerScriptingRange};
	static SetEndFrame(Range?: SequencerScriptingRange,End?: number): {Range: SequencerScriptingRange};
	static RemoveStart(Range?: SequencerScriptingRange): {Range: SequencerScriptingRange};
	static RemoveEnd(Range?: SequencerScriptingRange): {Range: SequencerScriptingRange};
	static HasStart(Range: SequencerScriptingRange): boolean;
	static HasEnd(Range: SequencerScriptingRange): boolean;
	static GetStartSeconds(Range: SequencerScriptingRange): number;
	static GetStartFrame(Range: SequencerScriptingRange): number;
	static GetEndSeconds(Range: SequencerScriptingRange): number;
	static GetEndFrame(Range: SequencerScriptingRange): number;
	static C(Other: UObject | any): SequencerScriptingRangeExtensions;
}

declare class SequencerToolsFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): SequencerToolsFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): SequencerToolsFunctionLibrary;
	static GetDefaultObject(): SequencerToolsFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SequencerToolsFunctionLibrary;
	static IsRenderingMovie(): boolean;
	static IsEventEndpointValid(InEndpoint: SequencerQuickBindingResult): boolean;
	static ImportLevelSequenceFBX(InWorld: World,InSequence: LevelSequence,InBindings: SequencerBindingProxy[],InImportFBXSettings: MovieSceneUserImportFBXSettings,InImportFilename: string): boolean;
	static ImportFBXToControlRig(World: World,InSequence: LevelSequence,ActorWithControlRigTrack: string,SelectedControlRigNames: string[],ImportFBXControlRigSettings: MovieSceneUserImportFBXControlRigSettings,ImportFilename: string): boolean;
	static GetObjectBindings(InWorld: World,InSequence: LevelSequence,InObject: UObject[],InRange: SequencerScriptingRange): SequencerBoundObjects[];
	static GetBoundObjects(InWorld: World,InSequence: LevelSequence,InBindings: SequencerBindingProxy[],InRange: SequencerScriptingRange): SequencerBoundObjects[];
	static ExportLevelSequenceFBX(InWorld: World,InSequence: LevelSequence,InBindings: SequencerBindingProxy[],InMasterTracks: MovieSceneTrack[],OverrideOptions: FbxExportOption,InFBXFileName: string): boolean;
	static ExportAnimSequence(World: World,Sequence: LevelSequence,AnimSequence: AnimSequence,ExportOption: AnimSeqExportOption,Binding: SequencerBindingProxy): boolean;
	static CreateQuickBinding(InSequence: MovieSceneSequence,InObject: UObject,InFunctionName: string,bCallInEditor: boolean): SequencerQuickBindingResult;
	static CreateEvent(InSequence: MovieSceneSequence,InSection: MovieSceneEventSectionBase,InEndpoint: SequencerQuickBindingResult,InPayload: string[]): MovieSceneEvent;
	static CancelMovieRender(): void;
	static C(Other: UObject | any): SequencerToolsFunctionLibrary;
}

declare class OnRenderMovieStopped__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnRenderMovieStopped__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnRenderMovieStopped__PythonCallable;
	static GetDefaultObject(): OnRenderMovieStopped__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnRenderMovieStopped__PythonCallable;
	static C(Other: UObject | any): OnRenderMovieStopped__PythonCallable;
}

declare class LayersBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): LayersBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): LayersBlueprintLibrary;
	static GetDefaultObject(): LayersBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LayersBlueprintLibrary;
	static RemoveActorFromLayer(InActor: Actor,Layer: ActorLayer): void;
	static GetActors(WorldContextObject: UObject,ActorLayer: ActorLayer): Actor[];
	static AddActorToLayer(InActor: Actor,Layer: ActorLayer): void;
	static C(Other: UObject | any): LayersBlueprintLibrary;
}

declare type ECollectionScriptingShareType = 'Local' | 'Private' | 'Shared' | 'ECollectionScriptingShareType_MAX';
declare var ECollectionScriptingShareType : { Local:'Local',Private:'Private',Shared:'Shared',ECollectionScriptingShareType_MAX:'ECollectionScriptingShareType_MAX', };
declare class AssetTagsSubsystem extends EngineSubsystem { 
	static Load(ResourceName: string): AssetTagsSubsystem;
	static Find(Outer: UObject, ResourceName: string): AssetTagsSubsystem;
	static GetDefaultObject(): AssetTagsSubsystem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AssetTagsSubsystem;
	ReparentCollection(Name: string,NewParentName: string): boolean;
	RenameCollection(Name: string,NewName: string): boolean;
	RemoveAssetsFromCollection(Name: string,AssetPathNames: string[]): boolean;
	RemoveAssetPtrsFromCollection(Name: string,AssetPtrs: UObject[]): boolean;
	RemoveAssetPtrFromCollection(Name: string,AssetPtr: UObject): boolean;
	RemoveAssetFromCollection(Name: string,AssetPathName: string): boolean;
	RemoveAssetDatasFromCollection(Name: string,AssetDatas: AssetData[]): boolean;
	RemoveAssetDataFromCollection(Name: string,AssetData: AssetData): boolean;
	GetCollectionsContainingAssetPtr(AssetPtr: UObject): string[];
	GetCollectionsContainingAssetData(AssetData: AssetData): string[];
	GetCollectionsContainingAsset(AssetPathName: string): string[];
	GetCollections(): string[];
	GetAssetsInCollection(Name: string): AssetData[];
	EmptyCollection(Name: string): boolean;
	DestroyCollection(Name: string): boolean;
	CreateCollection(Name: string,ShareType: ECollectionScriptingShareType): boolean;
	CollectionExists(Name: string): boolean;
	AddAssetToCollection(Name: string,AssetPathName: string): boolean;
	AddAssetsToCollection(Name: string,AssetPathNames: string[]): boolean;
	AddAssetPtrToCollection(Name: string,AssetPtr: UObject): boolean;
	AddAssetPtrsToCollection(Name: string,AssetPtrs: UObject[]): boolean;
	AddAssetDataToCollection(Name: string,AssetData: AssetData): boolean;
	AddAssetDatasToCollection(Name: string,AssetDatas: AssetData[]): boolean;
	static C(Other: UObject | any): AssetTagsSubsystem;
}

declare class AudioCaptureDeviceInfo { 
	DeviceName: string;
	NumInputChannels: number;
	SampleRate: number;
	clone() : AudioCaptureDeviceInfo;
	static C(Other: UObject | any): AudioCaptureDeviceInfo;
}

declare class AudioCapture extends AudioGenerator { 
	static Load(ResourceName: string): AudioCapture;
	static Find(Outer: UObject, ResourceName: string): AudioCapture;
	static GetDefaultObject(): AudioCapture;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioCapture;
	StopCapturingAudio(): void;
	StartCapturingAudio(): void;
	IsCapturingAudio(): boolean;
	GetAudioCaptureDeviceInfo(OutInfo?: AudioCaptureDeviceInfo): {OutInfo: AudioCaptureDeviceInfo, $: boolean};
	static C(Other: UObject | any): AudioCapture;
}

declare class AudioCaptureFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): AudioCaptureFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): AudioCaptureFunctionLibrary;
	static GetDefaultObject(): AudioCaptureFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioCaptureFunctionLibrary;
	static CreateAudioCapture(): AudioCapture;
	static C(Other: UObject | any): AudioCaptureFunctionLibrary;
}

declare class AudioCaptureBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): AudioCaptureBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): AudioCaptureBlueprintLibrary;
	static GetDefaultObject(): AudioCaptureBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioCaptureBlueprintLibrary;
	static Conv_AudioInputDeviceInfoToString(Info: AudioInputDeviceInfo): string;
	static C(Other: UObject | any): AudioCaptureBlueprintLibrary;
}

declare class AudioCaptureComponent extends SynthComponent { 
	JitterLatencyFrames: number;
	static Load(ResourceName: string): AudioCaptureComponent;
	static Find(Outer: UObject, ResourceName: string): AudioCaptureComponent;
	static GetDefaultObject(): AudioCaptureComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioCaptureComponent;
	static C(Other: UObject | any): AudioCaptureComponent;
}

declare class OnAudioInputDevicesObtained__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnAudioInputDevicesObtained__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnAudioInputDevicesObtained__PythonCallable;
	static GetDefaultObject(): OnAudioInputDevicesObtained__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnAudioInputDevicesObtained__PythonCallable;
	static C(Other: UObject | any): OnAudioInputDevicesObtained__PythonCallable;
}

declare class CableComponent extends MeshComponent { 
	bAttachStart: boolean;
	bAttachEnd: boolean;
	AttachEndTo: ComponentReference;
	AttachEndToSocketName: string;
	EndLocation: Vector;
	CableLength: number;
	NumSegments: number;
	SubstepTime: number;
	SolverIterations: number;
	bEnableStiffness: boolean;
	bUseSubstepping: boolean;
	bSkipCableUpdateWhenNotVisible: boolean;
	bSkipCableUpdateWhenNotOwnerRecentlyRendered: boolean;
	bEnableCollision: boolean;
	CollisionFriction: number;
	CableForce: Vector;
	CableGravityScale: number;
	CableWidth: number;
	NumSides: number;
	TileMaterial: number;
	static Load(ResourceName: string): CableComponent;
	static Find(Outer: UObject, ResourceName: string): CableComponent;
	static GetDefaultObject(): CableComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CableComponent;
	SetAttachEndToComponent(Component: SceneComponent,SocketName: string): void;
	SetAttachEndTo(Actor: Actor,ComponentProperty: string,SocketName: string): void;
	GetCableParticleLocations(Locations?: Vector[]): {Locations: Vector[]};
	GetAttachedComponent(): SceneComponent;
	GetAttachedActor(): Actor;
	static C(Other: UObject | any): CableComponent;
}

declare class CableActor extends Actor { 
	CableComponent: CableComponent;
	static GetDefaultObject(): CableActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CableActor;
	static C(Other: UObject | any): CableActor;
}

declare class CustomMeshTriangle { 
	Vertex0: Vector;
	Vertex1: Vector;
	Vertex2: Vector;
	clone() : CustomMeshTriangle;
	static C(Other: UObject | any): CustomMeshTriangle;
}

declare class CustomMeshComponent extends MeshComponent { 
	static Load(ResourceName: string): CustomMeshComponent;
	static Find(Outer: UObject, ResourceName: string): CustomMeshComponent;
	static GetDefaultObject(): CustomMeshComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CustomMeshComponent;
	SetCustomMeshTriangles(Triangles: CustomMeshTriangle[]): boolean;
	ClearCustomMeshTriangles(): void;
	AddCustomMeshTriangles(Triangles: CustomMeshTriangle[]): void;
	static C(Other: UObject | any): CustomMeshComponent;
}

declare class MovieSceneGeometryCacheParams { 
	GeometryCacheAsset: GeometryCache;
	FirstLoopStartFrameOffset: FrameNumber;
	StartFrameOffset: FrameNumber;
	EndFrameOffset: FrameNumber;
	PlayRate: number;
	bReverse: boolean;
	StartOffset: number;
	EndOffset: number;
	GeometryCache: SoftObjectPath;
	clone() : MovieSceneGeometryCacheParams;
	static C(Other: UObject | any): MovieSceneGeometryCacheParams;
}

declare class MovieSceneGeometryCacheSection extends MovieSceneSection { 
	Params: MovieSceneGeometryCacheParams;
	static Load(ResourceName: string): MovieSceneGeometryCacheSection;
	static Find(Outer: UObject, ResourceName: string): MovieSceneGeometryCacheSection;
	static GetDefaultObject(): MovieSceneGeometryCacheSection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneGeometryCacheSection;
	static C(Other: UObject | any): MovieSceneGeometryCacheSection;
}

declare class MovieSceneGeometryCacheTrack extends MovieSceneNameableTrack { 
	AnimationSections: MovieSceneSection[];
	static Load(ResourceName: string): MovieSceneGeometryCacheTrack;
	static Find(Outer: UObject, ResourceName: string): MovieSceneGeometryCacheTrack;
	static GetDefaultObject(): MovieSceneGeometryCacheTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneGeometryCacheTrack;
	static C(Other: UObject | any): MovieSceneGeometryCacheTrack;
}

declare class GeometryCacheStreamerSettings extends DeveloperSettings { 
	LookAheadBuffer: number;
	MaxMemoryAllowed: number;
	static Load(ResourceName: string): GeometryCacheStreamerSettings;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheStreamerSettings;
	static GetDefaultObject(): GeometryCacheStreamerSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheStreamerSettings;
	static C(Other: UObject | any): GeometryCacheStreamerSettings;
}

declare class FragmentUpdateSystem extends UObject { 
	static Load(ResourceName: string): FragmentUpdateSystem;
	static Find(Outer: UObject, ResourceName: string): FragmentUpdateSystem;
	static GetDefaultObject(): FragmentUpdateSystem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FragmentUpdateSystem;
	static C(Other: UObject | any): FragmentUpdateSystem;
}

declare class FarmWaterUpdateSystem extends FragmentUpdateSystem { 
	static Load(ResourceName: string): FarmWaterUpdateSystem;
	static Find(Outer: UObject, ResourceName: string): FarmWaterUpdateSystem;
	static GetDefaultObject(): FarmWaterUpdateSystem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FarmWaterUpdateSystem;
	static C(Other: UObject | any): FarmWaterUpdateSystem;
}

declare class FarmHarvestTimerSystem_Flowers extends FragmentUpdateSystem { 
	static Load(ResourceName: string): FarmHarvestTimerSystem_Flowers;
	static Find(Outer: UObject, ResourceName: string): FarmHarvestTimerSystem_Flowers;
	static GetDefaultObject(): FarmHarvestTimerSystem_Flowers;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FarmHarvestTimerSystem_Flowers;
	static C(Other: UObject | any): FarmHarvestTimerSystem_Flowers;
}

declare class FarmHarvestTimerSystem_Crops extends FragmentUpdateSystem { 
	static Load(ResourceName: string): FarmHarvestTimerSystem_Crops;
	static Find(Outer: UObject, ResourceName: string): FarmHarvestTimerSystem_Crops;
	static GetDefaultObject(): FarmHarvestTimerSystem_Crops;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FarmHarvestTimerSystem_Crops;
	static C(Other: UObject | any): FarmHarvestTimerSystem_Crops;
}

declare class FarmHarvestTimerExpired extends FragmentUpdateSystem { 
	static Load(ResourceName: string): FarmHarvestTimerExpired;
	static Find(Outer: UObject, ResourceName: string): FarmHarvestTimerExpired;
	static GetDefaultObject(): FarmHarvestTimerExpired;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FarmHarvestTimerExpired;
	static C(Other: UObject | any): FarmHarvestTimerExpired;
}

declare class FarmHarvestTimerSetIcon extends FragmentUpdateSystem { 
	static Load(ResourceName: string): FarmHarvestTimerSetIcon;
	static Find(Outer: UObject, ResourceName: string): FarmHarvestTimerSetIcon;
	static GetDefaultObject(): FarmHarvestTimerSetIcon;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FarmHarvestTimerSetIcon;
	static C(Other: UObject | any): FarmHarvestTimerSetIcon;
}

declare class FarmVisualDataRow extends TableRowBase { 
	Mesh: StaticMesh;
	MaterialOverride: MaterialInterface;
	clone() : FarmVisualDataRow;
	static C(Other: UObject | any): FarmVisualDataRow;
}

declare class LWFragmentTestFarmPlot extends Actor { 
	GridCellWidth: number;
	GridCellHeight: number;
	HarvestIconScale: number;
	VisualDataTable: FarmVisualDataRow[];
	VisualDataISMCs: HierarchicalInstancedStaticMeshComponent[];
	PerFrameSystems: FragmentUpdateSystem[];
	PerSecondSystems: FragmentUpdateSystem[];
	TestDataFlowerIndicies: any[];
	TestDataCropIndicies: any[];
	VisualNearCullDistance: any;
	VisualFarCullDistance: any;
	IconNearCullDistance: any;
	IconFarCullDistance: any;
	HarvestIconISMC: HierarchicalInstancedStaticMeshComponent;
	static GetDefaultObject(): LWFragmentTestFarmPlot;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LWFragmentTestFarmPlot;
	static C(Other: UObject | any): LWFragmentTestFarmPlot;
}

declare class MassTestProcessorBase extends MassProcessor { 
	static Load(ResourceName: string): MassTestProcessorBase;
	static Find(Outer: UObject, ResourceName: string): MassTestProcessorBase;
	static GetDefaultObject(): MassTestProcessorBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MassTestProcessorBase;
	static C(Other: UObject | any): MassTestProcessorBase;
}

declare class MassTestProcessor_A extends MassTestProcessorBase { 
	static Load(ResourceName: string): MassTestProcessor_A;
	static Find(Outer: UObject, ResourceName: string): MassTestProcessor_A;
	static GetDefaultObject(): MassTestProcessor_A;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MassTestProcessor_A;
	static C(Other: UObject | any): MassTestProcessor_A;
}

declare class MassTestProcessor_B extends MassTestProcessorBase { 
	static Load(ResourceName: string): MassTestProcessor_B;
	static Find(Outer: UObject, ResourceName: string): MassTestProcessor_B;
	static GetDefaultObject(): MassTestProcessor_B;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MassTestProcessor_B;
	static C(Other: UObject | any): MassTestProcessor_B;
}

declare class MassTestProcessor_C extends MassTestProcessorBase { 
	static Load(ResourceName: string): MassTestProcessor_C;
	static Find(Outer: UObject, ResourceName: string): MassTestProcessor_C;
	static GetDefaultObject(): MassTestProcessor_C;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MassTestProcessor_C;
	static C(Other: UObject | any): MassTestProcessor_C;
}

declare class MassTestProcessor_D extends MassTestProcessorBase { 
	static Load(ResourceName: string): MassTestProcessor_D;
	static Find(Outer: UObject, ResourceName: string): MassTestProcessor_D;
	static GetDefaultObject(): MassTestProcessor_D;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MassTestProcessor_D;
	static C(Other: UObject | any): MassTestProcessor_D;
}

declare class MassTestProcessor_E extends MassTestProcessorBase { 
	static Load(ResourceName: string): MassTestProcessor_E;
	static Find(Outer: UObject, ResourceName: string): MassTestProcessor_E;
	static GetDefaultObject(): MassTestProcessor_E;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MassTestProcessor_E;
	static C(Other: UObject | any): MassTestProcessor_E;
}

declare class MassTestProcessor_F extends MassTestProcessorBase { 
	static Load(ResourceName: string): MassTestProcessor_F;
	static Find(Outer: UObject, ResourceName: string): MassTestProcessor_F;
	static GetDefaultObject(): MassTestProcessor_F;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MassTestProcessor_F;
	static C(Other: UObject | any): MassTestProcessor_F;
}

declare class MassTestProcessor_Floats extends MassTestProcessorBase { 
	static Load(ResourceName: string): MassTestProcessor_Floats;
	static Find(Outer: UObject, ResourceName: string): MassTestProcessor_Floats;
	static GetDefaultObject(): MassTestProcessor_Floats;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MassTestProcessor_Floats;
	static C(Other: UObject | any): MassTestProcessor_Floats;
}

declare class MassTestProcessor_Ints extends MassTestProcessorBase { 
	static Load(ResourceName: string): MassTestProcessor_Ints;
	static Find(Outer: UObject, ResourceName: string): MassTestProcessor_Ints;
	static GetDefaultObject(): MassTestProcessor_Ints;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MassTestProcessor_Ints;
	static C(Other: UObject | any): MassTestProcessor_Ints;
}

declare class MassTestProcessor_FloatsInts extends MassTestProcessorBase { 
	static Load(ResourceName: string): MassTestProcessor_FloatsInts;
	static Find(Outer: UObject, ResourceName: string): MassTestProcessor_FloatsInts;
	static GetDefaultObject(): MassTestProcessor_FloatsInts;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MassTestProcessor_FloatsInts;
	static C(Other: UObject | any): MassTestProcessor_FloatsInts;
}

declare class MassSchematicFactory extends Factory { 
	static Load(ResourceName: string): MassSchematicFactory;
	static Find(Outer: UObject, ResourceName: string): MassSchematicFactory;
	static GetDefaultObject(): MassSchematicFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MassSchematicFactory;
	static C(Other: UObject | any): MassSchematicFactory;
}

declare class MassSpawnerOnDespawningFinishedEvent__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): MassSpawnerOnDespawningFinishedEvent__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): MassSpawnerOnDespawningFinishedEvent__PythonCallable;
	static GetDefaultObject(): MassSpawnerOnDespawningFinishedEvent__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MassSpawnerOnDespawningFinishedEvent__PythonCallable;
	static C(Other: UObject | any): MassSpawnerOnDespawningFinishedEvent__PythonCallable;
}

declare class MassSpawnerOnSpawningFinishedEvent__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): MassSpawnerOnSpawningFinishedEvent__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): MassSpawnerOnSpawningFinishedEvent__PythonCallable;
	static GetDefaultObject(): MassSpawnerOnSpawningFinishedEvent__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MassSpawnerOnSpawningFinishedEvent__PythonCallable;
	static C(Other: UObject | any): MassSpawnerOnSpawningFinishedEvent__PythonCallable;
}

declare class KismetProceduralMeshLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): KismetProceduralMeshLibrary;
	static Find(Outer: UObject, ResourceName: string): KismetProceduralMeshLibrary;
	static GetDefaultObject(): KismetProceduralMeshLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KismetProceduralMeshLibrary;
	static SliceProceduralMesh(InProcMesh: ProceduralMeshComponent,PlanePosition: Vector,PlaneNormal: Vector,bCreateOtherHalf: boolean,OutOtherHalfProcMesh?: ProceduralMeshComponent,CapOption?: EProcMeshSliceCapOption,CapMaterial?: MaterialInterface): {OutOtherHalfProcMesh: ProceduralMeshComponent};
	static GetSectionFromStaticMesh(InMesh: StaticMesh,LODIndex: number,SectionIndex: number,Vertices?: Vector[],Triangles?: number[],Normals?: Vector[],UVs?: Vector2D[],Tangents?: ProcMeshTangent[]): {Vertices: Vector[], Triangles: number[], Normals: Vector[], UVs: Vector2D[], Tangents: ProcMeshTangent[]};
	static GetSectionFromProceduralMesh(InProcMesh: ProceduralMeshComponent,SectionIndex: number,Vertices?: Vector[],Triangles?: number[],Normals?: Vector[],UVs?: Vector2D[],Tangents?: ProcMeshTangent[]): {Vertices: Vector[], Triangles: number[], Normals: Vector[], UVs: Vector2D[], Tangents: ProcMeshTangent[]};
	static GenerateBoxMesh(BoxRadius: Vector,Vertices?: Vector[],Triangles?: number[],Normals?: Vector[],UVs?: Vector2D[],Tangents?: ProcMeshTangent[]): {Vertices: Vector[], Triangles: number[], Normals: Vector[], UVs: Vector2D[], Tangents: ProcMeshTangent[]};
	static CreateGridMeshWelded(NumX: number,NumY: number,Triangles?: number[],Vertices?: Vector[],UVs?: Vector2D[],GridSpacing?: number): {Triangles: number[], Vertices: Vector[], UVs: Vector2D[]};
	static CreateGridMeshTriangles(NumX: number,NumY: number,bWinding: boolean,Triangles?: number[]): {Triangles: number[]};
	static CreateGridMeshSplit(NumX: number,NumY: number,Triangles?: number[],Vertices?: Vector[],UVs?: Vector2D[],UV1s?: Vector2D[],GridSpacing?: number): {Triangles: number[], Vertices: Vector[], UVs: Vector2D[], UV1s: Vector2D[]};
	static CopyProceduralMeshFromStaticMeshComponent(StaticMeshComponent: StaticMeshComponent,LODIndex: number,ProcMeshComponent: ProceduralMeshComponent,bCreateCollision: boolean): void;
	static ConvertQuadToTriangles(Triangles?: number[],Vert0?: number,Vert1?: number,Vert2?: number,Vert3?: number): {Triangles: number[]};
	static CalculateTangentsForMesh(Vertices: Vector[],Triangles: number[],UVs: Vector2D[],Normals?: Vector[],Tangents?: ProcMeshTangent[]): {Normals: Vector[], Tangents: ProcMeshTangent[]};
	static C(Other: UObject | any): KismetProceduralMeshLibrary;
}

declare class ContentBrowserClassDataSource extends ContentBrowserDataSource { 
	static Load(ResourceName: string): ContentBrowserClassDataSource;
	static Find(Outer: UObject, ResourceName: string): ContentBrowserClassDataSource;
	static GetDefaultObject(): ContentBrowserClassDataSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ContentBrowserClassDataSource;
	static C(Other: UObject | any): ContentBrowserClassDataSource;
}

declare class ContentBrowserAssetDataSource extends ContentBrowserDataSource { 
	static Load(ResourceName: string): ContentBrowserAssetDataSource;
	static Find(Outer: UObject, ResourceName: string): ContentBrowserAssetDataSource;
	static GetDefaultObject(): ContentBrowserAssetDataSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ContentBrowserAssetDataSource;
	static C(Other: UObject | any): ContentBrowserAssetDataSource;
}

declare class InterchangeGraphInspectorPipeline extends InterchangePipelineBase { 
	static Load(ResourceName: string): InterchangeGraphInspectorPipeline;
	static Find(Outer: UObject, ResourceName: string): InterchangeGraphInspectorPipeline;
	static GetDefaultObject(): InterchangeGraphInspectorPipeline;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeGraphInspectorPipeline;
	static C(Other: UObject | any): InterchangeGraphInspectorPipeline;
}

declare class InterchangePipelineConfigurationGeneric extends InterchangePipelineConfigurationBase { 
	static Load(ResourceName: string): InterchangePipelineConfigurationGeneric;
	static Find(Outer: UObject, ResourceName: string): InterchangePipelineConfigurationGeneric;
	static GetDefaultObject(): InterchangePipelineConfigurationGeneric;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangePipelineConfigurationGeneric;
	static C(Other: UObject | any): InterchangePipelineConfigurationGeneric;
}

declare class InterchangeActorFactoryNode extends InterchangeBaseNode { 
	static Load(ResourceName: string): InterchangeActorFactoryNode;
	static Find(Outer: UObject, ResourceName: string): InterchangeActorFactoryNode;
	static GetDefaultObject(): InterchangeActorFactoryNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeActorFactoryNode;
	SetCustomGlobalTransform(AttributeValue: Transform): boolean;
	SetCustomActorClassName(AttributeValue: string): boolean;
	GetCustomGlobalTransform(AttributeValue?: Transform): {AttributeValue: Transform, $: boolean};
	GetCustomActorClassName(AttributeValue?: string): {AttributeValue: string, $: boolean};
	static C(Other: UObject | any): InterchangeActorFactoryNode;
}

declare class InterchangeCameraNode extends InterchangeBaseNode { 
	static Load(ResourceName: string): InterchangeCameraNode;
	static Find(Outer: UObject, ResourceName: string): InterchangeCameraNode;
	static GetDefaultObject(): InterchangeCameraNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeCameraNode;
	static C(Other: UObject | any): InterchangeCameraNode;
}

declare class InterchangeLightNode extends InterchangeBaseNode { 
	static Load(ResourceName: string): InterchangeLightNode;
	static Find(Outer: UObject, ResourceName: string): InterchangeLightNode;
	static GetDefaultObject(): InterchangeLightNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeLightNode;
	static C(Other: UObject | any): InterchangeLightNode;
}

declare class InterchangeMaterialFactoryNode extends InterchangeBaseNode { 
	static Load(ResourceName: string): InterchangeMaterialFactoryNode;
	static Find(Outer: UObject, ResourceName: string): InterchangeMaterialFactoryNode;
	static GetDefaultObject(): InterchangeMaterialFactoryNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeMaterialFactoryNode;
	SetTextureDependencyUid(DependencyUid: string): boolean;
	SetCustomTranslatedMaterialNodeUid(AttributeValue: string): boolean;
	SetCustomMaterialUsage(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	SetCustomBlendMode(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	RemoveTextureDependencyUid(DependencyUid: string): boolean;
	InitializeMaterialNode(UniqueId: string,DisplayLabel: string,InAssetClass: string): void;
	GetTextureDependency(index: number,OutDependency?: string): {OutDependency: string};
	GetTextureDependencies(OutDependencies?: string[]): {OutDependencies: string[]};
	GetTextureDependeciesCount(): number;
	GetObjectClass(): UnrealEngineClass;
	GetCustomTranslatedMaterialNodeUid(AttributeValue?: string): {AttributeValue: string, $: boolean};
	GetCustomMaterialUsage(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomBlendMode(AttributeValue?: number): {AttributeValue: number, $: boolean};
	static C(Other: UObject | any): InterchangeMaterialFactoryNode;
}

declare type EInterchangeMaterialNodeParameterName = 'BaseColor' | 'EmissiveColor' | 'Specular' | 'Roughness' | 'Metallic' | 'Normal' | 'Opacity' | 'OpacityMask' | 'EInterchangeMaterialNodeParameterName_MAX';
declare var EInterchangeMaterialNodeParameterName : { BaseColor:'BaseColor',EmissiveColor:'EmissiveColor',Specular:'Specular',Roughness:'Roughness',Metallic:'Metallic',Normal:'Normal',Opacity:'Opacity',OpacityMask:'OpacityMask',EInterchangeMaterialNodeParameterName_MAX:'EInterchangeMaterialNodeParameterName_MAX', };
declare class InterchangeMaterialNode extends InterchangeBaseNode { 
	static Load(ResourceName: string): InterchangeMaterialNode;
	static Find(Outer: UObject, ResourceName: string): InterchangeMaterialNode;
	static GetDefaultObject(): InterchangeMaterialNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeMaterialNode;
	SetTextureDependencyUid(DependencyUid: string): boolean;
	SetPayLoadKey(PayloadKey: string): void;
	RemoveTextureDependencyUid(DependencyUid: string): boolean;
	GetVectorParameterData(ParameterName: EInterchangeMaterialNodeParameterName,OutVectorData?: Vector): {OutVectorData: Vector, $: boolean};
	GetTextureParameterData(ParameterName: EInterchangeMaterialNodeParameterName,OutTextureUid?: string,OutUVSetIndex?: number,OutScaleU?: number,OutScaleV?: number): {OutTextureUid: string, OutUVSetIndex: number, OutScaleU: number, OutScaleV: number, $: boolean};
	GetTextureDependency(index: number,OutDependency?: string): {OutDependency: string};
	GetTextureDependencies(OutDependencies?: string[]): {OutDependencies: string[]};
	GetTextureDependeciesCount(): number;
	GetScalarParameterData(ParameterName: EInterchangeMaterialNodeParameterName,OutScalarData?: number): {OutScalarData: number, $: boolean};
	AddVectorParameterData(ParameterName: EInterchangeMaterialNodeParameterName,VectorData: Vector): void;
	AddTextureParameterData(ParameterName: EInterchangeMaterialNodeParameterName,TextureUid: string,UvSetIndex: number,ScaleU: number,ScaleV: number): void;
	AddScalarParameterData(ParameterName: EInterchangeMaterialNodeParameterName,ScalarData: number): void;
	static C(Other: UObject | any): InterchangeMaterialNode;
}

declare class InterchangeMeshNode extends InterchangeBaseNode { 
	static Load(ResourceName: string): InterchangeMeshNode;
	static Find(Outer: UObject, ResourceName: string): InterchangeMeshNode;
	static GetDefaultObject(): InterchangeMeshNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeMeshNode;
	SetSkinnedMesh(bIsSkinnedMesh: boolean): boolean;
	SetSkeletonDependencyUid(DependencyUid: string): boolean;
	SetShapeDependencyUid(DependencyUid: string): boolean;
	SetSceneInstanceUid(DependencyUid: string): boolean;
	SetPayLoadKey(PayloadKey: string): void;
	SetMaterialDependencyUid(DependencyUid: string): boolean;
	SetCustomVertexCount(AttributeValue: number): boolean;
	SetCustomUVCount(AttributeValue: number): boolean;
	SetCustomPolygonCount(AttributeValue: number): boolean;
	SetCustomHasVertexTangent(AttributeValue: boolean): boolean;
	SetCustomHasVertexNormal(AttributeValue: boolean): boolean;
	SetCustomHasVertexColor(AttributeValue: boolean): boolean;
	SetCustomHasVertexBinormal(AttributeValue: boolean): boolean;
	SetCustomHasSmoothGroup(AttributeValue: boolean): boolean;
	SetCustomBoundingBox(AttributeValue: Box): boolean;
	SetBlendShapeName(BlendShapeName: string): boolean;
	SetBlendShape(bIsBlendShape: boolean): boolean;
	RemoveSkeletonDependencyUid(DependencyUid: string): boolean;
	RemoveShapeDependencyUid(DependencyUid: string): boolean;
	RemoveSceneInstanceUid(DependencyUid: string): boolean;
	RemoveMaterialDependencyUid(DependencyUid: string): boolean;
	IsSkinnedMesh(): boolean;
	IsBlendShape(): boolean;
	GetSkeletonDependency(index: number,OutDependency?: string): {OutDependency: string};
	GetSkeletonDependencies(OutDependencies?: string[]): {OutDependencies: string[]};
	GetSkeletonDependeciesCount(): number;
	GetShapeDependency(index: number,OutDependency?: string): {OutDependency: string};
	GetShapeDependencies(OutDependencies?: string[]): {OutDependencies: string[]};
	GetShapeDependeciesCount(): number;
	GetSceneInstanceUidsCount(): number;
	GetSceneInstanceUids(OutDependencies?: string[]): {OutDependencies: string[]};
	GetSceneInstanceUid(index: number,OutDependency?: string): {OutDependency: string};
	GetMaterialDependency(index: number,OutDependency?: string): {OutDependency: string};
	GetMaterialDependencies(OutDependencies?: string[]): {OutDependencies: string[]};
	GetMaterialDependeciesCount(): number;
	GetCustomVertexCount(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomUVCount(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomPolygonCount(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomHasVertexTangent(AttributeValue?: boolean): {AttributeValue: boolean, $: boolean};
	GetCustomHasVertexNormal(AttributeValue?: boolean): {AttributeValue: boolean, $: boolean};
	GetCustomHasVertexColor(AttributeValue?: boolean): {AttributeValue: boolean, $: boolean};
	GetCustomHasVertexBinormal(AttributeValue?: boolean): {AttributeValue: boolean, $: boolean};
	GetCustomHasSmoothGroup(AttributeValue?: boolean): {AttributeValue: boolean, $: boolean};
	GetCustomBoundingBox(AttributeValue?: Box): {AttributeValue: Box, $: boolean};
	GetBlendShapeName(OutBlendShapeName?: string): {OutBlendShapeName: string, $: boolean};
	static C(Other: UObject | any): InterchangeMeshNode;
}

declare class InterchangePhysicsAssetFactoryNode extends InterchangeBaseNode { 
	static Load(ResourceName: string): InterchangePhysicsAssetFactoryNode;
	static Find(Outer: UObject, ResourceName: string): InterchangePhysicsAssetFactoryNode;
	static GetDefaultObject(): InterchangePhysicsAssetFactoryNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangePhysicsAssetFactoryNode;
	SetCustomSkeletalMeshUid(AttributeValue: string): boolean;
	InitializePhysicsAssetNode(UniqueId: string,DisplayLabel: string,InAssetClass: string): void;
	GetObjectClass(): UnrealEngineClass;
	GetCustomSkeletalMeshUid(AttributeValue?: string): {AttributeValue: string, $: boolean};
	static C(Other: UObject | any): InterchangePhysicsAssetFactoryNode;
}

declare class InterchangeSceneNode extends InterchangeBaseNode { 
	static Load(ResourceName: string): InterchangeSceneNode;
	static Find(Outer: UObject, ResourceName: string): InterchangeSceneNode;
	static GetDefaultObject(): InterchangeSceneNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeSceneNode;
	SetCustomLocalTransform(AttributeValue: Transform): boolean;
	SetCustomGlobalTransform(AttributeValue: Transform): boolean;
	SetCustomAssetInstanceUid(AttributeValue: string): boolean;
	RemoveSpecializedType(SpecializedType: string): boolean;
	RemoveMaterialDependencyUid(MaterialDependencyUid: string): boolean;
	IsSpecializedTypeContains(SpecializedType: string): boolean;
	GetSpecializedTypes(OutSpecializedTypes?: string[]): {OutSpecializedTypes: string[]};
	GetSpecializedTypeCount(): number;
	GetSpecializedType(index: number,OutSpecializedType?: string): {OutSpecializedType: string};
	GetMaterialDependencyUidsCount(): number;
	GetMaterialDependencyUids(OutMaterialDependencyUids?: string[]): {OutMaterialDependencyUids: string[]};
	GetMaterialDependencyUid(index: number,OutMaterialDependencyUid?: string): {OutMaterialDependencyUid: string};
	GetCustomLocalTransform(AttributeValue?: Transform): {AttributeValue: Transform, $: boolean};
	GetCustomGlobalTransform(AttributeValue?: Transform): {AttributeValue: Transform, $: boolean};
	GetCustomAssetInstanceUid(AttributeValue?: string): {AttributeValue: string, $: boolean};
	AddSpecializedType(SpecializedType: string): boolean;
	AddMaterialDependencyUid(MaterialDependencyUid: string): boolean;
	static C(Other: UObject | any): InterchangeSceneNode;
}

declare class InterchangeSkeletalMeshFactoryNode extends InterchangeBaseNode { 
	static Load(ResourceName: string): InterchangeSkeletalMeshFactoryNode;
	static Find(Outer: UObject, ResourceName: string): InterchangeSkeletalMeshFactoryNode;
	static GetDefaultObject(): InterchangeSkeletalMeshFactoryNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeSkeletalMeshFactoryNode;
	SetCustomVertexColorReplace(AttributeValue: boolean): boolean;
	SetCustomVertexColorOverride(AttributeValue: Color): boolean;
	SetCustomVertexColorIgnore(AttributeValue: boolean): boolean;
	SetCustomSkeletonSoftObjectPath(AttributeValue: SoftObjectPath): boolean;
	SetCustomPhysicAssetSoftObjectPath(AttributeValue: SoftObjectPath): boolean;
	SetCustomImportMorphTarget(AttributeValue: boolean): boolean;
	SetCustomCreatePhysicsAsset(AttributeValue: boolean): boolean;
	RemoveLodDataUniqueId(LodDataUniqueId: string): boolean;
	InitializeSkeletalMeshNode(UniqueId: string,DisplayLabel: string,InAssetClass: string): void;
	GetObjectClass(): UnrealEngineClass;
	GetLodDataUniqueIds(OutLodDataUniqueIds?: string[]): {OutLodDataUniqueIds: string[]};
	GetLodDataCount(): number;
	GetCustomVertexColorReplace(AttributeValue?: boolean): {AttributeValue: boolean, $: boolean};
	GetCustomVertexColorOverride(AttributeValue?: Color): {AttributeValue: Color, $: boolean};
	GetCustomVertexColorIgnore(AttributeValue?: boolean): {AttributeValue: boolean, $: boolean};
	GetCustomSkeletonSoftObjectPath(AttributeValue?: SoftObjectPath): {AttributeValue: SoftObjectPath, $: boolean};
	GetCustomPhysicAssetSoftObjectPath(AttributeValue?: SoftObjectPath): {AttributeValue: SoftObjectPath, $: boolean};
	GetCustomImportMorphTarget(AttributeValue?: boolean): {AttributeValue: boolean, $: boolean};
	GetCustomCreatePhysicsAsset(AttributeValue?: boolean): {AttributeValue: boolean, $: boolean};
	AddLodDataUniqueId(LodDataUniqueId: string): boolean;
	static C(Other: UObject | any): InterchangeSkeletalMeshFactoryNode;
}

declare class InterchangeSkeletalMeshLodDataNode extends InterchangeBaseNode { 
	static Load(ResourceName: string): InterchangeSkeletalMeshLodDataNode;
	static Find(Outer: UObject, ResourceName: string): InterchangeSkeletalMeshLodDataNode;
	static GetDefaultObject(): InterchangeSkeletalMeshLodDataNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeSkeletalMeshLodDataNode;
	SetCustomSkeletonUid(AttributeValue: string): boolean;
	RemoveMeshUid(BlendShapeName: string): boolean;
	RemoveAllMeshes(): boolean;
	GetMeshUidsCount(): number;
	GetMeshUids(OutBlendShapeNames?: string[]): {OutBlendShapeNames: string[]};
	GetCustomSkeletonUid(AttributeValue?: string): {AttributeValue: string, $: boolean};
	AddMeshUid(BlendShapeName: string): boolean;
	static C(Other: UObject | any): InterchangeSkeletalMeshLodDataNode;
}

declare class InterchangeSkeletonFactoryNode extends InterchangeBaseNode { 
	static Load(ResourceName: string): InterchangeSkeletonFactoryNode;
	static Find(Outer: UObject, ResourceName: string): InterchangeSkeletonFactoryNode;
	static GetDefaultObject(): InterchangeSkeletonFactoryNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeSkeletonFactoryNode;
	SetCustomRootJointUid(AttributeValue: string): boolean;
	InitializeSkeletonNode(UniqueId: string,DisplayLabel: string,InAssetClass: string): void;
	GetObjectClass(): UnrealEngineClass;
	GetCustomRootJointUid(AttributeValue?: string): {AttributeValue: string, $: boolean};
	static C(Other: UObject | any): InterchangeSkeletonFactoryNode;
}

declare class InterchangeStaticMeshFactoryNode extends InterchangeBaseNode { 
	static Load(ResourceName: string): InterchangeStaticMeshFactoryNode;
	static Find(Outer: UObject, ResourceName: string): InterchangeStaticMeshFactoryNode;
	static GetDefaultObject(): InterchangeStaticMeshFactoryNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeStaticMeshFactoryNode;
	SetCustomVertexColorReplace(AttributeValue: boolean): boolean;
	SetCustomVertexColorOverride(AttributeValue: Color): boolean;
	SetCustomVertexColorIgnore(AttributeValue: boolean): boolean;
	RemoveLodDataUniqueId(LodDataUniqueId: string): boolean;
	InitializeStaticMeshNode(UniqueId: string,DisplayLabel: string,InAssetClass: string): void;
	GetObjectClass(): UnrealEngineClass;
	GetLodDataUniqueIds(OutLodDataUniqueIds?: string[]): {OutLodDataUniqueIds: string[]};
	GetLodDataCount(): number;
	GetCustomVertexColorReplace(AttributeValue?: boolean): {AttributeValue: boolean, $: boolean};
	GetCustomVertexColorOverride(AttributeValue?: Color): {AttributeValue: Color, $: boolean};
	GetCustomVertexColorIgnore(AttributeValue?: boolean): {AttributeValue: boolean, $: boolean};
	AddLodDataUniqueId(LodDataUniqueId: string): boolean;
	static C(Other: UObject | any): InterchangeStaticMeshFactoryNode;
}

declare class InterchangeStaticMeshLodDataNode extends InterchangeBaseNode { 
	static Load(ResourceName: string): InterchangeStaticMeshLodDataNode;
	static Find(Outer: UObject, ResourceName: string): InterchangeStaticMeshLodDataNode;
	static GetDefaultObject(): InterchangeStaticMeshLodDataNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeStaticMeshLodDataNode;
	RemoveMeshUid(MeshName: string): boolean;
	RemoveAllMeshes(): boolean;
	GetMeshUidsCount(): number;
	GetMeshUids(OutMeshNames?: string[]): {OutMeshNames: string[]};
	AddMeshUid(MeshName: string): boolean;
	static C(Other: UObject | any): InterchangeStaticMeshLodDataNode;
}

declare class InterchangeTextureFactoryNode extends InterchangeBaseNode { 
	static Load(ResourceName: string): InterchangeTextureFactoryNode;
	static Find(Outer: UObject, ResourceName: string): InterchangeTextureFactoryNode;
	static GetDefaultObject(): InterchangeTextureFactoryNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeTextureFactoryNode;
	SetCustomVirtualTextureStreaming(AttributeValue: boolean,bAddApplyDelegate: boolean): boolean;
	SetCustomTranslatedTextureNodeUid(AttributeValue: string): boolean;
	SetCustomSRGB(AttributeValue: boolean,bAddApplyDelegate: boolean): boolean;
	SetCustomPowerOfTwoMode(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	SetCustomPaddingColor(AttributeValue: Color,bAddApplyDelegate: boolean): boolean;
	SetCustomMipLoadOptions(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	SetCustomMipGenSettings(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	SetCustomMaxTextureSize(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	SetCustomLossyCompressionAmount(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	SetCustomLODGroup(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	SetCustomLODBias(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	SetCustomFilter(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	SetCustomDownscaleOptions(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	SetCustomDownscale(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	SetCustomDeferCompression(AttributeValue: boolean,bAddApplyDelegate: boolean): boolean;
	SetCustomCompressionSettings(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	SetCustomCompressionQuality(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	SetCustomCompressionNoAlpha(AttributeValue: boolean,bAddApplyDelegate: boolean): boolean;
	SetCustomCompositeTextureMode(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	SetCustomCompositePower(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	SetCustomChromaKeyThreshold(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	SetCustomChromaKeyColor(AttributeValue: Color,bAddApplyDelegate: boolean): boolean;
	SetCustombUseLegacyGamma(AttributeValue: boolean,bAddApplyDelegate: boolean): boolean;
	SetCustombPreserveBorder(AttributeValue: boolean,bAddApplyDelegate: boolean): boolean;
	SetCustombFlipGreenChannel(AttributeValue: boolean,bAddApplyDelegate: boolean): boolean;
	SetCustombDoScaleMipsForAlphaCoverage(AttributeValue: boolean,bAddApplyDelegate: boolean): boolean;
	SetCustombDitherMipMapAlpha(AttributeValue: boolean,bAddApplyDelegate: boolean): boolean;
	SetCustombChromaKeyTexture(AttributeValue: boolean,bAddApplyDelegate: boolean): boolean;
	SetCustomAlphaCoverageThresholds(AttributeValue: Vector4,bAddApplyDelegate: boolean): boolean;
	SetCustomAdjustVibrance(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	SetCustomAdjustSaturation(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	SetCustomAdjustRGBCurve(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	SetCustomAdjustMinAlpha(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	SetCustomAdjustMaxAlpha(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	SetCustomAdjustHue(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	SetCustomAdjustBrightnessCurve(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	SetCustomAdjustBrightness(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	SetCustomAddressY(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	SetCustomAddressX(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	InitializeTextureNode(UniqueId: string,DisplayLabel: string,InAssetClass: string,InAssetName: string): void;
	GetObjectClass(): UnrealEngineClass;
	GetCustomVirtualTextureStreaming(AttributeValue?: boolean): {AttributeValue: boolean, $: boolean};
	GetCustomTranslatedTextureNodeUid(AttributeValue?: string): {AttributeValue: string, $: boolean};
	GetCustomSRGB(AttributeValue?: boolean): {AttributeValue: boolean, $: boolean};
	GetCustomPowerOfTwoMode(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomPaddingColor(AttributeValue?: Color): {AttributeValue: Color, $: boolean};
	GetCustomMipLoadOptions(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomMipGenSettings(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomMaxTextureSize(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomLossyCompressionAmount(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomLODGroup(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomLODBias(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomFilter(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomDownscaleOptions(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomDownscale(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomDeferCompression(AttributeValue?: boolean): {AttributeValue: boolean, $: boolean};
	GetCustomCompressionSettings(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomCompressionQuality(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomCompressionNoAlpha(AttributeValue?: boolean): {AttributeValue: boolean, $: boolean};
	GetCustomCompositeTextureMode(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomCompositePower(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomChromaKeyThreshold(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomChromaKeyColor(AttributeValue?: Color): {AttributeValue: Color, $: boolean};
	GetCustombUseLegacyGamma(AttributeValue?: boolean): {AttributeValue: boolean, $: boolean};
	GetCustombPreserveBorder(AttributeValue?: boolean): {AttributeValue: boolean, $: boolean};
	GetCustombFlipGreenChannel(AttributeValue?: boolean): {AttributeValue: boolean, $: boolean};
	GetCustombDoScaleMipsForAlphaCoverage(AttributeValue?: boolean): {AttributeValue: boolean, $: boolean};
	GetCustombDitherMipMapAlpha(AttributeValue?: boolean): {AttributeValue: boolean, $: boolean};
	GetCustombChromaKeyTexture(AttributeValue?: boolean): {AttributeValue: boolean, $: boolean};
	GetCustomAlphaCoverageThresholds(AttributeValue?: Vector4): {AttributeValue: Vector4, $: boolean};
	GetCustomAdjustVibrance(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomAdjustSaturation(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomAdjustRGBCurve(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomAdjustMinAlpha(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomAdjustMaxAlpha(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomAdjustHue(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomAdjustBrightnessCurve(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomAdjustBrightness(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomAddressY(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomAddressX(AttributeValue?: number): {AttributeValue: number, $: boolean};
	static C(Other: UObject | any): InterchangeTextureFactoryNode;
}

declare class InterchangeTexture2DArrayFactoryNode extends InterchangeTextureFactoryNode { 
	static Load(ResourceName: string): InterchangeTexture2DArrayFactoryNode;
	static Find(Outer: UObject, ResourceName: string): InterchangeTexture2DArrayFactoryNode;
	static GetDefaultObject(): InterchangeTexture2DArrayFactoryNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeTexture2DArrayFactoryNode;
	SetCustomAddressZ(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	GetCustomAddressZ(AttributeValue?: number): {AttributeValue: number, $: boolean};
	static C(Other: UObject | any): InterchangeTexture2DArrayFactoryNode;
}

declare class InterchangeTextureNode extends InterchangeBaseNode { 
	static Load(ResourceName: string): InterchangeTextureNode;
	static Find(Outer: UObject, ResourceName: string): InterchangeTextureNode;
	static GetDefaultObject(): InterchangeTextureNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeTextureNode;
	SetPayLoadKey(PayloadKey: string): void;
	static C(Other: UObject | any): InterchangeTextureNode;
}

declare class InterchangeTexture2DArrayNode extends InterchangeTextureNode { 
	static Load(ResourceName: string): InterchangeTexture2DArrayNode;
	static Find(Outer: UObject, ResourceName: string): InterchangeTexture2DArrayNode;
	static GetDefaultObject(): InterchangeTexture2DArrayNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeTexture2DArrayNode;
	static C(Other: UObject | any): InterchangeTexture2DArrayNode;
}

declare class InterchangeTexture2DNode extends InterchangeTextureNode { 
	static Load(ResourceName: string): InterchangeTexture2DNode;
	static Find(Outer: UObject, ResourceName: string): InterchangeTexture2DNode;
	static GetDefaultObject(): InterchangeTexture2DNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeTexture2DNode;
	SetSourceBlocks(InSourceBlocks: any): void;
	GetSourceBlocks(): any;
	ClearSourceBlocksData(): void;
	static C(Other: UObject | any): InterchangeTexture2DNode;
}

declare class InterchangeTextureCubeFactoryNode extends InterchangeTextureFactoryNode { 
	static Load(ResourceName: string): InterchangeTextureCubeFactoryNode;
	static Find(Outer: UObject, ResourceName: string): InterchangeTextureCubeFactoryNode;
	static GetDefaultObject(): InterchangeTextureCubeFactoryNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeTextureCubeFactoryNode;
	static C(Other: UObject | any): InterchangeTextureCubeFactoryNode;
}

declare class InterchangeTextureCubeNode extends InterchangeTextureNode { 
	static Load(ResourceName: string): InterchangeTextureCubeNode;
	static Find(Outer: UObject, ResourceName: string): InterchangeTextureCubeNode;
	static GetDefaultObject(): InterchangeTextureCubeNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeTextureCubeNode;
	static C(Other: UObject | any): InterchangeTextureCubeNode;
}

declare class InterchangeTextureLightProfileFactoryNode extends InterchangeTextureFactoryNode { 
	static Load(ResourceName: string): InterchangeTextureLightProfileFactoryNode;
	static Find(Outer: UObject, ResourceName: string): InterchangeTextureLightProfileFactoryNode;
	static GetDefaultObject(): InterchangeTextureLightProfileFactoryNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeTextureLightProfileFactoryNode;
	SetCustomTextureMultiplier(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	SetCustomBrightness(AttributeValue: number,bAddApplyDelegate: boolean): boolean;
	GetCustomTextureMultiplier(AttributeValue?: number): {AttributeValue: number, $: boolean};
	GetCustomBrightness(AttributeValue?: number): {AttributeValue: number, $: boolean};
	static C(Other: UObject | any): InterchangeTextureLightProfileFactoryNode;
}

declare class InterchangeTextureLightProfileNode extends InterchangeTextureNode { 
	static Load(ResourceName: string): InterchangeTextureLightProfileNode;
	static Find(Outer: UObject, ResourceName: string): InterchangeTextureLightProfileNode;
	static GetDefaultObject(): InterchangeTextureLightProfileNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeTextureLightProfileNode;
	static C(Other: UObject | any): InterchangeTextureLightProfileNode;
}

declare class InterchangeActorFactory extends InterchangeFactoryBase { 
	static Load(ResourceName: string): InterchangeActorFactory;
	static Find(Outer: UObject, ResourceName: string): InterchangeActorFactory;
	static GetDefaultObject(): InterchangeActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeActorFactory;
	static C(Other: UObject | any): InterchangeActorFactory;
}

declare class InterchangeBlockedTexturePayloadInterface extends Interface { 
	static Load(ResourceName: string): InterchangeBlockedTexturePayloadInterface;
	static Find(Outer: UObject, ResourceName: string): InterchangeBlockedTexturePayloadInterface;
	static GetDefaultObject(): InterchangeBlockedTexturePayloadInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeBlockedTexturePayloadInterface;
	static C(Other: UObject | any): InterchangeBlockedTexturePayloadInterface;
}

declare class InterchangeBMPTranslator extends InterchangeTranslatorBase { 
	static Load(ResourceName: string): InterchangeBMPTranslator;
	static Find(Outer: UObject, ResourceName: string): InterchangeBMPTranslator;
	static GetDefaultObject(): InterchangeBMPTranslator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeBMPTranslator;
	static C(Other: UObject | any): InterchangeBMPTranslator;
}

declare class InterchangeDDSTranslator extends InterchangeTranslatorBase { 
	static Load(ResourceName: string): InterchangeDDSTranslator;
	static Find(Outer: UObject, ResourceName: string): InterchangeDDSTranslator;
	static GetDefaultObject(): InterchangeDDSTranslator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeDDSTranslator;
	static C(Other: UObject | any): InterchangeDDSTranslator;
}

declare class InterchangeEXRTranslator extends InterchangeTranslatorBase { 
	static Load(ResourceName: string): InterchangeEXRTranslator;
	static Find(Outer: UObject, ResourceName: string): InterchangeEXRTranslator;
	static GetDefaultObject(): InterchangeEXRTranslator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeEXRTranslator;
	static C(Other: UObject | any): InterchangeEXRTranslator;
}

declare class InterchangeFbxTranslator extends InterchangeTranslatorBase { 
	static Load(ResourceName: string): InterchangeFbxTranslator;
	static Find(Outer: UObject, ResourceName: string): InterchangeFbxTranslator;
	static GetDefaultObject(): InterchangeFbxTranslator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeFbxTranslator;
	static C(Other: UObject | any): InterchangeFbxTranslator;
}

declare class InterchangeHDRTranslator extends InterchangeTranslatorBase { 
	static Load(ResourceName: string): InterchangeHDRTranslator;
	static Find(Outer: UObject, ResourceName: string): InterchangeHDRTranslator;
	static GetDefaultObject(): InterchangeHDRTranslator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeHDRTranslator;
	static C(Other: UObject | any): InterchangeHDRTranslator;
}

declare class InterchangeIESTranslator extends InterchangeTranslatorBase { 
	static Load(ResourceName: string): InterchangeIESTranslator;
	static Find(Outer: UObject, ResourceName: string): InterchangeIESTranslator;
	static GetDefaultObject(): InterchangeIESTranslator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeIESTranslator;
	static C(Other: UObject | any): InterchangeIESTranslator;
}

declare class InterchangeJPGTranslator extends InterchangeTranslatorBase { 
	static Load(ResourceName: string): InterchangeJPGTranslator;
	static Find(Outer: UObject, ResourceName: string): InterchangeJPGTranslator;
	static GetDefaultObject(): InterchangeJPGTranslator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeJPGTranslator;
	static C(Other: UObject | any): InterchangeJPGTranslator;
}

declare class InterchangeMaterialFactory extends InterchangeFactoryBase { 
	static Load(ResourceName: string): InterchangeMaterialFactory;
	static Find(Outer: UObject, ResourceName: string): InterchangeMaterialFactory;
	static GetDefaultObject(): InterchangeMaterialFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeMaterialFactory;
	static C(Other: UObject | any): InterchangeMaterialFactory;
}

declare class InterchangePCXTranslator extends InterchangeTranslatorBase { 
	static Load(ResourceName: string): InterchangePCXTranslator;
	static Find(Outer: UObject, ResourceName: string): InterchangePCXTranslator;
	static GetDefaultObject(): InterchangePCXTranslator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangePCXTranslator;
	static C(Other: UObject | any): InterchangePCXTranslator;
}

declare class InterchangePhysicsAssetFactory extends InterchangeFactoryBase { 
	static Load(ResourceName: string): InterchangePhysicsAssetFactory;
	static Find(Outer: UObject, ResourceName: string): InterchangePhysicsAssetFactory;
	static GetDefaultObject(): InterchangePhysicsAssetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangePhysicsAssetFactory;
	static C(Other: UObject | any): InterchangePhysicsAssetFactory;
}

declare class InterchangePNGTranslator extends InterchangeTranslatorBase { 
	static Load(ResourceName: string): InterchangePNGTranslator;
	static Find(Outer: UObject, ResourceName: string): InterchangePNGTranslator;
	static GetDefaultObject(): InterchangePNGTranslator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangePNGTranslator;
	static C(Other: UObject | any): InterchangePNGTranslator;
}

declare class InterchangePSDTranslator extends InterchangeTranslatorBase { 
	static Load(ResourceName: string): InterchangePSDTranslator;
	static Find(Outer: UObject, ResourceName: string): InterchangePSDTranslator;
	static GetDefaultObject(): InterchangePSDTranslator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangePSDTranslator;
	static C(Other: UObject | any): InterchangePSDTranslator;
}

declare class InterchangeSkeletalMeshFactory extends InterchangeFactoryBase { 
	static Load(ResourceName: string): InterchangeSkeletalMeshFactory;
	static Find(Outer: UObject, ResourceName: string): InterchangeSkeletalMeshFactory;
	static GetDefaultObject(): InterchangeSkeletalMeshFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeSkeletalMeshFactory;
	static C(Other: UObject | any): InterchangeSkeletalMeshFactory;
}

declare class InterchangeSkeletalMeshPayloadInterface extends Interface { 
	static Load(ResourceName: string): InterchangeSkeletalMeshPayloadInterface;
	static Find(Outer: UObject, ResourceName: string): InterchangeSkeletalMeshPayloadInterface;
	static GetDefaultObject(): InterchangeSkeletalMeshPayloadInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeSkeletalMeshPayloadInterface;
	static C(Other: UObject | any): InterchangeSkeletalMeshPayloadInterface;
}

declare class InterchangeSkeletonFactory extends InterchangeFactoryBase { 
	static Load(ResourceName: string): InterchangeSkeletonFactory;
	static Find(Outer: UObject, ResourceName: string): InterchangeSkeletonFactory;
	static GetDefaultObject(): InterchangeSkeletonFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeSkeletonFactory;
	static C(Other: UObject | any): InterchangeSkeletonFactory;
}

declare class InterchangeSlicedTexturePayloadInterface extends Interface { 
	static Load(ResourceName: string): InterchangeSlicedTexturePayloadInterface;
	static Find(Outer: UObject, ResourceName: string): InterchangeSlicedTexturePayloadInterface;
	static GetDefaultObject(): InterchangeSlicedTexturePayloadInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeSlicedTexturePayloadInterface;
	static C(Other: UObject | any): InterchangeSlicedTexturePayloadInterface;
}

declare class InterchangeStaticMeshFactory extends InterchangeFactoryBase { 
	static Load(ResourceName: string): InterchangeStaticMeshFactory;
	static Find(Outer: UObject, ResourceName: string): InterchangeStaticMeshFactory;
	static GetDefaultObject(): InterchangeStaticMeshFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeStaticMeshFactory;
	static C(Other: UObject | any): InterchangeStaticMeshFactory;
}

declare class InterchangeStaticMeshPayloadInterface extends Interface { 
	static Load(ResourceName: string): InterchangeStaticMeshPayloadInterface;
	static Find(Outer: UObject, ResourceName: string): InterchangeStaticMeshPayloadInterface;
	static GetDefaultObject(): InterchangeStaticMeshPayloadInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeStaticMeshPayloadInterface;
	static C(Other: UObject | any): InterchangeStaticMeshPayloadInterface;
}

declare class InterchangeTextureFactory extends InterchangeFactoryBase { 
	static Load(ResourceName: string): InterchangeTextureFactory;
	static Find(Outer: UObject, ResourceName: string): InterchangeTextureFactory;
	static GetDefaultObject(): InterchangeTextureFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeTextureFactory;
	static C(Other: UObject | any): InterchangeTextureFactory;
}

declare class InterchangeTextureLightProfilePayloadInterface extends Interface { 
	static Load(ResourceName: string): InterchangeTextureLightProfilePayloadInterface;
	static Find(Outer: UObject, ResourceName: string): InterchangeTextureLightProfilePayloadInterface;
	static GetDefaultObject(): InterchangeTextureLightProfilePayloadInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeTextureLightProfilePayloadInterface;
	static C(Other: UObject | any): InterchangeTextureLightProfilePayloadInterface;
}

declare class InterchangeTexturePayloadInterface extends Interface { 
	static Load(ResourceName: string): InterchangeTexturePayloadInterface;
	static Find(Outer: UObject, ResourceName: string): InterchangeTexturePayloadInterface;
	static GetDefaultObject(): InterchangeTexturePayloadInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeTexturePayloadInterface;
	static C(Other: UObject | any): InterchangeTexturePayloadInterface;
}

declare class InterchangeTGATranslator extends InterchangeTranslatorBase { 
	static Load(ResourceName: string): InterchangeTGATranslator;
	static Find(Outer: UObject, ResourceName: string): InterchangeTGATranslator;
	static GetDefaultObject(): InterchangeTGATranslator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeTGATranslator;
	static C(Other: UObject | any): InterchangeTGATranslator;
}

declare class InterchangeTIFFTranslator extends InterchangeTranslatorBase { 
	static Load(ResourceName: string): InterchangeTIFFTranslator;
	static Find(Outer: UObject, ResourceName: string): InterchangeTIFFTranslator;
	static GetDefaultObject(): InterchangeTIFFTranslator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeTIFFTranslator;
	static C(Other: UObject | any): InterchangeTIFFTranslator;
}

declare class InterchangeUDIMTranslator extends InterchangeTranslatorBase { 
	UdimRegexPattern: string;
	static Load(ResourceName: string): InterchangeUDIMTranslator;
	static Find(Outer: UObject, ResourceName: string): InterchangeUDIMTranslator;
	static GetDefaultObject(): InterchangeUDIMTranslator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeUDIMTranslator;
	static C(Other: UObject | any): InterchangeUDIMTranslator;
}

declare class InterchangeResultMeshWarning extends InterchangeResultWarning { 
	MeshName: string;
	static Load(ResourceName: string): InterchangeResultMeshWarning;
	static Find(Outer: UObject, ResourceName: string): InterchangeResultMeshWarning;
	static GetDefaultObject(): InterchangeResultMeshWarning;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeResultMeshWarning;
	static C(Other: UObject | any): InterchangeResultMeshWarning;
}

declare class InterchangeResultMeshError extends InterchangeResultError { 
	MeshName: string;
	static Load(ResourceName: string): InterchangeResultMeshError;
	static Find(Outer: UObject, ResourceName: string): InterchangeResultMeshError;
	static GetDefaultObject(): InterchangeResultMeshError;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeResultMeshError;
	static C(Other: UObject | any): InterchangeResultMeshError;
}

declare class InterchangeResultMeshWarning_Generic extends InterchangeResultMeshWarning { 
	text: string;
	static Load(ResourceName: string): InterchangeResultMeshWarning_Generic;
	static Find(Outer: UObject, ResourceName: string): InterchangeResultMeshWarning_Generic;
	static GetDefaultObject(): InterchangeResultMeshWarning_Generic;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeResultMeshWarning_Generic;
	static C(Other: UObject | any): InterchangeResultMeshWarning_Generic;
}

declare class InterchangeResultMeshError_Generic extends InterchangeResultMeshError { 
	text: string;
	static Load(ResourceName: string): InterchangeResultMeshError_Generic;
	static Find(Outer: UObject, ResourceName: string): InterchangeResultMeshError_Generic;
	static GetDefaultObject(): InterchangeResultMeshError_Generic;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeResultMeshError_Generic;
	static C(Other: UObject | any): InterchangeResultMeshError_Generic;
}

declare class InterchangeResultMeshWarning_TooManyUVs extends InterchangeResultMeshWarning { 
	ExcessUVs: number;
	static Load(ResourceName: string): InterchangeResultMeshWarning_TooManyUVs;
	static Find(Outer: UObject, ResourceName: string): InterchangeResultMeshWarning_TooManyUVs;
	static GetDefaultObject(): InterchangeResultMeshWarning_TooManyUVs;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeResultMeshWarning_TooManyUVs;
	static C(Other: UObject | any): InterchangeResultMeshWarning_TooManyUVs;
}

declare class InterchangeTextureWriter extends InterchangeWriterBase { 
	static Load(ResourceName: string): InterchangeTextureWriter;
	static Find(Outer: UObject, ResourceName: string): InterchangeTextureWriter;
	static GetDefaultObject(): InterchangeTextureWriter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeTextureWriter;
	static C(Other: UObject | any): InterchangeTextureWriter;
}

declare type EInterchangeVertexColorImportOption = 'IVCIO_Replace' | 'IVCIO_Ignore' | 'IVCIO_Override' | 'IVCIO_MAX';
declare var EInterchangeVertexColorImportOption : { IVCIO_Replace:'IVCIO_Replace',IVCIO_Ignore:'IVCIO_Ignore',IVCIO_Override:'IVCIO_Override',IVCIO_MAX:'IVCIO_MAX', };
declare class InterchangeGenericAssetsPipeline extends InterchangePipelineBase { 
	bUseSourceNameForAsset: boolean;
	bImportLods: boolean;
	bBakeMeshes: boolean;
	VertexColorImportOption: EInterchangeVertexColorImportOption;
	VertexOverrideColor: Color;
	bImportStaticMeshes: boolean;
	bCombineStaticMeshes: boolean;
	Skeleton: Skeleton;
	bImportSkeletalMeshes: boolean;
	bCombineSkeletalMeshes: boolean;
	bImportMorphTargets: boolean;
	bCreatePhysicsAsset: boolean;
	PhysicsAsset: PhysicsAsset;
	bImportMaterials: boolean;
	bImportTextures: boolean;
	bDetectNormalMapTexture: boolean;
	bFlipNormalMapGreenChannel: boolean;
	FileExtensionsToImportAsLongLatCubemap: any;
	static Load(ResourceName: string): InterchangeGenericAssetsPipeline;
	static Find(Outer: UObject, ResourceName: string): InterchangeGenericAssetsPipeline;
	static GetDefaultObject(): InterchangeGenericAssetsPipeline;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeGenericAssetsPipeline;
	static C(Other: UObject | any): InterchangeGenericAssetsPipeline;
}

declare class InterchangeGenericLevelPipeline extends InterchangePipelineBase { 
	static Load(ResourceName: string): InterchangeGenericLevelPipeline;
	static Find(Outer: UObject, ResourceName: string): InterchangeGenericLevelPipeline;
	static GetDefaultObject(): InterchangeGenericLevelPipeline;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangeGenericLevelPipeline;
	static C(Other: UObject | any): InterchangeGenericLevelPipeline;
}

declare class InterchangeMeshInstance { 
	MeshInstanceUid: string;
	LodGroupNode: InterchangeSceneNode;
	bReferenceSkinnedMesh: boolean;
	bReferenceBlendShape: boolean;
	SceneNodePerLodIndex: any;
	ReferencingMeshGeometryUids: string[];
	clone() : InterchangeMeshInstance;
	static C(Other: UObject | any): InterchangeMeshInstance;
}

declare class InterchangeMeshGeometry { 
	MeshUid: string;
	MeshNode: InterchangeMeshNode;
	ReferencingMeshInstanceUids: string[];
	clone() : InterchangeMeshGeometry;
	static C(Other: UObject | any): InterchangeMeshGeometry;
}

declare class InterchangePipelineMeshesUtilities extends UObject { 
	static Load(ResourceName: string): InterchangePipelineMeshesUtilities;
	static Find(Outer: UObject, ResourceName: string): InterchangePipelineMeshesUtilities;
	static GetDefaultObject(): InterchangePipelineMeshesUtilities;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InterchangePipelineMeshesUtilities;
	IsValidMeshInstanceUid(MeshInstanceUid: string): boolean;
	IsValidMeshGeometryUid(MeshGeometryUid: string): boolean;
	GetMeshInstanceSkeletonRootUid(MeshInstanceUid: string): string;
	GetMeshInstanceByUid(MeshInstanceUid: string): InterchangeMeshInstance;
	GetMeshGeometrySkeletonRootUid(MeshGeometryUid: string): string;
	GetMeshGeometryByUid(MeshGeometryUid: string): InterchangeMeshGeometry;
	GetAllStaticMeshInstance(MeshInstanceUids?: string[]): {MeshInstanceUids: string[]};
	GetAllStaticMeshGeometry(MeshGeometryUids?: string[]): {MeshGeometryUids: string[]};
	GetAllSkinnedMeshInstance(MeshInstanceUids?: string[]): {MeshInstanceUids: string[]};
	GetAllSkinnedMeshGeometry(MeshGeometryUids?: string[]): {MeshGeometryUids: string[]};
	GetAllMeshInstanceUidsUsingMeshGeometryUid(MeshGeometryUid: string,MeshInstanceUids?: string[]): {MeshInstanceUids: string[]};
	GetAllMeshInstanceUids(MeshInstanceUids?: string[]): {MeshInstanceUids: string[]};
	GetAllMeshGeometryNotInstanced(MeshGeometryUids?: string[]): {MeshGeometryUids: string[]};
	GetAllMeshGeometry(MeshGeometryUids?: string[]): {MeshGeometryUids: string[]};
	static CreateInterchangePipelineMeshesUtilities(BaseNodeContainer: InterchangeBaseNodeContainer): InterchangePipelineMeshesUtilities;
	static C(Other: UObject | any): InterchangePipelineMeshesUtilities;
}

declare class MegascansSettings extends UObject { 
	bCreateFoliage: boolean;
	bApplyToSelection: boolean;
	static Load(ResourceName: string): MegascansSettings;
	static Find(Outer: UObject, ResourceName: string): MegascansSettings;
	static GetDefaultObject(): MegascansSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MegascansSettings;
	static C(Other: UObject | any): MegascansSettings;
}

declare class MaterialBlendSettings extends UObject { 
	BlendedMaterialName: string;
	BlendedMaterialPath: DirectoryPath;
	static Load(ResourceName: string): MaterialBlendSettings;
	static Find(Outer: UObject, ResourceName: string): MaterialBlendSettings;
	static GetDefaultObject(): MaterialBlendSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialBlendSettings;
	static C(Other: UObject | any): MaterialBlendSettings;
}

declare class MaterialAssetSettings extends UObject { 
	MasterMaterial3d: string;
	MasterMaterialSurface: string;
	MasterMaterialPlant: string;
	static Load(ResourceName: string): MaterialAssetSettings;
	static Find(Outer: UObject, ResourceName: string): MaterialAssetSettings;
	static GetDefaultObject(): MaterialAssetSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialAssetSettings;
	static C(Other: UObject | any): MaterialAssetSettings;
}

declare class MaterialPresetsSettings extends UObject { 
	MasterMaterial3d: any;
	MasterMaterialSurface: any;
	MasterMaterialPlant: any;
	static Load(ResourceName: string): MaterialPresetsSettings;
	static Find(Outer: UObject, ResourceName: string): MaterialPresetsSettings;
	static GetDefaultObject(): MaterialPresetsSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialPresetsSettings;
	static C(Other: UObject | any): MaterialPresetsSettings;
}

declare class AssetInfo { 
	Path: string;
	Version: string;
	clone() : AssetInfo;
	static C(Other: UObject | any): AssetInfo;
}

declare class VersionData { 
	Assets: AssetInfo[];
	clone() : VersionData;
	static C(Other: UObject | any): VersionData;
}

declare class VersionInfoHandler extends UObject { 
	CommonVersionData: VersionData;
	static Load(ResourceName: string): VersionInfoHandler;
	static Find(Outer: UObject, ResourceName: string): VersionInfoHandler;
	static GetDefaultObject(): VersionInfoHandler;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VersionInfoHandler;
	static Get(): VersionInfoHandler;
	static C(Other: UObject | any): VersionInfoHandler;
}

declare class WebJSCallbackBase { 
	clone() : WebJSCallbackBase;
	static C(Other: UObject | any): WebJSCallbackBase;
}

declare class WebJSFunction extends WebJSCallbackBase { 
	clone() : WebJSFunction;
	static C(Other: UObject | any): WebJSFunction;
}

declare class BrowserBinding extends UObject { 
	static Load(ResourceName: string): BrowserBinding;
	static Find(Outer: UObject, ResourceName: string): BrowserBinding;
	static GetDefaultObject(): BrowserBinding;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BrowserBinding;
	StartNodeProcess(): void;
	ShowLoginDialog(LoginUrl: string,ResponseCodeUrl: string): void;
	ShowDialog(Type: string,URL: string): void;
	SendSuccess(Value: string): void;
	SendFailure(Message: string): void;
	SaveAuthToken(Value: string): void;
	RestartNodeProcess(): void;
	OpenMegascansPluginSettings(): void;
	OpenExternalUrl(URL: string): void;
	OnExitCallback(OnExitJSCallback: WebJSFunction): void;
	OnDroppedCallback(OnDroppedJSCallback: WebJSFunction): void;
	OnDropDiscardedCallback(OnDropDiscardedJSCallback: WebJSFunction): void;
	Logout(): void;
	GetProjectPath(): string;
	GetAuthToken(): string;
	ExportDataToMSPlugin(Data: string): void;
	DragStarted(ImageUrl: string[],IDs: string[],Types: string[]): void;
	DialogSuccessCallback(DialogJSCallback: WebJSFunction): void;
	DialogFailCallback(DialogJSCallback: WebJSFunction): void;
	static C(Other: UObject | any): BrowserBinding;
}

declare class NodePort extends UObject { 
	static Load(ResourceName: string): NodePort;
	static Find(Outer: UObject, ResourceName: string): NodePort;
	static GetDefaultObject(): NodePort;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NodePort;
	IsNodeRunning(): boolean;
	GetNodePort(): string;
	static C(Other: UObject | any): NodePort;
}

declare class SubstanceFactory extends Factory { 
	static Load(ResourceName: string): SubstanceFactory;
	static Find(Outer: UObject, ResourceName: string): SubstanceFactory;
	static GetDefaultObject(): SubstanceFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubstanceFactory;
	SuppressImportOverwriteDialog(): void;
	ImportArchive(destinationPpath: string,Filename: string): SubstanceInstanceFactory;
	CreateMaterial(Value: boolean): void;
	CreateInstance(Value: boolean): void;
	static C(Other: UObject | any): SubstanceFactory;
}

declare class ReimportSubstanceFactory extends SubstanceFactory { 
	static Load(ResourceName: string): ReimportSubstanceFactory;
	static Find(Outer: UObject, ResourceName: string): ReimportSubstanceFactory;
	static GetDefaultObject(): ReimportSubstanceFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReimportSubstanceFactory;
	static C(Other: UObject | any): ReimportSubstanceFactory;
}

declare type ESubstanceMaterialParentType = 'Default' | 'Custom' | 'Generated' | 'ESubstanceMaterialParentType_MAX';
declare var ESubstanceMaterialParentType : { Default:'Default',Custom:'Custom',Generated:'Generated',ESubstanceMaterialParentType_MAX:'ESubstanceMaterialParentType_MAX', };
declare class SubstanceImportOptionsUi extends UObject { 
	bOverrideFullName: boolean;
	bOverrideInstancePath: boolean;
	bOverrideMaterialPath: boolean;
	bCreateInstance: boolean;
	bCreateMaterial: boolean;
	uMaterialParentType: ESubstanceMaterialParentType;
	ParentMaterial: Material;
	InstanceName: string;
	MaterialName: string;
	InstanceDestinationPath: string;
	MaterialDestinationPath: string;
	static Load(ResourceName: string): SubstanceImportOptionsUi;
	static Find(Outer: UObject, ResourceName: string): SubstanceImportOptionsUi;
	static GetDefaultObject(): SubstanceImportOptionsUi;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubstanceImportOptionsUi;
	static C(Other: UObject | any): SubstanceImportOptionsUi;
}

declare class SubstanceInstanceExporter extends Exporter { 
	static Load(ResourceName: string): SubstanceInstanceExporter;
	static Find(Outer: UObject, ResourceName: string): SubstanceInstanceExporter;
	static GetDefaultObject(): SubstanceInstanceExporter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SubstanceInstanceExporter;
	static C(Other: UObject | any): SubstanceInstanceExporter;
}

declare type EJavasriptTabActivationCause = 'UserClickedOnTab' | 'SetDirectly' | 'EJavasriptTabActivationCause_MAX';
declare var EJavasriptTabActivationCause : { UserClickedOnTab:'UserClickedOnTab',SetDirectly:'SetDirectly',EJavasriptTabActivationCause_MAX:'EJavasriptTabActivationCause_MAX', };
declare class JavascriptWorkspaceItem { 
	clone() : JavascriptWorkspaceItem;
	static C(Other: UObject | any): JavascriptWorkspaceItem;
	AddGroup(DisplayName: string): JavascriptWorkspaceItem;
	static AddGroup(Parent: JavascriptWorkspaceItem,DisplayName: string): JavascriptWorkspaceItem;
	static GetGroup(Name: string): JavascriptWorkspaceItem;
}

declare type EJavascriptTabRole = 'MajorTab' | 'PanelTab' | 'NomadTab' | 'DocumentTab' | 'EJavascriptTabRole_MAX';
declare var EJavascriptTabRole : { MajorTab:'MajorTab',PanelTab:'PanelTab',NomadTab:'NomadTab',DocumentTab:'DocumentTab',EJavascriptTabRole_MAX:'EJavascriptTabRole_MAX', };
declare class JavascriptEditorTab extends UObject { 
	OnSpawnTab: UnrealEngineDelegate<(Context: UObject) => Widget>;
	OnCloseTab: UnrealEngineDelegate<(Widget: Widget) => void>;
	OnTabActivatedCallback: UnrealEngineDelegate<(TabId: string, Cause: EJavasriptTabActivationCause) => void>;
	Group: JavascriptWorkspaceItem;
	TabId: string;
	DisplayName: string;
	Icon: JavascriptSlateIcon;
	bIsNomad: boolean;
	Role: EJavascriptTabRole;
	static Load(ResourceName: string): JavascriptEditorTab;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTab;
	static GetDefaultObject(): JavascriptEditorTab;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTab;
	ForceCommit(): void;
	Discard(): void;
	Commit(): void;
	CloseTab(Widget: Widget): void;
	ActivateInParent(): void;
	static C(Other: UObject | any): JavascriptEditorTab;
}

declare class JavascriptUICommandInfo { 
	clone() : JavascriptUICommandInfo;
	static C(Other: UObject | any): JavascriptUICommandInfo;
	static GenericCommand(What: string): JavascriptUICommandInfo;
}

declare class JavascriptUICommand { 
	ID: string;
	FriendlyName: string;
	Description: string;
	DefaultChord: InputChord;
	ActionType: EJavasrciptUserInterfaceActionType;
	CommandInfo: JavascriptUICommandInfo;
	IconStyleName: string;
	clone() : JavascriptUICommand;
	static C(Other: UObject | any): JavascriptUICommand;
}

declare class JavascriptBindingContext { 
	clone() : JavascriptBindingContext;
	static C(Other: UObject | any): JavascriptBindingContext;
	Destroy(): void;
	UI_COMMAND_Function(Command: JavascriptUICommand,InTextSubNamespace: string): JavascriptUICommandInfo;
	static Destroy(Context: JavascriptBindingContext): void;
	static UI_COMMAND_Function(This: JavascriptBindingContext,Command: JavascriptUICommand,InTextSubNamespace: string): JavascriptUICommandInfo;
	static NewBindingContext(InContextName: string,InContextDesc: string,InContextParent: string,InStyleSetName: string): JavascriptBindingContext;
}

declare class JavascriptUICommandList { 
	clone() : JavascriptUICommandList;
	static C(Other: UObject | any): JavascriptUICommandList;
	CreateMenuBarBuilder(UFunction: JavascriptFunction): void;
	CreateMenuBuilder(bInShouldCloseWindowAfterMenuSelection: boolean,UFunction: JavascriptFunction): void;
	CreateToolbarBuilder(Orientation: EOrientation,UFunction: JavascriptFunction): void;
	ProcessCommandBindings_KeyEvent(InKeyEvent: KeyEvent): boolean;
	ProcessCommandBindings_PointerEvent(InMouseEvent: UPointerEvent): boolean;
	static CreateMenuBarBuilder(CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): void;
	static CreateMenuBuilder(CommandList: JavascriptUICommandList,bInShouldCloseWindowAfterMenuSelection: boolean,UFunction: JavascriptFunction): void;
	static CreateToolbarBuilder(CommandList: JavascriptUICommandList,Orientation: EOrientation,UFunction: JavascriptFunction): void;
	static ProcessCommandBindings_KeyEvent(CommandList: JavascriptUICommandList,InKeyEvent: KeyEvent): boolean;
	static ProcessCommandBindings_PointerEvent(CommandList: JavascriptUICommandList,InMouseEvent: UPointerEvent): boolean;
	static CreateUICommandList(): JavascriptUICommandList;
	static GetLevelEditorActions(): JavascriptUICommandList;
}

declare class JavascriptUICommands extends UObject { 
	OnExecuteAction: UnrealEngineDelegate<(ID: string) => void>;
	OnCanExecuteAction: UnrealEngineDelegate<(ID: string) => boolean>;
	OnIsActionChecked: UnrealEngineDelegate<(ID: string) => boolean>;
	OnIsActionButtonVisible: UnrealEngineDelegate<(ID: string) => boolean>;
	Commands: JavascriptUICommand[];
	ContextName: string;
	ContextDesc: string;
	ContextNameParent: string;
	StyleSetName: string;
	TextSubNamespace: string;
	CommandInfos: JavascriptUICommandInfo[];
	BindingContext: JavascriptBindingContext;
	static Load(ResourceName: string): JavascriptUICommands;
	static Find(Outer: UObject, ResourceName: string): JavascriptUICommands;
	static GetDefaultObject(): JavascriptUICommands;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUICommands;
	Uninitialize(): void;
	Unbind(List: JavascriptUICommandList): void;
	Refresh(): void;
	Initialize(): void;
	GetAction(ID: string): JavascriptUICommandInfo;
	Discard(): void;
	Commit(): void;
	static BroadcastCommandsChanged(InContextName: string): void;
	Bind(List: JavascriptUICommandList): void;
	static C(Other: UObject | any): JavascriptUICommands;
}

declare type EJavascriptExtensionHook = 'Before' | 'After' | 'First' | 'EJavascriptExtensionHook_MAX';
declare var EJavascriptExtensionHook : { Before:'Before',After:'After',First:'First',EJavascriptExtensionHook_MAX:'EJavascriptExtensionHook_MAX', };
declare class JavascriptMenuExtension { 
	ExtensionHook: string;
	HookPosition: EJavascriptExtensionHook;
	clone() : JavascriptMenuExtension;
	static C(Other: UObject | any): JavascriptMenuExtension;
}

declare class JavascriptUIExtender extends UObject { 
	MenuExtensions: JavascriptMenuExtension[];
	ToolbarExtensions: JavascriptMenuExtension[];
	OnHook: UnrealEngineDelegate<(Hook: string) => void>;
	static Load(ResourceName: string): JavascriptUIExtender;
	static Find(Outer: UObject, ResourceName: string): JavascriptUIExtender;
	static GetDefaultObject(): JavascriptUIExtender;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUIExtender;
	static GetTopCommandList(): JavascriptUICommandList;
	static EndSection(): void;
	static Bind(Commands: JavascriptUICommands): void;
	static BeginSection(Name: string,text: string): void;
	static AddToolBarButton(Commands: JavascriptUICommands,ID: string): void;
	static AddMenuSeparator(): void;
	static AddMenuEntry(Commands: JavascriptUICommands,ID: string): void;
	static C(Other: UObject | any): JavascriptUIExtender;
}

declare class JavascriptAssetEditorToolkit extends UObject { 
	ToolkitFName: string;
	Layout: string;
	BaseToolkitName: string;
	ToolkitName: string;
	WorldCentricTabColorScale: LinearColor;
	WorldCentricTabPrefix: string;
	Tabs: JavascriptEditorTab[];
	Commands: JavascriptUICommands;
	MenuExtender: JavascriptUIExtender;
	ToolbarExtender: JavascriptUIExtender;
	TestArray: number[];
	static Load(ResourceName: string): JavascriptAssetEditorToolkit;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetEditorToolkit;
	static GetDefaultObject(): JavascriptAssetEditorToolkit;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetEditorToolkit;
	Refresh(): void;
	Discard(): void;
	Commit(): void;
	static C(Other: UObject | any): JavascriptAssetEditorToolkit;
}

declare class JavascriptAssetPicker extends Widget { 
	OnGetDefaultValue: UnrealEngineDelegate<() => UObject>;
	OnSetDefaultValue: UnrealEngineDelegate<(Value: string) => void>;
	CategoryObject: UObject;
	AllowedClasses: string;
	static Load(ResourceName: string): JavascriptAssetPicker;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetPicker;
	static GetDefaultObject(): JavascriptAssetPicker;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetPicker;
	SetCategoryObject(InCategoryObject: UObject): void;
	SetAllowedClasses(InAllowedClasses: string): void;
	static C(Other: UObject | any): JavascriptAssetPicker;
}

declare class JavascriptAssetTypeActions extends UObject { 
	ActionsName: string;
	Color: Color;
	SupportedClass: UnrealEngineClass;
	Editor: JavascriptAssetEditorToolkit;
	Actions: JavascriptUIExtender;
	static Load(ResourceName: string): JavascriptAssetTypeActions;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetTypeActions;
	static GetDefaultObject(): JavascriptAssetTypeActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetTypeActions;
	Refresh(): void;
	Discard(): void;
	Commit(): void;
	static C(Other: UObject | any): JavascriptAssetTypeActions;
}

declare class JavascriptClassViewer extends Widget { 
	OnGetDefaultValue: UnrealEngineDelegate<() => UnrealEngineClass>;
	OnSetDefaultValue: UnrealEngineDelegate<(Value: string) => void>;
	CategoryClass: UnrealEngineClass;
	AllowedChildrenOfClasses: UnrealEngineClass[];
	static Load(ResourceName: string): JavascriptClassViewer;
	static Find(Outer: UObject, ResourceName: string): JavascriptClassViewer;
	static GetDefaultObject(): JavascriptClassViewer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptClassViewer;
	SetCategoryClass(InCategoryClass: UnrealEngineClass): void;
	SetAllowedChildrenOfClasses(InAllowedChildrenOfClasses: UnrealEngineClass[]): void;
	static C(Other: UObject | any): JavascriptClassViewer;
}

declare class JavascriptColorPicker extends Widget { 
	OnColorChanged: UnrealEngineMulticastDelegate<(Color: LinearColor) => void>;
	SelectedColor: LinearColor;
	static Load(ResourceName: string): JavascriptColorPicker;
	static Find(Outer: UObject, ResourceName: string): JavascriptColorPicker;
	static GetDefaultObject(): JavascriptColorPicker;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptColorPicker;
	static C(Other: UObject | any): JavascriptColorPicker;
}

declare class JavascriptCommandlet extends Commandlet { 
	CmdLineTokens: string[];
	CmdLineSwitches: string[];
	static Load(ResourceName: string): JavascriptCommandlet;
	static Find(Outer: UObject, ResourceName: string): JavascriptCommandlet;
	static GetDefaultObject(): JavascriptCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptCommandlet;
	static C(Other: UObject | any): JavascriptCommandlet;
}

declare class JavascriptCurveTableEditor extends Widget { 
	static Load(ResourceName: string): JavascriptCurveTableEditor;
	static Find(Outer: UObject, ResourceName: string): JavascriptCurveTableEditor;
	static GetDefaultObject(): JavascriptCurveTableEditor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptCurveTableEditor;
	SetObject(UObject: CurveTable,bForceRefresh: boolean): void;
	Destruct(): void;
	Construct(): void;
	static C(Other: UObject | any): JavascriptCurveTableEditor;
}

declare class JavascriptWholeRowDetailCustomization extends UObject { 
	TypeName: string;
	CategoryName: string;
	CustomWidget: JavascriptSlateWidget;
	static Load(ResourceName: string): JavascriptWholeRowDetailCustomization;
	static Find(Outer: UObject, ResourceName: string): JavascriptWholeRowDetailCustomization;
	static GetDefaultObject(): JavascriptWholeRowDetailCustomization;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWholeRowDetailCustomization;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject | any): JavascriptWholeRowDetailCustomization;
}

declare class JavascriptDetailCustomization extends UObject { 
	TypeName: string;
	CategoryName: string;
	NameWidget: JavascriptSlateWidget;
	ValueWidget: JavascriptSlateWidget;
	static Load(ResourceName: string): JavascriptDetailCustomization;
	static Find(Outer: UObject, ResourceName: string): JavascriptDetailCustomization;
	static GetDefaultObject(): JavascriptDetailCustomization;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptDetailCustomization;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject | any): JavascriptDetailCustomization;
}

declare class JavascriptEditorEngineLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptEditorEngineLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorEngineLibrary;
	static GetDefaultObject(): JavascriptEditorEngineLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorEngineLibrary;
	static SetMaterial(Engine: EditorEngine,InModel: Model,Material: MaterialInterface,Surfaces: number[]): void;
	static SelectNone(Engine: EditorEngine,bNoteSelectionChange: boolean,bDeselectBSPSurfs: boolean,WarnAboutManyActors: boolean): void;
	static SelectGroup(Engine: EditorEngine,InGroupActor: GroupActor,bForceSelection: boolean,bInSelected: boolean,bNotify: boolean): void;
	static SelectComponent(Engine: EditorEngine,Component: ActorComponent,bInSelected: boolean,bNotify: boolean,bSelectEvenIfHidden: boolean): void;
	static SelectActor(Engine: EditorEngine,Actor: Actor,bInSelected: boolean,bNotify: boolean,bSelectEvenIfHidden: boolean,bForceRefresh: boolean): void;
	static RedrawAllViewports(Engine: EditorEngine,bInvalidateHitProxies: boolean): void;
	static RebuildStaticNavigableGeometry(Engine: EditorEngine,Level: Level): void;
	static RebuildLevel(Engine: EditorEngine,Level: Level): void;
	static GetSurfaces(Brush: Brush,Surfaces?: number[]): {Surfaces: number[]};
	static GetSelectedSet(Engine: EditorEngine,Class: UnrealEngineClass): USelection;
	static GetSelectedObjects(Engine: EditorEngine): USelection;
	static GetSelectedComponents(Engine: EditorEngine): USelection;
	static GetSelectedActors(Engine: EditorEngine): USelection;
	static GetPIEWorld(Engine: Engine): World;
	static GetLongPackagePath(InPackage: Package): string;
	static GetEditorWorld(Engine: Engine): World;
	static FindBrushBuilder(Engine: EditorEngine,BrushBuilderClass: UnrealEngineClass): BrushBuilder;
	static Exec(Engine: EditorEngine,InWorld: World,Command: string,Out?: string): {Out: string, $: boolean};
	static DuplicateAsset(AssetName: string,PackagePath: string,OriginalObject: UObject): UObject;
	static DeleteObjectsUnchecked(ObjectsToDelete: UObject[]): number;
	static CanSelectActor(Engine: EditorEngine,Actor: Actor,bInSelected: boolean,bSelectEvenIfHidden: boolean,bWarnIfLevelLocked: boolean): boolean;
	static bspBrushCSG(Engine: EditorEngine,Actor: Brush,Model: Model,PolyFlags: number,BrushType: EBrushType,CSGOper: ECsgOper,bBuildBounds: boolean,bMergePolys: boolean,bReplaceNULLMaterialRefs: boolean,bShowProgressBar: boolean): number;
	static C(Other: UObject | any): JavascriptEditorEngineLibrary;
}

declare class JavascriptAssetData { 
	ObjectPath: string;
	PackageName: string;
	PackagePath: string;
	AssetName: string;
	AssetClass: string;
	ChunkIDs: number[];
	PackageFlags: number;
	clone() : JavascriptAssetData;
	static C(Other: UObject | any): JavascriptAssetData;
	GetAllTags(OutArray?: string[]): {OutArray: string[]};
	GetAsset(): UObject;
	GetClass(): UnrealEngineClass;
	GetPackage(): Package;
	GetTagValue(Name: string,OutValue?: string): {OutValue: string, $: boolean};
	IsAssetLoaded(): boolean;
	static GetAllTags(AssetData: JavascriptAssetData,OutArray?: string[]): {OutArray: string[]};
	static GetAsset(AssetData: JavascriptAssetData): UObject;
	static GetClass(AssetData: JavascriptAssetData): UnrealEngineClass;
	static GetPackage(AssetData: JavascriptAssetData): Package;
	static GetTagValue(AssetData: JavascriptAssetData,Name: string,OutValue?: string): {OutValue: string, $: boolean};
	static IsAssetLoaded(AssetData: JavascriptAssetData): boolean;
}

declare class JavascriptEditorGlobalDelegates extends UObject { 
	static Load(ResourceName: string): JavascriptEditorGlobalDelegates;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorGlobalDelegates;
	static GetDefaultObject(): JavascriptEditorGlobalDelegates;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorGlobalDelegates;
	WorldChange(): void;
	UnbindAll(): void;
	Unbind(Key: string): void;
	SurfProps(): void;
	SingleStepPIE(bIsSimulating: boolean): void;
	SelectObjectEvent(UObject: UObject): void;
	SelectNoneEvent(): void;
	SelectionChangedEvent(UObject: UObject): void;
	SelectedProps(): void;
	ResumePIE(bIsSimulating: boolean): void;
	RefreshPrimitiveStatsBrowser(): void;
	RefreshLayerBrowser(): void;
	RefreshEditor(): void;
	RefreshAllBrowsers(): void;
	RedrawAllViewports(): void;
	PropertySelectionChange(): void;
	PreSaveWorldWithContext_Friendly(SaveFlags: number,World: World): void;
	PreBeginPIE(bIsSimulating: boolean): void;
	PostSaveWorldWithContext_Friendly(SaveFlags: number,World: World,bSuccess: boolean): void;
	PostPIEStarted(bIsSimulating: boolean): void;
	PostLandscapeLayerUpdated(): void;
	OnShutdownPostPackagesSaved(): void;
	OnPathRemoved(Path: string): void;
	OnPathAdded(Path: string): void;
	OnObjectReimported(UObject: UObject): void;
	OnNewAssetCreated(InFactory: Factory): void;
	OnNewActorsDropped(DroppedObjects: UObject[],OutNewActors: Actor[]): void;
	OnMapOpened(Filename: string,bAsTemplate: boolean): void;
	OnMainFrameCreationFinished_Friendly(): void;
	OnLightingBuildStarted(): void;
	OnLightingBuildKept(): void;
	OnLevelActorDeleted(Actor: Actor): void;
	OnLevelActorAdded(Actor: Actor): void;
	OnInMemoryAssetDeleted(InObject: UObject): void;
	OnInMemoryAssetCreated(InObject: UObject): void;
	OnGridSnappingChanged(bGridEnabled: boolean,GridSize: number): void;
	OnFocusViewportOnActors(Actors: Actor[]): void;
	OnFinishPickingBlueprintClass(InClass: UnrealEngineClass): void;
	OnFilesLoaded(): void;
	OnFileLoadProgressUpdated_Friendly(NumTotalAssets: number,NumAssetsProcessedByAssetRegistry: number,NumAssetsPendingDataLoad: number,bIsDiscoveringAssetFiles: boolean): void;
	OnEditPasteActorsEnd(): void;
	OnEditPasteActorsBegin(): void;
	OnEditorCameraMoved(ViewLocation: Vector,ViewRotation: Rotator,ViewportType: ELevelViewportType,ViewIndex: number): void;
	OnEditCutActorsEnd(): void;
	OnEditCutActorsBegin(): void;
	OnEditCopyActorsEnd(): void;
	OnEditCopyActorsBegin(): void;
	OnDuplicateActorsEnd(): void;
	OnDuplicateActorsBegin(): void;
	OnDollyPerspectiveCamera(Drag: Vector,ViewIndex: number): void;
	OnDeleteActorsEnd(): void;
	OnDeleteActorsBegin(): void;
	OnConsoleCommandJS(Args: string[],InWorld: World): void;
	OnConfigureNewAssetProperties(InFactory: Factory): void;
	OnClassPackageLoadedOrUnloaded(): void;
	OnBlueprintReinstanced(): void;
	OnBlueprintPreCompile(Blueprint: Blueprint): void;
	OnBlueprintCompiled(): void;
	OnAssetsPreDelete(Assets: UObject[]): void;
	OnAssetsDeleted(Classes: UnrealEngineClass[]): void;
	OnAssetRenamed_Friendly(AssetData: JavascriptAssetData,Name: string): void;
	OnAssetRemoved_Friendly(AssetData: JavascriptAssetData): void;
	OnAssetReimport(InCreatedObject: UObject): void;
	OnAssetPreImport_Friendly(InFactory: Factory,InClass: UnrealEngineClass,InParent: UObject,Name: string,Type: string): void;
	OnAssetPostImport(InFactory: Factory,InCreatedObject: UObject): void;
	OnAssetAdded_Friendly(AssetData: JavascriptAssetData): void;
	OnApplyObjectToActor(ObjectToApply: UObject,Actor: Actor): void;
	OnAddLevelToWorld(Level: Level): void;
	OnActionAxisMappingsChanged(): void;
	NewCurrentLevel(): void;
	MapChange_Friendly(MapChangeFlags: number): void;
	LoadSelectedAssetsIfNeeded(): void;
	LayerChange(): void;
	FitTextureToSurface(World: World): void;
	EndPlayMapDelegate(): void;
	EndPIE(bIsSimulating: boolean): void;
	DisplayLoadErrors(): void;
	CleanseEditor(): void;
	ChangeEditorMode(NewMode: string): void;
	Bind(Key: string): void;
	BeginPIE(bIsSimulating: boolean): void;
	ActorPropertiesChange(): void;
	static C(Other: UObject | any): JavascriptEditorGlobalDelegates;
}

declare class JavascriptEditorInputProcessor extends UObject { 
	static Load(ResourceName: string): JavascriptEditorInputProcessor;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorInputProcessor;
	static GetDefaultObject(): JavascriptEditorInputProcessor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorInputProcessor;
	UnRegister(): void;
	Register(): void;
	HandleMouseMoveEvent(InPointerEvent: UPointerEvent): boolean;
	HandleKeyUpEvent(InKeyEvent: KeyEvent): boolean;
	HandleKeyDownEvent(InKeyEvent: KeyEvent): boolean;
	HandleAnalogInputEvent(InKeyEvent: AnalogInputEvent): boolean;
	Activate(bEnable: boolean): void;
	static C(Other: UObject | any): JavascriptEditorInputProcessor;
}

declare class JavascriptExtensionBase { 
	clone() : JavascriptExtensionBase;
	static C(Other: UObject | any): JavascriptExtensionBase;
}

declare class JavascriptMenuBuilder { 
	clone() : JavascriptMenuBuilder;
	static C(Other: UObject | any): JavascriptMenuBuilder;
	AddComboButton(UObject?: JavascriptComboButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	AddMenuByCommands(UICommands?: JavascriptUICommands): {Builder: JavascriptMenuBuilder};
	AddMenuEntry(UObject?: JavascriptMenuContext): {Builder: JavascriptMenuBuilder};
	AddPullDownMenu(InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	AddSeparator(): {Builder: JavascriptMenuBuilder};
	AddSubMenu(Label?: string,Tooltip?: string,bInOpenSubMenuOnClick?: boolean,UFunction?: JavascriptFunction): {Builder: JavascriptMenuBuilder};
	AddToolBarButton(CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	AddToolBarButtonByContext(Context?: JavascriptToolbarButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	AddWidget(Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	BeginSection(InExtensionHook?: string,MenuHeadingText?: string): {Builder: JavascriptMenuBuilder};
	EndSection(): {Builder: JavascriptMenuBuilder};
	PopCommandList(): {Builder: JavascriptMenuBuilder};
	PushCommandList(List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
	static AddComboButton(Builder?: JavascriptMenuBuilder,UObject?: JavascriptComboButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	static AddMenuByCommands(Builder?: JavascriptMenuBuilder,UICommands?: JavascriptUICommands): {Builder: JavascriptMenuBuilder};
	static AddMenuEntry(Builder?: JavascriptMenuBuilder,UObject?: JavascriptMenuContext): {Builder: JavascriptMenuBuilder};
	static AddPullDownMenu(MenuBuilder?: JavascriptMenuBuilder,InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	static AddSeparator(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static AddSubMenu(Builder?: JavascriptMenuBuilder,Label?: string,Tooltip?: string,bInOpenSubMenuOnClick?: boolean,UFunction?: JavascriptFunction): {Builder: JavascriptMenuBuilder};
	static AddToolBarButton(Builder?: JavascriptMenuBuilder,CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	static AddToolBarButtonByContext(Builder?: JavascriptMenuBuilder,Context?: JavascriptToolbarButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	static AddWidget(Builder?: JavascriptMenuBuilder,Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	static BeginSection(Builder?: JavascriptMenuBuilder,InExtensionHook?: string,MenuHeadingText?: string): {Builder: JavascriptMenuBuilder};
	static EndSection(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static PopCommandList(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static PushCommandList(Builder?: JavascriptMenuBuilder,List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
}

declare class JavascriptExtender { 
	clone() : JavascriptExtender;
	static C(Other: UObject | any): JavascriptExtender;
	AddMenubarExtension(ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	AddMenuExtension(ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	AddToolBarExtension(ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	Apply(ExtensionHook: string,HookPosition: EJavascriptExtensionHook,MenuBuilder?: JavascriptMenuBuilder): {MenuBuilder: JavascriptMenuBuilder};
	RemoveExtension(Extension: JavascriptExtensionBase): void;
	static AddMenubarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddMenuExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddToolBarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static Apply(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,MenuBuilder?: JavascriptMenuBuilder): {MenuBuilder: JavascriptMenuBuilder};
	static RemoveExtension(Extender: JavascriptExtender,Extension: JavascriptExtensionBase): void;
	static Combine(Extenders: JavascriptExtender[]): JavascriptExtender;
}

declare class JavascriptLazyExtenderDelegates extends UObject { 
	GetExtender: UnrealEngineDelegate<(List: JavascriptUICommandList, EditingObjects: UObject[]) => JavascriptExtender>;
	static Load(ResourceName: string): JavascriptLazyExtenderDelegates;
	static Find(Outer: UObject, ResourceName: string): JavascriptLazyExtenderDelegates;
	static GetDefaultObject(): JavascriptLazyExtenderDelegates;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptLazyExtenderDelegates;
	static C(Other: UObject | any): JavascriptLazyExtenderDelegates;
}

declare type EJavascriptRHIFeatureLevel = 'ES2' | 'ES3_1' | 'SM4' | 'SM5' | 'Num' | 'EJavascriptRHIFeatureLevel_MAX';
declare var EJavascriptRHIFeatureLevel : { ES2:'ES2',ES3_1:'ES3_1',SM4:'SM4',SM5:'SM5',Num:'Num',EJavascriptRHIFeatureLevel_MAX:'EJavascriptRHIFeatureLevel_MAX', };
declare class JavascriptPDI { 
	clone() : JavascriptPDI;
	static C(Other: UObject | any): JavascriptPDI;
	DrawArc(Base: Vector,X: Vector,Y: Vector,MinAngle: number,MaxAngle: number,Radius: number,Sections: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawCircle(Base: Vector,X: Vector,Y: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawConnectedArrow(ArrowToWorld: Transform,Color: LinearColor,ArrowHeight: number,ArrowWidth: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,NumSpokes: number): void;
	DrawDashedLine(Start: Vector,End: Vector,Color: LinearColor,DashSize: number,DepthPriority: ESceneDepthPriorityGroup,DepthBias: number): void;
	DrawDirectionalArrow(ArrowToWorld: Transform,InColor: LinearColor,Length: number,ArrowSize: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number): void;
	DrawOrientedWireBox(Base: Vector,X: Vector,Y: Vector,Z: Vector,Extent: Vector,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawPolygon(Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup,RHIFeatureLevel: EJavascriptRHIFeatureLevel): void;
	DrawWireBox(Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireBox2(Matrix: Transform,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireCapsule(Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireChoppedCone(Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,TopRadius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawWireCone(Verts?: Vector[],Transform?: Transform,ConeRadius?: number,ConeAngle?: number,ConeSides?: number,Color?: LinearColor,DepthPriority?: ESceneDepthPriorityGroup,Thickness?: number,DepthBias?: number,bScreenSpace?: boolean): {Verts: Vector[]};
	DrawWireCylinder(Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireDiamond(Transform: Transform,Size: number,InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawWireSphere(Base: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphere2(Transform: Transform,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphereAutoSides(Base: Vector,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphereAutoSides2(Transform: Transform,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphereCappedCone(Transform: Transform,ConeRadius: number,ConeAngle: number,ConeSides: number,ArcFrequency: number,CapSegments: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawWireStar(position: Vector,Size: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	SetHitProxy(Name: string): void;
	static DrawArc(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,MinAngle: number,MaxAngle: number,Radius: number,Sections: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawCircle(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawConnectedArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,Color: LinearColor,ArrowHeight: number,ArrowWidth: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,NumSpokes: number): void;
	static DrawDashedLine(PDI: JavascriptPDI,Start: Vector,End: Vector,Color: LinearColor,DashSize: number,DepthPriority: ESceneDepthPriorityGroup,DepthBias: number): void;
	static DrawDirectionalArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,InColor: LinearColor,Length: number,ArrowSize: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number): void;
	static DrawOrientedWireBox(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Extent: Vector,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawPolygon(PDI: JavascriptPDI,Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup,RHIFeatureLevel: EJavascriptRHIFeatureLevel): void;
	static DrawWireBox(PDI: JavascriptPDI,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireBox2(PDI: JavascriptPDI,Matrix: Transform,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireCapsule(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireChoppedCone(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,TopRadius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireCone(PDI: JavascriptPDI,Verts?: Vector[],Transform?: Transform,ConeRadius?: number,ConeAngle?: number,ConeSides?: number,Color?: LinearColor,DepthPriority?: ESceneDepthPriorityGroup,Thickness?: number,DepthBias?: number,bScreenSpace?: boolean): {Verts: Vector[]};
	static DrawWireCylinder(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireDiamond(PDI: JavascriptPDI,Transform: Transform,Size: number,InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireSphere(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphere2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereAutoSides(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereAutoSides2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereCappedCone(PDI: JavascriptPDI,Transform: Transform,ConeRadius: number,ConeAngle: number,ConeSides: number,ArcFrequency: number,CapSegments: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireStar(PDI: JavascriptPDI,position: Vector,Size: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static SetHitProxy(PDI: JavascriptPDI,Name: string): void;
}

declare class JavascriptExtensibilityManager { 
	clone() : JavascriptExtensibilityManager;
	static C(Other: UObject | any): JavascriptExtensibilityManager;
	AddExtender(Extender: JavascriptExtender): void;
	AddLazyExtender(Delegates: JavascriptLazyExtenderDelegates): void;
	RemoveAllLazyExtender(): void;
	RemoveExtender(Extender: JavascriptExtender): void;
	static AddExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static AddLazyExtender(Manager: JavascriptExtensibilityManager,Delegates: JavascriptLazyExtenderDelegates): void;
	static RemoveAllLazyExtender(Manager: JavascriptExtensibilityManager): void;
	static RemoveExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static GetMenuExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetToolBarExtensibilityManager(What: string): JavascriptExtensibilityManager;
}

declare class JavascriptViewportClick { 
	clone() : JavascriptViewportClick;
	static C(Other: UObject | any): JavascriptViewportClick;
	GetClickPos(): IntPoint;
	GetDirection(): Vector;
	GetEvent(): EInputEvent;
	GetKey(): Key;
	GetOrigin(): Vector;
	IsAltDown(): boolean;
	IsControlDown(): boolean;
	IsShiftDown(): boolean;
	static GetClickPos(Click: JavascriptViewportClick): IntPoint;
	static GetDirection(Click: JavascriptViewportClick): Vector;
	static GetEvent(Click: JavascriptViewportClick): EInputEvent;
	static GetKey(Click: JavascriptViewportClick): Key;
	static GetOrigin(Click: JavascriptViewportClick): Vector;
	static IsAltDown(Click: JavascriptViewportClick): boolean;
	static IsControlDown(Click: JavascriptViewportClick): boolean;
	static IsShiftDown(Click: JavascriptViewportClick): boolean;
}

declare class JavascriptHitProxy { 
	clone() : JavascriptHitProxy;
	static C(Other: UObject | any): JavascriptHitProxy;
	GetActor(): Actor;
	GetName(): string;
	static GetActor(Proxy: JavascriptHitProxy): Actor;
	static GetName(Proxy: JavascriptHitProxy): string;
}

declare class JavascriptEditorObjectManager extends UObject { 
	static Load(ResourceName: string): JavascriptEditorObjectManager;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorObjectManager;
	static GetDefaultObject(): JavascriptEditorObjectManager;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorObjectManager;
	SetStructRef(Key: string,Value: UnrealEngineClass,bOverride: boolean): boolean;
	SetRef(Key: string,Value: UnrealEngineClass,bOverride: boolean): boolean;
	SetObject(Key: string,Value: UObject): boolean;
	RemoveStructRef(Key: string): void;
	RemoveRef(Key: string): void;
	RemoveObjects(Key: string): void;
	HasStructRef(Key: string): boolean;
	HasRef(Key: string): boolean;
	GetStructRef(Key: string): ScriptStruct;
	GetRef(Key: string): UnrealEngineClass;
	GetObjects(Key: string): UObject[];
	GetObjectKeys(): string[];
	Clear(bWithClass: boolean): void;
	static C(Other: UObject | any): JavascriptEditorObjectManager;
}

declare type EJavascriptMessageSeverity = 'CriticalError' | 'Error' | 'PerformanceWarning' | 'Warning' | 'Info' | 'EJavascriptMessageSeverity_MAX';
declare var EJavascriptMessageSeverity : { CriticalError:'CriticalError',Error:'Error',PerformanceWarning:'PerformanceWarning',Warning:'Warning',Info:'Info',EJavascriptMessageSeverity_MAX:'EJavascriptMessageSeverity_MAX', };
declare class JavascriptEditorLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptEditorLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorLibrary;
	static GetDefaultObject(): JavascriptEditorLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorLibrary;
	static UpdateModelComponents(Level: Level): void;
	static ToggleSelect(USelection: USelection,InObject: UObject): void;
	static ToggleIsExecuteTestModePIE(): boolean;
	static SetIsTemporarilyHiddenInEditor(Actor: Actor,bIsHidden: boolean): void;
	static SetHitProxy(PDI: JavascriptPDI,Name: string): void;
	static SetHeightmapDataFromMemory(LandscapeInfo: LandscapeInfo,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static SetFolderPath_Recursively(Actor: Actor,NewFolderPath: string): void;
	static SetFolderPath(Actor: Actor,NewFolderPath: string): void;
	static SetAlphamapDataFromMemory(LandscapeInfo: LandscapeInfo,LayerInfo: LandscapeLayerInfoObject,MinX: number,MinY: number,MaxX: number,MaxY: number,PaintingRestriction: ELandscapeLayerPaintingRestriction): void;
	static SetActorLocation(Actor: Actor,NewLocation: Vector,bSweep: boolean,SweepHitResult?: HitResult,bTeleport?: boolean): {SweepHitResult: HitResult, $: boolean};
	static SetActorLabelUnique(Actor: Actor,NewActorLabel: string,InExistingActorLabels: string[]): void;
	static SetActorLabel(Actor: Actor,NewActorLabel: string,bMarkDirty: boolean): void;
	static Select(USelection: USelection,InObject: UObject): void;
	static SavePackage(Package: Package,Filename: string): boolean;
	static SaveFileDialog(WindowHandle: JavascriptWindow,DialogTitle: string,DefaultPath: string,DefaultFile: string,FileTypes: string,Flags: number,OutFilenames?: string[]): {OutFilenames: string[], $: boolean};
	static RequestEndPlayMapInPIE(): void;
	static ReplaceAnimNotifyClass(Sequence: AnimSequenceBase,NotifyName: string,NewNotifyName: string,NewNotifyClass: UObject): number;
	static RemoveLevelInstance(World: World): void;
	static RemoveExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static RemoveComponentFromBlueprint(Blueprint: Blueprint,RemoveComponent: ActorComponent,bPromoteChildren: boolean): void;
	static RemoveAllLazyExtender(Manager: JavascriptExtensibilityManager): void;
	static PostEditChange(InObject: UObject): void;
	static OpenFileDialog(WindowHandle: JavascriptWindow,DialogTitle: string,DefaultPath: string,DefaultFile: string,FileTypes: string,Flags: number,OutFilenames?: string[]): {OutFilenames: string[], $: boolean};
	static OpenEditorForAssetByPath(AssetPathName: string,ObjectName: string): void;
	static OpenEditorForAsset(Asset: UObject): boolean;
	static OpenDirectoryDialog(WindowHandle: JavascriptWindow,DialogTitle: string,DefaultPath: string,OutFolderName?: string): {OutFolderName: string, $: boolean};
	static NotifyUpdateCurveTable(InCurveTable: CurveTable): void;
	static ModifyObject(UObject: UObject,bAlwaysMarkDirty: boolean): void;
	static MarkPackageDirty(InObject: UObject): boolean;
	static LoadImageFromDiskAsync(ImagePath: string,Callback: AsyncTaskDownloadImage): boolean;
	static LoadFileToString(Path: string,Data?: string): {Data: string, $: boolean};
	static LoadFileToIntArray(Path: string,FileData?: number[]): {FileData: number[], $: boolean};
	static IsShiftDown(Click: JavascriptViewportClick): boolean;
	static IsControlDown(Click: JavascriptViewportClick): boolean;
	static IsAssetLoaded(AssetData: JavascriptAssetData): boolean;
	static IsAltDown(Click: JavascriptViewportClick): boolean;
	static IsActorLabelEditable(Actor: Actor): boolean;
	static IsActive(Transactor: Transactor): boolean;
	static InvalidateModelGeometry(World: World,InLevel: Level): void;
	static HasMetaData(Field: Field,Key: string): boolean;
	static GetUniqueID(InObject: UObject): number;
	static GetTransaction(Transactor: Transactor,QueueIndex: number): JavascriptTransaction;
	static GetToolBarExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetTitle(Transaction: JavascriptTransaction): string;
	static GetTagValue(AssetData: JavascriptAssetData,Name: string,OutValue?: string): {OutValue: string, $: boolean};
	static GetSourceControlStatusText(): string;
	static GetSelectedObjects(USelection: USelection,Out?: UObject[]): {Out: UObject[], $: number};
	static GetRootWindow(): JavascriptSlateWidget;
	static GetQueueLength(Transactor: Transactor): number;
	static GetPrimaryObject(Transaction: JavascriptTransaction): UObject;
	static GetParentClassOfBlueprint(Blueprint: Blueprint): UnrealEngineClass;
	static GetPackage(AssetData: JavascriptAssetData): Package;
	static GetOrigin(Click: JavascriptViewportClick): Vector;
	static GetName(Proxy: JavascriptHitProxy): string;
	static GetMenuExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetLevelEditorActions(): JavascriptUICommandList;
	static GetLayerInfoByName(LandscapeInfo: LandscapeInfo,LayerName: string,Owner: LandscapeProxy): LandscapeLayerInfoObject;
	static GetLandscapeInfo(Landscape: Landscape,bSpawnNewActor: boolean): LandscapeInfo;
	static GetLandscapeExtent(LandscapeInfo: LandscapeInfo,MinX?: number,MinY?: number,MaxX?: number,MaxY?: number): {MinX: number, MinY: number, MaxX: number, MaxY: number, $: boolean};
	static GetKeyNameByKeyEvent(Event: KeyEvent): string;
	static GetKey(Click: JavascriptViewportClick): Key;
	static GetIsShiftDownByKeyEvent(Event: KeyEvent): boolean;
	static GetIsExecuteTestModePIE(): boolean;
	static GetIsControlDownByKeyEvent(Event: KeyEvent): boolean;
	static GetIsAltDownByKeyEvent(Event: KeyEvent): boolean;
	static GetIPAddress(): string;
	static GetHostName(): string;
	static GetHeightmapDataToMemory(LandscapeInfo: LandscapeInfo,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static GetGroup(Name: string): JavascriptWorkspaceItem;
	static GetFolderPath(Actor: Actor): string;
	static GetEvent(Click: JavascriptViewportClick): EInputEvent;
	static GetEngine(): EditorEngine;
	static GetEditorPlayWorld(): World;
	static GetEditorObjectManager(): JavascriptEditorObjectManager;
	static GetDirection(Click: JavascriptViewportClick): Vector;
	static GetDefaultBrush(World: World): Brush;
	static GetDataTableAsJSON(InDataTable: DataTable,InDTExportFlags: number): string;
	static GetContext(Transaction: JavascriptTransaction): string;
	static GetClickPos(Click: JavascriptViewportClick): IntPoint;
	static GetClass(AssetData: JavascriptAssetData): UnrealEngineClass;
	static GetAverageMS(): number;
	static GetAverageFPS(): number;
	static GetAssetsByType(Types: string[],bRecursiveClasses: boolean): AssetData[];
	static GetAsset(AssetData: JavascriptAssetData): UObject;
	static GetAlphamapDataToMemory(LandscapeInfo: LandscapeInfo,LayerInfo: LandscapeLayerInfoObject,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static GetAllTags(AssetData: JavascriptAssetData,OutArray?: string[]): {OutArray: string[]};
	static GetActorRotation(Actor: Actor): Rotator;
	static GetActorLocation(Actor: Actor): Vector;
	static GetActorLabel(Actor: Actor): string;
	static GetActor(Proxy: JavascriptHitProxy): Actor;
	static FromStringTable(InTableId: string,InKey: string): JavascriptTextProperty;
	static FindWorldInPackage(Package: Package): World;
	static ExportNavigation(InWorld: World,Path: string): string;
	static EditorExec(World: World,Cmd: string): boolean;
	static EditorDestroyActor(World: World,Actor: Actor,bShouldModifyLevel: boolean): boolean;
	static EditorAddModalWindow(Widget: JavascriptSlateWidget): void;
	static DrawWireStar(PDI: JavascriptPDI,position: Vector,Size: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireSphereCappedCone(PDI: JavascriptPDI,Transform: Transform,ConeRadius: number,ConeAngle: number,ConeSides: number,ArcFrequency: number,CapSegments: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireSphereAutoSides2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereAutoSides(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphere2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphere(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireDiamond(PDI: JavascriptPDI,Transform: Transform,Size: number,InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireCylinder(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireCone(PDI: JavascriptPDI,Verts?: Vector[],Transform?: Transform,ConeRadius?: number,ConeAngle?: number,ConeSides?: number,Color?: LinearColor,DepthPriority?: ESceneDepthPriorityGroup,Thickness?: number,DepthBias?: number,bScreenSpace?: boolean): {Verts: Vector[]};
	static DrawWireChoppedCone(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,TopRadius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireCapsule(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireBox2(PDI: JavascriptPDI,Matrix: Transform,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireBox(PDI: JavascriptPDI,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawPolygon(PDI: JavascriptPDI,Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup,RHIFeatureLevel: EJavascriptRHIFeatureLevel): void;
	static DrawOrientedWireBox(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Extent: Vector,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawDirectionalArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,InColor: LinearColor,Length: number,ArrowSize: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number): void;
	static DrawDashedLine(PDI: JavascriptPDI,Start: Vector,End: Vector,Color: LinearColor,DashSize: number,DepthPriority: ESceneDepthPriorityGroup,DepthBias: number): void;
	static DrawConnectedArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,Color: LinearColor,ArrowHeight: number,ArrowWidth: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,NumSpokes: number): void;
	static DrawCircle(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawArc(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,MinAngle: number,MaxAngle: number,Radius: number,Sections: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DeselectAll(USelection: USelection,InClass: UnrealEngineClass): void;
	static Deselect(USelection: USelection,InObject: UObject): void;
	static DeletePackage(Package: Package): boolean;
	static csgAdd(DefaultBrush: Brush,PolyFlags: number,BrushType: EBrushType): Brush;
	static CreatePropertyEditorToolkit(ObjectsForPropertiesMenu: UObject[]): void;
	static CreateLogListingWidget(InLogName: string): JavascriptSlateWidget;
	static CreateLogListing(InLogName: string,InLabel: string): void;
	static CreateBrushForVolumeActor(NewActor: Volume,BrushBuilder: BrushBuilder): void;
	static ConditionalBeginDestroybyUObject(TargetObject: UObject): boolean;
	static CompileBlueprint(Blueprint: Blueprint): void;
	static ClearActorLabel(Actor: Actor): void;
	static CheckActivatedStatGroup(GroupName: string): boolean;
	static Build(Builder: BrushBuilder,InWorld: World,InBrush: Brush): boolean;
	static BroadcastHotReload(): void;
	static BroadcastAssetCreated(NewAsset: UObject): void;
	static AddWhitelistedObject(InObject: UObject): void;
	static AddRichCurve(InCurveTable: CurveTable,Key: string,InCurve: RichCurve): void;
	static AddLogListingMessage(InLogName: string,InSeverity: EJavascriptMessageSeverity,LogText: string): void;
	static AddLazyExtender(Manager: JavascriptExtensibilityManager,Delegates: JavascriptLazyExtenderDelegates): void;
	static AddGroup(Parent: JavascriptWorkspaceItem,DisplayName: string): JavascriptWorkspaceItem;
	static AddExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static AddComponentsToBlueprint(Blueprint: Blueprint,Components: ActorComponent[],bHarvesting: boolean,OptionalNewRootComponent: ActorComponent,bKeepMobility: boolean): void;
	static C(Other: UObject | any): JavascriptEditorLibrary;
}

declare class JavascriptEditorPopupWindow extends UObject { 
	Widget: Widget;
	static Load(ResourceName: string): JavascriptEditorPopupWindow;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorPopupWindow;
	static GetDefaultObject(): JavascriptEditorPopupWindow;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorPopupWindow;
	Open(Heading: string,DesiredSize: Vector2D): boolean;
	OnDismissed(): void;
	static C(Other: UObject | any): JavascriptEditorPopupWindow;
}

declare class JavascriptEditorTabManager extends Widget { 
	Layout: string;
	Tabs: JavascriptEditorTab[];
	static Load(ResourceName: string): JavascriptEditorTabManager;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTabManager;
	static GetDefaultObject(): JavascriptEditorTabManager;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTabManager;
	InvokeTab(SearchForTabId: string): void;
	InsertNewTab(PlaceholderId: string,SearchForTabId: string,NewTab: JavascriptEditorTab): void;
	static C(Other: UObject | any): JavascriptEditorTabManager;
}

declare class JavascriptEditorTick extends UObject { 
	OnTick: UnrealEngineDelegate<(DeltaSeconds: number) => void>;
	static Load(ResourceName: string): JavascriptEditorTick;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTick;
	static GetDefaultObject(): JavascriptEditorTick;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTick;
	GetEngine(): EditorEngine;
	ForceTick(DeltaTime: number): void;
	static C(Other: UObject | any): JavascriptEditorTick;
}

declare class JavascriptEditorToolbar extends Widget { 
	OnHook: UnrealEngineDelegate<() => JavascriptMenuBuilder>;
	static Load(ResourceName: string): JavascriptEditorToolbar;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorToolbar;
	static GetDefaultObject(): JavascriptEditorToolbar;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorToolbar;
	static C(Other: UObject | any): JavascriptEditorToolbar;
}

declare class JavascriptInputEventState { 
	clone() : JavascriptInputEventState;
	static C(Other: UObject | any): JavascriptInputEventState;
	GetInputEvent(): EInputEvent;
	GetKey(): Key;
	IsAltButtonEvent(): boolean;
	IsAltButtonPressed(): boolean;
	IsAnyMouseButtonDown(): boolean;
	IsButtonPressed(InKey: Key): boolean;
	IsCtrlButtonEvent(): boolean;
	IsCtrlButtonPressed(): boolean;
	IsLeftMouseButtonPressed(): boolean;
	IsMiddleMouseButtonPressed(): boolean;
	IsMouseButtonEvent(): boolean;
	IsRightMouseButtonPressed(): boolean;
	IsShiftButtonEvent(): boolean;
	IsShiftButtonPressed(): boolean;
	IsSpaceBarPressed(): boolean;
	static GetInputEvent(InputEvent: JavascriptInputEventState): EInputEvent;
	static GetKey(InputEvent: JavascriptInputEventState): Key;
	static IsAltButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsAltButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsAnyMouseButtonDown(InputEvent: JavascriptInputEventState): boolean;
	static IsButtonPressed(InputEvent: JavascriptInputEventState,InKey: Key): boolean;
	static IsCtrlButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsCtrlButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsLeftMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsMiddleMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsMouseButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsRightMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsSpaceBarPressed(InputEvent: JavascriptInputEventState): boolean;
}

declare type EJavascriptWidgetMode = 'WM_Translate' | 'WM_TranslateRotateZ' | 'WM_2D' | 'WM_Rotate' | 'WM_Scale' | 'WM_Max' | 'WM_None';
declare var EJavascriptWidgetMode : { WM_Translate:'WM_Translate',WM_TranslateRotateZ:'WM_TranslateRotateZ',WM_2D:'WM_2D',WM_Rotate:'WM_Rotate',WM_Scale:'WM_Scale',WM_Max:'WM_Max',WM_None:'WM_None', };
declare class JavascriptEditorViewport extends PanelWidget { 
	OnClick: UnrealEngineDelegate<(ViewportClick: JavascriptViewportClick, HitProxy: JavascriptHitProxy, Instance: JavascriptEditorViewport) => void>;
	OnTrackingStarted: UnrealEngineDelegate<(InputState: JavascriptInputEventState, bIsDraggingWidget: boolean, bNudge: boolean, Instance: JavascriptEditorViewport) => void>;
	OnTrackingStopped: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => void>;
	OnInputWidgetDelta: UnrealEngineDelegate<(Drag: Vector, Rot: Rotator, Scale: Vector, Instance: JavascriptEditorViewport) => boolean>;
	OnInputKey: UnrealEngineDelegate<(ControllerId: number, Key: Key, Event: EInputEvent, Instance: JavascriptEditorViewport) => boolean>;
	OnInputAxis: UnrealEngineDelegate<(ControllerId: number, Key: Key, Delta: number, DeltaTime: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseEnter: UnrealEngineDelegate<(X: number, Y: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseMove: UnrealEngineDelegate<(X: number, Y: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseLeave: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => boolean>;
	OnDraw: UnrealEngineDelegate<(PDI: JavascriptPDI, Instance: JavascriptEditorViewport) => void>;
	OnDrawCanvas: UnrealEngineDelegate<(Canvas: Canvas, Instance: JavascriptEditorViewport) => void>;
	OnGetWidgetLocation: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => Vector>;
	OnGetWidgetRotation: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => Rotator>;
	OnGetWidgetMode: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => EJavascriptWidgetMode>;
	static Load(ResourceName: string): JavascriptEditorViewport;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport;
	static GetDefaultObject(): JavascriptEditorViewport;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport;
	SetWidgetMode(WidgetMode: EJavascriptWidgetMode): void;
	SetViewRotation(ViewRotation: Rotator): void;
	SetViewportType(InViewportType: ELevelViewportType): void;
	SetViewMode(InViewModeIndex: EViewModeIndex): void;
	SetViewLocation(ViewLocation: Vector): void;
	SetViewFOV(InViewFOV: number): void;
	SetSkyBrightness(SkyBrightness: number): void;
	SetSimulatePhysics(bShouldSimulatePhysics: boolean): void;
	SetRealtime(bInRealtime: boolean,bStoreCurrentValue: boolean): void;
	SetProfileIndex(InProfileIndex: number): void;
	SetLightLocation(InLightPos: Vector): void;
	SetLightDirection(InLightDir: Rotator): void;
	SetLightColor(LightColor: Color): void;
	SetLightBrightness(LightBrightness: number): void;
	SetFloorOffset(InFloorOffset: number): void;
	SetEngineShowFlags(In: string): boolean;
	SetCameraSpeedSetting(SpeedSetting: number): void;
	SetBackgroundColor(BackgroundColor: LinearColor): void;
	Redraw(): void;
	ProjectWorldToScreen(WorldPosition: Vector,OutScreenPosition?: Vector2D): {OutScreenPosition: Vector2D};
	OverridePostProcessSettings(PostProcessSettings: PostProcessSettings,Weight: number): void;
	GetWidgetMode(): EJavascriptWidgetMode;
	GetViewRotation(): Rotator;
	GetViewportWorld(): World;
	GetViewLocation(): Vector;
	GetViewFOV(): number;
	GetSkyComponent(): StaticMeshComponent;
	GetFloorMeshComponent(): StaticMeshComponent;
	GetEngineShowFlags(): string;
	GetDefaultSphereReflectionComponent(): SphereReflectionCaptureComponent;
	GetDefaultSkySphereComponent(): StaticMeshComponent;
	GetDefaultSkyLightComponent(): SkyLightComponent;
	GetDefaultPostProcessComponent(): PostProcessComponent;
	GetDefaultInstancedSkyMaterial(): MaterialInstanceConstant;
	GetDefaultDirectionalLightComponent(): DirectionalLightComponent;
	GetDefaultAssetViewerSettings(): AssetViewerSettings;
	GetCurrentProfileIndex(): number;
	GetCameraSpeedSetting(): number;
	DeprojectScreenToWorld(ScreenPosition: Vector2D,OutRayOrigin?: Vector,OutRayDirection?: Vector): {OutRayOrigin: Vector, OutRayDirection: Vector};
	static C(Other: UObject | any): JavascriptEditorViewport;
}

declare class JavascriptEdViewport { 
	clone() : JavascriptEdViewport;
	static C(Other: UObject | any): JavascriptEdViewport;
	GetHitProxy(): JavascriptHitProxy;
	static GetHitProxy(Viewport: JavascriptEdViewport): JavascriptHitProxy;
}

declare class JavascriptEditorModeTools { 
	clone() : JavascriptEditorModeTools;
	static C(Other: UObject | any): JavascriptEditorModeTools;
	ActivateDefaultMode(): {Tools: JavascriptEditorModeTools};
	ActivateMode(InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	DeactivateAllModes(): {Tools: JavascriptEditorModeTools};
	DeactivateMode(InID?: string): {Tools: JavascriptEditorModeTools};
	DestroyMode(InID?: string): {Tools: JavascriptEditorModeTools};
	EndTracking(Viewport: JavascriptEdViewport): boolean;
	EnsureNotInMode(ModeId?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	IsDefaultModeActive(): {Tools: JavascriptEditorModeTools, $: boolean};
	IsModeActive(InID?: string): {Tools: JavascriptEditorModeTools, $: boolean};
	IsTracking(): boolean;
	SetDefaultMode(DefaultID?: string): {Tools: JavascriptEditorModeTools};
	StartTracking(Viewport: JavascriptEdViewport): boolean;
	static ActivateDefaultMode(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static ActivateMode(Tools?: JavascriptEditorModeTools,InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	static DeactivateAllModes(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static DeactivateMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DestroyMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static EndTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static EnsureNotInMode(Tools?: JavascriptEditorModeTools,ModeId?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsDefaultModeActive(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsModeActive(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsTracking(Tools: JavascriptEditorModeTools): boolean;
	static SetDefaultMode(Tools?: JavascriptEditorModeTools,DefaultID?: string): {Tools: JavascriptEditorModeTools};
	static StartTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static GetLevelEditorModeTools(): JavascriptEditorModeTools;
}

declare class JavascriptEditorMode { 
	clone() : JavascriptEditorMode;
	static C(Other: UObject | any): JavascriptEditorMode;
	GetCurrentWidgetAxis(): number;
	GetModeManager(): JavascriptEditorModeTools;
	SelectNone(): void;
	SetCurrentWidgetAxis(InAxis: number): void;
	static GetCurrentWidgetAxis(Mode: JavascriptEditorMode): number;
	static GetModeManager(Mode: JavascriptEditorMode): JavascriptEditorModeTools;
	static SelectNone(Mode: JavascriptEditorMode): void;
	static SetCurrentWidgetAxis(Mode: JavascriptEditorMode,InAxis: number): void;
}

declare type EJavascriptEditAction = 'Skip' | 'Process' | 'Halt' | 'EJavascriptEditAction_MAX';
declare var EJavascriptEditAction : { Skip:'Skip',Process:'Process',Halt:'Halt',EJavascriptEditAction_MAX:'EJavascriptEditAction_MAX', };
declare class JavascriptEdMode extends UObject { 
	OnGetWidgetLocation: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => Vector>;
	OnSelect: UnrealEngineDelegate<(Actor: Actor, bSelected: boolean, Instance: JavascriptEditorMode) => boolean>;
	OnDraw: UnrealEngineDelegate<(PDI: JavascriptPDI, Instance: JavascriptEditorMode) => void>;
	OnDrawHUD: UnrealEngineDelegate<(Canvas: Canvas, Instance: JavascriptEditorMode) => void>;
	IsSelectionAllowed: UnrealEngineDelegate<(Actor: Actor, bSelected: boolean, Instance: JavascriptEditorMode) => boolean>;
	OnClick: UnrealEngineDelegate<(ViewportClick: JavascriptViewportClick, HitProxy: JavascriptHitProxy, Instance: JavascriptEditorMode) => boolean>;
	OnQuery: UnrealEngineDelegate<(Request: string, Instance: JavascriptEditorMode) => boolean>;
	OnStartTracking: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnEndTracking: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnInputAxis: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, ControllerId: number, Key: Key, Delta: number, DeltaTime: number, Instance: JavascriptEditorMode) => boolean>;
	OnInputKey: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Key: Key, Event: EInputEvent, Instance: JavascriptEditorMode) => boolean>;
	OnInputDelta: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Drag: Vector, Rot: Rotator, Scale: Vector, Instance: JavascriptEditorMode) => boolean>;
	OnCapturedMouseMove: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, X: number, Y: number, Instance: JavascriptEditorMode) => boolean>;
	OnMouseEnter: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, X: number, Y: number, Instance: JavascriptEditorMode) => boolean>;
	OnMouseLeave: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnMouseMove: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, X: number, Y: number, Instance: JavascriptEditorMode) => boolean>;
	OnLostFocus: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnReceivedFocus: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnSelectionChanged: UnrealEngineDelegate<(Tools: JavascriptEditorModeTools, Item: UObject) => void>;
	OnGetContent: UnrealEngineDelegate<() => Widget>;
	OnProcess: UnrealEngineDelegate<(Request: string, Instance: JavascriptEditorMode) => boolean>;
	OnGetAction: UnrealEngineDelegate<(Request: string, Instance: JavascriptEditorMode) => EJavascriptEditAction>;
	OnUsesToolkits: UnrealEngineDelegate<() => boolean>;
	OnIsCompatibleWith: UnrealEngineDelegate<(bIsCompatibleWith: string) => boolean>;
	OnActorMoved: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	OnActorsDuplicated: UnrealEngineDelegate<(PreDuplicateSelection: Actor[], PostDuplicateSelection: Actor[], bOffsetLocations: boolean, Instance: JavascriptEditorMode) => void>;
	OnActorSelectionChanged: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	OnActorPropChanged: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	OnMapChanged: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	ModeId: string;
	SlateIcon: JavascriptSlateIcon;
	ModeName: string;
	bVisible: boolean;
	PriorityOrder: number;
	static Load(ResourceName: string): JavascriptEdMode;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode;
	static GetDefaultObject(): JavascriptEdMode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject | any): JavascriptEdMode;
}

declare class JavascriptEdModeLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptEdModeLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdModeLibrary;
	static GetDefaultObject(): JavascriptEdModeLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdModeLibrary;
	static StartTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static SetDefaultMode(Tools?: JavascriptEditorModeTools,DefaultID?: string): {Tools: JavascriptEditorModeTools};
	static SetCurrentWidgetAxis(Mode: JavascriptEditorMode,InAxis: number): void;
	static SelectNone(Mode: JavascriptEditorMode): void;
	static IsTracking(Tools: JavascriptEditorModeTools): boolean;
	static IsModeActive(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsDefaultModeActive(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools, $: boolean};
	static GetModeManager(Mode: JavascriptEditorMode): JavascriptEditorModeTools;
	static GetLevelEditorModeTools(): JavascriptEditorModeTools;
	static GetHitProxy(Viewport: JavascriptEdViewport): JavascriptHitProxy;
	static GetCurrentWidgetAxis(Mode: JavascriptEditorMode): number;
	static EnsureNotInMode(Tools?: JavascriptEditorModeTools,ModeId?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	static EndTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static DestroyMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DeactivateMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DeactivateAllModes(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static ActivateMode(Tools?: JavascriptEditorModeTools,InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	static ActivateDefaultMode(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static C(Other: UObject | any): JavascriptEdModeLibrary;
}

declare class JavascriptInputEventStateLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptInputEventStateLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptInputEventStateLibrary;
	static GetDefaultObject(): JavascriptInputEventStateLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptInputEventStateLibrary;
	static IsSpaceBarPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsRightMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsMouseButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsMiddleMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsLeftMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsCtrlButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsCtrlButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsButtonPressed(InputEvent: JavascriptInputEventState,InKey: Key): boolean;
	static IsAnyMouseButtonDown(InputEvent: JavascriptInputEventState): boolean;
	static IsAltButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsAltButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static GetKey(InputEvent: JavascriptInputEventState): Key;
	static GetInputEvent(InputEvent: JavascriptInputEventState): EInputEvent;
	static C(Other: UObject | any): JavascriptInputEventStateLibrary;
}

declare class JavascriptLogSubscriber extends UObject { 
	OnNewLogMessage: UnrealEngineMulticastDelegate<(Message: string, Type: string, Category: string) => void>;
	static Load(ResourceName: string): JavascriptLogSubscriber;
	static Find(Outer: UObject, ResourceName: string): JavascriptLogSubscriber;
	static GetDefaultObject(): JavascriptLogSubscriber;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptLogSubscriber;
	static C(Other: UObject | any): JavascriptLogSubscriber;
}

declare class JavascriptMenuLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptMenuLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptMenuLibrary;
	static GetDefaultObject(): JavascriptMenuLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMenuLibrary;
	static UI_COMMAND_Function(This: JavascriptBindingContext,Command: JavascriptUICommand,InTextSubNamespace: string): JavascriptUICommandInfo;
	static RemoveExtension(Extender: JavascriptExtender,Extension: JavascriptExtensionBase): void;
	static PushCommandList(Builder?: JavascriptMenuBuilder,List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
	static ProcessCommandBindings_PointerEvent(CommandList: JavascriptUICommandList,InMouseEvent: UPointerEvent): boolean;
	static ProcessCommandBindings_KeyEvent(CommandList: JavascriptUICommandList,InKeyEvent: KeyEvent): boolean;
	static PopCommandList(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static NewBindingContext(InContextName: string,InContextDesc: string,InContextParent: string,InStyleSetName: string): JavascriptBindingContext;
	static GenericCommand(What: string): JavascriptUICommandInfo;
	static EndSection(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static Destroy(Context: JavascriptBindingContext): void;
	static CreateUICommandList(): JavascriptUICommandList;
	static CreateToolbarBuilder(CommandList: JavascriptUICommandList,Orientation: EOrientation,UFunction: JavascriptFunction): void;
	static CreateMenuBuilder(CommandList: JavascriptUICommandList,bInShouldCloseWindowAfterMenuSelection: boolean,UFunction: JavascriptFunction): void;
	static CreateMenuBarBuilder(CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): void;
	static Combine(Extenders: JavascriptExtender[]): JavascriptExtender;
	static BeginSection(Builder?: JavascriptMenuBuilder,InExtensionHook?: string,MenuHeadingText?: string): {Builder: JavascriptMenuBuilder};
	static Apply(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,MenuBuilder?: JavascriptMenuBuilder): {MenuBuilder: JavascriptMenuBuilder};
	static AddWidget(Builder?: JavascriptMenuBuilder,Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	static AddToolBarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddToolBarButtonByContext(Builder?: JavascriptMenuBuilder,Context?: JavascriptToolbarButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	static AddToolBarButton(Builder?: JavascriptMenuBuilder,CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	static AddSubMenu(Builder?: JavascriptMenuBuilder,Label?: string,Tooltip?: string,bInOpenSubMenuOnClick?: boolean,UFunction?: JavascriptFunction): {Builder: JavascriptMenuBuilder};
	static AddSeparator(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static AddPullDownMenu(MenuBuilder?: JavascriptMenuBuilder,InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	static AddMenuExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddMenuEntry(Builder?: JavascriptMenuBuilder,UObject?: JavascriptMenuContext): {Builder: JavascriptMenuBuilder};
	static AddMenuByCommands(Builder?: JavascriptMenuBuilder,UICommands?: JavascriptUICommands): {Builder: JavascriptMenuBuilder};
	static AddMenubarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddComboButton(Builder?: JavascriptMenuBuilder,UObject?: JavascriptComboButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	static C(Other: UObject | any): JavascriptMenuLibrary;
}

declare class JavascriptMultiBox extends Widget { 
	OnHook: UnrealEngineDelegate<(ID: string, Self: JavascriptMultiBox, CurrentBuilder: JavascriptMenuBuilder) => void>;
	static Load(ResourceName: string): JavascriptMultiBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptMultiBox;
	static GetDefaultObject(): JavascriptMultiBox;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMultiBox;
	static Bind(Builder: JavascriptMenuBuilder): void;
	AddSubMenu(Builder?: JavascriptMenuBuilder,ID?: string,Label?: string,Tooltip?: string,bInOpenSubMenuOnClick?: boolean): {Builder: JavascriptMenuBuilder};
	AddPullDownMenu(Builder?: JavascriptMenuBuilder,ID?: string,Label?: string,Tooltip?: string): {Builder: JavascriptMenuBuilder};
	static C(Other: UObject | any): JavascriptMultiBox;
}

declare type EJSCheckBoxState = 'Unchecked' | 'Checked' | 'Undetermined' | 'EJSCheckBoxState_MAX';
declare var EJSCheckBoxState : { Unchecked:'Unchecked',Checked:'Checked',Undetermined:'Undetermined',EJSCheckBoxState_MAX:'EJSCheckBoxState_MAX', };
declare class JavascriptNotification extends UObject { 
	text: string;
	bUseImage: boolean;
	UImage: SlateBrush;
	FadeInDuration: number;
	FadeOutDuration: number;
	ExpireDuration: number;
	bUseThrobber: boolean;
	bUseSuccessFailIcons: boolean;
	bUseLargeFont: boolean;
	bFireAndForget: boolean;
	CheckBoxState: EJSCheckBoxState;
	CheckBoxStateChanged: UnrealEngineDelegate<(State: ECheckBoxState) => void>;
	CheckBoxText: string;
	Hyperlink: UnrealEngineDelegate<() => void>;
	HyperlinkText: string;
	bAllowThrottleWhenFrameRateIsLow: boolean;
	static Load(ResourceName: string): JavascriptNotification;
	static Find(Outer: UObject, ResourceName: string): JavascriptNotification;
	static GetDefaultObject(): JavascriptNotification;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptNotification;
	Success(): void;
	SetText(InText: string): void;
	Reset(): void;
	Pending(): void;
	Fire(): void;
	Fail(): void;
	Fadeout(): void;
	static C(Other: UObject | any): JavascriptNotification;
}

declare class JavascriptOnEditorCommandlet extends Commandlet { 
	CmdLineTokens: string[];
	CmdLineSwitches: string[];
	static Load(ResourceName: string): JavascriptOnEditorCommandlet;
	static Find(Outer: UObject, ResourceName: string): JavascriptOnEditorCommandlet;
	static GetDefaultObject(): JavascriptOnEditorCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptOnEditorCommandlet;
	GetEngine(): EditorEngine;
	static C(Other: UObject | any): JavascriptOnEditorCommandlet;
}

declare type EPropertyAccessResult = 'MultipleValues' | 'Fail' | 'Success' | 'EPropertyAccessResult_MAX';
declare var EPropertyAccessResult : { MultipleValues:'MultipleValues',Fail:'Fail',Success:'Success',EPropertyAccessResult_MAX:'EPropertyAccessResult_MAX', };
declare class JavascriptSimpleDelegateWrapper extends UObject { 
	delegate: UnrealEngineDelegate<() => void>;
	static Load(ResourceName: string): JavascriptSimpleDelegateWrapper;
	static Find(Outer: UObject, ResourceName: string): JavascriptSimpleDelegateWrapper;
	static GetDefaultObject(): JavascriptSimpleDelegateWrapper;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSimpleDelegateWrapper;
	static C(Other: UObject | any): JavascriptSimpleDelegateWrapper;
}

declare class JavascriptPropertyHandle { 
	clone() : JavascriptPropertyHandle;
	static C(Other: UObject | any): JavascriptPropertyHandle;
	CreatePropertyNameWidget(NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	CreatePropertyValueWidget(bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	GeneratePathToProperty(): string;
	GetChildHandle(Name: string): JavascriptPropertyHandle;
	GetIndexInArray(): number;
	GetJavascriptRefValue(OutValue?: JavascriptRef): {OutValue: JavascriptRef, $: EPropertyAccessResult};
	GetKeyHandle(): JavascriptPropertyHandle;
	GetMetaData(Key: string): string;
	GetObjectValue(OutValue?: UObject): {OutValue: UObject, $: EPropertyAccessResult};
	GetOuterObjects(): UObject[];
	GetParentHandle(): JavascriptPropertyHandle;
	GetProperty(): any;
	GetPropertyName(): string;
	GetValueAsFormattedString(OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	IsArrayProperty(): boolean;
	IsArrayPropertyWithValueType(): boolean;
	IsEditConst(): boolean;
	IsValidHandle(): boolean;
	SetJavascriptRefValue(InValue: JavascriptRef): EPropertyAccessResult;
	SetObjectValue(InValue: UObject): EPropertyAccessResult;
	SetOnPropertyValueChanged(Wrapper: JavascriptSimpleDelegateWrapper): void;
	SetValueFromFormattedString(InValue: string): EPropertyAccessResult;
	static CreatePropertyNameWidget(Handle: JavascriptPropertyHandle,NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	static CreatePropertyValueWidget(Handle: JavascriptPropertyHandle,bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	static GeneratePathToProperty(Handle: JavascriptPropertyHandle): string;
	static GetChildHandle(Parent: JavascriptPropertyHandle,Name: string): JavascriptPropertyHandle;
	static GetIndexInArray(Handle: JavascriptPropertyHandle): number;
	static GetJavascriptRefValue(Handle: JavascriptPropertyHandle,OutValue?: JavascriptRef): {OutValue: JavascriptRef, $: EPropertyAccessResult};
	static GetKeyHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle;
	static GetMetaData(Handle: JavascriptPropertyHandle,Key: string): string;
	static GetObjectValue(Handle: JavascriptPropertyHandle,OutValue?: UObject): {OutValue: UObject, $: EPropertyAccessResult};
	static GetOuterObjects(Handle: JavascriptPropertyHandle): UObject[];
	static GetParentHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle;
	static GetProperty(Handle: JavascriptPropertyHandle): any;
	static GetPropertyName(Handle: JavascriptPropertyHandle): string;
	static GetValueAsFormattedString(Handle: JavascriptPropertyHandle,OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	static IsArrayProperty(Handle: JavascriptPropertyHandle): boolean;
	static IsArrayPropertyWithValueType(Handle: JavascriptPropertyHandle): boolean;
	static IsEditConst(Handle: JavascriptPropertyHandle): boolean;
	static IsValidHandle(Handle: JavascriptPropertyHandle): boolean;
	static SetJavascriptRefValue(Handle: JavascriptPropertyHandle,InValue: JavascriptRef): EPropertyAccessResult;
	static SetObjectValue(Handle: JavascriptPropertyHandle,InValue: UObject): EPropertyAccessResult;
	static SetOnPropertyValueChanged(Handle: JavascriptPropertyHandle,Wrapper: JavascriptSimpleDelegateWrapper): void;
	static SetValueFromFormattedString(Handle: JavascriptPropertyHandle,InValue: string): EPropertyAccessResult;
}

declare class JavascriptDetailWidgetDecl { 
	clone() : JavascriptDetailWidgetDecl;
	static C(Other: UObject | any): JavascriptDetailWidgetDecl;
	SetContent(Widget: JavascriptSlateWidget): void;
	SetHAlign(InAlignment: EHorizontalAlignment): void;
	SetMaxDesiredWidth(MaxWidth: number): void;
	SetMinDesiredWidth(MinWidth: number): void;
	SetVAlign(InAlignment: EVerticalAlignment): void;
	static SetContent(Decl: JavascriptDetailWidgetDecl,Widget: JavascriptSlateWidget): void;
	static SetHAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EHorizontalAlignment): void;
	static SetMaxDesiredWidth(Decl: JavascriptDetailWidgetDecl,MaxWidth: number): void;
	static SetMinDesiredWidth(Decl: JavascriptDetailWidgetDecl,MinWidth: number): void;
	static SetVAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EVerticalAlignment): void;
}

declare class JavascriptDetailWidgetRow { 
	clone() : JavascriptDetailWidgetRow;
	static C(Other: UObject | any): JavascriptDetailWidgetRow;
	NameContent(): JavascriptDetailWidgetDecl;
	SetFilterString(InFilterString: string): void;
	ValueContent(): JavascriptDetailWidgetDecl;
	WholeRowContent(): JavascriptDetailWidgetDecl;
	static NameContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static SetFilterString(Row: JavascriptDetailWidgetRow,InFilterString: string): void;
	static ValueContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static WholeRowContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
}

declare class JavascriptPropertyTypeCustomizationUtils { 
	clone() : JavascriptPropertyTypeCustomizationUtils;
	static C(Other: UObject | any): JavascriptPropertyTypeCustomizationUtils;
	RequestRefresh(bForce: boolean): void;
	static RequestRefresh(CustomizationUtils: JavascriptPropertyTypeCustomizationUtils,bForce: boolean): void;
}

declare class JavascriptSimpleGetBoolDelegateWrapper extends UObject { 
	delegate: UnrealEngineDelegate<() => boolean>;
	static Load(ResourceName: string): JavascriptSimpleGetBoolDelegateWrapper;
	static Find(Outer: UObject, ResourceName: string): JavascriptSimpleGetBoolDelegateWrapper;
	static GetDefaultObject(): JavascriptSimpleGetBoolDelegateWrapper;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSimpleGetBoolDelegateWrapper;
	static C(Other: UObject | any): JavascriptSimpleGetBoolDelegateWrapper;
}

declare class JavascriptDetailPropertyRow { 
	clone() : JavascriptDetailPropertyRow;
	static C(Other: UObject | any): JavascriptDetailPropertyRow;
	BindVisibility(Wrapper: JavascriptSimpleGetBoolDelegateWrapper): void;
	CustomWidget(bShowChildren: boolean): JavascriptDetailWidgetRow;
	static BindVisibility(Row: JavascriptDetailPropertyRow,Wrapper: JavascriptSimpleGetBoolDelegateWrapper): void;
	static CustomWidget(Row: JavascriptDetailPropertyRow,bShowChildren: boolean): JavascriptDetailWidgetRow;
}

declare class JavascriptDetailChildrenBuilder { 
	clone() : JavascriptDetailChildrenBuilder;
	static C(Other: UObject | any): JavascriptDetailChildrenBuilder;
	AddChildContent(SearchString: string): JavascriptDetailWidgetRow;
	AddChildProperty(PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	AddExternalObjectProperty(Objects?: UObject[],PropertyName?: string,UniqueIdName?: string,bAllowChildrenOverride?: boolean,bCreateCategoryNodesOverride?: boolean): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	AddExternalObjects(Objects?: UObject[],UniqueIdName?: string): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	GenerateStructValueWidget(StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
	static AddChildContent(ChildBuilder: JavascriptDetailChildrenBuilder,SearchString: string): JavascriptDetailWidgetRow;
	static AddChildProperty(ChildBuilder: JavascriptDetailChildrenBuilder,PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	static AddExternalObjectProperty(ChildBuilder: JavascriptDetailChildrenBuilder,Objects?: UObject[],PropertyName?: string,UniqueIdName?: string,bAllowChildrenOverride?: boolean,bCreateCategoryNodesOverride?: boolean): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	static AddExternalObjects(ChildBuilder: JavascriptDetailChildrenBuilder,Objects?: UObject[],UniqueIdName?: string): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	static GenerateStructValueWidget(ChildBuilder: JavascriptDetailChildrenBuilder,StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
}

declare class JavascriptPropertyCustomization extends UObject { 
	PropertyTypeName: string;
	OnDestroy: UnrealEngineDelegate<(ID: number) => void>;
	OnCustomizeHeader: UnrealEngineDelegate<(Handle: JavascriptPropertyHandle, HeaderRow: JavascriptDetailWidgetRow, Utils: JavascriptPropertyTypeCustomizationUtils, ID: number) => void>;
	OnCustomizeChildren: UnrealEngineDelegate<(Handle: JavascriptPropertyHandle, ChildBuilder: JavascriptDetailChildrenBuilder, Utils: JavascriptPropertyTypeCustomizationUtils, ID: number) => void>;
	OnPropertyValueChanged: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): JavascriptPropertyCustomization;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomization;
	static GetDefaultObject(): JavascriptPropertyCustomization;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomization;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject | any): JavascriptPropertyCustomization;
}

declare class JavascriptPropertyCustomizationLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptPropertyCustomizationLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomizationLibrary;
	static GetDefaultObject(): JavascriptPropertyCustomizationLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomizationLibrary;
	static WholeRowContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static ValueContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static SetValueFromFormattedString(Handle: JavascriptPropertyHandle,InValue: string): EPropertyAccessResult;
	static SetVAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EVerticalAlignment): void;
	static SetOnPropertyValueChanged(Handle: JavascriptPropertyHandle,Wrapper: JavascriptSimpleDelegateWrapper): void;
	static SetObjectValue(Handle: JavascriptPropertyHandle,InValue: UObject): EPropertyAccessResult;
	static SetMinDesiredWidth(Decl: JavascriptDetailWidgetDecl,MinWidth: number): void;
	static SetMaxDesiredWidth(Decl: JavascriptDetailWidgetDecl,MaxWidth: number): void;
	static SetJavascriptRefValue(Handle: JavascriptPropertyHandle,InValue: JavascriptRef): EPropertyAccessResult;
	static SetHAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EHorizontalAlignment): void;
	static SetFilterString(Row: JavascriptDetailWidgetRow,InFilterString: string): void;
	static SetContent(Decl: JavascriptDetailWidgetDecl,Widget: JavascriptSlateWidget): void;
	static RequestRefresh(CustomizationUtils: JavascriptPropertyTypeCustomizationUtils,bForce: boolean): void;
	static NameContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static IsValidHandle(Handle: JavascriptPropertyHandle): boolean;
	static IsEditConst(Handle: JavascriptPropertyHandle): boolean;
	static IsArrayPropertyWithValueType(Handle: JavascriptPropertyHandle): boolean;
	static IsArrayProperty(Handle: JavascriptPropertyHandle): boolean;
	static GetValueAsFormattedString(Handle: JavascriptPropertyHandle,OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	static GetPropertyName(Handle: JavascriptPropertyHandle): string;
	static GetProperty(Handle: JavascriptPropertyHandle): any;
	static GetParentHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle;
	static GetOuterObjects(Handle: JavascriptPropertyHandle): UObject[];
	static GetObjectValue(Handle: JavascriptPropertyHandle,OutValue?: UObject): {OutValue: UObject, $: EPropertyAccessResult};
	static GetMetaData(Handle: JavascriptPropertyHandle,Key: string): string;
	static GetKeyHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle;
	static GetJavascriptRefValue(Handle: JavascriptPropertyHandle,OutValue?: JavascriptRef): {OutValue: JavascriptRef, $: EPropertyAccessResult};
	static GetIndexInArray(Handle: JavascriptPropertyHandle): number;
	static GetChildHandle(Parent: JavascriptPropertyHandle,Name: string): JavascriptPropertyHandle;
	static GenerateStructValueWidget(ChildBuilder: JavascriptDetailChildrenBuilder,StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
	static GeneratePathToProperty(Handle: JavascriptPropertyHandle): string;
	static CustomWidget(Row: JavascriptDetailPropertyRow,bShowChildren: boolean): JavascriptDetailWidgetRow;
	static CreatePropertyValueWidget(Handle: JavascriptPropertyHandle,bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	static CreatePropertyNameWidget(Handle: JavascriptPropertyHandle,NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	static BindVisibility(Row: JavascriptDetailPropertyRow,Wrapper: JavascriptSimpleGetBoolDelegateWrapper): void;
	static AddExternalObjects(ChildBuilder: JavascriptDetailChildrenBuilder,Objects?: UObject[],UniqueIdName?: string): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	static AddExternalObjectProperty(ChildBuilder: JavascriptDetailChildrenBuilder,Objects?: UObject[],PropertyName?: string,UniqueIdName?: string,bAllowChildrenOverride?: boolean,bCreateCategoryNodesOverride?: boolean): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	static AddChildProperty(ChildBuilder: JavascriptDetailChildrenBuilder,PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	static AddChildContent(ChildBuilder: JavascriptDetailChildrenBuilder,SearchString: string): JavascriptDetailWidgetRow;
	static C(Other: UObject | any): JavascriptPropertyCustomizationLibrary;
}

declare type EPropertyEditorNameAreaSettings = 'HideNameArea' | 'ObjectsUseNameArea' | 'ActorsUseNameArea' | 'ComponentsAndActorsUseNameArea' | 'EPropertyEditorNameAreaSettings_MAX';
declare var EPropertyEditorNameAreaSettings : { HideNameArea:'HideNameArea',ObjectsUseNameArea:'ObjectsUseNameArea',ActorsUseNameArea:'ActorsUseNameArea',ComponentsAndActorsUseNameArea:'ComponentsAndActorsUseNameArea',EPropertyEditorNameAreaSettings_MAX:'EPropertyEditorNameAreaSettings_MAX', };
declare class PropertyEditor extends Widget { 
	OnChange: UnrealEngineMulticastDelegate<(PropertyName: string, MemberPropertyName: string) => void>;
	bUpdateFromSelection: boolean;
	bLockable: boolean;
	bAllowSearch: boolean;
	bHideSelectionTip: boolean;
	bReadOnly: boolean;
	bEnablePropertyPath: boolean;
	NameAreaSettings: EPropertyEditorNameAreaSettings;
	ReadOnlyDelegate: UnrealEngineDelegate<() => boolean>;
	static Load(ResourceName: string): PropertyEditor;
	static Find(Outer: UObject, ResourceName: string): PropertyEditor;
	static GetDefaultObject(): PropertyEditor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyEditor;
	SetObjects(Objects: UObject[],bForceRefresh: boolean,bOverrideLock: boolean): void;
	SetObject(UObject: UObject,bForceRefresh: boolean): void;
	IsPropertyVisible(PropertName: string,ParentPropertyName: string,PropertyPaths: string[]): boolean;
	IsPropertyReadOnly(PropertyName: string,ParentPropertyName: string,PropertyPaths: string[]): boolean;
	ForceRefresh(): void;
	Destruct(): void;
	Construct(): void;
	static C(Other: UObject | any): PropertyEditor;
}

declare class JavascriptPropertyTable extends Widget { 
	OnGenerateCustomCellWidget: UnrealEngineDelegate<(UObject: UObject, ColumnName: string) => JavascriptSlateWidget>;
	OnUseCustomCellWidget: UnrealEngineDelegate<(UObject: UObject, ColumnName: string) => boolean>;
	bUseCustomColumns: boolean;
	static Load(ResourceName: string): JavascriptPropertyTable;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyTable;
	static GetDefaultObject(): JavascriptPropertyTable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyTable;
	SetEditingObjects(InEditingObjects: UObject[]): void;
	GetSelectedTableObjects(): UObject[];
	GetEditingObjects(): UObject[];
	static C(Other: UObject | any): JavascriptPropertyTable;
}

declare class JavascriptRawMeshLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptRawMeshLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptRawMeshLibrary;
	static GetDefaultObject(): JavascriptRawMeshLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptRawMeshLibrary;
	static SetSectionInfo(StaticMesh: StaticMesh,LODIndex: number,SectionIndex: number,Info: MeshSectionInfo): void;
	static SaveRawMesh(StaticMesh: StaticMesh,SourceModelIndex: number,InMesh?: JavascriptRawMesh): {InMesh: JavascriptRawMesh};
	static LoadRawMesh(StaticMesh: StaticMesh,SourceModelIndex: number,OutMesh?: JavascriptRawMesh): {OutMesh: JavascriptRawMesh};
	static IsValidOrFixable(RawMesh: JavascriptRawMesh): boolean;
	static IsValid(RawMesh: JavascriptRawMesh): boolean;
	static GetWedgePosition(RawMesh: JavascriptRawMesh,WedgeIndex: number): Vector;
	static GetSectionInfo(StaticMesh: StaticMesh,LODIndex: number,SectionIndex: number): MeshSectionInfo;
	static GetPhysicsBodySetupFromStaticMeshComponent(InStaticMeshComp: StaticMeshComponent): BodySetup;
	static GetPhysicsBodySetupFromStaticMesh(InStaticMesh: StaticMesh): BodySetup;
	static GetPhysicsBodySetupFromMesh(InSkeletalMesh: SkeletalMesh,InName: string): BodySetup;
	static GetPhysicsBodySetup(InSkeletalMeshComp: SkeletalMeshComponent,InName: string): BodySetup;
	static Empty(RawMesh?: JavascriptRawMesh): {RawMesh: JavascriptRawMesh};
	static CompactMaterialIndices(RawMesh?: JavascriptRawMesh): {RawMesh: JavascriptRawMesh};
	static Build(StaticMesh: StaticMesh): void;
	static C(Other: UObject | any): JavascriptRawMeshLibrary;
}

declare class JavascriptScrubControlPanel extends Widget { 
	OnClick_Forward_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Forward_Step_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Forward_End_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Backward_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Backward_Step_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Backward_End_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_ToggleLoop_Delegate: UnrealEngineMulticastDelegate<() => void>;
	SetPlaybackPosition_Delegate: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): JavascriptScrubControlPanel;
	static Find(Outer: UObject, ResourceName: string): JavascriptScrubControlPanel;
	static GetDefaultObject(): JavascriptScrubControlPanel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptScrubControlPanel;
	SetViewRange(NewMin: number,NewMax: number): void;
	SetSumFrames(NewSumFrames: number): void;
	SetPlaybackPosition(NewTime: number): void;
	SetLooping(NewbLooping: boolean): void;
	SetFramesPerSecond(NewFramesPerSecond: number): void;
	IsLooping(): boolean;
	GetViewRangeMin(): number;
	GetViewRangeMax(): number;
	GetTotalSequenceLength(): number;
	GetTotalFrameCount(): any;
	GetPlaybackPosition(): number;
	GetFramesPerSecond(): number;
	static C(Other: UObject | any): JavascriptScrubControlPanel;
}

declare class JavascriptWebBrowser extends Widget { 
	OnUrlChanged: UnrealEngineMulticastDelegate<(text: string) => void>;
	OnBeforePopup: UnrealEngineMulticastDelegate<(URL: string, Frame: string) => void>;
	bShowAddressBar: boolean;
	bShowControls: boolean;
	bSupportsThumbMouseButtonNavigation: boolean;
	static Load(ResourceName: string): JavascriptWebBrowser;
	static Find(Outer: UObject, ResourceName: string): JavascriptWebBrowser;
	static GetDefaultObject(): JavascriptWebBrowser;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWebBrowser;
	LoadURL(NewURL: string): void;
	LoadString(Contents: string,DummyURL: string): void;
	GetUrl(): string;
	GetTitleText(): string;
	ExecuteJavascript(ScriptText: string): void;
	static C(Other: UObject | any): JavascriptWebBrowser;
}

declare class JavascriptPinParams { 
	ContainerType: EPinContainerType;
	bIsReference: boolean;
	bIsConst: boolean;
	index: number;
	clone() : JavascriptPinParams;
	static C(Other: UObject | any): JavascriptPinParams;
}

declare class JavascriptGraphEdNode extends EdGraphNode { 
	BackgroundColor: SlateColor;
	GraphNode: UObject;
	IsTitleOnly: boolean;
	IsCustomNode: boolean;
	WidgetFinalized: JavascriptFunction;
	RenderOpacity: number;
	Bidirectional: boolean;
	PriorityOrder: number;
	PinRefMap: any;
	static Load(ResourceName: string): JavascriptGraphEdNode;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdNode;
	static GetDefaultObject(): JavascriptGraphEdNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdNode;
	UpdateSlate(): void;
	SetVisible(bVisible: boolean): void;
	SetTitleSelectionMode(InTitleHeight: number): void;
	SetRenderOpacity(Opacity: number): void;
	SetEnable(bEnable: boolean): void;
	ResetTitleSelectionMode(): void;
	RemovePinByName(PinName: string): boolean;
	RemovePin(Pin: JavascriptEdGraphPin): boolean;
	GetVisible(): boolean;
	GetNumOfPins(Direction: EEdGraphPinDirection): number;
	GetDesiredSize(): Vector2D;
	CreatePin(Dir: EEdGraphPinDirection,PinCategory: string,PinSubCategory: string,PinSubCategoryObject: UObject,PinName: string,PinToolTip: string,PinDisplayName: string,InPinParams: JavascriptPinParams): JavascriptEdGraphPin;
	static C(Other: UObject | any): JavascriptGraphEdNode;
	GetOwnerPanel(): JavascriptSlateWidget;
	static GetOwnerPanel(UNode: JavascriptGraphEdNode): JavascriptSlateWidget;
}

declare class JavascriptSlateEdNode { 
	clone() : JavascriptSlateEdNode;
	static C(Other: UObject | any): JavascriptSlateEdNode;
	AddPinToHoverSet(Pin: JavascriptEdGraphPin): void;
	RemovePinFromHoverSet(Pin: JavascriptEdGraphPin): void;
	static AddPinToHoverSet(InSlateEdNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
	static RemovePinFromHoverSet(InSlateNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
}

declare class JavascriptPerformSecondPassLayoutContainer { 
	PrevNode: EdGraphNode;
	NextNode: EdGraphNode;
	NodeIndex: number;
	MaxNodes: number;
	clone() : JavascriptPerformSecondPassLayoutContainer;
	static C(Other: UObject | any): JavascriptPerformSecondPassLayoutContainer;
}

declare class JavascriptConnectionParams { 
	WireColor: LinearColor;
	AssociatedPin1: JavascriptEdGraphPin;
	AssociatedPin2: JavascriptEdGraphPin;
	WireThickness: number;
	bDrawBubbles: boolean;
	bUserFlag1: boolean;
	bUserFlag2: boolean;
	StartDirection: EEdGraphPinDirection;
	EndDirection: EEdGraphPinDirection;
	clone() : JavascriptConnectionParams;
	static C(Other: UObject | any): JavascriptConnectionParams;
}

declare class JavascriptGraphConnectionDrawingPolicyContainer { 
	clone() : JavascriptGraphConnectionDrawingPolicyContainer;
	static C(Other: UObject | any): JavascriptGraphConnectionDrawingPolicyContainer;
	ApplyHoverDeemphasis(OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Thickness: number,WireColor: LinearColor): void;
	DetermineWiringStyle(OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Params?: JavascriptConnectionParams): {Params: JavascriptConnectionParams};
	DrawConnection(A: Vector2D,B: Vector2D,Params: JavascriptConnectionParams): void;
	DrawSplineWithArrow(StartAnchorPoint: Vector2D,EndAnchorPoint: Vector2D,Params: JavascriptConnectionParams): void;
	GetHorveredPinNum(): number;
	IsContainedHoveredPins(Pin: JavascriptEdGraphPin): boolean;
	MakeRotatedBox(ArrowDrawPos: Vector2D,AngleInRadians: number,WireColor: LinearColor): void;
	static ApplyHoverDeemphasis(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Thickness: number,WireColor: LinearColor): void;
	static DetermineWiringStyle(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Params?: JavascriptConnectionParams): {Params: JavascriptConnectionParams};
	static DrawConnection(Container: JavascriptGraphConnectionDrawingPolicyContainer,A: Vector2D,B: Vector2D,Params: JavascriptConnectionParams): void;
	static DrawSplineWithArrow(Container: JavascriptGraphConnectionDrawingPolicyContainer,StartAnchorPoint: Vector2D,EndAnchorPoint: Vector2D,Params: JavascriptConnectionParams): void;
	static GetHorveredPinNum(Container: JavascriptGraphConnectionDrawingPolicyContainer): number;
	static IsContainedHoveredPins(Container: JavascriptGraphConnectionDrawingPolicyContainer,Pin: JavascriptEdGraphPin): boolean;
	static MakeRotatedBox(Container: JavascriptGraphConnectionDrawingPolicyContainer,ArrowDrawPos: Vector2D,AngleInRadians: number,WireColor: LinearColor): void;
}

declare type EGraphSchemaGetStringQuery = 'Description' | 'Title' | 'EGraphSchemaGetStringQuery_MAX';
declare var EGraphSchemaGetStringQuery : { Description:'Description',Title:'Title',EGraphSchemaGetStringQuery_MAX:'EGraphSchemaGetStringQuery_MAX', };
declare class JavascriptGraphMenuBuilder extends JavascriptMenuBuilder { 
	Graph: EdGraph;
	GraphNode: EdGraphNode;
	GraphPin: JavascriptEdGraphPin;
	bIsDebugging: boolean;
	clone() : JavascriptGraphMenuBuilder;
	static C(Other: UObject | any): JavascriptGraphMenuBuilder;
}

declare type ECanCreateConnectionResponse = 'CONNECT_RESPONSE_MAKE' | 'CONNECT_RESPONSE_DISALLOW' | 'CONNECT_RESPONSE_BREAK_OTHERS_A' | 'CONNECT_RESPONSE_BREAK_OTHERS_B' | 'CONNECT_RESPONSE_BREAK_OTHERS_AB' | 'CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE' | 'CONNECT_RESPONSE_MAKE_WITH_PROMOTION' | 'CONNECT_RESPONSE_MAX';
declare var ECanCreateConnectionResponse : { CONNECT_RESPONSE_MAKE:'CONNECT_RESPONSE_MAKE',CONNECT_RESPONSE_DISALLOW:'CONNECT_RESPONSE_DISALLOW',CONNECT_RESPONSE_BREAK_OTHERS_A:'CONNECT_RESPONSE_BREAK_OTHERS_A',CONNECT_RESPONSE_BREAK_OTHERS_B:'CONNECT_RESPONSE_BREAK_OTHERS_B',CONNECT_RESPONSE_BREAK_OTHERS_AB:'CONNECT_RESPONSE_BREAK_OTHERS_AB',CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE:'CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE',CONNECT_RESPONSE_MAKE_WITH_PROMOTION:'CONNECT_RESPONSE_MAKE_WITH_PROMOTION',CONNECT_RESPONSE_MAX:'CONNECT_RESPONSE_MAX', };
declare class JavascriptPinConnectionResponse { 
	Message: string;
	Response: ECanCreateConnectionResponse;
	clone() : JavascriptPinConnectionResponse;
	static C(Other: UObject | any): JavascriptPinConnectionResponse;
}

declare class EdGraphSchemaAction { 
	MenuDescription: string;
	TooltipDescription: string;
	Category: string;
	Keywords: string;
	Grouping: number;
	SectionID: number;
	MenuDescriptionArray: string[];
	FullSearchTitlesArray: string[];
	FullSearchKeywordsArray: string[];
	FullSearchCategoryArray: string[];
	LocalizedMenuDescriptionArray: string[];
	LocalizedFullSearchTitlesArray: string[];
	LocalizedFullSearchKeywordsArray: string[];
	LocalizedFullSearchCategoryArray: string[];
	SearchText: string;
	clone() : EdGraphSchemaAction;
	static C(Other: UObject | any): EdGraphSchemaAction;
}

declare class PerformActionContext { 
	ParentGraph: EdGraph;
	FromPins: JavascriptEdGraphPin[];
	Location: Vector2D;
	bSelectNewNode: boolean;
	clone() : PerformActionContext;
	static C(Other: UObject | any): PerformActionContext;
}

declare class JavascriptArrangedWidget { 
	clone() : JavascriptArrangedWidget;
	static C(Other: UObject | any): JavascriptArrangedWidget;
}

declare class JavascriptPinWidget { 
	clone() : JavascriptPinWidget;
	static C(Other: UObject | any): JavascriptPinWidget;
}

declare class JavascriptDetermineLinkGeometryContainer { 
	clone() : JavascriptDetermineLinkGeometryContainer;
	static C(Other: UObject | any): JavascriptDetermineLinkGeometryContainer;
	FindPinGeometries(PinWidget: JavascriptPinWidget): JavascriptArrangedWidget;
	FindPinToPinWidgetMap(Pin: JavascriptEdGraphPin): JavascriptPinWidget;
	GetArrangedNodes(UNode: EdGraphNode): JavascriptArrangedWidget;
	GetOutputPinWidget(): JavascriptPinWidget;
	static FindPinGeometries(Container: JavascriptDetermineLinkGeometryContainer,PinWidget: JavascriptPinWidget): JavascriptArrangedWidget;
	static FindPinToPinWidgetMap(Container: JavascriptDetermineLinkGeometryContainer,Pin: JavascriptEdGraphPin): JavascriptPinWidget;
	static GetArrangedNodes(Container: JavascriptDetermineLinkGeometryContainer,UNode: EdGraphNode): JavascriptArrangedWidget;
	static GetOutputPinWidget(Container: JavascriptDetermineLinkGeometryContainer): JavascriptPinWidget;
}

declare class JavascriptGraphAssetGraphSchema extends EdGraphSchema { 
	OnGetPinColor: UnrealEngineDelegate<(bHovered: boolean, Pin: JavascriptEdGraphPin) => SlateColor>;
	OnGetPinTextColor: UnrealEngineDelegate<(bHovered: boolean, Pin: JavascriptEdGraphPin) => SlateColor>;
	OnGetDefaultValueVisibility: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnGetSlateBrushName: UnrealEngineDelegate<(bHovered: boolean, Pin: JavascriptEdGraphPin) => string>;
	OnPinConnectionListChanged: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => void>;
	OnTryCreateConnection: UnrealEngineDelegate<(PinA: JavascriptEdGraphPin, PinB: JavascriptEdGraphPin) => void>;
	OnMouseEnter: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, SlateEdNode: JavascriptSlateEdNode, UPointerEvent: UPointerEvent) => void>;
	OnMouseLeave: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, SlateEdNode: JavascriptSlateEdNode, UPointerEvent: UPointerEvent) => void>;
	OnMouseMove: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, Delta: Vector2D, bUserIsDragging: boolean, MouseZone: number, UPointerEvent: UPointerEvent) => boolean>;
	OnMouseButtonDown: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, MyGeometry: Geometry, UPointerEvent: UPointerEvent) => boolean>;
	OnMouseButtonUp: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, MyGeometry: Geometry, UPointerEvent: UPointerEvent) => boolean>;
	OnPerformSecondPassLayout: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptPerformSecondPassLayoutContainer>;
	OnRequiresSecondPassLayout: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnMoveTo: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, NewPosition: Vector2D) => boolean>;
	OnTakeContentWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, OutLeftNodeBoxWidget: JavascriptSlateWidget, OutRightNodeBoxWidget: JavascriptSlateWidget) => JavascriptSlateWidget>;
	OnGetValueWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnGetActualPinWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnGetPinStatusIndicator: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnDisableMakePins: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnEnablePin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnUsingDefaultPin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnGetPinLabelVisibility: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnGetCustomPinBoxWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnUsingNodeWidgetMap: UnrealEngineDelegate<() => boolean>;
	OnDetermineWiringStyle: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => void>;
	OnComputeSplineTangent: UnrealEngineDelegate<(A: Vector2D, B: Vector2D) => Vector2D>;
	OnDrawSplineWithArrow: UnrealEngineDelegate<(A: Vector2D, B: Vector2D, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer, ArrowRadius: Vector2D) => boolean>;
	OnDrawSplineWithArrow_Geom: UnrealEngineDelegate<(A: Geometry, B: Geometry, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => boolean>;
	OnDrawPreviewConnector: UnrealEngineDelegate<(PinGeometry: Geometry, StartPoint: Vector2D, EndPoint: Vector2D, Pin: JavascriptEdGraphPin, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => boolean>;
	OnTakeUserWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptSlateWidget>;
	OnTakeTitleAreaWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptSlateWidget>;
	OnTakeErrorReportingWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptSlateWidget>;
	OnGetString: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, Query: EGraphSchemaGetStringQuery) => string>;
	OnBuildMenu: UnrealEngineDelegate<(Builder: JavascriptGraphMenuBuilder) => void>;
	OnAllocateDefaultPins: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnCreatePin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnCanCreateConnection: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => JavascriptPinConnectionResponse>;
	OnPerformAction: UnrealEngineDelegate<(Action: EdGraphSchemaAction, Context: PerformActionContext) => EdGraphNode>;
	OnContextActions: UnrealEngineDelegate<(FromPin: JavascriptEdGraphPin) => EdGraphSchemaAction[]>;
	OnNodeConnectionListChanged: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnCreateAutomaticConversionNodeAndConnections: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => boolean>;
	OnDetermineLinkGeometry: UnrealEngineDelegate<(OutPin: JavascriptEdGraphPin, InputPin: JavascriptEdGraphPin, StartWidgetGeometry: JavascriptArrangedWidget, EndWidgetGeometry: JavascriptArrangedWidget, Container: JavascriptDetermineLinkGeometryContainer) => boolean>;
	OnIsNodeComment: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnEndUserInteraction: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnCreateOutputSideAddButton: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnAddPinByAddButton: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnShouldAlwaysPurgeOnModification: UnrealEngineDelegate<() => boolean>;
	OnDragEnter: UnrealEngineDelegate<(Target: JavascriptGraphEdNode, Capture: JavascriptGraphEdNode, MyGeometry: Geometry) => boolean>;
	OnDragLeave: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnDragOver: UnrealEngineDelegate<(Target: JavascriptGraphEdNode, Capture: JavascriptGraphEdNode, MyGeometry: Geometry) => boolean>;
	OnDrop: UnrealEngineDelegate<(Target: JavascriptGraphEdNode, Capture: JavascriptGraphEdNode, MyGeometry: Geometry) => boolean>;
	OnGetSideMarginInPin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => number>;
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema;
	BreakSinglePinLink(SourcePin: JavascriptEdGraphPin,TargetPin: JavascriptEdGraphPin): void;
	BreakPinLinks(TargetPin: JavascriptEdGraphPin,bSendsNodeNotifcation: boolean): void;
	BreakNodeLinks(TargetNode: EdGraphNode): void;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema;
}

declare class JavascriptGraphEdCustomNodeWidget extends Widget { 
	EdNode: JavascriptGraphEdNode;
	static Load(ResourceName: string): JavascriptGraphEdCustomNodeWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdCustomNodeWidget;
	static GetDefaultObject(): JavascriptGraphEdCustomNodeWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdCustomNodeWidget;
	SetNode(InEdNode: JavascriptGraphEdNode): void;
	SetGraphPanel(InGraphPanel: JavascriptSlateWidget): void;
	static C(Other: UObject | any): JavascriptGraphEdCustomNodeWidget;
}

declare class JavascriptNodeCreator { 
	UNode: JavascriptGraphEdNode;
	clone() : JavascriptNodeCreator;
	static C(Other: UObject | any): JavascriptNodeCreator;
	Finalize(): {Creator: JavascriptNodeCreator};
	static Finalize(Creator?: JavascriptNodeCreator): {Creator: JavascriptNodeCreator};
}

declare class JavascriptGraphEdGraph extends EdGraph { 
	CustomNodes: JavascriptGraphEdNode[];
	static Load(ResourceName: string): JavascriptGraphEdGraph;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdGraph;
	static GetDefaultObject(): JavascriptGraphEdGraph;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdGraph;
	RebuildGenericGraph(): void;
	static C(Other: UObject | any): JavascriptGraphEdGraph;
	CommentNodeCreator(bSelectNewNode: boolean): JavascriptNodeCreator;
	CustomNodeCreator(): JavascriptNodeCreator;
	NodeCreator(bSelectNewNode: boolean): JavascriptNodeCreator;
	static CommentNodeCreator(Graph: JavascriptGraphEdGraph,bSelectNewNode: boolean): JavascriptNodeCreator;
	static CustomNodeCreator(Graph: JavascriptGraphEdGraph): JavascriptNodeCreator;
	static NodeCreator(Graph: JavascriptGraphEdGraph,bSelectNewNode: boolean): JavascriptNodeCreator;
}

declare class JavascriptGraphEditorLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptGraphEditorLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorLibrary;
	static GetDefaultObject(): JavascriptGraphEditorLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorLibrary;
	static TryConnection(Schema: EdGraphSchema,A: JavascriptEdGraphPin,B: JavascriptEdGraphPin): boolean;
	static SetPinType(Pin: JavascriptEdGraphPin,PinType: EdGraphPinType): void;
	static SetPinRefObject(InPin: JavascriptEdGraphPin,InObject: UObject): void;
	static SetPinInfo(A: JavascriptEdGraphPin,InPinName: string,InPinToolTip: string): void;
	static SetPinHidden(A: JavascriptEdGraphPin,bHidden: boolean): void;
	static SetPinContainerType(A: JavascriptEdGraphPin,ContainerType: EJavascriptPinContainerType): void;
	static SetPinAdvancedView(A: JavascriptEdGraphPin,bAdvancedView: boolean): void;
	static SetParentPin(A: JavascriptEdGraphPin,Parent: JavascriptEdGraphPin): void;
	static SetNodeMetaData(Schema: EdGraphSchema,UNode: EdGraphNode,KeyValue: string): boolean;
	static ResizeNode(UNode: EdGraphNode,NewSize: Vector2D): void;
	static RemovePinFromHoverSet(InSlateNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
	static NodeCreator(Graph: JavascriptGraphEdGraph,bSelectNewNode: boolean): JavascriptNodeCreator;
	static MakeRotatedBox(Container: JavascriptGraphConnectionDrawingPolicyContainer,ArrowDrawPos: Vector2D,AngleInRadians: number,WireColor: LinearColor): void;
	static MakeLinkTo(A: JavascriptEdGraphPin,B: JavascriptEdGraphPin): void;
	static IsValid(A: JavascriptEdGraphPin): boolean;
	static IsPinHidden(A: JavascriptEdGraphPin): boolean;
	static IsContainedHoveredPins(Container: JavascriptGraphConnectionDrawingPolicyContainer,Pin: JavascriptEdGraphPin): boolean;
	static GetSubPins(A: JavascriptEdGraphPin): JavascriptEdGraphPin[];
	static GetPinType(A: JavascriptEdGraphPin): EdGraphPinType;
	static GetPins(UNode: EdGraphNode): JavascriptEdGraphPin[];
	static GetPinRefObject(InPin: JavascriptEdGraphPin): UObject;
	static GetPinName(A: JavascriptEdGraphPin): string;
	static GetPinIndex(A: JavascriptEdGraphPin): number;
	static GetPinGUID(A: JavascriptEdGraphPin): Guid;
	static GetPinContainerType(A: JavascriptEdGraphPin): EJavascriptPinContainerType;
	static GetParentPin(A: JavascriptEdGraphPin): JavascriptEdGraphPin;
	static GetOwningNode(A: JavascriptEdGraphPin): EdGraphNode;
	static GetOwnerPanel(UNode: JavascriptGraphEdNode): JavascriptSlateWidget;
	static GetOutputPinWidget(Container: JavascriptDetermineLinkGeometryContainer): JavascriptPinWidget;
	static GetLinkedTo(A: JavascriptEdGraphPin): JavascriptEdGraphPin[];
	static GetLinkedPinNum(A: JavascriptEdGraphPin): number;
	static GetHorveredPinNum(Container: JavascriptGraphConnectionDrawingPolicyContainer): number;
	static GetDirection(A: JavascriptEdGraphPin): EEdGraphPinDirection;
	static GetDefaultObject(): JavascriptEdGraphPin;
	static GetArrangedNodes(Container: JavascriptDetermineLinkGeometryContainer,UNode: EdGraphNode): JavascriptArrangedWidget;
	static FindPinToPinWidgetMap(Container: JavascriptDetermineLinkGeometryContainer,Pin: JavascriptEdGraphPin): JavascriptPinWidget;
	static FindPinGeometries(Container: JavascriptDetermineLinkGeometryContainer,PinWidget: JavascriptPinWidget): JavascriptArrangedWidget;
	static FindPin(UNode: EdGraphNode,PinName: string,Direction: EEdGraphPinDirection): JavascriptEdGraphPin;
	static FindClosestPointOnGeom(Geom: Geometry,TestPoint: Vector2D): Vector2D;
	static Finalize(Creator?: JavascriptNodeCreator): {Creator: JavascriptNodeCreator};
	static DrawSplineWithArrow(Container: JavascriptGraphConnectionDrawingPolicyContainer,StartAnchorPoint: Vector2D,EndAnchorPoint: Vector2D,Params: JavascriptConnectionParams): void;
	static DrawConnection(Container: JavascriptGraphConnectionDrawingPolicyContainer,A: Vector2D,B: Vector2D,Params: JavascriptConnectionParams): void;
	static DetermineWiringStyle(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Params?: JavascriptConnectionParams): {Params: JavascriptConnectionParams};
	static DestroyNode(UNode: EdGraphNode): void;
	static CustomNodeCreator(Graph: JavascriptGraphEdGraph): JavascriptNodeCreator;
	static CommentNodeCreator(Graph: JavascriptGraphEdGraph,bSelectNewNode: boolean): JavascriptNodeCreator;
	static CenterOf(Geom: Geometry): Vector2D;
	static CanUserDeleteNode(UNode: EdGraphNode): boolean;
	static CanDuplicateNode(UNode: EdGraphNode): boolean;
	static BreakLinkTo(A: JavascriptEdGraphPin,B: JavascriptEdGraphPin): void;
	static BreakAllPinLinks(A: JavascriptEdGraphPin): void;
	static AutowireNewNode(UNode: EdGraphNode,FromPin: JavascriptEdGraphPin): void;
	static ApplyHoverDeemphasis(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Thickness: number,WireColor: LinearColor): void;
	static AddPinToHoverSet(InSlateEdNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
	static C(Other: UObject | any): JavascriptGraphEditorLibrary;
}

declare class JavascriptGraphAppearanceInfo { 
	CornerImage: SlateBrush;
	CornerText: string;
	PIENotifyText: string;
	ReadOnlyText: string;
	InstructionText: string;
	clone() : JavascriptGraphAppearanceInfo;
	static C(Other: UObject | any): JavascriptGraphAppearanceInfo;
}

declare type EPinVisibility = 'Pin_Show' | 'Pin_HideNoConnection' | 'Pin_HideNoConnectionNoDefault' | 'Pin_MAX';
declare var EPinVisibility : { Pin_Show:'Pin_Show',Pin_HideNoConnection:'Pin_HideNoConnection',Pin_HideNoConnectionNoDefault:'Pin_HideNoConnectionNoDefault',Pin_MAX:'Pin_MAX', };
declare class JavascriptGraphEditorWidget extends Widget { 
	EdGraph: JavascriptGraphEdGraph;
	OnNodeDoubleClicked: UnrealEngineDelegate<(UNode: EdGraphNode) => void>;
	OnDropActor: UnrealEngineDelegate<(Actors: Actor[], Graph: EdGraph, Point: Vector2D) => void>;
	OnDisallowedPinConnection: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => void>;
	OnSelectedNodesChanged: UnrealEngineDelegate<(Set: UObject[]) => void>;
	OnInitialGraphPanelUpdated: UnrealEngineDelegate<() => void>;
	AppearanceInfo: JavascriptGraphAppearanceInfo;
	CommandList: JavascriptUICommandList;
	static Load(ResourceName: string): JavascriptGraphEditorWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorWidget;
	static GetDefaultObject(): JavascriptGraphEditorWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorWidget;
	SetViewLocation(Location: Vector2D,ZoomAmount: number): void;
	SetPinVisibility(InVisibility: EPinVisibility): void;
	SetNodeSelection(UNode: EdGraphNode,bSelect: boolean): void;
	SetGraph(InEdGraph: JavascriptGraphEdGraph): void;
	SelectAllNodes(): void;
	NotifyGraphChanged(): void;
	static NewGraph(ParentScope: UObject): JavascriptGraphEdGraph;
	JumpToPin(JumpToMe: JavascriptEdGraphPin): void;
	JumpToNode(JumpToMe: EdGraphNode,bRequestRename: boolean,bSelectNode: boolean): void;
	GetViewLocation(OutLocation?: Vector2D,OutZoomAmount?: number): {OutLocation: Vector2D, OutZoomAmount: number};
	GetSelectedNodes(): UObject[];
	GetPasteLocation(): Vector2D;
	ClearSelectionSet(): void;
	static C(Other: UObject | any): JavascriptGraphEditorWidget;
}

declare class JavascriptGraphEdNodeWidget extends Widget { 
	EdNode: JavascriptGraphEdNode;
	static Load(ResourceName: string): JavascriptGraphEdNodeWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdNodeWidget;
	static GetDefaultObject(): JavascriptGraphEdNodeWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdNodeWidget;
	SetNode(InEdNode: JavascriptGraphEdNode): void;
	static C(Other: UObject | any): JavascriptGraphEdNodeWidget;
}

declare class JavascriptGraphEdNode_Comment extends JavascriptGraphEdNode { 
	CommentColor: LinearColor;
	FontSize: number;
	bCommentBubbleVisible_InDetailsPanel: boolean;
	bColorCommentBubble: boolean;
	MoveMode: ECommentBoxMode;
	CommentDepth: number;
	static Load(ResourceName: string): JavascriptGraphEdNode_Comment;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdNode_Comment;
	static GetDefaultObject(): JavascriptGraphEdNode_Comment;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdNode_Comment;
	static C(Other: UObject | any): JavascriptGraphEdNode_Comment;
}

declare class JavascriptGraphTextPropertyEditableTextBox extends Widget { 
	OnGetGraphPin: UnrealEngineDelegate<() => JavascriptEdGraphPin>;
	OnGetDefaultValue: UnrealEngineDelegate<() => JavascriptTextProperty>;
	OnTextCommitted: UnrealEngineMulticastDelegate<(TextProperty: JavascriptTextProperty) => void>;
	WidgetStyle: EditableTextBoxStyle;
	WrapTextAt: number;
	AutoWrapText: boolean;
	static Load(ResourceName: string): JavascriptGraphTextPropertyEditableTextBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphTextPropertyEditableTextBox;
	static GetDefaultObject(): JavascriptGraphTextPropertyEditableTextBox;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphTextPropertyEditableTextBox;
	static C(Other: UObject | any): JavascriptGraphTextPropertyEditableTextBox;
}

declare class OnGetGraphPin__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetGraphPin__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetGraphPin__PythonCallable;
	static GetDefaultObject(): OnGetGraphPin__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetGraphPin__PythonCallable;
	static C(Other: UObject | any): OnGetGraphPin__PythonCallable;
}

declare class OnDisallowedPinConnection__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDisallowedPinConnection__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDisallowedPinConnection__PythonCallable;
	static GetDefaultObject(): OnDisallowedPinConnection__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDisallowedPinConnection__PythonCallable;
	static C(Other: UObject | any): OnDisallowedPinConnection__PythonCallable;
}

declare class OnDropActor__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDropActor__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDropActor__PythonCallable;
	static GetDefaultObject(): OnDropActor__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDropActor__PythonCallable;
	static C(Other: UObject | any): OnDropActor__PythonCallable;
}

declare class SetNodes__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): SetNodes__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): SetNodes__PythonCallable;
	static GetDefaultObject(): SetNodes__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SetNodes__PythonCallable;
	static C(Other: UObject | any): SetNodes__PythonCallable;
}

declare class SimpleDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): SimpleDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): SimpleDelegate__PythonCallable;
	static GetDefaultObject(): SimpleDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SimpleDelegate__PythonCallable;
	static C(Other: UObject | any): SimpleDelegate__PythonCallable;
}

declare class SingleNode__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): SingleNode__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): SingleNode__PythonCallable;
	static GetDefaultObject(): SingleNode__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SingleNode__PythonCallable;
	static C(Other: UObject | any): SingleNode__PythonCallable;
}

declare class OnBuildMenu__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnBuildMenu__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnBuildMenu__PythonCallable;
	static GetDefaultObject(): OnBuildMenu__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnBuildMenu__PythonCallable;
	static C(Other: UObject | any): OnBuildMenu__PythonCallable;
}

declare class OnCanCreateConnection__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnCanCreateConnection__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnCanCreateConnection__PythonCallable;
	static GetDefaultObject(): OnCanCreateConnection__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnCanCreateConnection__PythonCallable;
	static C(Other: UObject | any): OnCanCreateConnection__PythonCallable;
}

declare class OnContextActions__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnContextActions__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnContextActions__PythonCallable;
	static GetDefaultObject(): OnContextActions__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnContextActions__PythonCallable;
	static C(Other: UObject | any): OnContextActions__PythonCallable;
}

declare class OnCreateAutomaticConversionNodeAndConnections__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnCreateAutomaticConversionNodeAndConnections__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnCreateAutomaticConversionNodeAndConnections__PythonCallable;
	static GetDefaultObject(): OnCreateAutomaticConversionNodeAndConnections__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnCreateAutomaticConversionNodeAndConnections__PythonCallable;
	static C(Other: UObject | any): OnCreateAutomaticConversionNodeAndConnections__PythonCallable;
}

declare class OnCreatePin__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnCreatePin__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnCreatePin__PythonCallable;
	static GetDefaultObject(): OnCreatePin__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnCreatePin__PythonCallable;
	static C(Other: UObject | any): OnCreatePin__PythonCallable;
}

declare class OnDetermineLinkGeometry__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDetermineLinkGeometry__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDetermineLinkGeometry__PythonCallable;
	static GetDefaultObject(): OnDetermineLinkGeometry__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDetermineLinkGeometry__PythonCallable;
	static C(Other: UObject | any): OnDetermineLinkGeometry__PythonCallable;
}

declare class OnDetermineWiringStyle__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDetermineWiringStyle__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDetermineWiringStyle__PythonCallable;
	static GetDefaultObject(): OnDetermineWiringStyle__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDetermineWiringStyle__PythonCallable;
	static C(Other: UObject | any): OnDetermineWiringStyle__PythonCallable;
}

declare class OnDrawPreviewConnector__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDrawPreviewConnector__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDrawPreviewConnector__PythonCallable;
	static GetDefaultObject(): OnDrawPreviewConnector__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDrawPreviewConnector__PythonCallable;
	static C(Other: UObject | any): OnDrawPreviewConnector__PythonCallable;
}

declare class OnDrawSplineWithArrow__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDrawSplineWithArrow__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDrawSplineWithArrow__PythonCallable;
	static GetDefaultObject(): OnDrawSplineWithArrow__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDrawSplineWithArrow__PythonCallable;
	static C(Other: UObject | any): OnDrawSplineWithArrow__PythonCallable;
}

declare class OnDrawSplineWithArrow_Geom__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDrawSplineWithArrow_Geom__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDrawSplineWithArrow_Geom__PythonCallable;
	static GetDefaultObject(): OnDrawSplineWithArrow_Geom__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDrawSplineWithArrow_Geom__PythonCallable;
	static C(Other: UObject | any): OnDrawSplineWithArrow_Geom__PythonCallable;
}

declare class OnEdNodeAction__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnEdNodeAction__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnEdNodeAction__PythonCallable;
	static GetDefaultObject(): OnEdNodeAction__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnEdNodeAction__PythonCallable;
	static C(Other: UObject | any): OnEdNodeAction__PythonCallable;
}

declare class OnGetBoolean__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetBoolean__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetBoolean__PythonCallable;
	static GetDefaultObject(): OnGetBoolean__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetBoolean__PythonCallable;
	static C(Other: UObject | any): OnGetBoolean__PythonCallable;
}

declare class OnGetBoolean_GraphPin__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetBoolean_GraphPin__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetBoolean_GraphPin__PythonCallable;
	static GetDefaultObject(): OnGetBoolean_GraphPin__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetBoolean_GraphPin__PythonCallable;
	static C(Other: UObject | any): OnGetBoolean_GraphPin__PythonCallable;
}

declare class OnGetBooleanMoveTo__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetBooleanMoveTo__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetBooleanMoveTo__PythonCallable;
	static GetDefaultObject(): OnGetBooleanMoveTo__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetBooleanMoveTo__PythonCallable;
	static C(Other: UObject | any): OnGetBooleanMoveTo__PythonCallable;
}

declare class OnGetBooleanWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetBooleanWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetBooleanWidget__PythonCallable;
	static GetDefaultObject(): OnGetBooleanWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetBooleanWidget__PythonCallable;
	static C(Other: UObject | any): OnGetBooleanWidget__PythonCallable;
}

declare class OnGetCustomPinBoxWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetCustomPinBoxWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetCustomPinBoxWidget__PythonCallable;
	static GetDefaultObject(): OnGetCustomPinBoxWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetCustomPinBoxWidget__PythonCallable;
	static C(Other: UObject | any): OnGetCustomPinBoxWidget__PythonCallable;
}

declare class OnGetPinColor__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetPinColor__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetPinColor__PythonCallable;
	static GetDefaultObject(): OnGetPinColor__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetPinColor__PythonCallable;
	static C(Other: UObject | any): OnGetPinColor__PythonCallable;
}

declare class OnGetPins__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetPins__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetPins__PythonCallable;
	static GetDefaultObject(): OnGetPins__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetPins__PythonCallable;
	static C(Other: UObject | any): OnGetPins__PythonCallable;
}

declare class OnGetSideMarginInPin__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetSideMarginInPin__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetSideMarginInPin__PythonCallable;
	static GetDefaultObject(): OnGetSideMarginInPin__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetSideMarginInPin__PythonCallable;
	static C(Other: UObject | any): OnGetSideMarginInPin__PythonCallable;
}

declare class OnGetSlateBrushName__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetSlateBrushName__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetSlateBrushName__PythonCallable;
	static GetDefaultObject(): OnGetSlateBrushName__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetSlateBrushName__PythonCallable;
	static C(Other: UObject | any): OnGetSlateBrushName__PythonCallable;
}

declare class OnGetString__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetString__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetString__PythonCallable;
	static GetDefaultObject(): OnGetString__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetString__PythonCallable;
	static C(Other: UObject | any): OnGetString__PythonCallable;
}

declare class OnMouseDragEvent__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnMouseDragEvent__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnMouseDragEvent__PythonCallable;
	static GetDefaultObject(): OnMouseDragEvent__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnMouseDragEvent__PythonCallable;
	static C(Other: UObject | any): OnMouseDragEvent__PythonCallable;
}

declare class OnMouseEvent__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnMouseEvent__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnMouseEvent__PythonCallable;
	static GetDefaultObject(): OnMouseEvent__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnMouseEvent__PythonCallable;
	static C(Other: UObject | any): OnMouseEvent__PythonCallable;
}

declare class OnMouseEventAdvanced__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnMouseEventAdvanced__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnMouseEventAdvanced__PythonCallable;
	static GetDefaultObject(): OnMouseEventAdvanced__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnMouseEventAdvanced__PythonCallable;
	static C(Other: UObject | any): OnMouseEventAdvanced__PythonCallable;
}

declare class OnPerformAction__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnPerformAction__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnPerformAction__PythonCallable;
	static GetDefaultObject(): OnPerformAction__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnPerformAction__PythonCallable;
	static C(Other: UObject | any): OnPerformAction__PythonCallable;
}

declare class OnPerformSecondPassLayout__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnPerformSecondPassLayout__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnPerformSecondPassLayout__PythonCallable;
	static GetDefaultObject(): OnPerformSecondPassLayout__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnPerformSecondPassLayout__PythonCallable;
	static C(Other: UObject | any): OnPerformSecondPassLayout__PythonCallable;
}

declare class OnPinConnectionListChanged__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnPinConnectionListChanged__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnPinConnectionListChanged__PythonCallable;
	static GetDefaultObject(): OnPinConnectionListChanged__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnPinConnectionListChanged__PythonCallable;
	static C(Other: UObject | any): OnPinConnectionListChanged__PythonCallable;
}

declare class OnShouldAlwaysPurgeOnModification__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnShouldAlwaysPurgeOnModification__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnShouldAlwaysPurgeOnModification__PythonCallable;
	static GetDefaultObject(): OnShouldAlwaysPurgeOnModification__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnShouldAlwaysPurgeOnModification__PythonCallable;
	static C(Other: UObject | any): OnShouldAlwaysPurgeOnModification__PythonCallable;
}

declare class OnTakeContentWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnTakeContentWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnTakeContentWidget__PythonCallable;
	static GetDefaultObject(): OnTakeContentWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnTakeContentWidget__PythonCallable;
	static C(Other: UObject | any): OnTakeContentWidget__PythonCallable;
}

declare class OnTakeWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnTakeWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnTakeWidget__PythonCallable;
	static GetDefaultObject(): OnTakeWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnTakeWidget__PythonCallable;
	static C(Other: UObject | any): OnTakeWidget__PythonCallable;
}

declare class OnTryCreateConnection__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnTryCreateConnection__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnTryCreateConnection__PythonCallable;
	static GetDefaultObject(): OnTryCreateConnection__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnTryCreateConnection__PythonCallable;
	static C(Other: UObject | any): OnTryCreateConnection__PythonCallable;
}

declare class OnVectorArith__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnVectorArith__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnVectorArith__PythonCallable;
	static GetDefaultObject(): OnVectorArith__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnVectorArith__PythonCallable;
	static C(Other: UObject | any): OnVectorArith__PythonCallable;
}

declare class DynamicSimpleDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): DynamicSimpleDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): DynamicSimpleDelegate__PythonCallable;
	static GetDefaultObject(): DynamicSimpleDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DynamicSimpleDelegate__PythonCallable;
	static C(Other: UObject | any): DynamicSimpleDelegate__PythonCallable;
}

declare class DynamicSimpleGetBoolDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): DynamicSimpleGetBoolDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): DynamicSimpleGetBoolDelegate__PythonCallable;
	static GetDefaultObject(): DynamicSimpleGetBoolDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DynamicSimpleGetBoolDelegate__PythonCallable;
	static C(Other: UObject | any): DynamicSimpleGetBoolDelegate__PythonCallable;
}

declare class OnGenerateCustomCellWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGenerateCustomCellWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGenerateCustomCellWidget__PythonCallable;
	static GetDefaultObject(): OnGenerateCustomCellWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGenerateCustomCellWidget__PythonCallable;
	static C(Other: UObject | any): OnGenerateCustomCellWidget__PythonCallable;
}

declare class OnUseCustomCellWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnUseCustomCellWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnUseCustomCellWidget__PythonCallable;
	static GetDefaultObject(): OnUseCustomCellWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnUseCustomCellWidget__PythonCallable;
	static C(Other: UObject | any): OnUseCustomCellWidget__PythonCallable;
}

declare class PropertyEditorPropertyChanged__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): PropertyEditorPropertyChanged__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): PropertyEditorPropertyChanged__PythonCallable;
	static GetDefaultObject(): PropertyEditorPropertyChanged__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyEditorPropertyChanged__PythonCallable;
	static C(Other: UObject | any): PropertyEditorPropertyChanged__PythonCallable;
}

declare class PropertyEditorReadOnly__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): PropertyEditorReadOnly__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): PropertyEditorReadOnly__PythonCallable;
	static GetDefaultObject(): PropertyEditorReadOnly__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyEditorReadOnly__PythonCallable;
	static C(Other: UObject | any): PropertyEditorReadOnly__PythonCallable;
}

declare class OnHook__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnHook__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnHook__PythonCallable;
	static GetDefaultObject(): OnHook__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnHook__PythonCallable;
	static C(Other: UObject | any): OnHook__PythonCallable;
}

declare class JavascriptCanExecuteAction__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptCanExecuteAction__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptCanExecuteAction__PythonCallable;
	static GetDefaultObject(): JavascriptCanExecuteAction__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptCanExecuteAction__PythonCallable;
	static C(Other: UObject | any): JavascriptCanExecuteAction__PythonCallable;
}

declare class JavascriptExecuteAction__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptExecuteAction__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptExecuteAction__PythonCallable;
	static GetDefaultObject(): JavascriptExecuteAction__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptExecuteAction__PythonCallable;
	static C(Other: UObject | any): JavascriptExecuteAction__PythonCallable;
}

declare class OnClick_Backward__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnClick_Backward__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnClick_Backward__PythonCallable;
	static GetDefaultObject(): OnClick_Backward__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnClick_Backward__PythonCallable;
	static C(Other: UObject | any): OnClick_Backward__PythonCallable;
}

declare class OnClick_Backward_End__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnClick_Backward_End__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnClick_Backward_End__PythonCallable;
	static GetDefaultObject(): OnClick_Backward_End__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnClick_Backward_End__PythonCallable;
	static C(Other: UObject | any): OnClick_Backward_End__PythonCallable;
}

declare class OnClick_Backward_Step__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnClick_Backward_Step__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnClick_Backward_Step__PythonCallable;
	static GetDefaultObject(): OnClick_Backward_Step__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnClick_Backward_Step__PythonCallable;
	static C(Other: UObject | any): OnClick_Backward_Step__PythonCallable;
}

declare class OnClick_Forward__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnClick_Forward__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnClick_Forward__PythonCallable;
	static GetDefaultObject(): OnClick_Forward__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnClick_Forward__PythonCallable;
	static C(Other: UObject | any): OnClick_Forward__PythonCallable;
}

declare class OnClick_Forward_End__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnClick_Forward_End__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnClick_Forward_End__PythonCallable;
	static GetDefaultObject(): OnClick_Forward_End__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnClick_Forward_End__PythonCallable;
	static C(Other: UObject | any): OnClick_Forward_End__PythonCallable;
}

declare class OnClick_Forward_Step__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnClick_Forward_Step__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnClick_Forward_Step__PythonCallable;
	static GetDefaultObject(): OnClick_Forward_Step__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnClick_Forward_Step__PythonCallable;
	static C(Other: UObject | any): OnClick_Forward_Step__PythonCallable;
}

declare class OnClick_ToggleLoop__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnClick_ToggleLoop__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnClick_ToggleLoop__PythonCallable;
	static GetDefaultObject(): OnClick_ToggleLoop__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnClick_ToggleLoop__PythonCallable;
	static C(Other: UObject | any): OnClick_ToggleLoop__PythonCallable;
}

declare class SetPlaybackPosition__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): SetPlaybackPosition__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): SetPlaybackPosition__PythonCallable;
	static GetDefaultObject(): SetPlaybackPosition__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SetPlaybackPosition__PythonCallable;
	static C(Other: UObject | any): SetPlaybackPosition__PythonCallable;
}

declare class CustomChildren__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CustomChildren__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CustomChildren__PythonCallable;
	static GetDefaultObject(): CustomChildren__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CustomChildren__PythonCallable;
	static C(Other: UObject | any): CustomChildren__PythonCallable;
}

declare class CustomHeader__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CustomHeader__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CustomHeader__PythonCallable;
	static GetDefaultObject(): CustomHeader__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CustomHeader__PythonCallable;
	static C(Other: UObject | any): CustomHeader__PythonCallable;
}

declare class OnDestroy__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDestroy__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDestroy__PythonCallable;
	static GetDefaultObject(): OnDestroy__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDestroy__PythonCallable;
	static C(Other: UObject | any): OnDestroy__PythonCallable;
}

declare class CheckDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CheckDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CheckDelegate__PythonCallable;
	static GetDefaultObject(): CheckDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CheckDelegate__PythonCallable;
	static C(Other: UObject | any): CheckDelegate__PythonCallable;
}

declare class OnNewLogMessage__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnNewLogMessage__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnNewLogMessage__PythonCallable;
	static GetDefaultObject(): OnNewLogMessage__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnNewLogMessage__PythonCallable;
	static C(Other: UObject | any): OnNewLogMessage__PythonCallable;
}

declare class ActorDuplicated__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): ActorDuplicated__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): ActorDuplicated__PythonCallable;
	static GetDefaultObject(): ActorDuplicated__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorDuplicated__PythonCallable;
	static C(Other: UObject | any): ActorDuplicated__PythonCallable;
}

declare class OnClick__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnClick__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnClick__PythonCallable;
	static GetDefaultObject(): OnClick__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnClick__PythonCallable;
	static C(Other: UObject | any): OnClick__PythonCallable;
}

declare class OnDraw__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDraw__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDraw__PythonCallable;
	static GetDefaultObject(): OnDraw__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDraw__PythonCallable;
	static C(Other: UObject | any): OnDraw__PythonCallable;
}

declare class OnDrawHUD__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDrawHUD__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDrawHUD__PythonCallable;
	static GetDefaultObject(): OnDrawHUD__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDrawHUD__PythonCallable;
	static C(Other: UObject | any): OnDrawHUD__PythonCallable;
}

declare class OnGetAction__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetAction__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetAction__PythonCallable;
	static GetDefaultObject(): OnGetAction__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetAction__PythonCallable;
	static C(Other: UObject | any): OnGetAction__PythonCallable;
}

declare class OnGetWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetWidget__PythonCallable;
	static GetDefaultObject(): OnGetWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetWidget__PythonCallable;
	static C(Other: UObject | any): OnGetWidget__PythonCallable;
}

declare class OnIsCompatibleWith__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnIsCompatibleWith__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnIsCompatibleWith__PythonCallable;
	static GetDefaultObject(): OnIsCompatibleWith__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnIsCompatibleWith__PythonCallable;
	static C(Other: UObject | any): OnIsCompatibleWith__PythonCallable;
}

declare class OnProcess__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnProcess__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnProcess__PythonCallable;
	static GetDefaultObject(): OnProcess__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnProcess__PythonCallable;
	static C(Other: UObject | any): OnProcess__PythonCallable;
}

declare class OnSelect__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnSelect__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnSelect__PythonCallable;
	static GetDefaultObject(): OnSelect__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnSelect__PythonCallable;
	static C(Other: UObject | any): OnSelect__PythonCallable;
}

declare class OnSelectionChanged__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnSelectionChanged__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnSelectionChanged__PythonCallable;
	static GetDefaultObject(): OnSelectionChanged__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnSelectionChanged__PythonCallable;
	static C(Other: UObject | any): OnSelectionChanged__PythonCallable;
}

declare class OnUsesToolkits__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnUsesToolkits__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnUsesToolkits__PythonCallable;
	static GetDefaultObject(): OnUsesToolkits__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnUsesToolkits__PythonCallable;
	static C(Other: UObject | any): OnUsesToolkits__PythonCallable;
}

declare class QueryVector__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): QueryVector__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): QueryVector__PythonCallable;
	static GetDefaultObject(): QueryVector__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QueryVector__PythonCallable;
	static C(Other: UObject | any): QueryVector__PythonCallable;
}

declare class Viewport0__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): Viewport0__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): Viewport0__PythonCallable;
	static GetDefaultObject(): Viewport0__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Viewport0__PythonCallable;
	static C(Other: UObject | any): Viewport0__PythonCallable;
}

declare class ViewportAxis__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): ViewportAxis__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): ViewportAxis__PythonCallable;
	static GetDefaultObject(): ViewportAxis__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ViewportAxis__PythonCallable;
	static C(Other: UObject | any): ViewportAxis__PythonCallable;
}

declare class ViewportDelta__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): ViewportDelta__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): ViewportDelta__PythonCallable;
	static GetDefaultObject(): ViewportDelta__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ViewportDelta__PythonCallable;
	static C(Other: UObject | any): ViewportDelta__PythonCallable;
}

declare class ViewportKey__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): ViewportKey__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): ViewportKey__PythonCallable;
	static GetDefaultObject(): ViewportKey__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ViewportKey__PythonCallable;
	static C(Other: UObject | any): ViewportKey__PythonCallable;
}

declare class ViewportXY__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): ViewportXY__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): ViewportXY__PythonCallable;
	static GetDefaultObject(): ViewportXY__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ViewportXY__PythonCallable;
	static C(Other: UObject | any): ViewportXY__PythonCallable;
}

declare class OnGetWidgetLocation__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetWidgetLocation__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetWidgetLocation__PythonCallable;
	static GetDefaultObject(): OnGetWidgetLocation__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetWidgetLocation__PythonCallable;
	static C(Other: UObject | any): OnGetWidgetLocation__PythonCallable;
}

declare class OnGetWidgetMode__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetWidgetMode__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetWidgetMode__PythonCallable;
	static GetDefaultObject(): OnGetWidgetMode__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetWidgetMode__PythonCallable;
	static C(Other: UObject | any): OnGetWidgetMode__PythonCallable;
}

declare class OnGetWidgetRotation__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetWidgetRotation__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetWidgetRotation__PythonCallable;
	static GetDefaultObject(): OnGetWidgetRotation__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetWidgetRotation__PythonCallable;
	static C(Other: UObject | any): OnGetWidgetRotation__PythonCallable;
}

declare class OnInputAxis__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnInputAxis__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnInputAxis__PythonCallable;
	static GetDefaultObject(): OnInputAxis__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnInputAxis__PythonCallable;
	static C(Other: UObject | any): OnInputAxis__PythonCallable;
}

declare class OnInputKey__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnInputKey__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnInputKey__PythonCallable;
	static GetDefaultObject(): OnInputKey__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnInputKey__PythonCallable;
	static C(Other: UObject | any): OnInputKey__PythonCallable;
}

declare class OnInputWidgetDelta__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnInputWidgetDelta__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnInputWidgetDelta__PythonCallable;
	static GetDefaultObject(): OnInputWidgetDelta__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnInputWidgetDelta__PythonCallable;
	static C(Other: UObject | any): OnInputWidgetDelta__PythonCallable;
}

declare class OnMouseEnter__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnMouseEnter__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnMouseEnter__PythonCallable;
	static GetDefaultObject(): OnMouseEnter__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnMouseEnter__PythonCallable;
	static C(Other: UObject | any): OnMouseEnter__PythonCallable;
}

declare class OnMouseLeave__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnMouseLeave__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnMouseLeave__PythonCallable;
	static GetDefaultObject(): OnMouseLeave__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnMouseLeave__PythonCallable;
	static C(Other: UObject | any): OnMouseLeave__PythonCallable;
}

declare class OnMouseMove__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnMouseMove__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnMouseMove__PythonCallable;
	static GetDefaultObject(): OnMouseMove__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnMouseMove__PythonCallable;
	static C(Other: UObject | any): OnMouseMove__PythonCallable;
}

declare class OnViewportClick__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnViewportClick__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnViewportClick__PythonCallable;
	static GetDefaultObject(): OnViewportClick__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnViewportClick__PythonCallable;
	static C(Other: UObject | any): OnViewportClick__PythonCallable;
}

declare class OnViewportDraw__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnViewportDraw__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnViewportDraw__PythonCallable;
	static GetDefaultObject(): OnViewportDraw__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnViewportDraw__PythonCallable;
	static C(Other: UObject | any): OnViewportDraw__PythonCallable;
}

declare class OnViewportDrawCanvas__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnViewportDrawCanvas__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnViewportDrawCanvas__PythonCallable;
	static GetDefaultObject(): OnViewportDrawCanvas__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnViewportDrawCanvas__PythonCallable;
	static C(Other: UObject | any): OnViewportDrawCanvas__PythonCallable;
}

declare class OnViewportTrackingStarted__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnViewportTrackingStarted__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnViewportTrackingStarted__PythonCallable;
	static GetDefaultObject(): OnViewportTrackingStarted__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnViewportTrackingStarted__PythonCallable;
	static C(Other: UObject | any): OnViewportTrackingStarted__PythonCallable;
}

declare class OnViewportTrackingStopped__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnViewportTrackingStopped__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnViewportTrackingStopped__PythonCallable;
	static GetDefaultObject(): OnViewportTrackingStopped__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnViewportTrackingStopped__PythonCallable;
	static C(Other: UObject | any): OnViewportTrackingStopped__PythonCallable;
}

declare class JavascriptEditorTickSignature__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorTickSignature__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTickSignature__PythonCallable;
	static GetDefaultObject(): JavascriptEditorTickSignature__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTickSignature__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorTickSignature__PythonCallable;
}

declare class CloseTab__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CloseTab__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CloseTab__PythonCallable;
	static GetDefaultObject(): CloseTab__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CloseTab__PythonCallable;
	static C(Other: UObject | any): CloseTab__PythonCallable;
}

declare class OnTabActivated__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnTabActivated__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnTabActivated__PythonCallable;
	static GetDefaultObject(): OnTabActivated__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnTabActivated__PythonCallable;
	static C(Other: UObject | any): OnTabActivated__PythonCallable;
}

declare class SpawnTab__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): SpawnTab__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): SpawnTab__PythonCallable;
	static GetDefaultObject(): SpawnTab__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpawnTab__PythonCallable;
	static C(Other: UObject | any): SpawnTab__PythonCallable;
}

declare class JavascriptGetExtender__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGetExtender__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGetExtender__PythonCallable;
	static GetDefaultObject(): JavascriptGetExtender__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGetExtender__PythonCallable;
	static C(Other: UObject | any): JavascriptGetExtender__PythonCallable;
}

declare class OnColorChangedEvent__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnColorChangedEvent__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnColorChangedEvent__PythonCallable;
	static GetDefaultObject(): OnColorChangedEvent__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnColorChangedEvent__PythonCallable;
	static C(Other: UObject | any): OnColorChangedEvent__PythonCallable;
}

declare class OnSetDefaultValue__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnSetDefaultValue__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnSetDefaultValue__PythonCallable;
	static GetDefaultObject(): OnSetDefaultValue__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnSetDefaultValue__PythonCallable;
	static C(Other: UObject | any): OnSetDefaultValue__PythonCallable;
}

declare class LevelInstanceEditorMode extends EdMode { 
	static Load(ResourceName: string): LevelInstanceEditorMode;
	static Find(Outer: UObject, ResourceName: string): LevelInstanceEditorMode;
	static GetDefaultObject(): LevelInstanceEditorMode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelInstanceEditorMode;
	static C(Other: UObject | any): LevelInstanceEditorMode;
}

declare class LevelInstanceEditorSettings extends UObject { 
	TemplateMapInfos: TemplateMapInfo[];
	static Load(ResourceName: string): LevelInstanceEditorSettings;
	static Find(Outer: UObject, ResourceName: string): LevelInstanceEditorSettings;
	static GetDefaultObject(): LevelInstanceEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelInstanceEditorSettings;
	static C(Other: UObject | any): LevelInstanceEditorSettings;
}

declare type ELiveCodingStartupMode = 'Automatic' | 'AutomaticButHidden' | 'Manual' | 'ELiveCodingStartupMode_MAX';
declare var ELiveCodingStartupMode : { Automatic:'Automatic',AutomaticButHidden:'AutomaticButHidden',Manual:'Manual',ELiveCodingStartupMode_MAX:'ELiveCodingStartupMode_MAX', };
declare class LiveCodingSettings extends UObject { 
	bEnabled: boolean;
	Startup: ELiveCodingStartupMode;
	bEnableReinstancing: boolean;
	bAutomaticallyCompileNewClasses: boolean;
	bPreloadEngineModules: boolean;
	bPreloadEnginePluginModules: boolean;
	bPreloadProjectModules: boolean;
	bPreloadProjectPluginModules: boolean;
	PreloadNamedModules: string[];
	static Load(ResourceName: string): LiveCodingSettings;
	static Find(Outer: UObject, ResourceName: string): LiveCodingSettings;
	static GetDefaultObject(): LiveCodingSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LiveCodingSettings;
	static C(Other: UObject | any): LiveCodingSettings;
}

declare class NaniteAuditErrorArguments extends EditorConfigBase { 
	ProhibitUnsupportedBlendMode: boolean;
	ProhibitVertexInterpolator: boolean;
	ProhibitPixelDepthOffset: boolean;
	ProhibitWorldPositionOffset: boolean;
	static Load(ResourceName: string): NaniteAuditErrorArguments;
	static Find(Outer: UObject, ResourceName: string): NaniteAuditErrorArguments;
	static GetDefaultObject(): NaniteAuditErrorArguments;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NaniteAuditErrorArguments;
	static C(Other: UObject | any): NaniteAuditErrorArguments;
}

declare class NaniteAuditOptimizeArguments extends EditorConfigBase { 
	TriangleThreshold: any;
	DisallowUnsupportedBlendMode: boolean;
	DisallowVertexInterpolator: boolean;
	DisallowPixelDepthOffset: boolean;
	DisallowWorldPositionOffset: boolean;
	static Load(ResourceName: string): NaniteAuditOptimizeArguments;
	static Find(Outer: UObject, ResourceName: string): NaniteAuditOptimizeArguments;
	static GetDefaultObject(): NaniteAuditOptimizeArguments;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NaniteAuditOptimizeArguments;
	static C(Other: UObject | any): NaniteAuditOptimizeArguments;
}

declare class StructViewerProjectSettings extends UObject { 
	InternalOnlyPaths: DirectoryPath[];
	InternalOnlyStructs: ScriptStruct[];
	static Load(ResourceName: string): StructViewerProjectSettings;
	static Find(Outer: UObject, ResourceName: string): StructViewerProjectSettings;
	static GetDefaultObject(): StructViewerProjectSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StructViewerProjectSettings;
	static C(Other: UObject | any): StructViewerProjectSettings;
}

declare class AnimationBlueprintEditorSettings extends UObject { 
	bPoseWatchSelectedNodes: boolean;
	bShowGraphCornerText: boolean;
	static Load(ResourceName: string): AnimationBlueprintEditorSettings;
	static Find(Outer: UObject, ResourceName: string): AnimationBlueprintEditorSettings;
	static GetDefaultObject(): AnimationBlueprintEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimationBlueprintEditorSettings;
	static C(Other: UObject | any): AnimationBlueprintEditorSettings;
}

declare class LocalizationDashboardSettings extends UObject { 
	static Load(ResourceName: string): LocalizationDashboardSettings;
	static Find(Outer: UObject, ResourceName: string): LocalizationDashboardSettings;
	static GetDefaultObject(): LocalizationDashboardSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocalizationDashboardSettings;
	static C(Other: UObject | any): LocalizationDashboardSettings;
}

declare class MeshApproximationSettingsObject extends UObject { 
	Settings: MeshApproximationSettings;
	static Load(ResourceName: string): MeshApproximationSettingsObject;
	static Find(Outer: UObject, ResourceName: string): MeshApproximationSettingsObject;
	static GetDefaultObject(): MeshApproximationSettingsObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshApproximationSettingsObject;
	static C(Other: UObject | any): MeshApproximationSettingsObject;
}

declare class MeshInstancingSettings { 
	ActorClassToUse: UnrealEngineClass;
	InstanceReplacementThreshold: number;
	bSkipMeshesWithVertexColors: boolean;
	bUseHLODVolumes: boolean;
	ISMComponentToUse: UnrealEngineClass;
	clone() : MeshInstancingSettings;
	static C(Other: UObject | any): MeshInstancingSettings;
}

declare class MeshInstancingSettingsObject extends UObject { 
	Settings: MeshInstancingSettings;
	static Load(ResourceName: string): MeshInstancingSettingsObject;
	static Find(Outer: UObject, ResourceName: string): MeshInstancingSettingsObject;
	static GetDefaultObject(): MeshInstancingSettingsObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshInstancingSettingsObject;
	static C(Other: UObject | any): MeshInstancingSettingsObject;
}

declare class MeshMergingSettingsObject extends UObject { 
	Settings: MeshMergingSettings;
	static Load(ResourceName: string): MeshMergingSettingsObject;
	static Find(Outer: UObject, ResourceName: string): MeshMergingSettingsObject;
	static GetDefaultObject(): MeshMergingSettingsObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshMergingSettingsObject;
	static C(Other: UObject | any): MeshMergingSettingsObject;
}

declare class MeshProxySettingsObject extends UObject { 
	Settings: MeshProxySettings;
	static Load(ResourceName: string): MeshProxySettingsObject;
	static Find(Outer: UObject, ResourceName: string): MeshProxySettingsObject;
	static GetDefaultObject(): MeshProxySettingsObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshProxySettingsObject;
	static C(Other: UObject | any): MeshProxySettingsObject;
}

declare class EditorKeyboardShortcutSettings extends DeveloperSettings { 
	static Load(ResourceName: string): EditorKeyboardShortcutSettings;
	static Find(Outer: UObject, ResourceName: string): EditorKeyboardShortcutSettings;
	static GetDefaultObject(): EditorKeyboardShortcutSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorKeyboardShortcutSettings;
	static C(Other: UObject | any): EditorKeyboardShortcutSettings;
}

declare class HLODLayerFactory extends Factory { 
	static Load(ResourceName: string): HLODLayerFactory;
	static Find(Outer: UObject, ResourceName: string): HLODLayerFactory;
	static GetDefaultObject(): HLODLayerFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HLODLayerFactory;
	static C(Other: UObject | any): HLODLayerFactory;
}

declare class WorldPartitionConvertOptions extends UObject { 
	CommandletClass: UnrealEngineClass;
	bInPlace: boolean;
	bDeleteSourceLevels: boolean;
	bGenerateIni: boolean;
	bReportOnly: boolean;
	bVerbose: boolean;
	bSkipStableGUIDValidation: boolean;
	bOnlyMergeSubLevels: boolean;
	bSaveFoliageTypeToContentFolder: boolean;
	static Load(ResourceName: string): WorldPartitionConvertOptions;
	static Find(Outer: UObject, ResourceName: string): WorldPartitionConvertOptions;
	static GetDefaultObject(): WorldPartitionConvertOptions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WorldPartitionConvertOptions;
	static C(Other: UObject | any): WorldPartitionConvertOptions;
}

declare class WorldPartitionEditorSettings extends DeveloperSettings { 
	CommandletClass: UnrealEngineClass;
	InstancedFoliageGridSize: number;
	static Load(ResourceName: string): WorldPartitionEditorSettings;
	static Find(Outer: UObject, ResourceName: string): WorldPartitionEditorSettings;
	static GetDefaultObject(): WorldPartitionEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WorldPartitionEditorSettings;
	static C(Other: UObject | any): WorldPartitionEditorSettings;
}

declare type ESVGTheme = 'Dark' | 'Light' | 'ESVGTheme_MAX';
declare var ESVGTheme : { Dark:'Dark',Light:'Light',ESVGTheme_MAX:'ESVGTheme_MAX', };
declare class CSVtoSVGArugments extends EditorConfigBase { 
	CSV: FilePath;
	OutputDirectory: DirectoryPath;
	OutputFilename: string;
	skipRows: number;
	MinX: number;
	MaxX: number;
	MinY: number;
	MaxY: number;
	smooth: boolean;
	smoothKernelSize: number;
	smoothKernelPercent: number;
	Width: number;
	Height: number;
	Title: string;
	noMetadata: boolean;
	graphOnly: boolean;
	budget: number;
	Thickness: number;
	Theme: ESVGTheme;
	Threshold: number;
	stacked: boolean;
	stacktotalstack: string;
	Interactive: boolean;
	showaverages: boolean;
	colourOffset: number;
	averageThreshold: number;
	static Load(ResourceName: string): CSVtoSVGArugments;
	static Find(Outer: UObject, ResourceName: string): CSVtoSVGArugments;
	static GetDefaultObject(): CSVtoSVGArugments;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CSVtoSVGArugments;
	static C(Other: UObject | any): CSVtoSVGArugments;
}

declare type EAndroidInstallLocation = 'InternalOnly' | 'PreferExternal' | 'Auto' | 'EAndroidInstallLocation_MAX';
declare var EAndroidInstallLocation : { InternalOnly:'InternalOnly',PreferExternal:'PreferExternal',Auto:'Auto',EAndroidInstallLocation_MAX:'EAndroidInstallLocation_MAX', };
declare type EAndroidScreenOrientation = 'Portrait' | 'ReversePortrait' | 'SensorPortrait' | 'Landscape' | 'ReverseLandscape' | 'SensorLandscape' | 'Sensor' | 'FullSensor' | 'EAndroidScreenOrientation_MAX';
declare var EAndroidScreenOrientation : { Portrait:'Portrait',ReversePortrait:'ReversePortrait',SensorPortrait:'SensorPortrait',Landscape:'Landscape',ReverseLandscape:'ReverseLandscape',SensorLandscape:'SensorLandscape',Sensor:'Sensor',FullSensor:'FullSensor',EAndroidScreenOrientation_MAX:'EAndroidScreenOrientation_MAX', };
declare type EAndroidDepthBufferPreference = 'Default' | 'Bits16' | 'Bits24' | 'Bits32' | 'EAndroidDepthBufferPreference_MAX';
declare var EAndroidDepthBufferPreference : { Default:'Default',Bits16:'Bits16',Bits24:'Bits24',Bits32:'Bits32',EAndroidDepthBufferPreference_MAX:'EAndroidDepthBufferPreference_MAX', };
declare type EOculusMobileDevice = 'Quest' | 'Quest2' | 'EOculusMobileDevice_MAX';
declare var EOculusMobileDevice : { Quest:'Quest',Quest2:'Quest2',EOculusMobileDevice_MAX:'EOculusMobileDevice_MAX', };
declare class GooglePlayAchievementMapping { 
	Name: string;
	AchievementID: string;
	clone() : GooglePlayAchievementMapping;
	static C(Other: UObject | any): GooglePlayAchievementMapping;
}

declare class GooglePlayLeaderboardMapping { 
	Name: string;
	LeaderboardID: string;
	clone() : GooglePlayLeaderboardMapping;
	static C(Other: UObject | any): GooglePlayLeaderboardMapping;
}

declare type EAndroidAudio = 'Default' | 'OGG' | 'ADPCM' | 'EAndroidAudio_MAX';
declare var EAndroidAudio : { Default:'Default',OGG:'OGG',ADPCM:'ADPCM',EAndroidAudio_MAX:'EAndroidAudio_MAX', };
declare type EAndroidGraphicsDebugger = 'None' | 'Mali' | 'Adreno' | 'EAndroidGraphicsDebugger_MAX';
declare var EAndroidGraphicsDebugger : { None:'None',Mali:'Mali',Adreno:'Adreno',EAndroidGraphicsDebugger_MAX:'EAndroidGraphicsDebugger_MAX', };
declare class AndroidRuntimeSettings extends UObject { 
	PackageName: string;
	StoreVersion: number;
	StoreVersionOffsetArmV7: number;
	StoreVersionOffsetArm64: number;
	StoreVersionOffsetX8664: number;
	ApplicationDisplayName: string;
	VersionDisplayName: string;
	MinSDKVersion: number;
	TargetSDKVersion: number;
	InstallLocation: EAndroidInstallLocation;
	bEnableGradle: boolean;
	bEnableLint: boolean;
	bPackageDataInsideApk: boolean;
	bCreateAllPlatformsInstall: boolean;
	bDisableVerifyOBBOnStartUp: boolean;
	bForceSmallOBBFiles: boolean;
	bAllowLargeOBBFiles: boolean;
	bAllowPatchOBBFile: boolean;
	bAllowOverflowOBBFiles: boolean;
	bUseExternalFilesDir: boolean;
	bPublicLogFiles: boolean;
	Orientation: EAndroidScreenOrientation;
	MaxAspectRatio: number;
	bUseDisplayCutout: boolean;
	bRestoreNotificationsOnReboot: boolean;
	bFullScreen: boolean;
	bEnableNewKeyboard: boolean;
	DepthBufferPreference: EAndroidDepthBufferPreference;
	bValidateTextureFormats: boolean;
	bForceCompressNativeLibs: boolean;
	bEnableAdvancedBinaryCompression: boolean;
	bEnableBundle: boolean;
	bEnableUniversalAPK: boolean;
	bBundleABISplit: boolean;
	bBundleLanguageSplit: boolean;
	bBundleDensitySplit: boolean;
	ExtraManifestNodeTags: string[];
	ExtraApplicationNodeTags: string[];
	ExtraApplicationSettings: string;
	ExtraActivityNodeTags: string[];
	ExtraActivitySettings: string;
	ExtraPermissions: string[];
	bAndroidVoiceEnabled: boolean;
	PackageForOculusMobile: EOculusMobileDevice[];
	bRemoveOSIG: boolean;
	KeyStore: string;
	KeyAlias: string;
	KeyStorePassword: string;
	KeyPassword: string;
	bBuildForArm64: boolean;
	bBuildForX8664: boolean;
	bBuildForES31: boolean;
	bSupportsVulkan: boolean;
	bSupportsVulkanSM5: boolean;
	DebugVulkanLayerDirectory: DirectoryPath;
	DebugVulkanDeviceLayers: string[];
	DebugVulkanInstanceLayers: string[];
	bAndroidOpenGLSupportsBackbufferSampling: boolean;
	bDetectVulkanByDefault: boolean;
	bBuildWithHiddenSymbolVisibility: boolean;
	bSaveSymbols: boolean;
	bForceLDLinker: boolean;
	bEnableGooglePlaySupport: boolean;
	bUseGetAccounts: boolean;
	GamesAppID: string;
	AchievementMap: GooglePlayAchievementMapping[];
	LeaderboardMap: GooglePlayLeaderboardMapping[];
	bEnableSnapshots: boolean;
	bSupportAdMob: boolean;
	AdMobAdUnitID: string;
	AdMobAdUnitIDs: string[];
	GooglePlayLicenseKey: string;
	GCMClientSenderID: string;
	bShowLaunchImage: boolean;
	bAllowIMU: boolean;
	bAllowControllers: boolean;
	bBlockAndroidKeysOnControllers: boolean;
	bControllersBlockDeviceFeedback: boolean;
	AndroidAudio: EAndroidAudio;
	AudioSampleRate: number;
	AudioCallbackBufferFrameSize: number;
	AudioNumBuffersToEnqueue: number;
	AudioMaxChannels: number;
	AudioNumSourceWorkers: number;
	SpatializationPlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	CompressionOverrides: PlatformRuntimeAudioCompressionOverrides;
	CacheSizeKB: number;
	MaxChunkSizeOverrideKB: number;
	bResampleForDevice: boolean;
	SoundCueCookQualityIndex: number;
	MaxSampleRate: number;
	HighSampleRate: number;
	MedSampleRate: number;
	LowSampleRate: number;
	MinSampleRate: number;
	CompressionQualityModifier: number;
	AutoStreamingThreshold: number;
	AndroidGraphicsDebugger: EAndroidGraphicsDebugger;
	MaliGraphicsDebuggerPath: DirectoryPath;
	bEnableMaliPerfCounters: boolean;
	bMultiTargetFormat_ETC2: boolean;
	bMultiTargetFormat_DXT: boolean;
	bMultiTargetFormat_ASTC: boolean;
	TextureFormatPriority_ETC2: number;
	TextureFormatPriority_DXT: number;
	TextureFormatPriority_ASTC: number;
	SDKAPILevelOverride: string;
	NDKAPILevelOverride: string;
	BuildToolsOverride: string;
	bStreamLandscapeMeshLODs: boolean;
	bEnableDomStorage: boolean;
	static Load(ResourceName: string): AndroidRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): AndroidRuntimeSettings;
	static GetDefaultObject(): AndroidRuntimeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidRuntimeSettings;
	static C(Other: UObject | any): AndroidRuntimeSettings;
}

declare type EIOSCloudKitSyncStrategy = 'None' | 'OnlyAtGameStart' | 'Always' | 'EIOSCloudKitSyncStrategy_MAX';
declare var EIOSCloudKitSyncStrategy : { None:'None',OnlyAtGameStart:'OnlyAtGameStart',Always:'Always',EIOSCloudKitSyncStrategy_MAX:'EIOSCloudKitSyncStrategy_MAX', };
declare class IOSBuildResourceDirectory { 
	Path: string;
	clone() : IOSBuildResourceDirectory;
	static C(Other: UObject | any): IOSBuildResourceDirectory;
}

declare class IOSBuildResourceFilePath { 
	FilePath: string;
	clone() : IOSBuildResourceFilePath;
	static C(Other: UObject | any): IOSBuildResourceFilePath;
}

declare type EIOSLandscapeOrientation = 'LandscapeLeft' | 'LandscapeRight' | 'EIOSLandscapeOrientation_MAX';
declare var EIOSLandscapeOrientation : { LandscapeLeft:'LandscapeLeft',LandscapeRight:'LandscapeRight',EIOSLandscapeOrientation_MAX:'EIOSLandscapeOrientation_MAX', };
declare type EPowerUsageFrameRateLock = 'PUFRL_None' | 'PUFRL_20' | 'PUFRL_30' | 'PUFRL_60' | 'PUFRL_MAX';
declare var EPowerUsageFrameRateLock : { PUFRL_None:'PUFRL_None',PUFRL_20:'PUFRL_20',PUFRL_30:'PUFRL_30',PUFRL_60:'PUFRL_60',PUFRL_MAX:'PUFRL_MAX', };
declare type EIOSVersion = 'IOS_14' | 'IOS_15' | 'IOS_MAX';
declare var EIOSVersion : { IOS_14:'IOS_14',IOS_15:'IOS_15',IOS_MAX:'IOS_MAX', };
declare class IOSRuntimeSettings extends UObject { 
	bEnableGameCenterSupport: boolean;
	bEnableCloudKitSupport: boolean;
	IOSCloudKitSyncStrategy: EIOSCloudKitSyncStrategy;
	bEnableRemoteNotificationsSupport: boolean;
	bEnableBackgroundFetch: boolean;
	bSupportsMetal: boolean;
	bSupportsMetalMRT: boolean;
	bBuildAsFramework: boolean;
	WindowsMetalToolchainOverride: IOSBuildResourceDirectory;
	bGeneratedSYMFile: boolean;
	bGeneratedSYMBundle: boolean;
	bGenerateCrashReportSymbols: boolean;
	bGenerateXCArchive: boolean;
	bShipForBitcode: boolean;
	bEnableAdvertisingIdentifier: boolean;
	AdditionalLinkerFlags: string;
	AdditionalShippingLinkerFlags: string;
	RemoteServerName: string;
	bUseRSync: boolean;
	RSyncUsername: string;
	RemoteServerOverrideBuildPath: string;
	CwRsyncInstallPath: IOSBuildResourceDirectory;
	SSHPrivateKeyLocation: string;
	SSHPrivateKeyOverridePath: IOSBuildResourceFilePath;
	bRunAsCurrentUser: boolean;
	bGameSupportsMultipleActiveControllers: boolean;
	bAllowRemoteRotation: boolean;
	bUseRemoteAsVirtualJoystick: boolean;
	bUseRemoteAbsoluteDpadValues: boolean;
	bAllowControllers: boolean;
	bControllersBlockDeviceFeedback: boolean;
	bDisableMotionData: boolean;
	bSupportsPortraitOrientation: boolean;
	bSupportsUpsideDownOrientation: boolean;
	bSupportsLandscapeLeftOrientation: boolean;
	bSupportsLandscapeRightOrientation: boolean;
	bSupportsITunesFileSharing: boolean;
	bSupportsFilesApp: boolean;
	PreferredLandscapeOrientation: EIOSLandscapeOrientation;
	BundleDisplayName: string;
	BundleName: string;
	BundleIdentifier: string;
	VersionInfo: string;
	FrameRateLock: EPowerUsageFrameRateLock;
	bEnableDynamicMaxFPS: boolean;
	MinimumiOSVersion: EIOSVersion;
	bSupportsIPad: boolean;
	bSupportsIPhone: boolean;
	AdditionalPlistData: string;
	bCustomLaunchscreenStoryboard: boolean;
	bEnableFacebookSupport: boolean;
	FacebookAppID: string;
	MobileProvision: string;
	SigningCertificate: string;
	bAutomaticSigning: boolean;
	IOSTeamID: string;
	DevCenterUsername: string;
	DevCenterPassword: string;
	bDisableHTTPS: boolean;
	MetalLanguageVersion: number;
	UseFastIntrinsics: boolean;
	ForceFloats: boolean;
	EnableMathOptimisations: boolean;
	IndirectArgumentTier: number;
	bSupportAppleA8: boolean;
	bUseIntegratedKeyboard: boolean;
	AudioSampleRate: number;
	AudioCallbackBufferFrameSize: number;
	AudioNumBuffersToEnqueue: number;
	AudioMaxChannels: number;
	AudioNumSourceWorkers: number;
	SpatializationPlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	CompressionOverrides: PlatformRuntimeAudioCompressionOverrides;
	CacheSizeKB: number;
	MaxChunkSizeOverrideKB: number;
	bResampleForDevice: boolean;
	SoundCueCookQualityIndex: number;
	MaxSampleRate: number;
	HighSampleRate: number;
	MedSampleRate: number;
	LowSampleRate: number;
	MinSampleRate: number;
	CompressionQualityModifier: number;
	AutoStreamingThreshold: number;
	bStreamLandscapeMeshLODs: boolean;
	static Load(ResourceName: string): IOSRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): IOSRuntimeSettings;
	static GetDefaultObject(): IOSRuntimeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IOSRuntimeSettings;
	static C(Other: UObject | any): IOSRuntimeSettings;
}

declare class HoloLensCorePackageStringResources { 
	PackageDisplayName: string;
	PublisherDisplayName: string;
	PackageDescription: string;
	ApplicationDisplayName: string;
	ApplicationDescription: string;
	clone() : HoloLensCorePackageStringResources;
	static C(Other: UObject | any): HoloLensCorePackageStringResources;
}

declare class HoloLensCorePackageImageResources { 
	clone() : HoloLensCorePackageImageResources;
	static C(Other: UObject | any): HoloLensCorePackageImageResources;
}

declare class HoloLensCorePackageLocalizedResources { 
	CultureId: string;
	Strings: HoloLensCorePackageStringResources;
	Images: HoloLensCorePackageImageResources;
	clone() : HoloLensCorePackageLocalizedResources;
	static C(Other: UObject | any): HoloLensCorePackageLocalizedResources;
}

declare class HoloLensTargetSettings extends UObject { 
	bBuildForEmulation: boolean;
	bBuildForDevice: boolean;
	bUseNameForLogo: boolean;
	bBuildForRetailWindowsStore: boolean;
	bAutoIncrementVersion: boolean;
	bShouldCreateAppInstaller: boolean;
	AppInstallerInstallationURL: string;
	HoursBetweenUpdateChecks: number;
	bEnablePIXProfiling: boolean;
	TileBackgroundColor: Color;
	SplashScreenBackgroundColor: Color;
	PerCultureResources: HoloLensCorePackageLocalizedResources[];
	TargetDeviceFamily: string;
	MinimumPlatformVersion: string;
	MaximumPlatformVersionTested: string;
	MaxTrianglesPerCubicMeter: number;
	SpatialMeshingVolumeSize: number;
	CompilerVersion: ECompilerVersion;
	Windows10SDKVersion: string;
	CapabilityList: string[];
	DeviceCapabilityList: string[];
	UapCapabilityList: string[];
	Uap2CapabilityList: string[];
	bSetDefaultCapabilities: boolean;
	SpatializationPlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	SoundCueCookQualityIndex: number;
	static Load(ResourceName: string): HoloLensTargetSettings;
	static Find(Outer: UObject, ResourceName: string): HoloLensTargetSettings;
	static GetDefaultObject(): HoloLensTargetSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HoloLensTargetSettings;
	static C(Other: UObject | any): HoloLensTargetSettings;
}

declare class AndroidSDKSettings extends UObject { 
	SDKPath: DirectoryPath;
	NDKPath: DirectoryPath;
	JavaPath: DirectoryPath;
	SDKAPILevel: string;
	NDKAPILevel: string;
	static Load(ResourceName: string): AndroidSDKSettings;
	static Find(Outer: UObject, ResourceName: string): AndroidSDKSettings;
	static GetDefaultObject(): AndroidSDKSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidSDKSettings;
	static C(Other: UObject | any): AndroidSDKSettings;
}

declare type ETutorialContent = 'None' | 'Text' | 'UDNExcerpt' | 'RichText' | 'ETutorialContent_MAX';
declare var ETutorialContent : { None:'None',Text:'Text',UDNExcerpt:'UDNExcerpt',RichText:'RichText',ETutorialContent_MAX:'ETutorialContent_MAX', };
declare class TutorialContent { 
	Type: ETutorialContent;
	Content: string;
	ExcerptName: string;
	text: string;
	clone() : TutorialContent;
	static C(Other: UObject | any): TutorialContent;
}

declare type ETutorialAnchorIdentifier = 'None' | 'NamedWidget' | 'Asset' | 'ETutorialAnchorIdentifier_MAX';
declare var ETutorialAnchorIdentifier : { None:'None',NamedWidget:'NamedWidget',Asset:'Asset',ETutorialAnchorIdentifier_MAX:'ETutorialAnchorIdentifier_MAX', };
declare class TutorialContentAnchor { 
	Type: ETutorialAnchorIdentifier;
	WrapperIdentifier: string;
	Asset: SoftObjectPath;
	bDrawHighlight: boolean;
	TabToFocusOrOpen: string;
	FriendlyName: string;
	GuidString: string;
	OuterName: string;
	clone() : TutorialContentAnchor;
	static C(Other: UObject | any): TutorialContentAnchor;
}

declare class TutorialWidgetContent { 
	Content: TutorialContent;
	WidgetAnchor: TutorialContentAnchor;
	HorizontalAlignment: EHorizontalAlignment;
	VerticalAlignment: EVerticalAlignment;
	Offset: Vector2D;
	ContentWidth: number;
	bAutoFocus: boolean;
	clone() : TutorialWidgetContent;
	static C(Other: UObject | any): TutorialWidgetContent;
}

declare class TutorialStage { 
	Name: string;
	Content: TutorialContent;
	WidgetContent: TutorialWidgetContent[];
	NextButtonText: string;
	BackButtonText: string;
	PlatformsToTest: string[];
	bInvertPlatformTest: boolean;
	clone() : TutorialStage;
	static C(Other: UObject | any): TutorialStage;
}

declare class EditorTutorial extends UObject { 
	Title: string;
	SortOrder: number;
	Icon: string;
	Texture: Texture2D;
	Category: string;
	SummaryContent: TutorialContent;
	Stages: TutorialStage[];
	PreviousTutorial: SoftClassPath;
	NextTutorial: SoftClassPath;
	bIsStandalone: boolean;
	AssetToUse: SoftObjectPath;
	ImportPath: string;
	bHideInBrowser: boolean;
	SearchTags: string;
	static Load(ResourceName: string): EditorTutorial;
	static Find(Outer: UObject, ResourceName: string): EditorTutorial;
	static GetDefaultObject(): EditorTutorial;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorial;
	static SetEngineFolderVisibilty(bNewVisibility: boolean): void;
	static OpenAsset(Asset: UObject): void;
	OnTutorialStageStarted(StageName: string): void;
	OnTutorialStageEnded(StageName: string): void;
	OnTutorialLaunched(): void;
	OnTutorialClosed(): void;
	static GoToPreviousTutorialStage(): void;
	static GoToNextTutorialStage(): void;
	static GetEngineFolderVisibilty(): boolean;
	GetActorReference(PathToActor: string): Actor;
	static BeginTutorial(TutorialToStart: EditorTutorial,bRestart: boolean): void;
	static C(Other: UObject | any): EditorTutorial;
}

declare class EditorTutorialFactory extends Factory { 
	static Load(ResourceName: string): EditorTutorialFactory;
	static Find(Outer: UObject, ResourceName: string): EditorTutorialFactory;
	static GetDefaultObject(): EditorTutorialFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialFactory;
	static C(Other: UObject | any): EditorTutorialFactory;
}

declare class EditorTutorialImportFactory extends Factory { 
	static Load(ResourceName: string): EditorTutorialImportFactory;
	static Find(Outer: UObject, ResourceName: string): EditorTutorialImportFactory;
	static GetDefaultObject(): EditorTutorialImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialImportFactory;
	static C(Other: UObject | any): EditorTutorialImportFactory;
}

declare class TutorialCategory { 
	Identifier: string;
	Title: string;
	SortOrder: number;
	Description: string;
	Icon: string;
	Texture: SoftObjectPath;
	clone() : TutorialCategory;
	static C(Other: UObject | any): TutorialCategory;
}

declare class TutorialContext { 
	Context: string;
	BrowserFilter: string;
	AttractTutorial: SoftClassPath;
	LaunchTutorial: SoftClassPath;
	clone() : TutorialContext;
	static C(Other: UObject | any): TutorialContext;
}

declare class EditorTutorialSettings extends UObject { 
	bDisableAllTutorialAlerts: boolean;
	Categories: TutorialCategory[];
	StartupTutorial: SoftClassPath;
	TutorialContexts: TutorialContext[];
	static Load(ResourceName: string): EditorTutorialSettings;
	static Find(Outer: UObject, ResourceName: string): EditorTutorialSettings;
	static GetDefaultObject(): EditorTutorialSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialSettings;
	static C(Other: UObject | any): EditorTutorialSettings;
}

declare class TutorialSettings extends UObject { 
	Categories: TutorialCategory[];
	StartupTutorial: SoftClassPath;
	static Load(ResourceName: string): TutorialSettings;
	static Find(Outer: UObject, ResourceName: string): TutorialSettings;
	static GetDefaultObject(): TutorialSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TutorialSettings;
	static C(Other: UObject | any): TutorialSettings;
}

declare class TutorialProgress { 
	Tutorial: SoftClassPath;
	CurrentStage: number;
	bUserDismissed: boolean;
	clone() : TutorialProgress;
	static C(Other: UObject | any): TutorialProgress;
}

declare class TutorialStateSettings extends UObject { 
	TutorialsProgress: TutorialProgress[];
	bDismissedAllTutorials: boolean;
	static Load(ResourceName: string): TutorialStateSettings;
	static Find(Outer: UObject, ResourceName: string): TutorialStateSettings;
	static GetDefaultObject(): TutorialStateSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TutorialStateSettings;
	static C(Other: UObject | any): TutorialStateSettings;
}

declare class LogVisualizerSessionSettings extends UObject { 
	bEnableGraphsVisualization: boolean;
	static Load(ResourceName: string): LogVisualizerSessionSettings;
	static Find(Outer: UObject, ResourceName: string): LogVisualizerSessionSettings;
	static GetDefaultObject(): LogVisualizerSessionSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LogVisualizerSessionSettings;
	static C(Other: UObject | any): LogVisualizerSessionSettings;
}

declare class CategoryFilter { 
	CategoryName: string;
	LogVerbosity: number;
	Enabled: boolean;
	clone() : CategoryFilter;
	static C(Other: UObject | any): CategoryFilter;
}

declare class VisualLoggerFiltersData { 
	SearchBoxFilter: string;
	ObjectNameFilter: string;
	Categories: CategoryFilter[];
	SelectedClasses: string[];
	clone() : VisualLoggerFiltersData;
	static C(Other: UObject | any): VisualLoggerFiltersData;
}

declare class LogVisualizerSettings extends UObject { 
	bIgnoreTrivialLogs: boolean;
	TrivialLogsThreshold: number;
	bStickToRecentData: boolean;
	bResetDataWithNewSession: boolean;
	bShowHistogramLabelsOutside: boolean;
	DefaultCameraDistance: number;
	bSearchInsideLogs: boolean;
	bUseFilterVolumes: boolean;
	GraphsBackgroundColor: Color;
	bPersistentFilters: boolean;
	bDrawExtremesOnGraphs: boolean;
	bConstrainGraphToLocalMinMax: boolean;
	bUsePlayersOnlyForPause: boolean;
	bLogNavOctreeOnStop: boolean;
	bForceUniqueLogNames: boolean;
	PersistentFilters: VisualLoggerFiltersData;
	DebugMeshMaterialFakeLight: Material;
	DebugMeshMaterialFakeLightName: string;
	static Load(ResourceName: string): LogVisualizerSettings;
	static Find(Outer: UObject, ResourceName: string): LogVisualizerSettings;
	static GetDefaultObject(): LogVisualizerSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LogVisualizerSettings;
	static C(Other: UObject | any): LogVisualizerSettings;
}

declare class VisualLoggerCameraController extends DebugCameraController { 
	PickedActor: Actor;
	static GetDefaultObject(): VisualLoggerCameraController;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerCameraController;
	static C(Other: UObject | any): VisualLoggerCameraController;
}

declare class VisualLoggerHUD extends DebugCameraHUD { 
	static GetDefaultObject(): VisualLoggerHUD;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerHUD;
	static C(Other: UObject | any): VisualLoggerHUD;
}

declare class VisualLoggerRenderingActorBase extends Actor { 
	static GetDefaultObject(): VisualLoggerRenderingActorBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerRenderingActorBase;
	static C(Other: UObject | any): VisualLoggerRenderingActorBase;
}

declare class VisualLoggerRenderingActor extends VisualLoggerRenderingActorBase { 
	static GetDefaultObject(): VisualLoggerRenderingActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerRenderingActor;
	static C(Other: UObject | any): VisualLoggerRenderingActor;
}

declare class VisualLoggerRenderingComponent extends DebugDrawComponent { 
	static Load(ResourceName: string): VisualLoggerRenderingComponent;
	static Find(Outer: UObject, ResourceName: string): VisualLoggerRenderingComponent;
	static GetDefaultObject(): VisualLoggerRenderingComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerRenderingComponent;
	static C(Other: UObject | any): VisualLoggerRenderingComponent;
}

declare type EMeshPaintColorViewMode = 'Normal' | 'RGB' | 'Alpha' | 'Red' | 'Green' | 'Blue' | 'EMeshPaintColorViewMode_MAX';
declare var EMeshPaintColorViewMode : { Normal:'Normal',RGB:'RGB',Alpha:'Alpha',Red:'Red',Green:'Green',Blue:'Blue',EMeshPaintColorViewMode_MAX:'EMeshPaintColorViewMode_MAX', };
declare class PaintBrushSettings extends UObject { 
	BrushRadius: number;
	BrushStrength: number;
	BrushFalloffAmount: number;
	bEnableFlow: boolean;
	bOnlyFrontFacingTriangles: boolean;
	ColorViewMode: EMeshPaintColorViewMode;
	static Load(ResourceName: string): PaintBrushSettings;
	static Find(Outer: UObject, ResourceName: string): PaintBrushSettings;
	static GetDefaultObject(): PaintBrushSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaintBrushSettings;
	static C(Other: UObject | any): PaintBrushSettings;
}

declare class MeshPaintSettings extends UObject { 
	VertexPreviewSize: number;
	static Load(ResourceName: string): MeshPaintSettings;
	static Find(Outer: UObject, ResourceName: string): MeshPaintSettings;
	static GetDefaultObject(): MeshPaintSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshPaintSettings;
	static C(Other: UObject | any): MeshPaintSettings;
}

declare class VertexColorImportOptions extends UObject { 
	UVIndex: number;
	LODIndex: number;
	bRed: boolean;
	bBlue: boolean;
	bGreen: boolean;
	bAlpha: boolean;
	bImportToInstance: boolean;
	bCanImportToInstance: boolean;
	static Load(ResourceName: string): VertexColorImportOptions;
	static Find(Outer: UObject, ResourceName: string): VertexColorImportOptions;
	static GetDefaultObject(): VertexColorImportOptions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VertexColorImportOptions;
	static C(Other: UObject | any): VertexColorImportOptions;
}

declare class ClothPainterSettings extends MeshPaintSettings { 
	ViewMin: number;
	ViewMax: number;
	bAutoViewRange: boolean;
	AutoCalculatedViewMin: number;
	AutoCalculatedViewMax: number;
	ClothingAssets: ClothingAssetCommon[];
	bFlipNormal: boolean;
	bCullBackface: boolean;
	Opacity: number;
	static Load(ResourceName: string): ClothPainterSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPainterSettings;
	static GetDefaultObject(): ClothPainterSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPainterSettings;
	static C(Other: UObject | any): ClothPainterSettings;
}

declare class ClothPaintTool_BrushSettings extends UObject { 
	PaintValue: number;
	static Load(ResourceName: string): ClothPaintTool_BrushSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_BrushSettings;
	static GetDefaultObject(): ClothPaintTool_BrushSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_BrushSettings;
	static C(Other: UObject | any): ClothPaintTool_BrushSettings;
}

declare class ClothPaintTool_GradientSettings extends UObject { 
	GradientStartValue: number;
	GradientEndValue: number;
	bUseRegularBrush: boolean;
	static Load(ResourceName: string): ClothPaintTool_GradientSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_GradientSettings;
	static GetDefaultObject(): ClothPaintTool_GradientSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_GradientSettings;
	static C(Other: UObject | any): ClothPaintTool_GradientSettings;
}

declare class ClothPaintTool_SmoothSettings extends UObject { 
	Strength: number;
	static Load(ResourceName: string): ClothPaintTool_SmoothSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_SmoothSettings;
	static GetDefaultObject(): ClothPaintTool_SmoothSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_SmoothSettings;
	static C(Other: UObject | any): ClothPaintTool_SmoothSettings;
}

declare class ClothPaintTool_FillSettings extends UObject { 
	Threshold: number;
	FillValue: number;
	static Load(ResourceName: string): ClothPaintTool_FillSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_FillSettings;
	static GetDefaultObject(): ClothPaintTool_FillSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_FillSettings;
	static C(Other: UObject | any): ClothPaintTool_FillSettings;
}

declare class ActorFactoryLandscape extends ActorFactory { 
	static Load(ResourceName: string): ActorFactoryLandscape;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryLandscape;
	static GetDefaultObject(): ActorFactoryLandscape;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryLandscape;
	static C(Other: UObject | any): ActorFactoryLandscape;
}

declare type ELandscapeToolFlattenMode = 'Invalid' | 'Both' | 'Raise' | 'Lower' | 'Interval' | 'Terrace' | 'ELandscapeToolFlattenMode_MAX';
declare var ELandscapeToolFlattenMode : { Invalid:'Invalid',Both:'Both',Raise:'Raise',Lower:'Lower',Interval:'Interval',Terrace:'Terrace',ELandscapeToolFlattenMode_MAX:'ELandscapeToolFlattenMode_MAX', };
declare type ELandscapeToolErosionMode = 'Invalid' | 'Both' | 'Raise' | 'Lower' | 'ELandscapeToolErosionMode_MAX';
declare var ELandscapeToolErosionMode : { Invalid:'Invalid',Both:'Both',Raise:'Raise',Lower:'Lower',ELandscapeToolErosionMode_MAX:'ELandscapeToolErosionMode_MAX', };
declare type ELandscapeToolHydroErosionMode = 'Invalid' | 'Both' | 'Positive' | 'ELandscapeToolHydroErosionMode_MAX';
declare var ELandscapeToolHydroErosionMode : { Invalid:'Invalid',Both:'Both',Positive:'Positive',ELandscapeToolHydroErosionMode_MAX:'ELandscapeToolHydroErosionMode_MAX', };
declare type ELandscapeToolNoiseMode = 'Invalid' | 'Both' | 'Add' | 'Sub' | 'ELandscapeToolNoiseMode_MAX';
declare var ELandscapeToolNoiseMode : { Invalid:'Invalid',Both:'Both',Add:'Add',Sub:'Sub',ELandscapeToolNoiseMode_MAX:'ELandscapeToolNoiseMode_MAX', };
declare type ELandscapeToolPasteMode = 'Invalid' | 'Both' | 'Raise' | 'Lower' | 'ELandscapeToolPasteMode_MAX';
declare var ELandscapeToolPasteMode : { Invalid:'Invalid',Both:'Both',Raise:'Raise',Lower:'Lower',ELandscapeToolPasteMode_MAX:'ELandscapeToolPasteMode_MAX', };
declare class GizmoImportLayer { 
	LayerFilename: string;
	LayerName: string;
	bNoImport: boolean;
	clone() : GizmoImportLayer;
	static C(Other: UObject | any): GizmoImportLayer;
}

declare type ELandscapeMirrorOperation = 'MinusXToPlusX' | 'PlusXToMinusX' | 'MinusYToPlusY' | 'PlusYToMinusY' | 'RotateMinusXToPlusX' | 'RotatePlusXToMinusX' | 'RotateMinusYToPlusY' | 'RotatePlusYToMinusY' | 'ELandscapeMirrorOperation_MAX';
declare var ELandscapeMirrorOperation : { MinusXToPlusX:'MinusXToPlusX',PlusXToMinusX:'PlusXToMinusX',MinusYToPlusY:'MinusYToPlusY',PlusYToMinusY:'PlusYToMinusY',RotateMinusXToPlusX:'RotateMinusXToPlusX',RotatePlusXToMinusX:'RotatePlusXToMinusX',RotateMinusYToPlusY:'RotateMinusYToPlusY',RotatePlusYToMinusY:'RotatePlusYToMinusY',ELandscapeMirrorOperation_MAX:'ELandscapeMirrorOperation_MAX', };
declare type ELandscapeConvertMode = 'Invalid' | 'Expand' | 'Clip' | 'Resample' | 'ELandscapeConvertMode_MAX';
declare var ELandscapeConvertMode : { Invalid:'Invalid',Expand:'Expand',Clip:'Clip',Resample:'Resample',ELandscapeConvertMode_MAX:'ELandscapeConvertMode_MAX', };
declare type ELandscapeImportResult = 'Success' | 'Warning' | 'Error' | 'ELandscapeImportResult_MAX';
declare var ELandscapeImportResult : { Success:'Success',Warning:'Warning',Error:'Error',ELandscapeImportResult_MAX:'ELandscapeImportResult_MAX', };
declare type ELandscapeImportTransformType = 'None' | 'ExpandOffset' | 'ExpandCentered' | 'Resample' | 'ELandscapeImportTransformType_MAX';
declare var ELandscapeImportTransformType : { None:'None',ExpandOffset:'ExpandOffset',ExpandCentered:'ExpandCentered',Resample:'Resample',ELandscapeImportTransformType_MAX:'ELandscapeImportTransformType_MAX', };
declare class LandscapeImportResolution { 
	Width: any;
	Height: any;
	clone() : LandscapeImportResolution;
	static C(Other: UObject | any): LandscapeImportResolution;
}

declare class LandscapeFileResolution { 
	Width: any;
	Height: any;
	clone() : LandscapeFileResolution;
	static C(Other: UObject | any): LandscapeFileResolution;
}

declare class LandscapeImportFileDescriptor { 
	Coord: IntPoint;
	FilePath: string;
	clone() : LandscapeImportFileDescriptor;
	static C(Other: UObject | any): LandscapeImportFileDescriptor;
}

declare class LandscapeImportDescriptor { 
	ImportResolutions: LandscapeImportResolution[];
	FileResolutions: LandscapeFileResolution[];
	FileDescriptors: LandscapeImportFileDescriptor[];
	Scale: Vector;
	clone() : LandscapeImportDescriptor;
	static C(Other: UObject | any): LandscapeImportDescriptor;
}

declare type ELandscapeImportAlphamapType = 'Additive' | 'Layered' | 'ELandscapeImportAlphamapType_MAX';
declare var ELandscapeImportAlphamapType : { Additive:'Additive',Layered:'Layered',ELandscapeImportAlphamapType_MAX:'ELandscapeImportAlphamapType_MAX', };
declare class LandscapeImportLayerInfo { 
	LayerName: string;
	LayerInfo: LandscapeLayerInfoObject;
	SourceFilePath: string;
	clone() : LandscapeImportLayerInfo;
	static C(Other: UObject | any): LandscapeImportLayerInfo;
}

declare class LandscapeImportLayer extends LandscapeImportLayerInfo { 
	ThumbnailMIC: LandscapeMaterialInstanceConstant;
	ImportResult: ELandscapeImportResult;
	ErrorMessage: string;
	ExportFilePath: string;
	bSelected: boolean;
	clone() : LandscapeImportLayer;
	static C(Other: UObject | any): LandscapeImportLayer;
}

declare class LandscapePatternBrushWorldSpaceSettings { 
	Origin: Vector2D;
	Rotation: number;
	bCenterTextureOnOrigin: boolean;
	RepeatSize: number;
	clone() : LandscapePatternBrushWorldSpaceSettings;
	static C(Other: UObject | any): LandscapePatternBrushWorldSpaceSettings;
}

declare type EColorChannel = 'Red' | 'Green' | 'Blue' | 'Alpha' | 'EColorChannel_MAX';
declare var EColorChannel : { Red:'Red',Green:'Green',Blue:'Blue',Alpha:'Alpha',EColorChannel_MAX:'EColorChannel_MAX', };
declare class LandscapeEditorObject extends UObject { 
	ToolStrength: number;
	bUseWeightTargetValue: boolean;
	WeightTargetValue: number;
	MaximumValueRadius: number;
	bCombinedLayersOperation: boolean;
	FlattenMode: ELandscapeToolFlattenMode;
	bUseSlopeFlatten: boolean;
	bPickValuePerApply: boolean;
	bUseFlattenTarget: boolean;
	FlattenTarget: number;
	bShowFlattenTargetPreview: boolean;
	TerraceInterval: number;
	TerraceSmooth: number;
	bFlattenEyeDropperModeActivated: boolean;
	FlattenEyeDropperModeDesiredTarget: number;
	RampWidth: number;
	RampSideFalloff: number;
	SmoothFilterKernelSize: number;
	bDetailSmooth: boolean;
	DetailScale: number;
	ErodeThresh: number;
	ErodeSurfaceThickness: number;
	ErodeIterationNum: number;
	ErosionNoiseMode: ELandscapeToolErosionMode;
	ErosionNoiseScale: number;
	RainAmount: number;
	SedimentCapacity: number;
	HErodeIterationNum: number;
	RainDistMode: ELandscapeToolHydroErosionMode;
	RainDistScale: number;
	bHErosionDetailSmooth: boolean;
	HErosionDetailScale: number;
	NoiseMode: ELandscapeToolNoiseMode;
	NoiseScale: number;
	bUseSelectedRegion: boolean;
	bUseNegativeMask: boolean;
	PasteMode: ELandscapeToolPasteMode;
	bApplyToAllTargets: boolean;
	bSnapGizmo: boolean;
	bSmoothGizmoBrush: boolean;
	GizmoHeightmapFilenameString: string;
	GizmoImportSize: IntPoint;
	GizmoImportLayers: GizmoImportLayer[];
	MirrorPoint: Vector2D;
	MirrorOp: ELandscapeMirrorOperation;
	MirrorSmoothingWidth: number;
	BlueprintBrush: UnrealEngineClass;
	ResizeLandscape_QuadsPerSection: number;
	ResizeLandscape_SectionsPerComponent: number;
	ResizeLandscape_ComponentCount: IntPoint;
	ResizeLandscape_ConvertMode: ELandscapeConvertMode;
	NewLandscape_Material: any;
	NewLandscape_QuadsPerSection: number;
	NewLandscape_SectionsPerComponent: number;
	NewLandscape_ComponentCount: IntPoint;
	NewLandscape_Location: Vector;
	NewLandscape_Rotation: Rotator;
	NewLandscape_Scale: Vector;
	ImportLandscape_HeightmapImportResult: ELandscapeImportResult;
	ImportLandscape_HeightmapErrorMessage: string;
	ImportLandscape_HeightmapFilename: string;
	ImportLandscape_Width: any;
	ImportLandscape_Height: any;
	HeightmapExportFilename: string;
	ImportLandscape_GizmoLocalPosition: IntPoint;
	ImportType: ELandscapeImportTransformType;
	bHeightmapSelected: boolean;
	bExportEditLayer: boolean;
	HeightmapImportDescriptor: LandscapeImportDescriptor;
	HeightmapImportDescriptorIndex: number;
	ImportLandscape_Data: any[];
	bCanHaveLayersContent: boolean;
	bFlipYAxis: boolean;
	WorldPartitionGridSize: any;
	ImportLandscape_AlphamapType: ELandscapeImportAlphamapType;
	ImportLandscape_Layers: LandscapeImportLayer[];
	BrushRadius: number;
	BrushFalloff: number;
	bUseClayBrush: boolean;
	AlphaBrushScale: number;
	bAlphaBrushAutoRotate: boolean;
	AlphaBrushRotation: number;
	AlphaBrushPanU: number;
	AlphaBrushPanV: number;
	bUseWorldSpacePatternBrush: boolean;
	WorldSpacePatternBrushSettings: LandscapePatternBrushWorldSpaceSettings;
	AlphaTexture: Texture2D;
	AlphaTextureChannel: EColorChannel;
	AlphaTextureSizeX: number;
	AlphaTextureSizeY: number;
	AlphaTextureData: number[];
	BrushComponentSize: number;
	PaintingRestriction: ELandscapeLayerPaintingRestriction;
	TargetDisplayOrder: ELandscapeLayerDisplayMode;
	ShowUnusedLayers: boolean;
	CurrentLayerIndex: number;
	static Load(ResourceName: string): LandscapeEditorObject;
	static Find(Outer: UObject, ResourceName: string): LandscapeEditorObject;
	static GetDefaultObject(): LandscapeEditorObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LandscapeEditorObject;
	static C(Other: UObject | any): LandscapeEditorObject;
}

declare class LandscapePlaceholder extends Actor { 
	static GetDefaultObject(): LandscapePlaceholder;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LandscapePlaceholder;
	static C(Other: UObject | any): LandscapePlaceholder;
}

declare var Context : JavascriptContext;

declare var Root : JavascriptEditorTick;

