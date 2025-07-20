# Hackerrank Readme Stats
A beautiful way to display your [Hackerrank] profile badges in your Github readme or website.

> [!NOTE]
> Access your Hackerrank profile following the example in URL: `https://www.hackerrank.com/profile/samba9274`.

#### Example in Markdown:
```markdown
![Hackerrank Stats](https://hackerrank-stats.vercel.app/api?username={hackerrank-username})
```
#### Example in HTML:
```html
<p align="center">
  <a href="https://github.com/samba9274/hackerrank-readme-stats">
    <img src="https://hackerrank-stats.vercel.app/api?username={hackerrank-username}" alt="Hackerrank Stats"/>
  </a>
</p>
```

## Parameters

| Name         	| Type   	| Description              	| Observations        	|
|--------------	|--------	|--------------------------	|---------------------	|
| Query Params 	|        	|                          	|                     	|
| username     	| string 	| Your Hackerrank username 	| Example `samba9274` 	|

## Usage

Copy the code below to your README.md and replace query parameter to your hackerrank username.

```md
![Hackerrank Stats](https://hackerrank-stats.vercel.app/api?username=samba9274)
```
![Hackerrank Stats](https://hackerrank-stats.vercel.app/api?username=samba9274)

#### With hyperlink:

```md
[![Hackerrank Stats](https://hackerrank-stats.vercel.app/api?username=samba9274)](https://www.hackerrank.com/samba9274)
```
[![Hackerrank Stats](https://hackerrank-stats.vercel.app/api?username=samba9274)](https://www.hackerrank.com/samba9274)

[Hackerrank]:https://www.hackerrank.com/

#### Display the badges centrilized in HTML:
<p align="center">
  <a href="https://github.com/samba9274/hackerrank-readme-stats">
    <img src="https://hackerrank-stats.vercel.app/api?username=samba9274" alt="Hackerrank Stats"/>
  </a>
</p>