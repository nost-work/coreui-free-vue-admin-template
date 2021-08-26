<template>
  <div>
    <CRow>
      <CCol md="12">
        <CCard>
          <CCardHeader> 検証テスト </CCardHeader>
          <CCardBody>
            <CTableWrapper :fields="fields" :items="items" caption="お知らせ"></CTableWrapper>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import axios from "axios";
import CTableWrapper from "./base/Table.vue";

const headers = {
  "X-API-KEY": "278b7a01-4ef1-498c-8892-f4705425ec30"
};

export default {
  name: "Demo",
  components: {
    CTableWrapper
  },
  data() {
    return {
      fields: ["タイトル", "本文"],
      items: []
    };
  },
  methods: {},
  mounted() {
    axios
      .get("https://nost.microcms.io/api/v1/test", {
        headers: headers,
        data: {}
      })
      .then(res => {
        this.items = res.data.contents.map((data) => {
          const obj = {
            "タイトル": data.title,
            "本文": data.body
          }
          return obj
        });
      });
  }
};
</script>
