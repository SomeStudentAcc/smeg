import CollectionSliderMobile from "@/components/shared/CollectionSliderMobile";
import CollectionsSlider from "@/components/shared/CollectionsSlider";
import CollorsCollection from "@/components/shared/CollorsCollection";
import ColorsCollectionMobile from "@/components/shared/ColorCollectionMobile";
import Fab from "@/components/shared/Fab";
import MainCollab from "@/components/shared/MainCollab";
import Sales from "@/components/shared/Sales";
import TopSmallAppliances from "@/components/shared/TopSmallAppliances";
import VideoSlider from "@/components/shared/VideoSlider";

export default function Home() {
  return (
    <>
      <VideoSlider />
      <TopSmallAppliances />
      <MainCollab />
      <div className="hidden md:block">
        {" "}
        <CollectionsSlider />
      </div>
      <div className="md:hidden">
        <CollectionSliderMobile />
      </div>
      <Fab />
      <CollorsCollection />
      <ColorsCollectionMobile />
      <Sales />
    </>
  );
}
