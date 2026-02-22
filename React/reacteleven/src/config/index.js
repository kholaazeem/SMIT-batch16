
import { createClient } from "@supabase/supabase-js";
const apiUrl = 'https://shxycwgpulaaykxfkpwd.supabase.co'
let apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNoeHljd2dwdWxhYXlreGZrcHdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0MjIzMjEsImV4cCI6MjA3OTk5ODMyMX0.EN-WcgudqkH0VwP6Qx6ZOcgguL479DWmtaU7pSQF41o'


const supabase = createClient(apiUrl, apikey);


export default supabase


