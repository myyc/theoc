var params = {
    competition: "{{comp}}",
    sport: "football",
    season: "{{season}}"
};

var def = new $jqOpta.Deferred;
def.done = function (a) {
    var s = a;
    console.log(a);
    $("#data").html(JSON.stringify(s))
};

var req = new $jqOpta.FeedRequest(
    $jqOpta.FeedRequest.FEED_F1,
    params,
    def,
    60
);
$jqOpta.FeedMonitor.requestFeed(req);
