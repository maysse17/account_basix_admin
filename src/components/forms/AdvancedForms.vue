<template>
    <div class="animated fadeIn">

        <div class="col-xs-6 col-sm-6">
          <div class="card">
            <div class="card-header">
              <strong>Masked Input</strong><small>React Text Mask</small>
            </div>
            <div class="card-body card-block">
              <div class="form-group">
                <label class=" form-control-label">Date input</label>
                <div class="input-group">
                  <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
                  <input class="form-control">
                </div>
                <small class="form-text text-muted">ex. 99/99/9999</small>
              </div>
              <div class="form-group">
                <label class=" form-control-label">Phone input</label>
                <div class="input-group">
                  <div class="input-group-addon"><i class="fa fa-phone"></i></div>
                  <input class="form-control">
                </div>
                <small class="form-text text-muted">ex. (999) 999-9999</small>
              </div>
              <div class="form-group">
                <label class=" form-control-label">Taxpayer Identification Numbers</label>
                <div class="input-group">
                  <div class="input-group-addon"><i class="fa fa-usd"></i></div>
                  <input class="form-control">
                </div>
                <small class="form-text text-muted">ex. 99-9999999</small>
              </div>
              <div class="form-group">
                <label class=" form-control-label">Social Security Number</label>
                <div class="input-group">
                  <div class="input-group-addon"><i class="fa fa-male"></i></div>
                  <input class="form-control">
                </div>
                <small class="form-text text-muted">ex. 999-99-9999</small>
              </div>
              <div class="form-group">
                <label class=" form-control-label">Eye Script</label>
                <div class="input-group">
                  <div class="input-group-addon"><i class="fa fa-asterisk"></i></div>
                  <input class="form-control">
                </div>
                <small class="form-text text-muted">ex. ~9.99 ~9.99 999</small>
              </div>
              <div class="form-group">
                <label class=" form-control-label">Credit Card Number</label>
                <div class="input-group">
                  <div class="input-group-addon"><i class="fa fa-credit-card"></i></div>
                  <input class="form-control">
                </div>
                <small class="form-text text-muted">ex. 9999 9999 9999 9999</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xs-6 col-sm-6">
          <div class="card">
            <div class="card-header"><strong>Vue-Select</strong></div>

            <div class="card-body card-block">
              <h5 class="pb-2">Select Countries</h5>
              <v-select :options="['foo','bar','bars','basdfrs','basdrs','bardss']" multiple></v-select>
            </div>
          </div>
        </div>

    </div>
</template>


<script>
  import Vue from 'vue'
  import vSelect from 'vue-select'
  Vue.component('v-select', vSelect)
</script>
