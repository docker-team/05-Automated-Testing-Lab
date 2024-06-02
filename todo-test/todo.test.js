const {test, expect} = require('@playwright/test')
const pageUrl = 'http://127.0.0.1:5500/to-do-app/';

// Test 1: Test If a User Can Go to Page

test('User can go to Page', async ({page})=> {
await page.goto(pageUrl);
await expect(page).toHaveURL(pageUrl);
});


// Test 2: Test If a User Can Add a Task
test('User can add a task', async ({page})=> {
    await page.goto(pageUrl);
    await page.fill('#task-input', 'New Task');
    await page.click('#add-task');
    const taskText = await page.textContent('.task');
    
    await expect(taskText).toContain('New Task');
    });


//Test 3: Test If a User Can Delete a Task
test('User can delete a task', async({page})=>
        {
        await page.goto(pageUrl);
        
        await page.fill('#task-input', 'New Task 1');
        await page.click('#add-task');
        
        await page.fill('#task-input', 'New Task 2');
        await page.click('#add-task');
        
        await page.fill('#task-input', 'New Task 3');
        await page.click('#add-task');
        
        const firstTaskText = await page.textContent('#task-list');
        await expect(firstTaskText).toContain('New Task 1');
        
        const secondTaskText = await page.textContent('#task-list');
        await expect(secondTaskText).toContain('New Task 2');
        
        const thirdTaskText = await page.textContent('#task-list');
        await expect(thirdTaskText).toContain('New Task 3');
        
        const taskToDelete = "New Task 2";
        
        const taskLocator = page.locator(`#task-list .task:has-text("${taskToDelete}")`);
        
          // Ensure the specific task is present
        await expect(taskLocator).toContainText(taskToDelete);
         // Click the delete button for the specific task
        await taskLocator.locator('.delete-task').click();
        
          // Ensure the task is deleted
        await expect(page.locator('#task-list')).not.toContainText(taskToDelete);
});
        
        
        
        
//Test 4: Test If a User Can Mark a Task as Complete
        
        
        
//Test 5: Test If a User Can Filter Tasks