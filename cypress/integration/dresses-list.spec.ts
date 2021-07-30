import { MenuContentPage, DressesListPage } from "../page/index";

describe("the user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;
  const dresses = [];

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
    dresses[0] = "Printed Dress";
    dresses[1] = "Printed Dress";
    dresses[2] = "Printed Summer Dress";
    dresses[3] = "Printed Summer Dress";
    dresses[4] = "Printed Chiffon Dress";
  });

  it("show the available dresses", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToDressesMenu();
    dressesListPage.validateItemsNames(dresses);
    dressesListPage.validateItemsNumber(dresses.length);
  });
});
