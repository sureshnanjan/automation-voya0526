import type { HomePageOperation, LogoDetail } from "../operations/home_page_operations.js";

export class HomePageWDIO implements HomePageOperation{
    getTitle(): Promise<string | null> {
        throw new Error("Method not implemented.");
    }
    getSubTitle(): Promise<string> {
        throw new Error("Method not implemented.");
    }
    getLogoDetail(): Promise<LogoDetail> {
        throw new Error("Method not implemented.");
    }
    getAvailableExamples(): Promise<string[]> {
        throw new Error("Method not implemented.");
    }
    goToExample(examplename: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}