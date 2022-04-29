using NUnit.Framework;
using RestSharp;
using System;
using System.Net.Http;
using Newtonsoft.Json;

namespace TestingAPI
{
    [TestFixture]
    public class NonDataDrivenTests
    {
        private const string BASE_URL = "http://api.zippopotam.us";

        [Test]
        public void RetrieveDataForUs90210_ShouldYieldBeverlyHills()
        {
            var requestUrl = string.Format(BASE_URL, );
           
            HttpClient client;
            client = new HttpClient();
           
            var response = client.GetAsync(requestUrl).Result;
            var tt= JsonConvert.DeserializeObject<>(response.Content.ReadAsStringAsync().Result);

        }
    }
    }
