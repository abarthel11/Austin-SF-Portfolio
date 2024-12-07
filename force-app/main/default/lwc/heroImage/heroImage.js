import { LightningElement, api } from "lwc";

// import HeroImage from "@salesforce/resourceUrl/HeroImage";

export default class HeroImage extends LightningElement {
	@api borderColor; // Default border color (black)
	@api imageUrl;

	// Dynamically generate the style
	get dynamicStyle() {
		return `border: 10px solid ${this.borderColor}; border-radius: 50%;`;
	}

	get url() {
		return this.imageUrl;
	}
}
