
/*

    REPO CLONE: https://github.com/flowerphp/flowerphp

 */

let LinkRepo = "https://github.com/flowerphp/flowerphp";
let Clone = require('git-clone');
let args = process.argv.slice(2);

if (!args[1] && !args[1])
{
    Clone(LinkRepo, "./app", {"checkout": "master"});
    return true;
}

if (args[1] !== "")
{
    if (args[0] !== "")
    {
        Clone(LinkRepo, args[1],{"checkout": args[0]});
        return true;
    } else {
        Clone(LinkRepo, args[1], {"checkout": "master"});
    }
    return true;
}

if (args[0] !== "")
{
    Clone(LinkRepo, "./app",{"checkout": args[0]});
    return true;
}