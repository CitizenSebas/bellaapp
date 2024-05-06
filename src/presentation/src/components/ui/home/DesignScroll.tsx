import { CustomScroll } from "../shared/CustomScroll";
import { Disign } from "./Disign";

export const DesignScroll = () => {
  return (
    <CustomScroll horizontal={false}>
      <Disign
        imageSource={require("../../../../../../assets/img/bikini.png")}
        collection="Love"
        price="45"
        title="Tiltle"
      />

      <Disign
        imageSource={require("../../../../../../assets/img/bikini.png")}
        collection="Love"
        price="45"
        title="Tiltle"
      />

      <Disign
        imageSource={require("../../../../../../assets/img/bikini.png")}
        collection="Love"
        price="45"
        title="Tiltle"
      />
    </CustomScroll>
  );
};
