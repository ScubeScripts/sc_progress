RegisterNetEvent("sc_progress:showNUI_Server")
AddEventHandler("sc_progress:showNUI_Server", function(source, timeMs, message)
    TriggerClientEvent("sc_progress:showNUI", source, timeMs, message)
end)
