import {test,expect,} from "@playwright/test";
test("Experiment Authenication",async ({page})=>{
    page.goto("https://the-internet.herokuapp.com/download_secure");
    expect(await page.getByRole("heading")).toContainText("Secure")

});

test("On Successful Login Downloads are available",()=>{
    /// AAA
    // Arrange
    const uname = "admin"
    const pwd = "admin"
    // Act
    const securePage.doLogin(uname,pwd);
    const results = securePage.getAvailableFiles();
    expect(results.length).toBeGreaterThan(0)
    // GWT
});
test("On Un Successful Login Downloads are not available",()=>{
    /// AAA
    // Arrange
    const uname = "admin"
    const pwd = "incorrect"
    const securePage.doLogin(uname,pwd);
    const result = securePage.getAvailableFiles();
    expect(results.length).toEqual(0)
    // GWT
});
test("Downloading single file works",()=>{
    // Arrange
    // User is successfully logged in 
    // Arrange
    const uname = "admin"
    const pwd = "admin"
    const actualfile = "random.txt"
    const securePage.doLogin(uname,pwd);
    // Action
    const actualfile = securePage.DownloadFiles([actualfile])
    const dowloadedFiles = securePage.getDownloadedFiles()
    expect(downloadedFiles).toContain(actualfile)

})
test("Downloading multiple files work",()=>{
    // Arrange
    // User is successfully logged in 
    // Arrange
    const uname = "admin"
    const pwd = "admin"
    // Clear all doanlodfoiles
    const actualfile = ["random.txt","sample.pdf"]
    securePage.ClearDownLoads()
    const securePage.doLogin(uname,pwd);
    // Action
    const actualfile = securePage.DownloadFiles(actualfile)
    const dowloadedFiles = securePage.getDownloadedFiles()
    expect(downloadedFiles).toContain(actualfile)
})
test("Downloading works for all file types",()=>{
    const actualfile = ["random.txt","sample.pdf","sample.png"]
})