$(function(){
    $('#text-form').submit(function(event){
        event.preventDefault();
        var textToAnalyze = $('#user-text').val();
        // var words = textToAnalyze.split(/\s/g);

// Vincent alternative
          textToAnalyze = textToAnalyze.replace('.', ' ');
          var words = textToAnalyze.split(/\s+/g);

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

        textToAnalyze = $('#user-text').val();
        textToAnalyze = textToAnalyze.replace(/\n+/g,"");
        textToAnalyze = textToAnalyze.replace(/(\.\s)/g,".");

        var sentence = textToAnalyze.split(/[.!?]+/g);
        sentence = sentence.filter(function(s){
          return s.length>0;
        });
        console.log(sentence);

        var totalChar = 0;
        sentence.forEach(function(sent){
          totalChar = totalChar + sent.length;
        });
        var aveSentenceLength = (totalChar/sentence.length);

        $('#aveSentenceLength').text(aveSentenceLength);

        // Did not work:
        // var textToAnalyze = textToAnalyze.replace('\.','\|');
        // var sentenceLength = textToAnalyze.split(/\|/g);


        console.log(sentence);


        $('.text-report').show();
    });
});

// alternative way with less regx:

//   textToAnalyze = textToAnalyze.replace('.', ' ');
//   var words = textToAnalyze.split(/\s+/g);
