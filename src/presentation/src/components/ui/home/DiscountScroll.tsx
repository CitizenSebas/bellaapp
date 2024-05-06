import { Discount, CustomScroll } from "../..";

export const DiscountScroll = () => {
  return (
    <CustomScroll horizontal>
      <Discount
        label="40%"
        text="On everything"
        imageName={require("../../../../../../assets/img/woman1.png")}
      />
      <Discount
        label="70%"
        text="On select collection"
        imageName={require("../../../../../../assets/img/woman2.png")}
      />
    </CustomScroll>
  );
};
