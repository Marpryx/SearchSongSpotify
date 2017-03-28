// fires fetch songs request after clicking on Submit
$(function(){
    $("#submitButton").click(function(){
        console.log(getGroup());
        fetchSongs(getGroup());
    }
    );
});

// returns input from the group text field
function getGroup(){
    return $('#favoriteGroup').val();
}

    // fetches songs and updates page with the list
function fetchSongs(favoriteGroup) {

        var request = $.ajax({
            url: 'http://ec2-54-174-192-247.compute-1.amazonaws.com:8080/SpotifySongsFinder/webresources/songs?artist=' + favoriteGroup,
            type: "GET",
            dataType: "json"
        });


        request.done(function (data) {

            console.log('data that came back', data);

            if (data.songs != undefined && data.songs.length > 0) {

                var _html_list = "<ul>";
                $.each(data.songs, function (index, url) {
                    _html_list += "<li>" + "<a href='"+ url +"' target='_blank'>" + "track #" + (index+1) + "</a>" + "</li>";
                });
                _html_list += "</ul>";
                $(document).find("#song_list").html(_html_list);
            } else
            console.log("nothing in the array");
        });

    }
