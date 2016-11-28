// Code to compute and display in results section
// total word count
// unique word count of submitted text
// Average word length in characters
// Average sentence length in characters

// test script
// function countWords(str) {
//     var matches = str.match(/\S+/g);
//     return matches ? matches.length : 0;
// }

// my code:

// Get Text to Analyze
// $(function(){
//     $('#user-text').submit(function(event){
//         event.preventDefault();
//         var textToAnalyze = $( this ).val();
//
// // function for calculating the Total word count of the submitted text
//         function countWords(textToAalyze) {
//             var matches = textToAnalyze.match(/\S+/g);
//             return matches ? matches.length : 0;
//             console.log(matches);
//
//           //  or
//
//
//             var countWords = textToAnalyze.match(/(\w+)/g).length;
//             console.log(countWords);
//
//

  // vincent's solution:

  $(function(){
    $('#text-form').submit(function(event){
        event.preventDefault();
        var textToAnalyze = $('#user-text').val();
        var words = textToAnalyze.split(/\s/g);
        console.log(words);
        $('#wordCount').text(words.length);
        var counts = {};
        words.forEach(function(w){
            if(counts[w]){
                counts[w] = counts[w] + 1;
            }else{
                counts[w] = 1;
            }
        });

        console.log(counts);
        console.log(Object.keys(counts));
        $('#uniqueCount').text(Object.keys(counts).length);


        //average word length
        var sum = 0;
        words.forEach(function(w){
            sum = sum + w.length;
        });
        var average = sum/words.length;
        $('#averageLength').text(average);

        //sentence length

        $('.text-report').show();
    });
});

// function for calculating the Unique word count of the submitted text
// How : create an array of words from the textToAnalyze, eliminate matches, and count results





// function for calculating the Average word length in characters of the submitted text
// How: take the array of words and count each length and divide by total characters in each




// function for calculating Average sentence length in characters of the submitted text.
// create array of sentences by seperating them by locating . then count the length of each element in array

// jquery to remove hidden class when result is present
