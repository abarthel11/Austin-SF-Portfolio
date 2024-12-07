import { LightningElement, api } from "lwc";

export default class HeroText extends LightningElement {
	@api headerText;
	@api describeText;
}
