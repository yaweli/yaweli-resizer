# yaweli-resizer

a js tool to include with you html js code to autamated the scale of your div elements



# ux designer

Figma and other tool will help you to export your css and deliver them to your team of UI programmers but the result is almos no use for them in the new world where the screen size is changing. 

This tool will help the designer to setup the masurment in the first place , to cinsider a fix width when designing and a variable width when running. 

##Options:

#Tell the system to resize the element evry time the windows size is chaning

using the data-resize parameter:
```

 <div id=left class=leftcl data-resize="width:w*0.234;height:h*0.92">


```

this will change the width of this element to 23.4% of the total window width (represent here as 'w')

the same for the height
