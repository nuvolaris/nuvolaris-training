/*
# Licensed to the Apache Software Foundation (ASF) under one or more
# contributor license agreements.  See the NOTICE file distributed with
# this work for additional information regarding copyright ownership.
# The ASF licenses this file to You under the Apache License, Version 2.0
# (the "License"); you may not use this file except in compliance with
# the License.  You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
*/

import com.google.gson.*;
import java.sql.*;

public class Select {
     public static JsonObject main(JsonObject args) throws Exception {
        Class.forName("org.postgresql.Driver");
        String postgres = args.getAsJsonPrimitive("postgres").getAsString();
        Connection conn = DriverManager.getConnection(postgres);
        Statement stmt = conn.createStatement();
        
        ResultSet rs = stmt.executeQuery("SELECT id,name,phone,email from addr");
        JsonArray  result = new JsonArray();
        while(rs.next()) {
            JsonObject record = new JsonObject();
            record.addProperty("id", rs.getInt("id"));
            record.addProperty("name", rs.getString("name"));
            record.addProperty("phone", rs.getInt("phone"));
            record.addProperty("email", rs.getString("email"));
            result.add(record);
        }

        JsonObject response = new JsonObject();
        response.add("data", result);
        return response;
    }
}

