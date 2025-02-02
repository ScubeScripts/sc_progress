RegisterNetEvent("sc_progress:showNUI")
AddEventHandler("sc_progress:showNUI", function(timeMs, message)
    SendNUIMessage({
        type = "showProgress",
        time = timeMs,
        message = message
    })

    SetNuiFocus(false, false)
end)

exports("showNUI", function(timeMs, message)
    TriggerEvent("sc_progress:showNUI", timeMs, message)
end)


RegisterCommand("progress", function()
    exports.sc_progress:showNUI(15000, "Lädt...")
end, false)
