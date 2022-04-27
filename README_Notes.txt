## Refrence: -> https://blog.logrocket.com/building-vue-3-component-library/

# npm init -y
- create all package.json with all needed info about project

#  git init
- to create empty repository

# touch .gitignore
# echo 'node_modules' >> .gitignore
- to add node_modules to gitignore

# npm i  @vue/compiler-sfc
- need to install additional package not mentioned in article to run npm run build successfully

# to publish package on npm
1- we need to make sure that all required info be in package.json ex:
    a. name -> must be unique @yourname/
    b. version
    c. main -> the entry point/file to access package, This should point to the CommonJS build file in dist
    d. module -> Same as main but should point to the ES module build file
    e. files -> this is a whitelist of files that npm will include in the published package. Because our build files are self-contained, we only need to include the dist

# VuePress:
- to documnetation how to use the package
- to use:
    1- add two more scripts for dev and build

- Important -> if there is error we need to update node js