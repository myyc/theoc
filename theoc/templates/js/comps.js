var params = {
    competition: "",
    cust_id: "default",
    trans_id: $jqOpta.settings.translation_id || 1,
    lang_id: "en_GB",
    sport_id: "1",
    season: "{{season}}"
};

var def = new $jqOpta.Deferred;
def.resolveWith = function (a, b) {
    a.done(b[0].d);
};
def.done = function(a) {
    var s = parseTeamsAndComps(a);
    $("#data").html(JSON.stringify(s))
}

var req = new $jqOpta.FeedRequest(
    $jqOpta.FeedRequest.FEED_TRANS_COMP,
    params,
    def,
    99999);
$jqOpta.FeedMonitor.requestFeed(req);
