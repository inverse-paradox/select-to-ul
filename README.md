# select-to-ul
This component will take any select element that is wrapped in a div with the class "select-ul-wrapper", hide the select, and create an unordered list that functions similar to a select element. When you select an item in the unordered list drop down, the hidden select element will also update.

Markup Example:
```html
<div class="select-ul-wrapper">
    <select>
        <option value="Service of Interest">Service of Interest</option>
        <option value="Service 1">Service 1</option>
        <option value="Service 2">Service 2</option>
        <option value="Service 3">Service 3</option>
        <option value="Service 4">Service 4</option>
        <option value="Service 5">Service 5</option>
    </select>
</div><!--END select-ul-wrapper-->
```