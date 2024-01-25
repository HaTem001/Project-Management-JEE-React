package com.enit.BackManagment.entity;



import jakarta.json.bind.adapter.JsonbAdapter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateAdapter implements JsonbAdapter<Date, String> {

    private final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    @Override
    public String adaptToJson(Date obj) throws Exception {
        return dateFormat.format(obj);
    }

    @Override
    public Date adaptFromJson(String obj) throws Exception {
        try {
            // Set time 00:00:00 if not specified in the input
            if (!obj.contains(" ")) {
                obj += " 00:00:00";
            }
            return dateFormat.parse(obj);
        } catch (ParseException e) {
            throw new RuntimeException("Error parsing date", e);
        }
    }
}
