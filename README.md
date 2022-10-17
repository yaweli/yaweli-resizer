# yaweli-resizer

a js tool to include with you html js code to autamated the scale of your div elements



# ux designer

Figma and other tool will help you to export your css and deliver them to your team of UI programmers but the result is almos no use for them in the new world where the screen size is changing. 

This tool will help the designer to setup the masurment in the first place , to cinsider a fix width when designing and a variable width when running. 

# Options:

1 - Tell the system to resize the element evry time the windows size is chaning

using the data-resize parameter:
```

 <div id=left class=leftcl data-resize="width:w*0.234;height:h*0.92">


```

this will change the width of this element to 23.4% of the total window width (represent here as 'w')

the same for the height


2 - Convert masurment from px to %

```
px2pre: 
	{
	left: [ "left","top"] ,
	right: [ "left","top"] 
	}

```
a resize object will be set and filled with a list of elements id's you want the system to convert to precent , we recomend to do it on the folowing styles : 
1- left
2- top
3- right
4- bottom
The UX designer will use px as default since that is the output of the designer tools. convert to % will save you calculating the ration from the (w) screen width. Then each resize of the window the element will be fixed by the browser obeying the % instead of px.


Iniciale setup:

you need to declare the parent of each div you want to be resize. 

this is done by adding a "resizer" object.

the first element "tree" of the object will hold the list of element and its parent, 

ex: 

left : "main" 


left is the element id , and "main" is the element parent id. 


```
var resizer = 
{
ver:1.0,
tree: 
	{ left : "main" ,
	  right: "main" 
	},
px2pre: 
	{
	left: [ "left","top"] ,
	right: [ "left","top"] 
	}
}

```




Scale page: 

![image](https://user-images.githubusercontent.com/16836814/196215693-acec091f-3998-4110-9a6d-a7f3736071df.png)



none scale page: 

![image](https://user-images.githubusercontent.com/16836814/196215904-6775fcfd-d565-4697-81ad-e0abb35384cb.png)


# Benefit for the UI designer: 

continue to supply css files as a fixed px masurment: 
```
.maincl {
    width:1920px;
    background: #3E4649;
    height: 1080px;
}
.leftcl {
  position: absolute; 
  height: 1000px;
  width: 442px;
  left: 35px;
  top: 55px;
  border-radius: 0px;
  font-family: arial;
  background: yellow;
}
.rightcl {
  position: absolute; 
  height: 1000px; 
  width: 1388px;
  left: 497px;
  top: 55px;
  border-radius: 0px;
  background: lightgreen;
}

```

# Long term
Future version of a website will always need to be updated with new css files, it best if the ux and ui designer not change there origional design with each update. most of the time they will not be familiare with the programmers environment. 


# feedback

Feedback is welcome

yaweli+resize@gmail.com



