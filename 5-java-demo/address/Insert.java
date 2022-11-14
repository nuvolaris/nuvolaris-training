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

public class Insert {
     public static JsonObject main(JsonObject args) throws Exception {
        Class.forName("org.postgresql.Driver");
        String postgres = args.getAsJsonPrimitive("postgres").getAsString();
        Connection conn = DriverManager.getConnection(postgres);
  
        PreparedStatement prep = conn.prepareStatement(
            "insert into addr(name,phone,email) values(?,?,?)"
        );

        prep.setString(1, args.getAsJsonPrimitive("name").getAsString());
        prep.setInt(2, Integer.parseInt(args.getAsJsonPrimitive("phone").getAsString()));
        prep.setString(3, args.getAsJsonPrimitive("email").getAsString());

        JsonObject response = new JsonObject();
        response.addProperty("result", prep.executeUpdate());
        return response;
    }
}

