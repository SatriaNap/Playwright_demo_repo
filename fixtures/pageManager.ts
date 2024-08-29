import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { PropertyDetailsPage } from "../pages/PropertyDetailsPage";
import { SearchResultsPage } from "../pages/SearchResultsPage";
import { UserProfilePage } from "../pages/UserProfilePage";
import { ContactBrokerPage } from "../pages/ContactBrokerPage";

type MyFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  propertyDetailsPage: PropertyDetailsPage;
  searchResultsPage: SearchResultsPage;
  userProfilePage: UserProfilePage;
  contactBrokerPage: ContactBrokerPage;
};

export const test = baseTest.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  propertyDetailsPage: async ({ page }, use) => {
    await use(new PropertyDetailsPage(page));
  },
  searchResultsPage: async ({ page }, use) => {
    await use(new SearchResultsPage(page));
  },
  userProfilePage: async ({ page }, use) => {
    await use(new UserProfilePage(page));
  },
  contactBrokerPage: async ({ page }, use) => {
    await use(new ContactBrokerPage(page));
  },
});

export { expect } from "@playwright/test";
