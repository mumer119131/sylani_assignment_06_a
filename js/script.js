
var originalStatement = document.getElementById('original-statement')
var output = document.getElementById('output')

//Alert Name
document.getElementById('alert-name').onclick = function(){

    let person = prompt("Please enter your name : ", "")
    if(person != null && person != ""){
        alert("Your name is " + person)
    }
}

//Alert Number
document.getElementById('alert-number').onclick = function(){
    alert(12432)
}

//Show Var Names
document.getElementById('show-var-names').onclick = function(){
    var query = `<ul>
    <li>A variable name can't contain any spaces.</li>
    <li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li>
    <li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords.
        For example, <code>userAlert</code> and <code>myVar</code> are legal.</li>
    <li>Capital letters are fine, but be careful. Variable names are case sensitive. A <code>rose</code> is not a
        <code>Rose</code>. If you assign the string "Floribundas" to the variable <code>rose</code>, and then ask JavaScript
        for the value assigned to <code>Rose</code>, you'll come up empty.</li>
    <li>I teach the camelCase naming convention. Why "camelCase"? Because there is a hump or
        two (or three) in the middle if the name is formed by more than one word. A camelCase
        name begins in lower case. If there's more than one word in the name, each subsequent
        word gets an initial cap, creating a hump. If you form a variable name with only one
        word, like <code>response</code>, there's no hump. It's a camel that's out of food. Please adopt the
        camelCase convention. It'll make your variable names more readable, and you'll be less
        likely to get variable names mixed up.</li>
    </ul>`
    originalStatement.innerHTML = "JavaScript has only a few rules for variable names:"
    output.innerHTML = query
}

//Show Camel Case
document.getElementById('show-camel-case').onclick = function(){
    query = ` <ul>
    <li>firebaseDatabase</li>
    <li>mongoOject</li>
    <li>dataJson</li>
    <li>jsonResponse</li>
    <li>outputData</li>
</ul>`
    originalStatement.innerHTML = "the use of a capital letter to begin the second word in a compound name or phrase, when it is not separated from the first word by a space"
    output.innerHTML = query
}

// Sum 2 Numbers
document.getElementById('sum-num').onclick = function(){
    query = `var num_1 = 10 <br>
    var num_2 = 13 <br>
    var sum = num_1 + num_2 <br>
    output.innerHTML = sum` 
    var num_1 = 10
    var num_2 = 13
    var sum = num_1 + num_2
    output.innerHTML = sum
    originalStatement.innerHTML = query
}

// Subtract 2 Numbers
document.getElementById('sub-num').onclick = function(){
    query = `var num_1 = 10 <br>
    var num_2 = 13 <br>
    var sub = num_1 - num_2 <br>
    output.innerHTML = sub` 
    var num_1 = 10
    var num_2 = 13
    var sub = num_1 - num_2
    output.innerHTML = sub
    originalStatement.innerHTML = query
}


// Subtract 2 Numbers
document.getElementById('mul-num').onclick = function(){
    query = `var num_1 = 10 <br>
    var num_2 = 13 <br>
    var mul = num_1 * num_2 <br>
    output.innerHTML = mul` 
    var num_1 = 10
    var num_2 = 13
    var mul = num_1 * num_2
    output.innerHTML = mul
    originalStatement.innerHTML = query
}


// Subtract 2 Numbers
document.getElementById('divide-num').onclick = function(){
    query = `var num_1 = 10 <br>
    var num_2 = 13 <br>
    var divide = num_1 / num_2 <br>
    output.innerHTML = divide` 
    var num_1 = 10
    var num_2 = 13
    var divide = num_1 / num_2
    output.innerHTML = divide
    originalStatement.innerHTML = query
}

// Subtract 2 Numbers
document.getElementById('cal-num').onclick = function(){
    query = `
    var cal = 12 * 3 / 4 + 9 - 1 / 5 <br>
    output.innerHTML = cal` 

    var cal = 12 * 3 / 4 + 9 - 1 / 5
    output.innerHTML = cal
    originalStatement.innerHTML = query
}

function clearStatement(){
    originalStatement.innerHTML = ""
}
function clearOutput(){
    output.innerHTML = ""
}