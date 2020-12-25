
<center>

# Leprechaun Website Ecommerce Template

A Simple Ecommerce Website for Selling Video Game Gold

Example Website: https://leprechaun-web-ecommerce.netlify.app/
</center>

## Features
- Free and Simple to Use
- Perfect Template Ecommerce Website
- Easy to Deploy and Startup
- Backend Content Management System to edit the prices
- Fully Customizable
- Checkout page
- Easy to implement live chat system with tawk.to
- Improved SEO (90+ on Performance, Best Practices, and SEO)
- Server Side Render Website
- NextJS / Netlify CMS Application

#### Requirements:
- Github Account
- Netlify Account
- Text Editor (Recommended: Visual Studio Code)

<center>

# Getting Started

Deploy the project and edit it for free!
</center>

### Cloning the Project
- Open Visual Studio Code /Terminal on any code editor /or the Command Prompt.
- Open a new Terminal and then locate the directory that you want to store the project at.
- Enter "git clone https://github.com/jessecdob/leprechaun-web-ecommerce.git", this will clone the repository into that directory.

### Creating a new repository for the project 
- Follow these instructions to add a new repository 
    - https://docs.github.com/en/free-pro-team@latest/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line
- You will need to download the GIT CLI - https://git-scm.com/downloads
- This will come in handy when you want to make any changes to the website without using Netlify's Content Management System

### Deploying on Netlify
- Create a new Project on Netlify by going to https://app.netlify.com/start
- Use the "Github" option and find the repository on your account
- Change the deploy settings to:
    - Branch to deploy: master
    - Build command: CI= npm run export
    - Publish directory: out
- After making sure of those configurations, Deploy the Site!
### Establishing the Netlify's CMS 
- In order for Netlify's Content Management System to work for the backend you will need to enable identity
- Find the "Identity" tab on Netlify's Site Dashboard Navigation bar.
- Enable Identity
- You will also need to enable Git Gateway on Netlify
    - Find the "Services" tab on the left side of the table of contents and enable Git Gateway
- After enabling Git Gateway, You will need to invite your own email. 
    - You will recive a invitiation email, click on the click
    - You will be redirected to something like "https://leprechaun-web-ecommerce.netlify.app/#invite_token={}"
    - Add /admin/ inbetween the URL and the invite token so it will look something like 
    "https://leprechaun-web-ecommerce.netlify.app/admin/#invite_token={}"
    - Enter a password as you see fit. 


### Finish
- To change the rates of the gold, goto the "Pricing and Rates" tab
- To change the Logo of the website, goto the "Logo Component" tab
- To update the Privacy Policy Page, goto the "Privacy Policy" tab
- To update the Terms of Service Page, goto the "Terms of Service" tab
- To update the Footer, goto the "Footer Component" tab
- Inorder to change the SEO to your own brand, you will need to edit the .js page files 
under the "Head" tags in the project directory, /pages/.
- To settup the livechat, goto tawk.to and settup an account and then copy and paste the 
script code under /pages/_app.js inbetween the commented code for the Tawk.To script.
