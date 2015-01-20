# HighLight
HighLight is a javascript tool to high light the keyword in the search result

### Usage
```
   <html lang="en">
      <script src="highLight.js"> </script>
      <body>
        <input id="keyword" type="text"></input><button type="button" onclick="highLight()">Search</button>
        <div id="result">
          tom <br />
          cat <br />
          jerry <br />
          mouse <br />
        </div>
       </body>
   </html>
```
Now we are going to bind the high light event on button search click
```
<script>
  function highLight(){
    highLight("keyword", "result");
  }
</script>
```

The high light for keyword is case insentative.
