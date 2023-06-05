// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for 地區地圖 documents */
interface AreamapDocumentData {
  /**
   * Slice Zone field in *地區地圖*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: areamap.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<AreamapDocumentDataSlicesSlice>;
}
/**
 * Slice for *地區地圖 → Slice Zone*
 *
 */
type AreamapDocumentDataSlicesSlice = DescImageSlice;
/**
 * 地區地圖 document from Prismic
 *
 * - **API ID**: `areamap`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AreamapDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<
    Simplify<AreamapDocumentData>,
    "areamap",
    Lang
  >;
/** Content for Author documents */
interface AuthorDocumentData {
  /**
   * Name field in *Author*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Name of the author
   * - **API ID Path**: author.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  name: prismicT.TitleField;
  /**
   * Picture field in *Author*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: author.picture
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  picture: prismicT.ImageField<never>;
}
/**
 * Author document from Prismic
 *
 * - **API ID**: `author`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AuthorDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<AuthorDocumentData>,
    "author",
    Lang
  >;
/** Content for footer documents */
interface FooterDocumentData {
  /**
   * footer text field in *footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.footerText[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  footerText: prismicT.GroupField<Simplify<FooterDocumentDataFooterTextItem>>;
}
/**
 * Item in footer → footer text
 *
 */
export interface FooterDocumentDataFooterTextItem {
  /**
   * TEL field in *footer → footer text*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.footerText[].tel
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  tel: prismicT.RichTextField;
  /**
   * 07-766-1234 field in *footer → footer text*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.footerText[].telno
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  telno: prismicT.KeyTextField;
}
/**
 * footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;
/** Content for 頁首圖片 documents */
interface HeaderDocumentData {
  /**
   * Slice Zone field in *頁首圖片*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: header.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<HeaderDocumentDataSlicesSlice>;
}
/**
 * Slice for *頁首圖片 → Slice Zone*
 *
 */
type HeaderDocumentDataSlicesSlice = HeaderImageSlice;
/**
 * 頁首圖片 document from Prismic
 *
 * - **API ID**: `header`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<Simplify<HeaderDocumentData>, "header", Lang>;
/** Content for 故事介紹 documents */
interface HistoryDocumentData {
  /**
   * Slice Zone field in *故事介紹*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: history.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<HistoryDocumentDataSlicesSlice>;
}
/**
 * Slice for *故事介紹 → Slice Zone*
 *
 */
type HistoryDocumentDataSlicesSlice = TextSlice;
/**
 * 故事介紹 document from Prismic
 *
 * - **API ID**: `history`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HistoryDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<
    Simplify<HistoryDocumentData>,
    "history",
    Lang
  >;
/** Content for 廠商logo documents */
interface PartnerLogoDocumentData {
  /**
   * Slice Zone field in *廠商logo*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: partnerLogo.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<PartnerLogoDocumentDataSlicesSlice>;
}
/**
 * Slice for *廠商logo → Slice Zone*
 *
 */
type PartnerLogoDocumentDataSlicesSlice = RepeatImageSlice;
/**
 * 廠商logo document from Prismic
 *
 * - **API ID**: `partnerLogo`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PartnerLogoDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<
    Simplify<PartnerLogoDocumentData>,
    "partnerLogo",
    Lang
  >;
/** Content for 商品 documents */
interface ProductDocumentData {
  /**
   * 商品類別 field in *商品*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: product.category
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  category: prismicT.RelationField<"producttag">;
  /**
   * 外層圖片 field in *商品*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismicT.ImageField<never>;
  /**
   * 標題 field in *商品*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * 價錢 field in *商品*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product.price
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  price: prismicT.KeyTextField;
  /**
   * 商品描述 field in *商品*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  description: prismicT.KeyTextField;
  /**
   * Slice Zone field in *商品*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: product.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<ProductDocumentDataSlicesSlice>;
}
/**
 * Slice for *商品 → Slice Zone*
 *
 */
type ProductDocumentDataSlicesSlice = SliderImageSlice | ProductTagSlice;
/**
 * 商品 document from Prismic
 *
 * - **API ID**: `product`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProductDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<
    Simplify<ProductDocumentData>,
    "product",
    Lang
  >;
/** Content for 商品分類 documents */
interface ProducttagDocumentData {
  /**
   * 分類類別 field in *商品分類*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: 請輸入商品分類類別
   * - **API ID Path**: producttag.tagname
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  tagname: prismicT.RichTextField;
}
/**
 * 商品分類 document from Prismic
 *
 * - **API ID**: `producttag`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProducttagDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<
    Simplify<ProducttagDocumentData>,
    "producttag",
    Lang
  >;
/** Content for 作品集 documents */
interface ProjectpostDocumentData {
  /**
   * Slice Zone field in *作品集*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: projectpost.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<ProjectpostDocumentDataSlicesSlice>;
}
/**
 * Slice for *作品集 → Slice Zone*
 *
 */
type ProjectpostDocumentDataSlicesSlice = GallerySlice;
/**
 * 作品集 document from Prismic
 *
 * - **API ID**: `projectpost`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectpostDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<
    Simplify<ProjectpostDocumentData>,
    "projectpost",
    Lang
  >;
/** Content for 作品集分類 documents */
interface TagDocumentData {
  /**
   * 分類類別 field in *作品集分類*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: 請輸入作品集分類類別
   * - **API ID Path**: tag.tagname
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  tagname: prismicT.RichTextField;
}
/**
 * 作品集分類 document from Prismic
 *
 * - **API ID**: `tag`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TagDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<Simplify<TagDocumentData>, "tag", Lang>;
export type AllDocumentTypes =
  | AreamapDocument
  | AuthorDocument
  | FooterDocument
  | HeaderDocument
  | HistoryDocument
  | PartnerLogoDocument
  | ProductDocument
  | ProducttagDocument
  | ProjectpostDocument
  | TagDocument;
/**
 * Primary content in DescImage → Primary
 *
 */
interface DescImageSliceDefaultPrimary {
  /**
   * 地區 field in *DescImage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: 請輸入區域
   * - **API ID Path**: desc_image.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  text: prismicT.KeyTextField;
}
/**
 * Item in DescImage → Items
 *
 */
export interface DescImageSliceDefaultItem {
  /**
   * 圖片 field in *DescImage → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: desc_image.items[].image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismicT.ImageField<never>;
}
/**
 * Default variation for DescImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type DescImageSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<DescImageSliceDefaultPrimary>,
  Simplify<DescImageSliceDefaultItem>
>;
/**
 * Slice variation for *DescImage*
 *
 */
type DescImageSliceVariation = DescImageSliceDefault;
/**
 * DescImage Shared Slice
 *
 * - **API ID**: `desc_image`
 * - **Description**: `DescImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type DescImageSlice = prismicT.SharedSlice<
  "desc_image",
  DescImageSliceVariation
>;
/**
 * Primary content in Gallery → Primary
 *
 */
interface GallerySliceDefaultPrimary {
  /**
   * 分類類別 field in *Gallery → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.primary.tagname
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  tagname: prismicT.RelationField<"tag">;
  /**
   * 外層標題 field in *Gallery → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * 外層描述 field in *Gallery → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  description: prismicT.KeyTextField;
  /**
   * 外層圖片 field in *Gallery → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismicT.ImageField<never>;
  /**
   * 內文文字描述 field in *Gallery → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.primary.context
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  context: prismicT.RichTextField;
  /**
   * 內文小圖 field in *Gallery → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.primary.image2
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image2: prismicT.ImageField<never>;
}
/**
 * Item in Gallery → Items
 *
 */
export interface GallerySliceDefaultItem {
  /**
   * 幻燈片圖片 field in *Gallery → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.items[].sliderimage
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  sliderimage: prismicT.ImageField<never>;
}
/**
 * Default variation for Gallery Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GallerySliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<GallerySliceDefaultPrimary>,
  Simplify<GallerySliceDefaultItem>
>;
/**
 * Slice variation for *Gallery*
 *
 */
type GallerySliceVariation = GallerySliceDefault;
/**
 * Gallery Shared Slice
 *
 * - **API ID**: `gallery`
 * - **Description**: `Gallery`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GallerySlice = prismicT.SharedSlice<
  "gallery",
  GallerySliceVariation
>;
/**
 * Primary content in HeaderImage → Primary
 *
 */
interface HeaderImageSliceDefaultPrimary {
  /**
   * 左側logo field in *HeaderImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header_image.primary.logoleft
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  logoleft: prismicT.ImageField<never>;
  /**
   * 右側logo field in *HeaderImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header_image.primary.logoright
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  logoright: prismicT.ImageField<never>;
}
/**
 * Default variation for HeaderImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeaderImageSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<HeaderImageSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *HeaderImage*
 *
 */
type HeaderImageSliceVariation = HeaderImageSliceDefault;
/**
 * HeaderImage Shared Slice
 *
 * - **API ID**: `header_image`
 * - **Description**: `HeaderImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeaderImageSlice = prismicT.SharedSlice<
  "header_image",
  HeaderImageSliceVariation
>;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceDefaultPrimary {
  /**
   * Image field in *Image → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismicT.ImageField<never>;
}
/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<ImageSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Image*
 *
 */
type ImageSliceVariation = ImageSliceDefault;
/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSlice = prismicT.SharedSlice<"image", ImageSliceVariation>;
/**
 * Primary content in Product → Primary
 *
 */
interface ProductSliceDefaultPrimary {
  /**
   * 商品編碼 field in *Product → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product.primary.productuid
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  productuid: prismicT.KeyTextField;
  /**
   * 分類類別 field in *Product → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: product.primary.tagname
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  tagname: prismicT.RelationField<"producttag">;
  /**
   * 外層圖片 field in *Product → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product.primary.mainimage
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  mainimage: prismicT.ImageField<never>;
  /**
   * 商品標題 field in *Product → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * 商品價錢 field in *Product → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product.primary.price
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  price: prismicT.KeyTextField;
  /**
   * 商品描述 field in *Product → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  description: prismicT.KeyTextField;
}
/**
 * Item in Product → Items
 *
 */
export interface ProductSliceDefaultItem {
  /**
   * 輪播商品照片 field in *Product → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product.items[].sliderimage
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  sliderimage: prismicT.ImageField<never>;
  /**
   * 類別、顏色 field in *Product → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product.items[].category
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  category: prismicT.RichTextField;
}
/**
 * Default variation for Product Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProductSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<ProductSliceDefaultPrimary>,
  Simplify<ProductSliceDefaultItem>
>;
/**
 * Slice variation for *Product*
 *
 */
type ProductSliceVariation = ProductSliceDefault;
/**
 * Product Shared Slice
 *
 * - **API ID**: `product`
 * - **Description**: `Product`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProductSlice = prismicT.SharedSlice<
  "product",
  ProductSliceVariation
>;
/**
 * Item in ProductTag → Items
 *
 */
export interface ProductTagSliceDefaultItem {
  /**
   * 商品顏色、類別 field in *ProductTag → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_tag.items[].text
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  text: prismicT.KeyTextField;
}
/**
 * Default variation for ProductTag Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProductTagSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<ProductTagSliceDefaultItem>
>;
/**
 * Slice variation for *ProductTag*
 *
 */
type ProductTagSliceVariation = ProductTagSliceDefault;
/**
 * ProductTag Shared Slice
 *
 * - **API ID**: `product_tag`
 * - **Description**: `ProductTag`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProductTagSlice = prismicT.SharedSlice<
  "product_tag",
  ProductTagSliceVariation
>;
/**
 * Item in RepeatImage → Items
 *
 */
export interface RepeatImageSliceDefaultItem {
  /**
   * 廠商logo field in *RepeatImage → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: repeat_image.items[].repeatimage
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  repeatimage: prismicT.ImageField<never>;
}
/**
 * Default variation for RepeatImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type RepeatImageSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<RepeatImageSliceDefaultItem>
>;
/**
 * Slice variation for *RepeatImage*
 *
 */
type RepeatImageSliceVariation = RepeatImageSliceDefault;
/**
 * RepeatImage Shared Slice
 *
 * - **API ID**: `repeat_image`
 * - **Description**: `RepeatImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type RepeatImageSlice = prismicT.SharedSlice<
  "repeat_image",
  RepeatImageSliceVariation
>;
/**
 * Item in SliderImage → Items
 *
 */
export interface SliderImageSliceDefaultItem {
  /**
   * 輪播商品照片 field in *SliderImage → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: slider_image.items[].image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismicT.ImageField<never>;
}
/**
 * Default variation for SliderImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SliderImageSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<SliderImageSliceDefaultItem>
>;
/**
 * Slice variation for *SliderImage*
 *
 */
type SliderImageSliceVariation = SliderImageSliceDefault;
/**
 * SliderImage Shared Slice
 *
 * - **API ID**: `slider_image`
 * - **Description**: `SliderImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SliderImageSlice = prismicT.SharedSlice<
  "slider_image",
  SliderImageSliceVariation
>;
/**
 * Primary content in Text → Primary
 *
 */
interface TextSliceDefaultPrimary {
  /**
   * 文字內容 field in *Text → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismicT.RichTextField;
}
/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<TextSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Text*
 *
 */
type TextSliceVariation = TextSliceDefault;
/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSlice = prismicT.SharedSlice<"text", TextSliceVariation>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      AreamapDocumentData,
      AreamapDocumentDataSlicesSlice,
      AreamapDocument,
      AuthorDocumentData,
      AuthorDocument,
      FooterDocumentData,
      FooterDocumentDataFooterTextItem,
      FooterDocument,
      HeaderDocumentData,
      HeaderDocumentDataSlicesSlice,
      HeaderDocument,
      HistoryDocumentData,
      HistoryDocumentDataSlicesSlice,
      HistoryDocument,
      PartnerLogoDocumentData,
      PartnerLogoDocumentDataSlicesSlice,
      PartnerLogoDocument,
      ProductDocumentData,
      ProductDocumentDataSlicesSlice,
      ProductDocument,
      ProducttagDocumentData,
      ProducttagDocument,
      ProjectpostDocumentData,
      ProjectpostDocumentDataSlicesSlice,
      ProjectpostDocument,
      TagDocumentData,
      TagDocument,
      AllDocumentTypes,
      DescImageSliceDefaultPrimary,
      DescImageSliceDefaultItem,
      DescImageSliceDefault,
      DescImageSliceVariation,
      DescImageSlice,
      GallerySliceDefaultPrimary,
      GallerySliceDefaultItem,
      GallerySliceDefault,
      GallerySliceVariation,
      GallerySlice,
      HeaderImageSliceDefaultPrimary,
      HeaderImageSliceDefault,
      HeaderImageSliceVariation,
      HeaderImageSlice,
      ImageSliceDefaultPrimary,
      ImageSliceDefault,
      ImageSliceVariation,
      ImageSlice,
      ProductSliceDefaultPrimary,
      ProductSliceDefaultItem,
      ProductSliceDefault,
      ProductSliceVariation,
      ProductSlice,
      ProductTagSliceDefaultItem,
      ProductTagSliceDefault,
      ProductTagSliceVariation,
      ProductTagSlice,
      RepeatImageSliceDefaultItem,
      RepeatImageSliceDefault,
      RepeatImageSliceVariation,
      RepeatImageSlice,
      SliderImageSliceDefaultItem,
      SliderImageSliceDefault,
      SliderImageSliceVariation,
      SliderImageSlice,
      TextSliceDefaultPrimary,
      TextSliceDefault,
      TextSliceVariation,
      TextSlice,
    };
  }
}
