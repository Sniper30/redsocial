import test, { expect } from '@playwright/test';


test('login app test',async({page})=>{
  await page.goto('http://localhost:3000/login');
  await expect('text=Log In').toContain('Log In')
})