# sc_progress
A simple progress UI for FiveM that works with all frameworks.

![Screenshot 2025-02-02 145204](https://github.com/user-attachments/assets/4e5ed7fa-8c0c-4f67-ad90-c6dff80afe6b)

## Usage client.lua

#### Show UI with text and key
```lua
exports.sc_progress:showNUI(time, message)

-- example

exports.sc_progress:showNUI(5000, "Loading...")
```

## Usage server.lua

#### Show UI with text and key
```lua
TriggerClientEvent("sc_progress:showNUI", playerId, time, message)

-- example

TriggerClientEvent("sc_progress:showNUI", playerId, 10000, "Loading...")
```

#### Example script (client.lua)
```lua
function startSearching(time, dict, anim, cb)
    local ped = GetPlayerPed(-1)
    canSearch = false

    RequestAnimDict(dict)
    while not HasAnimDictLoaded(dict) do
        Citizen.Wait(0)
    end

    exports.sc_progress:showNUI(time, Translation[Config.Locale]['search'])
    TaskPlayAnim(ped, dict, anim, 8.0, 8.0, time, 1, 1, 0, 0, 0)

    Wait(time)
    ClearPedTasks(ped)
    canSearch = true
    TriggerServerEvent(cb)
end
```

## Installation
Clone or download this repository

Add sc_progress to your resources directory

Add this in your server.cfg :
```
ensure sc_progress
```
